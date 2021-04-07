<template>
  <div class="flex">
    <div class="flex-1 container mx-auto px-20">
      <h1 class="text-5xl font-bold my-8 capitalize">tag</h1>
      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#type">type</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <tag>nutral</tag>
          <tag type="primary">primary</tag>
          <tag type="success">success</tag>
          <tag type="warning">warning</tag>
          <tag type="danger">danger</tag>
        </div>

        <Prism :code="codeType" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#filled">filled</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <tag filled>nutral</tag>
          <tag type="primary" filled>primary</tag>
          <tag type="success" filled>success</tag>
          <tag type="warning" filled>warning</tag>
          <tag type="danger" filled>danger</tag>
        </div>

        <Prism :code="codeFilled" class="p-4" language="html" />
      </div>
    </div>

    <nav class="w-60 bg-gray-50 p-4 py-6 shadow">
      <h3 class="text-2xl font-bold mb-2">Content</h3>
      <ul class="ml-6">
        <li>
          <router-link to="#type">type</router-link>
        </li>
        <li>
          <router-link to="#filled">filled</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'xross-vue'
import Prism from '@/components/Prism'
const codeType = `<Tag>Nutral</Tag>
<Tag type="primary">Primary</Tag>
<tag type="success">Success</tag>
<Tag type="warning">Warning</Tag>
<Tag type="danger">Danger</Tag>
`

const codeFilled = `<Tag filled>Nutral</Tag>
<Tag type="primary" filled>Primary</Tag>
<Tag type="success" filled>Success</Tag>
<Tag type="warning" filled>Warning</Tag>
<Tag type="danger" filled>Danger</Tag>
`
</script>
