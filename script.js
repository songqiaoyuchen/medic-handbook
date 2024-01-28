window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

function toggleNav(x) {
  var sideNav = document.getElementById("sideNav")
  if(sideNav.style.width === "0px" || !sideNav.style.width) {
    sideNav.style.width = "200px";
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
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    if(document.getElementById("sideNav").style.width !== "0px") {
      document.getElementById("sideNav").style.width = "0px";
      document.getElementById("navbarToggler").classList.toggle("change")
      document.getElementById("sideNav").classList.toggle("show-sidenav");
    }
  }else{
    pageDir.style.width = "0px";
    dirToggler.src = "./assets/icons/bookmarks.svg";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  pageDir.classList.toggle("show-dir-border");
}

function toggleRefDropdown() {
  if(document.getElementById("refDropdown").style.height === "175.56px"){
    document.getElementById("refDropdown").style.height = "0px"
  }else{
    document.getElementById("refDropdown").style.height = "175.56px";
  }
}

function toggleGuideDropdown() {
  if(document.getElementById("guideDropdown").style.height === "175.56px"){
    document.getElementById("guideDropdown").style.height = "0px"
  }else{
    document.getElementById("guideDropdown").style.height = "175.56px";
  }
}

function toggleAdminDropdown() {
  if(document.getElementById("adminDropdown").style.height === "122.38px"){
    document.getElementById("adminDropdown").style.height = "0px"
  }else{
    document.getElementById("adminDropdown").style.height = "122.38px";
  }
}

function toggleZollDropdown1() {
  if(document.getElementById("zollDropdown1").style.height === "175.56px"){
    document.getElementById("zollDropdown1").style.height = "0px"
  }else{
    document.getElementById("zollDropdown1").style.height = "175.56px";
  }
}

function toggleZollDropdown2() {
  if(document.getElementById("zollDropdown2").style.height === "494.69px"){
    document.getElementById("zollDropdown2").style.height = "0px"
  }else{
    document.getElementById("zollDropdown2").style.height = "494.69px";
  }
}

function toggleZollDropdown3() {
  if(document.getElementById("zollDropdown3").style.height === "547.88px"){
    document.getElementById("zollDropdown3").style.height = "0px"
  }else{
    document.getElementById("zollDropdown3").style.height = "547.88px";
  }
}

function toggleZollDropdown4() {
  if(document.getElementById("zollDropdown4").style.height === "228.75px"){
    document.getElementById("zollDropdown4").style.height = "0px"
  }else{
    document.getElementById("zollDropdown4").style.height = "228.75px";
  }
}

  
  