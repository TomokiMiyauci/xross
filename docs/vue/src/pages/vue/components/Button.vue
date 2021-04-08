<template>
  <div class="flex">
    <div class="flex-1 container mx-auto px-4">
      <h1 class="text-5xl font-bold my-8 capitalize">button</h1>
      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#color">color</router-link>
      </h2>
      <div class="border rounded-md overflow-x-scroll">
        <div class="flex p-8 justify-center flex-wrap items-start space-x-6">
          <x-button class="mb-2">Neutral</x-button>
          <x-button class="mb-2" color="primary">Primary</x-button>
          <x-button class="mb-2" color="success">Success</x-button>
          <x-button class="mb-2" color="warning">Warning</x-button>
          <x-button class="mb-2" color="danger">Danger</x-button>
        </div>

        <Prism :code="codeColor" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#outlined">outlined</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center flex-wrap space-x-6">
          <x-button class="mb-2" outlined>Neutral</x-button>
          <x-button class="mb-2" color="primary" outlined>Primary</x-button>
          <x-button class="mb-2" color="success" outlined>Success</x-button>
          <x-button class="mb-2" color="warning" outlined>Warning</x-button>
          <x-button class="mb-2" color="danger" outlined>Danger</x-button>
        </div>

        <Prism :code="codeOutlined" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#loading">loading</router-link>
      </h2>
      <div class="border rounded-md overflow-auto">
        <div class="flex p-8 justify-center flex-wrap space-x-6 capitalize">
          <x-button class="mb-2" loading>Neutral</x-button>
          <x-button class="mb-2" color="primary" loading>Primary</x-button>
          <x-button class="mb-2" color="success" loading>Success</x-button>
          <x-button class="mb-2" color="warning" loading>Warning</x-button>
          <x-button class="mb-2" color="danger" loading>Danger</x-button>
        </div>

        <Prism
          :code="codeLoading"
          class="p-4 overflow-x-scroll"
          style="max-height: 1000px"
          language="html"
        />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#round">round</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center flex-wrap space-x-6 capitalize">
          <x-button class="mb-2" round>Neutral</x-button>
          <x-button class="mb-2" color="primary" round>Primary</x-button>
          <x-button class="mb-2" color="success" outlined round
            >Success</x-button
          >
          <x-button class="mb-2" color="warning" round loading
            >Warning</x-button
          >
        </div>

        <Prism :code="codeRound" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#block">block</router-link>
      </h2>
      <div class="border rounded-md">
        <div
          class="flex p-8 flex-col justify-center flex-wrap space-y-6 capitalize"
        >
          <x-button block>Button</x-button>
          <x-button color="primary" block>Button</x-button>
        </div>

        <Prism :code="codeBlock" class="p-4" language="html" />
      </div>
      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#disabled">disabled</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center flex-wrap space-x-6 capitalize">
          <x-button color="primary" disabled>Button</x-button>
        </div>

        <Prism :code="codeDisabled" class="p-4" language="html" />
      </div>
    </div>

    <!-- <nav class="w-60 bg-gray-50 p-4 py-6 shadow">
      <h3 class="text-2xl font-bold mb-2">Content</h3>
      <ul class="ml-6">
        <li>
          <router-link to="#color">color</router-link>
        </li>
        <li>
          <router-link to="#outlined">outlined</router-link>
        </li>
        <li>
          <router-link to="#loading">loading</router-link>
        </li>
        <li>
          <router-link to="#round">round</router-link>
        </li>
        <li>
          <router-link to="#block">block</router-link>
        </li>
        <li>
          <router-link to="#disabled">disabled</router-link>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script setup lang="ts">
import { Button as XButton } from 'xross-vue'
import Prism from '@/components/Prism'
const codeColor = `<x-button>Neutral</x-button>
<x-button color="primary">Primary</x-button>
<x-button color="success">Success</x-button>
<x-button color="warning">Warning</x-button>
<x-button color="danger">Danger</x-button>`

const codeOutlined = `<x-button outlined>Neutral</x-button>
<x-button color="primary" outlined>Primary</x-button>
<x-button color="success" outlined>Success</x-button>
<x-button color="warning" outlined>Warning</x-button>
<x-button color="danger" outlined>Danger</x-button>
`

const codeLoading = `<x-button loading>Neutral</x-button>
<x-button color="primary" loading>Primary</x-button>
<x-button color="success" loading>Success</x-button>
<x-button color="warning" loading>Warning</x-button>
<x-button color="danger" loading>Danger</x-button>`

const codeRound = `<x-button loading>Neutral</x-button>
<x-button color="primary" loading>Primary</x-button>
<x-button color="success" loading>Success</x-button>
<x-button color="warning" loading>Warning</x-button>
<x-button color="danger" loading>Danger</x-button>`

const codeBlock = `<x-button block>Button</x-button>
<x-button color="primary" block>Button</x-button>`

const codeDisabled = `
<x-button color="primary" disabled>Button</x-button>`
</script>
