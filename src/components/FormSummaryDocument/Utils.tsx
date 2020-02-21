import {
  FormSummaryDocumentData,
  FormSummaryDocumentDetalleFormData
} from "./FormSummaryDocument";

export const toInput = (form: FormSummaryDocumentData): any => {
  return {
    numero: form.numero,
    fechaEmision: form.fechaEmision ? form.fechaEmision.getTime() : undefined,
    fechaEmisionDocumentReference: form.fechaEmisionDocumentReference
      ? form.fechaEmisionDocumentReference.getTime()
      : undefined,
    proveedor: {
      ruc: form.proveedorRuc,
      razonSocial: form.proveedorRazonSocial,
      nombreComercial: form.proveedorNombreComercial,
      codigoPostal: form.proveedorCodigoPostal
    },
    firmante:
      form.firmanteRuc && form.firmanteRazonSocial
        ? {
            ruc: form.firmanteRuc,
            razonSocial: form.firmanteRazonSocial
          }
        : undefined,
    detalle: form.detalle.map((item: FormSummaryDocumentDetalleFormData) => ({
      serieNumero: item.serieNumero,
      tipoOperacion: item.tipoOperacion,
      tipoComprobante: item.tipoComprobante,
      importeTotal: item.importeTotal,
      igv: item.igv,
      icb: item.icb,
      totalOtrosCargos: item.totalOtrosCargos,
      totalOperacionesGravadas: item.totalOperacionesGravadas,
      totalOperacionesExoneradas: item.totalOperacionesExoneradas,
      totalOperacionesInafectas: item.totalOperacionesInafectas,
      totalOperacionesGratuitas: item.totalOperacionesGratuitas,
      cliente: {
        nombre: item.clienteNombre,
        tipoDocumentoIdentidad: item.clienteTipoDocumento,
        numeroDocumentoIdentidad: item.clienteNumeroDocumento
      }
    }))
  };
};
