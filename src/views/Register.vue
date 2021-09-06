<template>
  <form @submit.prevent="submit" ref="form">
    <label>Email</label>
    <input type="email" v-model="email" required />
    <div
      class="error"
      v-show="errors"
      v-for="error in errors"
      :key="error.message"
    >
      {{ error.field === "email" ? error.message : "" }}
    </div>
    <label>Password</label>
    <input type="password" v-model="password" required />
    <div
      class="error"
      v-show="errors"
      v-for="error in errors"
      :key="error.message"
    >
      {{ error.field === "password" ? error.message : "" }}
    </div>

    <label>Role</label>
    <select v-model="role">
      <option value=""></option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keydown.enter.prevent="addSkill" />
    <div class="skills">
      <span
        v-for="skill in skills"
        :key="skill.id"
        class="pill"
        @click="deleteSkill(skill)"
      >
        {{ skill.skill }}
      </span>
    </div>

    <div class="names">
      <div>
        <input type="checkbox" value="Jack" v-model="names" />
        <label>Jack</label>
      </div>
      <div>
        <input type="checkbox" value="Jill" v-model="names" />
        <label>Jill</label>
      </div>
      <div>
        <input type="checkbox" value="Jon" v-model="names" />
        <label>Jon</label>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>ACCEPT TERMS AND CONDITIONS</label>
    </div>

    <input class="submit-btn" type="submit" value="Create An Account" />
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      errors: [],
    };
  },
  methods: {
    addSkill() {
      if (this.tempSkill && !this.skills.includes(this.tempSkill)) {
        this.skills = [
          ...this.skills,
          {
            id: Math.floor(Math.random() * 100000),
            skill: this.tempSkill,
          },
        ];
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      if (confirm(`Are you sure you want to delete ${skill.skill}?`)) {
        this.skills = this.skills.filter((item) => item !== skill);
      }
    },
    submit() {
      let { valid, errors } = this.validator(this.email, this.password);
      if (!valid) {
        this.errors = errors;
      } else {
        this.$refs.form.reset();
        this.names = [];
        this.skills = [];
        this.errors = [];
        this.role = "";
        this.email = "";
        this.password = "";
        // submit to backend api
      }
    },
    validator(email, password) {
      let errors = [];

      if (email.length < 10) {
        errors = [
          ...errors,
          {
            field: "email",
            message: "Must be a valid email address",
          },
        ];
      }

      if (password.length <= 2) {
        errors = [
          ...errors,
          {
            field: "password",
            message: "Password must have greater than two characters",
          },
        ];
      }

      return {
        errors,
        valid: Object.keys(errors).length < 1,
      };
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #333;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
select {
  display: block;
  width: 100%;
  color: #555;
  outline: none;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 10px 6px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.names {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  padding: 10px 0;
}
.skills {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
  width: 100%;
  height: fit-content;
}
.pill {
  line-height: 20px;
  padding: 7px 10px;
  border-radius: 15px;
  background: steelblue;
  color: #fff;
  cursor: pointer;
}
.submit-btn {
  background: steelblue;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
}
.error {
  font-size: 0.75rem;
  color: #ff0000;
  text-align: left;
  padding: 3px 0;
}
</style>
