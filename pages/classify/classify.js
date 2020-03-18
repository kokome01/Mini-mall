Page({
  data: {
    menuIndex:0,
    menu:[
      { arr: 0, val: "全部" },
      { arr: 1, val: "中医西药" },
      { arr: 2, val: "养生保健" },
      { arr: 3, val: "医疗器械" },
      { arr: 4, val: "计生用品" },
      { arr: 5, val: "中药饮片" },
      { arr: 6, val: "医学护肤" },
    ],
    classify:[
      /*{
        arr:0,
        type:0,
        top:"全部",
        kind:[
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
          { arr: 0, val: "支气管炎" },
        ]
      },*/
    ]
  },
  onLoad: function (options) {
    let self = this
    //console.log("123")
    wx.request({
      url: 'http://www.51ywyf.com/ywyf-weixin/product/typesList', 
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let data = res.data.data;
        let classul = [];
        let classli = {};
        let class2ul = [];
        let class2li = {};
        let num = 0;
        console.log(data);
        for(let i=0;i<data.length;i++){
          for (let j = 0; j < data[i].funTypes.length;j++){
            for (let n = 0; n < data[i].funTypes[j].diseases.length;n++){
              
              classli = {
                arr: n,
                val: data[i].funTypes[j].diseases[n].name
              }
              classul[n] = classli
            }
            num ++
            class2li = {
              arr: num,
              type: i+1,
              top: data[i].funTypes[j].name,
              kind: classul
            }
            class2ul.push(class2li)
            classul = {};
          }
         
        }
        console.log(class2ul);
        self.setData({
          classify: class2ul
        })
      }
    })
  },
  menu: function (event){
    this.setData({
      menuIndex: event.currentTarget.dataset.index
    })
  }

})