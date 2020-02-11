import * as React from 'react';
import SelectCatalog from "../SelectCatalog";
import { SelectCatalogControlProps } from "../SelectCatalog/SelectCatalog";

type OptionType =
  | ""
  | "DOC_TRIB_NO_DOM_SIN_RUC"
  | "DNI"
  | "EXTRANJERIA"
  | "RUC"
  | "PASAPORTE"
  | "DEC_DIPLOMATICA";

const options: Map<OptionType, string> = new Map([
  ["", "Seleccione"],
  ["DOC_TRIB_NO_DOM_SIN_RUC", "DOC. TRIB. NO DOM. SIN RUC"],
  ["DNI", "DNI"],
  ["EXTRANJERIA", "EXTRANJERIA"],
  ["RUC", "RUC"],
  ["PASAPORTE", "PASAPORTE"],
  ["DEC_DIPLOMATICA", "DEC_DIPLOMATICA"]
]);

class SelectDocumentoIdentidad extends React.Component<
  SelectCatalogControlProps
> {
  render() {
    const { error, value, onChange, ...rest } = this.props;
    return (
      <SelectCatalog
        options={options}
        value={value}
        onChange={onChange}
        error={error}
        {...rest}
      />
    );
  }
}

export default SelectDocumentoIdentidad;
