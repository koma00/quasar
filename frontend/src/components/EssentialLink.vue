<template>
  <q-separator
    v-if="title === 'separator'"
    spaced>
  </q-separator>
  <q-item
    clickable
    @click="destroyLogin()"
    v-else-if="title === 'Exit'"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item
    clickable
    @click="$router.replace(link)"
    v-else
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import store from '../store'

export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    destroyLogin () {
      store().commit('login/destroyLogin')
      this.$router.go('/login')
    }
  }
}
</script>
