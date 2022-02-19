<template>
  <div>
    <p>Current language: {{$i18n.locale }}</p>
    <b-button
      variant="outline-primary"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="$i18n.setLocale(locale.code)">{{ locale.name }}
    </b-button>

    <b-container class="mt-4">
      <loader :isLoading="isActive"/>

      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.prevent="login">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <b-form-input
              v-model="form.email"
              :placeholder="$t('email')"
            >
            </b-form-input>
            <span class="is-invalid">{{ errors[0] }}</span>
          </ValidationProvider>


          <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
            <b-form-input
              label="Password"
              v-model="form.password"
              type="password"
              :placeholder="$t('password')"
            >
            </b-form-input>
            <span class="is-invalid">{{ errors[0] }}</span>
          </ValidationProvider>
          <b-button type="submit" :disabled="invalid" variant="primary">Submit</b-button>
        </b-form>
      </ValidationObserver>

    </b-container>
  </div>
</template>


<script>
import { ref, reactive, defineComponent, computed, useContext, useRouter } from "@nuxtjs/composition-api";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { useAuthStore } from "~/store/user";
import ErrorMsg from "../Tools/ErrorMsg.vue";
import Loader from "../Tools/Loader.vue";
import ResetForm from "./ResetForm.vue";

export default defineComponent({
  components: { ErrorMsg, Loader, ResetForm,  ValidationProvider, ValidationObserver },
  setup() {
    const isActive = ref(false)

    const loginView = ref(false)

    const { app } = useContext();
    const store = useAuthStore();

    const { logInUser } = store;

    const router = useRouter();

    const form = reactive({
      email: "",
      password: ""
    });

    const availableLocales = computed(() => {
      return app.i18n.locales.filter(i => i.code !== app.i18n.locale)
    });

    const login = async () => {
      isActive.value = true
      await logInUser(form.email, form.password)
      router.push('/')
      isActive.value = false
    }

    const toggleLoginView = () => {
      loginView.value = !loginView.value;
      store.error = ''
      console.log('Value: ', loginView.value);
    };


    return {
      loginView,
      toggleLoginView,
      form,
      login,
      store,
      isActive,
      availableLocales
    }
  }
})

</script>

<style scoped>
  .is-invalid {
    color: red;
  }
</style>
