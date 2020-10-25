<template>
  <div id="app">
    <transition name="fade3" appear>
      <div v-if="!splashScreen">
        <SplashScreen />
      </div>
    </transition>

    <div id="others" v-if="splashScreen">
      <Header />

      <div id="not-mobile">
        <router-view> </router-view>
      </div>

     

      <div id="mobile">
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <!-- <div id="contact">
          <Contact />
        </div> -->
      </div>

      <div id="menu">
        <ul>
          <router-link to="/" class="route">
            <li @click="activeLink(0)">
              <p>Home</p>
              <div :class="{ growed: link == 0 && currentRoute == '/' }"></div>
            </li>
          </router-link>
          <router-link to="/about" class="route">
            <li @click="activeLink(1)">
              <p>About</p>
              <div
                :class="{ growed: link == 1 || currentRoute == '/about' }"
              ></div>
            </li>
          </router-link>
          <router-link to="/work" class="route">
            <li @click="activeLink(2)">
              <p>My work</p>
              <div
                :class="{ growed: link == 2 || currentRoute == '/work' }"
              ></div>
            </li>
          </router-link>
          <router-link to="/experience" class="route">
            <li @click="activeLink(3)">
              <p>Experience</p>
              <div
                :class="{ growed: link == 3 || currentRoute == '/experience' }"
              ></div>
            </li>
          </router-link>
        </ul>
      </div>
       <div id="side-bar">
        <SideBar />
      </div>
      <transition name="fade" appear>
      <div id="to-top">
        <a href="#mobile"
          ><chevron-up-icon
            class="chevron-up-icon"
            size="1.5x"
          ></chevron-up-icon
        ></a>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MoreAbout from "./components/MoreAbout";
import SplashScreen from "./components/SplashScreen";
import SideBar from "./components/SideBar";
import { ChevronUpIcon } from "vue-feather-icons";

export default {
  name: "App",
  components: {
    Header,
    SplashScreen,
    SideBar,
    Home,
    About,
    MoreAbout,
    Work,
    Experience,
    ChevronUpIcon,
    Contact,
  },
  data: () => {
    return {
      splashScreen: false,
      windowWidth: window.screen.availWidth,
      currentRoute: window.location.pathname,
      link: 0,
    };
  },
  methods: {
    activeLink(val) {
      this.link = val;
    },
  },
  beforeUpdate: function() {
    this.currentRoute = window.location.pathname;
  },
  beforeCreate: function() {
    this.splashScreen = false;
    setTimeout(() => {
      this.splashScreen = true;
    }, 1500);
  },
};
</script>

<style>
#app {
  font-family: Montserrat-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  /* margin-top: 95.5px; */
  display: flex;
  margin-right: 55px;
  min-height: 100vh;
  flex-direction: column;
}
a {
  -webkit-tap-highlight-color: transparent;
}
button {
  -webkit-tap-highlight-color: transparent;
}
p:active {
  -webkit-tap-highlight-color: transparent;
}
#to-top {
  display: none;
}
#title p{
  font-size: 1em !important;
}

#menu {
  display: flex;
  align-items: center;
  height: 75px;
  background-color: #f5f0e3;
  position: fixed;
  bottom: 0;
  width: 100%;
}
#mobile {
  display: none;
}
#contact {
  display: none;
}
#menu ul {
  width: 45%;
  display: inline-flex;
  align-content: space-between;
  justify-content: space-between;
}
#menu ul .route li {
  list-style: none;
  align-content: space-between;
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
}

a {
  text-decoration: none;
}

#menu ul .route li p {
  margin-bottom: 3px;
  color: #000;
  text-decoration: none;
}

#menu ul li div {
  height: 1.5px;
  width: 0;
  background-color: #000000;
  border-radius: 1000px;
}

#menu ul li :hover {
  /* display: block; */
  cursor: pointer;
}
#work {
  display: block;
}
#about {
  display: block;
}
#logo {
  height: auto;
  width: 50px;
  margin: 15px 0 0 15px;
  /* position: absolute; */
  /* top: 30px;
  left: 30px; */
}
#side-bar{
  position: fixed;
    /* background: red; */
    top: 0;
    right: 0;
    height: 100vh;
    width: 55px;
    display: flex;
}
#others {
  margin-bottom: 75px;
}
.growed {
  transition: width 01s;
  width: 100% !important;
}

::-webkit-scrollbar {
  width: 0px;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-in;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
  display: none;
}
.fade3-enter {
  opacity: 0;
}
.fade3-enter-active {
  transition: opacity 1s ease-in;
}
.fade3-leave {
}
.fade3-leave-active {
  transition: opacity 1s ease-in-out;
  opacity: 0;
  display: none;
}

.fade2-enter {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 0.5s ease-in;
}
.fade2-leave {
}
.fade2-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
  display: none;
}
@font-face {
  font-family: Montserrat-Regular;
  src: url(assets/icon/Montserrat/Montserrat-Regular.ttf);
}
@font-face {
  font-family: Southampton;
  src: url(assets/icon/Southampton.ttf);
}
@font-face {
  font-family: Montserrat-SemiBold;
  src: url(assets/icon/Montserrat/Montserrat-SemiBold.ttf);
}
@media only screen and (max-width: 760px) {
  #app{
    margin-right: 0;
  }
  #menu {
    display: none;
  }
  #mobile {
    display: block;
  }
  #side-bar {
    display: none;
  }
  #not-mobile {
    display: none;
  }
  #contact {
    display: block;
  }
  #work {
    display: block;
  }
  #to-top {
    display: block;
    background-color: black;
    width: fit-content;
    margin: 15px;
    padding: 5px 10px;
    margin-left: auto;
  }
  .chevron-up-icon {
    color: white;
  }
  #others {
    margin-bottom: 0;
  }
  #to-top a {
    text-decoration: none;
    color: black;
  }
  #about {
    display: block;
  }
}
</style>
