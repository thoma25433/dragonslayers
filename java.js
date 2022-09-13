warriorHp = 525;
tankHp = 647;
mageHp = 346;
healerHp = 354;
warriorAtk = 147;
tankAtk = 102;
mageAtk = 173;
healerAtk = 113;
bossHp = 25;
bossAtk = 250;
warriorLvl = 1;
wcurr = 0;
wmax = 100;
tankLvl = 1;
tcurr = 0;
tmax = 100;
mageLvl = 1;
mcurr = 0;
mmax = 100;
healerLvl = 1;
hcurr = 0;
hmax = 100;
bossLvl = 1;
wskillscd = 10;
tskillscd = 17;
mskillscd = 12;
hskillscd = 8;
xpgain = 100;

function save() {
    save = {
      warriorHp: warriorHp,
      tankHp: tankHp,
      mageHp: mageHp,
      healerHp: healerHp,
      warriorAtk: warriorAtk,
      tankAtk: tankAtk,
      mageAtk: mageAtk,
      healerAtk: healerAtk,
      bossHp: bossHp,
      bossAtk: bossAtk,
      warriorLvl: warriorLvl,
      tankLvl: tankLvl,
      mageLvl: mageLvl,
      healerLvl: healerLvl,
      bossLvl: bossLvl,
      wskillscd: wskillscd,
      tskillscd: tskillscd,
      hskillscd: hskillscd,
    }
    localStorage.setItem("save",JSON.stringify(save));
}

function load() {
  savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.warriorHp !== "undefined") warriorHp = savegame.warriorHp;
  if (typeof savegame.wskillscd !== "undefined") wskillscd = savegame.wskillscd;
  if (typeof savegame.bossHp !== "undefined") bossHp = savegame.bossHp;
  // if (typeof savegame.gen1Cost !== "undefined") gen1Cost = savegame.gen1Cost;
  // if (typeof savegame.gen1gain !== "undefined") gen1gain = savegame.gen1gain;
  // if (typeof savegame.gen2s !== "undefined") gen2s = savegame.gen2s;
  // if (typeof savegame.gen2Cost !== "undefined") gen2Cost = savegame.gen2Cost;
  // if (typeof savegame.gen2gain !== "undefined") gen2gain = savegame.gen2gain;
  // if (typeof savegame.gen3s !== "undefined") gen3s = savegame.gen3s;
  // if (typeof savegame.gen3Cost !== "undefined") gen3Cost = savegame.gen3Cost;
  // if (typeof savegame.gen3gain !== "undefined") gen3gain = savegame.gen3gain;
  // if (typeof savegame.prestigeLevel !== "undefined") prestigeLevel = savegame.prestigeLevel;
  // if (typeof savegame.prestigeCost !== "undefined") prestigeCost = savegame.prestigeCost;
}

function delSave() {
  localStorage.removeItem("save");
  location.reload();
}

function update() {
    document.getElementById("wlvl").innerText = warriorLvl;
    document.getElementById("whp").innerText = warriorHp;
    document.getElementById("watk").innerText = warriorAtk;
    document.getElementById("skills1cd").innerText = wskillscd;
    document.getElementById("bhp").innerText = bossHp;
    document.getElementById("blvl").innerText = bossLvl;
    document.getElementById("tlvl").innerText = tankLvl;
    document.getElementById("thp").innerText = tankHp;
    document.getElementById("tatk").innerText = tankAtk;
    document.getElementById("skills2cd").innerText = tskillscd;
    // document.getElementById("truearts1cd").innerText = gen1gain;
    // document.getElementById("wcurrent").innerText = gen2s;
    // document.getElementById("gen2price").innerText = gen2Cost;
    // document.getElementById("gen2add").innerText = gen2gain;
    // document.getElementById("gen3num").innerText = gen3s;
    // document.getElementById("gen3price").innerText = gen3Cost;
    // document.getElementById("gen3add").innerText = gen3gain;
    // document.getElementById("showpsec").innerText = pointPerSecond;
    // document.getElementById("showplvl").innerText = prestigeLevel;
    // document.getElementById("showplvl2").innerText = prestigeLevel;
    // document.getElementById("prescost").innerText = prestigeCost;
    bossdeath();
}

function cd1() {
  if (wskillscd == 0){
    return;
  }else{
  wskillscd -= 1;
}
}
function cd2() {
  if (tskillscd == 0){
    return;
  }else{
  tskillscd -= 1;
}
}
function cd3() {
  if (mskillscd == 0){
    return;
  }else{
  mskillscd -= 1;
}
}
function cd4() {
  if (hskillscd == 0){
    return;
  }else{
  hskillscd -= 1;
}
}
function cd() {
  cd1();
  cd2();
  cd3();
  cd4();
}

setInterval(function() {
    update();
    cd();
    // save();
  }, 1000)

function skills1() {
  if (wskillscd == 0){
  bossHp -= warriorAtk;
  wskillscd = 10;
  update();
}else{
  return}
}

function skills2() {
  if (tskillscd == 0){
  bossHp -= tankAtk;
  tskillscd = 17;
  update();
}else{
  return}
}

function xpgive() {
  wcurr = xpgain *= bossLvl;
  tcurr = xpgain *= bossLvl;
  mcurr = xpgain *= bossLvl;
  hcurr = xpgain *= bossLvl;
}
function bossdeath() {
  if (bossHp <= 0){
  xpgive();
  bossLvl += 1;
  bossHp = 2500 * bossLvl;
}else {
  return
}
}

function setting() {
    document.getElementById("settingsbox").style.display = "block";
    document.getElementById("gam2").style.display = "none";
  }

  function back() {
      document.getElementById("settingsbox").style.display = "none";
      document.getElementById("gam2").style.display = "block";
    }
