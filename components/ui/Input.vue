<script setup>
defineProps({
    modelValue: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <input
        class="border"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
    />
</template>