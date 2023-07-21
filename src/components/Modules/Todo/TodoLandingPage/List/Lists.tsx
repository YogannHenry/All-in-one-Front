import { List } from '../../../../../@types';
import ListItem from './ListItem';

interface ListsProps {
  listTodo: List[];

  deleteList: (id: number) => Promise<void>;
}

function Lists({ listTodo, deleteList }: ListsProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        {listTodo.map((list) => (
          <ListItem key={list.id} List={list} deleteList={deleteList} />
        ))}
      </div>
    </div>
  );
}

export default Lists;
