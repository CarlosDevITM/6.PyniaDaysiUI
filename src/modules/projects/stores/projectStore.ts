import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/IProjects';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

//Funcion de pinia
export const useProjectStore = defineStore('projects', () => {
  //Local storage
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  //Local storage
  // const tasks = ref(useLocalStorage<Task[]>('tasks', []));

  const addTask = (projectId: string, taskName: string) => {
    if (taskName.length === 0) return;

    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    project.tasks.push({
      id: uuidv4(),
      name: taskName,
    });
  };

  //Toggle TASKS
  const toggleTasks = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);

    if (!project) return;

    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };
  return {
    //Properties
    projects,
    //Computed
    //Computed constant to send the projects value that means all array elements
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    progressTaskBar: computed(() => {
      return projects.value.map((projects) => {
        const total = projects.tasks.length;
        const completed = projects.tasks.filter((t) => t.completedAt).length;
        const completion = total === 0 ? 0 : (completed / total) * 100;

        return {
          id: projects.id,
          name: projects.name,
          completition: Math.round(completion),
          taskCount: total,
        };
      });
    }),

    //Functions
    addProject,
    addTask,
    toggleTasks,
  };
});
