const loader = document.querySelector('.loader');
const contentLoad = document.querySelector('.headerLoad');

function init () {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        contentLoad.style.display = 'block';
        setTimeout(() => contentLoad.style.opacity = 1, 50);
        
    }, 4000)
}

init ();