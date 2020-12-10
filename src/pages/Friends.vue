<template>
  <q-page padding>
    <div id="q-app">
      <div class="q-pa-md q-gutter-md text-primary">
        <q-list bordered class="rounded-borders">
          <q-item-label header>Friends</q-item-label>

          <q-item clickable v-ripple @click="$router.replace('profile/1')">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Miho Seko</q-item-label>
              <q-item-label caption lines="1">
                Online
              </q-item-label>
            </q-item-section>

            <q-item-section side @click="$router.replace('chat/1')">
              <q-btn
                color="primary"
                label="Send message"
                v-if="$q.platform.is.desktop">
              </q-btn>
              <q-btn
                size="10px"
                color="primary"
                label="Send message"
                v-if="$q.platform.is.mobile">
              </q-btn>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item clickable v-ripple @click="$router.replace('chat/1')">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Mary Ride</q-item-label>
              <q-item-label caption lines="1">
                Online
              </q-item-label>
            </q-item-section>

            <q-item-section side @click="$router.replace('chat/1')">
              <q-btn
                color="primary"
                label="Send message"
                v-if="$q.platform.is.desktop">
              </q-btn>
              <q-btn
                size="10px"
                color="primary"
                label="Send message"
                v-if="$q.platform.is.mobile">
              </q-btn>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item clickable v-ripple @click="$router.replace('chat/1')">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Vika Moll</q-item-label>
              <q-item-label caption lines="1">
                Online
              </q-item-label>
            </q-item-section>

            <q-item-section side @click="$router.replace('chat/1')">
              <q-btn
                color="primary"
                label="Send message"
                v-if="$q.platform.is.desktop">
              </q-btn>
              <q-btn
                size="10px"
                color="primary"
                label="Send message"
                v-if="$q.platform.is.mobile">
              </q-btn>
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item clickable v-ripple @click="$router.replace('chat/1')">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar4.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Anton Klai</q-item-label>
              <q-item-label caption lines="1">
                Online
              </q-item-label>
            </q-item-section>

            <q-item-section side @click="$router.replace('chat/1')">
              <q-btn
                color="primary"
                label="Send message"
                v-if="$q.platform.is.desktop">
              </q-btn>
              <q-btn
                size="10px"
                color="primary"
                label="Send message"
                v-if="$q.platform.is.mobile">
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFriends'
}
</script>
