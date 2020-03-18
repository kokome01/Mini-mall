//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image:{
      xi: "../../assets/img/icon/xi.png"
    },
    imgUrls:[
      "../../assets/img/banner/ad1.jpg",
      "../../assets/img/banner/ad2.jpg",
      "../../assets/img/banner/ad3.jpg"
    ],
    menu:[
      [
        { img: "../../assets/img/icon/menu (1).png", name: "计生用品" },
        { img: "../../assets/img/icon/menu (2).png", name: "医学护肤" },
        { img: "../../assets/img/icon/menu (3).png", name: "婴儿用品" },
        { img: "../../assets/img/icon/menu (4).png", name: "处方药" }
      ],
      [
        { img: "../../assets/img/icon/menu (5).png", name: "医疗器械" },
        { img: "../../assets/img/icon/menu (6).png", name: "养生保健" },
        { img: "../../assets/img/icon/menu (7).png", name: "中医西药" },
        { img: "../../assets/img/icon/menu (8).png", name: "附近药房" }
      ]
    ],
    news:[
      "大宝，天天见",
      "美容护肤频道为你提供最专业的美容知识"
    ],
    recommend:[
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）消毒水片剂（买一送一" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" }
    ],
    procuct_li_1:[
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）消毒水片剂（买一送一" },
      { img: "../../assets/img/product/product.jpg", name: "消毒水片剂（买一送一）" }
    ]
  },
  //商品详细
  detailedTap: function () {
    wx.navigateTo({
      url: "../product/detailed/detailed"
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //去搜索页面
  getSearch:function(e){
    wx.navigateTo({ 
      url: "../product/searchRecommend/searchRecommend"
    });
  },
  // 设置计时器
  setTime() {
    let that = this;
    let val = 1;
    let myTime = setInterval(function () {
      that.setData({
        recommendLeft: val * -90
      })
      val = val + 1
      if (val == 9) {

        that.setData({
          recommendLeft: 0
        })
        val = 1;
      }
    }, 1000)
  },
  aa: function (event){
    console.log(event);
    console.log(event.target.dataset.val1)
  }
})
