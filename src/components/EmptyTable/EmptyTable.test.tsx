import React from "react";
import { shallow } from "enzyme";
import EmptyTable from "./EmptyTable";
import { Button } from "@patternfly/react-core";

it("Renders without crashing", () => {
  const action = jest.fn();
  const wrapper = shallow(
    <EmptyTable
      columns={["column1", "column2", "column3"]}
      onClearAllFilters={action}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("Retry action is called when button clicked", () => {
  const action = jest.fn();
  const wrapper = shallow(
    <EmptyTable
      columns={["column1", "column2", "column3"]}
      onClearAllFilters={action}
    />
  );

  wrapper.find(Button).simulate("click");
  expect(action.mock.calls.length).toEqual(1);
});
