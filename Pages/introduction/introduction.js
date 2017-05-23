var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置



Page({
  data: {
    tabs: ["概况", "1V1"],
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
  onLoad: function (options) {
    var that = this;
    var currentPostID= options.id;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          sliderLeft_inside: (res.windowWidth / that.data.tabs_inside.length - sliderWidth) / 2,
          sliderOffset_inside: res.windowWidth / that.data.tabs_inside.length * that.data.activeIndex_inside
        });
      }
    });
    var postList=[
            {
                image_source:"/image/homepage_image/library_1.jpg"  
            },
            {
                image_source:"/image/homepage_image/office_1.jpg"  
            },
            {
                image_source:"/image/homepage_image/doctor_1.jpg"  
            }
        ]
    var hotList=[
            {
                icon:"/image/user_icon/01.jpg",
                background:"/image/homepage_image/talent.jpg",
                name:"李路明",
                school:"北京科技大学",
                major:"工业设计",
                postID:"1",
                selfIntroduction:"热爱设计，喜欢交互方面的小细节",
                fee:"50",
            },
            {
                icon:"/image/user_icon/02.jpg",
                background:"/image/homepage_image/talent.jpg",
                name:"王晨宣",
                school:"北京邮电大学",
                major:"物流管理",
                postID:"2",
                selfIntroduction:"热爱物流，喜欢汽车",
                fee:"30",
            },
            {
                icon:"/image/user_icon/03.jpg",
                background:"/image/homepage_image/talent.jpg",
                name:"李伊萌",
                school:"北京林业大学",
                major:"土木工程",
                postID:"3",
                selfIntroduction:"热爱建筑，喜欢做做小模型",
                fee:"70",
            },
            {
                icon:"/image/user_icon/04.jpg",
                background:"/image/homepage_image/talent.jpg",
                name:"肖晨",
                school:"北京邮电大学",
                major:"网络工程",
                postID:"4",
                selfIntroduction:"热爱电脑，喜欢打游戏",
                fee:"50",
            },
            {
                icon:"/image/user_icon/05.jpg",
                background:"/image/homepage_image/talent.jpg",
                name:"佟针叶",
                school:"北京科技大学",
                major:"工业设计",
                postID:"5",
                selfIntroduction:"热爱工业，喜欢核弹",
                fee:"60",
            }
        ]
    var appriseList=[
            {
                postID:"1",
                apprise:["很认真很负责，完美解决了我的问题1", "思路太快我有点跟不上", "哇，人超级棒,讲解也很细致,知识面也很宽，各种设计作品徐徐道来"],
            },
            {
                postID:"2",
                apprise:["很认真很负责，完美解决了我的问题2", "思路太快我有点跟不上", "哇，人超级棒,讲解也很细致,知识面也很宽，各种设计作品徐徐道来"],
            },
            {
                postID:"3",
                apprise:["很认真很负责，完美解决了我的问题3", "思路太快我有点跟不上", "哇，人超级棒,讲解也很细致,知识面也很宽，各种设计作品徐徐道来"], 
            },
            {
                postID:"4",
                apprise:["很认真很负责，完美解决了我的问题4", "思路太快我有点跟不上", "哇，人超级棒,讲解也很细致,知识面也很宽，各种设计作品徐徐道来"], 
            },
            {
                postID:"5",
                apprise:["很认真很负责，完美解决了我的问题5", "思路太快我有点跟不上", "哇，人超级棒,讲解也很细致,知识面也很宽，各种设计作品徐徐道来"], 
            },

        ]
        that.setData({
            postList:postList,
            hotList:hotList,
            appriseList:appriseList,
            currentPostID:currentPostID,
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
  getToKnowTAClick: function () {
    var currentPostID= this.data.currentPostID;
    console.log(currentPostID);
    wx.navigateTo({
        url: "../../Pages/recognize/recognize?id=" + currentPostID,
    }) 
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
