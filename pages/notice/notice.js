//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    notice: {} //空对象
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getNotice: function () {
    var that = this
    wx.request({
      url: 'http://10.148.37.48:9000/notice/getNoticeTop15Tzggxs', //仅为示例，并非真实的接口地址
      data: {   
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data)
         that.setData({
             notice: res.data.data
         })
         console.log(that.notice)
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    this.getNotice()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
