import React from "react";
import { shallow } from "enzyme";
import SelectDocumentoIdentidad from "./SelectDocumentoIdentidad";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectDocumentoIdentidad />);

  expect(wrapper).toMatchSnapshot();
});
