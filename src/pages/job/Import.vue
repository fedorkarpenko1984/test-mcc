<template>
  <div class="page">
    <div class="flex items-center justify-between">
      <h2>Импорт файлов</h2>
      <AppButton
        type="primary"
        class="h-[44px] w-[107px]"
        @click="isModalOpen = true"
      >
        + Импорт
      </AppButton>
    </div>
    <div class="mt-[46px] mb-4 flex">
      <div class="relative">
        <SearchIcon class="absolute top-4 left-3.5" />
        <input
          type="text"
          v-model="searchString"
          class="search-input"
        />
      </div>
      <div class="select">
        <div class="text-[black] text-xs">Статус</div>
        <NavItemArrowIcon :is-active="false" />
      </div>
      <div class="flex items-center ml-8 gap-5">
        <AppCheckbox v-model="checkbox" />
        <div class="text-xs text-[black]">Обработан</div>
      </div>
    </div>
    <h4 v-if="imports.length === 0">Нет данных</h4>
    <div class="text-sm" v-else>
      <div class="table-head table-row-template">
        <div>ID</div>
        <div>Название файла</div>
        <div>Статус</div>
        <div>Дата загрузки</div>
        <div>Кол-во кредитных договоров</div>
        <div>Загружено пользователем</div>
        <div>Действия</div>
      </div>
      <div class="h-2"></div>
      <div class="flex flex-col gap-[2px]">
        <div
          v-for="_import in filteredImports"
          :key="_import.id"
          class="table-row table-row-template"
        >
          <div>{{ _import.id }}</div>
          <div class="text-[#4785EE] relative overflow-hidden">
            {{ _import.file.name }}
            <div class="absolute h-full w-8 top-0 right-0 gradient"></div>
          </div>
          <div :style="`color: ${_import.status.color}`">{{ _import.status.name }}</div>
          <div>{{ dateFormatter(_import.created_at) }}</div>
          <div>{{ _import.credits_count }}</div>
          <div>{{ _import.created_by.username }}</div>
          <div>
            <div class="center gap-2">
              <DownloadArrowIcon class="cursor-pointer" />
              <DeleteIcon class="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 font-medium text-[#AAABAD]">Всего строк: {{ imports.length }}</div>
    </div>
  </div>
  <ModalWrapper
    v-if="isModalOpen"
    @close:modal="isModalOpen = false"
  >
    <ImportModal @close:modal="isModalOpen = false" />
  </ModalWrapper>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useFetch } from '../../hooks/useFetch'
import { type TImport } from '../../types'
import AppButton from '../../ui/AppButton.vue'
import AppCheckbox from '../../ui/AppCheckbox.vue'
import ModalWrapper from '../../ui/ModalWrapper.vue'
import ImportModal from '../../components/ImportModal.vue'
import { dateFormatter } from '../../utils'
import {
  DeleteIcon,
  DownloadArrowIcon,
  SearchIcon,
  NavItemArrowIcon
} from '../../ui/icons'

const { GET } = useFetch();
const imports = ref<TImport[]>([]);

const isModalOpen = ref<boolean>(false)

onMounted(() => {
  getImports()
})

async function getImports() {
  const response = await GET<TImport[]>('/imports')
  if (!(response === null)) {
    imports.value = response
  } else {
    // оповещение об ошибке загрузки данных
  }
}

const searchString = ref<string>('')
const checkbox = ref<boolean>(false)

const filteredImports = computed<TImport[]>(() => {
  return imports.value.filter(_import => {
    return _import.file.name.toLowerCase().includes(searchString.value.toLowerCase())
  })
})

</script>

<style scoped>
.page {
  @apply bg-[#F5F5F5] min-h-[calc(100vh-72px)] p-6 box-border;
}
.table-row-template {
  @apply grid grid-cols-[20px_300px_140px_110px_215px_200px_70px] px-2 box-border items-center justify-between gap-x-2;
}
.table-head {
  @apply h-10 text-[#313131] font-semibold bg-[#FFF] rounded;
}
.table-row {
  @apply h-[48px] bg-[#FFF] rounded text-[#313131];
}
.search-input {
  @apply w-[315px] h-[48px] bg-[#F2F2F2] border-[1px] border-solid border-[#A4A6A9] box-border rounded-lg caret-[#AAABAD] pl-8 text-sm;
}
.select {
  @apply h-[48px] w-[237px] flex items-center justify-between px-3 box-border bg-[#F2F2F2] ml-3;
}
.gradient {
  background: linear-gradient(to right, transparent, white);
}
</style>  