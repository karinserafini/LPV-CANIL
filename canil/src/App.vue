<template>
    <v-app id="inspire">
        <span class="bg2"></span>
        
        <v-app-bar app color="success" dark elevation="1">
            CANIL K.S
            <v-spacer></v-spacer>
            <v-btn icon to="/login">
                Sair
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
        
            v-model="sidebarMenu" 
            app floating
            :permanent="sidebarMenu"
            :mini-variant.sync="mini"
            >
             
            <v-list-item class="px-2" >
                <v-list-item-avatar>
                    <v-icon @click="toggleMini = !toggleMini">mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    Karin Serafini
                </v-list-item-content>
                
            </v-list-item>
            
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="dark">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="dark--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer class="py-3">
            
        </v-footer>
    </v-app>
</template>

<script>
    export default {
    name: 'Main',
    
    data: () => ({
        sidebarMenu: true,
        toggleMini: false,
        items: [
            { title:"Home", href:"/main", icon:"mdi-home" },
            { title:"Animais", href:"/Animais", icon:"mdi-dog" },
            { title:"Donos", href:"/Donos", icon:"mdi-account" },
            { title:"Funcionários", href:"/Funcionarios", icon:"mdi-account-tie" },
            { title:"Estoque de Produtos", href:"/EstoqueProdutos", icon:"mdi-calculator" },
        ],
    }),
    
   };
</script>

<style>

</style>


