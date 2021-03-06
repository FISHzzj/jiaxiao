var a = getApp().requirejs("core");
Page({
  data: {
    id: "",
    list: [],
    media_url: "",
    autoplay: !1,
    currentIndex: 0,
    name: "",
    avatar: "",
    nickname: ""
  },
  onLoad: function (a) {
    this.setData({
      id: a.id,
      name: a.name,
      avatar: a.avatar,
      nickname: a.nickname
    })
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShareAppMessage: function () {
    var t = this;
    return a.onShareAppMessage("/live/replay/index?id=" + t.data.id + "&name=" + t.data.name + "&avatar=" + t.data.avatar + "&nickname=" + t.data.nickname)
  },
  onReady: function () {},
  onShow: function () {
    this.getList()
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  getList: function () {
    var t = this;
    a.get("live/room/get_replay", {
      id: t.data.id
    }, function (a) {
      a.list[0].color = !0, t.setData({
        list: a.list,
        media_url: a.list[0].media_url
      })
    }, this.data.show)
  },
  showVideo: function (a) {
    var t = a.currentTarget.dataset.index,
      n = a.currentTarget.dataset.src;
    this.setData({
      media_url: n,
      autoplay: !0,
      currentIndex: t
    })
  },
  replayLoading: function () {
    console.log("视频加载中")
  }
});