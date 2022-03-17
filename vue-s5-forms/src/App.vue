<template>
  <div class="succ-section succ-container">
    <div class="succ-card">
      <SignupForm />
    </div>
  </div>
</template>

<script>
import SignupForm from './components/SignupForm.vue'

export default {
  name: 'App',
  components: {
    SignupForm
  }
}
</script>

<style>
  @import url("../../assets/styles/css/index.css");
</style>
