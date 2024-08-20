//HOMEINDEX OG ALLE SIDER SCRIPT GJENSIDIGE SCRIPT

// GET ELEMENTS (Navbaren)
const navbar = document.getElementById('navbar-nav');
const toggle = document.getElementById('navbar-toggle');

// TRYKKE PÅ MENYEN (Navbar dottene)
if(toggle) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    toggle.classList.toggle('show')
  })
}

// SKJULE MENYEN (Navbar dottene)
if(navbar) {
  navbar.addEventListener('click', () => {
    navbar.classList.remove('show');
    toggle.classList.remove('show');
  })
}

//ANDRE SIDER


//LOGIN SIDE/Opprett Bruker SCRIPT
// Opprett Bruker Funksjonalitet til nybruker.html  
function opprettBruker(){
  let brukernavn = document.forms["formOpprettBruker"]["iptBrukernavn"].value;
  let passord = document.forms["formOpprettBruker"]["iptPassord"].value;
  localStorage.setItem(brukernavn, passord);
  alert ("Brukeren er nå opprettet, og du kan nå logge inn på min side");  
  location.href = 'login.html';
  document.getElementById("test").innerHTML = localStorage.getItem("passord");
}


  "use strict";
       
  function login(){
  let loginBrukerNavn = document.forms["loginForm"]["iptBrukernavn"].value;
  let loginPassord = document.forms["loginForm"]["iptPassord"].value;
       
  if(localStorage.getItem(loginBrukerNavn) === loginPassord){
  let nyA = document.createElement("a");
  nyA.href = "dinside.html";
  sessionStorage.setItem("brukernavn", document.forms["loginForm"]["iptBrukernavn"].value);
  nyA.click();
   }
    else{
        alert("Du har skrevet e-post eller passord feil, eller begge deler. Vennligst prøv igjen, eller registrer en ny bruker");
       
   // Slett intastet data i formen
  document.forms["loginForm"]["iptBrukernavn"].value = "";
  document.forms["loginForm"]["iptPassord"].value = "";
         }            
                  }  
                  
    //Ved Innlogget på Din-Side + få brukernavnet             
    "use strict";
    
    document.getElementById("bruker").innerHTML = sessionStorage.getItem("brukernavn");
    document.getElementById("bruker2").innerHTML = sessionStorage.getItem("brukernavn");


    // Knapp for å slette bruker / localstorage
    function deleteItems() {
      localStorage.clear();
    }



  //FORMS JS - Bestillingside
  //Funksjon for Destinasjoner ved Bestillingside
  //Kommentar: Fikk ikke nok tid til å lage ferdig JavaScript Form Validation for Destinasjonsvalg

  //Querystring for bekreftende melding ved bestilling
    const querystring = new URLSearchParams(window.location.search);
      let destinasjonfra = querystring.get("destinasjonfra");
      let destinasjontil = querystring.get("destinasjontil");
      let depdate = querystring.get("depdate");
      let arrdate = querystring.get("arrdate");
        
      document.getElementById("destinasjon_fra").innerHTML = destinasjonfra;
      document.getElementById("destinasjon_til").innerHTML = destinasjontil;
      document.getElementById("destinasjon_til1").innerHTML = destinasjontil;
      document.getElementById("dep-date").innerHTML = depdate;
      document.getElementById("dep_date1").innerHTML = depdate;
      document.getElementById("arr-date").innerHTML = arrdate;


  // Alerts - JS Kode

  function alert1() {
    alert("Brukeren er nå slettet, husk at du alltid kan opprette en ny om du ombestemmer deg ;)");
  }

