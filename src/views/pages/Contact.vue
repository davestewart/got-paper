<template>
  <div class="page page__contact">
    <h1>Contact</h1>

    <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
      <form name="contact"
            method="post"
            data-netlify="true"
            data-x-netlify-recaptcha="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit(submit)">
        <!-- name -->
        <input type="hidden" name="form-name" value="contact"/>

        <!-- alert -->
        <div class="form-group row mb-0">
          <div class="offset-md-3 col-md-9 mb-0">
            <div v-if="result.message" class="alert alert-dismissible fade show" role="alert" :class="`alert-${result.state}`">
              {{ result.message }}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="() => showResult()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>

        <!-- name input-->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="name">Name</label>
          <div class="col-md-9">
            <ValidationProvider :rules="rules.name" v-slot="v">
              <input id="name" v-model="form.name" name="name" type="text" placeholder="Your name" class="form-control">
              <small class="form-text text-danger ml-2">{{ v.errors[0] }}</small>
            </ValidationProvider>
          </div>
        </div>

        <!-- email input-->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="email">E-mail</label>
          <div class="col-md-9">
            <ValidationProvider :rules="rules.email" v-slot="v">
              <input id="email" v-model="form.email" name="email" type="text" placeholder="Your email" class="form-control">
              <small class="form-text text-danger ml-2">{{ v.errors[0] }}</small>
            </ValidationProvider>
          </div>
        </div>

        <!-- message body -->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="message">Message</label>
          <div class="col-md-9">
            <ValidationProvider :rules="rules.message" v-slot="v">
              <textarea class="form-control" id="message" v-model="form.message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              <small class="form-text text-danger ml-2">{{ v.errors[0] }}</small>
            </ValidationProvider>
          </div>
        </div>

        <!-- form actions -->
        <div class="form-group row">
          <div class="offset-md-3 col-9">
            <button type="submit" class="btn btn-primary" :disabled="invalid">Submit</button>
            <button class="btn ml-2" @click.prevent="reset">Reset</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'

function reset () {
  return {
    name: '',
    email: '',
    message: '',
  }
}

function encode (data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const rules = {
  name: 'required|min:2',
  email: 'required|email',
  message: 'required|min:10',
}

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data () {
    return {
      rules,
      form: reset(),
      result: {
        message: '',
        state: '',
      },
    }
  },

  methods: {
    submit () {
      const config = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      const payload = {
        'form-name': 'contact',
        ...this.form,
      }
      return axios
        .post('/', encode(payload), config)
        .then(() => {
          this.showResult('Thanks! We received your message', 'success')
          this.reset()
        })
        .catch(() => {
          this.showResult('Oh poo. Your message was not sent', 'danger')
        })
    },

    reset () {
      this.form = reset()
      this.$refs.observer.reset()
    },

    showResult (message = '', state = '') {
      this.result.message = message
      this.result.state = state
    },
  },
}
</script>
