(async () => {
    class renamedVar266 {
        constructor() {
            this.developer = "Raga Games";
            this.gameModes = [];
            this.skins = [];
            this.shops = [];
            this.agarioSkins = [];
            this.gameMode = null;
            this.pendingGameMode = null;
            this.isClean = false;
            this.isIgnoringTeams = false;
            this.isSwitchingGameMode = false;
            this.isUiRefreshed = false;
            this.isSetup = false;
            this.isLogged = false;
            this.isAuthSent = false;
            this.profileImage = null;
            this.profileName = null;
            this.ident = null;
            this.money = null;
            this.skin = null;
            this.minions = null;
            this.friends = [];
            this.ownedSkins = [];
            this.listenLoop = null;
            this.settings = [{
                    ident: "connection",
                    section: "general",
                    name: "Connection",
                    value: (localStorage.getItem("connection") &&
                            JSON.parse(localStorage.getItem("connection")).value) ||
                        "0",
                    toggle: false,
                    command: [{
                            value: "0",
                            name: "Europe",
                        },
                        {
                            value: "1",
                            name: "Cloudflare",
                        },
                        {
                            value: "2",
                            name: "America",
                        },
                        {
                            value: "3",
                            name: "Asia",
                        },
                    ],
                },
                {
                    ident: "viewport",
                    section: "general",
                    name: "Viewport",
                    value: "0",
                    toggle: false,
                    command: [{
                            value: "0",
                            name: "Max",
                        },
                        {
                            value: "1",
                            name: "Large",
                        },
                        {
                            value: "2",
                            name: "Medium",
                        },
                        {
                            value: "3",
                            name: "Small",
                        },
                    ],
                },
                {
                    ident: "player-split",
                    section: "player",
                    name: "Split",
                    value: " ",
                    toggle: false,
                    command: () => {
                        window.core.split();
                    },
                },
                {
                    ident: "player-eject",
                    section: "player",
                    name: "Eject Mass",
                    value: "w",
                    toggle: false,
                    command: () => {
                        window.core.eject();
                    },
                },
                {
                    ident: "player-macro",
                    section: "player",
                    name: "Macro Feed",
                    value: "a",
                    toggle: true,
                    command: (renamedVar322 = false) => {
                        if (
                            this.gameModes.find(
                                (renamedVar141) => renamedVar141.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(
                                new Uint8Array([!renamedVar322 ? 0x96 : 0x97]),
                            );
                        }
                    },
                },
                {
                    ident: "player-stop",
                    section: "player",
                    name: "Stop Cell",
                    value: "d",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar171) => renamedVar171.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x90]));
                        } else {
                            this.isPlayerStopped = !this.isPlayerStopped;
                        }
                    },
                },
                {
                    ident: "player-split-2",
                    section: "player",
                    name: "Double Split",
                    value: "q",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar128) => renamedVar128.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9a]));
                        } else {
                            window.core.split();
                            setTimeout(() => {
                                window.core.split();
                            }, 0x50);
                        }
                    },
                },
                {
                    ident: "player-split-3",
                    section: "player",
                    name: "Triple Split",
                    value: "r",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar242) => renamedVar242.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9b]));
                        } else {
                            window.core.split();
                            setTimeout(() => {
                                window.core.split();
                                setTimeout(() => {
                                    window.core.split();
                                }, 0x50);
                            }, 0x50);
                        }
                    },
                },
                {
                    ident: "player-split-4",
                    section: "player",
                    name: "Quadruple Split",
                    value: "tab",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar353) => renamedVar353.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9c]));
                        } else {
                            window.core.split();
                            setTimeout(() => {
                                window.core.split();
                                setTimeout(() => {
                                    window.core.split();
                                    setTimeout(() => {
                                        window.core.split();
                                    }, 0x50);
                                }, 0x50);
                            }, 0x50);
                        }
                    },
                },
                {
                    ident: "player-split-max",
                    section: "player",
                    name: "Max Split",
                    value: "e",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar175) => renamedVar175.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9d]));
                        } else {
                            window.core.split();
                            setTimeout(() => {
                                window.core.split();
                                setTimeout(() => {
                                    window.core.split();
                                    setTimeout(() => {
                                        window.core.split();
                                        setTimeout(() => {
                                            window.core.split();
                                        }, 0x50);
                                    }, 0x50);
                                }, 0x50);
                            }, 0x50);
                        }
                    },
                },
                {
                    ident: "player-h-stop",
                    section: "player",
                    name: "Horizontal Line Stop",
                    value: "t",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar123) => renamedVar123.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x91]));
                        }
                    },
                },
                {
                    ident: "player-v-stop",
                    section: "player",
                    name: "Vertical Line Stop",
                    value: "y",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar189) => renamedVar189.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x92]));
                        }
                    },
                },
                {
                    ident: "minion-split",
                    section: "minion",
                    name: "Split",
                    value: "x",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar269) => renamedVar269.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x93]));
                        }
                    },
                },
                {
                    ident: "minion-eject",
                    section: "minion",
                    name: "Eject Mass",
                    value: "c",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar31) => renamedVar31.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x94]));
                        }
                    },
                },
                {
                    ident: "minion-macro",
                    section: "minion",
                    name: "Macro Feed",
                    value: "z",
                    toggle: true,
                    command: (renamedVar117 = false) => {
                        if (
                            this.gameModes.find(
                                (renamedVar334) => renamedVar334.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(
                                new Uint8Array([!renamedVar117 ? 0x98 : 0x99]),
                            );
                        }
                    },
                },
                {
                    ident: "minion-invert",
                    section: "minion",
                    name: "Invert",
                    value: "s",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar144) => renamedVar144.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x95]));
                        }
                    },
                },
                {
                    ident: "minion-split-2",
                    section: "minion",
                    name: "Double Split",
                    value: "v",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar320) => renamedVar320.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9e]));
                        }
                    },
                },
                {
                    ident: "minion-split-max",
                    section: "minion",
                    name: "Max Split",
                    value: "shift",
                    toggle: false,
                    command: () => {
                        if (
                            this.gameModes.find(
                                (renamedVar380) => renamedVar380.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(new Uint8Array([0x9f]));
                        }
                    },
                },
            ];
            this.changingSettings = null;
            this.isPlayerStopped = false;
            this.tournamentMode = null;
            this.tournament = {};
            this.survivorCoins = null;
            this.serverFatMinions = null;
            this.defaultProfile =
                RegExp().constructor.name[5] +
                "true" [1] +
                ("" + [][
                    []
                ])[3] +
                "false" [1] +
                "object" [4] +
                "true" [0];
            this.canvas = document.getElementById("canvas").getContext("2d");
            this.hud = {
                counter: document.createElement("canvas").getContext("2d"),
                tournamentCounter: document.createElement("canvas").getContext("2d"),
                images: {
                    gameMode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVQ4jYWTPU7DYAyGMyAqNiYIBcRQqczd4ACMbGz0AB1YmLgB6iXo1gvAASgM7cLCr5jK1AlBmQH1QS+yJTfJB5YsJbbf5/tsJxkwZd5egBzICp5bLtp7RrUNgVoALALXVZUR0AZG4b0XAL0QH1ltCaDEZoDMgBZwHGpugK14kADjBKQL7AFfiQNkYx/OsABZBxrAa+pk06x5jxrYmSWegQ3g/g9xH1iStriqI2AbOE+Iv4GTqInihrVzmuj5zWaSW20JsA9MbPpF8SPQtMFOrLYEWLD9fgK7QXxhM9mxXNtq5wArwC1wGCAza2cZeAriA+ABqDtAYgV8SA7RVdWvXM8u9u9C26oLcBXWI7uzK6pPDUuuZ8WUizYQ4CNEdNXVij/RXTnVuE0V7Bjk8h9xhAx+NdD5Aav6iVHfXkoVAAAAAElFTkSuQmCC",
                    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAAB4klEQVRYhe2Yr0sEQRTHn4pgOeFQUcQgWBUMgj+CwT9ABE0mu0nUcu0MFoNFMBqtilw40Go1GOQODlGD4cIFixj8yMhbWO52Z+etJxa/MLA3+77fzw07O/e4HkByaFJELtW2JiKP5ggHNoxe4JhOubk+S1ZoYQEoAa0EaKSW1hS6CZ4DPj3QSJ9a+yPwOFCMfXb74cgDPdKaqL6oGSbwjoa9Agtt9yaA6xjwRufiNfPqRbMywcvAU8JqLoHhttotHfG5IeAiwf+k2R3gMaAa8AwPgZGEFYzovax9UFXWN3g/ABjXSQL4xJix70z1wOImsOHZjOtaE6K6MzwEFB4YDoeDgLyHLHAFGDWebqKeSl5wKQewfZTSwL2eY7yW59cjNMMHHugCODXDB/5V/YP/wX8Cfu9CfmqGD7zYBXB6RsZZfQ/M5jgqZ9WbelZnPeNpEbkTkXMRGQxYYUFr79SbLqDm+WZxue5iz7PK3cBO1KnmDJvAR6DB6QVYiQHd9bPB71ibkbkfODWYnc50WHSqrI4ucwq4NYaF6FazM/vqVUP/5FNTs4Ib+miUfwAt+7JD3knXM18ZgFcpvbcZHI0loOEBNrQmKC9PA7fd9vq5azdnysn7j4A7oWb0+l5E3kxuEfkCKdARvF9Gsr4AAAAASUVORK5CYII=",
                    minions: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVQ4jc1RQQ6AIAzbPPgA/bRHvXvzfewLNRggc044aKJNliwtNNDSPwCgB7AACAAk7ZGjNK5eHg9gxhWTMnB1bRCcA0EZuHq82z3NMBtsjraqva6rkKQRotyFaKfVyjE1g1YrxYCzgUFMeDCcENGoCWZ+rwWLVitnVEK8a8X79hcgoh0uZVrRbeA4UAAAAABJRU5ErkJggg==",
                },
                utils: {
                    roundedRectangle: (
                        renamedVar105,
                        renamedVar310,
                        renamedVar120,
                        renamedVar255,
                        renamedVar86,
                        verticalLineStop,
                    ) => {
                        renamedVar105.beginPath();
                        renamedVar105.moveTo(renamedVar310 + verticalLineStop, renamedVar120);
                        renamedVar105.arcTo(
                            renamedVar310 + renamedVar255,
                            renamedVar120,
                            renamedVar310 + renamedVar255,
                            renamedVar120 + renamedVar86,
                            verticalLineStop,
                        );
                        renamedVar105.arcTo(
                            renamedVar310 + renamedVar255,
                            renamedVar120 + renamedVar86,
                            renamedVar310,
                            renamedVar120 + renamedVar86,
                            verticalLineStop,
                        );
                        renamedVar105.arcTo(
                            renamedVar310,
                            renamedVar120 + renamedVar86,
                            renamedVar310,
                            renamedVar120,
                            verticalLineStop,
                        );
                        renamedVar105.arcTo(
                            renamedVar310,
                            renamedVar120,
                            renamedVar310 + renamedVar255,
                            renamedVar120,
                            verticalLineStop,
                        );
                        renamedVar105.closePath();
                        return renamedVar105;
                    },
                    getGameMode: () => {
                        if (this.gameMode === "ffa") {
                            return "FFA";
                        }
                        if (this.gameMode === "battleroyale") {
                            return "Battle Royale";
                        }
                        if (this.gameMode === "teams") {
                            return "Teams";
                        }
                        if (this.gameMode === "experimental") {
                            return "Experimental";
                        }
                        if (this.gameMode === "party") {
                            return "Party";
                        }
                        const renamedVar361 = this.gameModes.find(
                            (renamedVar150) => renamedVar150.type === this.gameMode,
                        );
                        if (renamedVar361) {
                            return renamedVar361.shortName;
                        }
                        return "Loading...";
                    },
                    getMinions: () => {
                        if (this.isLogged) {
                            return (
                                this.minions.loaded +
                                this.minions.fatAmount +
                                " / " +
                                (this.minions.amount + this.minions.fatAmount)
                            );
                        }
                        return "Sign in";
                    },
                    getSurvivorCoins: () => {
                        if (this.survivorCoins) {
                            return this.survivorCoins + " RC";
                        }
                        return "0 RC";
                    },
                },
            };
            this.loadConfig()
                .then(() => {
                    this.updateCss();
                    this.hookListeners();
                    this.startObserver();
                })["catch"](() => {});
        }
        async ["loadConfig"]() {
                const renamedVar165 = await fetch("https://minions.raga.pw/ragamode/config", {
                        cache: "no-store",
                    })
                    .then((renamedVar330) => renamedVar330.json())["catch"](() => {});
                if (!renamedVar165) {
                    return Promise.reject();
                }
                this.gameModes = renamedVar165.gameModes;
                this.skins = renamedVar165.skins;
                this.shops = renamedVar165.shops;
                return Promise.resolve();
            }
            ["updateCss"]() {
                let renamedVar383 = "";
                renamedVar383 += "html { --bottom-banner-height: 0 !important; }";
                renamedVar383 += "#canvas { height: 100% !important; }";
                renamedVar383 +=
                    "#adsTop, #adsBottom, #adsLeft, #adsRight, #adsGameOver, #captchaWindowV3, .discord { visibility: hidden; }";
                renamedVar383 +=
                    "#new-skinButton { position: relative; left: 25px; cursor: pointer; }";
                renamedVar383 +=
                    "#new-skinButton>.skinWrapper { position: absolute; width: 46px; height: 46px; border: 3px solid rgb(131, 131, 131); -webkit-mask-image: -webkit-radial-gradient(white, black); overflow: hidden; }";
                renamedVar383 +=
                    ".raga-coins { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZTVmOWZjNi1iZDUzLTkzNDktODQ1My0zODRkYmJhZTczZjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjMwOUIyOTAxQjY2MTFFQkJEM0JBOEE4Nzc1NDVBMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjMwOUIyOEYxQjY2MTFFQkJEM0JBOEE4Nzc1NDVBMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkOWU5YTc1LTU4OTctYTE0ZS1hMmE1LWNmZjBmY2I4Y2U5ZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyMWI4N2UxLWVmYzAtZTQ0Ni04NDU1LTM5NDVkMDRjNGQ4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psqsbw4AAAM9SURBVHjaXFRNSFRRFP7efc8ZdX511ETFNFJMxYVSRoRtSyKkyFXUIqGV0bIWQpsIWgtBq0KCWhRGJLUpNwWJuMn8SVFL08bxZ5z/0Zl5fXfeHXjMhY/33r3nfuec75zztMziBMyjJIy/n4CjOLEDwFGGbPISEuEB5Mw2HMUAwwXoYhVl7nE4vB+QSUZQWkNbHQh0ASUeGGZiF6YQQDoCZEkW27iG2PYDaLs98OUAL+2dxBERwWnsYRC56jmUVz6BKH0BaDxLAodxGNCM/DeEriG89hSxpTtoPAROca+S4HH+3CQyxAGxEGrH6u5zhtMPf8staCIFaappOWmtIb75DLEfQ+jlZ6u6nFUE9iUdnCfqee/b7CAiDgOBnkEGkxV6eAHGn4kb2JkcwlkatSmCrIrIsEFX+zLlE4o0OnMVoel7yMRoEp51ITg9gibTiuhQRSCJqDtCtqjKiRr1Lu2aiCDx6/t9CIwZSIUo6HoLOriZs12UkawQMxWAf99KO062kwnkMyhoKDNZ2apCInhTIJUaQIAbfpVCYZlKbB+JrvB5nWgm0bKHqcmCKeduoppIJfoFktsd+fLrRUJnVJoOgnzYVM+yqNUqprITKpD0bouBTMSLkiIiqVdKQYr9hUiyaSvYh32q7+ySyPvZqFugxHeQv2Bf0ltCasSU2vm8LCOKW21RX0QE5VD3RAVKq2cRLtJLy3c7jZwWQYXSZQOWXprNVhLL+87AkuAYvs1rsV+kGycEXs4pgzOlowa1H1GRFzKQ5Nv5cX4vUF79BqJ5AT9tHqX4LbCqyGppadWkA2oCCllI5/Pyu24b7tqXAt7WBGp7H+I3mRZV9QqGxYVx2KKS76uyYYljZx7B1xYSMNiIlZ2vUXluFFM8mLONj1lEZtqcLBNfCU/3K1R1j0J38YoUhHMOV+0wMl0mphaHsZm2qhgoik6mL393C8Qa4eocg7fhNjQzh1xWkuUshSXcDXc5/Z8R3BvB1no3PLb/2aESW06F1jgPr/8xXA1jksTiMEnmZPuadGlQ6SxLWF43Dn/HR6T+XUAseBH7rj6kdzxwViWo1zQqHO/gOT6J9F4UeimJGbpexgwM/BdgACxeGGYM4tWGAAAAAElFTkSuQmCC'); background-position: 0 0; }";
                renamedVar383 +=
                    ".new-user-container, .new-offers-container { padding: 20px; }";
                renamedVar383 +=
                    ".new-user-container .user-picture { float: left; width: 56px; height: 56px; margin-right: 6px; border: 2px solid #cccccc; border-radius: 5px; }";
                renamedVar383 +=
                    ".new-user-container .currency-container, .leagues-dialog .currency-container { position: relative; left: 70px; width: 130px; height: 23px; margin-bottom: 10px; border: 2px solid #54c800; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".new-user-container .label, .leagues-dialog .label { position: absolute; right: 53px; width: 100px; height: 30px; line-height: 24px; text-align: right; font-size: 13px; color: #000000; }";
                renamedVar383 +=
                    ".new-user-container .icon, .leagues-dialog .icon { position: absolute; top: 2px; right: 28px; }";
                renamedVar383 +=
                    ".new-user-container .plus, .leagues-dialog .plus { position: absolute; top: 0; right: 0; width: 25px; height: 100%; text-align: center; background-color: #54c800; border-radius: 2px; border-top-left-radius: 0; border-bottom-left-radius: 0; }";
                renamedVar383 +=
                    ".new-user-container .plus>span, .leagues-dialog .plus>span { display: block; line-height: 25px; text-align: center; font-size: 25px; color: #ffffff; }";
                renamedVar383 +=
                    ".new-user-container .ident-container { position: relative; left: 10px; width: 280px; height: 23px; font-size: 13px; }";
                renamedVar383 +=
                    ".new-user-container .ident-container .ident { user-select: all; }";
                renamedVar383 +=
                    ".new-user-container .user-name { position: absolute; margin-top: 7px; vertical-align: middle; text-align: left; font-weight: bold; font-size: 22px; letter-spacing: -0.4px; overflow: hidden; }";
                renamedVar383 +=
                    ".new-user-container .progress-bar-container { position: relative; top: 42px; width: 100%; height: 30px; text-align: center; border: 2px solid #54c800; border-radius: 5px; }";
                renamedVar383 +=
                    ".new-user-container .progress-bar { position: absolute; top: 0; height: 100%; background-color: #54c800; border-radius: 0 4px 4px 0; }";
                renamedVar383 +=
                    ".new-user-container .progress-bar-text { position: absolute; left: 0; width: 100%; line-height: 32px; font-weight: bold; font-size: 14.5px; color: #343434; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container { display: flex; flex-wrap: nowrap; justify-content: space-between; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div { width: 93px; height: 75px; text-align: center; color: #ffffff; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.shop { background-color: #54c800; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.shop:hover { background-color: #3b8a02; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.settings { background-color: #00c1f1; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.settings:hover { background-color: #0293b7; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.community { background-color: #c03ff7; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div.community:hover { background-color: #8a2fb1; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div>.label { position: relative; bottom: -45px; width: 100%; font-weight: bold; font-size: 12px; }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div>.Icon-Store { position: absolute; transform: matrix(0.65, 0, 0, 0.65, -39, 10); }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div>.controller { position: absolute; transform: matrix(0.8, 0, 0, 0.8, -42, 20); }";
                renamedVar383 +=
                    ".new-offers-container .buttons-container>div>.Icon-Leaderboards { position: absolute; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDgyREM0NzkyOERFMTFFQkFBNjZBMEYxODEyNDIyQUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDgyREM0N0EyOERFMTFFQkFBNjZBMEYxODEyNDIyQUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODJEQzQ3NzI4REUxMUVCQUE2NkEwRjE4MTI0MjJBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODJEQzQ3ODI4REUxMUVCQUE2NkEwRjE4MTI0MjJBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpmB7ZgAAAPESURBVHja1NlZbExRGMDxa6wpVbXUTuwq1hA7QShFqFgiPAlBeCieCLE+eCJEY4+ERyKI9QHVkKjYYheUCmptiDa1tuP/8U1yM+ZuRzHzJb+knXvPuee798zMd85Y4XDYMlAbo7EZd8K/YrlBP0u07SPsxASkmIwpaIOu2IDnOoByXMRSpBsMoDOWIR8V2udrbEGPIH1V+ZmNd/TESkxECG+wCbvwTs9ph+5oi+ZoiDqooce/ohTFeIHHuIkCyCAaYRay0UxfO4o1uOY5Qo9M6yEH3/VufUA2qiEVs3AIz2x3NEhU6NM9gtloALm5c/BGz5Frb0N906klj73AdtGDOn0ycBxfwpUfX3EKmWiLfbZjhehmMrVOYoxOiR14hHnoYv2beICtaImFqIVcjIh1slMiE3BE/76Lauho/Z+QG/gZXfX/aTjgN5E8DLXiMy5hICrsL4ZinDgyjpOQ6Iex0S/GSmSuFf8x12tqyXfBDdSO80S+oBfuOT2RSQmQhERNTHabWlOsxInJ9vHbE+mGPgmUSE+dXr8lMgpVrcSK0bESyTDs7BUu4KFB2wJt+9Lw2qOii8aGeGtQG61FHe0jhKko9tFOis8ZqKptk7DC4PrST1N70TjcoJP1DgXcWB9tJzm0XWUwjkx7IksDNpYSO82lcj7h0vaMS7tU26LNb6yWtpH3SO+Ac/O6Lq6cItflWJ7Lsfe4GnAsvSNv9upID9i41ON4ieExP31HR2ckSSItVJBo43G8o+ExS5fKQUKWxS0lkfZICdi4l0uFLH1lubQdr+t5p8q2b8CxJEkOoT9YMG1Bkxivb/R4Yi104yK6PJLkchwqcq/oJCu/DoaJyI5JPjbrm192TuZjsI+2M7XSlqXsM+0r22BaRaK9lPGHdZsnkeNESO+k425RgiTSTBJJczlBFllv42CgxTp9naKRJJLq8VG4G4f/YxLHsN3jAyQlpLsSTlEXi3FW97jy/2ECVzBOE1mEei7nXo5Ungd91DSyW14X/bAfH//CTmOpjmWQVtU5PtocRXKkWJO93E0+Gskeb5a2SdayfQ9uo8xg4GX6s8ReTNcbJX2PwxMf7beiRqwt0yz9Xmjl47Gv1cce1pVlE31PtbbtxidH7caX2Hbjn+IJilCu52Tqrn9/j+sX6XQ74LYbn6LrAj8LrZcYb/hjkV2Gz/JdFm3rtNz3vRsv2/jzkOcybWS3vnklJNIY9x2u8QnnsUBXsn/0Q48UlsMwRMuJ1lqsySfZuUr6lBqA0/iGQtzCee3/gVfjHwIMACPnEzvUGZNMAAAAAElFTkSuQmCC'); background-position: 0 0; transform: matrix(0.65, 0, 0, 0.65, -59, 10); }";
                renamedVar383 += "#mainui-play { margin-bottom: 0; }";
                renamedVar383 += "#mainui-modes .gamemodes { flex-wrap: wrap; }";
                this.gameModes.forEach((renamedVar286) => {
                    renamedVar383 +=
                        "#mainui-modes .gamemodes ." +
                        renamedVar286.type +
                        " { height: 60px; margin-top: 7px; flex-basis: 139px; flex-direction: column; background-color: #e2e2e2; }";
                    renamedVar383 +=
                        "#mainui-modes .gamemodes ." +
                        renamedVar286.type +
                        ":hover, #mainui-modes .gamemodes ." +
                        renamedVar286.type +
                        ".active { color: #ffffff; background-color: " +
                        renamedVar286.color +
                        "; }";
                    renamedVar383 +=
                        "#mainui-modes .gamemodes ." +
                        renamedVar286.type +
                        ">span { padding-top: 5px; font-size: 13px; }";
                });
                renamedVar383 +=
                    ".partymode-info { top: 90px !important; left: 12px !important; }";
                renamedVar383 += "#leagues-app { display: block; }";
                renamedVar383 += ".leagues-dialog h1 { margin-bottom: 0; }";
                renamedVar383 +=
                    ".leagues-dialog .currency-container { left: 671px; margin-top: -34px; }";
                renamedVar383 +=
                    ".raga-mode-shop { width: 100%; margin-top: 25px; display: table; border-collapse: separate; border-spacing: 0 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry { display: table-row; background-color: #ffde92; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry:hover { background-color: #fff0c8; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry:hover .block { border: 1px solid #fff0c8; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry:hover .block.green { background-color: #57b600; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .block { height: 60px; display: table-cell; text-align: center; font-weight: bold; font-size: 20px; vertical-align: middle; border: 1px solid #ffde92; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .block.first { border-top-left-radius: 5px; border-bottom-left-radius: 5px; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .block.last { border-top-right-radius: 5px; border-bottom-right-radius: 5px; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .block.green { padding-left: 10px; padding-right: 10px; color: #ffffff; background-color: #5fcb00; border: none; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .orange, .raga-mode-shop .coins-entry .light { padding: 15px 0; display: inline-block; border-radius: 5px; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .orange { width: 120px; color: #ffffff; background-color: #ff8301; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .light { width: 135px; background-color: #fff7b7; }";
                renamedVar383 +=
                    ".raga-mode-shop .coins-entry .orange-text { color: #ff8301; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions-stop { height: 60px; line-height: 60px; margin-bottom: 10px; text-align: center; font-weight: bold; font-size: 18px; color: #a4a4a4; background-color: #f0f0f0; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions { display: flex; flex-wrap: wrap; justify-content: start; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .btn-one, .raga-mode-shop .minions .btn-one:hover { color: #ffffff; background-color: #56c0e1 !important; border-color: #4295ae; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .btn-one-selected, .raga-mode-shop .minions .btn-one-selected:hover, .raga-mode-shop .minions .btn-one-selected:focus { color: #4295ae; background-color: #ffffff; border-color: #4295ae; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .btn-two, .raga-mode-shop .minions .btn-two:hover { color: #ffffff; background-color: #ff5fa7 !important; border-color: #d14c88; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .btn-two-selected, .raga-mode-shop .minions .btn-two-selected:hover, .raga-mode-shop .minions .btn-two-selected:focus { color: #d14c88; background-color: #ffffff; border-color: #d14c88; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry:not(:last-child) { margin-right: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry { margin-bottom: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block { width: 195px; padding-bottom: 25px; background-color: #f5f5f5; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .title { padding: 15px; text-align: center; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .time { margin-top: 20px; text-align: center; font-weight: bold; font-size: 18px; color: #a4a4a4; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .time .clock-grey { transform: matrix(0.8, 0, 0, 0.8, -5, 4); opacity: 0.7; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .hr { width: 70%; height: 20px; margin: 0 auto; border-bottom: 2px solid #a4a4a4; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector { margin-top: 20px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div { margin: 2px 0; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div>div { width: 14px; height: 14px; margin: 0 10px; display: inline-block; border: 2px solid #a4a4a4; border-radius: 100%; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div.selected>div { background-color: #73deff; border-color: #73deff; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div>span { vertical-align: 3px; font-weight: bold; color: #a4a4a4; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .buy { width: 195px; height: 40px; line-height: 40px; margin-top: 5px; text-align: center; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .minions-entry .buy:hover { background-color: #347f01; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends { width: 100%; height: 370px; text-align: center; background-color: #f5f5f5; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .title { padding: 15px; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .block { width: 590px; margin: 10px auto 0 auto; display: flex; flex-wrap: wrap; justify-content: space-around; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .block .friend { width: 250px; height: 50px; margin-top: 18px; padding: 0 10px; text-align: center; font-weight: normal; color: #adadad; border: 1px solid #adadad; border-radius: 10px; outline: none; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .block .friend.taken { color: #56c0e1; border-color: #56c0e1; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .block .friend::placeholder { color: #adadad; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .block .friend.taken::placeholder { color: #56c0e1; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .save { width: 270px; height: 40px; line-height: 40px; margin: 18px auto 0 auto; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .friends .save:hover { background-color: #347f01; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .no-friends { width: 100%; padding: 15px; text-align: center; font-weight: bold; color: #ffffff; background-color: #56c0e1; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship { width: 100%; height: 225px; text-align: center; background-color: #f5f5f5; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship .title { padding: 15px; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship .block { width: 590px; margin: 10px auto 0 auto; display: flex; flex-wrap: wrap; justify-content: space-around; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship .block .friendship { width: 270px; height: 50px; line-height: 50px; margin-top: 20px; color: #adadad; background-color: #ffffff; border-radius: 10px; user-select: all; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship .cancel { width: 270px; height: 40px; line-height: 40px; margin: 20px auto 0 auto; font-weight: bold; color: #ffffff; background-color: #ffb84d; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .cancel-friendship .cancel:hover { background-color: #c58f3c; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .refund-container { width: 100%; text-align: center; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .refund { margin-top: 18px; color: #a4a4a4; }";
                renamedVar383 +=
                    ".raga-mode-shop .minions .refund>span { font-weight: bold; color: #ffa539; cursor: pointer; }";
                renamedVar383 += ".raga-mode-shop .create-skin { text-align: center; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .instruction { height: 60px; line-height: 60px; margin-bottom: 10px; font-weight: bold; font-size: 18px; color: #a4a4a4; background-color: #f0f0f0; border-radius: 10px; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border { margin-top: 20px; display: none; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border>div { width: 40px; height: 40px; margin: 0 10px; display: inline-block; border-radius: 100%; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border>div.selected { margin: 0 5px; border: 5px solid #69dd00; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border>div>span { width: 30px; height: 30px; margin: 5px; display: inline-block; border-radius: 100%; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .green { background-color: #69dd00; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .yellow { background-color: #ffcc00; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .orange { background-color: #ff7e00; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .red { background-color: #ff3d3d; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .violet { background-color: #c000ff; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .pink { background-color: #ff3ed4; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .blue { background-color: #0078ff; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .light-blue { background-color: #00deff; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .white { background-color: #c3c3c3; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .border .black { background-color: #2a2a2a; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin canvas { margin: 5px auto 10px auto; display: none; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .select-image { width: 195px; height: 40px; line-height: 40px; margin-bottom: 10px; display: inline-block; text-align: center; font-weight: bold; color: #ffffff; background-color: #00d3ff; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .select-image:hover { background-color: #3f89b6; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin #select-image-upload { display: none; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .serror, .raga-mode-shop .create-skin .save { display: none; }";
                renamedVar383 += ".raga-mode-shop .create-skin .serror { color: red; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .save { width: 195px; height: 40px; line-height: 40px; margin: 0 auto; text-align: center; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .save:hover { background-color: #347f01; }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .loader { width: 120px; height: 120px; margin: 100px auto 0 auto; border: 16px solid #f0f0f0; border-top: 16px solid #00d3ff; border-bottom: 16px solid #00d3ff; border-radius: 50%; animation: spin 3s linear infinite; }";
                renamedVar383 +=
                    "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
                renamedVar383 +=
                    ".raga-mode-shop .create-skin .done { margin: 100px auto 0 auto; }";
                renamedVar383 +=
                    ".raga-mode-settings { height: 515px; margin-top: 25px; padding-right: 10px; display: flex; flex-wrap: wrap; justify-content: space-between; overflow-y: scroll; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry { margin-bottom: 25px; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry.general { width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .section { width: 100%; margin-bottom: 10px; padding-bottom: 10px; font-weight: bold; font-size: 21px; color: #656465; border-bottom: 2px solid #c6c7c6; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command { width: 378px; margin-bottom: 10px; display: flex; justify-content: space-between; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .name { width: 227px; padding: 14px; background-color: #f4f5f4; border: 1px solid #f4f5f4; border-radius: 5px; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .select { width: 115px; height: 100%; text-align: center; color: #ffffff; background-color: #00c1f1; border: 1px solid #00c1f1; border-radius: 5px; outline: none; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value { position: relative; width: 87px; padding: 14px; text-align: center; color: #ffffff; background-color: #00c1f1; border: 1px solid #00c1f1; border-radius: 5px; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.conflict { background-color: #ff6767; border-color: #ff6767; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value:after { position: absolute; left: 0; width: 100%; opacity: 0; content: attr(data-active); }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value:hover { background-color: #0293b7; border-color: #0293b7; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.conflict:hover { background-color: #d85858; border-color: #d85858; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.active { color: #0293b7; background-color: inherit; border-color: #00c1f1; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.active.conflict { color: #e06464; background-color: inherit; border-color: #ff6767; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.active span { opacity: 0; }";
                renamedVar383 +=
                    ".raga-mode-settings .settings-entry .command .value.active:after { opacity: 1; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector { width: 100%; height: 450px; margin: 30px -2.5px 0 -2.5px; display: flex; flex-wrap: wrap; overflow-y: scroll; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry { position: relative; width: 146px; height: 146px; margin: 0 2.5px 5px 2.5px; background-position: center; border-radius: 100%; cursor: pointer; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container { position: absolute; top: 0; width: 100%; height: 100%; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container .remove { position: absolute; top: -5px; left: -5px; width: 24px; height: 24px; display: none; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZBNjhDODdBMTUwMTFFREE5Q0RENTU5MDRFMThDMkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjZBNjhDODhBMTUwMTFFREE5Q0RENTU5MDRFMThDMkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NkE2OEM4NUExNTAxMUVEQTlDREQ1NTkwNEUxOEMyRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NkE2OEM4NkExNTAxMUVEQTlDREQ1NTkwNEUxOEMyRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnFSC+IAAALBSURBVHjatFVLbxJRFP7uiDEEYt0BkxgehUCJiaHdGOtC7bLFhVbSaMHELtx0pf4LF2603da2Wu0/qAuwsFGTVrswxJQKDZYBF7YVsEDIjOdSQIcO9GF7FjN3Zs585/0dpigKTlJ0/MIY66iUzWYvyDK7SEdT/VWOMfmzxWL50uk/7jyrXTQMpNNpvU6nG6evD+ixuw3GGgObLJV+P7fb7aUDG9jI5S4zWXlNx/MHzMS6wDBiNpvftxoQWjUlSQoQePgQ4FyssoII/Tvc+kEVQd1zDn7miDUtUSTXGpGoUsRzfkp3+ushPdeSVLGQ97hcrrIqRbygxwDOxWY0nh3fk6KMlF2jZ0er9sTkJAqFIoZv3YTD4UC1WkUk8g7RWAxOZzfuhUJ7LFDCExaL2dWMgPe5FjiXzZ+biMfjmJmdRSKRwGI0ijfz88hkMtje/tXsFlX3AE4quLcZgST9uEunWS0D35JJTE/P8BrBYDDUIpBlGVf6+zHkH8K5ri7tIWO4I5pMc8LuJMPSLqEOux2hUBBGoxH5fB47Ozvwer0IBG63BeciKEys3f9GpS3c4/VUCpVKpflua2sL3zc20JkmdjGF3XAUqZ1iOBzGy1dzKJfL6OvtrUWUpLRNTb3A0vJyewOCkmkaoEKsaPEIl8XFKARBwMDAdYyN3UcwOAqr1VqrycLC27YGmCyvNA3UWFHBqkqhPt1ujwc+nw+Dg4PQ6/Ww2Wy44ffD43HD43Zrg1ObiqIYV82BJOUeU9qeHMsSUPBQFM1PVZNMlPuMs+IxwCeLxfyEJtnR8PSBCTE66v+D7K4S2X3QpGvK2xKDwme/dBRwasfRBrhmBP+syEvE73OcuA6aFnJshJrl474Lhwvnc0655NEj3hEdirnKC0q6Pa3gHSNoFapNDw2DD3J96QvIESF9arTivkv/JOWPAAMAPmlOZo5ILosAAAAASUVORK5CYII='); }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container .copy { position: absolute; top: -5px; right: -5px; width: 24px; height: 24px; display: none; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALqSURBVEiJxZXNb0xRGMZ/73VFq2LZuXeidFCUJqJdqPoIsShqiZT4SEgQqhKknZg1ipWiYhIbIvwBFBsW1SrJFInS+shg4t6ZknTRjozNPRYzvabTmelUIp7dPee9v+c8555zX/jHkkKKotFolePIcsCTGoqJOK9M0+z/a4NIJFKs63qTQg4BC3KUfRLkWiLx86rP50sUbPAtFqsTR90FyiZbYUpfNKHRMIzezAktc8C27R3iqMdTgAPMcxRPbNveljkxLkFq5Y+BGVOApyuhCRvSk7gGkUikeJo+fZCprTybPsdHR5ZUVFT8grQt0nW9qRB4T9dTdm3fwcZ16wi0+hkeHs4sKZ81a3bT2INroJDDk8EfdnZy2t9Kuc/HoaNHeNv/hovn2rJUKpelQ+qcK+bng0ciX2k7c4bNWxs41nycmSUlAAQ7rqGUQuTP51Sw0LbtpaZpvtUAUpcoL7y01MPZCxfweAwa6uv5GY/zMtRHaalnHHxMjiSZGoAIZi74w85O9jTupC8U4v3gIDeCQfbt38/l9ks86+6mqbk563uaEq9rkEw1UT1dT91tGRwY4EYwyIGDB1m0eDEP7t3HHwhQt3ZNVgOlkkwdQImys1lcaW+nbvUajjUfp6G+3oVX19Rw6+4dysrm5gqO0pTlJhClXk9cgWJoKMaK6mpmlpRw/9EjYrEop1ta+DH0PS8cQBzntZvANM1+y4p+QKhwC0RYWbuK27duokTRFwrR292DPxBgztz810Xgo+n1vnMTpIDBzMJT/laWLqvi+tUOvoa/cLbtPJu2bMkLT6anI80sqXA4XDSjqHgAmDcpIb/C8dGRyrFfxbgDbFlWDaJ1AcV/CU9ownrDMJ6PDYz7XXu93pCg9gJZm8dkcJTsTodDjoYTjUZrHcUdoLxAeFhQjaZpvsicmNBwAAzD6I2PjixByUmBjzmxig8oTsRHRyqzwaHApm9ZViWatgIn1fQ1YjjOS2/qKP5X/Qb1xA/8B4+wcgAAAABJRU5ErkJggg=='); }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container:hover .remove, .raga-mode-skin-selector .skin-entry .overlay-container:hover .copy { display: block; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry.pending { opacity: 0.8; }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry.pending>.sprite-common.rush_icon { transform: matrix(0.6, 0, 0, 0.6, 25, 15); }";
                renamedVar383 +=
                    ".raga-mode-skin-selector .skin-entry.selected { opacity: 0.2; }";
                const renamedVar43 = document.createElement("style");
                renamedVar43.innerHTML = renamedVar383;
                document.head.appendChild(renamedVar43);
            }
            ["hookListeners"]() {
                addEventListener(
                    "hashchange",
                    (renamedVar317) => {
                        if (!document.getElementById("mainui-modes")) {
                            return;
                        }
                        let renamedVar216;
                        if (!renamedVar317.newURL) {
                            renamedVar216 = location.hash;
                        } else {
                            renamedVar216 = renamedVar317.newURL.substr(renamedVar317.newURL.indexOf("#"));
                        }
                        if (
                            renamedVar216 &&
                            (renamedVar216 === "#ffa" ||
                                renamedVar216 === "#battleroyale" ||
                                renamedVar216 === "#teams" ||
                                renamedVar216 === "#experimental")
                        ) {
                            const renamedVar370 = renamedVar216.substr(0x1);
                            document.querySelectorAll(".ffa")[0x1].className = "item ffa";
                            document.querySelectorAll(".battleroyale")[0x1].className =
                                "item battleroyale";
                            document.querySelectorAll(".teams")[0x1].className = "item teams";
                            document.querySelectorAll(".experimental")[0x1].className =
                                "item experimental";
                            this.gameModes.forEach((renamedVar281) => {
                                document.querySelector("." + renamedVar281.type).className =
                                    "item " + renamedVar281.type;
                            });
                            if (renamedVar370 === "teams" && this.isIgnoringTeams) {
                                this.isIgnoringTeams = false;
                            } else if (!this.pendingGameMode) {
                                if (
                                    this.isUiRefreshed &&
                                    this.gameModes.find(
                                        (renamedVar314) => renamedVar314.type === this.gameMode,
                                    )
                                ) {
                                    document.querySelector("." + this.gameMode).className =
                                        "item active " + this.gameMode;
                                } else {
                                    document.querySelectorAll("." + renamedVar370)[0x1].className =
                                        "item active " + renamedVar370;
                                    this.gameMode = renamedVar370;
                                }
                            } else {
                                this.gameMode = renamedVar370;
                            }
                            this.isUiRefreshed = false;
                        }
                    },
                    false,
                );
                addEventListener("joinparty", () => {
                    document.querySelectorAll(".ffa")[0x1].className = "item active ffa";
                    document.querySelectorAll(".battleroyale")[0x1].className =
                        "item active battleroyale";
                    document.querySelectorAll(".teams")[0x1].className =
                        "item active teams";
                    document.querySelectorAll(".experimental")[0x1].className =
                        "item active experimental";
                    this.gameModes.forEach((renamedVar299) => {
                        document.querySelector("." + renamedVar299.type).className =
                            "item active " + renamedVar299.type;
                    });
                    this.gameMode = "party";
                });
                addEventListener("login", () => {
                    const renamedVar203 = window.MiniclipAPI.prototype.getUserInfo();
                    this.profileImage = renamedVar203.avatarUrl;
                    this.profileName = renamedVar203.userInfo.name;
                    this.updateInterface();
                });
                addEventListener("logout", () => {
                    this.isLogged = false;
                    this.profileImage = null;
                    this.profileName = null;
                    this.ident = null;
                    this.money = null;
                    this.skin = null;
                    this.minions = null;
                    this.friends = [];
                    this.ownedSkins = [];
                    this.tournamentMode = null;
                    this.tournament = {};
                    this.survivorCoins = null;
                    this.serverFatMinions = null;
                    clearInterval(this.listenLoop);
                    this.updateInterface();
                });
                window.addKeyListeners = () => {};
                addEventListener("keydown", (renamedVar91) => {
                    if (this.changingSettings) {
                        renamedVar91.preventDefault();
                        if (
                            renamedVar91.key.toLowerCase() === "escape" ||
                            renamedVar91.key.toLowerCase() === this.changingSettings.entry.value
                        ) {
                            this.changingSettings.element.classList.toggle("active");
                            this.changingSettings = null;
                            return;
                        }
                        const renamedVar324 =
                            this.changingSettings.entry.ident +
                            ":" +
                            renamedVar91.key.toLowerCase();
                        const renamedVar247 = new Uint8Array([
                            0x24,
                            ...unescape(encodeURIComponent(renamedVar324))
                            .split("")
                            .map((renamedVar282) => renamedVar282.charCodeAt(0x0)),
                            0x0,
                        ]);
                        window.core.proxyMobileData(renamedVar247);
                        window.core.proxyMobileData(new Uint8Array([0x9]));
                        this.changingSettings.element.classList.toggle("active");
                        this.changingSettings = null;
                        return;
                    }
                    if (document.getElementById("overlays")) {
                        return;
                    }
                    if (renamedVar91.key.toLowerCase() === "escape") {
                        renamedVar91.preventDefault();
                        document.dispatchEvent(new Event("show_main_menu"));
                    } else {
                        if (
                            renamedVar91.key.toLowerCase() === "q" &&
                            !window.core.playerHasCells()
                        ) {
                            renamedVar91.preventDefault();
                            window.core.specialOn();
                        } else {
                            const renamedVar71 = this.settings.find(
                                (renamedVar364) =>
                                typeof renamedVar364.command === "function" &&
                                renamedVar364.value === renamedVar91.key.toLowerCase(),
                            );
                            if (renamedVar71 && (!renamedVar71.toggle || !renamedVar91.repeat)) {
                                renamedVar91.preventDefault();
                                renamedVar71.command();
                            }
                        }
                    }
                });
                addEventListener("keyup", (renamedVar211) => {
                    const renamedVar61 = this.settings.find(
                        (renamedVar186) =>
                        typeof renamedVar186.command === "function" &&
                        renamedVar186.value === renamedVar211.key.toLowerCase() &&
                        renamedVar186.toggle,
                    );
                    if (renamedVar61) {
                        renamedVar211.preventDefault();
                        renamedVar61.command(true);
                    }
                });
            }
            ["startObserver"]() {
                const renamedVar271 = [
                    "agar-io_160x600",
                    "agar-io_300x600",
                    "agar-io_728x90",
                    "agar-io_160x600_2",
                    "agar-io_300x600_2",
                    "agar-io_970x90",
                ];
                const renamedVar304 = new WebKitMutationObserver((renamedVar129) => {
                    renamedVar129.forEach((renamedVar90) => {
                        renamedVar90.addedNodes.forEach((renamedVar148) => {
                            if (!this.isClean) {
                                let renamedVar381 = [
                                    ...document.querySelectorAll(
                                        renamedVar271.map((renamedVar42) => "#" + renamedVar42).join(","),
                                    ),
                                ];
                                renamedVar381.forEach((renamedVar149) => {
                                    renamedVar149.setAttribute = (renamedVar168) => {
                                        if (renamedVar168 === "data-google-query-id") {
                                            renamedVar149.remove();
                                        }
                                    };
                                    renamedVar149.remove();
                                });
                                document.getElementById("preroll").remove();
                                this.isClean = true;
                            } else if (renamedVar271.includes(renamedVar148.id)) {
                                renamedVar148.setAttribute = (renamedVar63) => {
                                    if (renamedVar63 === "data-google-query-id") {
                                        renamedVar148.remove();
                                    }
                                };
                                renamedVar148.remove();
                            }
                            if (
                                renamedVar148.classList &&
                                renamedVar148.classList.contains("adsbygoogle")
                            ) {
                                renamedVar148.remove();
                                [...document.getElementsByClassName("adsbygoogle")].forEach(
                                    (renamedVar379) => {
                                        renamedVar379.remove();
                                    },
                                );
                            } else {
                                if (renamedVar148.id === "overlays") {
                                    const renamedVar173 = document.getElementById("skinButton");
                                    let renamedVar365 = document.getElementById("new-skinButton");
                                    if (!renamedVar365) {
                                        renamedVar365 = renamedVar173.cloneNode(true);
                                        renamedVar365.id = "new-skinButton";
                                        renamedVar365.onclick = () => this.openSkinSelectorInterface(0x0);
                                        renamedVar365.style.display = "none";
                                        renamedVar173.after(renamedVar365);
                                    }
                                } else {
                                    if (renamedVar148.id === "mainui-user") {
                                        this.switchInterface();
                                    } else {
                                        if (renamedVar148.id === "mainui-modes") {
                                            const renamedVar341 = document.querySelector(".ffa");
                                            const renamedVar179 = renamedVar341.cloneNode(true);
                                            renamedVar179.onclick = () => this.changeGameMode("ffa");
                                            renamedVar341.style.display = "none";
                                            renamedVar341.parentNode.appendChild(renamedVar179);
                                            const renamedVar393 = document.querySelector(".battleroyale");
                                            const renamedVar126 = renamedVar393.cloneNode(true);
                                            renamedVar126.onclick = () =>
                                                this.changeGameMode("battleroyale");
                                            renamedVar393.style.display = "none";
                                            renamedVar393.parentNode.appendChild(renamedVar126);
                                            const renamedVar38 = document.querySelector(".teams");
                                            const renamedVar25 = renamedVar38.cloneNode(true);
                                            renamedVar25.onclick = () => this.changeGameMode("teams");
                                            renamedVar38.style.display = "none";
                                            renamedVar38.parentNode.appendChild(renamedVar25);
                                            const renamedVar400 = document.querySelector(".experimental");
                                            const renamedVar195 = renamedVar400.cloneNode(true);
                                            renamedVar195.onclick = () =>
                                                this.changeGameMode("experimental");
                                            renamedVar400.style.display = "none";
                                            renamedVar400.parentNode.appendChild(renamedVar195);
                                            let renamedVar181 = 0xed;
                                            this.gameModes.forEach((renamedVar109) => {
                                                const renamedVar321 = renamedVar400.cloneNode(true);
                                                renamedVar321.style.display = "flex";
                                                if (renamedVar109.type.indexOf("tourney") !== -0x1) {
                                                    renamedVar321.style.flexBasis = "100%";
                                                    renamedVar321.style.display = "none";
                                                    if (renamedVar109.type === this.tournamentMode) {
                                                        renamedVar321.style.display = "flex";
                                                        renamedVar181 += 0x43;
                                                    }
                                                }
                                                renamedVar321.className = "item " + renamedVar109.type;
                                                renamedVar321.onclick = () =>
                                                    this.changeGameMode(renamedVar109.type);
                                                renamedVar321.children[0x0].innerHTML = renamedVar109.fullName;
                                                renamedVar400.parentNode.appendChild(renamedVar321);
                                            });
                                            dispatchEvent(new Event("hashchange"));
                                            if (document.querySelector(".partymode-info")) {
                                                dispatchEvent(new Event("joinparty"));
                                            }
                                            renamedVar148.style.height = renamedVar181 + "px";
                                        } else {
                                            if (renamedVar148.className === "partymode-info") {
                                                if (document.getElementById("mainui-modes")) {
                                                    dispatchEvent(new Event("joinparty"));
                                                }
                                            } else {
                                                if (renamedVar148.className === "party-dialog") {
                                                    const renamedVar59 = document.querySelector(
                                                        ".party-dialog .party-join",
                                                    );
                                                    renamedVar59.onclick = () => this.startLoader();
                                                    const renamedVar338 = document.querySelectorAll(
                                                        ".party-dialog .Close, .party-dialog .party-cancel",
                                                    );
                                                    renamedVar338.forEach((renamedVar236) => {
                                                        renamedVar236.onclick = () => {
                                                            this.pendingGameMode = null;
                                                        };
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        renamedVar90.removedNodes.forEach((renamedVar231) => {
                            if (renamedVar231.id === "mainui-modes") {
                                this.isUiRefreshed = true;
                            }
                        });
                    });
                });
                renamedVar304.observe(document, {
                    childList: true,
                    subtree: true,
                });
            }
            ["onRegisterSkin"](renamedVar280, gameModeMatch, renamedVar225, renamedVar190, cornerRadius) {
                if (
                    !renamedVar280 &&
                    gameModeMatch &&
                    gameModeMatch.substr(0x0, 0x1) === "%" &&
                    gameModeMatch.indexOf("%rm_") === -0x1 &&
                    gameModeMatch.indexOf("%custom_") === -0x1 &&
                    renamedVar225 !== "uses_spine"
                ) {
                    this.agarioSkins.unshift({
                        ident: gameModeMatch.substr(0x1),
                        url: renamedVar225,
                        color: cornerRadius,
                    });
                }
            }
            ["onConnect"]() {
                if (!this.isSetup) {
                    this.skins.forEach((renamedVar155) => {
                        if (renamedVar155.color >= 0x0) {
                            window.core.registerSkin(
                                null,
                                "%" + renamedVar155.ident,
                                "" + renamedVar155.url,
                                "2",
                                renamedVar155.color,
                            );
                        } else {
                            window.core.registerSkin(
                                null,
                                "%" + renamedVar155.ident,
                                "" + renamedVar155.url,
                            );
                        }
                    });
                    window.core.setMinimap(true);
                    window.core.playersMinimap(true);
                    this.isSetup = true;
                }
                this.isAuthSent = false;
                if (
                    this.gameModes.find((renamedVar93) => renamedVar93.type === this.gameMode)
                ) {
                    const renamedVar356 = window.MiniclipAPI.prototype.getHost();
                    const renamedVar291 = new Uint8Array([
                        0x1,
                        ...unescape(encodeURIComponent(renamedVar356))
                        .split("")
                        .map((renamedVar350) => renamedVar350.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(renamedVar291);
                } else if (this.pendingGameMode) {
                    setTimeout(() => {
                        this.changeGameMode(this.pendingGameMode, false);
                        this.pendingGameMode = null;
                    }, 0x3e8);
                }
                this.loadSkin(null);
                this.isPlayerStopped = false;
                this.tournament = {};
                this.serverFatMinions = null;
                this.switchInterface();
            }
            onPacket(isMacroFeeding) {
                const packetBuffer = new Uint8Array(Array.from(isMacroFeeding)).buffer;
                const dataView = new DataView(packetBuffer);
                let offset = 0x0;
            
                const packetType = dataView.getUint8(offset);
                offset += 0x1;
            
                // Check if the packet type is either 0x8 or 0x9 (indicating a valid packet)
                if (packetType === 0x8 || packetType === 0x9) {
                    if (this.gameModes.find((gameMode) => gameMode.type === this.gameMode)) {
                        this.userIdentifier = "";
                        
                        // Read user identifier from the packet
                        while (dataView.getUint8(offset)) {
                            this.userIdentifier += String.fromCharCode(dataView.getUint8(offset++));
                        }
                        this.userIdentifier = decodeURIComponent(escape(this.userIdentifier));
                        offset += 0x1;
            
                        // Read user money
                        this.money = dataView.getUint32(offset, true);
                        offset += 0x4;
            
                        this.skin = "";
                        // Read skin from the packet
                        while (dataView.getUint8(offset)) {
                            this.skin += String.fromCharCode(dataView.getUint8(offset++));
                        }
                        this.skin = decodeURIComponent(escape(this.skin));
                        offset += 0x1;
            
                        let userDescription = "";
                        // Read user description (e.g., "about me")
                        while (dataView.getUint8(offset)) {
                            userDescription += String.fromCharCode(dataView.getUint8(offset++));
                        }
                        userDescription = decodeURIComponent(escape(userDescription));
                        offset += 0x1;
            
                        const maxSplitCommand = dataView.getUint8(offset);
                        offset += 0x1;
            
                        const loadedMinions = dataView.getUint16(offset, true);
                        offset += 0x2;
            
                        const fatAmount = dataView.getUint16(offset, true);
                        offset += 0x2;
            
                        const fatMass = dataView.getUint16(offset, true);
                        offset += 0x2;
            
                        const minionExpireTime = dataView.getUint32(offset, true);
                        this.minions = {
                            loaded: loadedMinions,
                            owner: userDescription,
                            state: maxSplitCommand,
                            amount: loadedMinions,
                            fatAmount: fatAmount,
                            fatMass: fatMass,
                            expireTime: Date.now() + minionExpireTime * 0x3e8,
                            time: () =>
                                Math.max(
                                    Math.ceil((this.minions.expireTime - Date.now()) / 0x3e8),
                                    0x0,
                                ),
                            refundStart: 0x0,
                            refundEnd: 0x0,
                        };
                        offset += 0x4;
            
                        const friendsCount = dataView.getUint16(offset, true);
                        offset += 0x2;
                        this.friends = [];
            
                        // Read friends' names
                        for (let i = 0x0; i < friendsCount; i++) {
                            let friendName = "";
                            while (dataView.getUint8(offset)) {
                                friendName += String.fromCharCode(dataView.getUint8(offset++));
                            }
                            friendName = decodeURIComponent(escape(friendName));
                            this.friends.push(friendName);
                            offset += 0x1;
                        }
            
                        const ownedSkinsCount = dataView.getUint16(offset, true);
                        offset += 0x2;
                        this.ownedSkins = [];
            
                        // Read owned skins
                        for (let i = 0x0; i < ownedSkinsCount; i++) {
                            let skinName = "";
                            while (dataView.getUint8(offset)) {
                                skinName += String.fromCharCode(dataView.getUint8(offset++));
                            }
                            skinName = decodeURIComponent(escape(skinName));
                            this.ownedSkins.push(skinName);
                            offset += 0x1;
                        }
            
                        this.isLogged = true;
                        this.isAuthSent = true;
            
                        // Send data to the mobile client
                        window.core.proxyMobileData(
                            new Uint8Array([!!window[this.defaultProfile] + 0x30]),
                        );
                        this.loadSkin(this.skin);
                        clearInterval(this.listenLoop);
            
                        // Set up a listener for minion expiration
                        if (this.minions.time() > 0x0) {
                            this.listenLoop = setInterval(() => {
                                if (this.minions.time() <= 0x0) {
                                    clearInterval(this.listenLoop);
                                    window.core.proxyMobileData(new Uint8Array([0x9]));
                                }
                                this.updateInterface(true);
                            }, 0x3e8);
                        }
            
                        // Read and update tournament data
                        const tournamentCount = dataView.getUint16(offset, true);
                        offset += 0x2;
            
                        for (let i = 0x0; i < tournamentCount; i++) {
                            let tournamentData = "";
                            while (dataView.getUint8(offset)) {
                                tournamentData += String.fromCharCode(dataView.getUint8(offset++));
                            }
                            tournamentData = decodeURIComponent(escape(tournamentData));
            
                            const tournamentDetails = tournamentData.split(":");
                            const setting = this.settings.find(
                                (setting) => setting.ident === tournamentDetails[0x0],
                            );
                            if (setting) {
                                const previousSetting = JSON.parse(JSON.stringify(setting));
                                setting.value = tournamentDetails[0x1];
                                if (setting.ident === "connection") {
                                    localStorage.setItem(setting.ident, JSON.stringify(setting));
                                    if (setting.value !== previousSetting.value) {
                                        this.changeGameMode("ffa", false);
                                    }
                                }
                            }
                            offset += 0x1;
                        }
            
                        this.tournamentMode = "";
                        // Read tournament mode data
                        while (dataView.getUint8(offset)) {
                            this.tournamentMode += String.fromCharCode(dataView.getUint8(offset++));
                        }
                        this.tournamentMode = decodeURIComponent(escape(this.tournamentMode));
                        offset += 0x1;
            
                        const tournamentStartTime = dataView.getUint32(offset, true);
                        offset += 0x4;
                        const tournamentEndTime = dataView.getUint32(offset, true);
                        this.minions.refundStart = tournamentStartTime;
                        this.minions.refundEnd = tournamentEndTime;
                        offset += 0x4;
            
                        // Check if the server supports fat minions
                        this.serverFatMinions = !!dataView.getUint8(offset);
                        this.updateInterface();
                        return null;
                    }
            
                    this.userIdentifier = null;
                    this.money = null;
                    this.skin = null;
                    this.minions = {
                        loaded: 0x0,
                        owner: "",
                        state: 0x0,
                        amount: 0x0,
                        fatAmount: 0x0,
                        fatMass: 0x0,
                        expireTime: 0x0,
                        time: () => 0x0,
                        refundStart: 0x0,
                        refundEnd: 0x0,
                    };
                    this.friends = [];
                    this.ownedSkins = [];
                    this.tournamentMode = null;
                    this.tournament = {};
                    this.survivorCoins = null;
                    this.serverFatMinions = null;
                    this.isLogged = true;
                    clearInterval(this.listenLoop);
                    this.updateInterface();
                } else {
                    if (packetType === 0xa) {
                        if (this.gameModes.find((gameMode) => gameMode.type === this.gameMode)) {
                            location.reload();
                            return null;
                        }
                    } else {
                        if (packetType === 0xb) {
                            if (this.gameModes.find((gameMode) => gameMode.type === this.gameMode)) {
                                return new Uint8Array([0x8, 0x1, 0x12, 0x7, 0x8, 0x14, 0xa2, 0x1, 0x2, 0x8, 0x3]);
                            }
                        } else {
                            if (packetType === 0xe) {
                                this.tournament.time = dataView.getUint32(offset, true);
                                offset += 0x4;
                                this.tournament.message = "";
                                while (dataView.getUint8(offset)) {
                                    this.tournament.message += String.fromCharCode(dataView.getUint8(offset++));
                                }
                                this.tournament.message = decodeURIComponent(escape(this.tournament.message));
                                offset += 0x1;
                                this.tournament.alive = dataView.getUint32(offset, true);
                                offset += 0x4;
                                this.tournament.dead = dataView.getUint32(offset, true);
                                return null;
                            } else {
                                if (packetType === 0xc) {
                                    this.tournament.time = dataView.getUint32(offset, true);
                                    offset += 0x4;
                                    this.tournament.message = "";
                                    while (dataView.getUint8(offset)) {
                                        this.tournament.message += String.fromCharCode(dataView.getUint8(offset++));
                                    }
                                    this.tournament.message = decodeURIComponent(escape(this.tournament.message));
                                    offset += 0x1;
                                    this.tournament.team1Tag = "";
                                    while (dataView.getUint8(offset)) {
                                        this.tournament.team1Tag += String.fromCharCode(dataView.getUint8(offset++));
                                    }
                                    this.tournament.team1Tag = decodeURIComponent(escape(this.tournament.team1Tag));
                                    offset += 0x1;
                                    this.tournament.team1Score = Math.round(dataView.getFloat32(offset, true));
                                    offset += 0x4;
                                    this.tournament.team1Color = dataView.getUint8(offset);
                                    offset += 0x1;
                                    this.tournament.team2Tag = "";
                                    while (dataView.getUint8(offset)) {
                                        this.tournament.team2Tag += String.fromCharCode(dataView.getUint8(offset++));
                                    }
                                    this.tournament.team2Tag = decodeURIComponent(escape(this.tournament.team2Tag));
                                    offset += 0x1;
                                    this.tournament.team2Score = Math.round(dataView.getFloat32(offset, true));
                                    offset += 0x4;
                                    this.tournament.team2Color = dataView.getUint8(offset);
                                    return null;
                                } else {
                                    if (packetType === 0xd) {
                                        this.survivorCoins = dataView.getInt32(offset, true);
                                        return null;
                                    } else {
                                        if (packetType === 0xf) {
                                            const userId = window.MiniclipAPI.prototype.getUserId();
                                            const userData = new Uint8Array([
                                                0x2,
                                                ...unescape(encodeURIComponent(userId))
                                                    .split("")
                                                    .map((char) => char.charCodeAt(0x0)),
                                                0x0,
                                            ]);
                                            window.core.proxyMobileData(userData);
                                            return null;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return isMacroFeeding;
            }
            
            ["onMouseX"](renamedVar104) {
                if (this.isPlayerStopped) {
                    return window.innerWidth / 0x2;
                }
                return renamedVar104;
            }
            ["onMouseY"](renamedVar145) {
                if (this.isPlayerStopped) {
                    return window.innerHeight / 0x2;
                }
                return renamedVar145;
            }
            ["onPlayerZoom"](renamedVar258) {
                const renamedVar107 = document.getElementById("overlays");
                return renamedVar107 ? 0x0 : renamedVar258;
            }
            ["onDisconnect"](renamedVar352) {
                if (
                    this.gameModes.find((renamedVar342) => renamedVar342.type === this.gameMode) &&
                    renamedVar352.url.indexOf("agar.io") === -0x1 &&
                    this.isSwitchingGameMode === false
                ) {
                    if (document.getElementById("mainui-modes")) {
                        this.changeGameMode("ffa", false);
                    } else {
                        window.MiniclipAPI.prototype.reconnect();
                        this.gameMode = "ffa";
                    }
                } else if (this.isSwitchingGameMode === true) {
                    this.isSwitchingGameMode = false;
                }
            }
            ["loadSkin"](renamedVar229) {
                let renamedVar84;
                if (document.getElementById("skinButton").style.display === "") {
                    renamedVar84 = "skinButton";
                } else {
                    renamedVar84 = "new-skinButton";
                }
                if (renamedVar229) {
                    window.core.loadSkin("%" + renamedVar229);
                    const {
                        skinOpts: renamedVar224
                    } = this.getInterface();
                    const renamedVar284 = document.querySelector(
                        "#" + renamedVar84 + " .skinWrapper img",
                    );
                    renamedVar284.src =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
                    renamedVar284.style.width = "50px";
                    renamedVar284.style.height = "50px";
                    renamedVar284.style.display = "block";
                    renamedVar284.style.backgroundSize = "50px";
                    renamedVar284.style.backgroundImage = "url('" + renamedVar224.url + "')";
                    renamedVar284.style.opacity = "1";
                    const renamedVar261 = document.querySelector(
                        "#" + renamedVar84 + " .skinWrapper",
                    );
                    renamedVar261.style.border = "3px solid " + renamedVar224.color;
                    const renamedVar263 = document.querySelector(
                        "#" + renamedVar84 + " #skinLabel",
                    );
                    renamedVar263.style.display = "none";
                    renamedVar263.style.opacity = "1";
                } else {
                    window.core.loadSkin("%empty");
                    const renamedVar222 = document.querySelector(
                        "#" + renamedVar84 + " .skinWrapper img",
                    );
                    renamedVar222.src =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
                    renamedVar222.style.width = "50px";
                    renamedVar222.style.height = "50px";
                    renamedVar222.style.display = "none";
                    renamedVar222.style.backgroundSize = "50px";
                    renamedVar222.style.backgroundImage = "";
                    renamedVar222.style.opacity = "1";
                    const renamedVar73 = document.querySelector(
                        "#" + renamedVar84 + " .skinWrapper",
                    );
                    renamedVar73.style.border = "3px solid rgb(131, 131, 131)";
                    const renamedVar363 = document.querySelector(
                        "#" + renamedVar84 + " #skinLabel",
                    );
                    renamedVar363.style.display = "block";
                    renamedVar363.style.opacity = "1";
                }
            }
            ["startLoader"]() {
                if (this.pendingGameMode) {
                    document.querySelector(
                        "." + this.pendingGameMode,
                    ).children[0x0].innerHTML = '<img width="50%" src="img/loader.gif" />';
                }
            }
        async ["changeGameMode"](renamedVar182, renamedVar23 = true) {
                if (document.querySelector(".partymode-info")) {
                    if (this.gameModes.find((renamedVar312) => renamedVar312.type === renamedVar182)) {
                        this.pendingGameMode = renamedVar182;
                        document.querySelectorAll(".ffa")[0x0].click();
                    } else {
                        document.querySelectorAll("." + renamedVar182)[0x0].click();
                    }
                    return;
                }
                if (
                    this.gameModes.find((renamedVar125) => renamedVar125.type === this.gameMode) &&
                    renamedVar182 === "ffa"
                ) {
                    this.isIgnoringTeams = true;
                    document.querySelectorAll(".teams")[0x0].click();
                    document.querySelectorAll(".ffa")[0x0].click();
                } else {
                    if (!this.gameModes.find((renamedVar70) => renamedVar70.type === renamedVar182)) {
                        document.querySelectorAll("." + renamedVar182)[0x0].click();
                    } else {
                        if (
                            !this.gameModes.find(
                                (renamedVar22) => renamedVar22.type === this.gameMode,
                            ) &&
                            this.gameMode !== "ffa"
                        ) {
                            this.pendingGameMode = renamedVar182;
                            document.querySelectorAll(".ffa")[0x0].click();
                            this.startLoader();
                        } else {
                            if (
                                this.gameModes.find(
                                    (renamedVar201) => renamedVar201.type === this.gameMode,
                                ) &&
                                renamedVar182 !== this.gameMode
                            ) {
                                this.pendingGameMode = renamedVar182;
                                document.querySelectorAll(".teams")[0x0].click();
                                document.querySelectorAll(".ffa")[0x0].click();
                                this.startLoader();
                            } else {
                                if (
                                    (!this.pendingGameMode || !renamedVar23) &&
                                    renamedVar182 !== this.gameMode
                                ) {
                                    const renamedVar122 = await fetch(
                                            "https://minions.raga.pw/ragamode/findServer", {
                                                cache: "no-store",
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded",
                                                },
                                                body: "gameMode=" + renamedVar182,
                                            },
                                        )
                                        .then((renamedVar292) => renamedVar292.text())
                                        .then((renamedVar270) => {
                                            if (
                                                this.settings.find(
                                                    (renamedVar344) => renamedVar344.ident === "connection",
                                                ).value === "1"
                                            ) {
                                                return renamedVar270.replace("rm", "rm-cf");
                                            } else {
                                                if (
                                                    this.settings.find(
                                                        (renamedVar290) => renamedVar290.ident === "connection",
                                                    ).value === "2"
                                                ) {
                                                    return renamedVar270.replace("rm", "rm-us");
                                                } else {
                                                    if (
                                                        this.settings.find(
                                                            (roundedRectangleCanvas) => roundedRectangleCanvas.ident === "connection",
                                                        ).value === "3"
                                                    ) {
                                                        return renamedVar270.replace("rm", "rm-in");
                                                    }
                                                }
                                            }
                                            return renamedVar270;
                                        })["catch"](() => {});
                                    if (!renamedVar122) {
                                        alert("Something went wrong, please try again later");
                                    } else {
                                        document.querySelectorAll(".ffa")[0x1].className = "item ffa";
                                        document.querySelector("." + this.gameMode).className =
                                            "item " + this.gameMode;
                                        document.querySelector(
                                            "." + renamedVar182,
                                        ).children[0x0].innerHTML = this.gameModes.find(
                                            (renamedVar98) => renamedVar98.type === renamedVar182,
                                        ).fullName;
                                        document.querySelector("." + renamedVar182).className =
                                            "item active " + renamedVar182;
                                        window.core.connect(renamedVar122);
                                        this.gameMode = renamedVar182;
                                        this.isSwitchingGameMode = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            ["formatInterfaceTime"](renamedVar368) {
                if (renamedVar368 < 0x3c) {
                    let renamedVar46 = renamedVar368;
                    renamedVar46 += renamedVar46 === 0x1 ? " second" : " seconds";
                    return renamedVar46;
                }
                if (renamedVar368 < 0xe10) {
                    let renamedVar89 = Math.floor(renamedVar368 / 0x3c);
                    renamedVar89 += renamedVar89 === 0x1 ? " minute" : " minutes";
                    return renamedVar89;
                }
                if (renamedVar368 < 0x15180) {
                    let renamedVar337 = Math.floor(renamedVar368 / 0xe10);
                    let renamedVar127 = Math.floor((renamedVar368 - renamedVar337 * 0xe10) / 0x3c);
                    if (renamedVar127 > 0x0) {
                        renamedVar337 += renamedVar337 === 0x1 ? " hour" : " hrs";
                        renamedVar127 += renamedVar127 === 0x1 ? " minute" : " mins";
                        return renamedVar337 + " " + renamedVar127;
                    }
                    renamedVar337 += renamedVar337 === 0x1 ? " hour" : " hours";
                    return renamedVar337;
                }
                if (renamedVar368 < 0x278d00) {
                    let renamedVar160 = Math.floor(renamedVar368 / 0x15180);
                    let minionEjectCommand = Math.floor((renamedVar368 - renamedVar160 * 0x15180) / 0xe10);
                    if (minionEjectCommand > 0x0) {
                        renamedVar160 += renamedVar160 === 0x1 ? " day" : " days";
                        minionEjectCommand += minionEjectCommand === 0x1 ? " hour" : " hrs";
                        return renamedVar160 + " " + minionEjectCommand;
                    }
                    renamedVar160 += renamedVar160 === 0x1 ? " day" : " days";
                    return renamedVar160;
                }
                let renamedVar219 = Math.floor(renamedVar368 / 0x278d00);
                let renamedVar253 = Math.floor((renamedVar368 - renamedVar219 * 0x3f480) / 0x15180);
                if (renamedVar253 > 0x0) {
                    renamedVar219 += renamedVar219 === 0x1 ? " month" : " months";
                    renamedVar253 += renamedVar253 === 0x1 ? " day" : " days";
                    return renamedVar219 + " " + renamedVar253;
                }
                renamedVar219 += renamedVar219 === 0x1 ? " month" : " months";
                return renamedVar219;
            }
            ["getInterface"]() {
                const renamedVar233 = this.profileImage ?
                    this.profileImage :
                    "img/profilepic_guest.png";
                const renamedVar135 = this.money ? this.money : "0";
                const renamedVar162 =
                    "ID: " +
                    (this.isLogged ?
                        this.ident ?
                        '<span class="ident">' + this.ident + "</span>" :
                        "Loading..." :
                        "Sign in");
                const renamedVar134 = this.profileName ? this.profileName : "Guest";
                let renamedVar74;
                let renamedVar389;
                if (!this.isLogged) {
                    renamedVar74 = "Sign in";
                    renamedVar389 = "Sign in";
                } else {
                    if (this.minions.amount === 0x0 && this.minions.fatAmount === 0x0) {
                        renamedVar74 = "Loading...";
                        renamedVar389 = "Loading...";
                    } else if (this.minions.time() <= 0x0) {
                        renamedVar74 =
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " free minions";
                        renamedVar389 =
                            "You have " +
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " free minions, rent more now";
                    } else {
                        renamedVar74 =
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " minions, " +
                            this.formatInterfaceTime(this.minions.time()) +
                            " left";
                        renamedVar389 =
                            "You have " +
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " minions, rent ends in " +
                            this.formatInterfaceTime(this.minions.time());
                    }
                }
                let renamedVar202 = "";
                if (this.isLogged && this.minions.refundEnd > 0x0) {
                    if (
                        Date.now() > new Date(this.minions.refundStart * 0x3e8) &&
                        Date.now() < new Date(this.minions.refundEnd * 0x3e8)
                    ) {
                        renamedVar202 =
                            '<div class="refund">Click <span onclick="raga.refundMinionsInterface();">here</span> to refund this rent</div>';
                    } else {
                        renamedVar202 =
                            '<div class="refund">Contact our <span onclick="raga.supportMinionsInterface();">Support Center</span> if you need any help</div>';
                    }
                }
                let renamedVar92 = null;
                if (this.skin) {
                    if (this.skin.indexOf("rm_") !== -0x1) {
                        const renamedVar343 = this.skins.find(
                            (renamedVar373) => renamedVar373.ident === this.skin,
                        );
                        renamedVar92 = {
                            url: renamedVar343.url.replace("/normal/", "/small/"),
                            color: "#" +
                                (renamedVar343.color >= 0x0 ? renamedVar343.color : 0xffffff)
                                .toString(0x10)
                                .padStart(0x6, "0"),
                        };
                    } else {
                        const renamedVar56 = this.agarioSkins.find(
                            (renamedVar345) => renamedVar345.ident === this.skin,
                        );
                        renamedVar92 = {
                            url: renamedVar56.url.replace(".png", "_low.png"),
                            color: "#" + renamedVar56.color.toString(0x10).padStart(0x6, "0"),
                        };
                    }
                }
                return {
                    profileImage: renamedVar233,
                    money: renamedVar135,
                    ident: renamedVar162,
                    profileName: renamedVar134,
                    minions: renamedVar74,
                    minionsShop: renamedVar389,
                    minionsShopRefund: renamedVar202,
                    skinOpts: renamedVar92,
                };
            }
            ["updateInterface"](renamedVar32 = false) {
                const renamedVar262 = document.querySelector(".new-user-container");
                if (renamedVar262) {
                    const renamedVar319 = this.getInterface();
                    const renamedVar287 = document.querySelector(
                        ".new-user-container .user-picture",
                    );
                    renamedVar287.src = renamedVar319.profileImage;
                    const renamedVar140 = document.querySelector(
                        ".new-user-container .currency-container .label",
                    );
                    renamedVar140.innerHTML = renamedVar319.money;
                    const renamedVar306 = document.querySelector(
                        ".new-user-container .ident-container",
                    );
                    if (renamedVar306.innerHTML !== renamedVar319.ident) {
                        renamedVar306.innerHTML = renamedVar319.ident;
                    }
                    const renamedVar265 = document.querySelector(
                        ".new-user-container .user-name",
                    );
                    renamedVar265.innerHTML = renamedVar319.profileName;
                    const renamedVar205 = document.querySelector(
                        ".new-user-container .progress-bar-text",
                    );
                    renamedVar205.innerHTML = renamedVar319.minions;
                    const renamedVar178 = document.querySelector(
                        ".leagues-dialog .currency-container .label",
                    );
                    if (renamedVar178) {
                        renamedVar178.innerHTML = renamedVar319.money;
                    }
                    const renamedVar142 = document.querySelector(
                        ".raga-mode-shop .minions-stop",
                    );
                    if (renamedVar142) {
                        renamedVar142.innerHTML = renamedVar319.minionsShop;
                    }
                    const renamedVar206 = document.querySelector(
                        ".raga-mode-shop .minions .refund-container",
                    );
                    if (renamedVar206) {
                        renamedVar206.innerHTML = renamedVar319.minionsShopRefund;
                    }
                    if (!renamedVar32) {
                        const renamedVar194 = document.querySelector(".raga-mode-shop .minions");
                        if (renamedVar194) {
                            this.openShopInterface(0x1);
                        }
                        let renamedVar174 = document.querySelector(".raga-mode-settings");
                        if (renamedVar174) {
                            const {
                                scrollTop: renamedVar151
                            } = renamedVar174;
                            this.openSettingsInterface();
                            renamedVar174 = document.querySelector(".raga-mode-settings");
                            renamedVar174.scrollTop = renamedVar151;
                        }
                    }
                }
                const renamedVar272 = document.getElementById("nick");
                if (renamedVar272) {
                    this.checkSpawnInterface();
                }
                const renamedVar220 = document.getElementById("mainui-modes");
                if (renamedVar220) {
                    let renamedVar68 = 0xed;
                    [...document.querySelectorAll(".item")].forEach((canvasHeight) => {
                        if (canvasHeight.className.indexOf("tourney") !== -0x1) {
                            canvasHeight.style.display = "none";
                            if (canvasHeight.classList.contains(this.tournamentMode)) {
                                canvasHeight.style.display = "flex";
                                renamedVar68 += 0x43;
                            }
                        }
                    });
                    renamedVar220.style.height = renamedVar68 + "px";
                }
            }
            ["openShopInterface"](renamedVar187, renamedVar196 = 0x0) {
                if (!this.isLogged) {
                    alert("Please sign in to use shop");
                    return;
                }
                let renamedVar143 = "";
                renamedVar143 +=
                    '<div onclick="raga.closeShopInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                renamedVar143 += '<div class="leagues-dialog">';
                renamedVar143 +=
                    '<span onclick="raga.closeShopInterface();" class="leagues-inner-close sprite-main Close"></span>';
                renamedVar143 += "<h1>Raga Mode Shop</h1>";
                renamedVar143 +=
                    '<div onclick="raga.openShopInterface(0);" class="currency-container"><span class="label">' +
                    this.getInterface().money +
                    '</span><span class="icon sprite-main currency-icon raga-coins"></span><div class="plus"><span>+</span></div></div>';
                renamedVar143 += '<div id="menu-leagues">';
                renamedVar143 += '<div class="button-row">';
                renamedVar143 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(0);" class="btn btn-myleague' +
                    (renamedVar187 === 0x0 ? "-selected" : "") +
                    ' left">Buy Coins</button></div>';
                renamedVar143 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(1);" class="btn btn-country' +
                    (renamedVar187 === 0x1 ? "-selected" : "") +
                    '">Rent Minions</button></div>';
                renamedVar143 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(2);" class="btn btn-world' +
                    (renamedVar187 === 0x2 ? "-selected" : "") +
                    '">Create Skin</button></div>';
                renamedVar143 += "</div>";
                renamedVar143 += "</div>";
                renamedVar143 += '<div class="raga-mode-shop">';
                if (renamedVar187 === 0x0) {
                    this.shops
                        .filter((renamedVar376) => renamedVar376.money.amount)
                        .forEach((renamedVar111) => {
                            renamedVar143 +=
                                '<div onclick="raga.buyCoinsInterface(' +
                                renamedVar111.id +
                                ');" class="coins-entry"><div class="block first">' +
                                renamedVar111.money.amount +
                                '</div><div class="block">+</div><div class="block"><span class="orange">' +
                                renamedVar111.money.bonus +
                                '%</span></div><div class="block orange-text">=</div><div class="block orange-text">' +
                                Math.round(
                                    renamedVar111.money.amount +
                                    renamedVar111.money.amount * (renamedVar111.money.bonus / 0x64),
                                ) +
                                ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -3px;"></span></div><div class="block"><span class="light">€' +
                                renamedVar111.price.toFixed(0x2) +
                                '</span></div><div class="block green last">Buy</div></div>';
                        });
                } else {
                    if (renamedVar187 === 0x1) {
                        renamedVar143 +=
                            '<div class="minions-stop">' +
                            this.getInterface().minionsShop +
                            "</div>";
                        renamedVar143 += '<div class="minions">';
                        if (
                            this.minions.owner === this.ident &&
                            this.minions.state === 0x1 &&
                            this.minions.time() > 0x0
                        ) {
                            renamedVar143 += '<div class="friends">';
                            renamedVar143 += '<div class="title">Share With Friends</div>';
                            renamedVar143 += '<div class="block">';
                            this.friends.forEach((renamedVar297) => {
                                renamedVar143 +=
                                    '<input type="text" spellcheck="false" placeholder="Enter Friend\'s ID" value="' +
                                    renamedVar297 +
                                    '" class="friend ' +
                                    (renamedVar297 ? "taken" : "") +
                                    '" />';
                            });
                            renamedVar143 += "</div>";
                            renamedVar143 +=
                                '<div onclick="raga.saveFriendsInterface();" class="save">Save</div>';
                            renamedVar143 +=
                                '<div class="refund-container">' +
                                this.getInterface().minionsShopRefund +
                                "</div>";
                            renamedVar143 += "</div>";
                        } else {
                            if (
                                this.minions.owner === this.ident &&
                                this.minions.state === 0x2 &&
                                this.minions.time() > 0x0
                            ) {
                                renamedVar143 +=
                                    '<div class="no-friends">This rent can\'t be shared with friends</div>';
                                renamedVar143 +=
                                    '<div class="refund-container">' +
                                    this.getInterface().minionsShopRefund +
                                    "</div>";
                            } else {
                                if (
                                    this.minions.owner !== this.ident &&
                                    this.minions.time() > 0x0
                                ) {
                                    renamedVar143 += '<div class="cancel-friendship">';
                                    renamedVar143 += '<div class="title">Shared By</div>';
                                    renamedVar143 +=
                                        '<div class="block"><div class="friendship">' +
                                        this.minions.owner +
                                        "</div></div>";
                                    renamedVar143 +=
                                        '<div onclick="raga.cancelFriendshipInterface();" class="cancel">Cancel</div>';
                                    renamedVar143 += "</div>";
                                } else {
                                    if (this.serverFatMinions) {
                                        renamedVar143 +=
                                            '<div id="menu-leagues" style="margin-top: 5px; margin-bottom: 15px; border-spacing: 0;">';
                                        renamedVar143 += '<div class="button-row">';
                                        renamedVar143 +=
                                            '<div class="button-cell"><button onclick="raga.openShopInterface(1, 0);" class="btn btn-one' +
                                            (renamedVar196 === 0x0 ? "-selected" : "") +
                                            ' left">Regular</button></div>';
                                        renamedVar143 +=
                                            '<div class="button-cell"><button onclick="raga.openShopInterface(1, 1);" class="btn btn-two' +
                                            (renamedVar196 === 0x1 ? "-selected" : "") +
                                            '">Solo Bundle (No Sharing)</button></div>';
                                        renamedVar143 += "</div>";
                                        renamedVar143 += "</div>";
                                    }
                                    if (renamedVar196 === 0x0) {
                                        const renamedVar163 = this.shops.filter(
                                            (renamedVar131) => renamedVar131.minions.state === 0x1,
                                        );
                                        renamedVar163
                                            .filter((renamedVar267) => renamedVar267.minions.fatAmount === 0x0)
                                            .forEach((renamedVar88) => {
                                                renamedVar143 += '<div class="minions-entry">';
                                                renamedVar143 += '<div class="block">';
                                                renamedVar143 +=
                                                    '<div class="btn-one title">' +
                                                    renamedVar88.minions.amount +
                                                    " Minions</div>";
                                                renamedVar143 +=
                                                    '<div class="time"><span class="clock-grey sprite-main"></span>' +
                                                    this.formatInterfaceTime(renamedVar88.minions.time) +
                                                    "</div>";
                                                renamedVar143 += '<div class="hr"></div>';
                                                renamedVar143 += '<div class="mass-selector">';
                                                renamedVar143 +=
                                                    '<div onclick="raga.prepareMinionsInterface(this, ' +
                                                    renamedVar88.id +
                                                    ", " +
                                                    renamedVar88.price +
                                                    ');" class="selected"><div></div><span>None</span></div>';
                                                renamedVar163
                                                    .filter(
                                                        (renamedVar57) =>
                                                        renamedVar57.minions.amount ===
                                                        renamedVar88.minions.amount &&
                                                        renamedVar57.minions.time === renamedVar88.minions.time &&
                                                        renamedVar57.minions.fatAmount > 0x0,
                                                    )
                                                    .forEach((renamedVar180) => {
                                                        renamedVar143 +=
                                                            '<div onclick="raga.prepareMinionsInterface(this, ' +
                                                            renamedVar180.id +
                                                            ", " +
                                                            renamedVar180.price +
                                                            ');"><div></div><span>' +
                                                            renamedVar180.minions.fatAmount +
                                                            " Mass Minions</span></div>";
                                                    });
                                                renamedVar143 += "</div>";
                                                renamedVar143 += "</div>";
                                                renamedVar143 +=
                                                    '<div onclick="raga.buyMinionsInterface(this, ' +
                                                    renamedVar88.id +
                                                    ');" class="buy">' +
                                                    renamedVar88.price +
                                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div>';
                                                renamedVar143 += "</div>";
                                            });
                                    } else if (renamedVar196 === 0x1) {
                                        this.shops
                                            .filter((renamedVar360) => renamedVar360.minions.state === 0x2)
                                            .forEach((renamedVar394) => {
                                                renamedVar143 +=
                                                    '<div class="minions-entry"><div class="block"><div class="btn-two title">' +
                                                    renamedVar394.minions.amount +
                                                    " + " +
                                                    renamedVar394.minions.fatAmount +
                                                    ' Minions</div><div class="time">' +
                                                    renamedVar394.minions.fatMass +
                                                    ' mass</div><div class="time"><span class="clock-grey sprite-main"></span>' +
                                                    this.formatInterfaceTime(renamedVar394.minions.time) +
                                                    '</div></div><div onclick="raga.buyMinionsInterface(this, ' +
                                                    renamedVar394.id +
                                                    ');" class="buy">' +
                                                    renamedVar394.price +
                                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div></div>';
                                            });
                                    }
                                }
                            }
                        }
                        renamedVar143 += "</div>";
                    } else {
                        if (renamedVar187 === 0x2) {
                            if (renamedVar196 === 0x0) {
                                renamedVar143 += '<div class="create-skin">';
                                renamedVar143 +=
                                    '<div class="instruction">Recommended image size is 512 x 512 pixels</div>';
                                renamedVar143 += '<div class="border">';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);" class="selected"><span class="green"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="yellow"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="orange"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="red"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="violet"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="pink"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="blue"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="light-blue"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="white"></span></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="black"></span></div>';
                                renamedVar143 += "</div>";
                                renamedVar143 += '<canvas width="208" height="208"></canvas>';
                                renamedVar143 +=
                                    '<label for="select-image-upload" class="select-image">Select image</label><input id="select-image-upload" type="file" accept="image/*" onchange="raga.selectSkinImageInterface(this);" />';
                                renamedVar143 += '<div class="serror"></div>';
                                renamedVar143 +=
                                    '<div onclick="raga.saveSkinInterface(this);" class="save">' +
                                    this.shops.find((renamedVar235) => renamedVar235.skin).price +
                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div>';
                                renamedVar143 += "</div>";
                            } else {
                                if (renamedVar196 === 0x1) {
                                    renamedVar143 += '<div class="create-skin">';
                                    renamedVar143 +=
                                        '<div class="instruction">Please wait while your skin is being created</div>';
                                    renamedVar143 += '<div class="loader"></div>';
                                    renamedVar143 += "</div>";
                                } else if (renamedVar196 === 0x2) {
                                    renamedVar143 += '<div class="create-skin">';
                                    renamedVar143 +=
                                        '<div class="instruction">Your skin is created and will be approved in 24 hours</div>';
                                    renamedVar143 += '<div class="done sprite-common rush_icon"></div>';
                                    renamedVar143 += "</div>";
                                }
                            }
                        }
                    }
                }
                renamedVar143 += "</div>";
                renamedVar143 += "</div>";
                const renamedVar65 = document.createElement("div");
                renamedVar65.innerHTML = renamedVar143;
                const renamedVar308 = document.getElementById("leagues-app");
                if (renamedVar308.lastChild.nodeType === 0x1) {
                    renamedVar308.removeChild(renamedVar308.lastChild);
                }
                renamedVar308.appendChild(renamedVar65);
            }
            ["buyCoinsInterface"](renamedVar298) {
                open(
                    "https://minions.raga.pw/ragamode/coins/" +
                    this.ident +
                    "/" +
                    renamedVar298,
                    "_blank",
                );
            }
            ["prepareMinionsInterface"](renamedVar169, renamedVar34, renamedVar30) {
                const renamedVar234 = renamedVar169.parentNode.parentNode.parentNode;
                const renamedVar401 = renamedVar234.querySelector(".buy");
                renamedVar401.innerHTML = renamedVar401.innerHTML.replace(/\d+/, renamedVar30);
                renamedVar401.setAttribute(
                    "onclick",
                    "raga.buyMinionsInterface(this, " + renamedVar34 + ");",
                );
                const renamedVar136 = renamedVar234.querySelector(
                    ".block .mass-selector>div.selected",
                );
                renamedVar136.className = "";
                renamedVar169.className = "selected";
            }
            ["buyMinionsInterface"](renamedVar110, renamedVar51) {
                if (!confirm("Are you sure you want to rent this package?")) {
                    return;
                }
                if (parseInt(renamedVar110.innerHTML, 0xa) > this.money) {
                    alert("You do not have enough Raga Coins");
                    return;
                }
                const renamedVar359 = new DataView(new ArrayBuffer(0x3));
                let renamedVar161 = 0x0;
                renamedVar359.setUint8(renamedVar161, 0x20);
                renamedVar161 += 0x1;
                renamedVar359.setUint16(renamedVar161, renamedVar51, true);
                const renamedVar147 = new Uint8Array(renamedVar359.buffer);
                window.core.proxyMobileData(renamedVar147);
                window.core.proxyMobileData(new Uint8Array([0x9]));
            }
            ["saveFriendsInterface"]() {
                const renamedVar72 = Array.prototype.slice.call(
                    document.querySelectorAll(
                        ".raga-mode-shop .minions .friends .block .friend",
                    ),
                );
                const renamedVar130 =
                    0x3 +
                    renamedVar72.reduce(
                        (renamedVar329, renamedVar183) =>
                        renamedVar329 +
                        unescape(encodeURIComponent(renamedVar183.value)).length +
                        0x1,
                        0x0,
                    );
                const renamedVar250 = new DataView(new ArrayBuffer(renamedVar130));
                let canvasY = 0x0;
                renamedVar250.setUint8(canvasY, 0x21);
                canvasY += 0x1;
                renamedVar250.setUint16(canvasY, renamedVar72.length, true);
                canvasY += 0x2;
                renamedVar72.forEach((renamedVar191) => {
                    unescape(encodeURIComponent(renamedVar191.value))
                        .split("")
                        .forEach((renamedVar358) => {
                            renamedVar250.setUint8(canvasY++, renamedVar358.charCodeAt(0x0));
                        });
                    renamedVar250.setUint8(canvasY, 0x0);
                    canvasY += 0x1;
                });
                const renamedVar80 = new Uint8Array(renamedVar250.buffer);
                window.core.proxyMobileData(renamedVar80);
                window.core.proxyMobileData(new Uint8Array([0x9]));
            }
            ["refundMinionsInterface"]() {
                if (
                    !confirm(
                        "Are you sure you want to stop this rent and get your coins back?",
                    )
                ) {
                    return;
                }
                window.core.proxyMobileData(new Uint8Array([0xa1]));
                window.core.proxyMobileData(new Uint8Array([0x9]));
            }
            ["supportMinionsInterface"]() {
                this.openCommunityInterface();
            }
            ["cancelFriendshipInterface"]() {
                if (!confirm("Are you sure you want to cancel this rent?")) {
                    return;
                }
                window.core.proxyMobileData(new Uint8Array([0x22]));
                window.core.proxyMobileData(new Uint8Array([0x9]));
            }
            ["selectSkinImageInterface"](renamedVar209) {
                const renamedVar399 = renamedVar209.files[0x0];
                const renamedVar256 = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected>span",
                );
                const renamedVar377 = getComputedStyle(renamedVar256).backgroundColor;
                this.drawSkinInterface(renamedVar399, renamedVar377);
            }
            ["selectSkinBorderInterface"](renamedVar99) {
                const renamedVar223 = document.getElementById("select-image-upload");
                const doubleSplitCommand = renamedVar223.files[0x0];
                const renamedVar248 = getComputedStyle(renamedVar99.firstChild).backgroundColor;
                this.drawSkinInterface(doubleSplitCommand, renamedVar248);
                const renamedVar132 = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected",
                );
                renamedVar132.className = "";
                renamedVar99.className = "selected";
                renamedVar99.style.borderColor = renamedVar248;
            }
            ["drawSkinInterface"](renamedVar303, renamedVar193) {
                const renamedVar300 = document
                    .querySelector(".raga-mode-shop .create-skin canvas")
                    .getContext("2d");
                const renamedVar62 = new Image();
                renamedVar62.onload = () => {
                    renamedVar300.clearRect(
                        0x0,
                        0x0,
                        renamedVar300.canvas.width,
                        renamedVar300.canvas.height,
                    );
                    renamedVar300.save();
                    renamedVar300.beginPath();
                    renamedVar300.arc(
                        renamedVar300.canvas.width / 0x2,
                        renamedVar300.canvas.height / 0x2,
                        0x64,
                        0x0,
                        Math.PI * 0x2,
                        true,
                    );
                    renamedVar300.closePath();
                    renamedVar300.clip();
                    renamedVar300.drawImage(
                        renamedVar62,
                        renamedVar62.naturalWidth / 0x2 - 0x100,
                        renamedVar62.naturalHeight / 0x2 - 0x100,
                        0x200,
                        0x200,
                        renamedVar300.canvas.width / 0x2 - 0x64,
                        renamedVar300.canvas.width / 0x2 - 0x64,
                        0xc8,
                        0xc8,
                    );
                    renamedVar300.restore();
                    renamedVar300.strokeStyle = renamedVar193;
                    renamedVar300.lineWidth = 0x4;
                    renamedVar300.beginPath();
                    renamedVar300.arc(
                        renamedVar300.canvas.width / 0x2,
                        renamedVar300.canvas.height / 0x2,
                        0x64,
                        0x0,
                        Math.PI * 0x2,
                        true,
                    );
                    renamedVar300.closePath();
                    renamedVar300.stroke();
                    const renamedVar197 = document.querySelector(
                        ".raga-mode-shop .create-skin .border",
                    );
                    renamedVar197.style.display = "block";
                    renamedVar300.canvas.style.display = "block";
                    const renamedVar217 = document.querySelector(
                        ".raga-mode-shop .create-skin .serror",
                    );
                    const renamedVar69 = document.querySelector(
                        ".raga-mode-shop .create-skin .save",
                    );
                    if (renamedVar303.size > 1048576) {
                        renamedVar217.innerHTML = "Maximum file size is 1 MB";
                        renamedVar217.style.display = "block";
                        renamedVar69.style.display = "none";
                    } else if (
                        renamedVar62.naturalWidth < 0x200 ||
                        renamedVar62.naturalHeight < 0x200
                    ) {
                        renamedVar217.innerHTML = "Selected image is too small";
                        renamedVar217.style.display = "block";
                        renamedVar69.style.display = "none";
                    } else {
                        renamedVar217.style.display = "none";
                        renamedVar69.style.display = "block";
                    }
                };
                const renamedVar108 = new FileReader();
                renamedVar108.onloadend = () => {
                    renamedVar62.src = renamedVar108.result;
                };
                renamedVar108.readAsDataURL(renamedVar303);
            }
        async ["saveSkinInterface"](renamedVar85) {
                if (!confirm("Are you sure you want to create this skin?")) {
                    return;
                }
                if (parseInt(renamedVar85.innerHTML, 0xa) > this.money) {
                    alert("You do not have enough Raga Coins");
                    return;
                }
                const renamedVar77 = document.getElementById("select-image-upload");
                const renamedVar166 = renamedVar77.files[0x0];
                const renamedVar79 = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected>span",
                );
                const renamedVar198 = getComputedStyle(renamedVar79).backgroundColor;
                const renamedVar362 = renamedVar198
                    .match(/\d+/g)
                    .map((renamedVar369) => parseInt(renamedVar369, 0xa));
                const renamedVar50 =
                    (renamedVar362[0x0] << 0x10) + (renamedVar362[0x1] << 0x8) + renamedVar362[0x2];
                const renamedVar283 = new FormData();
                renamedVar283.append("skin", renamedVar166);
                renamedVar283.append("color", renamedVar50.toString());
                this.openShopInterface(0x2, 0x1);
                const renamedVar199 = await fetch("https://minions.raga.pw/ragamode/skins", {
                        cache: "no-store",
                        method: "POST",
                        body: renamedVar283,
                    })
                    .then((renamedVar102) => renamedVar102.json())["catch"](() => {});
                if (renamedVar199 && renamedVar199.status === "OK") {
                    const renamedVar279 = new Uint8Array([
                        0x23,
                        ...unescape(encodeURIComponent(renamedVar199.claim))
                        .split("")
                        .map((renamedVar41) => renamedVar41.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(renamedVar279);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                    this.openShopInterface(0x2, 0x2);
                }
            }
            ["closeShopInterface"]() {
                const renamedVar167 = document.getElementById("leagues-app");
                if (renamedVar167.lastChild.nodeType === 0x1) {
                    renamedVar167.removeChild(renamedVar167.lastChild);
                }
            }
            ["openSettingsInterface"]() {
                if (!this.isLogged) {
                    alert("Please sign in to use settings");
                    return;
                }
                let minionMaxSplit = "";
                minionMaxSplit +=
                    '<div onclick="raga.closeSettingsInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                minionMaxSplit += '<div class="leagues-dialog">';
                minionMaxSplit +=
                    '<span onclick="raga.closeSettingsInterface();" class="leagues-inner-close sprite-main Close"></span>';
                minionMaxSplit += "<h1>Raga Mode Settings</h1>";
                minionMaxSplit += '<div class="raga-mode-settings">';
                minionMaxSplit += '<div class="settings-entry general">';
                minionMaxSplit += '<div class="section">General</div>';
                this.settings
                    .filter((renamedVar45) => renamedVar45.section === "general")
                    .forEach((renamedVar40) => {
                        minionMaxSplit +=
                            '<div class="command"><div class="name">' +
                            renamedVar40.name +
                            '</div><select onfocus="this.oldValue = this.value;" onchange="raga.changeSettingsInterface(this);" data-ident="' +
                            renamedVar40.ident +
                            '" class="select">' +
                            renamedVar40.command
                            .map(
                                (renamedVar106) =>
                                '<option value="' +
                                renamedVar106.value +
                                '" ' +
                                (renamedVar106.value === renamedVar40.value ? "selected" : "") +
                                ">" +
                                renamedVar106.name +
                                "</option>",
                            )
                            .join() +
                            "</select></div>";
                    });
                minionMaxSplit += "</div>";
                minionMaxSplit += '<div class="settings-entry">';
                minionMaxSplit += '<div class="section">Player</div>';
                this.settings
                    .filter((renamedVar333) => renamedVar333.section === "player")
                    .forEach((renamedVar311) => {
                        minionMaxSplit +=
                            '<div class="command"><div class="name">' +
                            renamedVar311.name +
                            '</div><div onclick="raga.changeSettingsInterface(this);" data-ident="' +
                            renamedVar311.ident +
                            '" data-active="Press a key" class="value ' +
                            (this.settings.filter(
                                    (renamedVar388) =>
                                    typeof renamedVar388.command === "function" &&
                                    renamedVar388.value === renamedVar311.value,
                                ).length > 0x1 ?
                                "conflict" :
                                "") +
                            '"><span>' +
                            renamedVar311.value.replace(" ", "space").toUpperCase() +
                            "</span></div></div>";
                    });
                minionMaxSplit += "</div>";
                minionMaxSplit += '<div class="settings-entry">';
                minionMaxSplit += '<div class="section">Minion</div>';
                this.settings
                    .filter((renamedVar118) => renamedVar118.section === "minion")
                    .forEach((renamedVar273) => {
                        minionMaxSplit +=
                            '<div class="command"><div class="name">' +
                            renamedVar273.name +
                            '</div><div onclick="raga.changeSettingsInterface(this);" data-ident="' +
                            renamedVar273.ident +
                            '" data-active="Press a key" class="value ' +
                            (this.settings.filter(
                                    (renamedVar325) =>
                                    typeof renamedVar325.command === "function" &&
                                    renamedVar325.value === renamedVar273.value,
                                ).length > 0x1 ?
                                "conflict" :
                                "") +
                            '"><span>' +
                            renamedVar273.value.replace(" ", "space").toUpperCase() +
                            "</span></div></div>";
                    });
                minionMaxSplit += "</div>";
                minionMaxSplit += "</div>";
                minionMaxSplit += "</div>";
                const renamedVar274 = document.createElement("div");
                renamedVar274.innerHTML = minionMaxSplit;
                const renamedVar240 = document.getElementById("leagues-app");
                if (renamedVar240.lastChild.nodeType === 0x1) {
                    renamedVar240.removeChild(renamedVar240.lastChild);
                }
                renamedVar240.appendChild(renamedVar274);
            }
            ["changeSettingsInterface"](renamedVar249) {
                const renamedVar60 = this.settings.find(
                    (renamedVar133) => renamedVar133.ident === renamedVar249.getAttribute("data-ident"),
                );
                if (renamedVar60.section === "general") {
                    if (renamedVar60.ident === "connection") {
                        if (!confirm("The game will restart now to apply the changes")) {
                            renamedVar249.value = renamedVar249.oldValue;
                            return;
                        }
                    }
                    const renamedVar24 = renamedVar60.ident + ":" + renamedVar249.value;
                    const renamedVar252 = new Uint8Array([
                        0x24,
                        ...unescape(encodeURIComponent(renamedVar24))
                        .split("")
                        .map((renamedVar177) => renamedVar177.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(renamedVar252);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                } else {
                    if (!this.changingSettings) {
                        this.changingSettings = {
                            element: renamedVar249,
                            entry: renamedVar60,
                        };
                        renamedVar249.classList.toggle("active");
                    } else if (renamedVar60.ident === this.changingSettings.entry.ident) {
                        this.changingSettings = null;
                        renamedVar249.classList.toggle("active");
                    }
                }
            }
            ["closeSettingsInterface"]() {
                this.changingSettings = null;
                const renamedVar331 = document.getElementById("leagues-app");
                if (renamedVar331.lastChild.nodeType === 0x1) {
                    renamedVar331.removeChild(renamedVar331.lastChild);
                }
            }
            ["openCommunityInterface"]() {
                open("https://discord.com/invite/UK4R9fg", "_blank");
            }
            ["openSkinSelectorInterface"](renamedVar295) {
                if (!this.isLogged) {
                    alert("Please sign in to use skins");
                    return;
                }
                let renamedVar232 = "";
                renamedVar232 +=
                    '<div onclick="raga.closeSkinSelectorInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                renamedVar232 += '<div class="leagues-dialog">';
                renamedVar232 +=
                    '<span onclick="raga.closeSkinSelectorInterface();" class="leagues-inner-close sprite-main Close"></span>';
                renamedVar232 += "<h1>Raga Mode Skins</h1>";
                renamedVar232 += '<div id="menu-leagues" style="margin-top: 15px;">';
                renamedVar232 += '<div class="button-row">';
                renamedVar232 +=
                    '<div class="button-cell"><button onclick="raga.openSkinSelectorInterface(0);" class="btn btn-world' +
                    (renamedVar295 === 0x0 ? "-selected" : "") +
                    ' left">Normal</button></div>';
                renamedVar232 +=
                    '<div class="button-cell"><button onclick="raga.openSkinSelectorInterface(1);" class="btn btn-world' +
                    (renamedVar295 === 0x1 ? "-selected" : "") +
                    '">Custom</button></div>';
                renamedVar232 += "</div>";
                renamedVar232 += "</div>";
                renamedVar232 += '<div class="raga-mode-skin-selector">';
                if (renamedVar295 === 0x0) {
                    this.agarioSkins.forEach((renamedVar227) => {
                        renamedVar232 +=
                            "<div onclick=\"raga.setSkinInterface(this, '" +
                            renamedVar227.ident +
                            '\');" class="skin-entry ' +
                            (renamedVar227.ident === this.skin ? "selected" : "") +
                            '" style="background-image: url(\'' +
                            renamedVar227.url.replace(".png", "_low.png") +
                            "'); border: 3px solid #" +
                            renamedVar227.color.toString(0x10).padStart(0x6, "0") +
                            ';"></div>';
                    });
                } else if (renamedVar295 === 0x1) {
                    this.ownedSkins.forEach((renamedVar326) => {
                        const renamedVar318 = this.skins.find(
                            (renamedVar285) => renamedVar285.ident === renamedVar326,
                        );
                        if (!renamedVar318) {
                            renamedVar232 +=
                                '<div onclick="raga.setSkinInterface(this);" class="skin-entry pending" style="background-image: url(\'https://minions.raga.pw/ragamode/skins/small/' +
                                renamedVar326 +
                                "'); border: 3px solid #ffffff;\">";
                            renamedVar232 += '<div class="sprite-common rush_icon"></div>';
                            renamedVar232 += '<div class="overlay-container">';
                            renamedVar232 +=
                                "<div onclick=\"raga.copySkinInterface('" +
                                renamedVar326 +
                                '\', event);" class="copy"></div>';
                            renamedVar232 += "</div>";
                            renamedVar232 += "</div>";
                        } else {
                            renamedVar232 +=
                                "<div onclick=\"raga.setSkinInterface(this, '" +
                                renamedVar318.ident +
                                '\');" class="skin-entry ' +
                                (renamedVar318.ident === this.skin ? "selected" : "") +
                                '" style="background-image: url(\'' +
                                renamedVar318.url.replace("/normal/", "/small/") +
                                "'); border: 3px solid #" +
                                (renamedVar318.color >= 0x0 ? renamedVar318.color : 0xffffff)
                                .toString(0x10)
                                .padStart(0x6, "0") +
                                ';">';
                            renamedVar232 += '<div class="overlay-container">';
                            renamedVar232 +=
                                "<div onclick=\"raga.removeSkinInterface(this, '" +
                                renamedVar318.ident +
                                '\', event);" class="remove" style="visibility: ' +
                                (renamedVar318.ident !== this.skin ? "visible" : "hidden") +
                                ';"></div>';
                            renamedVar232 +=
                                "<div onclick=\"raga.copySkinInterface('" +
                                renamedVar318.ident +
                                '\', event);" class="copy"></div>';
                            renamedVar232 += "</div>";
                            renamedVar232 += "</div>";
                        }
                    });
                }
                renamedVar232 += "</div>";
                renamedVar232 += "</div>";
                const renamedVar121 = document.createElement("div");
                renamedVar121.innerHTML = renamedVar232;
                const renamedVar288 = document.getElementById("leagues-app");
                if (renamedVar288.lastChild.nodeType === 0x1) {
                    renamedVar288.removeChild(renamedVar288.lastChild);
                }
                renamedVar288.appendChild(renamedVar121);
            }
            ["setSkinInterface"](renamedVar243, renamedVar385 = null) {
                if (window.core.playerHasCells()) {
                    alert("You can't change skin while playing");
                    return;
                }
                if (!renamedVar385) {
                    alert("This skin is not approved yet");
                    return;
                }
                const renamedVar115 = renamedVar243.classList.contains("selected") ?
                    "" :
                    renamedVar385;
                const renamedVar138 = new Uint8Array([
                    0x25,
                    ...unescape(encodeURIComponent(renamedVar115))
                    .split("")
                    .map((currentGameModeType) => currentGameModeType.charCodeAt(0x0)),
                    0x0,
                ]);
                window.core.proxyMobileData(renamedVar138);
                window.core.proxyMobileData(new Uint8Array([0x9]));
                const renamedVar214 = document.querySelector(
                    ".raga-mode-skin-selector .skin-entry.selected",
                );
                if (renamedVar214) {
                    renamedVar214.classList.toggle("selected");
                    if (renamedVar214.children.length) {
                        renamedVar214.children[0x0].children[0x0].style.visibility = "visible";
                    }
                }
                if (renamedVar243 !== renamedVar214) {
                    renamedVar243.classList.toggle("selected");
                    if (renamedVar243.children.length) {
                        renamedVar243.children[0x0].children[0x0].style.visibility = "hidden";
                    }
                }
            }
            ["removeSkinInterface"](renamedVar335, canvasX, renamedVar170) {
                if (
                    confirm(
                        "Are you sure you want to remove this skin, coins will not be refunded?",
                    )
                ) {
                    const renamedVar387 = new Uint8Array([
                        0xa0,
                        ...unescape(encodeURIComponent(canvasX))
                        .split("")
                        .map((renamedVar315) => renamedVar315.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(renamedVar387);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                    renamedVar335.parentNode.parentNode.remove();
                }
                renamedVar170.stopPropagation();
            }
            ["copySkinInterface"](renamedVar375, renamedVar55) {
                navigator.clipboard
                    .writeText(renamedVar375)
                    .then(() => alert("Skin ID is copied to clipboard"));
                renamedVar55.stopPropagation();
            }
            ["closeSkinSelectorInterface"]() {
                const renamedVar398 = document.getElementById("leagues-app");
                if (renamedVar398.lastChild.nodeType === 0x1) {
                    renamedVar398.removeChild(renamedVar398.lastChild);
                }
            }
            ["checkSpawnInterface"]() {
                const renamedVar78 = document.getElementById("nick");
                const renamedVar215 = document.getElementById("play");
                if (
                    this.gameMode &&
                    this.tournamentMode &&
                    this.gameMode === this.tournamentMode &&
                    !this.isAuthSent
                ) {
                    renamedVar78.disabled = true;
                    renamedVar215.innerHTML = "Please Wait";
                    renamedVar215.disabled = true;
                } else {
                    renamedVar78.disabled = false;
                    renamedVar215.innerHTML = "Play";
                    renamedVar215.disabled = false;
                }
            }
            ["switchInterface"]() {
                if (document.getElementById("mainui-user") && this.gameMode) {
                    if (
                        this.gameModes.find((renamedVar58) => renamedVar58.type === this.gameMode)
                    ) {
                        const renamedVar307 = document.querySelector(".user-container");
                        renamedVar307.style.display = "none";
                        let horizontalLineStop = document.querySelector(".new-user-container");
                        if (!horizontalLineStop) {
                            let renamedVar276 = "";
                            renamedVar276 +=
                                '<img src="' +
                                this.getInterface().profileImage +
                                '" class="user-picture" />';
                            renamedVar276 +=
                                '<div onclick="raga.openShopInterface(0);" class="currency-container"><span class="label">' +
                                this.getInterface().money +
                                '</span><span class="icon sprite-main currency-icon raga-coins"></span><div class="plus"><span>+</span></div></div>';
                            renamedVar276 +=
                                '<div class="ident-container">' +
                                this.getInterface().ident +
                                "</div>";
                            renamedVar276 +=
                                '<div class="user-name">' +
                                this.getInterface().profileName +
                                "</div>";
                            renamedVar276 +=
                                '<div class="progress-bar-container"><div class="progress-bar" style="width: 0%;"></div><span class="progress-bar-text">' +
                                this.getInterface().minions +
                                "</span></div>";
                            horizontalLineStop = document.createElement("div");
                            horizontalLineStop.className = "new-user-container";
                            horizontalLineStop.innerHTML = renamedVar276;
                            renamedVar307.parentNode.appendChild(horizontalLineStop);
                        }
                        horizontalLineStop.style.display = "block";
                        const renamedVar95 = document.querySelector(".offers-container");
                        renamedVar95.style.display = "none";
                        let renamedVar35 = document.querySelector(".new-offers-container");
                        if (!renamedVar35) {
                            let renamedVar237 = "";
                            renamedVar237 += '<div class="buttons-container">';
                            renamedVar237 +=
                                '<div onclick="raga.openShopInterface(0);" class="shop"><span class="label">Shop</span><span class="sprite-main Icon-Store"></span></div>';
                            renamedVar237 +=
                                '<div onclick="raga.openSettingsInterface();" class="settings"><span class="label">Settings</span><span class="sprite-main controller"></span></div>';
                            renamedVar237 +=
                                '<div onclick="raga.openCommunityInterface();" class="community"><span class="label">Community</span><span class="sprite-main Icon-Leaderboards"></span></div>';
                            renamedVar237 += "</div>";
                            renamedVar35 = document.createElement("div");
                            renamedVar35.className = "new-offers-container";
                            renamedVar35.innerHTML = renamedVar237;
                            renamedVar95.parentNode.appendChild(renamedVar35);
                        }
                        renamedVar35.style.display = "block";
                        const renamedVar264 = document.getElementById("mainui-features");
                        renamedVar264.style.display = "none";
                        const renamedVar355 = document.querySelector(".bubble");
                        if (renamedVar355) {
                            renamedVar355.style.display = "none";
                        }
                        const renamedVar257 = document.getElementById("skinButton");
                        renamedVar257.style.display = "none";
                        const renamedVar301 = document.getElementById("new-skinButton");
                        renamedVar301.style.display = "";
                    } else {
                        const renamedVar152 = document.querySelector(".user-container");
                        renamedVar152.style.display = "block";
                        const renamedVar101 = document.querySelector(".new-user-container");
                        if (renamedVar101) {
                            renamedVar101.style.display = "none";
                        }
                        const renamedVar49 = document.querySelector(".offers-container");
                        renamedVar49.style.display = "block";
                        const renamedVar328 = document.querySelector(".new-offers-container");
                        if (renamedVar328) {
                            renamedVar328.style.display = "none";
                        }
                        const renamedVar112 = document.getElementById("mainui-features");
                        renamedVar112.style.display = "block";
                        const renamedVar94 = document.querySelector(".bubble");
                        if (renamedVar94) {
                            renamedVar94.style.display = "block";
                        }
                        const renamedVar83 = document.getElementById("skinButton");
                        renamedVar83.style.display = "";
                        const renamedVar103 = document.getElementById("new-skinButton");
                        renamedVar103.style.display = "none";
                    }
                    this.checkSpawnInterface();
                    this.closeShopInterface();
                }
            }
            ["renderCounter"](renamedVar113) {
                const renamedVar158 = 0xd * renamedVar113;
                const renamedVar251 = 0xe * renamedVar113;
                this.hud.counter.font = renamedVar158 + "px Ubuntu";
                const renamedVar159 = this.hud.counter.measureText(this.developer).width;
                const minionSplitCommand = this.hud.counter.measureText("M").width;
                const renamedVar396 = renamedVar159 + 0x3c * renamedVar113;
                const renamedVar340 = minionSplitCommand + 0xa * renamedVar113;
                this.hud.counter.font = renamedVar251 + "px Ubuntu";
                const renamedVar357 = this.hud.counter.measureText(
                    this.hud.utils.getSurvivorCoins(),
                ).width;
                const renamedVar153 = this.hud.counter.measureText("M").width;
                this.hud.counter.font = renamedVar158 + "px Ubuntu";
                const renamedVar346 = renamedVar357 + 0x32 * renamedVar113;
                const renamedVar293 = renamedVar153 + 0xf * renamedVar113;
                const renamedVar372 = 0x3c * renamedVar113;
                const renamedVar244 = 0x8 * renamedVar113;
                const renamedVar275 = 0x10 * renamedVar113;
                const renamedVar157 = 0x10 * renamedVar113;
                const renamedVar378 = this.hud.counter.measureText(
                    this.hud.utils.getGameMode(),
                ).width;
                const renamedVar116 = 0x1e * renamedVar113;
                const renamedVar238 = 0x23 * renamedVar113;
                const minionMacroFeedToggle = 0x10 * renamedVar113;
                const renamedVar66 = 0x10 * renamedVar113;
                const renamedVar382 = this.hud.counter.measureText(
                    this.hud.utils.getMinions(),
                ).width;
                const renamedVar82 = 0x12c * renamedVar113;
                const renamedVar323 = renamedVar340 / 0x2 + renamedVar372 + renamedVar293;
                this.hud.counter.canvas.width = renamedVar82;
                this.hud.counter.canvas.height = renamedVar323;
                this.hud.counter.clearRect(
                    0x0,
                    0x0,
                    this.hud.counter.canvas.width,
                    this.hud.counter.canvas.height,
                );
                this.hud.counter.font = renamedVar158 + "px Ubuntu";
                this.hud.counter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        0x0,
                        renamedVar340 / 0x2,
                        renamedVar82,
                        renamedVar372,
                        renamedVar372 / 1.8,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        this.hud.counter.canvas.width / 0x2 - renamedVar396 / 0x2,
                        0x0,
                        renamedVar396,
                        renamedVar340,
                        renamedVar340 / 1.8,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#ffffff";
                this.hud.counter.fillText(
                    this.developer,
                    this.hud.counter.canvas.width / 0x2 - renamedVar159 / 0x2,
                    renamedVar340 / 0x2 + minionSplitCommand / 2.5,
                );
                const renamedVar52 = new Image();
                renamedVar52.src = this.hud.images.gameMode;
                this.hud.counter.drawImage(
                    renamedVar52,
                    renamedVar372 / 1.8 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        renamedVar372 / 1.8 / 0x2 -
                        renamedVar116 / 0x2 -
                        (renamedVar275 + renamedVar244 + renamedVar378)) /
                    0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    renamedVar157 / 0x2 +
                    renamedVar340 / 0x4 -
                    renamedVar293 / 0x2,
                    renamedVar275,
                    renamedVar157,
                );
                this.hud.counter.fillText(
                    this.hud.utils.getGameMode(),
                    renamedVar372 / 1.8 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        renamedVar372 / 1.8 / 0x2 -
                        renamedVar116 / 0x2 -
                        (renamedVar275 + renamedVar244 + renamedVar378)) /
                    0x2 +
                    renamedVar275 +
                    renamedVar244,
                    this.hud.counter.canvas.height / 0x2 +
                    this.hud.counter.measureText("M").width / 2.5 +
                    renamedVar340 / 0x4 -
                    renamedVar293 / 0x2,
                );
                const renamedVar119 = new Image();
                renamedVar119.src = this.hud.images.logo;
                this.hud.counter.drawImage(
                    renamedVar119,
                    this.hud.counter.canvas.width / 0x2 - renamedVar116 / 0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    renamedVar238 / 0x2 +
                    renamedVar340 / 0x2 -
                    renamedVar293 / 1.6,
                    renamedVar116,
                    renamedVar238,
                );
                const renamedVar332 = new Image();
                renamedVar332.src = this.hud.images.minions;
                this.hud.counter.drawImage(
                    renamedVar332,
                    this.hud.counter.canvas.width / 0x2 +
                    renamedVar116 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        renamedVar116 / 0x2 -
                        renamedVar372 / 1.8 / 0x2 -
                        (minionMacroFeedToggle + renamedVar244 + renamedVar382)) /
                    0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    renamedVar66 / 0x2 +
                    renamedVar340 / 0x4 -
                    renamedVar293 / 0x2,
                    minionMacroFeedToggle,
                    renamedVar66,
                );
                this.hud.counter.fillText(
                    this.hud.utils.getMinions(),
                    this.hud.counter.canvas.width / 0x2 +
                    renamedVar116 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        renamedVar116 / 0x2 -
                        renamedVar372 / 1.8 / 0x2 -
                        (minionMacroFeedToggle + renamedVar244 + renamedVar382)) /
                    0x2 +
                    minionMacroFeedToggle +
                    renamedVar244,
                    this.hud.counter.canvas.height / 0x2 +
                    this.hud.counter.measureText("M").width / 2.5 +
                    renamedVar340 / 0x4 -
                    renamedVar293 / 0x2,
                );
                this.hud.counter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        this.hud.counter.canvas.width / 0x2 - renamedVar346 / 0x2,
                        this.hud.counter.canvas.height - renamedVar293 - renamedVar293 / 0x4,
                        renamedVar346,
                        renamedVar293,
                        renamedVar293 / 0x2,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#ffffff";
                this.hud.counter.fillText(
                    this.hud.utils.getSurvivorCoins(),
                    this.hud.counter.canvas.width / 0x2 - renamedVar357 / 0x2,
                    this.hud.counter.canvas.height - renamedVar293 / 0x2 - renamedVar153 / 3.5,
                );
                return this.hud.counter.canvas;
            }
            ["renderTournamentCounterSolo"](renamedVar48) {
                const renamedVar47 = 0xd * renamedVar48;
                const renamedVar37 = 0x10 * renamedVar48;
                this.hud.tournamentCounter.font = renamedVar47 + "px Ubuntu";
                const renamedVar302 =
                    this.hud.tournamentCounter.measureText("Raga Tournament").width;
                const renamedVar371 = this.hud.tournamentCounter.measureText("M").width;
                const renamedVar76 = renamedVar302 + 0x3c * renamedVar48;
                const renamedVar207 = renamedVar371 + 0xa * renamedVar48;
                this.hud.tournamentCounter.font = renamedVar37 + "px Ubuntu";
                let renamedVar39 = "";
                let renamedVar213 = [];
                let renamedVar336 = 0x0;
                if (this.tournament.message) {
                    renamedVar39 = this.tournament.message;
                    const renamedVar245 = renamedVar39.split(",");
                    if (renamedVar245.length === 0x3) {
                        renamedVar213 = renamedVar245;
                        renamedVar336 = 0x32 * renamedVar48;
                    }
                } else {
                    renamedVar39 = new Date(this.tournament.time * 0x3e8)
                        .toISOString()
                        .substr(0xe, 0x5);
                }
                let renamedVar81 = this.hud.tournamentCounter.measureText(renamedVar39).width;
                if (renamedVar213.length === 0x3) {
                    renamedVar213.forEach((renamedVar278, renamedVar339) => {
                        while (
                            this.hud.tournamentCounter.measureText(renamedVar278).width >
                            Math.round(this.hud.tournamentCounter.canvas.width * 0.6)
                        ) {
                            renamedVar278 = renamedVar278.slice(0x0, -0x1);
                        }
                        renamedVar213[renamedVar339] = renamedVar278;
                    });
                    renamedVar81 =
                        this.hud.tournamentCounter.measureText(
                            renamedVar213.reduce((renamedVar146, renamedVar259) =>
                                this.hud.tournamentCounter.measureText(renamedVar146).width >
                                this.hud.tournamentCounter.measureText(renamedVar259).width ?
                                renamedVar146 :
                                renamedVar259,
                            ),
                        ).width +
                        0xa * renamedVar48;
                }
                const renamedVar192 = this.hud.tournamentCounter.measureText("M").width;
                this.hud.tournamentCounter.font = renamedVar47 + "px Ubuntu";
                const renamedVar172 = renamedVar81 + 0x3c * renamedVar48;
                const renamedVar349 = renamedVar192 + 0x14 * renamedVar48;
                const renamedVar366 = 0x46 * renamedVar48;
                const renamedVar374 = 0x8 * renamedVar48;
                this.hud.tournamentCounter.font = renamedVar37 + "px Ubuntu";
                const renamedVar26 = this.hud.tournamentCounter.measureText("Alive").width;
                const renamedVar188 = this.hud.tournamentCounter.measureText(
                    this.tournament.alive,
                ).width;
                this.hud.tournamentCounter.font = renamedVar47 + "px Ubuntu";
                const renamedVar354 = 0x1e * renamedVar48;
                const renamedVar313 = 0x23 * renamedVar48;
                this.hud.tournamentCounter.font = renamedVar37 + "px Ubuntu";
                const renamedVar226 = this.hud.tournamentCounter.measureText("Dead").width;
                const renamedVar27 = this.hud.tournamentCounter.measureText(
                    this.tournament.dead,
                ).width;
                this.hud.tournamentCounter.font = renamedVar47 + "px Ubuntu";
                const renamedVar97 = 0x190 * renamedVar48;
                const renamedVar246 = renamedVar207 / 0x2 + renamedVar366 + renamedVar349 + renamedVar336;
                this.hud.tournamentCounter.canvas.width = renamedVar97;
                this.hud.tournamentCounter.canvas.height = renamedVar246;
                this.hud.tournamentCounter.clearRect(
                    0x0,
                    0x0,
                    this.hud.tournamentCounter.canvas.width,
                    this.hud.tournamentCounter.canvas.height,
                );
                this.hud.tournamentCounter.font = renamedVar47 + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        0x0,
                        renamedVar207 / 0x2,
                        renamedVar97,
                        renamedVar366,
                        renamedVar366 / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar76 / 0x2,
                        0x0,
                        renamedVar76,
                        renamedVar207,
                        renamedVar207 / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Raga Tournament",
                    this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar302 / 0x2,
                    renamedVar207 / 0x2 + renamedVar371 / 2.5,
                );
                this.hud.tournamentCounter.font = renamedVar37 + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Alive",
                    renamedVar366 / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar366 / 1.8 / 0x2 -
                        renamedVar354 / 0x2 -
                        (renamedVar26 + renamedVar374 + renamedVar188)) /
                    0x2,
                    (this.hud.tournamentCounter.canvas.height - renamedVar336) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar349 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.alive,
                    renamedVar366 / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar366 / 1.8 / 0x2 -
                        renamedVar354 / 0x2 -
                        (renamedVar26 + renamedVar374 + renamedVar188)) /
                    0x2 +
                    renamedVar26 +
                    renamedVar374,
                    (this.hud.tournamentCounter.canvas.height - renamedVar336) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar349 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                const renamedVar124 = new Image();
                renamedVar124.src = this.hud.images.logo;
                this.hud.tournamentCounter.drawImage(
                    renamedVar124,
                    this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar354 / 0x2,
                    (this.hud.tournamentCounter.canvas.height - renamedVar336) / 0x2 -
                    renamedVar313 / 0x2 -
                    renamedVar349 / 0x4,
                    renamedVar354,
                    renamedVar313,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Dead",
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    renamedVar354 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar354 / 0x2 -
                        renamedVar366 / 1.8 / 0x2 -
                        (renamedVar226 + renamedVar374 + renamedVar27)) /
                    0x2,
                    (this.hud.tournamentCounter.canvas.height - renamedVar336) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar349 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.dead,
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    renamedVar354 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar354 / 0x2 -
                        renamedVar366 / 1.8 / 0x2 -
                        (renamedVar226 + renamedVar374 + renamedVar27)) /
                    0x2 +
                    renamedVar226 +
                    renamedVar374,
                    (this.hud.tournamentCounter.canvas.height - renamedVar336) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar349 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar172 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        renamedVar336 -
                        renamedVar349 -
                        renamedVar349 / 0x4,
                        renamedVar172,
                        renamedVar349 + renamedVar336,
                        renamedVar349 / 0x2,
                    )
                    .fill();
                if (renamedVar213.length === 0x3) {
                    let renamedVar28 = 0x0;
                    let renamedVar351 = 0x1;
                    renamedVar213.forEach((renamedVar114) => {
                        if (renamedVar351 === 0x1) {
                            this.hud.tournamentCounter.fillStyle = "#e9e077";
                        } else {
                            if (renamedVar351 === 0x2) {
                                this.hud.tournamentCounter.fillStyle = "#d4d4d4";
                            } else if (renamedVar351 === 0x3) {
                                this.hud.tournamentCounter.fillStyle = "#f8c48c";
                            }
                        }
                        this.hud.tournamentCounter.fillText(
                            renamedVar351++ + ". " + renamedVar114,
                            this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar81 / 0x2,
                            this.hud.tournamentCounter.canvas.height -
                            renamedVar336 -
                            renamedVar349 / 0x2 -
                            renamedVar192 / 0x3 +
                            renamedVar28,
                        );
                        renamedVar28 += 0x19 * renamedVar48;
                    });
                } else {
                    this.hud.tournamentCounter.fillStyle = "#ffffff";
                    this.hud.tournamentCounter.fillText(
                        renamedVar39,
                        this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar81 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        renamedVar336 -
                        renamedVar349 / 0x2 -
                        renamedVar192 / 0x3,
                    );
                }
                return this.hud.tournamentCounter.canvas;
            }
            ["renderTournamentCounterTeams"](renamedVar260) {
                const renamedVar327 = 0xd * renamedVar260;
                const renamedVar156 = 0x10 * renamedVar260;
                this.hud.tournamentCounter.font = renamedVar327 + "px Ubuntu";
                const renamedVar239 =
                    this.hud.tournamentCounter.measureText("Raga Tournament").width;
                const renamedVar230 = this.hud.tournamentCounter.measureText("M").width;
                const tripleSplitCommand = renamedVar239 + 0x3c * renamedVar260;
                const renamedVar204 = renamedVar230 + 0xa * renamedVar260;
                this.hud.tournamentCounter.font = renamedVar156 + "px Ubuntu";
                let renamedVar139 = "";
                if (this.tournament.message && this.tournament.time > 0x0) {
                    renamedVar139 = "Draw in " + this.tournament.time + "!";
                } else if (this.tournament.message) {
                    renamedVar139 = this.tournament.message;
                } else {
                    renamedVar139 = new Date(this.tournament.time * 0x3e8)
                        .toISOString()
                        .substr(0xe, 0x5);
                }
                const renamedVar386 = this.hud.tournamentCounter.measureText(renamedVar139).width;
                const renamedVar347 = this.hud.tournamentCounter.measureText("M").width;
                this.hud.tournamentCounter.font = renamedVar327 + "px Ubuntu";
                const renamedVar96 = renamedVar386 + 0x3c * renamedVar260;
                const renamedVar208 = renamedVar347 + 0x14 * renamedVar260;
                const renamedVar254 = 0x46 * renamedVar260;
                const renamedVar392 = 0x8 * renamedVar260;
                this.hud.tournamentCounter.font = renamedVar156 + "px Ubuntu";
                const renamedVar367 = this.hud.tournamentCounter.measureText(
                    this.tournament.team1Tag,
                ).width;
                const renamedVar100 = this.hud.tournamentCounter.measureText(
                    this.tournament.team1Score,
                ).width;
                this.hud.tournamentCounter.font = renamedVar327 + "px Ubuntu";
                const renamedVar296 = 0x1e * renamedVar260;
                const renamedVar164 = 0x23 * renamedVar260;
                this.hud.tournamentCounter.font = renamedVar156 + "px Ubuntu";
                const renamedVar200 = this.hud.tournamentCounter.measureText(
                    this.tournament.team2Tag,
                ).width;
                const renamedVar390 = this.hud.tournamentCounter.measureText(
                    this.tournament.team2Score,
                ).width;
                this.hud.tournamentCounter.font = renamedVar327 + "px Ubuntu";
                const minionInvertCommand = 0x190 * renamedVar260;
                const renamedVar185 = renamedVar204 / 0x2 + renamedVar254 + renamedVar208;
                this.hud.tournamentCounter.canvas.width = minionInvertCommand;
                this.hud.tournamentCounter.canvas.height = renamedVar185;
                this.hud.tournamentCounter.clearRect(
                    0x0,
                    0x0,
                    this.hud.tournamentCounter.canvas.width,
                    this.hud.tournamentCounter.canvas.height,
                );
                this.hud.tournamentCounter.font = renamedVar327 + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        0x0,
                        renamedVar204 / 0x2,
                        minionInvertCommand,
                        renamedVar254,
                        renamedVar254 / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - tripleSplitCommand / 0x2,
                        0x0,
                        tripleSplitCommand,
                        renamedVar204,
                        renamedVar204 / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Raga Tournament",
                    this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar239 / 0x2,
                    renamedVar204 / 0x2 + renamedVar230 / 2.5,
                );
                this.hud.tournamentCounter.font = renamedVar156 + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "#cccccc";
                if (this.tournament.team1Color === 0x1) {
                    this.hud.tournamentCounter.fillStyle = "#bff3b0";
                } else if (this.tournament.team1Color === 0x2) {
                    this.hud.tournamentCounter.fillStyle = "#f3b0b0";
                }
                this.hud.tournamentCounter.fillText(
                    this.tournament.team1Tag,
                    renamedVar254 / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar254 / 1.8 / 0x2 -
                        renamedVar296 / 0x2 -
                        (renamedVar367 + renamedVar392 + renamedVar100)) /
                    0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar208 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.team1Score,
                    renamedVar254 / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar254 / 1.8 / 0x2 -
                        renamedVar296 / 0x2 -
                        (renamedVar367 + renamedVar392 + renamedVar100)) /
                    0x2 +
                    renamedVar367 +
                    renamedVar392,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar208 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                const renamedVar391 = new Image();
                renamedVar391.src = this.hud.images.logo;
                this.hud.tournamentCounter.drawImage(
                    renamedVar391,
                    this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar296 / 0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 -
                    renamedVar164 / 0x2 -
                    renamedVar208 / 0x4,
                    renamedVar296,
                    renamedVar164,
                );
                this.hud.tournamentCounter.fillStyle = "#cccccc";
                if (this.tournament.team2Color === 0x1) {
                    this.hud.tournamentCounter.fillStyle = "#bff3b0";
                } else if (this.tournament.team2Color === 0x2) {
                    this.hud.tournamentCounter.fillStyle = "#f3b0b0";
                }
                this.hud.tournamentCounter.fillText(
                    this.tournament.team2Tag,
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    renamedVar296 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar296 / 0x2 -
                        renamedVar254 / 1.8 / 0x2 -
                        (renamedVar200 + renamedVar392 + renamedVar390)) /
                    0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar208 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.team2Score,
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    renamedVar296 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        renamedVar296 / 0x2 -
                        renamedVar254 / 1.8 / 0x2 -
                        (renamedVar200 + renamedVar392 + renamedVar390)) /
                    0x2 +
                    renamedVar200 +
                    renamedVar392,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    renamedVar208 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar96 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        renamedVar208 -
                        renamedVar208 / 0x4,
                        renamedVar96,
                        renamedVar208,
                        renamedVar208 / 0x2,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    renamedVar139,
                    this.hud.tournamentCounter.canvas.width / 0x2 - renamedVar386 / 0x2,
                    this.hud.tournamentCounter.canvas.height -
                    renamedVar208 / 0x2 -
                    renamedVar347 / 0x3,
                );
                return this.hud.tournamentCounter.canvas;
            }
            ["renderLoop"]() {
                if (
                    !this.isSetup ||
                    document.getElementById("mainui-play").style.display === ""
                ) {
                    return;
                }
                const renamedVar176 =
                    Math.min(
                        this.canvas.canvas.width / 0x780,
                        this.canvas.canvas.height / 0x438,
                    ) * 1.1;
                if (
                    this.gameMode !== "ragatourney-solo" &&
                    this.gameMode !== "ragatourney-teams"
                ) {
                    this.canvas.drawImage(
                        this.renderCounter(0x2),
                        0xc * renamedVar176,
                        0xc * renamedVar176,
                        (this.hud.counter.canvas.width / 0x2) * renamedVar176,
                        (this.hud.counter.canvas.height / 0x2) * renamedVar176,
                    );
                } else {
                    if (
                        this.gameMode === "ragatourney-solo" &&
                        (this.tournament.alive || this.tournament.dead)
                    ) {
                        this.canvas.drawImage(
                            this.renderTournamentCounterSolo(0x2),
                            0xc * renamedVar176,
                            0xc * renamedVar176,
                            (this.hud.tournamentCounter.canvas.width / 0x2) * renamedVar176,
                            (this.hud.tournamentCounter.canvas.height / 0x2) * renamedVar176,
                        );
                    } else if (
                        this.gameMode === "ragatourney-teams" &&
                        this.tournament.team1Tag &&
                        this.tournament.team2Tag
                    ) {
                        this.canvas.drawImage(
                            this.renderTournamentCounterTeams(0x2),
                            0xc * renamedVar176,
                            0xc * renamedVar176,
                            (this.hud.tournamentCounter.canvas.width / 0x2) * renamedVar176,
                            (this.hud.tournamentCounter.canvas.height / 0x2) * renamedVar176,
                        );
                    }
                }
            }
    }
    window.raga = new renamedVar266();
    const renamedVar241 = await fetch(
            document.getElementById("agario.core.js").getAttribute("path"),
        )
        .then((quadrupleSplitCommand) => quadrupleSplitCommand.text())
        .then((renamedVar294) => {
            renamedVar294 = renamedVar294.replace(
                /("\s?registerSkin\s?"\s?:\s?function\s?\(\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1raga.onRegisterSkin($2,$3,$4,$5,$6);",
            );
            renamedVar294 = renamedVar294.replace(
                /(;..?\s?\.\s?onopen\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onConnect();",
            );
            renamedVar294 = renamedVar294.replace(
                /(\s?if\s?\(\s?window\s?\[\s?"\s?MC\s?"\s?]\s?&&\s?window\s?\[\s?"\s?MC\s?"\s?]\s?\[\s?"\s?onMobileData\s?"\s?]\s?\)\s?window\s?\[\s?"\s?MC\s?"\s?]\s?\[\s?"\s?onMobileData\s?"\s?]\s?\(\s?(.+?)\s?\))/i,
                "$2=raga.onPacket($2);$1",
            );
            renamedVar294 = renamedVar294.replace(
                /("\s?setTarget\s?"\s?:\s?function\s?\(\s?(.+?)\s?,\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1$2=raga.onMouseX($2);$3=raga.onMouseY($3);",
            );
            renamedVar294 = renamedVar294.replace(
                /("\s?playerZoom\s?"\s?:\s?function\s?\(\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1$2=raga.onPlayerZoom($2);",
            );
            renamedVar294 = renamedVar294.replace(
                /(;..?\s?\.\s?onclose\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onDisconnect(this);",
            );
            renamedVar294 = renamedVar294.replace(
                /(;..?\s?\.\s?onerror\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onDisconnect(this);",
            );
            renamedVar294 = renamedVar294.replace(
                /(,\s?requestAnimationFrame\s?:\s?function\s?\(\s?.+?\s?\)\s?\{\s?)/i,
                "$1raga.renderLoop();",
            );
            renamedVar294 = renamedVar294.replace(
                /(\(\s?[a-z|A-Z]{10}\s?\)\s?\.\s?then\s?\(\s?([a-z]{6})\s?=>\s?\{\s?)/i,
                "$1const a=new Uint8Array($2,0,19889);const aa=new Uint8Array([0x20,0x00,0x28,0x02,0x1c,0x45,0x04,0x40,0x0f,0x0b]);const aaa=new Uint8Array($2,19889);const aaaa=new Uint8Array(a.length+aa.length+aaa.length);aaaa.set(a);aaaa.set(aa,a.length);aaaa.set(aaa,a.length+aa.length);aaaa[2476]=203;aaaa[19824]=138;aaaa[222918]=0;aaaa[222919]=0;binary=aaaa.buffer;",
            );
            renamedVar294 = renamedVar294.replace(
                /([a-z]{6}\s?[a-z|A-Z]{16}\s?\(\s?([a-z]{6})\s?,\s?[a-z|A-Z]{10}\s?,\s?[a-z|A-Z]{7}\s?,\s?[a-zA-Z]{8}\s?\)\s?\{\s?)/i,
                "$1$2=true;",
            );
            return renamedVar294;
        });
    eval(renamedVar241);
})();
