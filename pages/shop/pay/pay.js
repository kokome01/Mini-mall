// pages/shop/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"点击"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('pay')
    let key = wx.getStorageSync("key")
    console.log(key)
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
  aa:function () {
    console.log(777)
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res)
        that.setData({
          val:"成功"
        })
      },
      fail: function(res) {
        console.log(res)
        that.setData({
          val: "失败"
        })
      },
      complete: function(res) {},
    })
    
    
  }
  
})