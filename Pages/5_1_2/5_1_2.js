Page({
  buttonclick:function(event){
    location.reload()
    wx.redirectTo({
      url: '../5_1/5_1',
    })
  }
});