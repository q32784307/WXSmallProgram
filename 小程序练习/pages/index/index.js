//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bnrUrl: [
      '/Image/ShufflingFigure/1.jpg','/Image/ShufflingFigure/2.jpg','/Image/ShufflingFigure/3.jpg'
    ],
    swiperCurrent: 0
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  swipclick: function (e) {
    console.log(this.data.swiperCurrent)
  },

  // 领券中心
  vouchersPush: function () {
    wx.navigateTo({
      url: '../index/couponsCenter/couponsCenter'
    })
  },
  // 日常保洁
  dailyPush: function () {
    wx.navigateTo({
      url: '../index/dailyProcter/dailyProcter'
    })
  },
  //优选保洁
  optimizationPush: function () {
    wx.navigateTo({
      url: '../index/optimizationProcter/optimizationProcter'
    })
  },
  //家电清洗
  cleanPush: function () {
    wx.navigateTo({
      url: '../index/electricClean/electricClean'
    })
  },
  //开荒保洁
  forestPush: function () {
    wx.navigateTo({
      url: '../index/forestProcter/forestProcter'
    })
  },
  //优惠套餐
  optimizationPlanPush: function () {
    wx.navigateTo({
      url: '../index/优惠套餐/optimizationPlan'
    })
  },
  //大扫除
  springCleanPush: function () {
    wx.navigateTo({
      url: '../index/大扫除/springClean'
    })
  },
  //周周特价
  weekSpecialsPush: function () {
    wx.navigateTo({
      url: '../index/周周特价/weekSpecials'
    })
  },
  //家政服务查看更多
  pushAction: function () {
    wx.switchTab({
      url: '/pages/classification/classification'
    })
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
