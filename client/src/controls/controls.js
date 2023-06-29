export function navPosition(){
    const nav = document.querySelector('#navbarNav');
    if(nav.classList.contains('position-absolute')){
        nav.classList.replace('position-absolute','position-relative');
    }
    else if(window.screen.width<575){
        nav.classList.replace('position-relative','position-absolute');
    }
}