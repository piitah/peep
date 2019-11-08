<template>
  <div class="login">
    <div class="login-secondary">
      &nbsp;
      <div class="d-flex justify-content-center align-items-center h-100">
        <form class="login-container" @submit.prevent="onSubmitHandler">
          <div class="w-100">
            <div class="login-header-primary">
              <h3>Sign Up</h3>
            </div>
            <div class="login-header-primary mb-3">Sign in to your account</div>
            <div class="login-header-primary error">{{msg}}</div>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="user.firstname"
              placeholder="firstname"
              name="first name"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.firstname.$error }"
            />
            <div v-if="submitted && $v.user.firstname.$error" class="invalid-feedback">
              <span v-if="!$v.user.firstname.required">first name is required</span>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="lastname"
              v-model="user.lastname"
              name="last name"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.lastname.$error }"
            />
            <div v-if="submitted && $v.user.lastname.$error" class="invalid-feedback">
              <span v-if="!$v.user.lastname.required">last name is required</span>
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email"
              v-model="user.email"
              id="email"
              name="email"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.email.$error }"
            />
            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-if="!$v.user.email.email">Email is invalid</span>
            </div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="password"
              v-model="user.password"
              id="password"
              name="password"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.password.$error }"
            />
            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
              <span v-if="!$v.user.password.required">Password is required</span>
              <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
            </div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="confirmPassword"
              v-model="user.confirmPassword"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
            />
            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
              <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
              <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-color w-100" :disabled="disabled">
              <span v-if="loading">
                <div class="m-loader"></div>
              </span>
              <span v-else>{{submitText}}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { mapAction, mapState } from "vuex";
import * as types from "../Store/modules/types";

export default {
  name: "login",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      status: "",
      submitted: false,
      submitText: "sign up"
    };
  },
  validations: {
    user: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  computed: {
    ...mapState("userModule", ["msg", "disabled", "loading"])
  },
  mounted() {
    this.$store.commit(`userModule/${types.CANCEL_ALL_MESSAGES}`);
  },
  methods: {
    onSubmitHandler: async function() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        this.$store.commit(`userModule/${types.SET_LOADING}`);
        let instance = this;
        setTimeout(() => {
          instance.$store.dispatch(`userModule/${types.USER_SIGNUP}`, {
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email,
            password: this.user.password
          });
        }, 2000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  background-image: linear-gradient(
      to right bottom,
      rgba(86, 178, 235, 0.32),
      rgba(39, 83, 110, 0.177)
    ),
    url("../assets/img/abstract-1278017_1920.jpg");
  background-position: top;
  background-size: cover;
  width: 100%;
  min-height: 94vh;
}
.error {
  color: red;
}
.login-header {
  display: block !important;
  margin: auto;
  font-size: 1.6em;
}
.login-header-primary {
  font-size: 14px;
  text-align: center;
  margin: auto;
}
.login-container {
  margin: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 85%;
  text-align: start !important;
  padding: 1.4rem;
}
.login-secondary {
  height: 87vh;
}
.btn-color {
  background-color: rgb(51, 111, 148);
  color: #fff;
}
.btn-color:hover {
  color: #fff;
}

span {
  text-align: center;
}

.m-loader {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  margin: auto;
  width: 1.4em;
  height: 1.4em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (min-width: 600px) {
  .login-container {
    width: 25%;
  }
}
</style>