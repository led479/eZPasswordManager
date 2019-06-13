<template>
<v-layout column justify-center align-center>
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
    <h1>Aqui entrará o formulário para criar uma senha</h1>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "Adicionar Senha"
    }
  }
}
</script>