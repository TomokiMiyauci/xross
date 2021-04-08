<template>
  <nav>
    <div class="p-4 bg-white border-b">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <h1 class="capitalize inline text-3xl font-bold">xross</h1>
        </router-link>
        <div class="inline-flex space-x-4">
          <router-link to="/vue">
            <logos-vue class="w-8 h-8" />
          </router-link>
          <router-link to="/react">
            <logos-react class="w-8 h-8" />
          </router-link>
        </div>
      </div>
      <a
        class="shadow w-full text-center space-x-6 hover:(bg-gray-50 ring-1 ring-green-400) block mt-4 rounded p-1 border"
        href="https://github.com/TomokiMiyauci/xross"
        target="_blank"
      >
        <mdi-github class="inline" />
        GitHub
      </a>
    </div>
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

const route = useRoute()

const frameworkPath = (to: string): string => {
  const framework = detectFramework(route.path)

  return `/${framework}${to}`
}

const detectFramework = (path: string): 'vue' | 'react' | undefined => {
  if (path.startsWith('/vue')) return 'vue'
  if (path.startsWith('/react')) return 'react'
  return
}
</script>
