var User = false;
var UserInfo = {};
var app = getApp().data.UserType;
Page({
  
  data: {
    postList:true
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
  judgeUserType:function(){

    wx.request({
      url: getApp().data.URL + "GetUserInfoByOpenID.php",
      data: {
        OpenID: getApp().data.OpenID,
      },
      header: {
        "content-type": "json"
      },
      success(res) {
       console.log(res.data.UserType);
       getApp().data.UserType = res.data.UserType;
       console.log(getApp().data.UserType);
      },
      
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.judgeUserType();


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    UserInfo = getApp().data.UserType
    console.log(getApp().data.UserType)
    if (UserInfo == 1) {
      User = false;
    } else {
      User = true;
    }
    this.setData({
      postList: User
    })
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