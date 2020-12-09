<template>
  <q-page padding>
    <div id="q-app">
      <div class="q-pa-md q-gutter-md text-primary">
        <q-list bordered class="rounded-borders">
          <q-item-label header>Messages</q-item-label>

          <q-item clickable v-ripple @click="$router.replace('chat/1')">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar1.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Miho Seko</q-item-label>
              <q-item-label caption lines="2">
                I'll be in your neighborhood doing errands this
                weekend. Do you want to grab brunch?
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              1 min ago
            </q-item-section>
          </q-item>

          <q-separator inset="item"></q-separator>

          <q-item clickable v-ripple @click="$router.replace('chat/1')" class="bg-blue-1">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1"><span class="text-weight-bold">Mary Ride</span></q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">Can we schedule a call for tomorrow?</span>
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <span class="text-weight-bold">5 min ago</span>
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
              <q-item-label caption lines="2">
                I'll be in your neighborhood doing errands this
                weekend. Do you want to grab brunch?
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              1 hour ago
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
              <q-item-label caption lines="2">
                Can we schedule a call for tomorrow?
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              1 day ago
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageMessage'
}
</script>
