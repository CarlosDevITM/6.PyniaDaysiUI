<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <!--Header: Title and subtitle -->
      <div class="border-b border-blue-500">
        <slot name="header"></slot>
      </div>

      <!-- BODY-->
      <div class="my-5 border-t border-t-green-400">
        <slot name="body"></slot>
      </div>

      <!--Footer Buttons-->
      <div class="border-t border-t-red-500 pt-2">
        <slot name="actions"></slot>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left- z-10 bg-black-opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
