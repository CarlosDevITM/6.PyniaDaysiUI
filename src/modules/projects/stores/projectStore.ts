import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Project } from '../interfaces/IProjects';

//Array de prueba
const initialLoad = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Project 1',
      tasks: [],
    },

    {
      id: '2',
      name: 'Project 2',
      tasks: [],
    },
  ];
};

//Funcion de pinia
export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());
  return { projects };
});
