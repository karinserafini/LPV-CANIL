
<template>
  <v-app>
    <v-card>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Nome" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="CPF" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Telefone" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Endereço" outlined></v-text-field>
      </v-col>
      <div class="cancel">
        <v-btn color="warning" dark> Cancelar </v-btn>
      </div>
      <div class="acept">
        <v-btn color="success" dark @click="setFuncionarios(funcionarios)">
          Salvar
        </v-btn>
      </div>
    </v-card>
    <div>
      <v-btn @click="getFuncionarios"> Carrregar Dados </v-btn>
      {{ funcionarios }}
      <v-data-table
        :headers="headers"
        :items="funcionarios"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:items.actions="{ item }">
          <v-icon small color="error" @click="deleteFuncionarios(item)">
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
    ...mapGetters("funcionarios", ["funcionarios"]),
  },
  methods: {
    ...mapActions("funcionarios", ["getFuncionarios", "setFuncionarios"]),
  },

  data() {
    return {
      funcionarios: {
        id: null,
        nome: null,
        cpf: null,
        telefone: null,
        endereco: null,
      },
    };
  },
  headers: [
    { text: "ID", value: "id" },
    { text: "Nome", value: "nome" },
    { text: "CPF", value: "cpf" },
    { text: "Telefone", value: "telefone" },
    { text: "Endereço", value: "endereco" },
    { text: "", value: "actions", sortable: false },
  ],
};
</script>

<style>
</style>