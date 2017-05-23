Page({
  data:{
    flag:"success"
  },
  liluming:function(event){
    wx.navigateTo({
      url: '../5_1_2/5_1_2',
    })
    this.setData({
      flag:"cencel"
    })
  },
});