import * as React from "react";
import { shallow } from "enzyme";
import { SelectTipoOperacionResumenDiario } from "../SelectTipoOperacionResumenDiario";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectTipoOperacionResumenDiario />);

  expect(wrapper).toMatchSnapshot();
});
