<template>
  <section id="gallery" class="py-24 bg-slate-950 text-white px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <p class="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-4">Gallery</p>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Moments from the Movement</h2>
        <p class="max-w-2xl mx-auto text-gray-400">
          Scenes from performances, studio sessions, and ministry moments that reflect JYBK’s vision.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition-transform duration-500 hover:-translate-y-1 hover:shadow-yellow-500/20"
        >
          <img
            :src="item.src"
            :alt="item.title"
            class="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div class="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

          <div class="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4">
            <span class="inline-flex items-center rounded-full bg-yellow-400/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-300 mb-3">
              {{ item.category }}
            </span>
            <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '../assets/Gallery1.png'
import img2 from '../assets/Gallery2.png'
import img3 from '../assets/Gallery3.png'
import img4 from '../assets/Gallery4.png'
import img5 from '../assets/Gallery5.png'
import img6 from '../assets/Gallery6.png'
import img7 from '../assets/Gallery7.png'
import img8 from '../assets/Gallery8.png'
import img9 from '../assets/Gallery9.png'
import img10 from '../assets/Gallery10.png'
import img11 from '../assets/Gallery11.png'
import img12 from '../assets/Gallery12.png'
import img13 from '../assets/Gallery13.png'
import img14 from '../assets/Gallery14.png'
import img15 from '../assets/Gallery15.png'
import img16 from '../assets/Gallery16.png'
import img17 from '../assets/Gallery17.png'
import img18 from '../assets/Gallery18.png'
import img19 from '../assets/Gallery19.png'
import img20 from '../assets/Gallery20.png'
import img21 from '../assets/Gallery21.png'
import img22 from '../assets/Gallery22.png'
import img23 from '../assets/Gallery23.png'
import img24 from '../assets/Gallery24.png'
import img25 from '../assets/Gallery25.png'
import img26 from '../assets/Gallery26.png'
import img27 from '../assets/Gallery27.png'
import img28 from '../assets/Gallery28.png'
import img29 from '../assets/Gallery29.png'
import img30 from '../assets/Gallery30.png'
import img31 from '../assets/Gallery31.png'
import img32 from '../assets/Gallery32.png'
import img33 from '../assets/Gallery33.png'
import img34 from '../assets/Gallery34.png'
import img35 from '../assets/Gallery35.png'
import img36 from '../assets/Gallery36.png'
import img37 from '../assets/Gallery37.png'
import img38 from '../assets/Gallery38.png'
import img39 from '../assets/Gallery39.png'
import img40 from '../assets/Gallery40.png'
import img41 from '../assets/Gallery41.png'
import img42 from '../assets/Gallery42.png'
import img43 from '../assets/Gallery43.png'
import img44 from '../assets/Gallery44.png'
import img45 from '../assets/Gallery45.png'

const images = [
  { title: 'Performing PWAC 2026', category: 'Performance', description: 'A deep moment of Worship.', src: img1 },
  { title: 'Performing PWAC 2026', category: 'Performance', description: 'Great Moment at The Church of Pentecost.', src: img2 },
  { title: 'Performing Shiloh Outreach', category: 'Performance', description: 'Great moment with the Youth.', src: img3 },
  { title: 'Mommy ❤️', category: 'Mom', description: 'A loving moment with her child.', src: img4 },
  { title: 'JYBK', category: 'Photo', description: '.', src: img5 },
  { title: 'Shower Me Tour', category: 'Performance', description: 'Nimba University Sannquellie Series.', src: img6 },
  { title: 'Choir Performance', category: 'Choir', description: 'A choir performing in unison at Shower me series.', src: img7 },
  { title: 'BackUp Team', category: 'Team', description: 'Amazing team members.', src: img8 },
  { title: 'Team', category: 'Team', description: 'Welcoming Team to sanniquellie for shower me series at Nimba University.', src: img9 },
  { title: 'Radio Appearance', category: 'Radio Talk', description: 'Appearing on a local radio show.', src: img10 },
  { title: 'Radio Interview', category: 'Radio Talk', description: 'Artist on a local radio show.', src: img11 },
  { title: 'Arrival in Sanniquellie', category: 'Arrival', description: 'Arrival to Sanniquellie for the Shower Me series.', src: img12 },
  { title: 'Ministration at Campus Fire', category: 'Ministration', description: 'Leading the congregation in worship.', src: img13 },
{ title: 'Ministration at Campus Fire', category: 'Ministration', description: 'Engaging with the students through worship.', src: img14 },
  { title: 'Ministration at Campus Fire', category: 'Ministration', description: 'Students engaged in worship.', src: img15 },
  { title: 'Drummer', category: 'Drummer', description: 'Close-up of the drummer in action.', src: img16 },
  { title: 'BackUp Singer', category: 'Backup', description: 'Close-up of the backup singer in action.', src: img17 },
  { title: 'Guitarist', category: 'Performance', description: 'Close-up of the guitarist in action.', src: img18 },
  { title: 'Crowd Reaction', category: 'Campus Fire', description: 'Reaction of the crowd to a powerful moment.', src: img19 },
 { title: 'Crowd Panorama', category: 'Campus Fire', description: 'Wide panoramic view of the audience.', src: img20 },
  { title: 'Portrait', category: 'Campus Fire', description: 'Group gathered outdoors for worship.', src: img21 },
  { title: 'Full Auditorium', category: 'Church', description: 'Wide shot of a packed auditorium.', src: img22 },
  { title: 'Sunday Service', category: 'Church', description: 'A vibrant Sunday service in progress.', src: img23 },
  { title: 'Stage Praise', category: 'Campus Fire', description: 'Lifted in a moment of praise.', src: img24 },
  { title: 'JYBK', category: 'Photo', description: '', src: img25 },
  { title: 'Crib Section', category: 'Crib Section', description: 'Crib section with JYBK.', src: img26 },
  { title: 'Crib Section', category: 'Crib Section', description: 'Crib section with JYBK.', src: img27 },
  { title: 'Crib Section', category: 'Crib Section', description: 'Crib section with JYBK.', src: img28 },
  { title: 'Studio Session', category: 'Recording', description: 'In-studio vocals and tracking.', src: img29 },
  { title: 'Onstage Moment', category: 'Performance', description: 'High-energy moment on stage.', src: img30 },
  { title: 'Celestia Award', category: 'Event', description: 'Recognition at the Celestia Awards.', src: img31 },
  { title: 'Celestia Award', category: 'Event', description: 'Recognition at the Celestia Awards.', src: img32 },
  { title: 'Ministering at Shiloh Outreach', category: 'Event', description: 'Ministering at the Shiloh Outreach ministry.', src: img33 },
  { title: 'Ministering at Shiloh Outreach', category: 'Event', description: 'Crowd engaging with the songs.', src: img34},
  { title: 'JYBK', category: 'Special Ministration', description: 'Special ministration moment.', src: img35 }
  ,{ title: 'Special Visit to Nimba', category: 'Event', description: 'An energetic service.', src: img36 }
  ,{ title: 'Portrait', category: 'Portrait', description: 'Artistic portrait from a live performance.', src: img37 }
  ,{ title: 'Visit to High School', category: 'Event', description: 'Engaging with students at a local high school.', src: img38 }
  ,{ title: 'Rainbow Conference ', category: 'Event', description: 'ministering at the rainbow conference.', src: img39 }
  ,{ title: 'Graduation Ceremony', category: 'Event', description: 'Graduating from the AGOMA 2024 Artist Masterclass', src: img40 }
  ,{ title: 'God is Enough', category: 'On Set', description: 'God is Enough video shooting on set.', src: img41 }
  ,{ title: 'JYBK', category: 'Day-Out', description: 'Candid moment during a day-out.', src: img42 }
  ,{ title: 'JYBK', category: 'On Set', description: 'JYBK on set.', src: img43 }
  ,{ title: 'God is Enough', category: 'Video Shooting', description: 'God is Enough video shooting.', src: img44 }
  ,{ title: 'God is Enough', category: 'On Set', description: 'God is Enough video shooting on set.', src: img45 }
]
</script>
