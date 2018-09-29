'use strict';

document.addEventListener('DOMContentLoaded', function(){
var menuButton = document.querySelector('.for-dropdown');
var SubMenu = document.querySelector('.dropdown');

menuButton.addEventListener('mouseover',function(){
SubMenu.style.display = 'block';
});
menuButton.addEventListener('mouseout',function(){
 SubMenu.style.display = 'none';
});

});
