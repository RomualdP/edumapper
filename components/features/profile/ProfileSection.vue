<template>
  <div class="bg-white/60 rounded-2xl p-4 shadow-sm">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <h3 class="title-dm-sans text-gray-900 mb-1">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ placeholder }}</p>
      </div>
      <button class="ml-3 p-1 text-gray-600 hover:text-gray-800 transition-colors" @click="$emit('edit')">
        <img src="/assets/icons/edit.svg" alt="Edit" class="w-4 h-4" />
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
defineEmits<{ edit: [] }>()
</script> 