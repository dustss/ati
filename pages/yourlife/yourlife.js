//logs.js

Page({
  data: {
    half: [],
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
    let half=[]
    for(let i=0;i<12;i++){
      half.push({
        paintColor: 'gainsboro'
      })
    }
    this.setData({
      half: half
    })

  },
/**
 * 点击列表单个条目 变换条目颜色
 */
  onPainting(e){  
      var id = e.currentTarget.id;
      if(this.data.pen==-1) {
        this.data.half[id].paintColor = 'gainsboro'
      }
      this.data.half[id].paintColor = this.data.brushColor[this.data.pen]
      this.setData({
        half: this.data.half
      })
      
  },
//   onRealPainting(e){
// console.log(e)
//   },
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
