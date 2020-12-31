<template>
  <q-page class="flex flex-center">
    <div id="q-app" class="flex flex-center">
      <div class="q-pa-md" style="max-width: 410px; min-width: 410px">
        <q-card flat bordered style="padding: 10px">
          <q-card-section>
            <div class="text-h6 flex flex-center" style="color: var(--q-color-primary) !important">
              Login form
            </div>
          </q-card-section>
          <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
          >
          <q-input
              filled
              v-model="login"
              label="Your login *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
          ></q-input>

          <q-input
              filled
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || 'Please type your password'
              ]"
          ></q-input>

          <div class="flex flex-center">
              <q-btn label="Login" type="submit" color="primary"></q-btn>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
          </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageLogin',

  data () {
    return {
      login: null,
      password: null
    }
  },

  methods: {
    onSubmit () {
      const playload = {
        username: this.login,
        password: this.password
      }

      axios.post(this.$store.getters['login/getEndPoints'].loginJWT, playload)
        .then((response) => {
          const data = response.data
          this.$store.commit('login/updateLogin', data.username)
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Authorized'
          })
          this.$router.go('/')
        })
        .catch((error) => {
          for (var err in error.response.data) {
            var message = error.response.data[err].toString()
            const messageCapitalized = message.charAt(0).toUpperCase() + message.slice(1)
            this.$q.notify({
              type: 'negative',
              message: messageCapitalized
            })
          }
        })
    },

    onReset () {
      this.login = null
      this.password = null
    }
  }
}
</script>
