import { StandardDocumentFormData } from "./FormStandardDocument";

export const toInput = (form: StandardDocumentFormData): any => {
  const result: any = {
    serie: form.serie,
    numero: form.numero,
    fechaEmision: form.fechaEmision ? form.fechaEmision.getTime() : undefined,
    totalDescuentos: form.totalDescuentos,
    totalOtrosCargos: form.totalOtrosCargos,
    proveedor: {
      ruc: form.proveedorRuc,
      razonSocial: form.razonSocial,
      codigoPostal: form.proveedorCodigoPostal
    },
    cliente: {
      tipoDocumentoIdentidad: form.clienteTipoDocumento,
      numeroDocumentoIdentidad: form.clienteNumeroDocumento,
      nombre: form.clienteNombre
    },
    firmante:
      form.firmanteRuc && form.firmanteRazonSocial
        ? {
            ruc: form.firmanteRuc,
            razonSocial: form.firmanteRazonSocial
          }
        : undefined,
    detalle: form.detalle.map((item: any) => ({
      descripcion: item.descripcion,
      precioUnitario: item.precioUnitario,
      cantidad: item.cantidad,
      unidadMedida: item.unidadMedida,
      tipoIGV: item.tipoIgv,
      icb: item.icb
    }))
  };

  if (form.comprobanteAfectado) {
    result.serieNumeroInvoiceReference = form.comprobanteAfectado;
  }
  if (form.comprobanteAfectadoSustento) {
    result.descripcionSustentoInvoiceReference =
      form.comprobanteAfectadoSustento;
  }
  if (form.tipoNota) {
    result.tipoNota = form.tipoNota;
  }

  return result;
};
