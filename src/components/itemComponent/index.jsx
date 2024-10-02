import { Button, Flex, Typography } from 'antd';
import styles from './styles.module.css';
import { removeTodo, toggleCompleteTodo } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

function ItemComponent({ id, title, completed }) {
  const dispatch = useDispatch();

  console.log(completed);

  return (
    <Flex gap="middle">
      {completed && <Typography.Text delete="true">{title}</Typography.Text>}
      {!completed && <Typography.Text>{title}</Typography.Text>}
      <Button
        variant="solid"
        color="primary"
        onClick={() => dispatch(toggleCompleteTodo(id))}
      >
        Complete
      </Button>
      <Button
        variant="solid"
        color="danger"
        onClick={() => dispatch(removeTodo(id))}
      >
        Remove
      </Button>
    </Flex>
  );
}

export default ItemComponent;
