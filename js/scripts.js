import { InfoCookies } from "./modules/InfoCookies.js";

const infoCookie = new InfoCookies;

const closeLink = document.querySelector('.close');

closeLink.addEventListener('click', (event) => {

    event.preventDefault();

    infoCookie.setCookie();

})