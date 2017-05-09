// Pages/welcome/welcome.js
Page({
  data:{},
  onButton1Click:function(event){
    var OpenID=123;
    wx.request({
      url: 'https://56493008.qcloud.la/GetDataByOpenIDFromUserInfo.php?OpenID=123',
      data: {
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header:{
        "content-type":"json"
      },
      success: function(res){
        console.log(res.data)
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onButton2Click: function (event) {
    var OpenID = '1231';
    var Avatar='C:/windows';
    var UserType=1;
    wx.request({
      url: 'https://56493008.qcloud.la/UserFirstLogin.php',
      data: {
        "OpenID":OpenID,
        "Avatar":Avatar,
        "UserType":UserType
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        // fai
      },
      complete: function (res) {
        // complete
      }
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})