<template>
  <div id="contact">
    <div id="title">
      <p>Contact</p>
      <div></div>
    </div>

    <p id="contact-text">
      If you want to talk to me, feel free to email or DM me using the following platforms.
    </p>
    <div id="icon-row">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/chukwuamaka-friday-14622a169/"
        id="icon"
      >
        <vue-feather type="linkedin" size="20" />

        <p>LinkedIn</p>
      </a>
      <a target="_blank" href="https://github.com/fridaychukwuamaka" id="icon">
        <vue-feather type="github" size="20" />
        <p>GitHub</p>
      </a>
      <form
        action="mailto:fridaychukwuamaka@gmail.com?subject= message"
        method="get"
        enctype="text/plain"
      >
        <button id="icon" class="email-icon">
          <vue-feather type="mail" size="20" />

          <p>Email</p>
        </button>
      </form>
    </div>

    <div id="footer">Designed & developed by<br />Chukwuamaka Friday</div>
  </div>
</template>

<script>
import VueFeather from "vue-feather";

export default {
  name: "ContactPage",
  components: {
    "vue-feather": VueFeather,
  },
};
</script>

<style scoped>
#contact {
  padding: 15px;
  margin-top: 30px;
}
#icon-row {
  margin-top: 25px;
  display: flex;
  max-width: calc(100vw - 30px);
  flex-wrap: wrap;
  row-gap: 25px;
  grid-row-gap: 25px;
  margin-bottom: 100px;
  column-gap: 20px;
  grid-column-gap: 20px;
}
.email-icon {
  background: transparent;
  border: none;
  font: unset;
  padding: 0;
  outline: none;
}

a {
  color: black;
}
#icon {
  display: flex;
  align-items: center;
  /* margin-right: 30px; */
}
#icon p {
  margin: 0;
  margin-left: 5px;
}
#title p {
  margin-top: 0;
  margin-bottom: 5px;
  font-family: Montserrat-SemiBold;
  font-size: 1.07em;
}
#footer {
  /* position: relative; */
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Montserrat-Medium;
  font-size: 0.75em;
  line-height: 1.5 !important;
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
  /* margin-bottom: 150px; */
}
</style>
