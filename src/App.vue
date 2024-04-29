<template>
  <div>
    <AppHeader class="relative z-10" />
    <NavMenuModule class="fixed top-[72px]" />
    <div class="pl-[241px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import NavMenuModule from './app-modules/NavMenuModule.vue'
</script>