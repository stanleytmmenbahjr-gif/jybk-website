<template>
  <Navbar />
  <Hero />
  <About />
  <Music />
  <Booking />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Music from './components/Music.vue';
import Booking from './components/booking.vue';

export default { components: { Navbar, Hero, About, Music, Booking } }
</script>
