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
             url: "https://56493008.qcloud.la/wxLogin.php",
             data:{
               code:res.code
             },
             method:"GET",
             header: {
               "content-type": "json"
             },
             success:function(res){
               console.log(res.data)
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
  onLoad: function (options) {

  
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

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