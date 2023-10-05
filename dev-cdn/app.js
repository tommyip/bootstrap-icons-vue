const app = Vue.createApp({
  template: `
  <h2>Install icons globally using plugin from CDN</h2>
  <div class="icons-grid">
    <BIconBookmarkCheck />
    <BIconChatDotsFill />
    <b-icon-circle-half />
  </div>
  `,
  data() {
    return {
      msg: "Bootstrap Icons Vue",
    };
  },
});

app.use(BootstrapIconsVue);

app.mount("#app");
