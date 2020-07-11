// newslatter
function newslatter(e){
    const modal = document.getElementById('newspai');
            modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'newspai' || e.target.id == 'fecharnews'){
            modal.classList.remove('mostrar')
        };
    })
    
}