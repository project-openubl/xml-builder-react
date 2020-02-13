import * as React from "react";
import { shallow } from "enzyme";
import { TabsDocument } from "../TabsDocument";

it("Renders without crashing", () => {
  const onTabSelect = jest.fn();
  const wrapper = shallow(
    <TabsDocument activeKey={0} onTabSelect={onTabSelect} />
  );

  expect(wrapper).toMatchSnapshot();
});
