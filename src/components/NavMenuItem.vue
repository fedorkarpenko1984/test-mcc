<template>
  <div
    ref="navMenuItemWrapper"
    class="h-[38px] overflow-hidden transition-all duration-700"
  >
    <div
      class="nav-menu-item"
      :class="isActive ? 'bg-[#42B277]' : 'bg-[white]'"
    >
      <component
        :is="item.icon"
        :color="isActive ? 'white' : '#A6A8A9'"
      />
      <div
        class="ml-2"
        :class="isActive ? 'text-[white]' : 'text-[black]'"
      >
        {{ item.title }}
      </div>
      <NavItemArrowIcon
        v-if="item?.subitems && item.subitems.length > 0"
        :is-active="isActive"
        class="absolute right-2"
      />
    </div>
    <div v-if="item?.subitems">
      <div
        v-for="subitem in item.subitems"
        :key="subitem.title"
        class="nav-menu-subitem"
        @click.stop="subitemClickHandler(subitem)"
      >
        <div
          v-if="activeSubitem.routerPath === subitem.routerPath"
          class="w-[7px] h-[7px] bg-[#42B277] rounded-full mr-2"
        ></div>
        {{ subitem.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, inject, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { TNavMenuSubitem, type TNavMenuItem } from '../types'
import { NavItemArrowIcon } from '../ui/icons'

const props = defineProps<{
  item: TNavMenuItem;
  isActive: boolean;
}>()

const router = useRouter()

const navMenuItemWrapper = ref<null | HTMLElement>(null)

const activeSubitem: Ref<TNavMenuSubitem> = inject('activeSubitem')!


watch(props, newProps => {
  if (!props.item?.subitems ||
      !navMenuItemWrapper.value) return
  const openHeight = (props.item.subitems.length + 1) * 38
  if (newProps.isActive) {
    navMenuItemWrapper.value!.style.height = `${openHeight}px`
  } else {
    navMenuItemWrapper.value!.style.height = '38px'
  }
})

function subitemClickHandler(subitem: TNavMenuSubitem) {
  activeSubitem.value = subitem
  localStorage.setItem('subitem_path', subitem.routerPath)
  router.push(subitem.routerPath)
}
</script>

<style scoped>
.nav-menu-item {
  @apply relative h-[38px] w-[193px] box-border p-2 flex items-center text-[12px] rounded-[4px] cursor-pointer transition-all duration-700;
}
.nav-menu-subitem {
  @apply pl-[38px] box-border h-[38px] flex items-center text-[12px] cursor-pointer
}
</style>