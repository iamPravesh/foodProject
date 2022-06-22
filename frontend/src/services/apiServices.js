import apiUrls from "./apiUrls";
import { unAuthApi, foodApi } from "./apiHelpers";

export const registerUser = async (data) => {
    let response = await unAuthApi(apiUrls.auth.registerUser.method,
        apiUrls.auth.registerUser.url,
        data);
    return response;
}

export const verifyUser = async (data) => {
    let response = await unAuthApi(apiUrls.auth.verifyUser.method,
        apiUrls.auth.verifyUser.url,
        data);
    return response;
}

export const getFood = async () => {
    let response = await unAuthApi(apiUrls.food.getFood.method,
        apiUrls.food.getFood.url);
    return response;
}

export const getFoodById = async (id) => {
    let response = await foodApi(apiUrls.food.getFoodById.method,
        apiUrls.food.getFoodById.url.replace(":id", id));
    return response.data;
}

