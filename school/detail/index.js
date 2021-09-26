/*
 * @Author: your name
 * @Date: 2021-09-02 22:03:21
 * @LastEditTime: 2021-09-02 22:13:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \windy_wxapp\school\detail\index.js
 */
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
// school/detail/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        id: "",
        page: 1,
        loaded: !1,
        loading: !0,
        list: [],
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
        // that.getjiaowu()
    },
    changeNav(e) {
        let active = e.currentTarget.dataset.active;
        this.setData({
            active: active
        })
        if(active == 2 || active == 3 ){
            this.setData({
                page: 1,
                list: []
            })
            this.getjiaowu()
        }
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
                east_info: t.east_info
            })

        });
    },
    getjiaowu: function(){
        var e = this;
        // if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
        if(e.data.active == 2){
            t.post("school/info/jiaowu", {
                id: e.data.id,
                page: e.data.page
            }, function(t) {
                console.log(t)
                var a = {
                    loading: !1,
                    total: t.total,
                    show: !0
                };
                t.list || (t.list = []), t.list.length > 0 && (a.page = e.data.page + 1, a.list = e.data.list.concat(t.list), 
                t.list.length < t.pagesize && (a.loaded = !0)), e.setData(a);
    
            });
        }else if(e.data.active == 3){
            t.post("school/info/comment", {
                id: e.data.id,
                page: e.data.page
            }, function(t) {
                console.log(t)
                var a = {
                    loading: !1,
                    total: t.total,
                    show: !0
                };
                t.list || (t.list = []), t.list.length > 0 && (a.page = e.data.page + 1, a.list = e.data.list.concat(t.list), 
                t.list.length < t.pagesize && (a.loaded = !0)), e.setData(a);
    
            });
        }
        
    },
    baoming(){
        // url="/school/pay/index"
        wx.navigateTo({
          url: '/school/baoming/index?id='+ this.data.id,
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
    onReachBottom: function() {
        console.log(3333)
        this.data.loaded || this.data.list.length == this.data.total || this.getjiaowu();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})