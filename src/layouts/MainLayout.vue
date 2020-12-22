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
          v-if="$q.platform.is.mobile"
        />

        <q-btn
          flat
          dense
          round
          icon="groups"
          aria-label="Menu"
          @click="$router.replace('/')"
          v-if="$q.platform.is.desktop"
        />

        <q-toolbar-title>
          ВСЕТИ
        </q-toolbar-title>

        <q-btn stretch flat label="Help" @click="$router.replace('/help')"></q-btn>
        <q-separator dark vertical></q-separator>
        <q-btn stretch flat label="Exit" @click="destroyLogin()" v-if="checkAuthenticated()"></q-btn>
        <q-btn stretch flat label="Login" @click="$router.replace('/login')" v-if="!checkAuthenticated()"></q-btn>
        <q-separator dark vertical></q-separator>
        <q-btn stretch flat label="Register" @click="$router.replace('/register')" v-if="!checkAuthenticated()"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="$q.platform.is.mobile"
    >
      <q-list class="text-primary">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <div class="row" v-if="$q.platform.is.desktop" style="min-width: 950px">
      <q-page-container padding class="col">
        <div class="q-pa-md q-gutter-md" style="max-width: 250px; min-width: 200px">
          <q-list bordered padding class="rounded-borders text-primary">
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
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
import store from '../store'

var linksData = null
var isAuthenticated = false

if (!(store().getters['login/isLoggedIn'] === undefined)) {
  isAuthenticated = true
}

if (isAuthenticated) {
  linksData = [
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
      title: 'separator'
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
} else {
  linksData = [
    {
      title: 'Login',
      icon: 'person',
      link: '/login'
    },
    {
      title: 'Register',
      icon: 'people',
      link: '/register'
    },
    {
      title: 'separator'
    },
    {
      title: 'Help',
      icon: 'help',
      link: '/help'
    }
  ]
}

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    destroyLogin () {
      store().commit('login/destroyLogin')
      this.$router.go('/login')
    },
    checkAuthenticated () {
      return !isAuthenticated
    }
  }
}
</script>
