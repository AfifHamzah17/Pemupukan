<template>
  <div class="carousel-card">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" :transition="500">
      <slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item relative">
          <div class="image-container p-4">
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="carousel-image"
            >
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end rounded-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">{{ slide.title }}</h2>
              <p class="text-sm md:text-base max-w-2xl text-white drop-shadow-md">{{ slide.description }}</p>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'CarouselComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'Dashboard Pemupukan',
          description: 'Sistem informasi untuk monitoring dan pengelolaan pemupukan tanaman yang lebih efisien.',
          image: '/3.jpg'
        },
        {
          id: 2,
          title: 'Monitoring Real-Time',
          description: 'Pantau kegiatan pemupukan secara real-time untuk meningkatkan produktivitas perkebunan.',
          image: '/4.jpg'
        },
        {
          id: 3,
          title: 'Analisis Data Pemupukan',
          description: 'Dapatkan insight mendalam dari data pemupukan untuk pengambilan keputusan yang lebih baik.',
          image: '/5.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Mengganti background dengan gradien biru yang sama dengan main-container */
.carousel-card {
  background: linear-gradient(135deg, #00ABE4, #0077B6);
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Bayangan sedikit lebih gelap untuk kontras */
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Border putih semi-transparan */
}

.carousel__item {
  position: relative;
}

.carousel__slide {
  padding: 0;
}

.image-container {
  padding: 1rem;
  transition: all 0.3s ease;
}

/* Gaya khusus untuk gambar carousel */
.carousel-image {
  width: 100%;
  height: 16rem;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1); /* Bayangan lebih gelap untuk kontras dengan gradien */
  transition: transform 0.5s ease, box-shadow 0.3s ease;
}

/* Efek hover pada gambar */
.carousel-image:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Efek hover pada container gambar */
.image-container:hover {
  transform: translateY(-2px);
}

/* Responsive untuk ukuran gambar */
@media (min-width: 768px) {
  .carousel-image {
    height: 24rem;
  }
}

/* Style untuk navigasi dan pagination */
:deep(.carousel__pagination-button::after) {
  background-color: #FFFFFF; /* Putih */
  border-radius: 50%;
  opacity: 0.7;
  width: 8px;
  height: 8px;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: #FFFFFF; /* Putih untuk pagination aktif, agar lebih menonjol */
  opacity: 1;
  transform: scale(1.2); /* Sedikit memperbesar indikator aktif */
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(255, 255, 255, 0.2); /* Background putih semi-transparan */
  color: #FFFFFF; /* Ikon putih */
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  backdrop-filter: blur(4px); /* Efek blur modern */
  border: 1px solid rgba(255, 255, 255, 0.3);
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: #FFFFFF; /* Background putih saat hover */
  color: #00ABE4; /* Ikon biru saat hover */
}

/* Style untuk title dan description */
.carousel__item h2 {
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.carousel__item p {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}
</style>