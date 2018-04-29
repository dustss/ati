//logs.js
const COLUMN_MAX = 7
const ROW_MAX = 5

Page({
  data: {
    pixels: [],
    brushes: [],
    brushColor: ['tomato', 'orange', 'greenyellow', 'skyblue', 'pink'],
    pen: -1
  },
  onLoad: function () {
    this.initPaintTools()
    this.initCanvas()
  },
  /**
   * 初始化画布
   */
  initCanvas() {
    let grid = []
    for (let i = 0; i < COLUMN_MAX; i++) {
      let row = grid[i] = []
      for (let j = 0; j < ROW_MAX; j++) {
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
   * 初始化绘图工具
   */
  initPaintTools() {
    let brushes = []
    for (let i = 0; i < 5; i++) {
      brushes.push({
        brushColor: this.data.brushColor[i]
      })
    }
    this.setData({
      brushes: brushes
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
  /**
   * 下拉刷新清空画布
   */
  onPullDownRefresh() {
    this.initCanvas()
    wx.stopPullDownRefresh()
  }

})
