<template>
  <div class="w-1/2 h-80 mx-auto rounded-lg shadow-2xl my-8 bg-gray-100">
    <div
      class="max-w-2xl h-80 flex flex-col items-center justify-center px-4"
    >
      <!-- Logo Image -->
      <!-- Header -->
      <h1 class="text-gray-900 font-black text-5xl uppercase text-center">
        New Post
      </h1>
      <h2 class="text-indigo-700 text-sm font-semibold italic">
       Say hi!
      </h2>

      <!-- Post title-->
      <div class=" w-full mt-6 flex rounded-md">
        <TextInput
          v-model="title"
          placeholder="Title"
          iconName="notation"
        />
      </div>

      <!-- Post message-->
      <div class=" w-full mt-6 flex rounded-md shadow-sm">
        <TextInput
          v-model="message"
          placeholder="Hello"
          iconName="document"
        />
      </div>

      <!-- Url Input -->
      <div class="w-full mt-6 flex rounded-md shadow-sm">
        <TextInput
          v-model="imageUrl"
          placeholder="www.gettyimages.com"
          iconName="image"
        />
        <LoadingButton
          :isLoading="loading"
          buttonText="Post"
          loadingText="Posting"
          iconName="circle-up"
          @clickEvent="savePost"
        />
      </div>

      <!-- Error Message -->
      <error-msg header="Error" :errMessage="errorMessage" />
    </div>

  </div>
</template>

<script>

import { ref, computed, defineComponent } from '@nuxtjs/composition-api'
import { useAuthStore } from "~/store/user"
import { useStore } from "~/store/store"
import LoadingButton from './LoadingButton'
import TextInput from './TextInput'
import ErrorMsg from "../Tools/ErrorMsg";
export default defineComponent({
  components: {
    LoadingButton,
    ErrorMsg,
    TextInput
  },
  setup () {
    const userStore = useAuthStore()
    const store = useStore()
    const loading = ref(false)
    const title = ref('')
    const message = ref('')
    const imageUrl = ref('')
    const errorMessage = ref('')
    const isUrlOk = computed(() => {
      var regex = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      )
      if (imageUrl.value.match(regex) === null) {
        errorMessage.value = 'URL is invalid.'
        return false
      }
      return true
    })

    const savePost = () => {
      loading.value = true
      // Save data on FB database
      console.log('Clicked to add new post: ', imageUrl.value);

      if(isUrlOk) {
        console.log('posts', {
          userId: userStore.user.uid,
          title: title.value,
          message: message.value,
          imageUrl: imageUrl.value,
          createdOn: new Date()
        })
        store.add('posts', {
          userId: userStore.user.uid,
          title: title.value,
          message: message.value,
          imageUrl: imageUrl.value,
          createdOn: new Date()
        }).then((res) => {
          if(res.length > 0) {
            store.list('posts', userStore.user.uid)
            title.value = ''
            message.value = ''
            imageUrl.value = ''
            loading.value = false
          } else {
            loading.value = false
          }
        }).catch((err) => {
          errorMessage = err.message
        })

      } else {
        alert('Not valid URL!')
      }
    }

    const isNullOrWhitespace = (str) => {
      return str === null || str.match(/^ *$/) !== null
    }
    return {
      title,
      loading,
      message,
      imageUrl,
      errorMessage,
      savePost,
      isNullOrWhitespace,
      isUrlOk
    }
  }
})
</script>
