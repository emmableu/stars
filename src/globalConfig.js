import Cookies from "js-cookie";


const cityMap =
    {
        study1: true,
        study2: false,
        asheville: true,
        athens: false,
        atlanta: true,
        austin: false,
        baltimore: true,
        bellevue: false,
        boston: true,
        buffalo: false,
        cambridge: true,
        charleston: false,
        chicago: true,
        cincinnati: false,
        cleveland: true,
        fremont: false,
        greenwich: true,
        honolulu: false,
        houston: true,
        irvine: false,
        ithaca: true,
        louisville: false,
        miami: true,
        napa: false,
        nashville: true,
        newark: false,
        oakland: true,
        olympia: false,
        philadelphia: true,
        princeton: false,
        providence: true,
        richmond: false,
        sacramento: true,
        seattle: false,
        spokane: true,
        tacoma: false,
        york: true
    }

const cityList = [
    "study1",
    "study2",
    "asheville",
    "athens",
    "atlanta",
    "austin",
    "baltimore",
    "bellevue",
    "boston",
    "buffalo",
    "cambridge",
    "charleston",
    "chicago",
    "cincinnati",
    "cleveland",
    "fremont",
    "greenwich",
    "honolulu",
    "houston",
    "irvine",
    "ithaca",
    "louisville",
    "miami",
    "napa",
    "nashville",
    "newark",
    "oakland",
    "olympia",
    "philadelphia",
    "princeton",
    "providence",
    "richmond",
    "sacramento",
    "seattle",
    "spokane",
    "tacoma",
    "york"
]

const getMmdd = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    return mm + dd
}

const mmdd = getMmdd();


const globalConfig = {
    testing: false,
    mmdd: mmdd,
}

const getCondition = () => {
    const userId = localStorage.getItem("userId")
    console.log('userId: ', userId);
    if (userId.startsWith("j")) {
        return false;
    }
    else {
        console.log('not starts with j');
        for (const city of cityList) {
            console.log('çity: ', city);
            if (userId.startsWith(city)) {
                console.log(userId, city)
                return cityMap[userId]
            }
        }
        return false
    }
}

const isUserCreated = () => {
    const today_data = localStorage.getItem("mmdd");
    console.log("today_data: ", today_data)
    console.log('mmdd: ', mmdd)
    if (!today_data || today_data !== mmdd) {
        Cookies.remove("userId")
        localStorage.setItem("completedSurveyItemList", []);
        return false
    }
    else {
        return true
    }
}


Object.freeze(globalConfig);

export {isUserCreated, cityList, cityMap, getCondition}
export default globalConfig;

