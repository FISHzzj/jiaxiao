var e = getApp();

Page({
    onLoad: function() {
        e.checkAuth();
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    onShow: function() {
        var n = e.getCache("userinfo");
        console.log(n), n && wx.switchTab({
            url: "/pages/member/index/index"
        });
    }
});