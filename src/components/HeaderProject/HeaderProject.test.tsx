import React from "react";
import { shallow } from "enzyme";
import HeaderProject from "./HeaderProject";

it("Renders without crashing", () => {
  const wrapper = shallow(
    <HeaderProject aboutButton={<button type="button">About</button>} />
  );

  expect(wrapper).toMatchSnapshot();
});
