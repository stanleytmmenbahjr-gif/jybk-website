<template>
  <section class="py-16 bg-slate-900 text-white px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <div>
          <p class="uppercase tracking-[0.3em] text-yellow-400 text-sm">Gallery Preview</p>
          <h3 class="text-2xl font-bold">Highlights</h3>
        </div>

        <a href="/gallery" class="text-yellow-400 font-semibold hover:underline">View more →</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div v-for="(img, i) in previewImages" :key="i" class="rounded-xl overflow-hidden">
          <img :src="img.src" :alt="img.title" class="w-full h-40 object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import img2 from '../assets/Gallery2.png'
import img3 from '../assets/Gallery3.png'
import img5 from '../assets/Gallery5.png'
import img15 from '../assets/Gallery15.png'
import img21 from '../assets/Gallery21.png'

const previewImages = [
  { title: 'Performaing PWAC 2026', src: img2 },
  { title: 'Performaing Shiloh Outreach', src: img3 },
  { title: 'Ministration at Campus Fire', src: img15 },
  { title: 'Portrait', src: img21 },
  { title: 'JYBK', src: img5 }
]
</script>

<style scoped>
.preview-card img { transition: transform .3s ease; }
.preview-card img:hover { transform: scale(1.03); }
</style>
