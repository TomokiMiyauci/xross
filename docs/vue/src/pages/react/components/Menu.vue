<template>
  <div class="flex">
    <div class="flex-1 container mx-auto px-20">
      <h1 class="text-5xl font-bold my-8">Menu</h1>
      <h2 class="p-4 text-2xl font-bold">
        <router-link to="#position">Position</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6">
          <Menu position="bottom">
            <Button color="primary">Dropdown</Button>

            <template #menu>
              <ol
                class="shadow rounded border hover:(shadow-md) transition-shadow duration-200 py-0.5 bg-white"
              >
                <li
                  v-for="i in 3"
                  :key="i"
                  class="hover:bg-blue-300 inline-block w-full"
                >
                  <router-link class="px-2 py-1 block w-full" to="/"
                    >Dropdown</router-link
                  >
                </li>
              </ol>
            </template>
          </Menu>
        </div>

        <Prism :code="code" class="p-4" language="html" />
      </div>
    </div>
    <nav class="w-60 bg-gray-50 p-4 py-6 shadow">
      <h3 class="text-2xl font-bold mb-2">Content</h3>
      <ul class="ml-6">
        <li>
          <router-link to="#position">position</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Menu, Button } from 'xross-vue'
import Prism from '@/components/Prism'
const code = `<Menu menu={<ol>...</ol>}>
  <Button>Dropdown</Button>
</Menu>
`
</script>
