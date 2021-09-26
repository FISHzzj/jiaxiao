// school/schoolIndex/index.js
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude: "",
        longitude: "",
        list: [],
        keyword: "",
        page: 1,
        loaded: !1,
        loading: !0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
                console.log(res)
              const latitude = res.latitude
              const longitude = res.longitude
              that.setData({
                latitude,
                longitude
              })
            //   wx.openLocation({
            //     latitude,
            //     longitude,
            //     scale: 18
            //   })
                that.shousuolist();
            }
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
    dingwei:function(){
        let that = this
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
                console.log(res)
              const latitude = res.latitude
              const longitude = res.longitude
              that.setData({
                latitude,
                longitude
              })
              wx.openLocation({
                latitude,
                longitude,
                scale: 18
              })
            }
           }) 
    },
    shousuoblur(e){
        console.log(e)
        console.log(e.detail.value)
        var that = this
        if(e.detail.value || e.detail.value != ""){
            that.setData({
                keyword: e.detail.value
            })
        }
    },
    shousuo: function(){
        // console.log(2222)
        var e = this;
        if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
        // if(!e.data.keyword || e.data.keyword == "") return t.toast('请输入学校名称') 
        // console.log(e.data.keyword)
        t.post("school/list", {
            lng: e.data.longitude,
            lat: e.data.latitude,
            keyword: e.data.keyword,
            page: 1
        }, function(t) {
            console.log(t)
            // var a = {
            //     loading: !1,
            //     total: t.total,
            //     show: !0
            // };
            // t.list || (t.list = []), t.list.length > 0 && (a.page = e.data.page + 1, a.list = e.data.list.concat(t.list), 
            // t.list.length < t.pagesize && (a.loaded = !0)), e.setData(a);

             e.setData({
                list: t.list,
                keyword: "",
            })

        });
    },
    shousuolist: function(){
        // console.log(2222)
        var e = this;
        if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
        // if(!e.data.keyword || e.data.keyword == "") return t.toast('请输入学校名称') 
        // console.log(e.data.keyword)
        t.post("school/list", {
            lng: e.data.longitude,
            lat: e.data.latitude,
            keyword: e.data.keyword,
            page: e.data.page,
            // pagesize: 5,
        }, function(t) {
            console.log(t)
            var a = {
                loading: !1,
                total: t.total,
                show: !0
            };
            t.list || (t.list = []), t.list.length > 0 && (a.page = e.data.page + 1, a.list = e.data.list.concat(t.list), 
            t.list.length < t.pagesize && (a.loaded = !0)), e.setData(a);

            //  e.setData({
            //     list: t.list,
            //     keyword: "",
            // })

        });
    },
    dianzan: function(r){
        var e = this;
        console.log(t.pdata(r))
        var id = t.pdata(r).id
        var deleted = t.pdata(r).deleted
      
        // if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
        if(!id || id == "") return t.toast('没有找到对应的id') 
        // console.log(e.data.keyword)
        t.post("school/getsel/totals", {
            id: id,
            // lat: e.data.latitude,
            deleted: deleted,
        }, function(o) {
            console.log(o)
            if(o.error == 0){
                t.toast(o.msg)
                let list = e.data.list
                // let listarr = []
                list.forEach((item, index)=>{
                    if(item.id == id){
                        list[index].is_total = o.deleted
                        if(deleted == 0){
                            list[index].totals =  parseInt(list[index].totals) + 1
                        }else {
                            list[index].totals = parseInt(list[index].totals) - 1

                        }
                    }
                })
                console.log(list)
                e.setData({
                    // page: 1,
                    list: list
                })
                // e.shousuolist()
            }else{
                t.toast(o.msg)
            }
            //  e.setData({
            //     list: t.list,
            //     keyword: "",
            // })

        });
    },
    shoucang: function(r){
        var e = this;
        // console.log(t.pdata(r))
        var id = t.pdata(r).id
        var deleted = t.pdata(r).deleted
    
        // if(!e.data.longitude || !e.data.latitude) return t.toast('请先获取定位')
        if(!id || id == "") return t.toast('没有找到对应的id') 
        // console.log(e.data.keyword)
        t.post("school/getsel/collection", {
            id: id,
            // lat: e.data.latitude,
            deleted: deleted,
        }, function(o) {
            console.log(o)
            if(o.error == 0){
                t.toast(o.msg)
                let list = e.data.list
                // let listarr = []
                list.forEach((item, index)=>{
                    if(item.id == id){
                        list[index].is_favorite = o.deleted
                        if(deleted == 0){
                            list[index].collection =  parseInt(list[index].collection) + 1
                        }else {
                            list[index].collection = parseInt(list[index].collection) - 1

                        }
                    }
                })
                console.log(list)
                e.setData({
                    // page: 1,
                    list: list
                })
            }else{
                t.toast(o.msg)
            }
            //  e.setData({
            //     list: t.list,
            //     keyword: "",
            // })

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
        this.data.loaded || this.data.list.length == this.data.total || this.shousuolist();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})