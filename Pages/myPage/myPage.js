
Page({
  
  data: {
    postList:getApp().data.UserType
  },
  my1v1:function(event){
    wx.navigateTo({
      url: '../5_1/5_1',
    })
  },
  Apply:function(event){
    wx.navigateTo({
      url: '../application/application',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var UserInfo;
    var User;
    wx.request({
      url: getApp().data.URL + "GetUserInfoByOpenID.php",
      data: {
        OpenID: getApp().data.OpenID,
      },
      header: {
        "content-type": "json"
      },
      success(res) {
        UserInfo = res.data
        console.log(UserInfo)
        if (UserInfo.UserType == "1") {
          getApp().data.UserType = false;
        } else {
          getApp().data.UserType  = true;
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },



  /**
   * 生命周期函数--监听页面卸
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})