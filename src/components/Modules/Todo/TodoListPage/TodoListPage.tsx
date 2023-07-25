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

  const getNotDoneTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    const filteredTasks = data.filter((task) => task.status === false);
    setTasks(filteredTasks);
    console.log('filteredTasks', filteredTasks);
  };

  const getDoneTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    const filteredTasks = data.filter((task) => task.status === true);
    setTasks(filteredTasks);
    console.log('filteredTasks', filteredTasks);
  };

  const deleteAllTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);

    // Filtrer les tâches ayant le statut true
    const tasksToDelete = data.filter((task) => task.status === true);

    // Supprimer chaque tâche ayant le statut true
    for (const task of tasksToDelete) {
      await axios.delete(`${API_URL}/task/${task.id}`);
    }

    // Mettre à jour la liste des tâches après la suppression
    getTasks();
  };

  const [sortingType, setSortingType] = useState<
    'all' | 'active' | 'completed'
  >('all');

  const tasksNotDone = tasks.filter(({ status }) => !status);
  const tasksDone = tasks.filter(({ status }) => status);
  let tasksSorted = [...tasksNotDone, ...tasksDone];
  if (sortingType === 'active') {
    tasksSorted = tasks.filter(({ status }) => !status);
  } else if (sortingType === 'completed') {
    tasksSorted = tasks.filter(({ status }) => status);
  }

  useEffect(() => {
    getTasks();

    getOneList();
  }, [listId, list]);

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
        <div className="flex items-center justify-between w-2/4 px-5 h-14 text-xs text-slate-500">
          <Counter nbTasksNotDone={tasksNotDone.length} />
          <div className="flex justify-around ">
            <button onClick={() => setSortingType('all')} className="px-2">
              Toutes les Tâches
            </button>
            <button onClick={() => setSortingType('active')} className="px-2">
              Actives
            </button>
            <button
              onClick={() => setSortingType('completed')}
              className="px-2"
            >
              Terminées
            </button>
          </div>
          <button onClick={deleteAllTasks} className="clear">
            Nettoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
