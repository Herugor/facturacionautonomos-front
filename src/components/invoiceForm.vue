<template>
  <v-form v-model="valid">
    <v-text-field
      label="Número de factura"
      v-model="invoiceNum"
      :rules="textRule"
      :counter="16"
      required
    ></v-text-field>
    <v-text-field
      label="Fecha"
      v-model="invoiceDate"
      :rules="dateRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Descripción"
      v-model="invoiceDesc"
      :rules="textRule"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Cliente"
      v-model="invoiceCli"
      :rules="textRule"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Base Imponible"
      v-model="invoiceTaxBase"
      :rules="numRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="IVA"
      v-model="invoiceIva"
      :rules="taxRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="IRPF"
      v-model="invoiceIrpf"
      :rules="taxRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="TOTAL"
      v-model="invoiceTotal"
      :rules="numRules"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    invoiceNum: '',
    invoiceDate: 'dd/mm/aaaa',
    invoiceDesc: '',
    invoiceCli: '',
    invoiceTaxBase: '',
    invoiceIva: '0',
    invoiceIrpf: '0',
    invoiceTotal: '0',
    textRule: [
      v => !!v || 'Este campo es obligatorio',
      v => v.length <= 30 || 'Tiene que tener menos de 30 caracteres'
    ],
    numRules: [
      v => !!v || 'Introduzca un número',
      v => v.length <= 16 || 'No puede superar los 16 caracteres'
    ],
    taxRules: [
      v => !!v || 'Introduzca un número entero',
      v => v.length <= 2 || 'Máximo dos caracteres'
    ],
    dateRules: [
      v => !!v || 'Formato fecha dd/mm/aaaa'
    ]
  })
}
</script>
