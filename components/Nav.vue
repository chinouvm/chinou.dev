<template>
  <header class="navbar-container">
    <h1 class="text-logo">CHINOU</h1>
    <a target="_blank" href="https://github.com/chinouvm" class="git-button"
      >Visit my Github <i class="fa-brands fa-github"></i
    ></a>
  </header>
</template>

<style>
  .navbar-container {
    z-index: 1000;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .text-logo {
    font-size: 1.5rem;
    color: #fff;
    margin-left: 2%;
    margin-top: 1%;
  }

  .git-button {
    text-decoration: none;
    color: white;
    margin-right: 2%;
    margin-top: 1%;
    border: 2px solid #ffffff;
    border-radius: 25px;
    padding: 10px 40px 10px 40px;
  }

  .git-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: ease 0.1s;
  }
</style>
