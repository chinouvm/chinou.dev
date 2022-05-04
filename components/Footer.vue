<template>
  <div class="footer-basic">
    <footer class="footer-container">
      <div class="socials">
        <a target="_blank" href="https://github.com/chinouvm" class="social"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a target="_blank" href="https://www.instagram.com/chinouvm/" class="social instagram"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a target="_blank" href="mailto:me@chinou.nl" class="social"
          ><i class="fa-solid fa-envelope"></i
        ></a>
      </div>
      <p class="copyright">
        Made with <i class="fa-solid fa-heart"></i> &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<style scoped>
  .footer-basic {
    height: 21rem;
    background: url('~/assets/img/footerbg.webp') no-repeat;
    background-color: #202020;
    background-position: top;
    background-size: cover;
  }

  .footer-container {
    padding-top: 14rem;
  }

  .socials {
    text-align: center;
    padding-bottom: 15px;
  }

  .social {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    margin: 0 8px;
    color: inherit;
    color: white;
  }

  .social:hover {
    opacity: 0.9;
  }

  .copyright {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0;
  }
</style>
