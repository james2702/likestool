// ==UserScript==
// @name         Likes Tool
// @version      0.3
// @description  Clicks links on the KML website section automatically.
// @author       james adams
// @match        *://likestool.com/campaign*
// @match        *://likestool.com/campaign/SOUNDCLOUD_LISTEN*
// @match        *://likestool.com/campaign/VIMEO_VIDEO_PLAYS*
// @match        *://likestool.com/campaign/YOUTUBE_VIEWS*
// @match        *://likestool.com/campaign/DAILYMOTION_VIEWS*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==

(() => {
    J = jQuery.noConflict(true);
    let previousVideo = "";
    setInterval(() => {
        if (J("*:contains('503 Service Unavailable')").length) {
            console.log("Server Error! reloading...");
            location.reload();        
        } else {
                switch (document.location.pathname) {
                    case "/campaign/YOUTUBE_VIEWS":
                        if (J('body:contains("failed")').length) alert("What exaxtly failed???");
                            if (window) {
                                let vidID = () => { return document.querySelector("#campaign-container > div:nth-child(1) > div > p.like-txt.like-txt-light").innerHTML; };
                                let patienceKiller = (prev) => { setTimeout( () => { if (vidID() == prev) { document.querySelector("#skip-container > a").click(); newWin.close(); }}, 1000 * 55)};
                                if (vidID() != previousVideo) {
                                previousVideo = vidID();
                            if (window.eval("typeof(window.newWin) !== 'undefined'")) {
                                if (newWin.closed) {
                           console.log("Like one Video!");
                    let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                            patienceKiller(previousVideo)
                                }

                            } else {
                             console.log("Like one Video!");
                                
                     let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                        patienceKiller(previousVideo)
                            }
                                        }
                            }
                       break;
                    case "/campaign/DAILYMOTION_VIEWS":
                        if (J('body:contains("failed")').length) alert("What exaxtly failed???");
                            if (window) {
                                let vidID = () => { return document.querySelector("#campaign-container > div:nth-child(1) > div > p.like-txt.like-txt-light").innerHTML; };
                                let patienceKiller = (prev) => { setTimeout( () => { if (vidID() == prev) { document.querySelector("#skip-container > a").click(); newWin.close(); }}, 1000 * 55)};
                                if (vidID() != previousVideo) {
                                previousVideo = vidID();
                            if (window.eval("typeof(window.newWin) !== 'undefined'")) {
                                if (newWin.closed) {
                           console.log("Like one Video!");
                    let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                              patienceKiller(previousVideo)
                                }
                                }
                            } else {
                             console.log("Like one Video!");
                     let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                           patienceKiller(previousVideo)
                            }
                                }
                       break;
                    case "/campaign/VIMEO_VIDEO_PLAYS":
                        if (J('body:contains("failed")').length) alert("What exaxtly failed???");
                            if (window) {
                                let vidID = () => { return document.querySelector("#campaign-container > div:nth-child(1) > div > p.like-txt.like-txt-light").innerHTML; };
                                let patienceKiller = (prev) => { setTimeout( () => { if (vidID() == prev) { document.querySelector("#skip-container > a").click(); newWin.close(); }}, 1000 * 55)};
                                if (vidID() != previousVideo) {
                                previousVideo = vidID();
                            if (window.eval("typeof(window.newWin) !== 'undefined'")) {
                                if (newWin.closed) {
                           console.log("Like one Video!");
                    let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                         patienceKiller(previousVideo)
                                }
                                }
                            } else {
                             console.log("Like one Video!");
                     let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                         patienceKiller(previousVideo)
                            }
                                }
                       break;
                    case "/campaign/SOUNDCLOUD_LISTEN":
                        if (J('body:contains("failed")').length) alert("What exaxtly failed???");
                            if (window.eval("typeof(window.newWin) !== 'undefined'")) {
                                if (newWin.closed) {
                           console.log("Like one Video!");
                    let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                    setTimeout(function(){ newWin.close(); }, 32000);

                                }
                            } else {
                             console.log("Like one Video!");
                     let voo = document.querySelector("#campaign-container > div:nth-child(1) > div > div.form-inline.like-buttons > a")
                              voo.click();
                     setTimeout(function(){ newWin.close(); }, 32000);
                            }
                       break;
                }
        }
    }, 5000);
})();
