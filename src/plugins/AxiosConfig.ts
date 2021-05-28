import VueAxios from "vue-axios";
import axios, { AxiosError } from "axios";
import {Vue} from "vue-property-decorator";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";
import ConstantsTool from "@/services/tool/ConstantsTool";

export default class AxiosConfig {


    static init(vue: Vue) {

        Vue.use(VueAxios, axios)

        axios.defaults.baseURL = "https://discordapp.com/api"

        axios.interceptors.request.use(request => {
            console.log('Request:', request)
            return request
        })

        axios.interceptors.response.use(response => {
            console.log('Response:', response)
            return response
        }, (error: AxiosError) => {
            if (error.response && error.response.status == 401) {
                let sessionModule: SessionModule = getModule(SessionModule)
                sessionModule.session.token = ""
                sessionModule.saveSession()
                vue.$router.push("/login")
            }
            console.log("Error: " + error);
            console.log(error.response);
            // TODO refresh token... on refreshing make return of axios(error.config) if doesn't return Promise.reject(error)
            // TODO return axios(error.config) // do retry current request
            return Promise.reject(error)
        })


    }

}