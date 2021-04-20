import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskList = () => {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();

  const {
    getTasksRequest,
    updateTaskRequest,
    deleteTaskRequest,
  } = bindActionCreators(TaskActionCreators, dispatch);

  useEffect(() => {
    getTasksRequest();
  }, []);
  return (
    <section>
      {error && JSON.stringify(error)}
      <div>TaskList</div>
      {isFetching && 'Loading...'}
      <ul>
        {tasks.map(({ id, ...task }) => {
          return (
            <li key={id}>
              <div>{task.body}</div>
              <div>{task.deadline.slice(0, 10)}</div>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) => {
                  updateTaskRequest({
                    id,
                    values: { isDone: checked },
                  });
                }}
              />
              <button
                onClick={() => {
                  deleteTaskRequest(id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TaskList;
