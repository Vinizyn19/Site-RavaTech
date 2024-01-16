let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

function showInfo(type) {
    switch (type) {
        case 'clientes':
            alert('140+ Clientes atendidos');
            break;
        case 'experiencia':
            alert('+05 Anos de experiência');
            break;
        case 'sites':
            alert('+182 Sites desenvolvidos');
            break;
        default:
            break;
    }
}