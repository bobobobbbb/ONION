//index.js
//获取应用实例
var app = getApp()
Page({
  data: { 
  studentId: {},
  password: {},
    motto: 'Hello World',
    userInfo: {} //空对象
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getStudentId: function(e){
    this.setData({
      studentId: e.detail.value
    });
    console.log(this.data.studentId)
  },
  getPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  doLogin: function() {
    wx.request({
      url: 'http://10.148.26.196:9000', //仅为示例，并非真实的接口地址
      data: {
        username: this.data.studentId,
        password: this.data.password
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
