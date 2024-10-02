import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import ItemComponent from './../itemComponent';
import { Flex, Typography } from 'antd';

function ListComponent() {
  const todos = useSelector((state) => state.todos.data);

  if (!todos.length) return;
  return (
    <Flex align="center" gap="small" vertical className={styles.list_container}>
      <Typography.Title>Todo List</Typography.Title>
      {todos.map((todo) => (
        <ItemComponent key={todo.id} {...todo} />
      ))}
    </Flex>
  );
}

export default ListComponent;
