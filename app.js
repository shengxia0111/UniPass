App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    data: {
    URL: "https://56493008.qcloud.la/",
    OpenID:null,
    UserType:null,
  },
  // lazy loading openid
});