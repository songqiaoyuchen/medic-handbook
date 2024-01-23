window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

function toggleNav(x) {
    if(document.getElementById("sideNav").style.width === "0px"){
      document.getElementById("sideNav").style.width = "200px";
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    }else{
      document.getElementById("sideNav").style.width = "0px";
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    x.classList.toggle("change");
  }

  function toggleDropdown1(x) {
    if(document.getElementById("firstDrop").style.height === "0px"){
      document.getElementById("firstDrop").style.height = "113px"
    }else{
      document.getElementById("firstDrop").style.height = "0px";
    }
  }

  function toggleDropdown2(x) {
    if(document.getElementById("secondDrop").style.height === "0px"){
      document.getElementById("secondDrop").style.height = "113px"
    }else{
      document.getElementById("secondDrop").style.height = "0px";
    }
  }

  function toggleDropdown3(x) {
    if(document.getElementById("thirdDrop").style.height === "0px"){
      document.getElementById("thirdDrop").style.height = "113px"
    }else{
      document.getElementById("thirdDrop").style.height = "0px";
    }
  }

  
  