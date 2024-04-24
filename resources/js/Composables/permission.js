import { usePage } from "@inertiajs/vue3";

export function usePermission() {
    const hasRole = (name) =>
        usePage().props.auth.user.roles.includes(name) ||
        usePage().props.auth.user.roles.includes("super-admin");
    const hasPermission = (name) =>
        usePage().props.auth.user.permissions.includes(name) ||
        usePage().props.auth.user.roles.includes("super-admin");

    return { hasRole, hasPermission };
}
