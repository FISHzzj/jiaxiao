var e = getApp(), o = require("../../utils/core.js");

Page({
    data: {
        shop_logo: "",
        shop_name: ""
    },
    onLoad: function(e) {
        var n = this;
        o.get("wxAppSetting", {}, function(e) {
            var o = e.sysset;
            n.setData({
                shop_logo: o.shoplogo,
                shop_name: o.shopname
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindGetUserInfo: function(n) {
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(i) {
                console.log([ 1, i ]), o.post("wxapp/login", {
                    code: i.code
                }, function(i) {
                    console.log([ 2, i ]), i.error ? o.alert("获取用户登录态失败:" + i.message) : o.get("wxapp/auth", {
                        data: n.detail.encryptedData,
                        iv: n.detail.iv,
                        sessionKey: i.session_key
                    }, function(s) {
                        console.log([ 3, s ]), 1 == s.isblack && wx.showModal({
                            title: "无法访问",
                            content: "您在商城的黑名单中，无权访问！",
                            success: function(o) {
                                o.confirm && e.close(), o.cancel && e.close();
                            }
                        }), n.detail.userInfo.openid = s.openId, n.detail.userInfo.id = s.id, n.detail.userInfo.uniacid = s.uniacid;
                        var t = e.setCache("userinfo", n.detail.userInfo), a = e.setCache("userinfo_openid", n.detail.userInfo.openid), c = e.setCache("userinfo_id", s.id);
                        console.log(e.getCache("userinfo")), console.log(e.getCache("userinfo_openid")), 
                        console.log(e.getCache("userinfo_id"));
                        var l = e.setCache("login_session_key", i.session_key);
                        0 != t && 0 != a && 0 != c && 0 != l || o.alert("获取用户信息失败!"), console.log(e.getCache("login_session_key")), 
                        e.getSet(), e.scanCarts(), wx.navigateBack({
                            changed: !0
                        });
                    });
                });
            },
            fail: function() {
                o.alert("获取用户信息失败!");
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getUserProfile(){
        var p1 = new Promise((resolve, reject) => {
            wx.getUserProfile({
              lang: 'zh_CN',
              desc: '用户登录',
              success: (res) => {
                resolve(res)
                // res.encryptedData,
                // res.iv
              },
              // 失败回调
              fail: (err) => {
                reject(err)
              }
            })
          })
          var p2 = new Promise((resolve, reject) => {
            wx.login({
              success (res) {
                resolve(res.code)
              },
              fail (err) {
                reject(err)
              }
            })
          })

          Promise.all([p2, p1]).then((i) => {
              console.log(i)
            let code = i[0]
            let iv = i[1].iv
            let encryptedData = i[1].encryptedData
            let userInfo = i[1].userInfo
            console.log([ 1, i ]), o.post("wxapp/login", {
                code: code
            }, function(i) {
                // e.setCache("userinfo_openid", i.openid)
                console.log([ 2, i ]), i.error ? o.alert("获取用户登录态失败:" + i.message) : o.get("wxapp/auth", {
                    data: encryptedData,
                    iv: iv,
                    sessionKey: i.session_key,
                    openId : i.openid
                }, function(s) {
                    console.log([ 3, s ]), 1 == s.isblack && wx.showModal({
                        title: "无法访问",
                        content: "您在商城的黑名单中，无权访问！",
                        success: function(o) {
                            o.confirm && e.close(), o.cancel && e.close();
                        }
                    }), userInfo.openid = s.openId, userInfo.id = s.id, userInfo.uniacid = s.uniacid;
                    var t = e.setCache("userinfo", userInfo), a = e.setCache("userinfo_openid", userInfo.openid), c = e.setCache("userinfo_id", s.id);
                    console.log(e.getCache("userinfo")), console.log(e.getCache("userinfo_openid")), 
                    console.log(e.getCache("userinfo_id"));
                    var l = e.setCache("login_session_key", i.session_key);
                    0 != t && 0 != a && 0 != c && 0 != l || o.alert("获取用户信息失败!"), console.log(e.getCache("login_session_key")), 
                    e.getSet(), e.scanCarts(), wx.navigateBack({
                        changed: !0
                    });
                });
            });
            
          }).catch((err) => {
            console.log(err)
          })
    },
    navigateBack: function() {
        wx.navigateBack({
            changed: !0
        });
    },
    close: function() {
        wx.navigateBack({
            delta: 0
        });
    }
});