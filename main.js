const btnBars = document.querySelector('.btn-bars-mobile');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;


btnBars.onclick = () => {

  var isClose = header.clientHeight === headerHeight;

  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}


var menuItems = document.querySelectorAll('a[href*="#"]');
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && 
                            this.nextElementSibling.classList.contains('sub-nav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}