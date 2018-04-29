//logs.js
const COLUMN_NUMBER = 7

Page({
  data: {
    pixels: [],
    brushes: [],
    brushColor: ['tomato', 'orange', 'greenyellow', 'skyblue', 'pink'],
    pen: -1
  },
  onLoad: function () {
    //初始化绘图工具
    let brushes = []
    for (let i = 0; i < 5; i++) {
      brushes.push({
        brushColor: this.data.brushColor[i]
      })
    }
    this.setData({
      brushes: brushes
    })

    //初始化 行列
    let grid = []
    for (let i = 0; i < 7; i++) {
      let row = grid[i] = []
      for (let j = 0; j < 5; j++) {
        row.push({
          paintColor: "gainsboro"
        })
      }
    }
    this.setData({
      grid: grid
    })

  },

  /**
   * 点击单个pixel 变换颜色
   */
  onPainting(e) {
    var x = e.currentTarget.id[0]
    var y = e.currentTarget.id[2]
    this.data.grid[x][y].paintColor = this.data.brushColor[this.data.pen]

    this.setData({
      grid: this.data.grid
    })

  },

  /**
   * 绘图颜色 绘图工具选择
   */
  onPenSelected(f) {
    var pen = f.currentTarget.id;
    if (this.data.pen == pen)
      this.setData({
        pen: -1
      })
    else {
      this.setData({
        pen: pen
      })
    }
  },



})
