<template>
  <!-- Float button from DaisyUI-->
  <button @click="$emit('click')" :class="['btn btn-circle fixed', position]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
//Enviar cada que se hace click al boton.
defineEmits(['click']);
//Icono
//Crear una interfaz con las posibles ubicaciones del boton.
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
//Definir las propiedades con una propiedad por defecto
withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});
</script>

<style>
.bottom-right {
  @apply bottom-10 right-10;
}
.top-left {
  @apply top-10 left-10;
}
.top-right {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
</style>
