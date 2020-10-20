const authenticated = sessionStorage.getItem('authenticated');

if (!authenticated) {
  location.replace("./views/login.html")
};