<template>
  <section id="About" class="about-section">
    <div class="about-text">
      <h1 class="title">ABOUT</h1>
    </div>
  </section>
</template>

<style scoped>
  .about-section {
    height: 100vh;
    margin-left: -1px;
    background: url('~/Assets/img/bg2.png') no-repeat;
    background-size: cover;
    background-position: center;
  }

  .about-text {
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 100%;
    padding-top: 5rem;
  }

  .title {
    font-family: 'Sans Forgetica';
    font-size: 7rem;
    letter-spacing: 1.5rem;
  }

  /* Media Queries */
  @media screen and (max-width: 830px) {
    .title {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 620px) {
    .title {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 520px) {
    .title {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 445px) {
    .title {
      font-size: 2.5rem;
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 380px) {
    .title {
      font-size: 2.1rem;
    }
  }
</style>
