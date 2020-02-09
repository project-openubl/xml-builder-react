import React from "react";
import { shallow } from "enzyme";
import SelectTipoComprobanteBasico from "./SelectTipoComprobanteBasico";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectTipoComprobanteBasico />);

  expect(wrapper).toMatchSnapshot();
});
