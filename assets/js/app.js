document.addEventListener('DOMContentLoaded', () => {
    var subMenusLink = document.querySelectorAll('.has-sub-menu')
    console.log(subMenusLink)

    subMenusLink.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.parentNode.querySelector('.sub-menu').classList.add('show')
        })

        setTimeout(() => {
            link.addEventListener('mouseleave', () => {
                link.parentNode.querySelector('.sub-menu').classList.remove('show')
            })
            console.log('Hello');
        }, 500);
    })

    var subMenus = document.querySelectorAll('.sub-menu')
    subMenus.forEach(menu => {
        menu.addEventListener('mouseover', () => {
            menu.classList.add('show')
        })

        menu.addEventListener('mouseleave', () => {
            menu.classList.remove('show')
        })
    })
})