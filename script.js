function toggleNav(x) {
    if(document.getElementById("sideNav").style.width === "0px"){
      document.getElementById("sideNav").style.width = "200px";
      document.getElementsByTagName("main")[0].style.overflow = "hidden"
      document.getElementsByTagName("main")[0].style.height = "100vh"
    }else{
      document.getElementById("sideNav").style.width = "0px";
      document.getElementsByTagName("main")[0].style.overflow = "scroll;"
      document.getElementsByTagName("main")[0].style.height = "auto"
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