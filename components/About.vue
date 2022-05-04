<template>
  <section id="about" class="about-section">
    <div class="about-img">
      <img class="normal" src="~/assets/img/about.webp" alt="About" />
      <img class="thin" src="~/assets/img/aboutthin.webp" alt="About" />
    </div>
  </section>
</template>

<style scoped>
  .about-section {
    height: 100vh;
    background-color: #202020;
    background-size: cover;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .thin {
    display: none;
  }

  @media screen and (max-width: 1590px) {
    .about-img img {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 1300px) {
    .about-img img {
      scale: 0.7;
    }
  }

  @media screen and (max-width: 1050px) {
    .normal {
      display: none;
    }

    .thin {
      display: flex;
    }
  }

  @media screen and (max-width: 500px) {
    .normal {
      display: none;
    }

    .thin {
      display: flex;
      width: 45rem;
    }
  }

  @media screen and (max-width: 345px) {
    .normal {
      display: none;
    }

    .thin {
      display: flex;
      width: 40rem;
    }
  }
</style>
