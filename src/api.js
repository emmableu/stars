import axios from "./axios/ideaServerAxiosConfig";
import Cookies from "js-cookie";
import globalConfig from "./globalConfig";


class Api {

    static async e115Update (key, value) {
        value["db_time"] = new Date().toString();
        value["condition"] = globalConfig.condition;
        console.log("updating");
        const userId = Cookies.get("userId");
        const response = await axios({
            method: 'post',
            url: `/e115/${userId}`,
            data: {key, value}
        })
        return response;
    }
}

export {Api};
