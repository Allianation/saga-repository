import axios from "axios";

export function requestUserInfo() {
    return axios.request({
        method: "get",
        url: "http://my-json-server.typicode.com/Allianation/user-repository/user"
    });
}
