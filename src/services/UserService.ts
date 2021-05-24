import DirectMessageChannel from "@/models/DirectMessageChannel";
import JsonTool from "@/services/tool/JsonTool";
import HomeView from "@/views/HomeView.vue";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";

export default class UserService {

    static async getCurrentUserDirectMessageChannels(component: HomeView) {
        try {
            const response = await component.axios.get("/users/@me/channels", {
                headers: {Authorization: getModule(SessionModule).session.token}

            })
            // @ts-ignore
            component.directMessage = JsonTool.jsonConvert.deserializeObject(response.data, DirectMessageChannel)
            // @ts-ignore
            console.log(component.directMessage)

        } catch (e) {
            console.log("Error: " + e)
        }
    }
}