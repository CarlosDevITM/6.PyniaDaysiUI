<template>
  <!--                   COLOR        WIDTH   HEIGHT-->
  <aside class="bg-base-200 w-72 min-h-screen">
    <!--             Text large  BOLD   margin l and r -->
    <h2 class="text-lg font-bold mx-4">Proyectos</h2>
    <!--              Small text    Text color   margin l and r-->
    <!-- IF there´s no projects-->
    <p v-if="projectStore.noProjects" class="text-sm text-gray-500 mx-4">No hay proyectos</p>

    <!--Daisy UI Side Menu-->
    <!-- If there are-->
    <ul v-else class="menu">
      <li v-for="project in projectStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <!-- Project's name if there´s tasks.-->
            <summary>
              <RouterLink :to="`/project/${project.id}`">
                {{ project.name }}
              </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>

        <!-- If there´s no tasks-->
        <template v-else>
          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useProjectStore } from '../stores/projectStore';

const projectStore = useProjectStore();
</script>
