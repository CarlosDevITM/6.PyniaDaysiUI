import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/IProjects';
import { v4 as uuidv4 } from 'uuid';

//Array de prueba
const initialLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [],
    },

    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [],
    },
  ];
};

//Funcion de pinia
export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  return {
    //Properties

    //Computed
    //Computed constant to send the projects value that means all array elements
    projectList: computed(() => [...projects.value]),

    //Functions
    addProject,
  };
});
