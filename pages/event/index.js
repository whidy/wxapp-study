// other.js
const app = getApp();
const { Dialog, extend } = require('../../zanui/index');
Page(
  extend({}, Dialog, {
    data: {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      hasDialog: false,
      obj: {
        index: 1,
        msg: 'hello whidy',
        time: '2019-01-05'
      }
    },
    onLoad: function() {
      app.getSettingReadyCallback = res => {
        console.log('onload ', res);
        // 如果授权成功过, 则执行自定义函数getUserInfo将信息写入app.globalData.userInfo和当前userInfo对象
        if (res.authSetting['scope.userInfo']) {
          this.getUserInfo();
        }
        app.userInfoReadyCallback = res => {
          console.log(res);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            hasDialog: false
          });
          // console.log(this.data.hasUserInfo);
        };
        app.failedCallback = res => {
          console.log(res);
          this.setData({
            hasDialog: true,
            userInfo: {},
            hasUserInfo: false
          });
          // console.log(this.data.hasUserInfo);
        };
      };
    },
    tapName: function(event) {
      console.log(event);
    },
    retry: function(e) {
      // 兼容低版本微信, 开启授权设置页面用户手动授权
      console.log('retry');
      wx.openSetting({
        success: res => {
          // 为了兼容低版本微信, 尚未测试
          console.log(res);
          if (res.authSetting['scope.userInfo']) {
            this.getUserInfo();
          }
        }
      });
    },
    getUserInfo: function() {
      console.log('获取信息成功，并写入全局数据和当前页面');
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            hasDialog: false
          });
        }
      });
    },
    closeDialog: function() {
      // wx.setStorageSync('showUserInfoDialog',false) //考虑增加数据存储过期时间来优化未授权用户每次都会弹窗的问题?
      this.setData({
        hasDialog: false
      });
    }
  })
);
