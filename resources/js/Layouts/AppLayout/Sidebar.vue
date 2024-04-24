<script setup>
import {h} from "vue";
import {
    Bell,
    Home,
    LineChart,
    Package,
    Package2,
    ShoppingCart,
    Users,
} from "lucide-vue-next";
import { usePermission } from "@/Composables/permission";
import SidebarItem from "./SidebarItem.vue";

defineProps({
    sidebarOpened: Boolean,
});

const { hasPermission } = usePermission();
// console.log(route("dashboard"));
</script>

<template>
    <div
        class="border-r bg-muted/40 min-w-[260px] w-[260px] transition-all"
        :class="{ '-ml-[260px]': !sidebarOpened }"
    >
        <div class="flex h-full max-h-screen flex-col gap-2">
            <div
                class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6"
            >
                <a href="/" class="flex items-center gap-2 font-semibold">
                    <Package2 class="h-6 w-6" />
                    <span class="">Acme Inc</span>
                </a>
                <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                    <Bell class="h-4 w-4" />
                    <span class="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div class="flex-1">
                <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Link
                        href="/"
                        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        :class="{
                            'bg-muted text-primary': $page.url === '/dashboard',
                        }"
                    >
                        <Home class="h-4 w-4" />
                        Dashboard
                    </Link>
                    <SidebarItem href="/" url="/dashboard" :icon="h(Home, { class: 'h-4 w-4' })" />
                    <Link v-if="hasPermission('company.read')"
                        href="/manage-company"
                        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        :class="{
                            'bg-muted text-primary':
                                $page.url === '/manage-company',
                        }"
                    >
                        <Package class="h-4 w-4" />
                        Copanies
                    </Link>
                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <ShoppingCart class="h-4 w-4" />
                        Orders
                        <Badge
                            class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        >
                            6
                        </Badge>
                    </a>

                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Users class="h-4 w-4" />
                        Customers
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <LineChart class="h-4 w-4" />
                        Analytics
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>
