














document.getElementById('toggle').addEventListener('click', function () {
    const body = document.body
    const page = document.querySelector('.page')
    const introduction = document.querySelector('.introduction')
    const navbar = document.querySelector('.page__navbar')
    const whitebutton = document.querySelector('.button')
    const sections = document.querySelectorAll('.section')
    const cardcontents = document.querySelectorAll('.card__content')
    const loadmore = document.querySelector('.loadmore')
    const footer = document.querySelector('.footer')
    const cardicons = document.querySelectorAll('.card__icon')

    const linkedins = document.querySelectorAll('#linkedin')
    const instas = document.querySelectorAll('#insta')
    const dribbles = document.querySelectorAll('#dribble')
    const githubs = document.querySelectorAll('#github')
    const download = document.querySelectorAll('#download')
    const github_modifier = document.querySelector('.github--modifier')
    const gitlab_modifier=document.querySelector('.gitlab--modifier')
    if (footer.classList.contains('footer__white')) {
        github_modifier.classList.add('github--modifier__dark')
        gitlab_modifier.classList.add('gitlab--modifier__dark')
        cardicons.forEach((cardicon) => {
            cardicon.classList.add('marketplace__dark')
        })
        gitlab_modifier.classList.add('git')

        linkedins.forEach((linkedin) => {
            linkedin.src = './Assets/tag/bx_bxl-linkedin-dark.svg'
        })
        instas.forEach((insta) => {
            insta.src = './Assets/tag/insta__dark.svg'
        })
        dribbles.forEach((dribble) => {
            dribble.src = './Assets/tag/dribble__dark.svg'
        })
        githubs.forEach((github) => {
            github.src = './Assets/tag/github__dark.svg'
        })

        download.src = './Assets/tag/dark__downlaod.svg'

        footer.classList.remove('footer__white')
        footer.classList.add('loadmorfooter__dark')
    } else {
        github_modifier.classList.remove('github--modifier__dark')
        cardicons.forEach((cardicon) => {
            cardicon.classList.remove('marketplace__dark')
        })

        linkedins.forEach((linkedin) => {
            linkedin.src = './Assets/tag/bx_bxl-linkedin.svg'
        })
        instas.forEach((insta) => {
            insta.src = './Assets/tag/Group2041.svg'
        })
        dribbles.forEach((dribble) => {
            dribble.src = './Assets/tag/Vector.svg'
        })
        githubs.forEach((github) => {
            github.src = './Assets/tag/Frame18(1).svg'
        })

        download.src = './Assets/download.png'

        footer.classList.remove('footer__dark')
        footer.classList.add('footer__white')
    }

    if (loadmore.classList.contains('loadmore__white')) {
        loadmore.classList.remove('loadmore__white')
        loadmore.classList.add('loadmore__dark')
    } else {
        loadmore.classList.remove('loadmore__dark')
        loadmore.classList.add('loadmore__white')
    }

    cardcontents.forEach((cardcontent) => {
        if (cardcontent.classList.contains('card__content__white')) {
            cardcontent.classList.remove('card__content__white')
            cardcontent.classList.add('card__content__dark')
        } else {
            cardcontent.classList.remove('card__content__dark')
            cardcontent.classList.add('card__content__white')
        }
    })

    sections.forEach((section) => {
        if (section.classList.contains('section__white')) {
            section.classList.remove('section__white')
            section.classList.add('section__dark')
        } else {
            section.classList.remove('section__dark')
            section.classList.add('section__white')
        }
    })

    if (whitebutton.classList.contains('white__button')) {
        whitebutton.classList.remove('white__button')
        whitebutton.classList.add('dark__button')
    } else {
        whitebutton.classList.remove('dark__button')
        whitebutton.classList.add('white__button')
    }
    if (navbar.classList.contains('page__navbar__white')) {
        navbar.classList.remove('page__navbar__white')
        navbar.classList.add('page__navbar__dark')
    } else {
        navbar.classList.remove('page__navbar__dark')
        navbar.classList.add('page__navbar__white')
    }
    if (introduction.classList.contains('introduction__white')) {
        introduction.classList.remove('introduction__white')
        introduction.classList.add('introduction__dark')
    } else {
        introduction.classList.remove('introduction__dark')
        introduction.classList.add('introduction__white')
    }

    if (page.classList.contains('white')) {
        page.classList.remove('white')
        page.classList.add('dark')
    } else {
        page.classList.remove('dark')
        page.classList.add('white')
    }

    if (body.classList.contains('primary__button__white')) {
        body.classList.remove('primary__button__white')
        body.classList.add('primary__button__dark')
    } else {
        body.classList.remove('primary__button__dark')
        body.classList.add('primary__button__white')
    }
})

console.log(' it is loaded')

document.getElementById('togglemobile').addEventListener('click', function () {

    const body = document.body
    const page = document.querySelector('.page')
    const introduction = document.querySelector('.introduction')
    const navbar = document.querySelector('.page__navbar')
    const whitebutton = document.querySelector('.button')
    const sections = document.querySelectorAll('.section')
    const cardicons = document.querySelectorAll('.card__icon')

    const loadmore = document.querySelector('.loadmore')
    const footer = document.querySelector('.footer')
    const buttonmodifier = document.querySelector('.menu')
    const cardcontents = document.querySelectorAll('.card__content')

    const linkedins = document.querySelectorAll('#linkedin')
    const instas = document.querySelectorAll('#insta')
    const dribbles = document.querySelectorAll('#dribble')
    const githubs = document.querySelectorAll('#github')
    const download = document.querySelector('#download')
    const gitlab_modifier=document.querySelector('.gitlab--modifier')
    const github_modifier = document.querySelector('.github--modifier')

    if (footer.classList.contains('footer__white')) {
        github_modifier.classList.add('github--modifier__dark')
        gitlab_modifier.classList.add('gitlab--modifier__dark')
        cardicons.forEach((cardicon) => {
            cardicon.classList.add('marketplace__dark')
        })

        footer.classList.remove('footer__white')
        footer.classList.add('loadmorfooter__dark')
        buttonmodifier.classList.add('button--modifier__dark')

        linkedins.forEach((linkedin) => {
            linkedin.src = './Assets/tag/bx_bxl-linkedin-dark.svg'
        })
        instas.forEach((insta) => {
            insta.src = './Assets/tag/insta__dark.svg'
        })
        dribbles.forEach((dribble) => {
            dribble.src = './Assets/tag/dribble__dark.svg'
        })
        githubs.forEach((github) => {
            github.src = './Assets/tag/github__dark.svg'
        })

        download.src = './Assets/tag/dark__downlaod.svg'
    } else {
        github_modifier.classList.remove('github--modifier__dark')
        gitlab_modifier.classList.remove('gitlab--modifier__dark')
        cardicons.forEach((cardicon) => {
            cardicon.classList.remove('marketplace__dark')
        })

        buttonmodifier.classList.remove('button--modifier__dark')
        linkedins.forEach((linkedin) => {
            linkedin.src = './Assets/tag/bx_bxl-linkedin.svg'
        })
        instas.forEach((insta) => {
            insta.src = './Assets/tag/Group2041.svg'
        })
        dribbles.forEach((dribble) => {
            dribble.src = './Assets/tag/Vector.svg'
        })
        githubs.forEach((github) => {
            github.src = './Assets/tag/Frame18(1).svg'
        })

        download.src = './Assets/download.png'

        footer.classList.remove('footer__dark')
        footer.classList.add('footer__white')
    }

    if (loadmore.classList.contains('loadmore__white')) {
        loadmore.classList.remove('loadmore__white')
        loadmore.classList.add('loadmore__dark')
    } else {
        loadmore.classList.remove('loadmore__dark')
        loadmore.classList.add('loadmore__white')
    }

    cardcontents.forEach((cardcontent) => {
        if (cardcontent.classList.contains('card__content__white')) {
            cardcontent.classList.remove('card__content__white')
            cardcontent.classList.add('card__content__dark')
        } else {
            cardcontent.classList.remove('card__content__dark')
            cardcontent.classList.add('card__content__white')
        }
    })

    sections.forEach((section) => {
        if (section.classList.contains('section__white')) {
            section.classList.remove('section__white')
            section.classList.add('section__dark')
        } else {
            section.classList.remove('section__dark')
            section.classList.add('section__white')
        }
    })

    if (whitebutton.classList.contains('white__button')) {
        whitebutton.classList.remove('white__button')
        whitebutton.classList.add('dark__button')
    } else {
        whitebutton.classList.remove('dark__button')
        whitebutton.classList.add('white__button')
    }
    if (navbar.classList.contains('page__navbar__white')) {
        navbar.classList.remove('page__navbar__white')
        navbar.classList.add('page__navbar__dark')
    } else {
        navbar.classList.remove('page__navbar__dark')
        navbar.classList.add('page__navbar__white')
    }
    if (introduction.classList.contains('introduction__white')) {
        introduction.classList.remove('introduction__white')
        introduction.classList.add('introduction__dark')
    } else {
        introduction.classList.remove('introduction__dark')
        introduction.classList.add('introduction__white')
    }

    if (page.classList.contains('white')) {
        page.classList.remove('white')
        page.classList.add('dark')
    } else {
        page.classList.remove('dark')
        page.classList.add('white')
    }

    if (body.classList.contains('primary__button__white')) {
        body.classList.remove('primary__button__white')
        body.classList.add('primary__button__dark')
    } else {
        body.classList.remove('primary__button__dark')
        body.classList.add('primary__button__white')
    }
})
