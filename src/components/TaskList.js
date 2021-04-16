import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskList = props => {
  const { tasks, getTasksRequest } = props;

  const loadTasks = () => getTasksRequest();
  useEffect(() => {
    loadTasks();
  });
  return (
    <ul>
      {tasks.map(task => {
        return (
          <li key={task.id}>
            <div>{task.body}</div>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ task: { tasks } }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  deleteTaskRequest: id => dispatch(TaskActionCreators.deleteTaskRequest(id)),
  updateTaskRequest: ({ id, values }) =>
    dispatch(TaskActionCreators.updateTaskRequest({ id, values })),
  getTasksRequest: () => dispatch(TaskActionCreators.getTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
