<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ВСЕТИ
        </q-toolbar-title>

        <q-btn stretch flat label="Help"></q-btn>
        <q-separator dark vertical></q-separator>
        <q-btn stretch flat label="Exit"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="$q.platform.is.mobile"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <div class="row" v-if="$q.platform.is.desktop">
      <q-page-container padding class="col">
        <div class="q-pa-md q-gutter-md" style="max-width: 250px; min-width: 200px">
          <q-list bordered padding class="rounded-borders text-primary">
            <q-item
              clickable
              v-ripple
              :active="link === 'inbox'"
              @click="link = 'inbox'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="inbox"></q-icon>
              </q-item-section>

              <q-item-section>Inbox</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'outbox'"
              @click="link = 'outbox'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="send"></q-icon>
              </q-item-section>

              <q-item-section>Outbox</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'trash'"
              @click="link = 'trash'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="delete"></q-icon>
              </q-item-section>

              <q-item-section>Trash</q-item-section>
            </q-item>

            <q-separator spaced></q-separator>

            <q-item
              clickable
              v-ripple
              :active="link === 'settings'"
              @click="link = 'settings'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="settings"></q-icon>
              </q-item-section>

              <q-item-section>Settings</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'help'"
              @click="link = 'help'"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="help"></q-icon>
              </q-item-section>

              <q-item-section>Help</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page-container>

      <q-page-container class="col-10">
        <router-view />
      </q-page-container>
    </div>

    <q-page-container v-if="$q.platform.is.mobile">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'My page',
    icon: 'person',
    link: '/'
  },
  {
    title: 'Friends',
    icon: 'people',
    link: '/friends'
  },
  {
    title: 'Messages',
    icon: 'chat',
    link: '/message'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  {
    title: 'Exit',
    icon: 'exit_to_app',
    link: '/exit'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
