//index.js
//获取应用实例
import {API} from '../../utils/api.js'
var app = getApp()
Page({
  data:{
    array: ['全部','2005-2006', '2006-2007', '2007-2008', '2008-2009','2009-2010','2010-2011','2011-2012',
    '2012-2013','2013-2014','2014-2015','2015-2016'
    ,'2016-2017','2017-2018','2018-2019','2019-2020',
    '2020-2021'],
    section:['全部','第一学期','第二学期','第三学期'],
    gradeInfo: {} ,//空对象
    token:{},
    xnm:'',
    xqm:'',
    index: wx.getStorageSync('username'),
    idx:0
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindSectionChange:function(e){
    this.setData({
      idx: e.detail.value
    })
  },
  onLoad: function(){
    try {
      var token = wx.getStorageSync('token')
      this.setData({
        token: token
      })
    } catch (e) {
      //获取token失败跳转回登录界面
    }
    this.initIndex()
  },
  initIndex: function() {
    var initIndex = wx.getStorageSync('username').substring(0, 4) - 2004
    console.log(initIndex)
    this.setData({
      index: initIndex
    })
  },
  getXnm: function() {
    var Xn = this.data.array[this.data.index]
    console.log(Xn)
    if (this.data.index == 0) {
      this.setData({
        xnm: ''
      })
    } else {
      var subXn = Xn.substring(0, 4)
      this.setData({
        xnm: subXn
      })
    }    
  },
  getXqm: function() {
    console.log(this.data.idx)
    switch (this.data.idx) {
      case '0': this.setData({
        xqm: '' //全部
      })  
      break
      case '1': this.setData({
        xqm: 3 //第一学期
      })
      break
      case '2': this.setData({
        xqm: 12 //第二学期
      })
      console.log('haha')
      break
      case '3': this.setData({
        xqm: 16 //第三学期
      })
      break
    }
    console.log(this.data.xqm)
  },
  clickQuery: function() {
    var that = this 
    this.getXnm()
    this.getXqm()
    wx.navigateTo({
      url: '../gradeList/gradeList?xnm=' + this.data.xnm + '&xqm=' + this.data.xqm
    })
  }
})
