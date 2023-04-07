
export const inView = (element) => {
    // get window height
    let windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    let scrollY = window.scrollY || window.pageYOffset;

    let elementHeight = element.clientHeight;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    let scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    let elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
};

export const listener = (id, state) => {
    let element = document.getElementById(id);
    window.addEventListener('scroll', () => {
        if (inView(element)) {
            state(true);
        }
        else {
            state(false);
        }
    });
};
