<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";

const sidebarOpened = ref(true);
function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value;
}

function updateSidebarState() {
    sidebarOpened.value = window.outerWidth > 768;
}

onMounted(() => {
    updateSidebarState();
    window.addEventListener("resize", updateSidebarState);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateSidebarState);
});
</script>

<template>
    <div class="min-h-screen w-full flex">
        <Sidebar :sidebarOpened="sidebarOpened" />

        <div class="flex flex-col flex-1">
            <Navbar @toggleSidebar="toggleSidebar" />
            <slot />
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div class="flex items-center">
                    <h1 class="text-lg font-semibold md:text-2xl">Inventory</h1>
                </div>
                <div
                    class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                >
                    <div class="flex flex-col items-center gap-1 text-center">
                        <h3 class="text-2xl font-bold tracking-tight">
                            You have no products
                        </h3>
                        <p class="text-sm text-muted-foreground">
                            You can start selling as soon as you add a product.
                        </p>
                        <Button class="mt-4"> Add Product </Button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
