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
            Freelance
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 0"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 1 }" @click="moveTo(1)">
            HNG Internship
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 1"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
          <button :class="{ unselected: currentIndex != 2 }" @click="moveTo(2)">
            Bincom Dev centre
            <transition name="fade2">
              <chevron-right-icon
                v-if="currentIndex == 2"
                size="1.2x"
                id="chevron-right-icon"
              ></chevron-right-icon>
            </transition>
          </button>
        </div>
        <div id="tab-view">
          <template v-for="exp in experience">
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
          </template>
        </div>
      </div>
    </transition>
    <div id="row" v-for="exp in experience" :key="exp.index">
      <div id="exprnce">
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
  name: "Experience",
  components: {
    ChevronRightIcon,
  },
  data: () => {
    return {
      experience: [
        {
          placement: `Freelance`,
          role: "Mobile Developer",
          desc: [`Cooperate with designers to create clean interfaces and
simple, intuitive interactions and experiences using Flutter.`, 'Integrated google maps to a client application'],
          period: `November 2020 - Present`,
          index: 0,
        },
        {
          placement: `HNG Internship`,
          role: "Mobile Developer",
          desc: [
            `Cooperate with designers to create clean interfaces and
simple, intuitive interactions and experiences using Flutter.`,
            `Carry out quality assurance tests to discover errors and
optimize usability`,
          ],
          period: `June 2020 - August 2020`,
          index: 1,
        },
        {
          placement: `Bincom Dev Centre`,
          role: "Frontend Developer",
          desc: [
            `Worked as a frontend web
developer, contributed to a Bincom product Social Lender using Angular and Ionic framework.`,
'Integrated repayent option on Social lender: Paytack and Flutterwave',
            `Managed social lender mobile app on playstore.`,
            `Carry out quality assurance tests to discover errors and
optimize usability`,
          ],
          period: `June 2019 - November 2019`,
          index: 2,
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
