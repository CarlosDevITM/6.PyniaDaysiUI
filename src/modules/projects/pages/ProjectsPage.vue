<!-- Table from DaisyUI-->
<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <!-- Rows -->
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>
  <AddButton position="bottom-right" @click="clickedButton = true">
    <addIcon></addIcon>
  </AddButton>

  <InputModal
    :open="clickedButton"
    @close="clickedButton = false"
    @value="onNewValue($event)"
    title="Ingresa el nombre de tu proyecto"
  ></InputModal>
</template>

<script lang="ts" setup>
import AddButton from '@/modules/common/components/AddButton.vue';

import addIcon from '@/modules/common/components/icons/addIcon.vue';

import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';

const clickedButton = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ newValue: projectName });
};
</script>
