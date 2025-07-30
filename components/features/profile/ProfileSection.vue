<template>
  <div class="bg-white/60 rounded-2xl p-4 shadow-sm">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900 mb-1">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ placeholder }}</p>
      </div>
      <button class="ml-3 p-1 text-gray-600 hover:text-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProfileSectionProps {
  title: string
  placeholder: string
  onEdit?: () => void
}

defineProps<ProfileSectionProps>()
</script> 