var o = getApp();

o.requirejs("core"), o.requirejs("jquery"), o.requirejs("foxui");

Page({
    data: {
        show: !1
    },
    onPullDownRefresh: function() {
        wx.startPullDownRefresh();
    },
    onReady: function() {},
    onLoad: function() {
        var o = this;
        setTimeout(function() {
            o.onPullDownRefresh();
        }, 300), console.log("wwwwww"), wx.reLaunch({
            url: "../../../groups/index/index"
        });
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    onShow: function() {},
    onHide: function() {
        wx.showTabBar({});
    },
    onUnload: function() {
        wx.showTabBar({});
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});