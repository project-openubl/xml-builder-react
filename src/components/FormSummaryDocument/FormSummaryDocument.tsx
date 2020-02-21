import * as React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import {
  Form,
  FormGroup,
  Grid,
  GridItem,
  Button,
  TextInput,
  InputGroup,
  InputGroupText,
  Card,
  CardBody
} from "@patternfly/react-core";
import {
  CalendarAltIcon,
  TimesIcon,
  AddCircleOIcon
} from "@patternfly/react-icons";
import { SelectTipoComprobanteBasico } from "../SelectTipoComprobanteBasico";
import { toInput } from "./Utils";
import {
  ICell,
  cellWidth,
  Table,
  TableHeader,
  TableBody
} from "@patternfly/react-table";
import { SelectTipoOperacionResumenDiario } from "../SelectTipoOperacionResumenDiario";
import { SelectDocumentoIdentidad } from "../SelectDocumentoIdentidad";

export type FormSummaryDocumentDetalleFormData = {
  serieNumero: string;
  tipoOperacion: string;
  tipoComprobante: number;
  igv: number;
  icb: number;
  importeTotal: number;
  totalOtrosCargos: number;
  totalOperacionesGravadas: number;
  totalOperacionesExoneradas: number;
  totalOperacionesInafectas: number;
  totalOperacionesGratuitas: number;
  clienteTipoDocumento: string;
  clienteNumeroDocumento: string;
  clienteNombre: string;
};

export type FormSummaryDocumentData = {
  numero: number;
  fechaEmision: Date;
  proveedorRuc: string;
  proveedorRazonSocial: string;
  proveedorNombreComercial: string;
  proveedorCodigoPostal: string;
  firmanteRuc: string;
  firmanteRazonSocial: string;
  fechaEmisionDocumentReference: Date;
  detalle: Array<FormSummaryDocumentDetalleFormData>;
};

export interface FormSummaryDocumentProps {
  onSubmit: (form: FormSummaryDocumentData, input: any) => void;
}

export const FormSummaryDocument: React.FC<FormSummaryDocumentProps> = ({
  onSubmit
}) => {
  const [isOpenRows, setIsOpenRows] = React.useState([false]);

  const validationSchema = yup.object().shape({
    numero: yup
      .number()
      .required("Este dato es requerido.")
      .min(1, "Valor minimo es 1"),
    fechaEmision: yup
      .date()
      .nullable()
      .transform((v: any) => (isNaN(v) ? undefined : v)),
    fechaEmisionDocumentReference: yup
      .date()
      .required()
      .transform((v: any) => (isNaN(v) ? undefined : v)),
    proveedorRuc: yup
      .string()
      .trim("Dato inválido")
      .required("Este dato es requerido.")
      .min(1, "Este campo debe de contener al menos 1 caracteres."),
    proveedorRazonSocial: yup
      .string()
      .trim()
      .required("Este dato es requerido.")
      .min(1, "Este campo debe de contener al menos 1 caracteres."),
    proveedorNombreComercial: yup
      .string()
      .trim()
      .transform(value => (value ? value || undefined : undefined)),
    proveedorCodigoPostal: yup
      .string()
      .trim()
      .transform(value => (value ? value || undefined : undefined)),
    firmanteRuc: yup
      .string()
      .trim()
      .transform(value => (value ? value || undefined : undefined)),
    firmanteRazonSocial: yup
      .string()
      .trim()
      .transform(value => (value ? value || undefined : undefined)),
    detalle: yup
      .array()
      .of(
        yup.object().shape({
          tipoComprobante: yup.string().required("Este dato es requerido."),
          serieNumero: yup
            .string()
            .trim()
            .required("Este dato es requerido.")
            .min(1, "Este campo debe de tener al menos 1 caracter."),
          tipoOperacion: yup
            .string()
            .trim()
            .required("Este dato es requerido.")
            .min(0, "Este campo debe de ser mayor a 0."),
          importeTotal: yup.number().required(),
          igv: yup.number().required(),
          icb: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v)),
          clienteTipoDocumento: yup
            .string()
            .trim()
            .required(),
          clienteNumeroDocumento: yup
            .string()
            .trim()
            .required(),
          clienteNombre: yup
            .string()
            .trim()
            .required(),
          totalOperacionesGravadas: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v)),
          totalOperacionesExoneradas: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v)),
          totalOperacionesInafectas: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v)),
          totalOperacionesGratuitas: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v)),
          totalOtrosCargos: yup
            .number()
            .transform((v: number) => (isNaN(v) ? undefined : v))
        })
      )
      .required("Este dato es requerido.")
      .min(1, "Este campo debe de contener al menos 1 elemento.")
  });

  let today = new Date().toISOString();
  today = today.substring(0, today.indexOf("T"));

  const defaultDetalleValues: any = {
    serieNumero: "F001-1",
    tipoOperacion: "ADICIONAR",
    tipoComprobante: "FACTURA",
    igv: 18,
    importeTotal: 118,
    clienteTipoDocumento: "RUC",
    clienteNumeroDocumento: "12345678912",
    clienteNombre: "Mi cliente"
  };
  const defaultValues: any = {
    numero: 1,
    fechaEmision: undefined,
    proveedorRuc: "12345678912",
    proveedorRazonSocial: "Project OpenUBL",
    fechaEmisionDocumentReference: today,
    detalle: [{ ...defaultDetalleValues }]
  };

  const { register, errors, control, handleSubmit } = useForm<
    FormSummaryDocumentData
  >({
    mode: "onSubmit",
    validationSchema,
    defaultValues
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "detalle"
  });

  const columns: ICell[] = [
    { title: "T. Comprobante", transforms: [cellWidth("20")] },
    { title: "Serie número", transforms: [cellWidth("20")] },
    { title: "T. Operación", transforms: [cellWidth("20")] },
    { title: "Importe total", transforms: [cellWidth("15")] },
    { title: "IGV", transforms: [cellWidth("15")] },
    { title: "", transforms: [cellWidth("10")] }
  ];

  const rows = fields.reduce((a: any[], item: any, index: number) => {
    const onRemoveClick = () => {
      remove(index);
    };

    const detalleErrors: any[] = errors.detalle ? (errors.detalle as any) : [];
    const detalleError = detalleErrors[index] ? detalleErrors[index] : {};

    a.push(
      {
        isOpen:
          isOpenRows[index * 2] !== undefined ? isOpenRows[index * 2] : false,
        cells: [
          {
            title: (
              <Controller
                as={
                  <SelectTipoComprobanteBasico
                    error={detalleError.tipoComprobante}
                  />
                }
                name={`detalle[${index}].tipoComprobante`}
                defaultValue={item.tipoComprobante}
                control={control}
              />
            )
          },
          {
            title: (
              <TextInput
                name={`detalle[${index}].serieNumero`}
                defaultValue={item.serieNumero}
                type="text"
                aria-label="Serie número"
                ref={register}
                isValid={!detalleError.serieNumero}
              />
            )
          },
          {
            title: (
              <Controller
                as={
                  <SelectTipoOperacionResumenDiario
                    error={detalleError.tipoOperacion}
                  />
                }
                name={`detalle[${index}].tipoOperacion`}
                defaultValue={item.tipoOperacion}
                control={control}
              />
            )
          },
          {
            title: (
              <TextInput
                name={`detalle[${index}].importeTotal`}
                defaultValue={item.importeTotal}
                type="number"
                aria-label="Importe total"
                ref={register}
                isValid={!detalleError.importeTotal}
              />
            )
          },
          {
            title: (
              <TextInput
                name={`detalle[${index}].igv`}
                defaultValue={item.igv}
                type="number"
                aria-label="IGV"
                ref={register}
                isValid={!detalleError.igv}
              />
            )
          },
          {
            title: (
              <Button
                variant="plain"
                aria-label="Action"
                onClick={onRemoveClick}
              >
                <TimesIcon />
              </Button>
            )
          }
        ]
      },
      {
        parent: index * 2,
        fullWidth: false,
        cells: [
          {
            title: (
              <div
                className="pf-c-form"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <Grid md={6} lg={3} gutter="sm">
                  <GridItem>
                    <FormGroup
                      isRequired={true}
                      label="Cliente T. Documento"
                      fieldId="clienteTipoDocumento"
                      isValid={!detalleError.clienteTipoDocumento}
                      helperTextInvalid={
                        detalleError.clienteTipoDocumento &&
                        detalleError.clienteTipoDocumento.message
                      }
                    >
                      <Controller
                        as={
                          <SelectDocumentoIdentidad
                            error={detalleError.clienteTipoDocumento}
                          />
                        }
                        name={`detalle[${index}].clienteTipoDocumento`}
                        control={control}
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem>
                    <FormGroup
                      isRequired={true}
                      label="Número documento"
                      fieldId="clienteNumeroDocumento"
                      isValid={!detalleError.clienteNumeroDocumento}
                      helperTextInvalid={
                        detalleError.clienteNumeroDocumento &&
                        detalleError.clienteNumeroDocumento.message
                      }
                    >
                      <TextInput
                        isRequired
                        type="text"
                        name={`detalle[${index}].clienteNumeroDocumento`}
                        aria-describedby="clienteNumeroDocumento"
                        ref={register}
                        isValid={!detalleError.clienteNumeroDocumento}
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem span={6}>
                    <FormGroup
                      isRequired={true}
                      label="Nombre/razón social"
                      fieldId="clienteNombre"
                      isValid={!detalleError.clienteNombre}
                      helperTextInvalid={
                        detalleError.clienteNombre &&
                        detalleError.clienteNombre.message
                      }
                    >
                      <TextInput
                        isRequired
                        type="text"
                        name={`detalle[${index}].clienteNombre`}
                        aria-describedby="clienteNombre"
                        ref={register}
                        isValid={!detalleError.clienteNombre}
                      />
                    </FormGroup>
                  </GridItem>
                </Grid>
                <Grid md={6} lg={3} gutter="sm">
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="T. Gravado"
                      fieldId="totalOperacionesGravadas"
                      isValid={!detalleError.totalOperacionesGravadas}
                      helperTextInvalid={
                        detalleError.totalOperacionesGravadas &&
                        detalleError.totalOperacionesGravadas.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].totalOperacionesGravadas`}
                        defaultValue={item.totalOperacionesGravadas}
                        type="number"
                        aria-label="Total Operaciones Gravadas"
                        ref={register}
                        isValid={!detalleError.totalOperacionesGravadas}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="T. Exonerado"
                      fieldId="totalOperacionesExoneradas"
                      isValid={!detalleError.totalOperacionesExoneradas}
                      helperTextInvalid={
                        detalleError.totalOperacionesExoneradas &&
                        detalleError.totalOperacionesExoneradas.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].totalOperacionesExoneradas`}
                        defaultValue={item.totalOperacionesExoneradas}
                        type="number"
                        aria-label="Total Operaciones Exoneradas"
                        ref={register}
                        isValid={!detalleError.totalOperacionesExoneradas}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="T. Inafecto"
                      fieldId="totalOperacionesInafectas"
                      isValid={!detalleError.totalOperacionesInafectas}
                      helperTextInvalid={
                        detalleError.totalOperacionesInafectas &&
                        detalleError.totalOperacionesInafectas.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].totalOperacionesInafectas`}
                        defaultValue={item.totalOperacionesInafectas}
                        type="number"
                        aria-label="Total Operaciones Inafectas"
                        ref={register}
                        isValid={!detalleError.totalOperacionesInafectas}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="T. Gratuito"
                      fieldId="totalOperacionesGratuitas"
                      isValid={!detalleError.totalOperacionesGratuitas}
                      helperTextInvalid={
                        detalleError.totalOperacionesGratuitas &&
                        detalleError.totalOperacionesGratuitas.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].totalOperacionesGratuitas`}
                        defaultValue={item.totalOperacionesGratuitas}
                        type="number"
                        aria-label="Total Operaciones Gratuitas"
                        ref={register}
                        isValid={!detalleError.totalOperacionesGratuitas}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                </Grid>
                <Grid md={6} lg={3} gutter="sm">
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="T. Otros cargos"
                      fieldId="totalOtrosCargos"
                      isValid={!detalleError.totalOtrosCargos}
                      helperTextInvalid={
                        detalleError.totalOtrosCargos &&
                        detalleError.totalOtrosCargos.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].totalOtrosCargos`}
                        defaultValue={item.totalOtrosCargos}
                        type="number"
                        aria-label="Total Otros Cargos"
                        ref={register}
                        isValid={!detalleError.totalOtrosCargos}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                  <GridItem>
                    <FormGroup
                      isRequired={false}
                      label="ICBPE"
                      fieldId="icb"
                      isValid={!detalleError.icb}
                      helperTextInvalid={
                        detalleError.icb && detalleError.icb.message
                      }
                    >
                      <TextInput
                        isRequired={false}
                        name={`detalle[${index}].icb`}
                        defaultValue={item.icb}
                        type="number"
                        aria-label="ICBPE"
                        ref={register}
                        isValid={!detalleError.icb}
                        placeholder="0.00"
                      />
                    </FormGroup>
                  </GridItem>
                </Grid>
              </div>
            )
          }
        ]
      }
    );
    return a;
  }, []);

  const handleAgregarDetalle = () => {
    append({ ...defaultDetalleValues });
  };

  const onDetalleRowCollapse = (
    event: React.MouseEvent,
    rowIndex: number,
    isOpen: boolean
  ) => {
    const newValues = [...isOpenRows];
    newValues[rowIndex] = isOpen;
    setIsOpenRows(newValues);
  };

  const onFormSubmit = (form: FormSummaryDocumentData) => {
    const inputData = toInput(form);
    onSubmit(form, inputData);
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Grid md={6} lg={3} gutter="sm">
          <GridItem>
            <FormGroup
              isRequired={true}
              label="Número"
              fieldId="numero"
              isValid={!errors.numero}
              helperTextInvalid={errors.numero && errors.numero.message}
            >
              <TextInput
                isRequired
                type="number"
                id="numero"
                name="numero"
                aria-describedby="numero"
                ref={register}
                isValid={!errors.numero}
              />
            </FormGroup>
          </GridItem>
          <GridItem>
            <FormGroup
              isRequired={false}
              label="Fecha Emisión"
              fieldId="fechaEmision"
              isValid={!errors.fechaEmision}
              helperTextInvalid={
                errors.fechaEmision && errors.fechaEmision.message
              }
            >
              <InputGroup>
                <InputGroupText component="label" htmlFor="fechaEmision">
                  <CalendarAltIcon />
                </InputGroupText>
                <TextInput
                  isRequired={false}
                  type="date"
                  id="fechaEmision"
                  name="fechaEmision"
                  aria-describedby="fechaEmision"
                  ref={register}
                  isValid={!errors.fechaEmision}
                />
              </InputGroup>
            </FormGroup>
          </GridItem>
        </Grid>
        <Grid md={6} lg={3} gutter="sm">
          <GridItem>
            <FormGroup
              isRequired={true}
              label="Proveedor RUC"
              fieldId="proveedorRuc"
              isValid={!errors.proveedorRuc}
              helperTextInvalid={
                errors.proveedorRuc && errors.proveedorRuc.message
              }
            >
              <TextInput
                isRequired
                type="text"
                id="proveedorRuc"
                name="proveedorRuc"
                aria-describedby="proveedorRuc"
                ref={register}
                isValid={!errors.proveedorRuc}
              />
            </FormGroup>
          </GridItem>
          <GridItem>
            <FormGroup
              isRequired={true}
              label="Razón social"
              fieldId="proveedorRazonSocial"
              isValid={!errors.proveedorRazonSocial}
              helperTextInvalid={
                errors.proveedorRazonSocial &&
                errors.proveedorRazonSocial.message
              }
            >
              <TextInput
                isRequired
                type="text"
                id="proveedorRazonSocial"
                name="proveedorRazonSocial"
                aria-describedby="proveedorRazonSocial"
                ref={register}
                isValid={!errors.proveedorRazonSocial}
              />
            </FormGroup>
          </GridItem>
          <GridItem>
            <FormGroup
              isRequired={false}
              label="Nombre comercial"
              fieldId="proveedorNombreComercial"
              isValid={!errors.proveedorNombreComercial}
              helperTextInvalid={
                errors.proveedorNombreComercial &&
                errors.proveedorNombreComercial.message
              }
            >
              <TextInput
                isRequired={false}
                type="text"
                id="proveedorNombreComercial"
                name="proveedorNombreComercial"
                aria-describedby="proveedorNombreComercial"
                ref={register}
                isValid={!errors.proveedorNombreComercial}
              />
            </FormGroup>
          </GridItem>
          <GridItem>
            <FormGroup
              isRequired={false}
              label="Código postal"
              fieldId="proveedorCodigoPostal"
              isValid={!errors.proveedorCodigoPostal}
              helperTextInvalid={
                errors.proveedorCodigoPostal &&
                errors.proveedorCodigoPostal.message
              }
            >
              <TextInput
                isRequired={false}
                type="text"
                id="proveedorCodigoPostal"
                name="proveedorCodigoPostal"
                aria-describedby="proveedorCodigoPostal"
                ref={register}
                isValid={!errors.proveedorCodigoPostal}
              />
            </FormGroup>
          </GridItem>
        </Grid>
        <Grid md={6} lg={3} gutter="sm">
          <GridItem>
            <FormGroup
              isRequired={false}
              label="Firmante RUC"
              fieldId="firmanteRuc"
              isValid={!errors.firmanteRuc}
              helperTextInvalid={
                errors.firmanteRuc && errors.firmanteRuc.message
              }
            >
              <TextInput
                isRequired={false}
                type="text"
                id="firmanteRuc"
                name="firmanteRuc"
                aria-describedby="firmanteRuc"
                ref={register}
                isValid={!errors.firmanteRuc}
              />
            </FormGroup>
          </GridItem>
          <GridItem span={6}>
            <FormGroup
              isRequired={false}
              label="Firmante Razón Social"
              fieldId="firmanteRazonSocial"
              isValid={!errors.firmanteRazonSocial}
              helperTextInvalid={
                errors.firmanteRazonSocial && errors.firmanteRazonSocial.message
              }
            >
              <TextInput
                isRequired={false}
                type="text"
                id="firmanteRazonSocial"
                name="firmanteRazonSocial"
                aria-describedby="firmanteRazonSocial"
                ref={register}
                isValid={!errors.firmanteRazonSocial}
              />
            </FormGroup>
          </GridItem>
        </Grid>
        <Grid md={6} lg={3} gutter="sm">
          <GridItem>
            <FormGroup
              isRequired={true}
              label="Fecha emision de comprobantes dentro del resumen"
              fieldId="fechaEmisionDocumentReference"
              isValid={!errors.fechaEmisionDocumentReference}
              helperTextInvalid={
                errors.fechaEmisionDocumentReference &&
                errors.fechaEmisionDocumentReference.message
              }
            >
              <InputGroup>
                <InputGroupText
                  component="label"
                  htmlFor="fechaEmisionDocumentReference"
                >
                  <CalendarAltIcon />
                </InputGroupText>
                <TextInput
                  isRequired={false}
                  type="date"
                  id="fechaEmisionDocumentReference"
                  name="fechaEmisionDocumentReference"
                  aria-describedby="fechaEmisionDocumentReference"
                  ref={register}
                  isValid={!errors.fechaEmisionDocumentReference}
                />
              </InputGroup>
            </FormGroup>
          </GridItem>
        </Grid>
        <Grid md={6} lg={3} gutter="sm">
          <GridItem span={12}>
            <Card>
              <CardBody>
                <Table
                  aria-label="Document Line Table"
                  cells={columns}
                  rows={rows}
                  onCollapse={onDetalleRowCollapse}
                  caption="Comprobantes incluidos en el resumen diario"
                >
                  <TableHeader />
                  <TableBody />
                  <tfoot>
                    <tr>
                      <td colSpan={7}>
                        <Button
                          variant="tertiary"
                          onClick={handleAgregarDetalle}
                        >
                          <AddCircleOIcon /> Agregar item
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        <Button type="submit">Guardar</Button>
      </Form>
    </React.Fragment>
  );
};

export default FormSummaryDocument;
