<template>
  <div id="experience">
    <transition name="fade" appear>
      <div id="title">
        <p>Experience</p>
        <div></div>
      </div>
    </transition>
    <transition name="slide1" appear>
      <div id="view">
        <div id="tab-bar">
          <button :class="{ unselected: currentIndex != 0 }" @click="moveTo(0)">
            LVNDR Health
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 0"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 1 }" @click="moveTo(1)">
            Ultainfinity Global Group
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 1"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 2 }" @click="moveTo(2)">
            Green Mouse Technologies
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 2"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 3 }" @click="moveTo(3)">
            Rentvec
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 3"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 4 }" @click="moveTo(4)">
            HNG Internship
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 4"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 5 }" @click="moveTo(5)">
            Bincom Dev Centre
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 5"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
        </div>
        <div id="tab-view">
          <!-- <template v-for="exp in experience">
            <transition name="slide" :key="exp.index">
              <div v-if="currentIndex == exp.index">
                <p id="tab-role">{{ exp.role }}</p>
                <ol>
                  <li v-for="desc in exp.desc" :key="desc" id="tab-desc">
                    {{ desc }}
                  </li>
                </ol>
                <p id="tab-period">{{ exp.period }}</p>
              </div>
            </transition>
          </template> -->
        </div>
      </div>
    </transition>
    <div id="row" v-for="exp in experience" :key="exp.index">
      <div id="experience">
        <p id="place">{{ exp.placement }} - {{ exp.role }}</p>
        <!-- <p id="desc">
          {{ exp.desc }}
          
        </p> -->

        <ol>
          <li id="desc" v-for="desc in exp.desc" :key="desc">
            {{ desc }}
          </li>
        </ol>
        <p id="period">{{ exp.period }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";

export default {
  name: "ExperiencePage",
  components: {
    ChevronRightIcon,
  },
  data: () => {
    return {
      experience: [
        {
          placement: "LVNDR Health",
          role: "Fullstack Developer",
          desc: [
            "Designed and developed an engaging cross-platform mobile app and created a progressive web app using Flutter and Flutter-web",
            "Reduced testing time by 20% by identifying and fixing compatibility issues across various devices and platforms, ensuring a seamless user experience.",
            "Implemented a feature that shows calls to the user, increasing the number of calls by 60% over the previous version of the app.",
            "Increased unit test coverage from 10% to 80% by adding unit tests for Mobx stores and services using the mocktail library.",
            "Designed a backend using Firebase with cloud functions and Typescript to manage a data pipeline for a mobile and web app.",
          ],
          period: "September 2022 - Present",
          index: 0,
        },
        {
          placement: "Ultainfinity Global Group",
          role: "Mobile Developer",
          desc: [
            "Built and delivered software solutions using a range of blockchain platforms and protocols, including Ethereum and Solana.",
            "Implemented the Solana wallet mobile application for iOS and Android, including transaction sending and receiving, address management, and transaction history viewing.",
            "Developed and tested the secure storage of sensitive user data for the application, resulting in an enhanced user experience with no incidents of data breaches.",
          ],
          period: "April 2022 - September 2022",
          index: 1,
        },

        {
          placement: "Green Mouse Technologies",
          role: "Mobile Developer",
          desc: [
            "Developed, maintained, and managed complex software solutions for clients across various industries, including transportation and e-commerce, by regularly communicating with clients, managing deadlines, and delivering results",
            "Supervised the technical aspects of complex and extensive undertakings, guaranteeing timely completion and maintaining exceptional levels of quality (90% of projects finished on time and with defect-free code) via defect tracking, version control, and development methodology",
            "Stayed up-to-date with the latest advancements in technology and advised clients on how to integrate new technologies into their solutions",
            "Developed mobile applications with efficient user interfaces and optimized performance for Android and iOS mobile environments, resulting in increased user satisfaction and a 23% increase in application downloads",
          ],
          period: "Dec 2021 - April 2022",
          index: 2,
        },
        {
          placement: "Rentvec",
          role: "Mobile Developer",
          desc: [
            "Designed and developed the company's car-rental product with a cross-functional team of designers, back-end developers, and project managers.",
            "Delivered a high-quality app with 100% code coverage by employing Flutter widgets, animations, and custom components to implement intricate UI designs across two platforms in less than a month.",
            "Using third-party libraries and APIs to integrate advanced features, including push notifications, maps, and camera functions, leading to a higher customer engagement and retention.",
            "Optimized speed performance by 20% and reduced network latency by 30% by reducing the rate of the widget rebuild and implementing a caching mechanism.",
          ],
          period: "Dec 2021 - April 2022",
          index: 3,
        },
        {
          placement: "HNG Internship",
          role: "Mobile Developer",
          desc: [
            "Contributed to the development of a mobile application that generates merchant receipts and manages inventory within a team of four developers, using Agile development, and test-driven development.",
            "Improved the overall code quality by performing code reviews and testing the beta release of the app, to ensure proper functionality and reduce the number of bugs reported by beta testers.",
            "Conducted comprehensive testing of the application code using multiple devices, which resulted in superior mobile responsiveness on all screen sizes.",
            "Accelerated the development process by developing reusable components for later usage and reducing the production time of features from 2 weeks to 2 days.",
          ],
          period: `June 2020 - August 2020`,
          index: 4,
        },
        {
          placement: `Bincom Dev Centre`,
          role: "Frontend Developer",
          desc: [
            "Worked as a front-end web developer and contributed to a Bincom product, Social Lender, using the Angular and Ionic framework.",
            "Integrated payment options (Paystack and Flutterwave) on Social Lender's Android app, which more than 10,000 users use to access loans.",
            "Managed social lender mobile app on Play Store by publishing release candidates, collecting user feedback, and implementing requested features.",
            "Performed quality assurance tests to discover errors and optimize usability to improve the user experience of the application.",
          ],
          period: `June 2019 - December 2019`,
          index: 5,
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    moveTo(val) {
      this.currentIndex = val;
    },
  },
};
</script>

<style scoped>
#experience {
  margin-top: 69.5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
#chevron-right-icon {
}
#tab-view {
  width: 100%;
}
.unselected {
  font-family: Montserrat-Medium !important;
}
#view {
  display: flex;
  flex-direction: row;
  width: 80%;
  align-self: center;
  justify-content: center;
}

li::marker {
  font-family: "Montserrat-SemiBold";
  font-size: 0.8em;
}
#tab-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px;
  row-gap: 40px;
}
#tab-bar button {
  background: none;
  outline: none;
  border: none;
  column-gap: 10px;
  font-family: Montserrat-SemiBold;
  width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
}
#row {
  margin: 0 10%;
  display: none;
}
#experience {
  margin: 35px 20px;
}
#experience p {
  margin: 0;
}
#place {
  font-family: Montserrat-Medium;
  font-size: 0.9em;
}
#desc {
  margin: 10px 0 !important;
  line-height: 30px;
  font-size: 0.85em;
  font-family: Montserrat-Regular;
  text-align: justify;
}
#period {
  font-family: Montserrat-Medium;
  font-size: 0.8em;
}
#tab-desc {
  margin: -7px 0 10px 0 !important;
  line-height: 24px;
  font-size: 0.82em;
  font-family: Montserrat-Regular;
  text-align: justify;
}
#tab-period {
  font-family: Montserrat-Medium;
  font-size: 0.8em;
}
#tab-role {
  font-family: Montserrat-Medium;
  margin-top: 0;
  font-size: 0.8em;
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
  width: 100%;
  margin: 0;
  flex-direction: column;
  margin-bottom: 60px;
}

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-in forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  display: none;
}

@keyframes slide-in {
  from {
    transform: translate(80px);
  }
  to {
    transform: translate(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(80px);
  }
}
.slide1-enter {
  opacity: 0;
}
.slide1-enter-active {
  opacity: 0;
  animation: slide1-in 1s ease-out 1s forwards;
  /* transition:  opacity 1s; */
  /* opacity: 0; */
  /* opacity: 1 !important; */
}
.slide1-leave {
  /* opacity: 1 !important; */
}
.slide1-leave-active {
  /* animation: slide1-out 1s ease-out forwards; */
  /* opacity: 1 !important; */
}

@keyframes slide1-in {
  from {
    transform: translate(80px);
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

/*
@keyframes slide1-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(80px);
    opacity: 1;
  }
} */
ol {
  padding-left: 15px;
}

#title div {
  height: 1.5px;
  width: 80px;
  background-color: black;
}
@media only screen and (max-width: 760px) {
  #title {
    /* align-items: flex-end; */
    align-items: flex-start;

    display: flex;
    width: 100%;
    margin: 0;
    flex-direction: column;
    margin-bottom: 35px;
  }

  #view {
    display: none;
  }
  #experience {
    margin-top: 20;
  }
  #row {
    display: flex;
    flex-direction: column;
    margin: -20px;
  }
}
</style>
