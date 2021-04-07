<template>
  <div class="p-10 container mx-auto">
    <h1 class="text-4xl mb-20 font-bold">Getting start</h1>

    <div class="border rounded p-10">
      <h2>Install with NPM or Yarn</h2>

      <prism :code="install" />
      <h2>Use all components</h2>
      <prism :code="useAll" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from '@/components/Prism'

const install = `# NPM
npm install xross-vue

# Yarn
yarn add xross-vue
`

const useAll = `import { createApp } from 'vue'
import Xross from 'xross-vue'
import 'xross-vue/dist/style.css'

createApp.use(Xross)
`
</script>
