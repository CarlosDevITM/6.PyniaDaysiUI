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
            <tr class="hover">
              <td>Si</td>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all"
                  placeholder="Ingresa una nueva tarea"
                />
              </td>
              <td>Completada</td>
            </tr>
          </tbody>
        </table>
      </div>
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

//Observar si el link de la página es cambiado.

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
