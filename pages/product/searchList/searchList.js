// pages/product/searchList/searchList.js
Page({
  data: {
    chooseType:1,
    productList: [
      {
        img: "../../../assets/img/product/product.jpg",
        name: "消毒水（买一送一）消毒水（买一送一）消毒水（买一送一）消毒水（买一送一）消毒水（买一送一）",
        specifications: "500ml/瓶",
        price: "156.00",
      },
      {
        img: "../../../assets/img/product/product.jpg",
        name: "消毒水（买一送一）",
        specifications: "500ml/瓶",
        price: "156.00",
      }
    ]
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
  chooseType:function (e){
    this.setData({
      chooseType : e.target.dataset.val
    })
  }
})