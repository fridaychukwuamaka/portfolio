<template>
  <div id="side-bar-column">
    <a
      target="_blank"
      href="https://www.linkedin.com/in/chukwuamaka-friday-14622a169/"
      id="icon"
    >
      <vue-feather type="linkedin" size="20" />
    </a>
    <a target="_blank" href="https://github.com/fridaychukwuamaka" id="icon">
      <vue-feather type="github" size="20" />
    </a>
    <form
      action="mailto:fridaychukwuamaka@gmail.com?subject= message"
      method="get"
      enctype="text/plain"
    >
      <button style="cursor: pointer" id="icon" class="email-icon">
        <vue-feather type="mail" size="20" />
      </button>
    </form>
  </div>
</template>

<script>
import VueFeather from "vue-feather";

export default {
  name: "SideBar",
  components: {
    "vue-feather": VueFeather,
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
button {
  cursor: pointer;
}
#side-bar-column {
  display: flex;
  flex-direction: column-reverse;
  height: 40%;
  margin: auto;
  justify-content: space-between;
}
#icon {
  color: black;
  transform: rotate(270deg);
}
.email-icon {
  background: transparent;
  border: none;
  font: unset;
  padding: 0;
  outline: none;
}
</style>
