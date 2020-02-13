import * as React from "react";
import { shallow } from "enzyme";
import { ButtonViewModal } from "../ButtonViewModal";

it("Renders without crashing", () => {
  const wrapper = shallow(
    <ButtonViewModal
      buttonLabel="My Button"
      modalTitle="My modal title"
      modalContent="My modal content"
    />
  );

  expect(wrapper).toMatchSnapshot();
});
