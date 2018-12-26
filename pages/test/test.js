// pages/test/test.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:null
  },
  get_data(){
    var that=this;
    console.log('输出');
    var param={};
    wx.showLoading({
      title: 'loding',
    })
    param.articleId=1;
    app.getData('/article/selectArticleById', param,res=>{
      console.log(res)
      that.setData({
        article: res.data.data.article
      })
      wx.hideLoading();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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