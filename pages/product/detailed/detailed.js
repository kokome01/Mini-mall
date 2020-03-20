// pages/product/detailed/detailed.js
Page({
  data: {
    chooseType:1,
    imgUrls: [
      "../../../assets/img/banner/ad1.jpg",
      "../../../assets/img/banner/ad2.jpg",
      "../../../assets/img/banner/ad3.jpg"
    ],
    rightImg:"../../../assets/img/icon/right (1).png",
    product:{
      price:"189.66",
      free:"1.00",
      name:"消毒水片剂（买一送一）消毒水片剂消毒水片剂消毒水片剂",
      seeNum:123,
      payNum:23,
      evaluateNum:12,
      tagging:"../../../assets/img/icon/ico_bs1.jpg",
      factory:"湖南一格",
      specifications:"150ml/瓶",
      brand:"大力",
      prescription:"非处方",
      drugstore:"株洲县衙大药房",
      approval:"国标156456454",
      dosage:"液体剂",
    },
    evaluate:{
      val:"0%",
      totle: 0,
      good1: 0,
      good2: 0,
      good3: 0
    },
    popShow:true,
    foot:{
      icon:[
        "../../../assets/img/icon/home (2).png",
        "../../../assets/img/icon/shopcart (2).png",
        "../../../assets/img/icon/xin (1).png"
      ]
    },
    pop:{
      img:"../../../assets/img/product/product.jpg",
      price:"56.22",
      del:"../../../assets/img/icon/ca1.png",
      specifications:[
        "150ml/只",
        "200ml/只",
        "300ml/只"
      ]
    },
    animationData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.popHide()
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
  
  },
  chooseType: function (e) {
    this.setData({
      chooseType: e.target.dataset.val
    })
  },
  popShow:function (e){
    //显示pop
    this.setData({
      popShow: true
    });
    //动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
    })
    animation.translate(0, 0).step();

    this.setData({
      animationData: animation.export()
    })
  },
  popHide:function(e) {
    this.setData({
      popShow: false
    })
    //动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
    })
    animation.translate(0, 300).step();

    this.setData({
      animationData: animation.export()
    })
  }
})