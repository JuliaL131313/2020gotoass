let happyDiv = document.querySelector('.happyDiv');
let happy = document.querySelector('.happy');
let vitaemo = document.querySelector('.vitaemo');
let back = document.querySelector('.back');


happy.addEventListener('click', function () {
   happyDiv.style.display = 'none';
   vitaemo.style.display = 'block';
});


back.addEventListener('click', function () {
   happyDiv.style.display = 'block';
   vitaemo.style.display = 'none';
});