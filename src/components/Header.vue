<template>
  <div id="header">
    <div class="heading">
      <img id="logo" alt="logo" src="../assets/images/Group 7.png" />
      <menu-icon id="menu-icon" @click="menu = !menu"></menu-icon>
    </div>

    <transition name="drawer-open" animation="transition">
      <div v-show="menu" id="menu-open">
        <div @click="menu = !menu" id="shadowed"></div>

        <div id="none-shadow">
          <arrow-left-icon id="back" @click="menu = !menu"></arrow-left-icon>
          <ul>
            <a :href="'#mobile'">
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
                <a>My projects</a>
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

            <li id="download">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1lsF7Tgzr5PwY-rACSrYrzfxj7B0_Wq4y/view?usp=sharing"
                download
                >Resume</a
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { MenuIcon, ArrowLeftIcon } from "vue-feather-icons";
export default {
  name: "Header",
  components: {
    MenuIcon,
    ArrowLeftIcon,
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
#header {
  position: fixed;
  z-index: 11;
  width: calc(100vw - 30px);

  top: 0;
  left: 0;
  right: 0;
  background: #f5f0e3;
}
#menu-icon {
  display: none;
  -webkit-tap-highlight-color: transparent;
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
@media only screen and (max-width: 760px) {
  #header {
    padding: 15px;
    /* width: 100%; */
    /* display: flex; */
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #menu-icon {
    display: block;
    margin: 0;
    height: fit-content;
    font-family: Montserrat-medium;
    cursor: pointer;
    height: unset;
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
    -webkit-tap-highlight-color: transparent;
  }

  #menu-open {
    background: rgba(0, 0, 0, 0.47);
    position: fixed;
    display: flex;
    /* justify-content: space-between; */

    top: 0;
    right: 0;
    width: 100%;
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

  .drawer-open-enter {
    background-color: transparent !important;
  }
  .drawer-open-enter-active {
    animation: drawer-in 0.6s ease-in-out forwards;
    background-color: transparent !important;
    transition: background-color 0.6s ease-in-out;
    /* background-color: rgba(0, 0, 0, 0.47) !important; */
  }
  .drawer-open-leave {
    background-color: transparent;
  }
  .drawer-open-leave-active {
    animation: drawer-out 0.6s ease-in-out forwards;
    background-color: transparent !important;
  }

  @keyframes drawer-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes drawer-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
}
</style>
