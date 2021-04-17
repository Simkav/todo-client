import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskList = props => {
  const {
    tasks,
    getTasksRequest,
    updateTaskRequest,
    deleteTaskRequest,
    isFetching,
    error,
  } = props;

  const loadTasks = () => getTasksRequest();
  useEffect(() => {
    loadTasks();
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
                  updateTaskRequest({ id, values: { isDone: checked } });
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

const mapStateToProps = ({ task: { tasks, error, isFetching } }) => ({
  tasks,
  error,
  isFetching,
});

const mapDispatchToProps = dispatch => ({
  deleteTaskRequest: id => dispatch(TaskActionCreators.deleteTaskRequest(id)),
  updateTaskRequest: ({ id, values }) =>
    dispatch(TaskActionCreators.updateTaskRequest({ id, values })),
  getTasksRequest: () => dispatch(TaskActionCreators.getTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
