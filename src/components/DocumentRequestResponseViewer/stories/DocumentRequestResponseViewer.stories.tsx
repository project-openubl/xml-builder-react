import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DocumentRequestResponseViewer } from "../DocumentRequestResponseViewer";

storiesOf("Components | Document RR Viewer", module)
  .add("Default", () => <DocumentRequestResponseViewer />)
  .add("Request", () => {
    const requestObj = {
      stringField: "value",
      booleanField: true,
      numberField: 100,
      dateField: new Date()
    };
    return <DocumentRequestResponseViewer requestObj={requestObj} />;
  })
  .add("Request and response", () => {
    const requestObj = {
      requestStringField: "value",
      requestBooleanField: true,
      requestNumberField: 100,
      requestDateField: new Date()
    };
    const responseEnrichedObj = {
      responseStringField: "value",
      responseBooleanField: true,
      responseNumberField: 100,
      responseDateField: new Date()
    };
    const xml = "<Invoice></Invoice>";
    return (
      <DocumentRequestResponseViewer
        requestObj={requestObj}
        responseEnrichedObj={responseEnrichedObj}
        responseXML={{
          xml: xml,
          filename: "miFile.xml"
        }}
      />
    );
  });
