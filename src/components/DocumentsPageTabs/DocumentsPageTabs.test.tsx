import React from "react";
import { shallow } from "enzyme";
import DocumentsPageTabs from "./DocumentsPageTabs";

it("Renders without crashing", () => {
  const onTabSelect = jest.fn();
  const wrapper = shallow(
    <DocumentsPageTabs activeKey={0} onTabSelect={onTabSelect} />
  );

  expect(wrapper).toMatchSnapshot();
});
