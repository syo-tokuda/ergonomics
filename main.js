// データ
var agriculture = [[1,0,0,1,-1,0], [2,0,1,2,-1,0], [3,0,1,3,0,0], [5,0,2,3,3,0], [7,0,3,4,6,0]];
var industry = [[0,1,0,0,0,0], [0,2,0,0,1,0], [0,3,2,1,2,0], [2,5,0,2,4,2], [0,8,4,1,8,2]];
var culture = [[0,0,1,0,0,0], [0,0,2,0,0,1], [1,0,3,0,0,3], [0,2,5,0,2,4], [0,3,8,4,2,7]];
var protection = [[0,0,0,-5,0,0], [0,0,0,-4,3,-4], [0,0,0,0,-5,0], [0,0,0,0,-5,0], [0,0,0,-3,-3,0], [0,0,0,0,-3,-3], [0,0,0,-3,0,-3]];
var result = [0,0,0,0,0,0];
var card = [0,0,0,0,0,0];
var reset = [0,0,0,0,0,0];
var state;

// 初期表示
window.onload = function () {
  result[0] = document.getElementById('agriculture');
  result[1] = document.getElementById('industry');
  result[2] = document.getElementById('culture');
  result[3] = document.getElementById('water');
  result[4] = document.getElementById('atmosphere');
  result[5] = document.getElementById('life');
  state = document.getElementById('card');
  
  document.getElementById("agr_char").style.color = "green";
  document.getElementById("ind_char").style.color = "blue";
  document.getElementById("cul_char").style.color = "red";
  document.getElementById("wat_char").style.color = "DeepSkyBlue";
  document.getElementById("atm_char").style.color = "magenta";
  document.getElementById("lif_char").style.color = "gold";

  document.getElementById("agr1").style.border = "solid 2px green";
  document.getElementById("agr2").style.border = "solid 2px green";
  document.getElementById("agr3").style.border = "solid 2px green";
  document.getElementById("agr4").style.border = "solid 2px green";
  document.getElementById("agr5").style.border = "solid 2px green";
  document.getElementById("ind1").style.border = "solid 2px blue";
  document.getElementById("ind2").style.border = "solid 2px blue";
  document.getElementById("ind3").style.border = "solid 2px blue";
  document.getElementById("ind4").style.border = "solid 2px blue";
  document.getElementById("ind5").style.border = "solid 2px blue";
  document.getElementById("cul1").style.border = "solid 2px red";
  document.getElementById("cul2").style.border = "solid 2px red";
  document.getElementById("cul3").style.border = "solid 2px red";
  document.getElementById("cul4").style.border = "solid 2px red";
  document.getElementById("cul5").style.border = "solid 2px red";
  document.getElementById("protection").style.marginRight = "195px";
  document.getElementById("reset").style.marginLeft = "100px";
  state.style.width = "25%";
  state.style.fontSize = "1.5rem";
};

// cardキー押下
function card_click(val){
  if(val=="野菜畑")
    card = agriculture[0];
  else if(val=="果樹園")
    card = agriculture[1];
  else if(val=="酪農")
    card = agriculture[2];
  else if(val=="農業Lv.4")
    card = agriculture[3];
  else if(val=="プランテーション")
    card = agriculture[4];
  else if(val=="工業Lv.1")
    card = industry[0];
  else if(val=="工業Lv.2")
    card = industry[1];
  else if(val=="自動車工場")
    card = industry[2];
  else if(val=="化学工場")
    card = industry[3];
  else if(val=="ロケット打ち上げ")
    card = industry[4];
  else if(val=="文化Lv.1")
    card = culture[0];
  else if(val=="文化Lv.2")
    card = culture[1];
  else if(val=="文化Lv.3")
    card = culture[2];
  else if(val=="遊園地")
    card = culture[3];
  else if(val=="大型リゾート施設")
    card = culture[4];
  else if(val=="浄水場")
    card = protection[0];
  else if(val=="焼却炉")
    card = protection[1];
  else if(val=="サイクロン")
    card = protection[2];
  else if(val=="フィルター")
    card = protection[3];
  else if(val=="環境保護5")
    card = protection[4];
  else if(val=="環境保護6")
    card = protection[5];
  else if(val=="環境保護7")
    card = protection[6];

  state.value = val;
}

// resetキー押下
function reset_click(){
  for(var i=0; i<6; i++)
    result[i].value = 0;
  
    card = reset;
    state.value = null;
}

// addキークリック
function add_click(){
  var temp = card;
  for(var i=0; i<6; i++){
    result[i].value = Number(result[i].value) + Number(temp[i]);
  }
    
  card = reset;
  state.value = null;
}

// subキークリック
function sub_click(){
  var temp = card;
  for(var i=0; i<6; i++){
    result[i].value = Number(result[i].value) - Number(temp[i]);
    card[i].value = 0;
  }
  
  card = reset;
  state.value = null;
}