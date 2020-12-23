<template>
  <q-page class="flex flex-center">
    <div class="text-blue text-center q-pa-md">
      <div>
        <div style="font-size: 20vh">
          404
        </div>

        <div class="text-h3" style="opacity:.4">
          Sorry. Page not found...
        </div>

        <q-btn
          class="q-mt-xl"
          color="blue"
          text-color="white"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageError404'
}
</script>
