colorSelect = {
  colorsInput:null,
  colorsText:null,
  colorsCount:null,
  patternHexa :/^#(?:[\da-f]{3}|[\da-f]{6})$/i,
  patternHexaSmall : /#^([\da-f]{3})$/i,
  setVisibility:function(value){
    var self = this;
    for(i=0; i<self.colorsPanel.length; i++){
      if(i<value){
        self.colorsPanel[i].className = self.colorsPanel[i].className.replace("hidden", "visible");
      } else {
        self.colorsPanel[i].className = self.colorsPanel[i].className.replace("visible", "hidden");
      }
    }
  },
  initKeyEvent:function(el, rank){
    var self = this;
    el.addEventListener("keypress", function(){
      setTimeout(function(){
        if(el.value.match(colorSelect.patternHexa)){
          self.colorsInput[rank].value = el.value.replace(self.patternHexaSmall, "#$1$1");
        }
      }, 1)
    }, false)
  },
  initChangeEvent:function(el, rank){
    var self = this;
    el.addEventListener("change", function(){
      self.colorsText[rank].value = this.value;
    }, false)
  },
  initEvents:function(){
    var self = this;
    for(i=0; i<this.colorsText.length; i++){
      this.initKeyEvent(this.colorsText[i], i);
      this.initChangeEvent(this.colorsInput[i], i);
    }
    this.colorsCount.addEventListener("change", function(){
      var value = parseInt(self.colorsCount.value);
      self.setVisibility(value);
    }, false)
  },
  initValue:function(){
    for(i=0; i<this.colorsInput.length; i++){
      this.colorsText[i].value = this.colorsInput[i].value;
    }
  },
  init:function(){
    this.colorsInput = document.getElementsByClassName("panel-color-color");
    this.colorsText = document.getElementsByClassName("panel-color-text");
    this.colorsPanel = document.getElementsByClassName("panel-color");
    this.colorsCount = document.getElementById("colors_count");
    if(this.colorsText.length === this.colorsInput.length && this.colorsText.length>0 && this.colorsCount){
      this.initEvents();
      this.setVisibility(3);
      this.initValue();
    }
  }
}



window.addEventListener("load", function(){
  colorSelect.init();
}, false)
