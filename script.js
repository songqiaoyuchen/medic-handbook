var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function toggleNav(x) {
    if(document.getElementById("sideNav").style.width === "0px"){
      document.getElementById("sideNav").style.width = "200px";
      disableScroll()
    }else{
      document.getElementById("sideNav").style.width = "0px";
      document.getElementsByTagName("main")[0].style.height = "auto"
      enableScroll()
    }
    x.classList.toggle("change");
  }

  function toggleDropdown1(x) {
    if(document.getElementById("firstDrop").style.height === "0px"){
      document.getElementById("firstDrop").style.height = "120px"
    }else{
      document.getElementById("firstDrop").style.height = "0px";
    }
  }

  function toggleDropdown2(x) {
    if(document.getElementById("secondDrop").style.height === "0px"){
      document.getElementById("secondDrop").style.height = "120px"
    }else{
      document.getElementById("secondDrop").style.height = "0px";
    }
  }

  function toggleDropdown3(x) {
    if(document.getElementById("thirdDrop").style.height === "0px"){
      document.getElementById("thirdDrop").style.height = "80px"
    }else{
      document.getElementById("thirdDrop").style.height = "0px";
    }
  }

  
  