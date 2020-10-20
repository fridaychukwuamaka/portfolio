<template>
  <div id="contact">
    <div id="title">
      <p>Contact</p>
      <div></div>
    </div>

    <p id="contact-text">
      You want to talk to me, feel free to email or DM me using the following
      platforms.
    </p>

    <div id="footer">Designed & developed by<br />Chukwuamaka Friday</div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
#contact {
  padding: 15px;
  margin-top: 30px;
}
#title p {
  margin-top: 0;
  margin-bottom: 5px;
  font-family: Montserrat-SemiBold;
  font-size: 1.07em;
}
#footer {
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Montserrat-Medium;
  font-size: 0.9em;
  text-align: center;
  line-height: 30px;
}
#title {
  display: flex;
  align-items: flex-start;
  /*width: 100%*/
  margin: 0;
  flex-direction: column;
}
#title div {
  height: 1.5px;
  width: 80px;
  margin-bottom: 25px;
  background-color: black;
}
@font-face {
  font-family: Montserrat-SemiBold;
  src: url(../assets/icon/Montserrat/Montserrat-SemiBold.ttf);
}
@font-face {
  font-family: Montserrat-Medium;
  src: url(../assets/icon/Montserrat/Montserrat-Medium.ttf);
}
#contact-text {
  font-family: Montserrat-Medium;
  font-size: 1.25em;
  line-height: 45px;
  margin: 0;
  text-align: left;
  margin-bottom: 150px;
}
</style>
