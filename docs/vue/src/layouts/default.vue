<template>
  <div class="flex h-screen">
    <sidebar class="w-60 bg-gray-50 shadow" />
    <router-view class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
</script>
