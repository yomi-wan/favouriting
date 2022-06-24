//schedule id adding for faves
$(document).ready(function(){
	$('#favList .w-dyn-item').each(function() {
    var favwrap = $(this).find('.fav-btn')
    favwrap.attr('id', favwrap.next('.idtext').text());
  }); 
});

//fav code
$(document).ready(function(){
// get favorites from local storage or empty array
var newfavorites = JSON.parse(localStorage.getItem('newfavorites')) || [];
// add class 'fav' to each favorite
newfavorites.forEach(function(newfavorite) {
let element = document.getElementById(newfavorite);
	if (element) {
		element.classList.add('fav');
        if (element.parent( ".w-dyn-item" ).classList.contains('only-fav')){
            element.parent( ".w-dyn-item" ).style.display = "block";
        }
	}
});

// register click event listener on fav-btn only
const events = document.querySelectorAll('#favList .w-dyn-item');
events.forEach(function(event) {
event.addEventListener('click', function() {
  var id = event.id,
      index = newfavorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    newfavorites.push(id);
    event.classList.add('fav');
    if (event.parent( ".w-dyn-item" ).classList.contains('only-fav')){
        event.parent( ".w-dyn-item" ).style.display = "block";
    }
  // item is already favorite
  } else {
    newfavorites.splice(index, 1);
    event.classList.remove('fav');
    if (event.parent( ".w-dyn-item" ).classList.contains('only-fav')){
        event.parent( ".w-dyn-item" ).style.display = "none";
    }
  }
  // store array in local storage
  localStorage.setItem('newfavorites', JSON.stringify(newfavorites));
});
});
});
// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
