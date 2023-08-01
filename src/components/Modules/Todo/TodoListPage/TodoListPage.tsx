import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Counter from './Counter/Counter';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import API_URL from '../../../API_URL';
import { Task } from '../../../../@types';


interface List {
  id: number;
  name: string;
}

interface UpdatedTask {
  id: number;
  name: string;
  status: boolean;
}

function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [list, setList] = useState<List[]>([]);

  //useParams permet de récupérer les paramètres de l'url
  const { listId } = useParams();

  const getOneList = async () => {
    const { data } = await axios.get(`${API_URL}/list/${listId}`);
    setList(data);
  };

  const getTasks = async () => {
    const { data } = await axios.get(`${API_URL}/list/${listId}/task`);
    setTasks(data);

  };

  const addTask = async (newTask: string) => {
    const { data } = await axios.post(`${API_URL}/list/${listId}/task`, {
      name: newTask,
    });
    setTasks(data);
    getTasks();
   
  };

  const updateTask = async (id: number, updatedTaskData: Task) => {
    const { data } = await axios.put(`${API_URL}/list/task/${id}`, updatedTaskData);

    const updatedTasks = tasks.map((task:Task) => (task.id === id ? data : task));

    setTasks(updatedTasks);
    getTasks();
  };

  const deleteTask = async (id: number) => {
    const { data } = await axios.delete(`${API_URL}/list/task/${id}`);
    setTasks(tasks => tasks.filter(task => task.id !== id));
  
  };



  const deleteAllTasks = async () => {
    const { data } = await axios.get(`${API_URL}/list/${listId}/task`);

    // Filtrer les tâches ayant le statut true
    const tasksToDelete = data.filter((task:Task) => task.status === true);

    // Supprimer chaque tâche ayant le statut true
    for (const task of tasksToDelete) {
      await axios.delete(`${API_URL}/task/${task.id}`);
    }

    // Mettre à jour la liste des tâches après la suppression
    getTasks();
  };
  
  const tasksNotDone = tasks.filter(({ status }) => !status);
  const tasksDone = tasks.filter(({ status }) => status);
  let tasksSorted = [...tasksNotDone, ...tasksDone];

  const [sortingType, setSortingType] = useState<'all' | 'active' | 'completed'> ('all');
  
  if (sortingType === 'active') {
    tasksSorted = tasks.filter(({ status }) => !status);
  } else if (sortingType === 'completed') {
    tasksSorted = tasks.filter(({ status }) => status);
  }

  useEffect(() => {
    getTasks();

    getOneList();
  }, [listId]);

  const listName = list.map((list) => list.name);

  return (
    <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen w-screen bg-base-200">
      
        <p className="text-4xl mb-10 uppercase">{listName}</p>
        <Form addTask={addTask} />

        <Tasks
          list={tasksSorted}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <div className="flex items-center justify-between max-lg:w-full w-2/4 px-5 h-14 text-xs text-slate-500 pt-10">
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
  );
}

export default TodoListPage;
