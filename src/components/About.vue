<template>
  <div id="page">
    <img id="logo" alt="logo" src="../assets/images/Group 7.png" />

    <div id="title">
      <p>About</p>
      <div></div>
    </div>

    <div id="about">
      <div id="row">
        <p id="text">
          My name is <b> <i>Friday Chukwauamaka Kareen</i></b> I am currently a
          400 level student studying computer science at Federal University of
          Petroleum Resources Effurun, Delta State. I love to solve problems.
          Whether it's finding the most elegant way to write a line of code or
          figuring out which chord fits best into a progression, I love the
          challenge of finding a way and discovery solutions. As long as there's
          a problem to solve or a challenge to puzzle over, it's bound to be
          something I love!
        </p>
        <img
          id="image"
          src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
          alt="pix"
        />
      </div>
      <div id="spaced"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#page {
  height: 100vh;
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  /* margin-bottom: 75px; */
}
#spaced {
  height: 75px;
  /*width: 100%*/
}
#image {
  height: auto;
  width: 20%;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.27);
}
#title p {
  margin-top: 0;
  margin-bottom: 5px;
  font-family: Montserrat-SemiBold;
  font-size: 1.07em;
}
#title {
  display: flex;
  justify-content: center;
  /*width: 100%*/
  margin: 0;
  margin-bottom: -5px;
  flex-direction: column;
  display: none;
}
#title div {
  height: 1.5px;
  width: 80px;
  background-color: black;
}
#logo {
  margin-left: 0;
  display: none;
}
#about {
  display: flex;
  justify-items: center;
  padding: 35px;
  flex-direction: column;
  margin: auto;
}
#row {
  display: flex;
  align-items: center;
}
@font-face {
  font-family: Montserrat-Medium;
  src: url(../assets/icon/Montserrat/Montserrat-Medium.ttf);
}
#text {
  height: fit-content;
  margin: auto;
  line-height: 35px;
  margin-right: 50px;
  font-size: 15px;
  font-family: Montserrat-Regular;
  text-align: justify;
}
@media only screen and (max-width: 767px) {
  #page {
    padding: 15px;
    height: unset;
  }
  #spaced {
    height: 0;
  }
  #logo {
    margin-left: 0;
    display: none;
  }
  #about {
    padding: 35px 0;
    margin: 0;
  }
  #row {
    flex-direction: column;
    padding: 0;
  }
  #text {
    margin: 0;
    margin-bottom: 50px;
  }
  #image {
    width: 75%;
    height: auto;
  }
  #title {
    display: flex;
    /* align-items: flex-end; */
  }
}
</style>
