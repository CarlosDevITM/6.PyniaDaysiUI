<template>
  <div class="flex flex-col">
    <!-- Top menu-->
    <TopMenu></TopMenu>

    <main class="flex flex-row">
      <!-- Side Menu-->
      <SideMenu></SideMenu>
      <!--Router View-->
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
