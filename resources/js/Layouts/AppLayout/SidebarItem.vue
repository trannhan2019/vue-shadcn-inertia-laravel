<script setup>
import { Link } from "@inertiajs/vue3";
import { h } from "vue";

defineProps(["href", "url", "icon"]);
// const Icon = h(icon, { class: "h-4 w-4" });
</script>
<template>
    <Link
        :href="href"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        :class="{
            'bg-muted text-primary': `${url}` === '/dashboard',
        }"
    >
    <component :is="icon"></component>
        Dashboard
    </Link>
</template>
