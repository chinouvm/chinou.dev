<template>
  <header class="navbar-container">
    <h1 class="text-logo">CHINOU</h1>
    <a target="_blank" href="https://github.com/chinouvm" class="hide"
      ><i class="fa-brands fa-github"></i
    ></a>
    <a target="_blank" href="https://github.com/chinouvm" class="show git-button"
      >Visit my Github <i class="fa-brands fa-github"></i
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
    border: 2px solid #ffffff;
    border-radius: 25px;
    padding: 10px 40px 10px 40px;
    transition: all 0.1s ease;
  }

  .git-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 1750px) {
    .show {
      display: none;
    }

    .hide {
      display: flex;
      text-decoration: none;
      color: white;
      font-size: 2.5rem;
      margin-right: 3rem;
      margin-top: 1.5rem;
    }

    .navbar-container {
      display: fixed;
    }
  }
</style>
