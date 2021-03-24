<template>
  <v-btn :color="color" :block="block" :disabled="disabled" @click="click">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    clickCallback: {
      type: Function,
      default: () => {},
    },
    color: {
      type: String,
      default: 'success',
    },
    block: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    async click() {
      this.disabled = true;
      try {
        await this.clickCallback();
      } catch (error) {
        console.log(error);
      }
      this.disabled = false;
    },
  },
};
</script>
