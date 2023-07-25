import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import Counter from './Counter/Counter';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';

import { Task } from '../../../../@types';

const API_URL = 'http://localhost:3002/api/list';

interface List {
  name: string;
  // Add other properties if available in the API response
}


function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [list, setList] = useState([]);

  const { listId } = useParams();

  const getOneList = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}`);
    setList(data);
  };

  const getTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    setTasks(data);
  };

  const addTask = async (newTask: string) => {
    const { data } = await axios.post(`${API_URL}/${listId}/task`, {
      name: newTask,
    });
    setTasks(data);
    getTasks();
  };

  const updateTask = async (id: number, updatedTaskData: any) => {
    const { data } = await axios.put(`${API_URL}/task/${id}`, updatedTaskData);

    const updatedTasks = tasks.map((task) => (task.id === id ? data : task));

    setTasks(updatedTasks);
  };

  const deleteTask = async (id: number) => {
    const { data } = await axios.delete(`${API_URL}/task/${id}`);
    getTasks();
  };

  useEffect(() => {
    getTasks();
    getOneList();
  }, [listId, list]);

  /*
    je veux les tâches non effectuées puis les effectuées
    je crée des tableaux intermédiaires
  */
  const tasksNotDone = tasks.filter(({ status }) => !status);
  const tasksDone = tasks.filter(({ status }) => status);
  // je crée un nouveau tableau trié
  const tasksSorted = [...tasksNotDone, ...tasksDone];
  const listName = list.map((list) => list.name);

  return (
    <div className="w-screen h-screen">
      <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen w-screen bg-base-200">
        <p className="text-4xl mb-10">{listName}</p>
        <Form addTask={addTask} />

        <Tasks
          list={tasksSorted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <div className="flex items-center justify-between px-5 h-14 text-xs text-slate-500">
          <Counter nbTasksNotDone={tasksNotDone.length} />
          <div className="flex justify-around ">
            <span className="px-2">Tàches</span>
            <span className="px-2">Actives</span>
            <span className="px-2">Terminées</span>
          </div>
          <span className="clear">Nettoyer</span>
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
