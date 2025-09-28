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
          <button
            v-for="(exp, index) in experience"
            :key="index"
            :class="{ unselected: currentIndex != index }"
            @click="moveTo(index)"
          >
            {{ exp.placement }}
            <transition name="fade2">
              <vue-feather
                type="chevron-right"
                v-if="currentIndex == index"
                size="1.1rem"
                id="chevron-right-icon"
              />
            </transition>
          </button>
        </div>

        <div v-for="(exp, index) in experience" :key="index">
          <div id="tab-view">
            <transition name="slide">
              <div v-if="currentIndex == index">
                <p id="tab-role">{{ exp.role }}</p>
                <ol>
                  <li v-for="desc in exp.desc" :key="desc" id="tab-desc">
                    {{ desc }}
                  </li>
                </ol>
                <p id="tab-period">{{ exp.period }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
    <div id="row" v-for="(exp, index) in experience" :key="index">
      <div id="exprnce">
        <p id="place">{{ exp.placement }} - {{ exp.role }}</p>
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
import VueFeather from "vue-feather";

export default {
  name: "ExperiencePage",
  components: {
    "vue-feather": VueFeather,
  },
  data: () => {
    return {
      experience: [
        {
          placement: "DrAnsay",
          role: "Mobile Developer",
          desc: [
            "Solely developed and released the first production version of the company’s medical cannabis prescription mobile app to the App Store, establishing the app’s architecture with Clean Architecture and Riverpod for scalable state management.",
            "Scaled the app to 101K+ downloads with a 3.5 rating (issues largely tied to customer service), while proactively implementing an in-app feedback system with Sentry to capture and resolve user-reported bugs faster.",
            "Built secure workflows including medical questionnaires, prescription management, checkout flow, and abuse-prevention logic, ensuring compliance and reliability.",
            "Integrated Google Maps SDK for map display, HERE SDK for address validation, and combined payment systems for seamless transactions across pharmacies, doctors, and services.",
            "Optimized app performance and reliability through REST API integrations, unit testing, CI/CD pipelines, and iterative feature delivery.",
          ],
          period: "November 2023 - Present",
        },
        {
          placement: "Yourchat ai",
          role: "Fullstack Developer",
          desc: [
            "Developed AI-driven mobile apps with Flutter, leading to 10,000+ downloads in six months.",
            "Efficiently transitioned a codebase from Python Flask to Node.js Express, boosting the app's scalability and performance.",
            "Designed and implemented Figma-based UI/UX, completing two fully functional apps within four months.",
            "Enhanced accessibility and user reach by implementing internationalization (i18n) for multi-language support.",
          ],
          period: "November 2023 - February 2024",
        },
        {
          placement: "LVNDR Health",
          role: "Fullstack Developer",
          desc: [
            "Developed a cross-platform mobile app and progressive web app using Flutter and Flutter Web.",
            "Improved compatibility across devices, reducing testing time by 20% and enhancing user experience.",
            "Introduced a real-time call display feature, increasing call volume by 60% and improving user engagement.",
            "Integrated Firebase Cloud Functions, Firestore, and Firebase Auth for serverless logic, secure authentication, and real-time data synchronization, while managing state with MobX to improve maintainability",
            "Increased unit test coverage from 10% to 80% using Mocktail, ensuring robust functionality and long-term reliability",
          ],
          period: "September 2022 - Aug 2023",
        },
        {
          placement: "Ultainfinity Global Group",
          role: "Mobile Developer",
          desc: [
            "Built software solutions using various blockchain platforms and protocols like Ethereum and Solana.",
            "Rolled out the Solana wallet mobile app for both iOS and Android, enabling functions such as sending and receiving transactions, managing addresses, and viewing transaction history.",
            "Designed and verified the secure storage of confidential user data for the app, leading to an improved user experience without any data breaches occurring.",
          ],
          period: "April 2022 - September 2022",
        },

        {
          placement: "Green Mouse Technologies",
          role: "Mobile Developer",
          desc: [
            "Developed complex software solutions for clients in transportation and e-commerce through effective communication, deadline management, and on-time project delivery.",
            "Supervised technical execution of large-scale projects, achieving 90% on-time completion with defect-free code using version control and defect tracking.",
            "Advised clients on integrating emerging technologies to enhance their solutions.",
            "Developed high-performance mobile apps for Android (Google Play Store) and iOS, boosting user satisfaction and increasing downloads by 23%.",
          ],
          period: "December 2021 - April 2022",
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
          period: "September 2020 - August 2021",
        },
        {
          placement: "HNG Internship",
          role: "Mobile Developer",
          desc: [
            "Contributed to the development of a mobile application that generates merchant receipts and manages inventory within a team of four developers, using Agile development and test-driven development.",
            "Improved the overall code quality by performing code reviews and testing the beta release of the app to ensure proper functionality and reduce the number of bugs reported by beta testers.",
            "Conducted comprehensive testing of the application code using multiple devices, which resulted in superior mobile responsiveness on all screen sizes.",
            "Accelerated the development process by developing reusable components for later usage and reducing the production time of features from 2 weeks to 2 days.",
          ],
          period: `June 2020 - August 2020`,
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
  justify-content: start;
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
#exprnce {
  margin: 35px 20px;
}
#exprnce p {
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

.slide-enter-active {
  animation: slide-in 1s ease-in forwards;
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
