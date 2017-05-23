Page({
  data:{
    flag:"success"
  },
  liluming:function(event){
    wx.navigateTo({
      url: '../5_1_1/5_1_1',
    })
    this.setData({
      flag:"cencel"
    })
  },
});