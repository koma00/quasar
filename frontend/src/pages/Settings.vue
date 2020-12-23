<template>
  <q-page>
    <div id="q-app">
      <div class="q-pa-md q-gutter-md text-primary">
        <q-list bordered class="rounded-borders">
          <q-item-label header>Settings</q-item-label>
          <q-item class="flex flex-center">
            <q-list>
              <q-item-label header>Change password</q-item-label>
              <q-form
                @submit="onSubmit"
                class="q-gutter-md"
              >
                <q-input
                  filled
                  type="password"
                  v-model="current_password"
                  label="Current password *"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Please type your password',
                    val => val && val.length >= 8 || 'The password must be at least 8 characters long'
                  ]"
                ></q-input>
                <q-input
                  filled
                  type="password"
                  v-model="new_password"
                  label="New password *"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Please type your password',
                    val => val && val.length >= 8 || 'The password must be at least 8 characters long',
                    val => val != current_password || 'Password must not be the same as current password'
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
                      val => val == new_password || 'Password not equvalent'
                    ]"
                ></q-input>
                <div class="flex flex-center" style="margin-bottom: 25px;">
                  <q-btn label="Change password" type="submit" color="primary"></q-btn>
                </div>
              </q-form>
            </q-list>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageSettings',

  data () {
    return {
      current_password: null,
      new_password: null,
      confirm_password: null
    }
  },

  methods: {
    onSubmit () {
      if (this.current_password === 'adminadmin') {
        if (this.current_password !== this.new_password && this.new_password === this.confirm_password) {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Password change!'
          })
        } else {
          this.$q.notify({
            type: 'negative',
            message: 'Password not equvalent'
          })
        }
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Invalid current password'
        })
      }
    }
  }
}
</script>
