<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <v-card-text>
            Fecha: <input type="text" v-model="invoiceDate"><br>
            Número de Factura: <input type="number" v-model="invoiceNum">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 text-xs-center>
        <v-card>
          <v-card-text>Pagado / No Pagado</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text>Cliente: <input type="text" v-model="invoiceCli"></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 text-xs-right>
        <v-card>
          <v-card-text>USERNAME</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            Descripción: <input type="text" v-model="invoiceDesc" size="40">
            IVA: <input type="number" v-model="invoiceIva">
            Base: <input type="number" v-model="invoiceTaxBase">
            TOTAL: <input type="number" v-model="invoiceIrpf">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card flat="">
          <v-card-text>
            Base: <input type="text" v-model="invoiceTaxBase" maxlength="8" disabled size="10">
            IRPF: <input type="text" v-model="invoiceIrpf" maxlength="3" disabled size="4">
            IVA: <input type="text" v-model="invoiceIva" maxlength="3" disabled size="4">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
