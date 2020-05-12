   var popupbuy = document.querySelector(".modal-buy-main");
   var link = document.querySelector(".login-link");
   var linkbuy = document.querySelector(".modal-buy");
   var popup= document.querySelector(".modal-login");
   var close = document.querySelector(".modal-close");
   var closebuy = document.querySelector(".modal-close-buy");
   var login= popup.querySelector("[name=login]");
   var password=popup.querySelector("[name=password]");
   var form= popup.querySelector("form")
   var storage= localStorage.getItem("login");


    form.addEventListener("submit",function(evt){
      console.log(password.value);
      console.log(password.value);
      console.log(login.value);
      console.log(password.value);
      if(!login.value || !password.value){
       evt.preventDefault();
       popup.classList.add("modal-error");
      }
      else{
        local.Storage.setItem("login",login.value);
      }
      //console.log(login.value);
      //console.log(password.value);

    });

   	link.addEventListener("click",function event(evt){
                evt.preventDefault();
                popup.classList.add("modal-show");
                if(storage){
                  login.value = storage;
                  password.focus();
                }
                else{
                  login.focus();
                }
           });

           
  close.addEventListener("click",function closepop(evt){
  		evt.preventDefault();
  		popup.classList.remove("modal-show");
  });
  
  window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
      if(popup.classList.contains("modal-show")){
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-close");
      }
    }
});

  window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
      if(popupbuy.classList.contains("modal-show")){
        popupbuy.classList.remove("modal-show");
      }
    }
  });

      linkbuy.addEventListener("click",function(evt){
      evt.preventDefault();
      popupbuy.classList.add("modal-show");
    });

      closebuy.addEventListener("click",function(evt){
    popupbuy.classList.remove("modal-show");
    popupbuy.classList.remove("modal-close");
  });