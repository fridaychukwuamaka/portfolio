<template>
  <div id="page">
    <div id="title">
      <p>About</p>
      <div></div>
    </div>

    <div id="about">
      <div id="row">
        <transition name="slide-home-up" appear>
          <p id="text">
            My name is <b> <i>Friday Chukwauamaka Kareen</i></b> I am currently
            a 400 level student studying computer science at Federal University
            of Petroleum Resources Effurun, Delta State. I love to solve
            problems. Whether it's finding the most elegant way to write a line
            of code or figuring out which chord fits best into a progression, I
            love the challenge of finding a way and discovery solutions. As long
            as there's a problem to solve or a challenge to puzzle over, it's
            bound to be something I love!
          </p>
        </transition>
        <transition name="fade3" appear>
          <img
            id="image"
            src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
            alt="pix"
          />
        </transition>
      </div>
      <!-- <div id="spaced"></div> -->
    </div>
    <!-- <MoreAbout/> -->
  </div>
</template>

<script>
import MoreAbout from "./MoreAbout";
export default {
  name: "About",
  components: {
    MoreAbout,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.slide-home-up-enter {
  opacity: 0;
}
.slide-home-up-enter-active {
  opacity: 0;
  animation: slide-home-up-in 1s ease-out 1s forwards;
  /* transition:  opacity 1s; */
  /* opacity: 0; */
  /* opacity: 1 !important; */
}
.slide-home-up-leave {
  /* opacity: 1 !important; */
}
.slide-home-up-leave-active {
  /* animation: slide1-out 1s ease-out forwards; */
  /* opacity: 1 !important; */
}

@keyframes slide-home-up-in {
  from {
    transform: translateY(150px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#page {
  min-height: calc(100vh - 144.5px);
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  margin-top: 69.5px;
  /* margin-bottom: 75px; */
}
#spaced {
  height: 75px;
  /*width: 100%*/
}
#image {
  height: auto;
  width: 20%;
  border-radius: 3%;
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
  align-items: center;
  /*width: 100%*/
  margin: 0;
  margin-top: 15px;
  margin-bottom: 50px;
  flex-direction: column;

      width: fit-content;
    align-self: center;

  /* display: none; */
}
#title div {
  height: 1.5px;
  width: 60px;
  background-color: black;
}
#logo {
  margin-left: 0;
  display: none;
}
#about {
  display: flex;
  justify-items: center;
  padding: 0 10px 0 35px;
  flex-direction: column;
  margin: 0;
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
  margin-top: 0;
  font-size: 0.85em;
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
  #title div {
  width: 80px;
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
    align-items: flex-start;
    margin-bottom: -5px;
    width: unset;
    align-self: unset;
  }
}
</style>
