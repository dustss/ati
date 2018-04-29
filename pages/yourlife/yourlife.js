//logs.js
const COLUMN_NUMBER = 7

Page({
  data: {
    grid: [],
    row: Array.from(new Array(5),(val,index)=>index),
    brushes: [],
    brushColor: ['tomato', 'orange', 'greenyellow', 'skyblue','pink'],
    pen:-1
  },
  onLoad: function (){
    //初始化绘图工具
    let brushes=[]
    for(let i=0;i<5;i++){
      brushes.push({
        brushColor: this.data.brushColor[i]
      })
    }
    this.setData({
      brushes: brushes
    })
    // 初始化列表条目
    let grid=[];
    for (let i = 0; i < COLUMN_NUMBER;i++)
    {
      grid.push(this.data.row)
    }
    this.setData({
      grid:grid,
    })


  },

/**
 * 点击列表单个条目 变换条目颜色
 */
  onPainting(e){  
    console.log(e.currentTarget.id)
    var x= e.currentTarget.id[0]
    var y = e.currentTarget.id[2]
    

  },

/**
 * 绘图颜色 绘图工具选择
 */
  onPenSelected(f){
    var pen = f.currentTarget.id;
    if(this.data.pen==pen)
    this.setData({
      pen: -1
    })
    else{
      this.setData({
        pen: pen
      })
    }
  },

/**
 * 模拟涂抹绘图效果
 */
  onTouchMoving(e){
    console.log(e)
  }

})
