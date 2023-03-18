import { LocalStorage } from "node-localstorage";
import { dummy_data } from "./dummy_ex_rate";

interface User {
    id: string,
    api_key: string,
    username: string,
    usage?: {"day": string, "count": number}[],
}
const users: User[] = [];
const USER_STR = "USERS";
const localStorage = new LocalStorage("./users");
const MAX_DAILY_API_CALLS = 10;
export const add_user = (username: string): User => {
    const api_key = [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join('');
    const user: User = {
        id: "USR_"+ new Date().getTime() +"",
        api_key: api_key,
        username: username
    };
    // maintain a local record
    users.push(user);
    // save it to local storage
    localStorage && localStorage.setItem(USER_STR, JSON.stringify(users));
    return user;
};

export const getUser = (api_key: string): User | undefined => {
    return users.find((user) => user.api_key == api_key);
}

export const getExchangeRate = (user: User): any => {
    const today = new Date();
    const todayStr = today.getDate() + "-" + (today.getMonth() +1) + "-" + today.getFullYear();
    let itemIdx = 0;
    
    const todayCallHistory = user.usage?.find((val, idx) => {
        if(val.day == todayStr) {
            itemIdx = idx;
            return val;
        }
    });

    if(todayCallHistory && todayCallHistory.count >= MAX_DAILY_API_CALLS) {
        return "Max API call daily limit reached";    
    };

    let usageRecord = {"day": todayStr, "count": 1};
    if(!todayCallHistory) {
        user.usage = [];
        user.usage?.push(usageRecord);
    } else {
        todayCallHistory.count += 1;
        usageRecord = todayCallHistory;
        user.usage![itemIdx] = todayCallHistory;
    }
    
    return dummy_data;
}