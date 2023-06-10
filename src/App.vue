<template>
  <div id="app">
    <router-view />
    <div class="footer">
      <div class="centered-text">
        <a target="_blank" href="https://beian.miit.gov.cn/"
          >沪ICP备2022012105号-2</a
        >
        &nbsp; @2023 TimberCoolBoy
      </div>
    </div>
  </div>
</template>

<style>
#app {
  padding: 20px;
  margin: 0 auto;
  max-width: 1024px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0%;
  width: 100%;
  color: #5c6b77;
}

.centered-text {
  display: flex;
  justify-content: center;
}
</style>
