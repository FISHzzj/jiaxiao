var t = getApp().requirejs("core");

Page({
    data: {
        storeid: 0,
        merchid: 0,
        markers: [],
        store: {}
    },
    onLoad: function(t) {
        this.setData({
            storeid: t.id,
            merchid: t.merchid
        }), this.getInfo();
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },
    getInfo: function() {
        var e = this;
        t.get("store/map", {
            id: this.data.storeid,
            merchid: this.data.merchid
        }, function(t) {
            e.setData({
                store: t.store,
                markers: [ {
                    id: 1,
                    latitude: Number(t.store.lat),
                    longitude: Number(t.store.lng)
                } ],
                show: !0
            });
        });
    },
    phone: function(e) {
        t.phone(e);
    }
});