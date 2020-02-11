import * as React from "react";
import { SelectCatalog } from "../SelectCatalog";
import { SelectCatalogControlProps } from "../SelectCatalog/SelectCatalog";

type OptionType =
  | ""
  | "FACTURA"
  | "BOLETA"
  | "NOTA_CREDITO"
  | "NOTA_DEBITO";

const options: Map<OptionType, string> = new Map([
  ["", "Seleccione"],
  ["FACTURA", "FACTURA"],
  ["BOLETA", "BOLETA"],
  ["NOTA_CREDITO", "NOTA DE CRÉDITO"],
  ["NOTA_DEBITO", "NOTA DE DÉBITO"]
]);

export class SelectTipoComprobanteBasico extends React.Component<
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
