import { FormVoidedDocumentData } from "./FormVoidedDocument";

export const toInput = (form: FormVoidedDocumentData): any => {
  return {
    numero: form.numero,
    fechaEmision: form.fechaEmision ? form.fechaEmision.getTime() : undefined,
    proveedor: {
      ruc: form.proveedorRuc,
      razonSocial: form.proveedorNombreComercial,
      codigoPostal: form.proveedorCodigoPostal
    },
    firmante:
      form.firmanteRuc && form.firmanteRazonSocial
        ? {
            ruc: form.firmanteRuc,
            razonSocial: form.firmanteRazonSocial
          }
        : undefined,
    tipoDocumentReference: form.tipoDocumentReference,
    fechaEmisionDocumentReference: form.fechaEmisionDocumentReference
      ? form.fechaEmisionDocumentReference.getTime()
      : undefined,
    serieNumeroDocumentReference: form.serieNumeroDocumentReference,
    motivoBajaDocumentReference: form.motivoBajaDocumentReference
  };
};
