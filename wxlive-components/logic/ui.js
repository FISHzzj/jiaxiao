function t() {
    return wx.getMenuButtonBoundingClientRect();
}

function e() {
    var t = wx.getSystemInfoSync();
    return {
        model: t.model,
        system: t.system
    };
}

function n() {
    return wx.getSystemInfoSync().statusBarHeight + 44;
}

function o() {
    var t = wx.getSystemInfoSync().model;
    return /iphone\sx/i.test(t) || /iphone/i.test(t) && /unknown/.test(t) || /iphone\s11/i.test(t);
}

function r(t) {
    wx.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: t
    });
}

function i() {
    try {
        return wx.getSystemInfoSync().windowWidth;
    } catch (t) {
        return 0;
    }
}

function s() {
    try {
        return wx.getSystemInfoSync().windowHeight;
    } catch (t) {
        return 0;
    }
}

function u() {
    try {
        return "ios" === wx.getSystemInfoSync().platform;
    } catch (t) {
        return 0;
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), module.exports = {
    getMenuButtonBoundingPosition: t,
    getPaddingTop: n,
    isIPhoneX: o,
    setNavFontColor: r,
    getScreenWidth: i,
    getScreenHeight: s,
    isIos: u,
    getSystem: e
}, exports.default = {
    getMenuButtonBoundingPosition: t,
    getPaddingTop: n,
    isIPhoneX: o,
    setNavFontColor: r,
    getScreenWidth: i,
    getScreenHeight: s,
    isIos: u,
    getSystem: e
};