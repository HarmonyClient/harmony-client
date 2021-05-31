import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("User")
export default class User {
    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("username", String, true)
    username?: string = undefined
    @JsonProperty("discriminator", String, true)
    discriminator?: string = undefined
    @JsonProperty("avatar", String, true)
    _avatar?: string = undefined
    @JsonProperty("bot", Boolean, true)
    bot?: boolean = undefined
    @JsonProperty("mfa_enabled", Boolean, true)
    mfaEnabled?: boolean = undefined
    @JsonProperty("verified", Boolean, true)
    verified?: boolean = undefined
    @JsonProperty("email", String, true)
    email?: string = undefined
    @JsonProperty("flags", Number, true)
    flags?: number = undefined
    @JsonProperty("premium", Boolean, true)
    premium?: boolean = undefined

    get avatar(): string {
        if (this.avatar.startsWith("a_")) {
            return "https://cdn.discordapp.com/avatars/" + this.id + "/" + this.avatar + ".gif?size=128"
        }
        return "https://cdn.discordapp.com/avatars/" + this.id + "/" + this.avatar + ".png?size=128"
    }
}