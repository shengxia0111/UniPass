// Pages/login/login.js
Page({
  data: {
  
  },
  confirm: function (event) {
    wx.switchTab({
      url: '../homepage/homepage',
      success: function () {
       wx.login({
         success:function(res){
           wx.request({
             url: "https://api.weixin.qq.com/sns/jscode2session?appid=wxa74d5f562437e804&secret=30dfea076c73bee074f8fb97ee2d3f59&js_code="+res.code+"&grant_type=authorization_code",
             data:{
             },
             method:"GET",
             header: {
               "content-type": "json"
             },
             success:function(res){
               wx.showToast({
                 title: '登录成功',
               })
               getApp().data.OpenID=res.data.openid;
              
             }
           })
          
         }
       })
      },
      fail: function () {
       // console.log("jump failed")
      },
      complete: function () {
      // console.log("jump complete")
      }
    })
  },
})
