import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { Can } from '@/Support/can.js' 

import { Link, Head } from "@inertiajs/vue3";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            // .use(Can)
            .component("Link", Link)
            .component("Head", Head)
            .component("Button", Button)
            .component("Badge", Badge)
            .component("Card", Card)
            .component("CardHeader", CardHeader)
            .component("CardTitle", CardTitle)
            .component("CardDescription", CardDescription)
            .component("CardContent", CardContent)
            .component("DropdownMenu", DropdownMenu)
            .component("DropdownMenuTrigger", DropdownMenuTrigger)
            .component("DropdownMenuContent", DropdownMenuContent)
            .component("DropdownMenuItem", DropdownMenuItem)
            .component("DropdownMenuLabel", DropdownMenuLabel)
            .component("DropdownMenuSeparator", DropdownMenuSeparator)
            .component("Input", Input)
            .component("Sheet", Sheet)
            .component("SheetContent", SheetContent)
            .component("SheetTrigger", SheetTrigger)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
