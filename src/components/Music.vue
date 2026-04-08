<template>
  <section id="music" class="py-20 bg-black text-white px-6">
    <h2 class="text-4xl font-bold text-center mb-8">Music & Media</h2>

    <!-- TOGGLE -->
    <div class="flex justify-center mb-10 gap-4">
      <button
        @click="activeTab = 'music'"
        :class="tabClass('music')"
      >
        Music
      </button>
      <button
        @click="activeTab = 'videos'"
        :class="tabClass('videos')"
      >
        Videos
      </button>
    </div>

    <!-- SWIPER -->
    <swiper
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="20"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      class="max-w-6xl mx-auto"
    >
      <swiper-slide
        v-for="item in activeContent"
        :key="item.title"
        class="bg-gray-900 p-4 rounded-xl shadow-lg"
      >
        <h3 class="text-lg font-semibold mb-3 text-center">
          {{ item.title }}
        </h3>

        <!-- AUDIO (AUDIOMACK) -->
        <iframe
          v-if="activeTab === 'music'"
          :src="item.embed"
          class="w-full h-40 rounded-lg"
          frameborder="0"
          allow="autoplay"
        ></iframe>

        <!-- VIDEO (YOUTUBE) -->
        <iframe
          v-else
          :src="item.embed"
          class="w-full h-56 rounded-lg"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      activeTab: 'music',
      modules: [Navigation, Pagination, Autoplay],

      music: [
        {
          title: 'JYBK - God Is Enough',
          embed: 'https://audiomack.com/embed/song/kolorybk203/god-is-enough'
        },
        {
          title: 'JYBK - Hosanna',
          embed: 'https://audiomack.com/embed/song/kolorybk203/hosanna'
        },
        {
          title: 'JYBK - Shine',
          embed: 'https://audiomack.com/embed/song/kolorybk203/shine'
        }
      ],

      videos: [
         {
          title: 'Good is Enough - Official Video',
          embed: 'https://www.youtube.com/embed/VR_-647Bc48'
        },
       
        {
          title: 'Hosanna - Official Video',
          embed: 'https://www.youtube.com/embed/unIqzp5KrKc'
        },
        
         {
          title: 'SHINE - Official Video',
          embed: 'https://www.youtube.com/embed/d_yJaQuihto'
        }
      ]
    }
  },
  computed: {
    activeContent() {
      return this.activeTab === 'music' ? this.music : this.videos
    }
  },
  methods: {
    tabClass(tab) {
      return [
        'px-6 py-2 rounded-full font-semibold transition',
        this.activeTab === tab
          ? 'bg-yellow-400 text-black'
          : 'bg-gray-800 text-white hover:bg-gray-700'
      ]
    }
  }
}
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fbbf24;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #fbbf24;
}

:deep(.swiper-pagination) {
  bottom: -35px;
}
</style>