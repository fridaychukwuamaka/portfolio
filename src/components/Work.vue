<template>
  <div id="work">
    <div id="title">
      <p>My projects</p>
      <div></div>
    </div>
    <transition name="fade6" appear>
      <div id="projects">
        <div id="project" v-for="(work, key) in works" :key="key">
          <img :src="work.img" id="imagex" alt="" />
          <div
            id="image"
            v-show="work.img != null"
            :style="{ 'background-image': 'url(' + work.img + ')' }"
          ></div>

          <div id="writtings">
            <div id="heading">
              {{ work.title }}
            </div>
            <div id="tools">
              Tools:
              <p v-for="(tool, key) in work.tools" :key="key">
                {{ tool }}
              </p>
            </div>
            <div id="subtitle">
              {{ work.detail }}
            </div>

            <div id="links">
              <a
              v-show="work.xd_link != null"
                rel="noreferrer"
                target="_blank"
                :href="work.xd_link"
                id="link"
                ><p>XD Link</p>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                :href="work.app_link"
                id="link"
                ><p>View project</p>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                :href="work.code_link"
                id="link"
                ><p>View code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ArrowRightIcon, ChevronRightIcon } from "vue-feather-icons";

export default {
  name: "Work",
  components: {
    ArrowRightIcon,
    ChevronRightIcon,
  },
  data: () => {
    return {
      works: [
        {
          title: "Deigit",
          detail:
            "Degeit is a mobile application that helps merchants to generate digital copies of receipt for every transaction made. It is specially made for merchants who sell online (Instagram, Facebook, Twitter, WhatsApp, Telegram. etc.).",
          code_link: "https://github.com/fridaychukwuamaka/temp-mobile",
          app_link: "https://play.google.com/store/apps/details?id=xyz.degeit",
         
          img: require("../assets/images/PROMO.jpg"),
          tools: ["Flutter"],
        },

        {
          title: "Music Player",
          detail:
            "A mobile app built with flutter that is able to plays all the songs on the local storage. User can also create and delete playlist",
          code_link: "https://github.com/fridaychukwuamaka/music_app_v3",
          app_link:
            "https://drive.google.com/file/d/1wc29LKxza05L8P6U-uRdmYcZ5zx5nctk/view?usp=sharing",
          img: require("../assets/images/musicapp.png"),
           xd_link: "https://xd.adobe.com/view/b4047f80-64cc-473c-8c0c-c3d67369f134-e157/",
          tools: ["Flutter"],
        },
        {
          title: "Nectar Grocery Store",
          detail:
            "This an online Grocery store shopping app. You can create a cart, save your favourite items and make purchases.",
          code_link:
            "https://github.com/fridaychukwuamaka/Flutter-Grocery-App-UI-main",
          app_link:
            "https://drive.google.com/file/d/1yqqn0PT4jWMB6DxBC8q8k-rxEucJA2cM/view?usp=sharing",
          img: require("../assets/images/Cover.png"),
          tools: ["Flutter", "Firebase", "Flutterwave"],
        },

        {
          title: "Smart Irrigation",
          detail:
            "It is a mobile app connected to an embedded system, it allows the user to get information about the farm and can also send commands to the embedded system built with Esp32.",
          code_link: "https://github.com/fridaychukwuamaka/smart_irrigation",
          app_link:
            "https://drive.google.com/file/d/18cPcgRh_2-v6IU9M-uzsSccKcpjHgCfS/view?usp=sharing",
          img: require("../assets/images/irrigation.png"),
          tools: ["Flutter", "Firebase", "Arduino", "ESP32"],
        },
        {
          title: "Scam Story app",
          detail: "It is a mobile app where scam victims can share their stories and also get the latest scam news.",
          code_link: "https://github.com/fridaychukwuamaka/scam_stories_app",
          app_link: "https://drive.google.com/file/d/1DgOylHtYHYH37IIzmKj6Nh9-vgwbaYK3/view?usp=sharing",
          img: null,
          tools: ["Flutter", "Firebase", "Getx"],
        },
{
          title: "Portfoilo Website",
          detail: "It is a portfolio website I built for myself using Vue",
          code_link: "https://github.com/fridaychukwuamaka/portfolio",
          app_link: "/",
          img: null,
          tools: ["Vue js", "Netlify"],
        },
        {
          title: "BLE Scanner",
          detail:
            "It is a mobile app built with flutter that can scan low energy devices such as headphone, airpods etc. and also get their distance from the mobile phone",
          code_link: "https://github.com/fridaychukwuamaka/BLE-scanner",
          app_link:
            "https://drive.google.com/file/d/1-wcwSs9IuE2q2l0nwKF0xbmnk5seI_eU/view?usp=sharing",
          img: null,

          tools: ["Flutter"],
        },
        
      ],
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.image-row {
  display: flex;
  flex-direction: row;
  row-gap: 20px;
}

#image {
  width: 100%;
  height: calc((100vw / 3) * 0.83);
  background-position: center;
  filter: brightness(0.35);
  background-size: cover;
  border-radius: 5px;
  flex: 2;
  flex-basis: 0;

  transition: filter 1s ease-in-out;
}

#image:hover {
  filter: brightness(0.7);
}
#tools {
  flex-direction: initial !important;
  font-size: 11.5px !important;
  display: flex;
  margin: 10px 0;
  column-gap: 10px;
  font-weight: 700;
}
#projects {
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  margin: 0 5%;
}

#imagex-shadow {
  display: none;
}
#imagex {
  display: none;
}

.fade6-enter {
  opacity: 0;
}
.fade6-enter-active {
  transition: opacity 2s ease-in;
}
.fade6-leave-active {
  transition: opacity 2s ease-in-out;
  opacity: 0;
  display: none;
}
#work {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* margin-bottom: 69.5px; */
  margin-top: 69.5px;
  padding: 15px;
}
#writtings {
  width: 100%;
  flex: 1;
}
#project {
  display: flex;
  column-gap: 35px;
  align-items: center;
}
#projects :nth-child(even) {
  flex-direction: row-reverse;
}
#link {
  margin-top: 5px;
  display: flex;
  color: black;
  justify-content: flex-start;
  flex-direction: row !important;
  align-items: center;
}
#links {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

#link p {
  font-family: Montserrat-Medium;
  font-size: 0.8em;
}
#heading {
  margin-bottom: 10px;
  font-family: Montserrat-Semibold;
  font-size: 1em;
}
#subtitle {
  font-size: 0.83em;
  line-height: 30px;
  text-align: justify;
}

#title p {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1em;
  font-family: Montserrat-SemiBold;
}

#title {
  display: flex;
  align-items: center;
  /*width: 100%*/
  margin: 0;
  flex-direction: column;
  margin-bottom: 50px;
}

#title div {
  height: 1.5px;
  width: 80px;
  background-color: black;
}

@media only screen and (max-width: 760px) {
  #project {
    flex-direction: column !important;
    row-gap: 25px;
    align-items: flex-start;
  }
  #projects {
    margin: 0;
  }
  #image {
    display: none;
  }
  #title {
    align-items: flex-start;
  }

  #imagex {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 5px;
    filter: brightness(0.35);
  }
}
</style>
