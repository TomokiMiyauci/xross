<template>
  <div class="p-10">
    <h1 class="text-9xl text-center">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-700"
        >X</span
      >ross
    </h1>
    <p
      class="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-700"
    >
      Component-based UI library supports multiple frameworks
    </p>

    <div class="flex space-x-4 mt-20 justify-around">
      <span class="border p-4 ring-2 border-green-500 ring-green-300 rounded">
        <h2 class="text-3xl">xross-vue</h2>

        <router-link to="/vue">Go to</router-link>
      </span>

      <span class="border p-4 ring-2 border-blue-500 ring-blue-300 rounded">
        <h2 class="text-3xl">xross-react</h2>

        <router-link to="/react">Go to</router-link>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Index'
})
</script>
