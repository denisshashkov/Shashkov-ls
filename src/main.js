import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

localStorage.setItem('homePage', location.href);

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/slider";
import "./scripts/menu";
import "./components/blocks/form/validations";
import "./components/blocks/reviewsSlider/reviews";