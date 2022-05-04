<template>
  <header class="navbar-container">
    <h1 class="text-logo">CHINOU</h1>
    <a target="_blank" href="https://github.com/chinouvm" class="git-button"
      ><i class="fa-brands fa-github"></i
    ></a>
  </header>
</template>

<style scoped>
  .navbar-container {
    z-index: 1000;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .text-logo {
    font-size: 1.5rem;
    color: #fff;
    margin-left: 3rem;
    margin-top: 1.5rem;
  }

  .git-button {
    text-decoration: none;
    color: white;
    margin-right: 3rem;
    margin-top: 1.5rem;
    font-size: 3rem;
    transition: all 0.1s ease;
  }

  .git-button:hover {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
