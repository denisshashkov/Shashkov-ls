import header from "./header.vue";
import {
  shallowMount
} from "@vue/test-utils";

it("сохраняет структуру", async () => {
  const component = shallowMount(header);

  expect(component.element).toMatchSnapshot();
});

it("скрывает блок содержимого", () => {
  const component = shallowMount(header, {
    propsData: {
      hideContent: true
    }
  });

  expect(component.element).toMatchSnapshot();
})