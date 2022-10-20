// const params = new URLSearchParams(window.location.search);

function getCondition(){
    let localCondition = localStorage.getItem("condition")
    let condition;
    if (!localCondition) {
        var num = Math.random();
        if(num < 0.45) condition = "0";  //probability 0.3
        else condition = "1";  //probability 0.1
        localStorage.setItem("condition", condition)
    }
    else {
        condition = localCondition;
    }
    console.log("condition: ", condition);
    return condition;
}

const globalConfig = {
    condition: getCondition(),
    testing: false,
}

Object.freeze(globalConfig);

export default globalConfig;

