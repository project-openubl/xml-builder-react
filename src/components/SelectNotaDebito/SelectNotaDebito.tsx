import * as React from "react";
import { SelectCatalog } from "../SelectCatalog";
import { SelectCatalogControlProps } from "../SelectCatalog/SelectCatalog";

type OptionType =
  | ""
  | "INTERES_POR_MORA"
  | "AUMENTO_EN_EL_VALOR"
  | "PENALIDAD_OTROS_CONCEPTOS";

const options: Map<OptionType, string> = new Map([
  ["", "Seleccione"],
  ["INTERES_POR_MORA", "INTERES POR MORA"],
  ["AUMENTO_EN_EL_VALOR", "AUMENTO EN EL VALOR"],
  ["PENALIDAD_OTROS_CONCEPTOS", "PENALIDAD OTROS CONCEPTOS"]
]);

export class SelectNotaDebito extends React.Component<
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
