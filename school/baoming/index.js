/*
 * @Author: your name
 * @Date: 2021-09-02 22:03:21
 * @LastEditTime: 2021-09-02 22:13:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \windy_wxapp\school\detail\index.js
 */
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    that.setData({
        id: options.id
    })
    that.getData()
  },
  getData: function(){
    // console.log(2222)
    var e = this;
    // if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
 
    t.post("school/info", {
        id: e.data.id
    }, function(t) {
        console.log(t)
         e.setData({
            logo: t.logo,
            merchname: t.merchname,
            price: t.price,
            west_info: t.west_info,
            east_info: t.east_info,
            guide_img: t.guide_img
        })

    });
  },
  gopay(){
    wx.navigateTo({
      url: '/school/pay/index?id='+ this.data.id,
    })
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