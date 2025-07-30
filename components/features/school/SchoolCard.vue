<template>
  <div class="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500">
    <div class="flex flex-col gap-3">
      <!-- School name -->
      <h2 class="school-title-dm-sans text-white">{{ schoolName }}</h2>
      
      <!-- School details with icons -->
      <div class="flex items-center gap-2 text-sm text-white/90">
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          {{ city }}
        </span>
        <span class="mx-1">•</span>
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          {{ schoolType }}
        </span>
      </div>
      
      <!-- Action button -->
      <div class="mt-2">
        <button 
          @click="$emit('edit')"
          class="px-4 py-2 rounded-full bg-white/90 text-sm font-semibold text-gray-800 hover:bg-white transition-colors shadow-sm"
        >
          Modifier
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SchoolCardProps {
  schoolName: string
  city: string
  schoolType: string
}

defineProps<SchoolCardProps>()
defineEmits<{
  edit: []
}>()
</script>