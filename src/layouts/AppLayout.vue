<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <div>
    <header class="bg-gray-600 p-4 text-gray-200 h-70">
      <div class="container mx-auto">
        <AppHeader />
      </div>
    </header>
    <main class="bg-gray-200 dark:bg-gray-900">
      <RouterView />
    </main>
  </div>
</template>
