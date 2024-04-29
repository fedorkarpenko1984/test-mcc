<template>
  <div class="relative w-[513px] h-[332px] bg-[#FFF] rounded-lg p-5 box-border z-20">
    <CloseIcon
      class="absolute top-5 right-5 cursor-pointer"
      @click="$emit('close:modal')"
    />
    <div class="text-[28px] font-bold text-[#000] mt-5">Импорт файла</div>
    <div class="flex mt-6 justify-between">
      <div class="choosen-file-name">{{ choosenFileName }}</div>
      <div class="relative w-[100px] h-[48px]">
        <AppButton
          type="default"
          class="w-full h-full"
        >
          Обзор
        </AppButton>
        <input
          type="file"
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          @change="fileInputHandler($event.target as HTMLInputElement)"
        />
      </div>
    </div>
    <div class="mt-6">
      <div class="flex">
        <AppCheckbox v-model="checkINN" />
        <div class="text-sm text-[#313131] ml-2">Проверить ИНН</div>
      </div>
      <div class="flex mt-3">
        <AppCheckbox v-model="checkAddress" />
        <div class="text-sm text-[#313131] ml-2">Проверить адрес</div>
      </div>
    </div>
    <div class="absolute bottom-5 right-5">
      <AppButton
        type="default"
        class="w-[93px] h-[48px]"
        @click="emit('close:modal')"
      >
        Отмена
      </AppButton>
      <AppButton
        type="primary"
        class="w-[158px] h-[48px] ml-3"
      >
        Импортировать
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../ui/AppButton.vue'
import AppCheckbox from '../ui/AppCheckbox.vue';
import { CloseIcon } from '../ui/icons'

const emit = defineEmits<{
  (e: "close:modal"): void
}>()

const choosenFileName = ref<string>('')

const checkINN = ref<boolean>(false)
const checkAddress = ref<boolean>(false)

function fileInputHandler(input: HTMLInputElement) {
  const formatedFilePath = input.value.split(`\\`)
  choosenFileName.value = formatedFilePath[formatedFilePath.length - 1]
}
</script>

<style scoped>
.choosen-file-name {
  @apply h-[48px] w-[360px] bg-[#F2F2F2] rounded-lg flex box-border pl-5 items-center;
}
</style>