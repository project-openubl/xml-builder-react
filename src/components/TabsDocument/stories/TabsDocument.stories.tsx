import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TabsDocument } from "../TabsDocument";

storiesOf("Tabs | Documents", module)
  .add("Tab0 selected", () => (
    <TabsDocument
      activeKey={0}
      onTabSelect={event => {
        action("event");
      }}
    >
      <p>Document form</p>
    </TabsDocument>
  ))
  .add("Tab1 selected", () => (
    <TabsDocument
      activeKey={1}
      onTabSelect={event => {
        action("event");
      }}
    >
      <p>Document form</p>
    </TabsDocument>
  ))
  .add("Add top section", () => (
    <TabsDocument
      activeKey={0}
      onTabSelect={event => {
        action("event");
      }}
      topPageSection={<p>Additional section on top</p>}
    >
      <p>Document form</p>
    </TabsDocument>
  ));
