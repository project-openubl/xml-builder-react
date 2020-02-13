import * as React from "react";
import { shallow } from "enzyme";
import { SelectNotaCredito } from "../SelectNotaCredito";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectNotaCredito />);

  expect(wrapper).toMatchSnapshot();
});
