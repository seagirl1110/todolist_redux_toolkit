import styles from './styles.module.css';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from './../../redux/slices/todosSlice';

function FormComponent() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const todo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    dispatch(addTodo(todo));
    setValue('');
  };

  return (
    <Form className={styles.form_container} onFinish={handleSubmit}>
      <Input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        placeholder="Enter new todo"
        required
      />
      <Button
        className={styles.btn_submit}
        block
        htmlType="submit"
        type="primary"
      >
        Add todo
      </Button>
    </Form>
  );
}

export default FormComponent;
