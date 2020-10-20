<template>
  <div id="more-about">
    <p id="text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet architecto
      iure praesentium? Velit minus fuga sed ipsum! Ducimus ratione, eum
      sapiente quas iste iure veniam sunt debitis vel odio ullam. Lorem ipsum
      dolor, sit amet consectetur adipisicing elit. Iste dolor laudantium fugiat
      ullam accusamus est numquam minima et? Aliquam, recusandae rerum!
      Praesentium, omnis sit eaque nemo animi neque dolorem tempore.
    </p>
  </div>
</template>

<script>
export default {
  name: "MoreAbout",
};
</script>

<style scoped>
#more-about {
  padding: 30px;
  /* margin-bottom: 75px; */
}
#text {
  height: fit-content;
  margin: auto;
  line-height: 35px;
  font-size: 15px !important;
  font-family: Montserrat-Regular;
  text-align: justify;
}
@media only screen and (max-width: 767px) {
  #more-about {
    margin-bottom: unset;
    padding: 15px;
  }
}
</style>
