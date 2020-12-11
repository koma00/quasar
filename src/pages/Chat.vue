<template>
  <q-page>
    <div id="q-app">
      <div class="q-pa-md row justify-center">
        <q-list bordered class="rounded-borders" style="width: 100%; padding: 30px; padding-top: 0px">
        <div style="width: 100%">
          <q-item clickable v-ripple @click="$router.replace('/message')">
            <q-item-section
              avatar
            >
              <q-icon name="undo" />
            </q-item-section>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1"><span class="text-weight-bold">Mary Ride</span></q-item-label>
            </q-item-section>
          </q-item>

          <q-chat-message
            name="me"
            stamp="7 minutes ago"
            :text="['Have you seen Quasar?']"
            sent
            text-color="white"
            bg-color="primary"
          >
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--sent"
                src="https://cdn.quasar.dev/img/avatar4.jpg"
                @click="$router.replace('/')"
              >
            </template>
          </q-chat-message>

          <q-chat-message
            name="Mary"
            stamp="7 minutes ago"
            :text="['Hey there!', 'Can we schedule a call for tomorrow?']"
            bg-color="amber"
          >
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="https://cdn.quasar.dev/img/avatar2.jpg"
              >
            </template>

            <!-- <q-spinner-dots size="2rem"></q-spinner-dots> -->
          </q-chat-message>

          <div style="margin-top: 30px">
            <q-input
              v-model="text"
              filled
              autogrow
            ><q-btn color="primary" label="Send" style="margin-right: 0px"></q-btn></q-input>
          </div>
        </div>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageChat'
}
</script>
