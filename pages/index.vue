<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            components/ui/OneClickButton.vue
          </v-card-title>
          <v-card-text>
            <p>
              Simple v-btn wrapper. Its state changes into disabled after click
              OneClickButton until async callback function finished.
            </p>
            <one-click-button
              color="error"
              :click-callback="oneClickButtonCallback"
            >
              disable 3 seconds (as minimum) after click it
            </one-click-button>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            components/ui/EventMessageBoard.vue
          </v-card-title>
          <v-card-text>
            <p>
              Message Box(es) hide itself automatically after several seconds.
              For example, to show error message(s) is good usage.
            </p>
            <v-btn color="info" @click="clickEventMessageBoard">
              Add new message
            </v-btn>
            <event-message-board
              ref="eventMessageBoardExample"
              color="error"
              :timeout="2000"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-btn
          block
          outlined
          href="https://github.com/t-kigi/my-vuetify-components"
          >View Source Code (GitHub)</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import OneClickButton from '~/components/ui/OneClickButton';
import EventMessageBoard from '~/components/ui/EventMessageBoard';

export default {
  components: {
    OneClickButton,
    EventMessageBoard,
  },
  data() {
    return {};
  },
  methods: {
    sleep(waitSec) {
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve();
        }, waitSec);
      });
    },
    async oneClickButtonCallback() {
      await this.sleep(3000);
    },
    clickEventMessageBoard() {
      this.$refs.eventMessageBoardExample.add(new Date());
    },
  },
};
</script>
