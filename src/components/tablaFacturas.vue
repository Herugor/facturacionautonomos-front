<template>
  <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-right">{{ props.item.numFact }}</td>
        <td class="text-xs-right">{{ props.item.fecha }}</td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.cliente }}</td>
        <td class="text-xs-right">{{ props.item.baseImp }}</td>
        <td class="text-xs-right">{{ props.item.iva }}</td>
        <td class="text-xs-right">{{ props.item.irpf }}</td>
        <td class="text-xs-right">{{ props.item.total }}</td>
      </template>
    </v-data-table>
  </template>

<script>
export default {
  name: 'tablaFacturas',
  data () {
    return {
      headers: [
        {
          text: 'Facturas',
          align: 'left',
          sortable: false,
          value: 'nombre'
        },
        {text: 'Número de factura', value: 'numFact'},
        {text: 'Fecha', value: 'fecha'},
        {text: 'Descripción', value: 'descripcion'},
        {text: 'Cliente (texto corto)', value: 'cliente'},
        {text: 'Base imponible', value: 'baseImp'},
        {text: 'IVA', value: 'iva'},
        {text: 'IRPF', value: 'irpf'},
        {text: 'Total', value: 'total'}
      ],
      items: [
        {
          numFact: 15,
          fecha: '15/02/2018',
          descripcion: 'Pedido de Tomates',
          cliente: 'Tomates Manolo',
          baseImp: 100,
          iva: 4,
          irpf: 19,
          total: 104
        },
        {
          numFact: 42,
          fecha: '19/02/2018',
          descripcion: 'Manzanas',
          cliente: 'Mamelux',
          baseImp: 200,
          iva: 4,
          irpf: 12,
          total: 208
        },
        {
          numFact: 87,
          fecha: '28/03/2018',
          descripcion: 'Tuberias',
          cliente: 'Rigoblas',
          baseImp: 100,
          iva: 10,
          irpf: 15,
          total: 110
        }
      ]
    }
  }
}
</script>
