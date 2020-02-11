import * as React from 'react';
import SelectCatalog from "../SelectCatalog";
import { SelectCatalogControlProps } from "../SelectCatalog/SelectCatalog";

export type OptionType =
  | ""
  | "ANULACION_DE_LA_OPERACION"
  | "ANULACION_POR_ERROR_EN_EL_RUC"
  | "CORRECCION_POR_ERROR_EN_LA_DESCRIPCION"
  | "DESCUENTO_GLOBAL"
  | "DESCUENTO_POR_ITEM"
  | "DEVOLUCION_TOTAL"
  | "DEVOLUCION_POR_ITEM"
  | "BONIFICACION"
  | "DISMINUCION_EN_EL_VALOR"
  | "OTROS_CONCEPTOS";

export const options: Map<OptionType, string> = new Map([
  ["", "Seleccione"],
  ["ANULACION_DE_LA_OPERACION", "ANULACIÓN DE LA OPERACIÓN"],
  ["ANULACION_POR_ERROR_EN_EL_RUC", "ANULACIÓN POR ERROR EN RUC"],
  [
    "CORRECCION_POR_ERROR_EN_LA_DESCRIPCION",
    "CORRECCION POR ERROR EN DESCRIPCION"
  ],
  ["DESCUENTO_GLOBAL", "DESCUENTO GLOBAL"],
  ["DESCUENTO_POR_ITEM", "DESCUENTO POR ITEM"],
  ["DEVOLUCION_TOTAL", "DEVOLUCIÓN TOTAL"],
  ["DEVOLUCION_POR_ITEM", "DEVOLUCION POR ITEM"],
  ["BONIFICACION", "BONIFICACIÓN"],
  ["DISMINUCION_EN_EL_VALOR", "DISMINUCIÓN EN EL VALOR"],
  ["OTROS_CONCEPTOS", "OTROS CONCEPTOS"]
]);

class SelectNotaCredito extends React.Component<SelectCatalogControlProps> {
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

export default SelectNotaCredito;
