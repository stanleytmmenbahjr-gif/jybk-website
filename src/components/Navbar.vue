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

      <!-- DESKTOP NAV -->
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

      <!-- MOBILE MENU BUTTON -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div v-if="isOpen" class="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6 pt-4 max-h-screen overflow-y-auto">
        <ul class="flex flex-col gap-4 mt-4">
          <li v-for="link in links" :key="link.name" class="border-b border-gray-700 pb-3">
            <a
              v-if="!link.route"
              :href="link.href"
              @click="isOpen = false"
              class="block text-white text-xl font-semibold py-3 px-4 rounded-lg transition duration-200 hover:bg-yellow-400 hover:text-black"
            >
              {{ link.name }}
            </a>
            <router-link
              v-else
              :to="link.route"
              @click="isOpen = false"
              class="block text-white text-xl font-semibold py-3 px-4 rounded-lg transition duration-200 hover:bg-yellow-400 hover:text-black"
            >
              {{ link.name }}
            </router-link>
          </li>

          <li class="pt-2">
            <a
              href="/#booking"
              @click="isOpen = false"
              class="block text-center bg-yellow-400 text-black py-3 px-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
            >
              Book Now
            </a>
          </li>
        </ul>

        <!-- Social icons section with label -->
        <div class="mt-8 pt-6 border-t border-gray-700">
          <p class="text-gray-400 text-sm font-semibold mb-4">Follow Us:</p>
          <div class="flex flex-wrap gap-4 justify-start">
            <a href="https://youtube.com/@jybklr?si=-2KzsqlNuhlDKXxG" target="_blank" class="social-btn-mobile hover:bg-red-600" @click="isOpen = false" aria-label="YouTube">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a href="https://audiomack.com/kolorybk203" target="_blank" class="social-btn-mobile hover:bg-orange-500" @click="isOpen = false" aria-label="Audiomack">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </a>

            <a href="https://www.tiktok.com/@theworldjybk?_r=1&_t=ZS-95MjEIuoi2v" target="_blank" class="social-btn-mobile hover:bg-pink-500" @click="isOpen = false" aria-label="TikTok">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/the_world_jybk?igsh=MXM2MjQ2NGlnNHJvbw==" target="_blank" class="social-btn-mobile hover:bg-gradient-to-r from-pink-500 to-yellow-500" @click="isOpen = false" aria-label="Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61551198231032" target="_blank" class="social-btn-mobile hover:bg-blue-600" @click="isOpen = false" aria-label="Facebook">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href="#" target="_blank" class="social-btn-mobile hover:bg-gray-600" @click="isOpen = false" aria-label="X">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
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

/* SOCIAL BUTTON */
.social-btn {
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #18181b;
  color: #ffffff;
  font-size: 1.25rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-btn:hover {
  transform: scale(1.1);
}

/* SOCIAL BUTTON FOR MOBILE MENU */
.social-btn-mobile {
  width: 3.5rem;
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #18181b;
  color: #ffffff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-btn-mobile:hover {
  transform: scale(1.15) translateY(-2px);
}
</style>
