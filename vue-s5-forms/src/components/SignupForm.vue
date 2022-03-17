<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="succ-error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" required v-model="tempSkill" @keyup="addSkill">

    <div v-for="skill in skills" :key="skill" class="succ-pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept terms and conditions</label>
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: '',
        terms: false,
        tempSkill: '',
        skills: [],
        passwordError: ''
      }
    },
    methods: {
      addSkill(e) {
        if (e.key === ',' && this.tempSkill) {
          if (!this.skills.includes(this.tempSkill)) {
            this.skills.push(this.tempSkill)
          }
          this.tempSkill = ''
        }
      },
      handleSubmit() {
        // validate password
        this.passwordError = this.password.length > 5 ? '' : "Password must be at least 6 chars long"
        if (!this.passwordError) {
          console.log('form submitted successfully!')
        }
      },
      deleteSkill(skill) {
        const index = this.skills.indexOf(skill)
        this.skills.splice(index, 1)
      }
    }
  }
</script>