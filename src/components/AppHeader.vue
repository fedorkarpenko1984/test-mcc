<template>
  <div class="w-full h-[72px] flex justify-between items-center px-10 shadow-[0_1px_10px_0px_rgba(166,168,169,0.2)] bg-[#FFF]">
    <img src="../assets/images/Logo.jpg" alt="">
    <div class="flex items-center">
      <div class="text-base">
        {{ user.name }} {{ user.surname }}
      </div>
      <Avatar class="ml-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../ui/icons/Avatar.vue'

const user = {
  name: "Имя",
  surname: "Фамилия"
}

</script>

<style scoped>

</style>