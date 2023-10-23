import { getAPI } from "../utils/config";
import { Task } from "../@types";

export const TodoListApi = {
  getLists: async () => {
    const { data } = await getAPI().get(`/list`);
    return data;
  },

  getTasksForList: async (listId: number) => {
    const { data } = await getAPI().get(`/list/${listId}/task`);
    const filteredTasks = data.filter((task: Task) => task.status === false);
    return filteredTasks;
  },

  createList: async (name: string, userId: number) => {
    const { data } = await getAPI().post(`/list`, {
      name,
      userId,
    });
    return data;
  },

  updateList: async (listId: number, name: string) => {
    const { data } = await getAPI().put(`/list/${listId}`, {
      name,
    });
    return data;
  },

  deleteList: async (id: number) => {
    const { data } = await getAPI().delete(`/list/${id}`);
    return data;
  },
};
