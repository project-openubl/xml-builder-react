import * as React from "react";
import { SelectCatalog } from "../SelectCatalog";
import { SelectCatalogControlProps } from "../SelectCatalog/SelectCatalog";

type OptionType = "" | "ADICIONAR" | "MODIFICAR" | "ANULADO";

const options: Map<OptionType, string> = new Map([
  ["", "Seleccione"],
  ["ADICIONAR", "ADICIONAR"],
  ["MODIFICAR", "MODIFICAR"],
  ["ANULADO", "ANULAR"]
]);

export class SelectTipoOperacionResumenDiario extends React.Component<
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
