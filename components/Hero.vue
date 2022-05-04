<template>
  <section class="hero-section">
    <div class="hero-text">
      <h1 class="title">Chinou</h1>
      <p class="subtitle">
        <vue-writer
          :array="[
            'Student ICT & Infrastructure',
            'Knows how to center a div.',
            'Knows how to exit vim.',
            'What is Stackoverflow?',
            'Loads of “undocumented features”.',
            'P E B C A K',
          ]"
          :typeSpeed="50"
          :eraseSpeed="40"
          :delay="3000"
        />
      </p>
    </div>
    <div class="scroll-button">
      <a href="#about" v-smooth-scroll class="scrolldown">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </a>
    </div>
  </section>
</template>

<style>
  .hero-section {
    height: 100vh;
    background: url('~/Assets/img/bg.webp') no-repeat;
    background-color: #202020;
    background-size: cover;
    background-position: bottom;
  }

  .hero-text {
    color: white;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .scroll-button {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    margin-top: -10rem;
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
    color: #de6a73;
  }

  .is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: #de6a73;
    animation: blink 1200ms infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
  }

  .scrolldown::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #ffffff66;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }
    40% {
      opacity: 1;
      height: 10px;
    }
    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }
    100% {
      height: 3px;
      opacity: 0;
    }
  }
  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }
  .chevrondown:nth-child(odd) {
    animation: pulse 500ms ease infinite alternate;
  }
  .chevrondown:nth-child(even) {
    animation: pulse 500ms ease infinite alternate 250ms;
  }
  @keyframes pulse {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

  /* Media Queries */
  @media screen and (max-width: 830px) {
    .title {
      font-size: 5rem;
    }

    .subtitle {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 620px) {
    .title {
      font-size: 4rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 520px) {
    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 445px) {
    .title {
      font-size: 2.5rem;
      margin-left: 20px;
    }

    .subtitle {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 380px) {
    .title {
      font-size: 2.1rem;
    }

    .subtitle {
      font-size: 0.5rem;
    }
  }
</style>
