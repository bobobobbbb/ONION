//index.js
//获取应用实例
import {API} from '../../utils/api.js'
var app = getApp()
Page({
  data: { 
  username: {},
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
  getUsename: function(e){
    this.setData({
      username: e.detail.value
    });
  },
  getPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  doLogin: function() {
    var that = this
    if ( wx.getStorageSync('token') != '') { //测试用
      wx.navigateTo({
        url: '../grade/grade'
      })
    }
    wx.request({
      url: API.LOGIN, //仅为示例，并非真实的接口地址
      data: {
        username: this.data.username,
        password: this.data.password
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
       if(res.data.state==1){
         //将token放入缓存中和学号
         try {
           wx.setStorageSync('token', res.data.token)
           wx.setStorageSync('username', that.data.username)
         } catch (e) {
         }
         wx.navigateTo({
           url: '../grade/grade'
         })
       }
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
