<script setup>
import InputError from "@/Components/InputError.vue";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Head, useForm, Link } from "@inertiajs/vue3";
import { Loader2 } from "lucide-vue-next";

const form = useForm({
    email: "",
    password: "",
});
const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Log in" />
    <!-- component -->
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div
                class="hidden bg-cover lg:block lg:w-2/3"
                style="
                    background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
                "
            >
                <div
                    class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"
                >
                    <div>
                        <h2 class="text-4xl font-bold text-white">Brand</h2>

                        <p class="max-w-xl mt-3 text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. In autem ipsa, nulla laboriosam dolores,
                            repellendus perferendis libero suscipit nam
                            temporibus molestiae
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6"
            >
                <div class="flex-1">
                    <div class="text-center">
                        <h2
                            class="text-4xl font-bold text-center text-gray-700 dark:text-white"
                        >
                            Brand
                        </h2>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Sign in to access your account
                        </p>
                    </div>

                    <div class="mt-8">
                        <form @submit.prevent="submit">
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >Email Address</label
                                >
                                <Input
                                    type="email"
                                    v-model="form.email"
                                    placeholder="example@example.com"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label
                                        for="password"
                                        class="text-sm text-gray-600 dark:text-gray-200"
                                        >Password</label
                                    >
                                    <Link
                                        :href="route('password.request')"
                                        class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                        >Forgot password?</Link
                                    >
                                </div>
                                <Input
                                    type="password"
                                    v-model="form.password"
                                    placeholder="Your Password"
                                />
                            </div>

                            <div class="mt-6">
                                <Button
                                    :disabled="form.processing"
                                    type="submit"
                                    class="w-full"
                                >
                                    <Loader2
                                        v-show="form.processing"
                                        class="w-4 h-4 mr-2 animate-spin"
                                    />
                                    Sign in</Button
                                >
                            </div>
                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">
                            Don&#x27;t have an account yet?
                            <Link
                                :href="route('register')"
                                class="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >Sign up</Link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
