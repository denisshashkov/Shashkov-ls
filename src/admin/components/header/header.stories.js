import header from "./header";
import {
  action
} from "@storybook/addon-actions";

const methods = {
  onLogout: action("onLogout"),
};

export default {
  title: "Header",
};

export const defaultView = () => ({
  components: {
    header,
  },
  methods,
  template: `
    <header
      @logout="onLogout"
    >
      <h1>Содержимое</h1>   
    </header> 
  `,
});

export const withoutContent = () => ({
  components: {
    header,
  },
  methods,
  template: `
    <header
      @logout="onLogout"
      hideContent 
    >
    </header> 
  `,
});

withoutContent.story = {
  name: "Без содержимого",
};