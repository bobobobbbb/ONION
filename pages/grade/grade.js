//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: ['全部','2005-2006', '2006-2007', '2007-2008', '2008-2009','2009-2010','2010-2011','2011-2012',
    '2012-2013','2013-2014','2014-2015','2015-2016'
    ,'2016-2017','2017-2018','2018-2019','2019-2020',
    '2020-2021'],
    section:['全部','第一学期','第二学期','第三学期'],
    gradeInfo: {} ,//空对象
    token:{},
    xnm:'',
    xqm:'',
    index:5,
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
  getGrade: function () {
    this.getXnm()
    this.getXqm()
    var that=this
    try {
      var token = wx.getStorageSync('token')
      this.setData({
        token:token
      })
    } catch (e) {
      // Do something when catch error
    }
    wx.request({
      url: 'http://localhost:9000/user/getGrade', //仅为示例，并非真实的接口地址
      data: {
        token:that.data.token,
        xnm:that.data.xnm,
        xqm:that.data.xqm
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.data.courseInfos.length==0){
          that.setData({
            gradeInfo: res.data.data.courseInfos
          })
           console.log("无数据")
        }else{
        that.setData({
          gradeInfo: res.data.data.courseInfos  
        })
        }
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  click:function(){
    this.getGrade();
  },
  getXnm:function () {
      var index=this.data.index;
      //如果是全部则传空
      if (this.data.array[index]=='全部'){
        console.log(this.data.array[index])
        this.setData({
          xnm: ''
        }) 
      }else{
        //截取字符串获取用户当前选取的年份
        var x = this.data.array[index].substring(0, 4);
        this.setData({
          xnm: x
        }) 
      }
      
  },
  getXqm:function(){
    var idx=this.data.idx
    //全部
    if (idx ==0) {
      this.setData({
        xqm: ''
      })
    }
    //第一学期
    if(idx==1){
      this.setData({
        xqm:'3'
      })
    }
    //第二学期
    if (idx == 2) {
      this.setData({
        xqm: '12'
      })
    }
    //第三学期
    if (idx == 3) {
      this.setData({
        xqm: '16'
      })
    }
  }
})
