<template>
  <Hero />
  <About />
  <PreviewGallery />
  <Music />
  <Booking />
</template>

<script>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import PreviewGallery from '../components/PreviewGallery.vue';
import Music from '../components/Music.vue';
import Booking from '../components/booking.vue';

export default { components: { Hero, About, PreviewGallery, Music, Booking } }
</script>
