module.exports = {
    routes: [
        {
            method: "GET",
            path: "/posts/:id/comments",
            handler: "post.idComments",
            config:{
                auth: false
            }
        }
    ]
};

