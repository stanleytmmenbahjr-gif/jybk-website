<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6">

      <!-- LOGO -->
      <div class="text-2xl font-extrabold tracking-widest text-white">
        JYBK<span class="text-yellow-400">.</span>
      </div>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex gap-8 items-center text-sm font-medium">
        <li v-for="link in links" :key="link.name">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            :class="[
              'transition duration-300 hover:text-yellow-400',
              activeSection === link.href ? 'text-yellow-400' : 'text-white'
            ]"
          >
            {{ link.name }}
          </a>
        </li>

        <!-- CTA -->
        <li>
          <a
            href="#booking"
            @click.prevent="scrollTo('#booking')"
            class="ml-4 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Book Now
          </a>
        </li>
      </ul>

      <!-- MOBILE BUTTON -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </div>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div v-if="isOpen" class="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6">
        <ul class="flex flex-col gap-6 text-lg mt-6">
          <li v-for="link in links" :key="link.name">
            <a
              @click="handleMobileClick(link.href)"
              class="block hover:text-yellow-400"
            >
              {{ link.name }}
            </a>
          </li>

          <li>
            <a
              @click="handleMobileClick('#booking')"
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
      activeSection: '#home',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Music', href: '#music' },
        { name: 'Booking', href: '#booking' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    handleMobileClick(section) {
      this.scrollTo(section)
      this.isOpen = false
    },
    scrollTo(section) {
      const el = document.querySelector(section)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50

      const sections = this.links.map(link => document.querySelector(link.href))
      sections.forEach((sec, index) => {
        if (sec) {
          const top = sec.offsetTop - 100
          const bottom = top + sec.offsetHeight
          if (window.scrollY >= top && window.scrollY < bottom) {
            this.activeSection = this.links[index].href
          }
        }
      })
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
/* SLIDE ANIMATION */
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