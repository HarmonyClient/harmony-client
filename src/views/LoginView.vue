<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <div style="width: 700px;" class="d-flex">
                <v-text-field label="Token:" outlined v-model="token"/>
                <v-btn @click="login" color="primary" class="ml-3" height="56">LOGIN</v-btn>
            </div>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import SessionModule from "@/store/SessionModule";
import {getModule} from "vuex-module-decorators";

@Component
export default class LoginView extends Vue {
    sessionModule: SessionModule = getModule(SessionModule)
    token: string = ""
    tokenRules = [
        (v: string) => v && v.length !== 0 ? true : "Campo requerido",
        (v: string) => v && v.length == 60 ? true : "Ingrese un token valido"
    ]

    login() {
        this.sessionModule.session.token = this.token
        this.sessionModule.saveSession()
        this.$router.push("/")
    }
}
</script>