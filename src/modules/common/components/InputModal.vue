<template>
  <dialog id="my_modal_1" class="modal" :open="props.open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ props.title ?? 'Titulo del proyecto' }}</h3>
      <p class="py-4">
        {{ props.subtitle }}
      </p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <!-- Project input-->

          <input
            ref="inputRef"
            type="text"
            placeholder="Nombre del proyecto"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Accept</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <!--Bloquear el fondo -->
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left- z-10 bg-black-opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  //Close button
  close: [void];
  //Project input
  value: [text: string];
}>();

const inputValue = ref('');

//Focus a nuestro input.
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  console.log({ originalValue: inputValue.value });
  if (!inputValue.value) {
    //Control focus
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');
};
</script>
