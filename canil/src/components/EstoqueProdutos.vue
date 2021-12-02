<template>
  <v-app>
    <v-card>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="ID" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Descrição" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Quantidade" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Espécie do animal" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Valor Unitário" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Valor total" outlined></v-text-field>
      </v-col>
      <div class="my-2">
        <v-btn color="warning" dark> Cancelar </v-btn>
      </div>
      <div class="my-2">
        <v-btn color="success" dark @click="setEstoque(estoque)"> Salvar </v-btn>
      </div>
    </v-card>
    <div>
      <v-btn @click="getEstoque"> Carrregar Dados </v-btn>
      {{ estoque }}
      <v-data-table
        :headers="headers"
        :items="estoque"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:items.actions ="{ item }">
          <v-icon small color="error" @click="deleteEstoque(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("estoque", ["estoque"]),
  },
  methods: {
    ...mapActions("estoque", ["getEstoque", "setEstoque"]),
  },

  data() {
    return {
      estoque: {
        id: null,
        descricao: null,
        especieanimal: null,
        valorunit: null,
        valortotal: null,
      },
    };
  },
  headers: [
    { text: "ID", value: "id" },
    { text: "Descrição do Produto", value: "descricao" },
    { text: "Espécie do Animal", value: "especieanimal" },
    { text: "Valor Unitário", value: "valorunit" },
    { text: "Valor Total", value: "valototal" },
    { text: "", value: "actions", sortable: false },
  ],
};
</script>