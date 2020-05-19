import headline from "./headline.vue";
import { shallowMount } from "@vue/test-utils";

it("сохраняет структуру", async () => {
  const component = shallowMount(headline);

  expect(component.element).toMatchSnapshot();
});

it("скрывает блок содержимого", () => {
  const component = shallowMount(headline, {
    propsData: {
      hideContent: true
    }
  });

  expect(component.element).toMatchSnapshot();
})