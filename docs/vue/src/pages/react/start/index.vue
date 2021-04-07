<template>
  <div class="p-10 container mx-auto">
    <h1 class="text-4xl mb-20 font-bold">Getting start</h1>

    <div class="border rounded p-10">
      <h2>Install with NPM or Yarn</h2>

      <prism :code="install" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from '@/components/Prism'

const install = `# NPM
npm install xross-react

# Yarn
yarn add xross-react
`
</script>
