//logs.js

Page({
  data: {
    half: [],
    brushes: [],
    brushColor: ['tomato', 'orange', 'greenyellow', 'skyblue','pink'],
    pen:-1
  },
  onLoad: function () {
    let brushes=[]
    for(let i=0;i<5;i++){
      brushes.push({
        brushColor: this.data.brushColor[i]
      })
    }
    this.setData({
      brushes: brushes
    })
    
    let half=[]
    for(let i=0;i<24;i++){
      half.push({
        paintColor: 'gainsboro'
      })
    }
    this.setData({
      half: half
    })

  },

  onPainting(e){  
      var id = e.currentTarget.id;
      if(this.data.pen==-1) return false

      this.data.half[id].paintColor = this.data.brushColor[this.data.pen]
      this.setData({
        half: this.data.half
      })
      
  },
  onPenSelected(f){
    this.data.pen = f.currentTarget.id;
  }
})
