import user from "./user.vue";
import "../../default.pcss";
import { bgDecorator } from "../../../../.storybook/decorators"

function bg() {
  return {
    data: () => ({
      styles: {
        padding: "20px",
        background: "#ccc",
      },
    }),
    template: '<div :style="styles"><story/></div>',
  };
}

export default {
  title: "User",
  decorators: [ bgDecorator ],
};

export const Default = () => ({
  components: { user },
  template: `
    <user
      name="Владимир Астаханов" 
      pic="../../../images/content/user.jpg"
    />
  `,
});

Default.story = {
  name: "По умолчанию",
};