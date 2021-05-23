<template>
    <div>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import DirectMessageChannel from "@/models/DirectMessageChannel";
import UserService from "@/services/UserService";

@Component
export default class HomeView extends Vue{
    directMessage: DirectMessageChannel = new DirectMessageChannel()

    created() {
        UserService.getCurrentUserDirectMessageChannels(this)
    }
}
</script>
