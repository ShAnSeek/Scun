var footer_icon = document.getElementsByClassName('footer-icon')[0];
var footerFls = footer_icon.getElementsByClassName('fl');
console.log(footer_icon)
for (var i = 0; i < footerFls.length; i++) {
    footerFls[i].onmouseover = function () {
        for (var j = 0; j < footerFls.length; j++) {
            footerFls[j].children[0].className = "ewm";
        }
        this.children[0].className = "ewm show";
    }
    footerFls[i].onmouseout = function () {
        for (var j = 0; j < footerFls.length; j++) {
            footerFls[j].children[0].className = "ewm";
        }
    }
}