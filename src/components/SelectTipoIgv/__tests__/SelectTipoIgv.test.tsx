import * as React from "react";
import { shallow } from "enzyme";
import { SelectTipoIgv } from "../SelectTipoIgv";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectTipoIgv />);

  expect(wrapper).toMatchSnapshot();
});
