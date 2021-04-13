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

      <li v-for="name in components" class="ml-3 space-y-4">
        <router-link
          exact
          class="hover:(bg-gray-200) py-1 mb-1 px-4 transition duration-200 rounded-md capitalize block text-lg text-gray-500"
          active-class="text-green-500 bg-green-300 hover:(bg-green-600 text-gray-900)"
          :to="frameworkPath(`/components/${name}`)"
          >{{ name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { detectFramework } from '@/utils'

const route = useRoute()

const components = ['button', 'loading', 'tag', 'menu']

const frameworkPath = (to: string): string => {
  const framework = detectFramework(route.path)

  return `/${framework}${to}`
}
</script>
