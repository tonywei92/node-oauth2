module.exports =  (router, expressApp, controller) => {

    //route for registering new users
    router.post('/enter', expressApp.oauth.authorise(), controller.enter);
    return router
}
