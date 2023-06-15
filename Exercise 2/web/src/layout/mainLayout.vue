<template>
    <logoHeader />
    <main>
        <section class="left">
            <sideBar />

        </section>
        <section class="right">
            <slot />
        </section>
    </main>

</template>

<script setup>
import logoHeader from '../components/logoHeader.vue';
import sideBar from "../components/sideBar.vue"
</script>

<style lang="scss" scoped>
main{
    width: 100%;
    display: flex;
    section{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
    }
    .left{
        min-width: 20%;
        max-width: fit-content;
    }
}
</style>