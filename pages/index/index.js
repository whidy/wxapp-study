//index.js
//获取应用实例
const app = getApp();

// The localValue can only be used in file a.js.
// var localValue = 'a';
// Get the global data and change it.
// app.globalData.userInfo = localValue;
// console.log(app.globalData); // I am global data
Page({
  data: {
    motto: 'World',
    userInfo: {},
    userLoc: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arrayNums: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  getLocationFn: () => {
    console.log('获取地理位置');
    // var _this = this.data;
    wx.getLocation({
      type: '',
      altitude: true,
      success: function(res) {
        // _this.userLoc = [res.latitude, res.altitude];
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {}
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function() {
    // this.getLocationFn();
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   });
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     });
    //   };
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo;
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       });
    //     }
    //   });
    // }
  },
  // getUserInfo: function(e) {
  //   console.log(e);
  //   app.globalData.userInfo = e.detail.userInfo;
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   });
  // }
});
