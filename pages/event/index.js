// other.js
const app = getApp();

Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasDialog: false,
    obj: {
      index: 1,
      msg: 'hello whidy',
      time: new Date()
    }
  },
  onLoad: function() {
    app.loginCallback = res => {
      console.log('Page onLoad detect');
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
          // 如果过了弹窗缓存时间则再次弹窗请求权先
          if (app.globalData.hasDialog) {
            this.setData({
              hasDialog: true
            });
          }

          console.log('失败啦啊啊啊', res);

          // console.log(this.data.hasUserInfo);
        };
      };
    };
  },
  tapName: function(event) {
    console.log(event);
  },
  retry: function(e) {
    // 兼容低版本微信, 开启授权设置页面用户手动授权

    // 相信用户会开启授权, 为了防止返回还有弹窗, 提前设置关闭dialog
    this.setData({
      hasDialog: false
    });

    console.log('retry');
    wx.openSetting({
      success: res => {
        // 为了兼容低版本微信, 已测试 1.2.5版本库, 通过!
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          this.getUserInfo();
        } else {
          // 进来这个页面还不给权限, 脑残啊?
          this.setData({
            hasDialog: true
          });
        }
      }
    });
  },
  getUserInfo: function() {
    console.log('重新获取信息成功，并写入全局数据和当前页面');
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          hasDialog: false
        });
      },
      fail: res => {
        this.setData({
          hasDialog: true
        });
      }
    });
  },
  closeDialog: function() {
    wx.setStorageSync('showUserInfoDialog', {
      date: Date.now(),
      userInfo: null,
      hasUserInfo: false
    }); //考虑增加数据存储过期时间来优化未授权用户每次都会弹窗的问题?
    this.setData({
      hasDialog: false
    });
  },
  // reloadApp: function(e) {
  //   wx.redirectTo({
  //     url: '../index/index'
  //   })
  // }
});
