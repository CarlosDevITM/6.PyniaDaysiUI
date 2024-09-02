<!-- Table from DaisyUI-->
<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <!-- Rows -->
        <!--Using Pinia-->
        <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <!--Progress BAR from DaisyUI-->
          <td><progress class="progress progress-success w-56" value="10" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
  </div>
  <AddButton position="bottom-right" @click="clickedButton = true">
    <addIcon></addIcon>
  </AddButton>

  <AddButton position="bottom-left" @click="modalSlotOpen = true">
    <addIcon></addIcon>
  </AddButton>

  <InputModal
    :open="clickedButton"
    @close="clickedButton = false"
    @value="projectStore.addProject($event)"
    title="Ingresa el nombre de tu proyecto"
  ></InputModal>

  <CustomModal :open="modalSlotOpen">
    <template #header>
      <h1 class="text-3xl bold">Ingresa el nombre de tu proyecto</h1>
    </template>

    <template #body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit in dolorem, commodi quas
        pariatur obcaecati quod autem perferendis iste, quaerat, architecto eius doloremque dolor
        libero fugiat eveniet possimus necessitatibus quis.
      </p>
    </template>

    <template #actions>
      <div class="flex justify-end mt-5">
        <button @click="modalSlotOpen = false" class="btn mr-4">Close</button>
        <button type="submit" class="btn btn-primary">Accept</button>
      </div>
    </template>
  </CustomModal>
</template>

<script lang="ts" setup>
import AddButton from '@/modules/common/components/AddButton.vue';

import addIcon from '@/modules/common/icons/addIcon.vue';

import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';

import CustomModal from '@/modules/common/components/CustomModal.vue';
import { useProjectStore } from '../stores/projectStore';
const clickedButton = ref(false);
const modalSlotOpen = ref(false);

//PINIA
const projectStore = useProjectStore();
</script>
