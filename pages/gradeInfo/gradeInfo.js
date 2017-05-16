// gradeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleData: {},
    jgmc: '',
    jsxm: '',
    kcxzmc: '',
    kclbmc: '',
    kcmc: '',
    ksxz: '',
    xf: '',
    xh: '',
    xm: '',
    zymc: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    console.log(params.kcmc)
    this.setData({
      jgmc: params.jgmc,
      jsxm: params.jsxm,
      kcxzmc: params.kcxzmc,
      kclbmc: params.kclbmc,
      kcmc: params.kcmc,
      xf: params.xf,
      xh: params.xh,
      xm: params.xm,
      zymc: params.zymc
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '成绩详细信息' //更换title名字
    })
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})