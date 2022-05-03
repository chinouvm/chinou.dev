<template>
  <section class="hero-section">
    <div class="hero-text">
      <h1 class="title">Chinou</h1>
      <p class="subtitle">Student ICT & Infrastructure</p>
    </div>
  </section>
</template>

<style scoped>
  .hero-section {
    height: 100vh;
    background-image: url('~/Assets/img/bg.svg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 90;
  }

  .hero-text {
    color: white;
  }

  .title {
    font-family: 'CustomFont';
    font-size: 7rem;
    letter-spacing: 1.5rem;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1.4rem;
    padding-top: 30px;
  }
</style>
