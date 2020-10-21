<template>
  <div id="cover">
    <!-- <div class="heading">
      <img id="logo" alt="logo" src="../assets/images/Group 7.png" />
      <p @click="menu = !menu">Menu</p>
    </div> -->

    <transition name="fade">
      <div v-show="menu" id="menu-open">
        <div @click="menu = !menu" id="shadowed"></div>
        <div id="none-shadow">
          <p id="back" @click="menu = !menu">back</p>
          <ul>
            <a :href="'#cover'">
              <li @click="toggle(0)">
                <a>Home</a>
                <div :class="{ selected: selectMenu == 0 }"></div>
              </li>
            </a>

            <a :href="'#page'">
              <li @click="toggle(1)">
                <a>About</a>
                <div :class="{ selected: selectMenu == 1 }"></div>
              </li>
            </a>
            <a :href="'#work'">
              <li @click="toggle(2)">
                <a>My work</a>
                <div :class="{ selected: selectMenu == 2 }"></div>
              </li>
            </a>
            <a :href="'#experience'">
              <li @click="toggle(3)">
                <a>Experience</a>
                <div :class="{ selected: selectMenu == 3 }"></div>
              </li>
            </a>
            <a :href="'#contact'">
              <li @click="toggle(4)">
                <a>Contact</a>
                <div :class="{ selected: selectMenu == 4 }"></div>
              </li>
            </a>
            <a href="../assets/docs/cv.pdf" download>
              <li id="download">
                <a>Download cv</a>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="slide" appear >
      <div class="title">
        <div id="hello">
          <p id="first">Hello,</p>
          <p id="second">I'm Chukwuamaka Friday</p>
        </div>
        <p id="story">I am a full-stack web developer and a mobile developer</p>
      </div>
    </transition>
    <div style="height: 75px"></div>
  </div>
</template>

<script>
import VueAos from "vue-aos";
export default {
  name: "Home",
  components: {
    VueAos,
  },
  props: {
    msg: String,
  },
  data: () => {
    return {
      selectMenu: 0,
      menu: false,
    };
  },
  methods: {
    /*  showMenu: () => {
      menu = !menu;
    }, */
    toggle(val) {
      this.selectMenu = val;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: Montserrat-Bold;
  src: url(../assets/icon/Montserrat/Montserrat-Bold.ttf);
}
@font-face {
  font-family: Montserrat-Medium;
  src: url(../assets/icon/Montserrat/Montserrat-Medium.ttf);
}
.heading p {
  display: none;
}
#menu-open {
  display: none;
}
#download {
  margin: 0;
  border: 1.5px solid black;
}
#download a {
  margin: 0 !important;
  padding: 10px;
}
#cover {
  height: calc(100vh - 144.5px);
  /* width: 100%; */
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 69.5px;
  display: flex;
  /* -webkit-box-pack: center; */
  -ms-flex-pack: center;
  /* justify-content: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  /* align-items: center; */
  flex-direction: column;
}
#hello {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
#story {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-top: 12px;
  /* margin-bottom: 15px; */
  margin-left: 12px;
  font-family: Montserrat-Medium;
}
#second {
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  margin-left: 23px;
  margin-bottom: 15px;
  font-family: Montserrat-Medium;
}
#first {
  font-size: 135px;
  /* font-weight: bold; */
  margin: 0;
  color: rgba(0, 0, 0, 0.72);
  font-family: Montserrat-Bold;
}
.title {
  margin: auto;
  width: fit-content;
  height: fit-content;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease-in;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 3s ease-out;
  opacity: 0;
}

@media only screen and (max-width: 760px) {
  #cover {
    padding: 15px;
    height: 100vh;
    /* width: 100%; */
    display: flex;
  }
  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .heading p {
    display: block;
    margin: 0;
    height: fit-content;
    font-family: Montserrat-medium;
    cursor: pointer;
  }
  .heading p:focus {
    background: none;
  }
  .heading p:hover {
    background: none;
  }
  #back {
    cursor: pointer;
  }

  #menu-open {
    background: rgba(0, 0, 0, 0.47);
    position: fixed;
    display: flex;
    /* justify-content: space-between; */

    top: 0;
    right: 0;
    /*width: 100%*/
    height: 100%;
  }
  #shadowed {
    width: 20%;
    height: 100%;
  }
  #none-shadow {
    padding: 15px;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    width: calc(80% - 30px);
    height: calc(100% - 30px);
    background: #f5f0e3;
  }
  #none-shadow ul {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  #none-shadow ul a {
    color: #000;
    text-decoration: none;
    margin-bottom: 40px;
  }
  #none-shadow ul li {
    list-style-type: none;
    font-family: Montserrat-Medium;
    cursor: pointer;

    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  #none-shadow ul li a {
    color: #000;
    text-decoration: none;
    margin: 0;
    margin-bottom: 5px;
    background: transparent;
  }
  #none-shadow ul li div {
    height: 1.5px;
    /* width: 70px; */
    background: black;
    width: 0;
  }
  .selected {
    transition: width 01s ease-in-out;

    width: 100% !important;
  }
  #none-shadow ul li:hover div {
    transition: width 01s ease-in-out;

    width: 100%;
  }

  #logo {
    margin-left: 0;
  }
  #hello {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .title {
    margin: auto 0 auto 0;
  }
  #first {
    font-size: 6.25em;
  }
  #second {
    margin-left: 10px;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  #story {
    margin-top: 0;
    font-size: 1em;
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
  }
}
</style>
