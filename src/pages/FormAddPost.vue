<template>
  <div class="wrap">
    <form class="form-add-post" @submit.prevent="sendRequest" @keyup.enter="sendRequest">
      <input
        v-model.trim="title"
        class="form-title"
        type="text"
        aria-label="title"
        placeholder="Введите Title"
      />
      <textarea
        v-model.trim="body"
        class="form-body"
        cols="40"
        rows="3"
        placeholder="Введите Body"
      ></textarea>
      <button class="form-btn" type="submit">
      Отправить
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapActions(['sendPost']),
    async sendRequest () {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
      if (this.isValid) {
        this.sendPost(options)
        this.clearInputs()
      }
    },
    clearInputs () {
      this.title = ''
      this.body = ''
    }
  },
  computed: {
    isValid () {
      if (this.title !== '' && this.body !== '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .wrap{
    margin: 0 auto;
    max-width: 610px;
  }
  .form-add-post{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 610px;
    min-width: 300px;
    height: 250px;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    margin: 0 auto;
    padding-top: 20px;
  }
  .form-title,
  .form-body{
    width: inherit;
    background-color: rgba(167, 42, 226, .07);
    font-size: 20px;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 0 20px;
  }
  .form-title:focus,
  .form-body:focus{
    outline: none !important;
  }
  .form-body::-webkit-input-placeholder {
    color: #A72AE2;
  }
  .form-title::-webkit-input-placeholder{
    color: #A72AE2;
  }
  .form-title::-moz-placeholder{
    color: #A72AE2;
  }
  .form-body::-moz-placeholder{
    color: #A72AE2;
  }
  .form-btn{
    width: 100%;
    height: 60px;
    font-size: 20px;
    border-radius: 0 0 20px 20px;
    border: none;
    color: #fff;
    background-color: rgba(166, 0, 244, 0.8);
    transition: all .3s ease;
  }
  .form-btn:active{
    background-color: rgba(166, 0, 244, 0.4);
    transition: all .1s ease;
  }
</style>
