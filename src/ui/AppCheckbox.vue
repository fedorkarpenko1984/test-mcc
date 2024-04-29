<template>
  <div
    class="w-5 h-5 box-border border-[1px] border-solid border-[#D2D2D2] relative rounded-[2px] cursor-pointer"
    @click="update"
  >
    <CheckboxMarkIcon
      v-if="modelValue"
      class="absolute top-1 left-[3px]"
    />
  </div>
</template>

<script setup lang="ts">
import { CheckboxMarkIcon } from './icons'

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", paiload: boolean): void
}>()
function update() {
  props.modelValue
    ? emit("update:modelValue", false)
    : emit("update:modelValue", true)
}
</script>

<style scoped>

</style>