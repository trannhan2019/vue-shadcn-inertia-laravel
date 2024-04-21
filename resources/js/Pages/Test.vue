<script>
export default {
    layout: AppLayout,
};
</script>

<script setup>
import AppLayout from "@/Layouts/AppLayout/AppLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";

defineProps(["roles", "test"]);
</script>

<template>
    <Head title="Test" />
    <p>{{ test }}</p>
    <p>auth voi $page: {{ $page.props.auth.user.name }}</p>
    <p>auth voi usePage: {{ usePage().props.auth.user.name }}</p>
    <p v-for="role in roles" :id="role.id">{{ role.name }}</p>
</template>
