<template>
    <v-app>
        <TitleBar />
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TitleBar from "@/components/TitleBar.vue";

@Component({components: {TitleBar}})
export default class App extends Vue {
}
</script>

