<template>
  <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.invoiceNum }}</td>
        <td class="text-xs-right">{{ props.item.invoiceDate }}</td>
        <td class="text-xs-right">{{ props.item.invoiceDesc }}</td>
        <td class="text-xs-right">{{ props.item.invoiceCli }}</td>
        <td class="text-xs-right">{{ props.item.invoiceTaxBase }}</td>
        <td class="text-xs-right">{{ props.item.invoiceIva }}</td>
        <td class="text-xs-right">{{ props.item.invoiceIrpf }}</td>
        <td class="text-xs-right">{{ props.item.invoiceTotal }}</td>
      </template>
    </v-data-table>
  </template>

<script>
export default {
  name: 'invoiceList',
  data () {
    return {
      headers: [
        {
          text: 'Facturas',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Número de factura', value: 'invoiceNum'},
        {text: 'Fecha', value: 'invoiceDate'},
        {text: 'Descripción', value: 'invoiceDesc'},
        {text: 'Cliente (texto corto)', value: 'invoiceCli'},
        {text: 'Base imponible', value: 'invoiceTaxBase'},
        {text: 'IVA', value: 'invoiceIva'},
        {text: 'IRPF', value: 'invoiceIrpf'},
        {text: 'Total', value: 'invoiceTotal'}
      ],
      items: [
        {
          invoiceNum: 15,
          invoiceDate: '15/02/2018',
          invoiceDesc: 'Tomatoes',
          invoiceCli: 'Tomatex',
          invoiceTaxBase: 100,
          invoiceIva: 4,
          invoiceIrpf: 19,
          invoiceTotal: 104
        },
        {
          invoiceNum: 42,
          invoiceDate: '19/02/2018',
          invoiceDesc: 'Apples',
          invoiceCli: 'Mamelux',
          invoiceTaxBase: 200,
          invoiceIva: 4,
          invoiceIrpf: 12,
          invoiceTotal: 208
        },
        {
          invoiceNum: 87,
          invoiceDate: '28/03/2018',
          invoiceDesc: 'Crabs',
          invoiceCli: 'Rigoblas',
          invoiceTaxBase: 100,
          invoiceIva: 10,
          invoiceIrpf: 15,
          invoiceTotal: 110
        }
      ]
    }
  }
}
</script>
