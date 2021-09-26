function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = t(require("api.js")), a = t(require("config.js"));

exports.default = {
    getRoomStaticInfo: function(t) {
        var n = t.room_id, r = t.source, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "get_static_info",
                room_id: n,
                content: "",
                plugin_appid: "pusher" === r ? o : a.default.PLUGIN_APPID,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    getRoomDynamicInfo: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_message",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    getRoomEndInfo: function(t) {
        var n = t.room_id, r = t.source, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "get_end_info",
                room_id: n,
                content: "",
                plugin_appid: "pusher" === r ? o : a.default.PLUGIN_APPID,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    getLiveStatus: function(t) {
        var n = t.room_id;
        return new Promise(function(t, r) {
            var o = {
                action: "get_live_info",
                room_id: n,
                content: "",
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(o).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else r({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                r(t);
            });
        });
    },
    unsubscribeRoom: function(t) {
        var n = t.room_id;
        return new Promise(function(t, r) {
            var o = {
                action: "unsubscribe",
                room_id: n,
                content: "",
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(o).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : r({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                r(t);
            });
        });
    },
    setSystemTriggerBarrage: function(t) {
        var n = t.action, r = t.room_id, o = t.content;
        return new Promise(function(t, i) {
            var s = {
                action: n,
                room_id: r,
                content: JSON.stringify(o),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    reportRoom: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "report_room",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    reportComment: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "report_comment",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    setLike: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "like",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    pushComment: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "comment",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    startLottery: function(t) {
        var n = t.room_id, r = t.content, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "start_lottery",
                room_id: n,
                content: r,
                plugin_appid: o,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    endLottery: function(t) {
        var n = t.room_id, r = t.content, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "end_lottery",
                room_id: n,
                content: r,
                plugin_appid: o,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    cancelLottery: function(t) {
        var n = t.room_id, r = t.content, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "cancel_lottery",
                room_id: n,
                content: r,
                plugin_appid: o,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                e && e.respData && e.respData.data ? t(e) : i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    getLotteryById: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_lottery_by_id",
                room_id: n,
                content: r,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    getLotteryResult: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_lottery_result",
                room_id: n,
                content: r,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                if (e && e.respData && e.respData.data) {
                    var n = JSON.parse(e.respData.data);
                    t(n);
                } else s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    getParticipated: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "ask_participated",
                room_id: n,
                content: r,
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    fillLotteryAddress: function(t) {
        var n = t.room_id, r = t.content;
        return new Promise(function(t, o) {
            var i = {
                action: "fill_lottery_address",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: a.default.PLUGIN_APPID,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(i).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : o({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                o(t);
            });
        });
    },
    getReplayUrl: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_replay_url",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    getLiveInfo: function(t) {
        var n = t.room_id, r = t.source, o = t.room_appid;
        return new Promise(function(t, i) {
            var s = {
                action: "get_live_info",
                room_id: n,
                content: "",
                plugin_appid: "pusher" === r ? o : a.default.PLUGIN_APPID,
                room_appid: o,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(s).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : i({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                i(t);
            });
        });
    },
    getHistoryMsg: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_history_msg",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    pushMsg: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "push_msg",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                t(e);
            }).catch(function(t) {
                s(t);
            });
        });
    },
    mmdataReport: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "report_data",
                room_id: n,
                content: JSON.stringify(r),
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                room_appid: i,
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                t(e);
            }).catch(function(t) {
                s(t);
            });
        });
    },
    getBanUserList: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "get_ban_user_list",
                room_id: n,
                room_appid: i,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                content: JSON.stringify(r),
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    addBanUser: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "add_ban_user",
                room_id: n,
                room_appid: i,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                content: JSON.stringify(r),
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    removeBanUser: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "remove_ban_user",
                room_id: n,
                room_appid: i,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                content: JSON.stringify(r),
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    },
    removeComment: function(t) {
        var n = t.room_id, r = t.content, o = t.source, i = t.room_appid;
        return new Promise(function(t, s) {
            var p = {
                action: "remove_comment",
                room_id: n,
                room_appid: i,
                plugin_appid: "pusher" === o ? i : a.default.PLUGIN_APPID,
                content: JSON.stringify(r),
                timestamp: Date.now()
            };
            e.default.liveRoutePromise(p).then(function(e) {
                e && e.respData && e.respData.data ? t(e.respData.data) : s({
                    inner_ret: a.default.OPERATEWXDATA_CODE.NO_CONTENT,
                    errmsg: "no res.respData.data",
                    response: e
                });
            }).catch(function(t) {
                s(t);
            });
        });
    }
};