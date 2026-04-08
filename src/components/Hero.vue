<template>
  <section id="home" class="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

    <!-- BACKGROUND VIDEO -->
    <video autoplay muted loop playsinline class="absolute w-full h-full object-cover z-0">
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>

    <!-- GRADIENT OVERLAY -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>

    <!-- CONTENT -->
    <div class="relative z-20 max-w-4xl px-6 animate-fade-in">

      <!-- TAG -->
      <p class="uppercase tracking-widest text-yellow-400 text-sm mb-4">
        Gospel Afro Artist • Liberia
      </p>

      <!-- MAIN TITLE -->
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        James Y. B. Kolor  
        <span class="block text-yellow-400">(JYBK)</span>
      </h1>

      <!-- SUBTEXT -->
      <p class="text-lg md:text-xl text-gray-200 mb-6">
        Worship Leader • Emerging Voice of Liberia
      </p>

      <!-- QUOTE -->
      <p class="italic text-gray-300 mb-10 text-base md:text-lg">
        “The Sound & The Mission”
      </p>

      <!-- CTA BUTTONS -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">

        <!-- LISTEN -->
        <a
          href="#music"
          class="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition shadow-lg"
        >
          🎧 Listen Now
        </a>

        <!-- BOOK -->
        <a
          href="#booking"
          class="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Book a Performance
        </a>

      </div>
    </div>

    <!-- SCROLL INDICATOR -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-2 bg-white mt-2 rounded"></div>
      </div>
    </div>

  </section>
</template>

<script>
import videoSrc from '../assets/jybk-hero.mp4'

export default {
  data() {
    return {
      videoSrc
    }
  }
}
</script>

<style scoped>
/* FADE-IN ANIMATION */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 1s ease forwards;
}
</style>