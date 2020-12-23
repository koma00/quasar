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
      if (this.login === 'admin' && this.password === 'admin') {
        this.$store.commit('login/updateLogin', this.login)
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Authorized'
        })
        this.$router.go('/')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Login or password is incorrect'
        })
      }
    },

    onReset () {
      this.login = null
      this.password = null
    }
  }
}
</script>
