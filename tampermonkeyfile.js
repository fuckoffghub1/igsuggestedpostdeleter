// ==UserScript==
// @name         FUCK IG SUGGESTED POSTS
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-hides suggested posts in your IG feed.
// @match https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fuckEmAll() {
        // 1. Get ALL <span> elements on the page.
        const allSpans = document.querySelectorAll('span');

        // 2. Iterate through all spans to find those with the specific text.
        allSpans.forEach(span => {
            if (span.textContent.includes("Suggested for you")) {
                // 3. For the matching span, find its nearest parent <article>.
                const parentArticle = span.closest('article');

                if (parentArticle) {
                    // 4. Hide the targeted article.
                    parentArticle.style.opacity = '0';
                    console.log('Hidden article containing "Suggested for you".');
                }
            }
        });
    }

    setInterval(() => {
        fuckEmAll();
    }, 500);
})();
