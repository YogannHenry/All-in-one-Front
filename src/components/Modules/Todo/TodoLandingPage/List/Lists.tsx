import ListesItem from './ListesItem';
import './style.scss';



function Listes({ list, updateList, deleteList }: ListesProps) {
  return (
    
    <div className="card w-full bg-base-100 shadow-xl">
    <div className="card-body">
      {lists.map((list) => (

      ))}
      </div>
    </div>
  );
}

export default Listes;
