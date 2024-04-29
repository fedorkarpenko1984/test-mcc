<template>
  <div
    class="w-[100vw] h-[calc(100vh-72px)] bg-[rgba(79,79,79,0.6)] fixed top-[72px] left-0 center z-10"
    @click="$emit('close:modal')"
  >
    <div @click.stop>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "close:modal"): void
}>()
</script>
