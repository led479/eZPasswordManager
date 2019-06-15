<template>
<v-layout justify-center align-center>
  <v-toolbar app>
    <v-btn icon @click="voltar()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn @click="salvaSenha()" class="text-none">
      <v-icon small>save</v-icon>&ensp;Salvar
    </v-btn>
    
  </v-toolbar>
  <v-flex>
    <v-form>
      <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${this.senha.icone}-icon.png`)"
        height="80"
        width="80"></v-img>
      <br>
      <h2>Ícone</h2>
      <div @click="exibeLista = true">
        <v-select
          label="Aperte aqui para escolher..."
          single-line
          prepend-icon="apps"
          style="pointer-events: none"
          :items="listaNomes"
          v-model="senha.nome"
        ></v-select>
      </div>
      
      <!-- <v-btn @click="dialog = true">Aperte aqui para escolher um nome...</v-btn> -->
      <br>

      <h2>Login</h2>
      <v-text-field
        v-model="senha.login"
        label="exemplo@exemplo.com"
        single-line
        prepend-icon="person"
      ></v-text-field>
      <br>

      <h2>Senha</h2>
      <v-text-field
        v-model="senha.senha"
        label="senha-exemplo123"
        single-line
        prepend-icon="vpn_key"
      ></v-text-field>
      <br>

      <h2>Anotações (opcional)</h2>
      <v-textarea 
        v-model="senha.anotacoes"
        label="Anotação exemplo..."
        single-line>
      </v-textarea>
    </v-form>

    <v-dialog v-model="exibeLista">
      <v-list>
        <v-list-tile @click="mudaIcone('Facebook')">
          <v-list-tile-content>
            <v-list-tile-title>Facebook</v-list-tile-title>
            </v-list-tile-content>
          <v-list-tile-action><v-icon>check_circle</v-icon></v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="mudaIcone('Instagram')">
          <v-list-tile-content><v-list-tile-title>Instagram</v-list-tile-title></v-list-tile-content>
          <v-list-tile-action><v-icon>check_circle</v-icon></v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="mudaIcone('Email')">
          <v-list-tile-content>
            <v-list-tile-title>Email</v-list-tile-title>
            </v-list-tile-content>
          <v-list-tile-action><v-icon>check_circle</v-icon></v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="mudaIcone('Netflix')">
          <v-list-tile-content><v-list-tile-title>Netflix</v-list-tile-title></v-list-tile-content>
          <v-list-tile-action><v-icon>check_circle</v-icon></v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="mudaIcone('Twitter')">
          <v-list-tile-content>
            <v-list-tile-title>Twitter</v-list-tile-title>
            </v-list-tile-content>
          <v-list-tile-action><v-icon>check_circle</v-icon></v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="exibeAddNovoNome()">
          <v-list-tile-content><v-list-tile-title>Adicionar um nome</v-list-tile-title></v-list-tile-content>
          <v-list-tile-action><v-icon>add</v-icon></v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-dialog>

    <v-dialog v-model="exibeAdicionarNome">
      <v-card>
        <v-card-title>
          <span class="headline">Adicionar um nome</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="novoNome" label="Nome"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="escondeAddNovoNome()"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="adicionarNovoNome()"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-flex>
</v-layout>
</template>

<style>
</style>

<script>
export default {
  props: {
    senha: {
      type: Object,
      required: false,
      default: () => {
        return { 
          icone: 'default',
          nome: '',
          login: '',
          senha: '',
          anotacoes: ''
        }
      }
    }
  },
  data() {
    return {
      title: this.senha.id == undefined ? "Adicionar nova senha" : `Editar senha ${this.senha.nome}`,
      exibeLista: false,
      exibeAdicionarNome: false,
      listaNomes: ['Facebook', 'Instagram', 'Email', 'Netflix', 'Twitter'],
      novoNome: '',
    }
  },
  methods: {
    mudaIcone(nome) {
      this.senha.icone = nome.toLowerCase()
      this.senha.nome = nome
      this.exibeLista = false
    },
    exibeAddNovoNome(){
      this.exibeLista = false
      this.exibeAdicionarNome = true
    },
    escondeAddNovoNome(){
      this.exibeAdicionarNome = false
      this.exibeLista = true
    },
    adicionarNovoNome() {
      this.exibeAdicionarNome = false
      this.listaNomes.push(this.novoNome)
      this.senha.nome = this.novoNome
      this.senha.icone = 'default'
    },
    salvaSenha() {
      this.senha.id = 5
      this.$store.commit('CRIA_SENHA_NOVA', this.senha) 
      this.$router.push('/password')
      this.$toast.info('Senha salva com sucesso!', { duration: 5000 })
    },
    voltar(){
      this.$router.push('/password')
    }
  }
}
</script>