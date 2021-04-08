<template>
  <div class="flex">
    <div class="flex-1 container mx-auto px-20">
      <h1 class="text-5xl font-bold my-8 capitalize">button</h1>
      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#color">color</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6">
          <x-button>Neutral</x-button>
          <x-button color="primary">Primary</x-button>
          <x-button color="success">Success</x-button>
          <x-button color="warning">Warning</x-button>
          <x-button color="danger">Danger</x-button>
        </div>

        <Prism :code="codeColor" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#outlined">outlined</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <x-button outlined>Neutral</x-button>
          <x-button color="primary" outlined>Primary</x-button>
          <x-button color="success" outlined>Success</x-button>
          <x-button color="warning" outlined>Warning</x-button>
          <x-button color="danger" outlined>Danger</x-button>
        </div>

        <Prism :code="codeOutlined" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#loading">loading</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <x-button loading>Neutral</x-button>
          <x-button color="primary" loading>Primary</x-button>
          <x-button color="success" loading>Success</x-button>
          <x-button color="warning" loading>Warning</x-button>
          <x-button color="danger" loading>Danger</x-button>
        </div>

        <Prism :code="codeLoading" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#round">round</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <x-button round>Neutral</x-button>
          <x-button color="primary" round>Primary</x-button>
          <x-button color="success" outlined round>Success</x-button>
          <x-button color="warning" round loading>Warning</x-button>
        </div>

        <Prism :code="codeRound" class="p-4" language="html" />
      </div>

      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#block">block</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 flex-col justify-center space-y-6 capitalize">
          <x-button block>Button</x-button>
          <x-button color="primary" block>Button</x-button>
        </div>

        <Prism :code="codeBlock" class="p-4" language="html" />
      </div>
      <h2 class="p-4 text-2xl font-bold">
        <router-link class="capitalize" to="#disabled">disabled</router-link>
      </h2>
      <div class="border rounded-md">
        <div class="flex p-8 justify-center space-x-6 capitalize">
          <x-button color="primary" disabled>Button</x-button>
        </div>

        <Prism :code="codeDisabled" class="p-4" language="html" />
      </div>
    </div>

    <nav class="w-60 bg-gray-50 p-4 py-6 shadow">
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
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Button as XButton } from 'xross-vue'
import Prism from '@/components/Prism'
const codeColor = `<Button>Neutral</Button>
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>`

const codeOutlined = `<Button outlined>Neutral</Button>
<Button color="primary" outlined>Primary</Button>
<Button color="success" outlined>Success</Button>
<Button color="warning" outlined>Warning</Button>
<Button color="danger" outlined>Danger</Button>
`

const codeLoading = `<Button loading>Neutral</Button>
<Button color="primary" loading>Primary</Button>
<Button color="success" loading>Success</Button>
<Button color="warning" loading>Warning</Button>
<Button color="danger" loading>Danger</Button>`

const codeRound = `<Button loading>Neutral</Button>
<Button color="primary" loading>Primary</Button>
<Button color="success" loading>Success</Button>
<Button color="warning" loading>Warning</Button>
<Button color="danger" loading>Danger</Button>`

const codeBlock = `<Button block>Button</Button>
<Button color="primary" block>Button</Button>`

const codeDisabled = `
<Button color="primary" disabled>Button</Button>`
</script>
