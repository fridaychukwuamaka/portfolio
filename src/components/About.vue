<template>
  <div id="page">
    <div id="title">
      <p>About</p>
      <div></div>
    </div>

    <div id="about">
      <div id="row">
        <transition name="slide-home-up" appear>
          <div>
            <p id="text">
              Hi, I'm <b>Friday Chukwuamaka Kareen</b>, a mobile developer based
              in Nigeria with a deep passion for solving problems through
              innovative solutions. Whether it’s crafting clean, efficient code
              or finding the perfect balance in a chord progression, I thrive on
              challenges that push me to think creatively.
            </p>

            <p id="text">
              While my primary expertise lies in Flutter, I also work with
              Arduino Express and Vue from time to time, extending my
              development skills into hardware projects and web interfaces. This
              diversity in my work allows me to create unique, integrated
              solutions that blend both mobile and interactive systems.
            </p>
            <p id="text">
              Beyond development, I have a strong interest in music, and I find
              joy in composing and exploring chord progressions in my free time.
            </p>
            <p id="text">
              Lately, I’ve been diving into cutting-edge technologies,
              continuously expanding my skillset and staying ahead of trends to
              deliver modern, high-quality solutions.
            </p>

            <p id="text">
              Here are a few technologies I've been working with recently:
            </p>
            <ul class="skills-list">
              <li>Flutter</li>
              <li>Firebase</li>
              <li>Node.js</li>
              <li>Vue</li>
              <li>MongoDB</li>
              <li>Arduino</li>
            </ul>
          </div>
        </transition>
        <transition name="fade3" appear>
          <img
            id="image"
            src="../assets/images/dp.jpg"
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
export default {
  name: "AboutPage",
  components: {},
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

ul.skills-list {
  list-style-type: none;
  display: flex;
  gap: 0px 10px;
  font-weight: 600;
  font-size: 0.8em;
  padding-left: 0px;
  margin: 10px 0px 0px;
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
  flex-direction: column;
  margin-top: 69.5px;
  /* margin-bottom: 75px; */
}
#spaced {
  height: 75px;
  /*width: 100%*/
}
#image {
  width: auto;
  height: calc(26vw);
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.27);
  cursor: pointer;
  /* transform: rotateY(180deg); */
}
#image:hover {
  /* animation: flip  ease-in-out 14s forwards; */
  /* transform: rotateY(0deg); */
}
@keyframes flip {
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(180deg);
  }
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
  align-items: start;
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
  margin-bottom: 15px;
  font-size: 0.85em;
  font-family: Montserrat-Regular;
  text-align: justify;
}

/* 767px and above */
@media only screen and (min-width: 768px) {
  #row {
    margin: 0 5%;
    align-self: center;
  }
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
    align-items: center;
  }
  #text {
    margin: 0;
  }

  .skills-list {
    margin-bottom: 50px !important;
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
