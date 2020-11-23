<template>
  <div id="work">
    <div id="title">
      <p>My work</p>
      <div></div>
    </div>
    <transition name="fade6" appear>
      <div id="projects">
        <div id="project">
          <div id="image"></div>
          <img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" id="imagex" alt="">
          <div id="writtings">
            <div id="heading">
              Lorem ipsum dolor sit amet
            </div>
            <div id="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis numquam maiores libero ratione officia! Sit quisquam
              reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab
              ullam harum illo optio dolorem? Adipisci.
            </div>
            <a href="/" id="link"
              ><p>View project</p>
              <Chevron-right-icon size="1.2x"></Chevron-right-icon
            ></a>
          </div>
        </div>
        <div id="project">
          <div id="image"></div>
          <img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" id="imagex" alt="">
          <div id="writtings">
            <div id="heading">
              Lorem ipsum dolor sit amet
            </div>
            <div id="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis numquam maiores libero ratione officia! Sit quisquam
              reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab
              ullam harum illo optio dolorem? Adipisci.
            </div>
            <a href="/" id="link"
              ><p>View project</p>
              <Chevron-right-icon size="1.2x"></Chevron-right-icon
            ></a>
          </div>
        </div>
        <div id="project">
            <div id="image"></div>
          <img src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" id="imagex" alt="">
          <div id="writtings">
            <div id="heading">
              Lorem ipsum dolor sit amet
            </div>
            <div id="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis numquam maiores libero ratione officia! Sit quisquam
              reprehenderit facere. Reiciendis odit cupiditate ipsam dolores ab
              ullam harum illo optio dolorem? Adipisci.
            </div>
            <a href="/" id="link"
              ><p>View project</p>
              <Chevron-right-icon size="1.2x"></Chevron-right-icon
            ></a>
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
};
</script>

<style scoped>
p {
  margin: 0;
}

#image {
  background: url("../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg");
  height: 200px;
  width: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 1000px;

  flex: none;
}
#projects {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  margin: 0 10%;
}

#imagex{
  display: none;
}

.fade6-enter {
  opacity: 0;
}
.fade6-enter-active {
  transition: opacity 2s ease-in;
}
.fade6-leave {
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
  margin-top: 10px;
  display: flex;
  color: black;
  justify-content: flex-start;
  align-items: center;
}
#link p {
  font-family: Montserrat-Medium;
  font-size: 0.8em;
}
#heading {
  margin-bottom: 10px;
  font-family: Montserrat-Semibold;
  font-size: 1.13em;
}
#subtitle {
  font-size: 0.85em;
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
  #image{
    display: none;
  }
  #title{
    align-items: flex-start;
  }
  #imagex{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
}
</style>
