<template>
  <div class="min-h-screen flex flex-col bg-custom-beige">
    <!-- Header section with logo -->
    <header class="p-4 border-b-2 border-gray-200 ">
        <div class="flex items-center ">
          <img src="/assets/Logo.svg" alt="Edumapper Logo" class="h-8" />
        </div>
    </header>
    
    <!-- Main content -->
    <main class="flex-1 flex flex-col items-center py-4 lg:max-w-3xl lg:mx-auto">
      <!-- School Card -->
      <div class="w-full max-w-md px-4 mb-6">
        <SchoolCard 
          :schoolName="selectedSchool"
          city="Paris"
          schoolType="Lycée Public"
          @edit="showSchoolSelector = true"
        />
      </div>
      
      <!-- School Selector Modal -->
      <div v-if="showSchoolSelector" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="w-full max-w-md mx-4">
          <SchoolSelector 
            @confirm="handleSchoolConfirm"
            @close="showSchoolSelector = false"
          />
        </div>
      </div>
      
      <!-- Profile Card Form -->
      <div class="w-full max-w-md px-4 mb-6">
        <ProfileCardForm 
          :initial-class="profileData?.class"
          :initial-bac-type="profileData?.bacType"
          @confirm="handleProfileConfirm"
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
import SchoolSelector from '~/components/features/school/SchoolSelector.vue'
import ProfileCardForm from '~/components/features/profile/ProfileCardForm.vue'
import ProfileSection from '~/components/features/profile/ProfileSection.vue'

const selectedSchool = ref<string>('Lycée Gaston Berger')
const showSchoolSelector = ref<boolean>(false)
const profileData = ref<{ class: string; bacType: string } | null>(null)

const handleSchoolConfirm = (school: string) => {
  selectedSchool.value = school
  showSchoolSelector.value = false
}

const handleProfileConfirm = (data: { class: string; bacType: string }) => {
  console.log('Profile confirmed:', data)
  profileData.value = data
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

 