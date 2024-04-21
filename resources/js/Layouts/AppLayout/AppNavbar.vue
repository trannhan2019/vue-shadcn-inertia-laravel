<script setup>
import {
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-vue-next";

const emit = defineEmits(["toggleSidebar"]);
</script>

<template>
    <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
    >
        <Button
            @click="emit('toggleSidebar')"
            variant="outline"
            size="icon"
            class="shrink-0"
        >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
        </Button>

        <div class="w-full flex-1">
            <form>
                <div class="relative">
                    <Search
                        class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                    />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
            </form>
        </div>

        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="secondary" size="icon" class="rounded-full">
                    <CircleUser class="h-5 w-5" />
                    <span class="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <!-- <Link></Link> -->
                <DropdownMenuItem>
                    <Link :href="route('logout')" method="post" as="button"
                        >Logout</Link
                    >
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
</template>
