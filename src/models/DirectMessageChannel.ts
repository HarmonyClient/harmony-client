import {JsonObject, JsonProperty} from "json2typescript";
import User from "@/models/User";

@JsonObject("DirectMessageChannel")
export default class DirectMessageChannel {
    @JsonProperty("is_private", Boolean, true)
    isPrivate?: boolean = undefined
    @JsonProperty("owner_id", String, true)
    ownerId?: string = undefined
    @JsonProperty("recipients", [User], true)
    users?: User[] = undefined
    @JsonProperty("icon", String, true)
    icon?: string = undefined
}