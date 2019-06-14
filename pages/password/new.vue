<template>
<v-layout justify-center align-center>
  <v-toolbar app>
    <v-btn icon to="/password">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn icon to="/password">
      <v-icon>save</v-icon>
    </v-btn>
  </v-toolbar>
  <v-flex>
    <v-form>
      <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${this.icone}-icon.png`)"
        height="80"
        width="80"></v-img>
      <br>
      <h2>Ícone</h2>
      <div @click="dialog = true">
        <v-select
          label="Aperte aqui para escolher..."
          single-line
          prepend-icon="apps"
          style="pointer-events: none"
        ></v-select>
      </div>
      
      <!-- <v-btn @click="dialog = true">Aperte aqui para escolher um nome...</v-btn> -->
      <br>

      <h2>Login</h2>
      <v-text-field
        label="exemplo@exemplo.com"
        single-line
        prepend-icon="person"
      ></v-text-field>
      <br>

      <h2>Senha</h2>
      <v-text-field
        label="senha-exemplo123"
        single-line
        prepend-icon="vpn_key"
      ></v-text-field>
      <br>

      <h2>Anotações (opcional)</h2>
      <v-textarea 
        label="Anotação exemplo..."
        single-line>
      </v-textarea>
    </v-form>

    <v-dialog v-model="dialog">
      <v-list>
        <v-radio-group v-model="nome">
          <v-list-tile>
            <v-list-tile-content><v-list-tile-title>Facebook</v-list-tile-title></v-list-tile-content>
            <v-list-tile-action><v-radio value="nome" color="#FFFFFF"></v-radio></v-list-tile-action>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content><v-list-tile-title>Facebook</v-list-tile-title></v-list-tile-content>
            <v-list-tile-action><v-radio value="facebook" color="#FFFFFF"></v-radio></v-list-tile-action>
          </v-list-tile>
        </v-radio-group>
      </v-list>
    </v-dialog>

  </v-flex>
</v-layout>
</template>

<style>
  .v-input__control {
        width: 100% !important
      }
      .v-label {
        width: 100% !important
      }
</style>

<script>
export default {
  data() {
    return {
      title: "Adicionar Senha",
      icone: 'default',
      nome: '',
      dialog: false
    }
  }
}
</script>