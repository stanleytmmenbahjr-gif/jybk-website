<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6">

      <div class="text-2xl font-extrabold tracking-widest text-white">
        JYBK<span class="text-yellow-400">.</span>
      </div>

      <ul class="hidden md:flex gap-8 items-center text-sm font-medium">
        <li v-for="link in links" :key="link.name">
          <a
            v-if="!link.route"
            :href="link.href"
            class="transition duration-300 hover:text-yellow-400 text-white"
          >
            {{ link.name }}
          </a>
          <router-link
            v-else
            :to="link.route"
            class="transition duration-300 hover:text-yellow-400 text-white"
          >
            {{ link.name }}
          </router-link>
        </li>

        <li>
          <a
            href="/#booking"
            class="ml-4 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Book Now
          </a>
        </li>
      </ul>

      <button @click="toggleMenu" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="slide">
      <div v-if="isOpen" class="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6">
        <ul class="flex flex-col gap-6 text-lg mt-6">
          <li v-for="link in links" :key="link.name">
            <a
              v-if="!link.route"
              :href="link.href"
              @click="isOpen = false"
              class="block hover:text-yellow-400"
            >
              {{ link.name }}
            </a>
            <router-link
              v-else
              :to="link.route"
              @click="isOpen = false"
              class="block hover:text-yellow-400"
            >
              {{ link.name }}
            </router-link>
          </li>

          <li>
            <a
              href="/#booking"
              @click="isOpen = false"
              class="block text-center bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrolled: false,
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Gallery', route: '/gallery' },
        { name: 'Music', href: '/#music' },
        { name: 'Booking', href: '/#booking' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
