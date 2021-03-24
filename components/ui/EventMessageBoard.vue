<template>
  <div v-if="messages">
    <transition v-for="info in messages" :key="info.key" name="fade">
      <v-alert :type="color" border="left" colored-border elevation="2">
        {{ info.message }}
      </v-alert>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'success',
    },
    timeout: {
      type: Number,
      required: false,
      default: 5000,
    },
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    add(message) {
      const label = Math.random().toString(36).substring(2);
      const ts = new Date().getTime();
      const info = { message, key: `${label}-${ts}` };
      this.$set(this, 'messages', [info].concat(this.messages));
      setTimeout(() => {
        const len = this.messages.length;
        if (len <= 0) return;
        this.$set(this, 'messages', this.messages.slice(0, len - 1));
      }, this.timeout);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
