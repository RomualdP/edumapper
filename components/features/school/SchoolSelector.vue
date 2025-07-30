<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm relative">
    <!-- Close button -->
    <button 
      @click="$emit('close')"
      class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- School selection section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold text-gray-900 mb-4">Sélectionner un lycée</h3>
      <div class="max-h-60 overflow-y-auto">
        <button 
          v-for="school in schools" 
          :key="school"
          @click="selectedSchool = school"
          :class="[
            'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-2',
            selectedSchool === school 
              ? 'bg-gray-100 border-2 border-gray-800 text-gray-800' 
              : 'bg-custom-beige text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ school }}
        </button>
      </div>
    </div>

    <!-- Confirm button -->
    <button 
      @click="handleConfirm"
      :disabled="!selectedSchool"
      :class="[
        'w-full py-3 rounded-full text-sm font-medium transition-colors',
        selectedSchool
          ? 'bg-black text-white hover:bg-gray-900'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
      ]"
    >
      Confirmer
    </button>
  </div>
</template>

<script setup lang="ts">
interface SchoolSelectorProps {
  onConfirm?: (school: string) => void
  onClose?: () => void
}

const props = defineProps<SchoolSelectorProps>()
const emit = defineEmits<{
  confirm: [school: string]
  close: []
}>()

const selectedSchool = ref<string>('')
const schools = ref<string[]>([])

// Fetch schools from API
const { data: schoolsData } = await useFetch<{ schools: string[] }>('/api/schools')

onMounted(() => {
  if (schoolsData.value) {
    schools.value = schoolsData.value.schools
  }
})

const handleConfirm = () => {
  if (selectedSchool.value) {
    emit('confirm', selectedSchool.value)
    props.onConfirm?.(selectedSchool.value)
  }
}
</script> 