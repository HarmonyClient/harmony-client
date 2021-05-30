<template>
    <v-system-bar dark class="title-bar" color="#121212">
        <div class="buttons">
            <button class="close">
                <svg width="7" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000" stroke-width="1.2" stroke-linecap="round" d="M1.182 5.99L5.99 1.182m0 4.95L1.182 1.323"/>
                </svg>
            </button>
            <button class="minimize">
                <svg width="6" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000" stroke-width="2" stroke-linecap="round" d="M.61.703h5.8"/>
                </svg>
            </button>
            <button class="zoom">
                <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                    <path d="M4.871 3.553L9.37 8.098V3.553H4.871zm3.134 5.769L3.506 4.777v4.545h4.499z"/>
                    <circle cx="6.438" cy="6.438" r="6.438" fill="none"/>
                </svg>
            </button>
        </div>
        <v-spacer/>
    </v-system-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class TitleBar extends Vue {

}
</script>

<style scoped>
.title-bar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
}

.buttons {
    display: flex;
    justify-content: center;
}

.buttons button {
    border: none !important;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

svg { visibility: hidden; }

.buttons:hover svg {
    visibility: visible;
}

.close {
    background: #ff5c5c;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.close:active {
    background: #c14645;
    border: 1px solid #b03537;
}

.minimize {
    background: #ffbd4c;
    margin-left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
}

.zoom {
    background: #00ca56;
    margin-left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.zoom:active {
    background: #029740;
    border: 1px solid #128435;
}
</style>