<template>
  <div class="nav-menu-module">
    <NavMenuItem
      v-for="(item, index) in navMenuItems"
      :key="index"
      :item="item"
      :is-active="item.title === activeMenuItem.title"
      @click="menuItemClickHandler(item)"
    />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { useRouter } from 'vue-router'
import NavMenuItem from '../components/NavMenuItem.vue'
import { navMenuItems } from '../constants'
import type { TNavMenuSubitem, TNavMenuItem } from '../types'

const router = useRouter()

const activeMenuItem = ref<TNavMenuItem>({
  title: ''
})

const subitemInitValue: TNavMenuSubitem = {
  title: '',
  routerPath: ''
}

const activeSubitem = ref<TNavMenuSubitem>(subitemInitValue)
activeSubitem.value.routerPath = localStorage.getItem('subitem_path') || '';
provide('activeSubitem', activeSubitem)

function menuItemClickHandler(item: TNavMenuItem) {
  if (item.routerPath) {  
    router.push(item.routerPath)
    activeSubitem.value = subitemInitValue
    localStorage.setItem('subitem_path', '')
  }
  if (activeMenuItem.value.title === item.title) {
    activeMenuItem.value = { title: '' }
  } else {
    activeMenuItem.value = item;
  }
}

</script>

<style scoped>
.nav-menu-module {
  @apply pt-5 pl-[30px] box-border w-[241px] shadow-[1px_0px_10px_0px_rgba(166,168,169,0.2)] bg-[#FFF] h-[calc(100%-72px)];
}
</style>