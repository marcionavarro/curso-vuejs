<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-col
        xs="12"
        sm="10"
        md="8"
        lg="6"
        xl="4"
      >
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>
              {{ texts.toolbar }}
            </v-toolbar-title>
            <v-spacer />
            <v-progress-circular
              v-show="isLoading"
              indeterminate
            />
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-if="!isLogin"
                prepend-icon="person"
                name="name"
                label="Nome"
                type="text"
                :error-messages="nameErrors"
                :success="!$v.user.name.$invalid"
                v-model.trim="$v.user.name.$model"
              />
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                :error-messages="emailErrors"
                :success="!$v.user.email.$invalid"
                v-model.trim="$v.user.email.$model"
              />
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Senha"
                type="password"
                :error-messages="passwordErrors"
                :success="!$v.user.password.$invalid"
                v-model.trim="$v.user.password.$model"
              />
            </v-form>
            <v-btn
              block
              depressed
              color="secondary"
              @click="isLogin = !isLogin"
            >
              {{ texts.button }}
            </v-btn>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              :disabled="$v.$invalid"
              color="primary"
              large
              @click="submit"
            >
              {{ texts.toolbar }}
            </v-btn>
          </v-card-actions>

          <v-snackbar
            v-model="showSnackbar"
            top
          >
            {{ error }}
            <v-btn
              color="pink"
              text
              icon
              @click="showSnackbar = false"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import AuthService from './../services/auth-service'
import { formatError } from '@/utils'

export default {
  name: 'Login',
  data: () => ({
    error: undefined,
    isLogin: true,
    isLoading: false,
    showSnackbar: false,
    user: {
      name: '',
      email: '',
      password: ''
    }
  }),
  validations () {
    const validations = {
      user: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    }

    if (this.isLogin) { return validations }

    return {
      user: {
        ...validations.user,
        name: {
          required,
          minLength: minLength(3)
        }
      }
    }
  },
  computed: {
    texts () {
      return this.isLogin
        ? { toolbar: 'Entrar', button: 'Criar conta' }
        : { toolbar: 'Criar conta', button: 'Já tenho uma conta' }
    },
    nameErrors () {
      const errors = []
      const name = this.$v.user.name
      if (!name.$dirty) { return errors }
      !name.required && errors.push('Nome é obrigatório!')
      !name.minLength && errors.push(`O Nome deve ter no minímo ${name.$params.minLength.min} caracteres!`)
      return errors
    },
    emailErrors () {
      const errors = []
      const email = this.$v.user.email
      if (!email.$dirty) { return errors }
      !email.required && errors.push('Email é obrigatório!')
      !email.email && errors.push('Insira um e-mail válido!')
      return errors
    },
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) { return errors }
      !password.required && errors.push('Senha é obrigatório!')
      !password.minLength && errors.push(`A senha deve ter no minímo ${password.$params.minLength.min} caracteres!`)
      return errors
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      try {
        // await new Promise(resolve => setTimeout(resolve, 3000))
        this.isLogin
          ? await AuthService.login(this.user)
          : await AuthService.signup(this.user)
        this.$router.push(this.$route.query.redirect || '/dashboard')
      } catch (error) {
        console.log(error)
        this.error = formatError(error.message)
        this.showSnackbar = true
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
