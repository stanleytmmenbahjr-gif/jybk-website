<template>
  <section id="booking" class="py-20 bg-black text-white px-6 md:px-16">

    <!-- TITLE -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
        Connect & Collaborate
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Book JYBK for performances, collaborations, or ministry engagements.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

      <!-- LEFT: INFO -->
      <div class="space-y-8">

        <!-- DESCRIPTION -->
        <p class="text-lg text-gray-300 leading-relaxed">
          Experience the sound of a fast-rising gospel icon. Whether you're hosting an event,
          planning a collaboration, or just want to connect — let’s make it happen.
        </p>

        <!-- CONTACT CARDS -->
        <div class="space-y-4">

          <!-- EMAIL -->
          <a href="mailto:kolorybk203@gmail.com"
             class="block p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition">
            <p class="text-sm text-gray-400">Email</p>
            <p class="font-semibold">kolorybk203@gmail.com</p>
          </a>

          <!-- PHONE -->
          <a href="tel:+231770109631"
             class="block p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition">
            <p class="text-sm text-gray-400">Phone</p>
            <p class="font-semibold">+231 770 109 631</p>
          </a>

        </div>

        <!-- SOCIALS -->
        <div>
          <p class="mb-4 text-gray-400">Follow the Journey</p>

          <div class="flex flex-wrap gap-4">

            <!-- YOUTUBE -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-red-600">
              ▶
            </a>

            <!-- AUDIOMACK -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-orange-500">
              ♪
            </a>

            <!-- TIKTOK -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-pink-500">
              ♬
            </a>

            <!-- INSTAGRAM -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-gradient-to-r from-pink-500 to-yellow-500">
              ◎
            </a>

            <!-- FACEBOOK -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-blue-600">
              f
            </a>

            <!-- TWITTER/X -->
            <a href="#" target="_blank"
              class="social-btn hover:bg-gray-600">
              𝕏
            </a>

          </div>

          <p class="mt-4 text-yellow-400 font-bold">#TheWorldJYBK</p>
        </div>

      </div>

      <!-- RIGHT: FORM -->
      <div class="bg-gray-900 p-8 rounded-2xl shadow-lg">

        <form class="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            class="input"
          />

          <input
            type="email"
            placeholder="Your Email"
            class="input"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            class="input"
          ></textarea>

          <button
            type="submit"
            class="bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-500 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </section>
</template>

<style scoped>
/* INPUT STYLE */
.input {
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: #18181b;
  border: 1px solid #374151;
  color: inherit;
  outline: none;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.input:focus {
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
  border-color: #f59e0b;
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
</style>