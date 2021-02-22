<template>
  <Page>
    <StackLayout>
      <Button text="button1"></Button>
      <Button text="button2" @tap="onTapButton()"></Button>
      <Button text="button3"></Button>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  },
  methods: {
    onTapButton: function() {
      confirm({
        title: "the title",
        message: "the message",
        okButtonText: "It is ok",
        cancelButtonText: "No not ok"
      }).then(result => {
        console.log("result", result);
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
