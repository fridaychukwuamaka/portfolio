<template>
  <div id="work">
    <img id="logo" alt="logo" src="../assets/images/Group 7.png" />

    <div id="title">
      <p>My Work</p>
      <div></div>
    </div>
    <div id="row">
      <div id="project">
        <img
          id="image"
          src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
          alt="pix"
        />
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
      </div>

      <div id="project">
        <img
          id="image"
          src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
          alt="pix"
        />
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
      </div>
      <div id="project">
        <img
          id="image"
          src="../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
          alt="pix"
        />
        <p id="heading">Lorem ipsum</p>
        <p id="detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt
          mollitia doloremque non fuga rem facilis praesentium ab qui assumenda.
          Voluptatibus officiis laborum obcaecati cum ad neque consequuntur
          libero incidunt!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Worrk",
};
</script>

<style scoped>
p {
  margin: 0;
}
#project {
  /*width: 100%*/
  /* padding: 10px; */
}
#heading {
  font-family: Montserrat-SemiBold;
  margin-bottom: 5px;
  font-size: 1.15em;
}
#detail {
  font-family: Montserrat-Medium;
  text-align: justify;
  font-size: 1em;
  line-height: 30px;
}
#work {
  display: flex;
  flex-direction: column;
  /*width: 100%*/
  /* margin-bottom: 75px; */
  margin-top: 30px;
  padding: 15px;
}
#title p {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.07em;
  font-family: Montserrat-SemiBold;
}
#title {
  display: flex;
  align-items: center;
  /*width: 100%*/
  margin: 0;
  flex-direction: column;
}
#title div {
  height: 1.5px;
  width: 80px;
  background-color: black;
}
#logo {
  display: none;
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
@media only screen and (max-width: 760px) {
  #logo {
    display: none;
  }
  #row {
    margin-top: 45px;
    flex-wrap: wrap-reverse;
  }
  #title {
    align-items: flex-end;
  }
}

#row {
  display: flex;
  column-gap: 15px;
  row-gap: 30px;
  margin-top: 45px;
  /* flex-wrap: wrap-reverse; */
}
</style>
