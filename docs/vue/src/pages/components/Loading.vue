<template>
  <div class="flex">
    <div class="flex-1 container mx-auto px-20">
      <h1 class="text-5xl font-bold my-8">Loading</h1>
      <h2 class="p-4 text-2xl font-bold">
        <router-link to="#colors">Colors</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6">
          <loading />
          <loading color="#f93155" />
          <loading color="#ffba00" />
          <loading color="#232323" />
        </div>

        <Prism :code="code" class="p-4" language="html" />
      </div>
    </div>
    <nav class="w-60 bg-gray-50 p-4 py-6 shadow">
      <h3 class="text-2xl font-bold mb-2">Content</h3>
      <ul class="ml-6">
        <li>
          <router-link to="#colors">colors</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Loading } from 'xross-vue'
import Prism from '@/components/Prism'
const code = `<loading />
<loading color="#f93155" />
<loading color="#ffba00" />
<loading color="#232323" />
`
</script>
