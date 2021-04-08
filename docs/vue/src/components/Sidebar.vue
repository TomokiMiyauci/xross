<template>
  <nav>
    <ul class="p-4">
      <li class="font-semibold text-xl uppercase my-2">general</li>
      <li class="ml-6">
        <router-link
          exact
          active-class="text-green-500"
          class="capitalize block text-lg text-gray-500"
          :to="frameworkPath('/introduction')"
          >introduction</router-link
        >
        <router-link
          exact
          active-class="text-green-500"
          class="capitalize block text-lg text-gray-500"
          :to="frameworkPath('/start')"
          >getting started</router-link
        >
      </li>
      <li class="font-semibold text-xl uppercase my-4">Components</li>
      <li class="font-semibold text-xl uppercase my-4">basic</li>
      <li class="ml-6">
        <router-link
          exact
          active-class=" text-green-500"
          class="capitalize text-lg text-gray-500"
          :to="frameworkPath('/components/button')"
          >button</router-link
        >
      </li>
      <li class="font-semibold text-xl uppercase my-2">progress</li>

      <li class="ml-6">
        <router-link
          exact
          active-class=" text-green-500"
          class="capitalize text-lg text-gray-500"
          :to="frameworkPath('/components/loading')"
          >loading</router-link
        >
      </li>

      <li class="font-semibold text-xl uppercase my-2">display</li>

      <li class="ml-6">
        <router-link
          exact
          active-class=" text-green-500"
          class="capitalize text-lg text-gray-500"
          :to="frameworkPath('/components/tag')"
          >tag</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { detectFramework } from '@/utils'

const route = useRoute()

const frameworkPath = (to: string): string => {
  const framework = detectFramework(route.path)

  return `/${framework}${to}`
}
</script>
