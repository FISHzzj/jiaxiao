var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
// school/reply/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        page: 1,
        loaded: !1,
        loading: !0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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
        this.getshoucang()
    },
    getshoucang(){
        var e = this;
        t.get("user/collection", {}, function(t) {
            var a = {
                loading: !1,
                total: t.total,
                show: !0
            };
            t.list || (t.list = []), t.list.length > 0 && (a.page = e.data.page + 1, a.list = e.data.list.concat(t.list), 
            t.list.length < t.pagesize && (a.loaded = !0)), e.setData(a);
            
        });
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
    onReachBottom: function() {
        console.log(3333)
        this.data.loaded || this.data.list.length == this.data.total || this.getshoucang();
    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})