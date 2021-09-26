var t = getApp(), e = t.requirejs("core"), a = t.requirejs("jquery"), s = t.requirejs("biz/diyform"), i = t.requirejs("biz/goodspicker");

t.requirejs("foxui");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,

    indicatorDots: true,

    autoplay: true,

    interval: 3000,

    duration: 800,

    circular:true,
    adswiperCurrent:0,
    imgUrls: [

      'https://p3.pstatp.com/large/43700001e49d85d3ab52',

      'https://p3.pstatp.com/large/39f600038907bf3b9c96',

      'https://p3.pstatp.com/large/31fa0003ed7228adf421'

    ],
    adimgUrls:[],
    searchdata:[],
    adcode:'',
    isshow:false,
    iscode:false,
    links:[

      '../user/user',

      '../user/user',

      '../user/user'

    ],
    imgad: 'https://p3.pstatp.com/large/43700001e49d85d3ab52',
    list: [],
    params: {
      status:1
    },
    count: 0,
    loading: !0,
  },

  //轮播图的切换事件

  swiperChange: function (e) {

    this.setData({

      swiperCurrent: e.detail.current

    })

  },
  adswiperChange: function (e) {

    this.setData({

      adswiperCurrent: e.detail.current

    })

  },
  //点击指示点切换

  chuangEvent: function (e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

    })

  },
  adchuangEvent: function (e) {

    this.setData({

      adswiperCurrent: e.currentTarget.id

    })

  },

   //点击图片触发事件

   swipclick: function (e) {

    // console.log(this.data.swiperCurrent);

    // wx.switchTab({

    //   url: this.data.links[this.data.swiperCurrent]

    // })
    let query = e.currentTarget.dataset['url'];
    let name = e.currentTarget.dataset['name']
    wx.navigateTo({    
      url: query
    })
    wx.setNavigationBarTitle({
      title:`三栖人-windy-${name}实时天气预报`
    })

  },
  getList: function() {
    var t = this;
    t.setData({
        loading: !0
    }), this.data.canload = !1, t.data.params.page = t.data.page, e.get("goods/get_list", t.data.params, function(e) {
        var a = {
            loading: !1,
            count: e.total,
            show: !0
        };
        e.list || (e.list = []), e.list.length > 0 && (a.page = t.data.page + 1, a.list = t.data.list.concat(e.list), 
        e.list.length < e.pagesize && (a.loaded = !0)), t.setData(a), t.data.canload = !0;
    });
  },
  getswriptlist:function(){
    var t = this;
    e.get("shop/lists","", function (result) {
      console.log(result)
      var list = result.result.list
      t.setData({
        imgUrls:list
      })
    })


  },
  bindback:function(){
    console.log(333333)
    var t = this;
    t.setData({
      isshow:false
    })
  },
  bindSearch:function(res){
    console.log(res)
    var name = res.detail.value;
    console.log(name)
    var t = this;
    
    e.post("shop/wind_type", {
      name:name
    }, function(result) {
      console.log(result)
      if(result.status == 0){
        e.alert(result.result.message)
      }else{
        // var appid = result.result.info.appid;
        // var spotid = result.result.info.spotid;
        t.setData({
          searchdata: result.result.info,
          isshow: true
        })
        // wx.navigateTo({    
        //   url:`/pages/winderto/index?appid=${appid}&spotid=${spotid}`
        // })
      }
    })

  },
  passQuery:function(e){
    // 传递的参数
    let query = e.currentTarget.dataset['url'];
    let name = e.currentTarget.dataset['name']
    console.log(query);
    wx.navigateTo({    
      url: query
    })
    wx.setNavigationBarTitle({
      title:`三栖人-windy-${name}实时天气预报`
    })
  },
  getadlist:function(){
    var t = this;
    e.get("shop/sement","", function (result) {
      console.log(result)
      var list = result.result.list
      t.setData({
        adimgUrls:list
      })
    })
  },
  adswipclick:function(e){
    var t = this;
    let query = e.currentTarget.dataset['url'];
   

    wx.previewImage({
      current: query, // 当前显示图片的http链接

      urls: [query] // 需要预览的图片http链接列表（重点
    })


  },
  codeclick:function(){
    var t = this;
    t.setData({
      iscode:false
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    this.getList();
    this.getswriptlist();
    this.getadlist();
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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