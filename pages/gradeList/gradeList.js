// gradeList.js
import { API } from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xqm: '',
    xnm: '',
    item: {},
    gradeInfo: {},
    token: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var token = wx.getStorageSync('token')
    this.setData({
      token: token
    })
    wx.setNavigationBarTitle({
        title: '成绩列表'    //为什么不改我的title
        }) 
    wx.showLoading({ //调用wx.hideLoading才可以影藏
      title: '数据加载中'
    }) 
    this.setData({
      xqm: params.xqm,
      xnm: params.xnm,
    })
    //console.log('haha',this.data.xqm)
    //console.log('haha', this.data.xnm)
    this.getGradeData()
  },
  getGradeData: function () {
    var that = this
    wx.request({
      url: API.GETGRADE,
      data: {
        xnm: that.data.xnm,
        xqm: that.data.xqm,
        token: this.data.token
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        console.log(res.data)
        that.setData({
          gradeInfo: res.data.data.courseInfos
        })
       console.log(that.data.gradeInfo)
      },
      //获取数据失败提示
      fail: function (e) {
        console.error(e)
        wx.showModal({
          'title': '错误',
          'content': '成绩数据获取失败',
          'confirmText': '确定',
          'concelText': '取消',
          'success': function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  }
  /*getIndex: function(e) {
    var index = e.currentTarget.index
    console.log(index)
    var singleData = gradeInfo[index]
    var singleDataStr = JSON.stringify(singleData)
    wx.navigateTo({
      url: '../gradeInfo/gradeInfo?singleData=' + singleDataStr
    })
  }
  */
})