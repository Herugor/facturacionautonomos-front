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
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.description }}</td>
        <td class="text-xs-right">{{ props.item.client }}</td>
        <td class="text-xs-right">{{ props.item.B }}</td>
        <td class="text-xs-right">{{ props.item.iva }}</td>
        <td class="text-xs-right">{{ props.item.irpf }}</td>
        <td class="text-xs-right">{{ props.item.total }}</td>
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
        {text: 'date', value: 'date'},
        {text: 'Descripción', value: 'description'},
        {text: 'Cliente (texto corto)', value: 'client'},
        {text: 'Base imponible', value: 'taxBase'},
        {text: 'IVA', value: 'iva'},
        {text: 'IRPF', value: 'irpf'},
        {text: 'Total', value: 'total'}
      ],
      items: [
        {
          invoiceNum: 15,
          date: '15/02/2018',
          description: 'Tomatoes',
          client: 'Tomatex',
          taxBase: 100,
          iva: 4,
          irpf: 19,
          total: 104
        },
        {
          invoiceNum: 42,
          date: '19/02/2018',
          description: 'Apples',
          client: 'Mamelux',
          taxBase: 200,
          iva: 4,
          irpf: 12,
          total: 208
        },
        {
          invoiceNum: 87,
          date: '28/03/2018',
          description: 'Crabs',
          client: 'Rigoblas',
          taxBase: 100,
          iva: 10,
          irpf: 15,
          total: 110
        }
      ]
    }
  }
}
</script>
