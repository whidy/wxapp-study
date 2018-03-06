// other.js
var app = getApp();

Page({
  data: {
    obj: {
      index: 1,
      msg: 'hello whidy',
      time: '2019-01-05'
    }
  },
  tapName: function(event) {
    console.log(event)
  }
})