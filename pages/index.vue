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
      
      <!-- Profile Form -->
      <div class="w-full max-w-md px-4 mb-6">
        <ProfileForm 
          @confirm="handleProfileConfirm"
          @close="handleProfileClose"
        />
      </div>
      
      <!-- Profile Sections -->
      <div class="w-full max-w-md px-4 space-y-3">
        <ProfileSection 
          title="Spécialités"
          placeholder="À compléter"
          @edit="handleSpecialtiesEdit"
        />
        <ProfileSection 
          title="Notes"
          placeholder="À compléter"
          @edit="handleNotesEdit"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SchoolCard from '~/components/features/school/SchoolCard.vue'
import ProfileForm from '~/components/features/profile/ProfileForm.vue'
import ProfileSection from '~/components/features/profile/ProfileSection.vue'

const handleProfileConfirm = (data: { class: string; bacType: string }) => {
  console.log('Profile confirmed:', data)
  // TODO: Handle profile confirmation
}

const handleProfileClose = () => {
  console.log('Profile form closed')
  // TODO: Handle form close
}

const handleSpecialtiesEdit = () => {
  console.log('Edit specialties')
  // TODO: Handle specialties edit
}

const handleNotesEdit = () => {
  console.log('Edit notes')
  // TODO: Handle notes edit
}
</script> 