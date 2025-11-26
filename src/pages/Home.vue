<template>
  <!-- Wrapper untuk seluruh halaman dengan background biru muda -->
  <div class="main-wrapper">
    <!-- Container Utama dengan background ghost white -->
    <div class="main-container">
      <!-- Header dengan background gradien biru -->
      <header class="main-header">
        <h1>Dashboard Pemupukan</h1>
        <p>Sistem Informasi Pemupukan Tanaman</p>
      </header>

      <!-- Konten Utama dengan background ghost white -->
      <main class="main-content">
        <!-- Kartu untuk Carousel dengan background ghost white -->
        <div class="content-card carousel-card">
          <CarouselComponent />
        </div>

        <!-- Kartu untuk Pilihan Dashboard -->
        <div class="content-card dashboard-selection-card">
          <div class="section-header">
            <h2>Pilih Dashboard</h2>
            <div class="section-header-line"></div>
          </div>
          
          <div class="cards-grid">
            <!-- Card untuk Monitoring Pemupukan dengan background gradien biru -->
            <router-link to="/pemupukan" class="card-link">
              <div class="dashboard-card">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div class="card-body">
                  <h3>Monitoring Pemupukan</h3>
                  <p>Dashboard untuk memantau kegiatan dan data pemupukan tanaman kelapa sawit secara real-time.</p>
                  <div class="card-footer">
                    <span>Lihat Dashboard</span>
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent.vue';

export default {
  name: 'Home',
  components: {
    CarouselComponent
  }
}
</script>

<style scoped>
/* --- GLOBAL & FONT --- */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:global(body) {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #E9F1FA; /* Latar belakang Biru Muda */
  color: #374151;
}

/* --- WRAPPER & CONTAINER UTAMA --- */
.main-wrapper {
  min-height: 100vh;
  background-color: #E9F1FA; /* Biru Muda */
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.main-container {
  width: 100%;
  max-width: 1200px;
  /* Diubah menjadi Ghost White */
  background-color: #F8F8FF;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  color: #374151; /* Teks default gelap */
}

/* --- HEADER MODERN --- */
.main-header {
  /* Diubah menjadi gradien biru */
  background: linear-gradient(135deg, #00ABE4, #0077B6);
  color: #FFFFFF;
  text-align: center;
  padding: 3rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.main-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #FFFFFF;
}

.main-header p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
}

/* --- KONTEN UTAMA --- */
.main-content {
  /* Diubah menjadi Ghost White */
  background-color: #F8F8FF;
  padding: 2rem 1.5rem;
}

/* --- KARTU-KARTU KECIL (CONTENT CARD) --- */
.content-card {
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.carousel-card {
  background-color: #F8F8FF; /* Ghost White */
  border: none;
  padding: 0;
}

.dashboard-selection-card {
  background-color: transparent;
  border: none;
  padding: 0;
}

/* --- SECTION HEADER DENGAN GARIS PEMISAH --- */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151; /* Teks gelap */
  margin: 0 0 1rem 0;
}

.section-header-line {
  width: 80px;
  height: 4px;
  /* Diubah menjadi gradien biru */
  background: linear-gradient(90deg, #00ABE4, #0077B6);
  border-radius: 2px;
}

/* --- GRID UNTUK DASHBOARD CARD --- */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-items: center;
}
@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* --- STYLE UNTUK DASHBOARD CARD --- */
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  max-width: 500px;
}

.dashboard-card {
  /* Diubah menjadi gradien biru */
  background: linear-gradient(135deg, #00ABE4, #0077B6);
  border: 1px solid rgba(255, 255, 255, 0.3); /* Border putih semi-transparan */
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-link:hover .dashboard-card {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
  border-color: #FFFFFF;
}

/* Ikon di dalam kartu */
.card-icon {
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.2); /* Background putih semi-transparan */
  color: #FFFFFF; /* Ikon putih */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.card-icon svg {
  width: 32px;
  height: 32px;
}

.card-link:hover .card-icon {
  background-color: #FFFFFF; /* Background putih saat hover */
  color: #00ABE4; /* Ikon biru saat hover */
}

/* Isi kartu */
.card-body h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF; /* Teks putih */
  margin: 0 0 0.5rem 0;
}

.card-body p {
  color: rgba(255, 255, 255, 0.9); /* Putih dengan sedikit transparansi */
  font-size: 0.875rem;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

/* Footer kartu (link) */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF; /* Teks putih */
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.card-link:hover .card-footer {
  color: rgba(255, 255, 255, 0.8);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.card-link:hover .arrow-icon {
  transform: translateX(4px);
}
</style>