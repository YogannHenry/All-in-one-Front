import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Counter from './Counter/Counter';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';

import { Task } from '../../../../@types';



const API_URL = 'http://localhost:3002/api/list';

function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { listId } = useParams();

  const getTasks = async () => {
    const { data } = await axios.get(`${API_URL}/${listId}/task`);
    setTasks(data);
    console.log("getTasks",data)
  };

  const addTask = async (newTask: string) => {
    const { data } = await axios.post(`${API_URL}/${listId}/task`, {
      name: newTask,
    });
    setTasks(data);
    getTasks();
  };

  const updateTask = async (id: number) => {
    const { data } = await axios.put(`${API_URL}/task/${id}`);

    // `data` est la tâche modifiée
    // dans mon tableau des tâches `tasks`, je dois remplacer
    // l'ancienne tâche par celle-ci
    // → à partir de `tasks`, je crée un nouveau tableau (`map()`)
    // si la tâche est celle à remplacer,
    // alors je retourne la tâche modifiée
    // sinon je la retourne telle quelle
    const updatedTasks = tasks.map((task) => (task.id === id ? data : task));

    setTasks(updatedTasks);
  };

  const deleteTask = async (id: number) => {
    const { data } = await axios.delete(`${API_URL}/task/${id}`);
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, [listId]);
  /*
    je veux les tâches non effectuées puis les effectuées
    je crée des tableaux intermédiaires
  */
  const tasksNotDone = tasks.filter(({ done }) => !done);
  const tasksDone = tasks.filter(({ done }) => done);
  // je crée un nouveau tableau trié
  const tasksSorted = [...tasksNotDone, ...tasksDone];

  return (
    <div className="w-screen h-screen">
    <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen bg-base-200">
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
