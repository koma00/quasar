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
                val => /^[a-zA-Z0-9._%+-]{1,64}$/.test(val) || 'Invalid login (only english letters and numbers)'
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
              val => val && val.length > 0|| 'Please type your password'
              ]"
          ></q-input>
          <q-input
              filled
              type="password"
              v-model="confirm_password"
              label="Confirm Password *"
              lazy-rules
              :rules="[
              val => val && val.length > 0|| 'Please type your password'
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
      if (this.password !== this.confirm_password) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Password not equvalent'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Registered'
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
