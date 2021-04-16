import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskForm = props => {
  const { createTaskAction } = props;
  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <Formik
      initialValues={{ body: '', selectedDate: minDate }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' />
        <Field name='selectedDate' type='date' min={minDate} />
        <button type='submit'>Create Task</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTaskAction: values => {
    dispatch(TaskActionCreators.createTaskRequest(values));
  },
});

export default connect(null, mapDispatchToProps)(TaskForm);
