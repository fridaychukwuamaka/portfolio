<template>
  <div id="side-bar-column">
    <a
      target="_blank"
      href="https://www.linkedin.com/in/chukwuamaka-friday-14622a169/"
      id="icon"
    >
      <linkedin-icon size="1.2x"></linkedin-icon>
    </a>
    <a target="_blank" href="https://github.com/fridaychukwuamaka" id="icon">
      <github-icon size="1.2x"></github-icon>
    </a>
    <form
      action="mailto:fridaychukwuamaka@gmail.com?subject= message"
      method="get"
      enctype="text/plain"
    >
      <button style="cursor: pointer;" id="icon" class="email-icon">
        <mail-icon size="1.2x"></mail-icon>
      </button>
    </form>
  </div>
</template>

<script>
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  MailIcon,
} from "vue-feather-icons";

export default {
  name: "SideBar",
  components: {
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
    MailIcon,
  },
};
</script>

<style scoped>
a{
    cursor: pointer;
}
button{
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
