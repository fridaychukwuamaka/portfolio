<template>
  <div id="work">
    <img id="logo" alt="logo" src="../assets/images/Group 7.png" />

    <div id="title">
      <p>My Work</p>
      <div></div>
    </div>
    <div id="row">
      <div id="project">
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
        <div class="link">
          <a href
            ><arrow-right-icon id="back" @click="menu = !menu"
              ></arrow-right-icon
            ></a
          >
        </div>
      </div>
      <div id="project">
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
        <div class="link">
          <a href
            ><arrow-right-icon id="back" @click="menu = !menu"
              ></arrow-right-icon
            ></a
          >
        </div>
      </div>

      <div id="project">
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
        <div class="link">
          <a href
            ><arrow-right-icon id="back" @click="menu = !menu"
              ></arrow-right-icon
            ></a
          >
        </div>
      </div>
      <div id="project">
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>

        <div class="link">
          <a href
            ><arrow-right-icon size="21" id="back" @click="menu = !menu"
              ></arrow-right-icon
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Work",
  components: {
    ArrowRightIcon,
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.link {
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
}
.link a {
  text-decoration: none;
  color: black;
}

#heading {
  font-family: Montserrat-Medium;
  margin-bottom: 10px;
  font-size: 0.9em;
}
#detail {
  font-family: Montserrat-Regular;
  text-align: justify;
  font-size: 0.85em;
  line-height: 30px;
  margin-bottom: 10px;
}
#work {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* margin-bottom: 69.5px; */
  margin-top: 75.5px;
  padding: 15px;
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
#logo {
  display: none;
}
#project {
  margin: 40px 15px;
}
#row {
  margin: 0 10%;
}

#image {
  height: auto;
  /*width: 100%*/
  border-radius: 6px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.27);
  margin-bottom: 10px;
}
@font-face {
  font-family: Montserrat-SemiBold;
  src: url(../assets/icon/Montserrat/Montserrat-SemiBold.ttf);
}
@font-face {
  font-family: Montserrat-Medium;
  src: url(../assets/icon/Montserrat/Montserrat-Medium.ttf);
}

@media only screen and (min-width: 1024px) {
  #project {
    width: calc(33.3% - 30px);
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #project {
    width: calc(50% - 30px);
  }
}

@media only screen and (max-width: 767px) {
  #logo {
    display: none;
  }

  #row {
    margin-top: 35px;
    /* flex-wrap: wrap; */

    margin: 0 -10px;
  }
  #title {
    /* align-items: flex-start; */
    align-items: flex-start;
    margin-bottom: -5px;
  }

  #work {
    margin-bottom: 30px;
    margin-top: 95.5px;
    /* margin-top: 30px; */
  }
  #row :nth-child(even) #heading {
    /* text-align: right; */
  }

  #row :nth-child(even) .link {
    /* margin-left: 0px; */
  }
}

/* SMART PHONE */
@media only screen and (max-width: 767px) {
  #project {
    width: calc(100% - 30px);
  }
}

#row {
  display: flex;
  /* flex-wrap: wrap-reverse; */
  flex-wrap: wrap;
}
</style>
