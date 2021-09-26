var t = getApp(), e = t.requirejs("core");

Page({
    data: {},
    onLoad: function(e) {
        t.checkAuth();
        this.setData({
            options: e
        });
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    onShow: function() {
        this.getData();
    },
    getData: function() {
        var t = this;
        e.get("commission/index", {}, function(e) {
            7e4 != e.error ? (e.show = !0, t.setData(e), wx.setNavigationBarTitle({
                title: e.set.texts.center
            })) : wx.redirectTo({
                url: "../../commission/pages/register/index"
            });
        });
    }
});