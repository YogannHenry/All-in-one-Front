import { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from '../../../../@types';
import Form from './Form/Form';
import Lists from './List/Lists';

const API_URL = 'http://localhost:3000/api';

function TodoList() {
  const [lists, setLists] = useState<List[]>([]);

  const getLists = async () => {
    const { data } = await axios.get(`${API_URL}/list`);
    setLists(data);
  };
  const addList = async (newList: string) => {
    const { data } = await axios.post(`${API_URL}/list`, {
      label: newList,
    });
    setLists(data);
  };

  const deleteList = async (id: number) => {
    const { data } = await axios.delete(`${API_URL}/list/${id}`);
    setLists(data);
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-base-200">
      <div className="max-w-full w-11/12 md:w-3/4 lg:w-1/2 px-4 flex flex-col items-center">
        <h1 className="text-4xl mb-10">TodoList</h1>
        <Form addList={addList} />
        <Lists deleteList={deleteList} listTodo={[]} />
      </div>
    </div>
  );
}

export default TodoList;
