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

    <!-- Class selection section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold text-gray-900 mb-4">En quelle classe es-tu ?</h3>
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="option in classOptions" 
          :key="option"
          @click="selectedClass = option"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedClass === option 
              ? 'bg-white border-2 border-gray-800 text-gray-800' 
              : 'bg-custom-beige text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <!-- Separator -->
    <div class="border-t border-gray-200 mb-6"></div>

    <!-- Bac type selection section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold text-gray-900 mb-4">Type de bac</h3>
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="option in bacTypeOptions" 
          :key="option"
          @click="selectedBacType = option"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedBacType === option 
              ? 'bg-white border-2 border-gray-800 text-gray-800' 
              : 'bg-custom-beige text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <!-- Confirm button -->
    <button 
      @click="handleConfirm"
      :disabled="!selectedClass || !selectedBacType"
      :class="[
        'w-full py-3 rounded-full text-sm font-medium transition-colors',
        selectedClass && selectedBacType
          ? 'bg-black text-white hover:bg-gray-900'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
      ]"
    >
      Confirmer
    </button>
  </div>
</template>

<script setup lang="ts">
interface ProfileFormProps {
  onConfirm?: (data: { class: string; bacType: string }) => void
  onClose?: () => void
  initialClass?: string
  initialBacType?: string
}

const props = defineProps<ProfileFormProps>()
const emit = defineEmits<{
  confirm: [data: { class: string; bacType: string }]
  close: []
}>()

const selectedClass = ref<string>(props.initialClass || '')
const selectedBacType = ref<string>(props.initialBacType || '')

const classOptions = ref<string[]>([])
const bacTypeOptions = ref<string[]>([])

// Fetch data from APIs
const { data: classesData } = await useFetch<{ classes: string[] }>('/api/classes')
const { data: bacTypesData } = await useFetch<{ bacTypes: string[] }>('/api/bac-types')

onMounted(() => {
  if (classesData.value) {
    classOptions.value = classesData.value.classes
  }
  if (bacTypesData.value) {
    bacTypeOptions.value = bacTypesData.value.bacTypes
  }
})

const handleConfirm = () => {
  if (selectedClass.value && selectedBacType.value) {
    emit('confirm', {
      class: selectedClass.value,
      bacType: selectedBacType.value
    })
  }
}
</script> 