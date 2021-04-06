<template>
  <nav>
    <div class="p-4 bg-white border-b">
      <h1 class="capitalize text-3xl font-bold">xross</h1>
    </div>
    <ul class="p-4">
      <li class="font-bold text-xl uppercase my-4">Components</li>
      <li class="font-bold text-xl uppercase my-2">progress</li>

      <li class="ml-6">
        <router-link
          exact
          active-class=" text-green-500"
          class="capitalize text-lg"
          to="/components/loading"
          >loading</router-link
        >
      </li>
    </ul>
  </nav>
</template>
