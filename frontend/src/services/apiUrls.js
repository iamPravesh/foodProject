const apiUrls = {
    auth: {
        registerUser: {
            method: 'POST',
            url: '/login'
        },
        verifyUser: {
            method: 'POST',
            url: '/verifyuser'
        }
    },
    food: {
        getFood: {
            method: 'GET',
            url: '/food'
        },
        getFoodById: {
            method: 'GET',
            url: '/food/:id'
        },
    },
}

export default apiUrls;