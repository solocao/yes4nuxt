import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputText';
import Dropdown from 'primevue/dropdown';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Button', Button);
    //other components that you need
});