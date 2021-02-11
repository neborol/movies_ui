export const setAppTitle = (title) => {
    // Test show what environment the app is currently running on:
    console.log('Current Environ : ', process.env.NODE_ENV);

    window.addEventListener('load', (event) => {
        document.querySelector('#app-page-title').innerText = title || process.env.REACT_APP_DOC_TITLE;
    });
}

export const scrollHandler = (handleSideNav, handleTopNav) => {
    // Get the y scroll position on scroll.
    document.addEventListener('scroll', function(e) {
        // Getting the scroll-y position in a cross-browser way, requires the use of "window.pageYOffset" and not "window.scrollY"
        var supportPageOffset = window.pageXOffset !== undefined; // Check if pageOffset is supported by the browser
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");  // Check if the CSS1Compat mode fallback is supported

        var y_offset = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        // console.log(Math.floor(y_offset));
        if (y_offset > 60) {
            handleSideNav();
        } else {
            handleTopNav();
        }
    });
}

// export const scrollHandler = (scroll_pos) => {
//     // window.addEventListener('scroll', (event) => {
//     //     // document.querySelector('#app-page-title').innerText = title;
//     //     console.log('Scrolling');
//     // });

//     // let last_known_scroll_position = 0;
//     let ticking = false;

//     function doSomething(s_pos) {
//         // Do something with the scroll position
//         console.log(s_pos);
//     }

//     document.addEventListener('scroll', function(e) {
//         // last_known_scroll_position = window.scrollY;
//         console.log(scroll_pos);
//         // if (!ticking) {
//         //     window.requestAnimationFrame(function() {
//         //     doSomething(scroll_pos);
//         //     ticking = false;
//         //     });

//         //     ticking = true;
//         // }
//     });
// }