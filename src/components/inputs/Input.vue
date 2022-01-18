<template>
  <div class="form__item mb-4">
    <ValidationProvider
      :bail="bail"
      :name="$attrs.name"
      :rules="rules"
      :vid="vid"
      mode="lazy"
      v-slot="{ valid, errors }"
      :immediate="immediate"
    >
      <label class="block mb-1 text-gray-600 font-semibold" :for="name"
        ><span>{{ label }}</span></label
      >
      <div class="input-holder d-flex align-items-center">
        <input
          :class="[
            `border-0 bg-indigo-50
        transition
        h-12
        px-5
        pr-16
        rounded-sm
        focus:outline-none
        w-full
        text-black text-base`,
            { errors: errors[0] ? true : valid ? true : null },
          ]"
          v-model="innerValue"
          v-bind="$attrs"
          :type="type"
          :name="name"
          :id="name"
          :disabled="disabled"
          :placeholder="placeholder"
        />
      </div>

      <span
        class="text-red-500 text-xs"
        v-if="errors[0] ? true : valid ? true : null"
        >{{ errors[0] }}</span
      >
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
    bail: { type: Boolean, default: true },
    placeholder: String,
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: "text",
    },
    name: String,
    label: String,
    thickLabel: String,
    immediate: {
      type: Boolean,
      default: false,
    },
    right_icon: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style></style>
