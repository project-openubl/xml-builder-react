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
  .add("Big Request", () => {
    const requestObj = {
      stringField1: "value",
      booleanField1: true,
      numberField1: 100,
      dateField1: new Date(),
      stringField2: "value",
      booleanField2: true,
      numberField2: 100,
      dateField2: new Date(),
      stringField3: "value",
      booleanField3: true,
      numberField3: 100,
      dateField3: new Date(),
      stringField4: "value",
      booleanField4: true,
      numberField4: 100,
      dateField4: new Date(),
      stringField5: "value",
      booleanField5: true,
      numberField5: 100,
      dateField5: new Date()
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
