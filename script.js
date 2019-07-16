
/*
 *  Snippet to animate blocks in a grid
 *  Click the grid to rotate and shrink the blocks
 *
 *  style.css has class selector that transforms the blocks
 *    .spinOut {}
 *  script below adds the class to the block elements
 *  when the grid is clicked
 *  
 */

 /*  
  *  handler for trasitionend event
  *  Remove the .spinOut class after each block has transitioned 
  *  Prevent a second round of calls by removing the event listener
  */
function removeSpinOut(e) {
  e.target.classList.remove('spinOut');
  e.target.removeEventListener('transitionend',removeSpinOut);
}

const grid = document.querySelector('.tiles');
grid.addEventListener('click', function(e) {
  /* they know what to do from now on */
  const instrElmnt = document.getElementById('instruct');
  instrElmnt.classList.add('hide');
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(item => item.classList.add('spinOut'));
  tiles.forEach(item => item.addEventListener(
      'transitionend', removeSpinOut
      )
  );
});



