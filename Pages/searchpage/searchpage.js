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
        duration: 500,

        imageSourceList: ["/image/homepage_image/library_1.jpg", "/image/homepage_image/office_1.jpg", "/image/homepage_image/doctor_1.jpg"],
    },
    onLoad: function (options) {
        var that = this;
        var currentContent= options.content;
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
                name:"李路明",
                school:"北京科技大学",
                major:"工业设计",
                postID:"1",
            },
            {
                icon:"/image/user_icon/02.jpg",
                name:"王晨宣",
                school:"北京邮电大学",
                major:"物流管理",
                postID:"2",
            },
            {
                icon:"/image/user_icon/03.jpg",
                name:"李伊萌",
                school:"北京林业大学",
                major:"土木工程",
                postID:"3",
            },
            {
                icon:"/image/user_icon/04.jpg",
                name:"肖晨",
                school:"北京邮电大学",
                major:"网络工程",
                postID:"4",
            },
            {
                icon:"/image/user_icon/05.jpg",
                name:"佟针叶",
                school:"北京科技大学",
                major:"工业设计",
                postID:"5",
            }
        ]
        that.setData({
            postList:postList,
            hotList:hotList,
            inputVal:currentContent,
            inputShowed:true,
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
    tapClickToUserInfo: function(e) {
         var postID= e.currentTarget.dataset.postId;
         console.log(postID);
         wx.navigateTo({
             url: "../../Pages/introduction/introduction?id=" + postID,
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