//业务逻辑代码

var mirs = {

    // 接口
    URL : {
        oAuthUrl: function (type) {
            return '/oauth/' + type;
        },
        loginUrl: function () {
            return '/login';
        },
        registerUrl: function () {
            return '/register';
        }

    },

    loadOAuthUrl : function (element, oauthUrl) {
        $.post(oauthUrl, {}, function (result) {
            if(result && result['success']) {
                console.log(result['data']['url']);
                $(element).attr("href", result['data']['url']);
            }
        })
    },
}