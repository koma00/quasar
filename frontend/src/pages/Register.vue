<template>
  <q-page class="flex flex-center">
    <div id="q-app" class="flex flex-center">
      <div class="q-pa-md" style="max-width: 410px; min-width: 410px">
        <q-card flat bordered style="padding: 10px">
          <q-card-section>
            <div class="text-h6 flex flex-center" style="color: var(--q-color-primary) !important">
              Register
            </div>
            <div class="flex flex-center">
              Create your account.
            </div>
          </q-card-section>
          <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
          >
          <div class="row items-start">
            <q-input
                filled
                v-model="first_name"
                label="First name *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your first name']"
                style="width: 48%"
            ></q-input>
            <q-input
                filled
                v-model="last_name"
                label="Last name *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your last name']"
                style="width: 48%; margin-left: 4%"
            ></q-input>
          </div>
          <q-input
              filled
              v-model="login"
              label="Your login *"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Please type your login',
                val => /^[a-zA-Z0-9]{1,64}$/.test(val) || 'Invalid login (only english letters and numbers)',
                val => check_login(val) || 'Login zanyt'
              ]"
          ></q-input>
          <q-input
              filled
              v-model="email"
              label="Email *"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Please type something',
                val => /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(val) || 'Invalid email'
              ]"
          ></q-input>
          <q-input
              filled
              type="password"
              v-model="password"
              label="Password *"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Please type your password',
                val => val && val.length >= 8 || 'The password must be at least 8 characters long',
                val => val != login || 'Password must not be the same as login'
              ]"
          ></q-input>
          <q-input
              filled
              type="password"
              v-model="confirm_password"
              label="Confirm Password *"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Please type your password',
                val => val == password || 'Password not equvalent'
              ]"
          ></q-input>
          <div class="flex flex-center">
              <q-btn label="Register" type="submit" color="primary"></q-btn>
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
  name: 'PageRegister',

  data () {
    return {
      first_name: null,
      last_name: null,
      login: null,
      email: null,
      password: null,
      confirm_password: null
    }
  },

  methods: {
    onSubmit () {
      const playload = {
        username: this.login,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password
      }

      axios.post(this.$store.getters['login/getEndPoints'].createJWT, playload)
        .then((response) => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Registered'
          })
          this.$router.replace('/login')
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
    },

    check_login (val) {
      if (val.toLowerCase().includes('admin')) {
        return false
      }
      return true
    }
  }
}
</script>
