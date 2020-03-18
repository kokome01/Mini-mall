// pages/person/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    home:{
      backgroundImg:"../../../assets/img/backgroud/person.png",
      personImg:"../../../assets/img/icon/dai (1).png",
      name:"徐顺望"
    },
    orderIcon:[
      {
        icon:"../../../assets/img/icon/dai (2).png",
        name:"待支付",
        num:12
      },
      {
        icon: "../../../assets/img/icon/dai (4).png",
        name: "待发货",
        num: 12
      },
      {
        icon: "../../../assets/img/icon/dai (3).png",
        name: "待收货",
        num: 12
      },
      {
        icon: "../../../assets/img/icon/dai (5).png",
        name: "待评价",
        num: 12
      },
      {
        icon: "../../../assets/img/icon/dai (1).png",
        name: "退换货",
        num: 12
      }
    ],
    otherIcon:[
      {
        icon: "../../../assets/img/icon/dai(6).png",
        name: "我的收藏",
      },
      {
        icon: "../../../assets/img/icon/dai(7).png",
        name: "我的账单",
      },
      {
        icon: "../../../assets/img/icon/service.png",
        name: "客户热线",
      }
    ],
    productList:[
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
  
  }
})