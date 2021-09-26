var e = getApp(), t = e.requirejs("core"), a = e.requirejs("wxParse/wxParse"), i = e.requirejs("biz/diypage"), n = e.requirejs("jquery");
// school/reply/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        title: "",
        content: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id
        let type = options.type
        if(type == 'xuesheng'){
            this.setData({
                id: id,
                type: "xuesheng"
            })
        }else {
            this.setData({
                id: id,
                // type: xuesheng
            })
        }
       
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
    getvalue(e){
        console.log(e)
        this.setData({
            title: e.detail.value
        })
    },
    getcontent(e){
        console.log(e)
        this.setData({
            content: e.detail.value
        })
    },
    tijiao(){
        var e = this;
        if(e.data.type == 'xuesheng'){
            if(this.data.title == '') return t.toast('请输入标题');
            if(this.data.content == '') return t.toast('请输入内容');
            t.post("school/getsel/comment", {
                id: e.data.id,
                content: e.data.content
            }, function(o) {
                console.log(o)
                if(o.error == 0){
                    t.toast('提交成功')
                    e.setData({
                        title: '',
                        content: ''
                    })
                }else {
                    t.toast(t.message)
                }
            });
        }else{
            if(this.data.title == '') return t.toast('请输入标题');
            if(this.data.content == '') return t.toast('请输入内容');
            t.post("shop/notice/comment", {
                nid: e.data.id,
                content: e.data.content
            }, function(o) {
                console.log(o)
                if(o.error == 0){
                    t.toast('提交成功')
                    e.setData({
                        title: '',
                        content: ''
                    })
                }else {
                    t.toast(t.message)
                }
            });
        }
      
        
     

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