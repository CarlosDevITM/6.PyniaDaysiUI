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
  <AddButton position="bottom-right" @click="() => console.log('clicked')">
    <addIcon></addIcon>
  </AddButton>
</template>

<script lang="ts" setup>
import AddButton from '@/modules/common/components/AddButton.vue';

import addIcon from '@/modules/common/components/icons/addIcon.vue';
</script>
