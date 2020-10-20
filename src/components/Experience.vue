<template>
  <div id="experience">
    <div id="title">
      <p>Experience</p>
      <div></div>
    </div>
    <div id="row">
      <div id="exprnce">
        <p id="place">HNG internship</p>
        <p
          id="desc"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet et totam voluptatem</p>
        <p id="period">June 2020 - August 2020</p>
      </div>
      <div id="exprnce">
        <p id="place">Bincom ICT solutions</p>
        <p
          id="desc"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet et totam voluptatem</p>
        <p id="period">July 2019 - November 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
#experience {
  margin-top: 69.5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
#row {
  margin: 0 10%;
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
#row {
  display: flex;
  flex-direction: row;
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
  #experience {
    margin-top: 0;
  }
  #row {
    display: flex;
    flex-direction: column;
    margin: -20px;
  }
}
</style>