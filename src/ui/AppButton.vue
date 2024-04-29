<template>
  <button
    class="text-base rounded-lg"
    :style="styles"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  type: 'default' | 'primary',
}>()

const background = ref<string>('')
const color = ref<string>('')
const border = ref<string>('')

if (props.type === 'default') {
  color.value = '#777777'
  border.value = '#A6A8A9'
} else if (props.type === 'primary') {
  background.value = '#42B277'
  color.value = 'white'
}

const styles = computed<string>(() => {
  let _styles = `background: ${background.value}; color: ${color.value};`
  return border.value === '' ? _styles : _styles + `border: 1px solid ${border.value}`
})
</script>

<style scoped>

</style>