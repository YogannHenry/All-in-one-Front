import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import {getAPI} from '../../../../utils/config';
import { Task } from '../../../../@types';
import authConnexion from '../../../../hooks/authConnexion';

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
  const { isUserLogged } = authConnexion();
  const [tasks, setTasks] = useState<Task[]>([]);

  const [list, setList] = useState<List[]>([]);

  //useParams permet de récupérer les paramètres de l'url
  const { listId } = useParams();

  const getOneList = async () => {
    const { data } = await getAPI().get(`/list/${listId}`);
    setList(data);
  };

  const getTasks = async () => {
    const { data } = await getAPI().get(`/list/${listId}/task`);
    setTasks(data);

  };

  const getTasksDone = async () => {
    const { data } = await getAPI().get(`/list/${listId}/task`);
    const filteredTasks = data.filter((task: Task) => task.status === false);
    setTasks(filteredTasks);
  };

  const getTasksUnDone = async () => {
    const { data } = await getAPI().get(`/list/${listId}/task`);
    const filteredTasks = data.filter((task: Task) => task.status === true);
    setTasks(filteredTasks);
  };

  const addTask = async (newTask: string) => {
    const { data } = await getAPI().post(`/list/${listId}/task`, {
      name: newTask,
    });
    setTasks(data);
    getTasks();
   
  };

  const updateTask = async (id: number, updatedTaskData: any) => {
    const { data } = await getAPI().put(`/list/task/${id}`, updatedTaskData);

    const updatedTasks = tasks.filter((task:Task) => (task.id === id ? data : task));

    setTasks(updatedTasks);
    getTasks();
  };

  const updateTaskName = async (id: number, updatedTasksName: string): Promise<void> => {  
    const { data } = await getAPI().put(`/list/task/${id}`, updatedTasksName);

    const newTasksName = tasks.filter((task:Task) => (task.id === id ? data : task));

    setTasks(newTasksName);
    getTasks();
  };


  const deleteTask = async (id: number) => {
    const { data } = await getAPI().delete(`/list/task/${id}`);
    setTasks(tasks => tasks.filter(task => task.id !== id));
  
  };



  const deleteAllTasks = async () => {
    try {
      const { data } = await getAPI().get(`/list/${listId}/task`);
    
      const tasksToDelete = data.filter((task: Task) => task.status === true);
    
      for (const task of tasksToDelete) {
        await getAPI().delete(`/list/task/${task.id}`);
      }
    
      getTasks();
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression des tâches :", error);
    }
  };
  
    
  const tasksNotDone = tasks.filter(({ status }) => !status);
  const tasksDone = tasks.filter(({ status }) => status);
  let tasksSorted = [...tasksNotDone, ...tasksDone];
 

  useEffect(() => {

    getTasks();

    getOneList();
  }, [listId, isUserLogged]);

  const listName = list.map((list) => list.name);

  return (
    <div className="max-md:px-4 flex items-center flex-col pt-20 h-screen w-screen bg-base-200">
      
        <p className="text-4xl mb-10 uppercase">{listName}</p>
        <Form addTask={addTask} />

        <Tasks
          listTask={tasksSorted}
          updateTask={updateTask}
          deleteTask={deleteTask}
          updateTaskName={updateTaskName}
        />
        <div className="flex items-center justify-between max-lg:w-full w-2/4 px-5 h-14 text-xs text-slate-500 pt-10">
          <Counter nbTasksNotDone={tasksNotDone.length} />
          <div className="flex justify-around ">
            <button onClick={() => getTasks()} className="px-2">
              Toutes les Tâches
            </button>
            <button onClick={() => getTasksDone()} className="px-2">
              Actives
            </button>
            <button
              onClick={() => getTasksUnDone()}
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