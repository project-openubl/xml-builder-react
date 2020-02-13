import * as React from "react";
import { shallow } from "enzyme";
import { TableEmpty } from "../TableEmpty";
import { Button } from "@patternfly/react-core";

it("Renders without crashing", () => {
  const action = jest.fn();
  const wrapper = shallow(
    <TableEmpty
      columns={["column1", "column2", "column3"]}
      onClearAllFilters={action}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it("Retry action is called when button clicked", () => {
  const action = jest.fn();
  const wrapper = shallow(
    <TableEmpty
      columns={["column1", "column2", "column3"]}
      onClearAllFilters={action}
    />
  );

  wrapper.find(Button).simulate("click");
  expect(action.mock.calls.length).toEqual(1);
});
