import axios from "axios";

export const baseUrl = "192.168.1.77:5000";
export const foodUrl = "192.168.1.77:5001";

export const unAuthApi = async (method, url, data) => {
    let response = await axios({
        method: method,
        url: `http://${baseUrl}${url}`,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export const foodApi = async (method, url, data) => {
    let response = await axios({
        method: method,
        url: `http://${foodUrl}${url}`,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}