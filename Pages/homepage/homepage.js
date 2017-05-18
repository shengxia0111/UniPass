var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["热门学生", "分类"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        tabs_inside: ["专业", "大学"],
        activeIndex_inside: 0,
        sliderOffset_inside: 0,
        sliderLeft_inside: 0,


        inputShowed: false,
        inputVal: "",
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
                    sliderLeft_inside: (res.windowWidth / that.data.tabs_inside.length - sliderWidth) / 2,
                    sliderOffset_inside: res.windowWidth / that.data.tabs_inside.length * that.data.activeIndex_inside
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    tabClick_inside: function (e) {
      this.setData({
        sliderOffset_inside: e.currentTarget.offsetLeft,
        activeIndex_inside: e.currentTarget.id
      });
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
        })
    },
    durationChange: function (e) {
    this.setData({
      duration: e.detail.value
        })
    }
    
});