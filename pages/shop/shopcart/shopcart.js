// pages/shopcart/shopcart.js
Page({
  data: {
    shopcart:[
      {
        id:0,
        name:"湖南一格",
        free:"0",
        checked:false,
        product:[
          {
            id:0,
            name:"消毒水（买一送一）",
            img:"../../../assets/img/product/product.jpg",
            specifications:"500ml/瓶",
            price:"156.00",
            num:1,
            checked:false
          },
          {
            id: 0,
            name: "消毒水（买一送一）",
            img: "../../../assets/img/product/product.jpg",
            specifications: "500ml/瓶",
            price: "156.00",
            num: 1,
            checked: false
          }
        ]
      }
    ],
    totle: {
      price: 0.00
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      key: 'name',
      data: '钥匙大小',
    })
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
  getPay:function () {
    wx.navigateTo({
      url: "../pay/pay"
    });
  }
})