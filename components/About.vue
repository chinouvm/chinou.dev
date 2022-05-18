<template>
  <section id="about" class="about-section">
    <header class="header">Hey! I'm Chinou.</header>
    <section class="text">
      <section class="section introduction">
        <div class="txt">
          <p class="intr-header">I'm...</p>
          <ol class="intr-list">
            <li>an <strong>ICT & Infrastructure</strong> student in my second semester.</li>
            <li>Interested in <strong>Golang, Python, C++, Cyber Security and DevOps</strong></li>
          </ol>
        </div>
      </section>
      <section class="section tools">
        <div class="txt">
          <p class="tools-header">Tools & Languages that I frequently use.</p>
          <ol class="tools-list">
            <li>Github Actions</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>Go(lang)</li>
            <li>C++</li>
            <li>Git</li>
            <li>Arduino Framework</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Svelte</li>
            <li>Postman</li>
            <li>Visual Studio Code</li>
            <li>Ubuntu</li>
            <li>Kali Linux</li>
          </ol>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
  .about-section {
    height: 100vh;
    background-color: #202020;
  }
  .header {
    font-weight: 900;
    min-height: 25vh;
    font-size: 3rem;
    color: #de6a73;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section {
    margin-bottom: 5rem;
  }

  .intr-list {
    padding-left: 0;
    list-style-position: inside;
    color: #c8c8c8;
    padding-top: 10px;
    line-height: 2rem;
    font-size: 1.2rem;
  }

  .intr-header {
    color: #de6a73;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .tools-list {
    padding-left: 0;
    list-style-position: inside;
    color: #c8c8c8;
    padding-top: 10px;
    line-height: 2rem;
    font-size: 1.2rem;
  }

  .tools-header {
    color: #de6a73;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .text {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    align-items: left;
  }

  @media screen and (max-width: 700px) {
    .section {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    .intr-list li {
      padding-bottom: 10px;
    }
  }

  @media screen and (max-width: 450px) {
    .header {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 355px) {
    .header {
      font-size: 2.1rem;
    }
  }

  @media screen and (max-height: 1150px) {
    .about-section {
      padding-bottom: 60rem;
    }
  }
</style>
