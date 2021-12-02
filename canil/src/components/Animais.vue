<template>
  <v-app>
    <v-card>
      <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="animais.id" label="ID" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.nome"
          label="Nome"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.sexo"
          label="Sexo"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.raca"
          label="Raça"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.especie"
          label="Espécie"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.porte"
          label="Porte"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="animais.dataentrada"
          label="Data de Entrada"
          outlined
        ></v-text-field>
      </v-col>
      <div class="my-2">
        <v-btn color="warning" dark> Cancelar </v-btn>
      </div>
      <div class="my-2">
        <v-btn color="success" dark @click="setAnimais(animais)"> Salvar </v-btn>
      </div>
    </v-card>
    <div>
      <v-btn @click="getAnimais"> Carrregar Dados </v-btn>
      {{ animais }}
      <v-data-table
        :headers="headers"
        :items="animais"
        :items-per-page="5"
        class="elevation-1"
        >
        <template v-slot:items.actions="{item}">
          <v-icon
            small
            color = "error"
            @click="deleteAnimais(item)"
            >
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
    ...mapGetters("animais", ["animais"]),
  },
  methods: {
    ...mapActions("animais", ["getAnimais", "setAnimais"]),
    
  },



  data() {
    return {
      animais: {
        id: null,
        nome: null,
        sexo: null,
        raca: null,
        especie: null,
        porte: null,
        dataentrada: null,
      },
    };
  },
  headers:[
    {text: 'ID', value: 'id'},
    {text: 'Nome', value: 'nome'},
    {text: 'Sexo', value: 'sexo'},
    {text: 'Raça', value: 'raca'},
    {text: 'Espécie', value: 'tipo'},
    {text: 'Porte', value: 'porte'},
    {text: 'Data de Entrada', value: 'dataentrada'},
    {text: '', value: 'actions', sortable: false}
  ]
};
</script>

<style>
</style>
