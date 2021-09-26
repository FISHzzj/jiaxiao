function n() {
    return wx.getSystemInfoSync() || {};
}

module.exports = {
    setCookies: function(n) {
        wx.setCookies && "function" == typeof wx.setCookies && wx.setCookies({
            cookies: [ {
                key: "no_expires_" + n.appid,
                value: n.value,
                busid: "mmbiz_report_busid_live"
            }, {
                key: "expires_72_" + n.appid,
                value: n.value,
                expires: Math.floor((Date.now() + 2592e5) / 1e3),
                busid: "mmbiz_report_busid_live"
            } ]
        });
    },
    showToast: function(n) {
        wx.showToast({
            title: n,
            icon: "none",
            duration: 2e3
        });
    },
    showModal: function(n) {
        wx.showModal({
            title: n,
            confirmText: "我知道了",
            showCancel: !1,
            success: function(n) {
                n.confirm && wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    showModalNotBack: function(n) {
        wx.showModal({
            title: n,
            confirmText: "我知道了",
            showCancel: !1
        });
    },
    navigateBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    getSystemInfoSync: n,
    checkWeChatVersion: function() {
        var o = n(), e = o.platform, t = o.version, i = void 0 === t ? "" : t, r = o.environment;
        i = i.split("."), "wxwork" !== r && (("android" === e || "ios" === e) && +("" + i[0] + i[1] + i[2]) < 707 || "windows" === e && +("" + i[0] + i[1] + i[2]) < 271) && wx.showModal({
            title: "建议升级",
            content: "由于微信版本过低，只能观看直播",
            showCancel: !1,
            confirmText: "我知道了"
        });
    },
    pingDomain: function(n) {
        return new Promise(function(o, e) {
            var t = n.split("/");
            t = t[2] ? t[0] + "//" + t[2] : "", wx.request({
                url: t,
                success: function(n) {
                    o(n);
                },
                fail: function(n) {
                    e(n);
                }
            });
        });
    },
    authorize: function() {
        return new Promise(function(n, o) {
            wx.getNativeUserInfo && "function" == typeof wx.getNativeUserInfo ? wx.getNativeUserInfo({
                success: function(o) {
                    n(o);
                },
                fail: function(n) {
                    o(n);
                }
            }) : (wx.showModal({
                title: "建议升级",
                content: "由于微信版本过低，无法打开授权弹框",
                showCancel: !1,
                confirmText: "我知道了"
            }), o({
                errMsg: "not support"
            }));
        });
    },
    setPageOrientation: function(n) {
        return new Promise(function(o, e) {
            wx.setPageOrientation && "function" == typeof wx.setPageOrientation ? wx.setPageOrientation({
                orientation: n,
                success: function(n) {
                    o(n);
                },
                fail: function(n) {
                    e(n);
                }
            }) : (wx.showModal({
                title: "建议升级",
                content: "由于微信版本过低，无法横屏",
                showCancel: !1,
                confirmText: "我知道了"
            }), e({
                errMsg: "not support"
            }));
        });
    },
    chooseAddressForPlugin: function() {
        return new Promise(function(n, o) {
            wx.chooseAddressForPlugin && "function" == typeof wx.chooseAddressForPlugin ? wx.chooseAddressForPlugin({
                success: function(o) {
                    n(o);
                },
                fail: function(n) {
                    o(n);
                }
            }) : (wx.showModal({
                title: "建议升级",
                content: "由于微信版本过低，无法填写地址",
                showCancel: !1,
                confirmText: "我知道了"
            }), o({
                errMsg: "not support"
            }));
        });
    },
    openSettingForPlugin: function() {
        return new Promise(function(n, o) {
            wx.openSettingForPlugin && "function" == typeof wx.openSettingForPlugin ? wx.openSettingForPlugin({
                success: function(o) {
                    n(o);
                },
                fail: function(n) {
                    o(n);
                }
            }) : (wx.showModal({
                title: "建议升级",
                content: "由于微信版本过低，无法打开设置页",
                showCancel: !1,
                confirmText: "我知道了"
            }), o({
                errMsg: "not support"
            }));
        });
    },
    reLaunch: function(n) {
        wx.reLaunch && "function" == typeof wx.reLaunch && wx.reLaunch({
            url: n
        });
    },
    reportPerformance: function(n, o) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        wx.reportPerformance && "function" == typeof wx.reportPerformance && wx.reportPerformance(n, o, e);
    }
};