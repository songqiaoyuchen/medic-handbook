window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

function toggleNav(x) {
  var sideNav = document.getElementById("sideNav")
  if(sideNav.style.width === "0px" || !sideNav.style.width) {
    sideNav.style.width = "230px";
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    if(document.getElementById("pageDir").style.width !== "0px") {
      document.getElementById("pageDir").style.width = "0px";
      document.getElementById("dirToggler").src = "./assets/icons/bookmarks.svg";
      document.getElementById("pageDir").classList.toggle("show-dir-border")
    }
  }else{
    sideNav.style.width = "0px";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  sideNav.classList.toggle("show-sidenav");
  x.classList.toggle("change");
}

function toggleDir(x) {
  var pageDir = document.getElementById("pageDir")
  var dirToggler = document.getElementById("dirToggler")
  if (pageDir.style.width === "0px" || !pageDir.style.width) {
    pageDir.style.width = "300px";
    dirToggler.src = "./assets/icons/bookmarks-fill.svg";
    if(document.getElementById("sideNav").style.width !== "0px") {
      document.getElementById("sideNav").style.width = "0px";
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      document.getElementById("navbarToggler").classList.toggle("change")
      document.getElementById("sideNav").classList.toggle("show-sidenav");
    }
  }else{
    pageDir.style.width = "0px";
    dirToggler.src = "./assets/icons/bookmarks.svg";
  }
  pageDir.classList.toggle("show-dir-border");
}

function toggleRefDropdown(x) {
  if(document.getElementById("refDropdown").style.height === "175.56px"){
    document.getElementById("refDropdown").style.height = "0px"
  }else{
    document.getElementById("refDropdown").style.height = "175.56px";
  }
  x.classList.toggle("change")
}

function toggleGuideDropdown(x) {
  if(document.getElementById("guideDropdown").style.height === "175.56px"){
    document.getElementById("guideDropdown").style.height = "0px"
  }else{
    document.getElementById("guideDropdown").style.height = "175.56px";
  }
  x.classList.toggle("change")
}

function toggleAdminDropdown(x) {
  if(document.getElementById("adminDropdown").style.height === "122.38px"){
    document.getElementById("adminDropdown").style.height = "0px"
  }else{
    document.getElementById("adminDropdown").style.height = "122.38px";
  }
  x.classList.toggle("change")
}

//ZOLL DROPDOWNS
function toggleZollDropdown1(x) {
  if(document.getElementById("zollDropdown1").style.height === "175.56px"){
    document.getElementById("zollDropdown1").style.height = "0px"
  }else{
    document.getElementById("zollDropdown1").style.height = "175.56px";
  }
  x.classList.toggle("change")
}

function toggleZollDropdown2(x) {
  if(document.getElementById("zollDropdown2").style.height === "494.69px"){
    document.getElementById("zollDropdown2").style.height = "0px"
  }else{
    document.getElementById("zollDropdown2").style.height = "494.69px";
  }
  x.classList.toggle("change")
}

function toggleZollDropdown3(x) {
  if(document.getElementById("zollDropdown3").style.height === "547.88px"){
    document.getElementById("zollDropdown3").style.height = "0px"
  }else{
    document.getElementById("zollDropdown3").style.height = "547.88px";
  }
  x.classList.toggle("change")
}

function toggleZollDropdown4(x) {
  if(document.getElementById("zollDropdown4").style.height === "228.75px"){
    document.getElementById("zollDropdown4").style.height = "0px"
  }else{
    document.getElementById("zollDropdown4").style.height = "228.75px";
  }
  x.classList.toggle("change")
}

function toggleInpageZollDropdown1(x) {
  if(document.getElementById("zollInpageDropdown1").style.height === "175.56px"){
    document.getElementById("zollInpageDropdown1").style.height = "0px";
  }else{
    document.getElementById("zollInpageDropdown1").style.height = "175.56px";
  }
  x.classList.toggle("change")
}

function toggleInpageZollDropdown2(x) {
  if(document.getElementById("zollInpageDropdown2").style.height === "494.69px"){
    document.getElementById("zollInpageDropdown2").style.height = "0px"
  }else{
    document.getElementById("zollInpageDropdown2").style.height = "494.69px";
  }
  x.classList.toggle("change")
}

function toggleInpageZollDropdown3(x) {
  if(document.getElementById("zollInpageDropdown3").style.height === "547.88px"){
    document.getElementById("zollInpageDropdown3").style.height = "0px"
  }else{
    document.getElementById("zollInpageDropdown3").style.height = "547.88px";
  }
  x.classList.toggle("change")
}

function toggleInpageZollDropdown4(x) {
  if(document.getElementById("zollInpageDropdown4").style.height === "228.75px"){
    document.getElementById("zollInpageDropdown4").style.height = "0px"
  }else{
    document.getElementById("zollInpageDropdown4").style.height = "228.75px";
  }
  x.classList.toggle("change")
}

//ZOLL SCROLLS
function scrollToFP() {
  const element = document.getElementById("FP");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToDS() {
  const element = document.getElementById("DS");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToQAK() {
  const element = document.getElementById("QAK");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZUC() {
  const element = document.getElementById("ZUC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZBC() {
  const element = document.getElementById("ZBC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZPT() {
  const element = document.getElementById("ZPT");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZAC() {
  const element = document.getElementById("ZAC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToDST() {
  const element = document.getElementById("DST");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZSC() {
  const element = document.getElementById("ZSC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZNC() {
  const element = document.getElementById("ZNC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZEC() {
  const element = document.getElementById("ZEC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToTT() {
  const element = document.getElementById("TT");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToCPM() {
  const element = document.getElementById("CPM");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToRZB() {
  const element = document.getElementById("RZB");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToCDT() {
  const element = document.getElementById("CDT");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToPAP() {
  const element = document.getElementById("PAP");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToABPC() {
  const element = document.getElementById("ABPC");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToSAIB() {
  const element = document.getElementById("SAIB");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToVPV() {
  const element = document.getElementById("VPV");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToPTS() {
  const element = document.getElementById("PTS");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToP12E() {
  const element = document.getElementById("P12E");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToTEH() {
  const element = document.getElementById("TEH");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToSE() {
  const element = document.getElementById("SE");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToBE() {
  const element = document.getElementById("BE");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToEE() {
  const element = document.getElementById("EE");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToFT() {
  const element = document.getElementById("FT");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

function scrollToZollRef() {
  const element = document.getElementById("ZollRef");
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

//SCROLL
function scrollToID(ID) {
  const element = document.getElementById(ID);
  element.scrollIntoView();
  window.scrollBy(0, -95.19)
}

//DROPDOWNS
function toggleDropdown(x, n){
  var dropdown = x.nextElementSibling;
  var h = Math.round(53.19 * n + 16) + 'px';
  console.log(h)

  if(dropdown.style.height === '0px'){
    dropdown.style.height = h;
    console.log(1)
  } else if(dropdown.style.height === h){
    dropdown.style.height = '0px';
    console.log(0)
  }
  x.classList.toggle("change")
}