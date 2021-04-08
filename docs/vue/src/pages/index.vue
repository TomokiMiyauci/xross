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

    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 mt-20 justify-around">
      <router-link
        to="/vue"
        class="border ring-2 border-green-500 transform hover:(scale-110 bg-green-100) transition duration-200 ring-green-300 mx-auto max-w-sm rounded"
      >
        <h2 class="text-3xl px-4 py-2">xross-vue</h2>

        <div class="p-4">
          <logos-vue class="w-56 h-56" />
        </div>
      </router-link>

      <router-link
        class="border ring-2 border-blue-500 transform hover:(scale-110 bg-blue-100) transition duration-200 ring-blue-300 mx-auto max-w-sm rounded"
        to="/react"
      >
        <h2 class="text-3xl px-4 py-2">xross-react</h2>
        <div class="p-4">
          <logos-react class="w-56 h-56" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Index'
})
</script>
