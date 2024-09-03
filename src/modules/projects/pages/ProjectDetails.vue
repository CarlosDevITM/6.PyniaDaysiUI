<template>
  <NavBreadCrumbs :name="project?.name ?? 'No name'"></NavBreadCrumbs>
</template>

<script setup lang="ts">
import NavBreadCrumbs from '@/modules/common/components/NavBreadCrumbs.vue';
import { ref, watch } from 'vue';
import { useProjectStore } from '../stores/projectStore';
import type { Project } from '../interfaces/IProjects';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const projectStore = useProjectStore();
const project = ref<Project | null>();

//Observar si el link de la página es cambiado.

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
  },
  //Ejecutar tan pronto en componente se monte
  {
    immediate: true,
  },
);
</script>
