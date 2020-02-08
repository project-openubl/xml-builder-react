import React from "react";
import { shallow } from "enzyme";
import SelectCatalog from "./SelectCatalog";

it("Renders without crashing", () => {
  const options: Map<string, string> = new Map();

  options.set("key1", "value1");
  options.set("key2", "value2");
  options.set("key3", "value3");

  const wrapper = shallow(<SelectCatalog options={options} />);

  expect(wrapper).toMatchSnapshot();
});
