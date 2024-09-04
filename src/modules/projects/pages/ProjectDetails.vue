<template>
  <div class="w-full">
    <section class="m-2">
      <NavBreadCrumbs :name="project?.name ?? 'No name'"></NavBreadCrumbs>
    </section>

    <!-- table-->
    <section>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">#</th>
              <th>Tarea</th>
              <th>Completada</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 2 -->
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <!-- Checkbox to check tasks-->
              <td>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectStore.toggleTasks(project?.id ?? '', task.id)"
                />
              </td>

              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <input
        type="text"
        class="input input-primary w-full opacity-60 transition-all"
        placeholder="Ingresa una nueva tarea"
        @keyup.enter="addTask"
        v-model="taskText"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBreadCrumbs from '@/modules/common/components/NavBreadCrumbs.vue';
import { ref, watch } from 'vue';
import { useProjectStore } from '../stores/projectStore';
import type { Project } from '../interfaces/IProjects';
import router from '@/router';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const projectStore = useProjectStore();
const project = ref<Project | null>();

//INPUT VALUE
const taskText = ref('');

//Observar si el link de la página es cambiado.

const addTask = () => {
  if (!project.value) return;
  projectStore.addTask(project.value.id, taskText.value);
  //Limpiar caja de texto.
  taskText.value = '';
};
watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
    if (!project.value) {
      router.replace('/');
    }
  },
  //Ejecutar tan pronto en componente se monte
  {
    immediate: true,
  },
);
</script>
