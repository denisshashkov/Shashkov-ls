import "./styles/main.pcss";
import Vue from "vue";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

localStorage.setItem('landingPage', location.href);


import "./scripts/parallax";
import "./scripts/slider";
import "./scripts/menu";
import "./components/blocks/form/validations";
import "./components/blocks/reviewsSlider/reviews";

//////////////Skills////////////////////////////

import Skills from './components/blocks/skills/skills';

new Vue({
  el: "#skills-list",
  components: {
    vcSkills: Skills
  }
});