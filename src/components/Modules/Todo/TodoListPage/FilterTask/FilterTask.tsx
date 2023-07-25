import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Task } from '../../../../../@types';

const API_URL = 'http://localhost:3002/api/list';

interface List {
  name: string;
  // Add other properties if available in the API response
}

function FilterTask() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { listId } = useParams();

  const getTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    setTasks(data);
  };

  const getNotDoneTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    const filteredTasks = data.filter(task => task.status === false);
    setTasks(filteredTasks);
  };

  const getDoneTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    const filteredTasks = data.filter(task => task.status === true);
    setTasks(filteredTasks);
  };

  const deleteAllTasks = async (id: number) => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    

    if (data.status === true) {
      await axios.delete(`${API_URL}/task`);
    }
    
    // Mettre à jour la liste des tâches après la suppression
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, [listId]);

  const tasksNotDone = tasks.filter(({ status }) => !status);
  const tasksDone = tasks.filter(({ status }) => status);
  // je crée un nouveau tableau trié
  const tasksSorted = [...tasksNotDone, ...tasksDone];


  return (
    <>
      <div className="flex justify-around ">
        <span className="px-2">Tàches</span>
        <button onClick={getNotDoneTasks} className="px-2">Actives</button>
        <button onClick={getDoneTasks} className="px-2">Terminées</button>
      </div>
      <button onClick={deleteAllTasks} className="clear">Nettoyer</button>
    </>
  );
}

export default FilterTask;
