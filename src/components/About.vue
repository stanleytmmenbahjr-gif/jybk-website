<template>
  <section id="about" class="py-24 bg-black text-white px-6 md:px-16">

    <!-- TITLE -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
        About JYBK
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        The Sound. The Mission. The Movement.
      </p>
    </div>

    <!-- MAIN CONTENT -->
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <!-- IMAGE CARD -->
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-transparent opacity-20 blur-2xl rounded-2xl"></div>

        <div class="relative bg-gray-900 p-3 rounded-2xl shadow-xl transform transition duration-500 group-hover:scale-105">
          <img
            :src="jybkImage"
            alt="JYBK"
            class="w-full h-[450px] object-cover rounded-xl"
          />
        </div>
      </div>

      <!-- TEXT CONTENT -->
      <div class="space-y-6 text-lg leading-relaxed text-gray-300">

        <p>
          <span class="text-white font-semibold">James Y. B. Kolor</span>, known professionally as
          <span class="text-yellow-400 font-bold">JYBK</span>, is a premier Gospel Afro artist making a profound impact on the Liberian music scene. His sound blends contemporary Afro-beats with a powerful "Holy Ghost vibe," creating music that inspires, uplifts, and connects a new generation to Christ.
        </p>

        <p>
          <span class="text-white font-semibold">Ministry & Leadership:</span> JYBK serves as a lead vocalist at Liberty Christian Center Church Worldwide Headquarters in Johnsonville. His experience in worship ministry has shaped his deep connection with audiences both locally and internationally.
        </p>

        <p>
          His mission is clear — to use music as a vessel to spread faith, hope, and transformation across nations.
        </p>

        <!-- HIGHLIGHTS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">

          <div class="highlight-card">
             AGOMA 2024  
            <span>Artist Masterclass</span>
          </div>

          <div class="highlight-card">
            Celestia Awards  
            <span>Emerging Artist Nominee</span>
          </div>

          <div class="highlight-card">
             Cuttington University  
            <span>Guest Performer 2023</span>
          </div>

          <div class="highlight-card">
             National Reach  
            <span>Events & Conferences</span>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import jybkImage from '../assets/jybk.png'
</script>

<style scoped>
/* HIGHLIGHT CARDS */
.highlight-card {
  background-color: #111827;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid #374151;
  transition: border-color 0.2s ease;
}

.highlight-card:hover {
  border-color: #f59e0b;
}

.highlight-card span {
  color: #9ca3af;
  font-size: 0.75rem;
}
</style>