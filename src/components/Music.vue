<template>
  <section id="music" class="py-20 bg-black text-white px-6">
    <h2 class="text-4xl font-bold text-center mb-12">Music & Tracks</h2>
    <swiper
      :slides-per-view="1.2"
      :space-between="20"
      :centered-slides="false"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
      }"
      class="max-w-6xl mx-auto"
    >
      <swiper-slide v-for="track in tracks" :key="track.title" class="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
        <div class="w-64 h-64 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ track.title }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ track.description }}</p>
        <button class="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500 transition">
          Listen Now
        </button>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      tracks: [
        { title: 'Track One', description: 'Gospel Afro Beat' },
        { title: 'Track Two', description: 'Worship Song' },
        { title: 'Track Three', description: 'Praise Anthem' },
        { title: 'Track Four', description: 'Spiritual Melody' },
        { title: 'Track Five', description: 'Inspirational Tune' },
      ]
    }
  },
  mounted() {
    // Initialize Swiper modules
    this.$nextTick(() => {
      // Swiper will auto-initialize with the modules
    });
  }
}
</script>

<style scoped>
/* Custom Swiper styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fbbf24;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #fbbf24;
}

:deep(.swiper-pagination) {
  bottom: -40px;
}
</style>
