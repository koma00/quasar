<template>
  <q-page>
    <div id="q-app">
      <div class="q-pa-md q-gutter-md text-primary">
        <q-list bordered class="rounded-borders">
          <q-item>
            <q-item-section>
              <q-item-label header>Miho Seko</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label header>
                Online
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Sex: male</q-item-label>
              <q-item-label lines="1">City: Dnipro</q-item-label>
              <q-item-label lines="1">Birthday: 8 april</q-item-label>
              <q-item-label lines="1">Marital status: married</q-item-label>
            </q-item-section>

            <q-item-section side v-if="$q.platform.is.desktop">
              <q-btn
                color="primary"
                label="Send message"
                @click="$router.replace('/chat/1')">
              </q-btn>
              <q-btn
                color="primary"
                label="Add frinds"
                @click="alert = true"
                style="width: 100%">
              </q-btn>
            </q-item-section>
            <q-item-section side v-if="$q.platform.is.mobile">
              <q-btn
                size="10px"
                color="primary"
                label="Send message">
              </q-btn>
              <q-btn
                size="10px"
                color="primary"
                label="Add frinds"
                 @click="alert = true"
                style="width: 100%">
              </q-btn>
            </q-item-section>

            <q-dialog v-model="alert">
              <q-card>
                <q-card-section>
                  Request on add to friends sent.
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-item>

          <q-separator></q-separator>

          <q-item>
            <q-item-section>
              <q-item-label header>Friends</q-item-label>
            </q-item-section>
            <q-item-section clickable side>
              <q-item-label header @click="$router.replace('/friends')">
                All
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section clickable v-ripple @click="$router.replace('/profile/1')">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-item>
            <q-item-section>
              <q-item-label header>Friends online</q-item-label>
            </q-item-section>
            <q-item-section clickable side>
              <q-item-label header @click="$router.replace('/friends')">
                All
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section clickable v-ripple @click="$router.replace('/profile/1')">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section><q-item-section>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
              <q-item-label lines="1">Mary Ride</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-item>
            <q-item-section>
              <q-item-label header>Wall</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hello friend!</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hello friend!</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hello friend!</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hello friend! Have are you?</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProfile',
  data () {
    return {
      alert: false
    }
  }
}
</script>
