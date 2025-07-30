<template>
  <div class="min-h-screen flex flex-col bg-custom-beige">
    <!-- Header section with logo -->
    <header class="p-4 border-b-2 border-gray-200 ">
        <div class="flex items-center ">
          <img src="/assets/Logo.svg" alt="Edumapper Logo" class="h-8" />
        </div>
    </header>
    
    <!-- Main content -->
    <main class="flex-1 flex flex-col items-center py-4">
      <!-- School Card -->
      <div class="w-full max-w-md px-4 mb-6">
        <SchoolCard 
          schoolName="Lycée Gaston Berger" 
          city="Lille" 
          schoolType="Lycée Public"
        />
      </div>
      
      <!-- Placeholder for form sections -->
      <div class="w-full max-w-md px-4 space-y-4">
        <!-- Form section placeholder -->
        <div class="bg-white rounded-2xl p-6 shadow-sm">
          <div class="text-center text-gray-400 text-sm">
            Form sections will be added here
          </div>
        </div>
        
        <!-- Editable sections placeholder -->
        <div class="space-y-3">
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="text-center text-gray-400 text-sm">
              Spécialités section
            </div>
          </div>
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="text-center text-gray-400 text-sm">
              Notes section
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SchoolCard from '~/components/features/school/SchoolCard.vue'
</script> 