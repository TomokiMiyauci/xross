<template>
  <div class="flex flex-col-reverse">
    <div class="flex my-14 lg:my-16 flex-1">
      <sidebar
        class="bg-gray-50 shadow flex-shrink-0 fixed inset-y-0 left-0 transform-gpu duration-300 transition-all overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in w-64"
      />
      <router-view class="flex-1" />
    </div>

    <header
      class="h-14 lg:h-16 shadow w-full fixed top-0 bg-white flex items-center justify-between px-4 py-1"
    >
      <router-link to="/">
        <h1 class="capitalize inline text-3xl font-bold">
          Xross
          <logos-vue v-if="framework === 'vue'" class="w-8 inline h-8" />
          <logos-react
            v-else-if="framework === 'react'"
            class="w-8 inline h-8"
          />
        </h1>
      </router-link>
      <span class="flex items-center space-x-6">
        <Menu>
          <Button>Framework</Button>
          <template #menu>
            <ul class="shadow border rounded bg-white">
              <li>
                <router-link class="flex space-x-3 p-2 px-3" to="/vue">
                  <logos-vue class="w-8 h-8" /><span>Vue</span>
                </router-link>
              </li>
              <li>
                <router-link class="flex space-x-2 p-2" to="/react">
                  <logos-react class="w-8 h-8" /><span>React</span>
                </router-link>
              </li>
            </ul>
          </template>
        </Menu>

        <a
          class="shadow text-center space-x-6 hover:(bg-gray-50 ring-1 ring-green-400) block rounded p-1 border"
          href="https://github.com/TomokiMiyauci/xross"
          target="_blank"
        >
          <mdi-github class="inline" />
          GitHub
        </a>
      </span>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import { Menu, Button } from 'xross-vue'

const route = useRoute()

import { detectFramework } from '@/utils'

const framework = computed(() => detectFramework(route.path))
</script>
