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
    // param.animalId=4;
    app.getData('/animal/selectAnimals', param,res=>{
      console.log(res)
      that.setData({
        animals: res.data.data.animals
      })
      wx.hideLoading();
    })
  },
  post_data(e) {
    var that = this;
    console.log('要提交的数据');
    var param = {};
    wx.showLoading({
      title: 'loding',
    })
    param.animalTitle=e.detail.value.inputName;
    param.animalDesc =e.detail.value.inputDesc;
    app.postData('/animal/insertAnimal',param,res=>{
      console.log(res);
      console.log(e.detail.value);
      wx.hideLoading();
    })

    // 可行----
    // console.log(e.detail.value);
  },
  del_data(e) {
    var that = this;
    console.log('要提交的数据');
    var param = {};
    wx.showLoading({
      title: 'loding',
    })
    param.animalId = e.detail.value.inputDel;
    app.delData('/animal/deleteAnimal', param, res => {
      console.log(res);
      console.log(e.detail.value);
      wx.hideLoading();
    })

    // 可行----
    // console.log(e.detail.value);
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