<template>
  <div id="splash-screen">
    <img id="logo" alt="logo" src="../assets/images/Group 7.png" />
    <p id="signature">amaka</p>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
};
</script>

<style scoped>
#logo {
  height: 70px;
  width: 70px;
}
#splash-screen {
  display: flex;
  justify-content: center;
  flex-flow: column;
  /* margin: auto; */
  align-items: center;
  height: 100vh;
}
#signature {
  position: fixed;
  margin: 0;
  font-family: Southampton;
  font-size: 40px;
  bottom: 20px;
  right: 20px;
}
</style>
