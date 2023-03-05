<template>
  <div class="text-center wrapper mt-0 mt-sm-5">
    <img style="width: 256px" src="@/assets/logo.svg" />
    <h1>Caldera</h1>
    <h3 class="text-warning">Idle RPG</h3>
    <p class="fs-5 d-none">v1.0</p>
    <div class="buttons-wrapper mt-5">
      <button
        class="btn btn-primary fw-bold w-100 mb-3"
        @click="continueWithEmail()"
      >
        <i class="bi bi-envelope me-2"></i> Continue with Email
      </button>
      <button class="btn btn-secondary fw-bold w-100 mb-3" @click="anonlogin()">
        Continue as Guest
      </button>
      <p>
        By clicking Continue with Email, or Continue as Guest, you agree to to
        the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthWelcome",
  methods: {
    ...mapActions({ anonlogin: "authModule/anonlogin" }),
    continueWithEmail() {
      this.$emit("setMethod", "email");
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 80px;
  width: 400px;
}
</style>
