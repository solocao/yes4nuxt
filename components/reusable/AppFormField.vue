<template>
  <div class="mb-3">
    <label class="form-text" :for="name">{{label}}</label>
    <Field
      :name="name"
      :label="label"
      :modelValue="modelValue"
      @input="$emit('modelUpdate', $event)"
      :id="name"
      class="form-control"
      v-bind="$attrs"
    />
    <ErrorMessage :name="name" class="text-danger" />
  </div>
</template>
<script>
import { ErrorMessage, Field } from 'vee-validate';
export default defineComponent({
  components: { Field, ErrorMessage },
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  }
})
</script>