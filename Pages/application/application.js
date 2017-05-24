// Pages/application/application.js
var inputContent= {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent= {}
  },

  bindChange: function(e) {
    inputContent[e.currentTarget.id]= e.detail.value;
  },

  submitClick: function(e) {
    console.log(e);
    var content = e.currentTarget.dataset.postId;
    console.log(content);
    wx.navigateBack();
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    wx.showToast({title: '提交成功', duration: 3000,});
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