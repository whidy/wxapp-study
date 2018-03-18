// other.js
var app = getApp();
// console.log(app.globalData); // I am global data
var common = require('../../utils/common');
//index.js
Page({
  data: {
    motto: 'World',
    userInfo: {},
    userLoc: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arrayNums: [1, 2, 3, 4, 5],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function() {
    // return custom share data when user share.
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    };
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
  // Event handler.
  viewTap: function() {
    console.log('view tap');
    this.setData(
      {
        text: 'Set some data for updating view.'
      },
      function() {
        // this is setData callback
      }
    );
  },
  customData: {
    hi: 'MINA'
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    });
  },
  changeNum: function() {
    this.data.num = 1;
    this.setData({
      num: this.data.num
    });
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    });
  },
  changeItemInObject: function() {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    });
  },
  helloMINA: function() {
    // common.sayHello = function (name) {
    //   console.log(`new ${name}`);
    // }
    common.sayHello('MINA');
    // common.sayFarewell('hello');
  },
  goodbyeMINA: function() {
    // common.sayGoodbye = function (name) {
    //   console.log(`new ${name}`);
    // }
    common.sayGoodbye('MINA');
    // common.sayFarewell('bye');
  },
  switch: function(e) {
    const length = this.data.objectArray.length;
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);
      const temp = this.data.objectArray[x];
      this.data.objectArray[x] = this.data.objectArray[y];
      this.data.objectArray[y] = temp;
    }
    this.setData({
      objectArray: this.data.objectArray
    });
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length;
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(
      this.data.objectArray
    );
    this.setData({
      objectArray: this.data.objectArray
    });
  },
  addNumberToFront: function(e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(
      this.data.numberArray
    );
    this.setData({
      numberArray: this.data.numberArray
    });
  }
});
