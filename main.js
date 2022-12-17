// データ
var agriculture = [[2,0,0,1,-1,0], [2,0,1,2,-1,0], [4,0,0,3,-1,0], [6,0,1,3,3,0], [8,0,3,3,8,0]];
var industry = [[0,2,0,0,0,0], [1,3,0,0,1,1], [3,3,0,2,2,0], [0,6,0,0,3,2], [0,8,3,2,7,2]];
var commerce = [[0,0,2,0,0,0], [1,1,2,0,0,2], [1,1,4,1,0,3], [0,2,5,0,2,4], [0,3,8,2,2,7]];
var protection = [[0,0,0,-4,0,-1], [0,0,0,-5,5,-5], [0,0,0,0,-5,0], [0,0,0,-2,-2,-1], [0,0,0,1,0,-6], [0,1,0,0,-2,-3], [0,0,0,-5,0,0], [0,0,0,0,-5,0], [0,0,0,0,-6,1]];
var result = [0,0,0,0,0,0];
var card = [0,0,0,0,0,0];
var reset = [0,0,0,0,0,0];
var state;

// 初期表示
window.onload = function () {
  result[0] = document.getElementById('agriculture');
  result[1] = document.getElementById('industry');
  result[2] = document.getElementById('commerce');
  result[3] = document.getElementById('water');
  result[4] = document.getElementById('atmosphere');
  result[5] = document.getElementById('life');
  state = document.getElementById('card');
  
  document.getElementById("agr_char").style.color = "green";
  document.getElementById("ind_char").style.color = "blue";
  document.getElementById("com_char").style.color = "red";
  document.getElementById("wat_char").style.color = "DeepSkyBlue";
  document.getElementById("atm_char").style.color = "magenta";
  document.getElementById("lif_char").style.color = "gold";
  document.getElementById("reset").style.marginLeft = "90px";
  state.style.width = "32%";
  state.style.fontSize = "1.5rem";
};

// cardキークリック
function card_click(val){
  if(val=="野菜畑")
    card = agriculture[0];
  else if(val=="収穫体験農場")
    card = agriculture[1];
  else if(val=="果樹園")
    card = agriculture[2];
  else if(val=="酪農")
    card = agriculture[3];
  else if(val=="プランテーション")
    card = agriculture[4];
  else if(val=="町工場")
    card = industry[0];
  else if(val=="食品工場")
    card = industry[1];
  else if(val=="化学工場")
    card = industry[2];
  else if(val=="自動車工場")
    card = industry[3];
  else if(val=="宇宙開発")
    card = industry[4];
  else if(val=="商店街")
    card = commerce[0];
  else if(val=="コンビニ")
    card = commerce[1];
  else if(val=="デパート")
    card = commerce[2];
  else if(val=="遊園地")
    card = commerce[3];
  else if(val=="リゾート施設")
    card = commerce[4];
  else if(val=="下水処理場")
    card = protection[0];
  else if(val=="焼却炉")
    card = protection[1];
  else if(val=="サイクロン")
    card = protection[2];
  else if(val=="環境モニタリング")
    card = protection[3];
  else if(val=="埋め立て場")
    card = protection[4];
  else if(val=="リサイクル")
    card = protection[5];
  else if(val=="バイオレメディエーション")
    card = protection[6];
  else if(val=="カーボンリサイクル")
    card = protection[7];
  else if(val=="節電")
    card = protection[8];

  state.value = val;
}

// resetキークリック
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
  }
  
  card = reset;
  state.value = null;
}