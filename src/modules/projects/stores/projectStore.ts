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

  return {
    //Properties
    projects,
    //Computed
    //Computed constant to send the projects value that means all array elements
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    //Functions
    addProject,
  };
});
