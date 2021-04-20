import { Formik, Form, Field } from 'formik';
import {  useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { createTaskRequest } = bindActionCreators(
    TaskActionCreators,
    dispatch
  );
  const onSubmit = (values, formikBag) => {
    createTaskRequest(values);
    formikBag.resetForm();
  };

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <Formik initialValues={{ body: '', deadline: minDate }} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' min={minDate} />
        <button type='submit'>Create Task</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
