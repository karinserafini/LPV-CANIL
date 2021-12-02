<template>
  <v-app>
    <v-card>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="ID" outlined></v-text-field>
      </v-col>
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
      <div class="my-2">
        <v-btn color="warning" dark> Cancelar </v-btn>
      </div>
      <div class="my-2">
        <v-btn color="success" dark @click="setDonos(donos)" > Salvar </v-btn>
      </div>
    </v-card>
    <div>
      <v-btn @click="getDonos"> Carrregar Dados </v-btn>
      {{ donos }}
      <v-data-table
        :headers="headers"
        :items="donos"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:items.actions="{ item }">
          <v-icon small color="error" @click="deleteDonos(item)">
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
    ...mapGetters("donos", ["donos"]),
  },
  methods: {
    ...mapActions("donos", ["getDonos", "setDonos"]),
  },

  data() {
    return {
      donos: {
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