window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})

function toggleNav(self) {
    if(document.getElementById("sideNav").style.width === "0px"){
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    }else{
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    self.classList.toggle("change");
    document.getElementById("sideNav").classList.toggle("show-sidenav");
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

  
  