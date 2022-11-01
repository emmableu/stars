import axios from "./axios/ideaServerAxiosConfig";
import Cookies from "js-cookie";
import globalConfig, {getCondition} from "./globalConfig";


// db looks like: user: {"raleigh1022": {number: xxx, name: "Jane Doe", condition: xxx}}
// mmdd: {'1022': 0, '1105': 0}
// current

class Api {

    static async generateUserId (obj) {
        // const mmdd = globalConfig.mmdd;
        // real_name = data['name']
        // mmdd = data['mmdd']
        // consent = data['consent']
        obj["mmdd"] = globalConfig.mmdd;

        return await axios({
            method: 'post',
            url: `/stars/init`,
            data: obj
        })
    }

    static async starsUpdate (key, value) {
        value["db_time"] = new Date().toString();
        value["condition"] = getCondition();
        const userId = localStorage.getItem("userId");
        const response = await axios({
            method: 'post',
            url: `/stars/${userId}`,
            data: {key, value}
        })
        return response;
    }
}

export {Api};
