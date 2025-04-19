(async () => {
    class _0x490eea {
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
                    command: (_0x578655 = false) => {
                        if (
                            this.gameModes.find(
                                (_0x2eb6a5) => _0x2eb6a5.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(
                                new Uint8Array([!_0x578655 ? 0x96 : 0x97]),
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
                                (_0x351679) => _0x351679.type === this.gameMode,
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
                                (_0x2b508b) => _0x2b508b.type === this.gameMode,
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
                                (_0x43ed8a) => _0x43ed8a.type === this.gameMode,
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
                                (_0x5f25fc) => _0x5f25fc.type === this.gameMode,
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
                                (_0x35cbeb) => _0x35cbeb.type === this.gameMode,
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
                                (_0x2a21bb) => _0x2a21bb.type === this.gameMode,
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
                                (_0x391326) => _0x391326.type === this.gameMode,
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
                                (_0x4a3058) => _0x4a3058.type === this.gameMode,
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
                                (_0x16c384) => _0x16c384.type === this.gameMode,
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
                    command: (_0x290ef6 = false) => {
                        if (
                            this.gameModes.find(
                                (_0x5a783a) => _0x5a783a.type === this.gameMode,
                            )
                        ) {
                            window.core.proxyMobileData(
                                new Uint8Array([!_0x290ef6 ? 0x98 : 0x99]),
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
                                (_0x2f5071) => _0x2f5071.type === this.gameMode,
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
                                (_0x573def) => _0x573def.type === this.gameMode,
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
                                (_0xbb176d) => _0xbb176d.type === this.gameMode,
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
                        _0x26a110,
                        _0x53d857,
                        _0x299384,
                        _0x463554,
                        _0x210e85,
                        _0x115d6d,
                    ) => {
                        _0x26a110.beginPath();
                        _0x26a110.moveTo(_0x53d857 + _0x115d6d, _0x299384);
                        _0x26a110.arcTo(
                            _0x53d857 + _0x463554,
                            _0x299384,
                            _0x53d857 + _0x463554,
                            _0x299384 + _0x210e85,
                            _0x115d6d,
                        );
                        _0x26a110.arcTo(
                            _0x53d857 + _0x463554,
                            _0x299384 + _0x210e85,
                            _0x53d857,
                            _0x299384 + _0x210e85,
                            _0x115d6d,
                        );
                        _0x26a110.arcTo(
                            _0x53d857,
                            _0x299384 + _0x210e85,
                            _0x53d857,
                            _0x299384,
                            _0x115d6d,
                        );
                        _0x26a110.arcTo(
                            _0x53d857,
                            _0x299384,
                            _0x53d857 + _0x463554,
                            _0x299384,
                            _0x115d6d,
                        );
                        _0x26a110.closePath();
                        return _0x26a110;
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
                        const _0x71bd4e = this.gameModes.find(
                            (_0x30cef8) => _0x30cef8.type === this.gameMode,
                        );
                        if (_0x71bd4e) {
                            return _0x71bd4e.shortName;
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
                const _0x342aa3 = await fetch("https://minions.raga.pw/ragamode/config", {
                        cache: "no-store",
                    })
                    .then((_0x59913c) => _0x59913c.json())["catch"](() => {});
                if (!_0x342aa3) {
                    return Promise.reject();
                }
                this.gameModes = _0x342aa3.gameModes;
                this.skins = _0x342aa3.skins;
                this.shops = _0x342aa3.shops;
                return Promise.resolve();
            }
            ["updateCss"]() {
                let _0xc6d71a = "";
                _0xc6d71a += "html { --bottom-banner-height: 0 !important; }";
                _0xc6d71a += "#canvas { height: 100% !important; }";
                _0xc6d71a +=
                    "#adsTop, #adsBottom, #adsLeft, #adsRight, #adsGameOver, #captchaWindowV3, .discord { visibility: hidden; }";
                _0xc6d71a +=
                    "#new-skinButton { position: relative; left: 25px; cursor: pointer; }";
                _0xc6d71a +=
                    "#new-skinButton>.skinWrapper { position: absolute; width: 46px; height: 46px; border: 3px solid rgb(131, 131, 131); -webkit-mask-image: -webkit-radial-gradient(white, black); overflow: hidden; }";
                _0xc6d71a +=
                    ".raga-coins { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZTVmOWZjNi1iZDUzLTkzNDktODQ1My0zODRkYmJhZTczZjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjMwOUIyOTAxQjY2MTFFQkJEM0JBOEE4Nzc1NDVBMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjMwOUIyOEYxQjY2MTFFQkJEM0JBOEE4Nzc1NDVBMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFkOWU5YTc1LTU4OTctYTE0ZS1hMmE1LWNmZjBmY2I4Y2U5ZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUyMWI4N2UxLWVmYzAtZTQ0Ni04NDU1LTM5NDVkMDRjNGQ4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psqsbw4AAAM9SURBVHjaXFRNSFRRFP7efc8ZdX511ETFNFJMxYVSRoRtSyKkyFXUIqGV0bIWQpsIWgtBq0KCWhRGJLUpNwWJuMn8SVFL08bxZ5z/0Zl5fXfeHXjMhY/33r3nfuec75zztMziBMyjJIy/n4CjOLEDwFGGbPISEuEB5Mw2HMUAwwXoYhVl7nE4vB+QSUZQWkNbHQh0ASUeGGZiF6YQQDoCZEkW27iG2PYDaLs98OUAL+2dxBERwWnsYRC56jmUVz6BKH0BaDxLAodxGNCM/DeEriG89hSxpTtoPAROca+S4HH+3CQyxAGxEGrH6u5zhtMPf8staCIFaappOWmtIb75DLEfQ+jlZ6u6nFUE9iUdnCfqee/b7CAiDgOBnkEGkxV6eAHGn4kb2JkcwlkatSmCrIrIsEFX+zLlE4o0OnMVoel7yMRoEp51ITg9gibTiuhQRSCJqDtCtqjKiRr1Lu2aiCDx6/t9CIwZSIUo6HoLOriZs12UkawQMxWAf99KO062kwnkMyhoKDNZ2apCInhTIJUaQIAbfpVCYZlKbB+JrvB5nWgm0bKHqcmCKeduoppIJfoFktsd+fLrRUJnVJoOgnzYVM+yqNUqprITKpD0bouBTMSLkiIiqVdKQYr9hUiyaSvYh32q7+ySyPvZqFugxHeQv2Bf0ltCasSU2vm8LCOKW21RX0QE5VD3RAVKq2cRLtJLy3c7jZwWQYXSZQOWXprNVhLL+87AkuAYvs1rsV+kGycEXs4pgzOlowa1H1GRFzKQ5Nv5cX4vUF79BqJ5AT9tHqX4LbCqyGppadWkA2oCCllI5/Pyu24b7tqXAt7WBGp7H+I3mRZV9QqGxYVx2KKS76uyYYljZx7B1xYSMNiIlZ2vUXluFFM8mLONj1lEZtqcLBNfCU/3K1R1j0J38YoUhHMOV+0wMl0mphaHsZm2qhgoik6mL393C8Qa4eocg7fhNjQzh1xWkuUshSXcDXc5/Z8R3BvB1no3PLb/2aESW06F1jgPr/8xXA1jksTiMEnmZPuadGlQ6SxLWF43Dn/HR6T+XUAseBH7rj6kdzxwViWo1zQqHO/gOT6J9F4UeimJGbpexgwM/BdgACxeGGYM4tWGAAAAAElFTkSuQmCC'); background-position: 0 0; }";
                _0xc6d71a +=
                    ".new-user-container, .new-offers-container { padding: 20px; }";
                _0xc6d71a +=
                    ".new-user-container .user-picture { float: left; width: 56px; height: 56px; margin-right: 6px; border: 2px solid #cccccc; border-radius: 5px; }";
                _0xc6d71a +=
                    ".new-user-container .currency-container, .leagues-dialog .currency-container { position: relative; left: 70px; width: 130px; height: 23px; margin-bottom: 10px; border: 2px solid #54c800; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".new-user-container .label, .leagues-dialog .label { position: absolute; right: 53px; width: 100px; height: 30px; line-height: 24px; text-align: right; font-size: 13px; color: #000000; }";
                _0xc6d71a +=
                    ".new-user-container .icon, .leagues-dialog .icon { position: absolute; top: 2px; right: 28px; }";
                _0xc6d71a +=
                    ".new-user-container .plus, .leagues-dialog .plus { position: absolute; top: 0; right: 0; width: 25px; height: 100%; text-align: center; background-color: #54c800; border-radius: 2px; border-top-left-radius: 0; border-bottom-left-radius: 0; }";
                _0xc6d71a +=
                    ".new-user-container .plus>span, .leagues-dialog .plus>span { display: block; line-height: 25px; text-align: center; font-size: 25px; color: #ffffff; }";
                _0xc6d71a +=
                    ".new-user-container .ident-container { position: relative; left: 10px; width: 280px; height: 23px; font-size: 13px; }";
                _0xc6d71a +=
                    ".new-user-container .ident-container .ident { user-select: all; }";
                _0xc6d71a +=
                    ".new-user-container .user-name { position: absolute; margin-top: 7px; vertical-align: middle; text-align: left; font-weight: bold; font-size: 22px; letter-spacing: -0.4px; overflow: hidden; }";
                _0xc6d71a +=
                    ".new-user-container .progress-bar-container { position: relative; top: 42px; width: 100%; height: 30px; text-align: center; border: 2px solid #54c800; border-radius: 5px; }";
                _0xc6d71a +=
                    ".new-user-container .progress-bar { position: absolute; top: 0; height: 100%; background-color: #54c800; border-radius: 0 4px 4px 0; }";
                _0xc6d71a +=
                    ".new-user-container .progress-bar-text { position: absolute; left: 0; width: 100%; line-height: 32px; font-weight: bold; font-size: 14.5px; color: #343434; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container { display: flex; flex-wrap: nowrap; justify-content: space-between; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div { width: 93px; height: 75px; text-align: center; color: #ffffff; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.shop { background-color: #54c800; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.shop:hover { background-color: #3b8a02; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.settings { background-color: #00c1f1; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.settings:hover { background-color: #0293b7; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.community { background-color: #c03ff7; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div.community:hover { background-color: #8a2fb1; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div>.label { position: relative; bottom: -45px; width: 100%; font-weight: bold; font-size: 12px; }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div>.Icon-Store { position: absolute; transform: matrix(0.65, 0, 0, 0.65, -39, 10); }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div>.controller { position: absolute; transform: matrix(0.8, 0, 0, 0.8, -42, 20); }";
                _0xc6d71a +=
                    ".new-offers-container .buttons-container>div>.Icon-Leaderboards { position: absolute; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDgyREM0NzkyOERFMTFFQkFBNjZBMEYxODEyNDIyQUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDgyREM0N0EyOERFMTFFQkFBNjZBMEYxODEyNDIyQUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODJEQzQ3NzI4REUxMUVCQUE2NkEwRjE4MTI0MjJBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODJEQzQ3ODI4REUxMUVCQUE2NkEwRjE4MTI0MjJBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpmB7ZgAAAPESURBVHja1NlZbExRGMDxa6wpVbXUTuwq1hA7QShFqFgiPAlBeCieCLE+eCJEY4+ERyKI9QHVkKjYYheUCmptiDa1tuP/8U1yM+ZuRzHzJb+knXvPuee798zMd85Y4XDYMlAbo7EZd8K/YrlBP0u07SPsxASkmIwpaIOu2IDnOoByXMRSpBsMoDOWIR8V2udrbEGPIH1V+ZmNd/TESkxECG+wCbvwTs9ph+5oi+ZoiDqooce/ohTFeIHHuIkCyCAaYRay0UxfO4o1uOY5Qo9M6yEH3/VufUA2qiEVs3AIz2x3NEhU6NM9gtloALm5c/BGz5Frb0N906klj73AdtGDOn0ycBxfwpUfX3EKmWiLfbZjhehmMrVOYoxOiR14hHnoYv2beICtaImFqIVcjIh1slMiE3BE/76Lauho/Z+QG/gZXfX/aTjgN5E8DLXiMy5hICrsL4ZinDgyjpOQ6Iex0S/GSmSuFf8x12tqyXfBDdSO80S+oBfuOT2RSQmQhERNTHabWlOsxInJ9vHbE+mGPgmUSE+dXr8lMgpVrcSK0bESyTDs7BUu4KFB2wJt+9Lw2qOii8aGeGtQG61FHe0jhKko9tFOis8ZqKptk7DC4PrST1N70TjcoJP1DgXcWB9tJzm0XWUwjkx7IksDNpYSO82lcj7h0vaMS7tU26LNb6yWtpH3SO+Ac/O6Lq6cItflWJ7Lsfe4GnAsvSNv9upID9i41ON4ieExP31HR2ckSSItVJBo43G8o+ExS5fKQUKWxS0lkfZICdi4l0uFLH1lubQdr+t5p8q2b8CxJEkOoT9YMG1Bkxivb/R4Yi104yK6PJLkchwqcq/oJCu/DoaJyI5JPjbrm192TuZjsI+2M7XSlqXsM+0r22BaRaK9lPGHdZsnkeNESO+k425RgiTSTBJJczlBFllv42CgxTp9naKRJJLq8VG4G4f/YxLHsN3jAyQlpLsSTlEXi3FW97jy/2ECVzBOE1mEei7nXo5Ungd91DSyW14X/bAfH//CTmOpjmWQVtU5PtocRXKkWJO93E0+Gskeb5a2SdayfQ9uo8xg4GX6s8ReTNcbJX2PwxMf7beiRqwt0yz9Xmjl47Gv1cce1pVlE31PtbbtxidH7caX2Hbjn+IJilCu52Tqrn9/j+sX6XQ74LYbn6LrAj8LrZcYb/hjkV2Gz/JdFm3rtNz3vRsv2/jzkOcybWS3vnklJNIY9x2u8QnnsUBXsn/0Q48UlsMwRMuJ1lqsySfZuUr6lBqA0/iGQtzCee3/gVfjHwIMACPnEzvUGZNMAAAAAElFTkSuQmCC'); background-position: 0 0; transform: matrix(0.65, 0, 0, 0.65, -59, 10); }";
                _0xc6d71a += "#mainui-play { margin-bottom: 0; }";
                _0xc6d71a += "#mainui-modes .gamemodes { flex-wrap: wrap; }";
                this.gameModes.forEach((_0x4e2ea5) => {
                    _0xc6d71a +=
                        "#mainui-modes .gamemodes ." +
                        _0x4e2ea5.type +
                        " { height: 60px; margin-top: 7px; flex-basis: 139px; flex-direction: column; background-color: #e2e2e2; }";
                    _0xc6d71a +=
                        "#mainui-modes .gamemodes ." +
                        _0x4e2ea5.type +
                        ":hover, #mainui-modes .gamemodes ." +
                        _0x4e2ea5.type +
                        ".active { color: #ffffff; background-color: " +
                        _0x4e2ea5.color +
                        "; }";
                    _0xc6d71a +=
                        "#mainui-modes .gamemodes ." +
                        _0x4e2ea5.type +
                        ">span { padding-top: 5px; font-size: 13px; }";
                });
                _0xc6d71a +=
                    ".partymode-info { top: 90px !important; left: 12px !important; }";
                _0xc6d71a += "#leagues-app { display: block; }";
                _0xc6d71a += ".leagues-dialog h1 { margin-bottom: 0; }";
                _0xc6d71a +=
                    ".leagues-dialog .currency-container { left: 671px; margin-top: -34px; }";
                _0xc6d71a +=
                    ".raga-mode-shop { width: 100%; margin-top: 25px; display: table; border-collapse: separate; border-spacing: 0 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry { display: table-row; background-color: #ffde92; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry:hover { background-color: #fff0c8; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry:hover .block { border: 1px solid #fff0c8; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry:hover .block.green { background-color: #57b600; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .block { height: 60px; display: table-cell; text-align: center; font-weight: bold; font-size: 20px; vertical-align: middle; border: 1px solid #ffde92; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .block.first { border-top-left-radius: 5px; border-bottom-left-radius: 5px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .block.last { border-top-right-radius: 5px; border-bottom-right-radius: 5px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .block.green { padding-left: 10px; padding-right: 10px; color: #ffffff; background-color: #5fcb00; border: none; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .orange, .raga-mode-shop .coins-entry .light { padding: 15px 0; display: inline-block; border-radius: 5px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .orange { width: 120px; color: #ffffff; background-color: #ff8301; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .light { width: 135px; background-color: #fff7b7; }";
                _0xc6d71a +=
                    ".raga-mode-shop .coins-entry .orange-text { color: #ff8301; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions-stop { height: 60px; line-height: 60px; margin-bottom: 10px; text-align: center; font-weight: bold; font-size: 18px; color: #a4a4a4; background-color: #f0f0f0; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions { display: flex; flex-wrap: wrap; justify-content: start; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .btn-one, .raga-mode-shop .minions .btn-one:hover { color: #ffffff; background-color: #56c0e1 !important; border-color: #4295ae; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .btn-one-selected, .raga-mode-shop .minions .btn-one-selected:hover, .raga-mode-shop .minions .btn-one-selected:focus { color: #4295ae; background-color: #ffffff; border-color: #4295ae; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .btn-two, .raga-mode-shop .minions .btn-two:hover { color: #ffffff; background-color: #ff5fa7 !important; border-color: #d14c88; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .btn-two-selected, .raga-mode-shop .minions .btn-two-selected:hover, .raga-mode-shop .minions .btn-two-selected:focus { color: #d14c88; background-color: #ffffff; border-color: #d14c88; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry:not(:last-child) { margin-right: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry { margin-bottom: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block { width: 195px; padding-bottom: 25px; background-color: #f5f5f5; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .title { padding: 15px; text-align: center; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .time { margin-top: 20px; text-align: center; font-weight: bold; font-size: 18px; color: #a4a4a4; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .time .clock-grey { transform: matrix(0.8, 0, 0, 0.8, -5, 4); opacity: 0.7; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .hr { width: 70%; height: 20px; margin: 0 auto; border-bottom: 2px solid #a4a4a4; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector { margin-top: 20px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div { margin: 2px 0; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div>div { width: 14px; height: 14px; margin: 0 10px; display: inline-block; border: 2px solid #a4a4a4; border-radius: 100%; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div.selected>div { background-color: #73deff; border-color: #73deff; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .block .mass-selector>div>span { vertical-align: 3px; font-weight: bold; color: #a4a4a4; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .buy { width: 195px; height: 40px; line-height: 40px; margin-top: 5px; text-align: center; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .minions-entry .buy:hover { background-color: #347f01; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends { width: 100%; height: 370px; text-align: center; background-color: #f5f5f5; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .title { padding: 15px; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .block { width: 590px; margin: 10px auto 0 auto; display: flex; flex-wrap: wrap; justify-content: space-around; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .block .friend { width: 250px; height: 50px; margin-top: 18px; padding: 0 10px; text-align: center; font-weight: normal; color: #adadad; border: 1px solid #adadad; border-radius: 10px; outline: none; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .block .friend.taken { color: #56c0e1; border-color: #56c0e1; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .block .friend::placeholder { color: #adadad; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .block .friend.taken::placeholder { color: #56c0e1; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .save { width: 270px; height: 40px; line-height: 40px; margin: 18px auto 0 auto; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .friends .save:hover { background-color: #347f01; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .no-friends { width: 100%; padding: 15px; text-align: center; font-weight: bold; color: #ffffff; background-color: #56c0e1; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship { width: 100%; height: 225px; text-align: center; background-color: #f5f5f5; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship .title { padding: 15px; font-weight: bold; color: #ffffff; background-color: #56c0e1; clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%); border-top-left-radius: 10px; border-top-right-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship .block { width: 590px; margin: 10px auto 0 auto; display: flex; flex-wrap: wrap; justify-content: space-around; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship .block .friendship { width: 270px; height: 50px; line-height: 50px; margin-top: 20px; color: #adadad; background-color: #ffffff; border-radius: 10px; user-select: all; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship .cancel { width: 270px; height: 40px; line-height: 40px; margin: 20px auto 0 auto; font-weight: bold; color: #ffffff; background-color: #ffb84d; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .cancel-friendship .cancel:hover { background-color: #c58f3c; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .refund-container { width: 100%; text-align: center; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .refund { margin-top: 18px; color: #a4a4a4; }";
                _0xc6d71a +=
                    ".raga-mode-shop .minions .refund>span { font-weight: bold; color: #ffa539; cursor: pointer; }";
                _0xc6d71a += ".raga-mode-shop .create-skin { text-align: center; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .instruction { height: 60px; line-height: 60px; margin-bottom: 10px; font-weight: bold; font-size: 18px; color: #a4a4a4; background-color: #f0f0f0; border-radius: 10px; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border { margin-top: 20px; display: none; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border>div { width: 40px; height: 40px; margin: 0 10px; display: inline-block; border-radius: 100%; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border>div.selected { margin: 0 5px; border: 5px solid #69dd00; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border>div>span { width: 30px; height: 30px; margin: 5px; display: inline-block; border-radius: 100%; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .green { background-color: #69dd00; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .yellow { background-color: #ffcc00; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .orange { background-color: #ff7e00; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .red { background-color: #ff3d3d; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .violet { background-color: #c000ff; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .pink { background-color: #ff3ed4; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .blue { background-color: #0078ff; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .light-blue { background-color: #00deff; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .white { background-color: #c3c3c3; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .border .black { background-color: #2a2a2a; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin canvas { margin: 5px auto 10px auto; display: none; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .select-image { width: 195px; height: 40px; line-height: 40px; margin-bottom: 10px; display: inline-block; text-align: center; font-weight: bold; color: #ffffff; background-color: #00d3ff; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .select-image:hover { background-color: #3f89b6; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin #select-image-upload { display: none; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .serror, .raga-mode-shop .create-skin .save { display: none; }";
                _0xc6d71a += ".raga-mode-shop .create-skin .serror { color: red; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .save { width: 195px; height: 40px; line-height: 40px; margin: 0 auto; text-align: center; font-weight: bold; color: #ffffff; background-color: #54c800; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .save:hover { background-color: #347f01; }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .loader { width: 120px; height: 120px; margin: 100px auto 0 auto; border: 16px solid #f0f0f0; border-top: 16px solid #00d3ff; border-bottom: 16px solid #00d3ff; border-radius: 50%; animation: spin 3s linear infinite; }";
                _0xc6d71a +=
                    "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
                _0xc6d71a +=
                    ".raga-mode-shop .create-skin .done { margin: 100px auto 0 auto; }";
                _0xc6d71a +=
                    ".raga-mode-settings { height: 515px; margin-top: 25px; padding-right: 10px; display: flex; flex-wrap: wrap; justify-content: space-between; overflow-y: scroll; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry { margin-bottom: 25px; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry.general { width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .section { width: 100%; margin-bottom: 10px; padding-bottom: 10px; font-weight: bold; font-size: 21px; color: #656465; border-bottom: 2px solid #c6c7c6; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command { width: 378px; margin-bottom: 10px; display: flex; justify-content: space-between; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .name { width: 227px; padding: 14px; background-color: #f4f5f4; border: 1px solid #f4f5f4; border-radius: 5px; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .select { width: 115px; height: 100%; text-align: center; color: #ffffff; background-color: #00c1f1; border: 1px solid #00c1f1; border-radius: 5px; outline: none; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value { position: relative; width: 87px; padding: 14px; text-align: center; color: #ffffff; background-color: #00c1f1; border: 1px solid #00c1f1; border-radius: 5px; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.conflict { background-color: #ff6767; border-color: #ff6767; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value:after { position: absolute; left: 0; width: 100%; opacity: 0; content: attr(data-active); }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value:hover { background-color: #0293b7; border-color: #0293b7; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.conflict:hover { background-color: #d85858; border-color: #d85858; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.active { color: #0293b7; background-color: inherit; border-color: #00c1f1; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.active.conflict { color: #e06464; background-color: inherit; border-color: #ff6767; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.active span { opacity: 0; }";
                _0xc6d71a +=
                    ".raga-mode-settings .settings-entry .command .value.active:after { opacity: 1; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector { width: 100%; height: 450px; margin: 30px -2.5px 0 -2.5px; display: flex; flex-wrap: wrap; overflow-y: scroll; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry { position: relative; width: 146px; height: 146px; margin: 0 2.5px 5px 2.5px; background-position: center; border-radius: 100%; cursor: pointer; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container { position: absolute; top: 0; width: 100%; height: 100%; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container .remove { position: absolute; top: -5px; left: -5px; width: 24px; height: 24px; display: none; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZBNjhDODdBMTUwMTFFREE5Q0RENTU5MDRFMThDMkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjZBNjhDODhBMTUwMTFFREE5Q0RENTU5MDRFMThDMkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NkE2OEM4NUExNTAxMUVEQTlDREQ1NTkwNEUxOEMyRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NkE2OEM4NkExNTAxMUVEQTlDREQ1NTkwNEUxOEMyRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnFSC+IAAALBSURBVHjatFVLbxJRFP7uiDEEYt0BkxgehUCJiaHdGOtC7bLFhVbSaMHELtx0pf4LF2603da2Wu0/qAuwsFGTVrswxJQKDZYBF7YVsEDIjOdSQIcO9GF7FjN3Zs585/0dpigKTlJ0/MIY66iUzWYvyDK7SEdT/VWOMfmzxWL50uk/7jyrXTQMpNNpvU6nG6evD+ixuw3GGgObLJV+P7fb7aUDG9jI5S4zWXlNx/MHzMS6wDBiNpvftxoQWjUlSQoQePgQ4FyssoII/Tvc+kEVQd1zDn7miDUtUSTXGpGoUsRzfkp3+ushPdeSVLGQ97hcrrIqRbygxwDOxWY0nh3fk6KMlF2jZ0er9sTkJAqFIoZv3YTD4UC1WkUk8g7RWAxOZzfuhUJ7LFDCExaL2dWMgPe5FjiXzZ+biMfjmJmdRSKRwGI0ijfz88hkMtje/tXsFlX3AE4quLcZgST9uEunWS0D35JJTE/P8BrBYDDUIpBlGVf6+zHkH8K5ri7tIWO4I5pMc8LuJMPSLqEOux2hUBBGoxH5fB47Ozvwer0IBG63BeciKEys3f9GpS3c4/VUCpVKpflua2sL3zc20JkmdjGF3XAUqZ1iOBzGy1dzKJfL6OvtrUWUpLRNTb3A0vJyewOCkmkaoEKsaPEIl8XFKARBwMDAdYyN3UcwOAqr1VqrycLC27YGmCyvNA3UWFHBqkqhPt1ujwc+nw+Dg4PQ6/Ww2Wy44ffD43HD43Zrg1ObiqIYV82BJOUeU9qeHMsSUPBQFM1PVZNMlPuMs+IxwCeLxfyEJtnR8PSBCTE66v+D7K4S2X3QpGvK2xKDwme/dBRwasfRBrhmBP+syEvE73OcuA6aFnJshJrl474Lhwvnc0655NEj3hEdirnKC0q6Pa3gHSNoFapNDw2DD3J96QvIESF9arTivkv/JOWPAAMAPmlOZo5ILosAAAAASUVORK5CYII='); }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container .copy { position: absolute; top: -5px; right: -5px; width: 24px; height: 24px; display: none; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALqSURBVEiJxZXNb0xRGMZ/73VFq2LZuXeidFCUJqJdqPoIsShqiZT4SEgQqhKknZg1ipWiYhIbIvwBFBsW1SrJFInS+shg4t6ZknTRjozNPRYzvabTmelUIp7dPee9v+c8555zX/jHkkKKotFolePIcsCTGoqJOK9M0+z/a4NIJFKs63qTQg4BC3KUfRLkWiLx86rP50sUbPAtFqsTR90FyiZbYUpfNKHRMIzezAktc8C27R3iqMdTgAPMcxRPbNveljkxLkFq5Y+BGVOApyuhCRvSk7gGkUikeJo+fZCprTybPsdHR5ZUVFT8grQt0nW9qRB4T9dTdm3fwcZ16wi0+hkeHs4sKZ81a3bT2INroJDDk8EfdnZy2t9Kuc/HoaNHeNv/hovn2rJUKpelQ+qcK+bng0ciX2k7c4bNWxs41nycmSUlAAQ7rqGUQuTP51Sw0LbtpaZpvtUAUpcoL7y01MPZCxfweAwa6uv5GY/zMtRHaalnHHxMjiSZGoAIZi74w85O9jTupC8U4v3gIDeCQfbt38/l9ks86+6mqbk563uaEq9rkEw1UT1dT91tGRwY4EYwyIGDB1m0eDEP7t3HHwhQt3ZNVgOlkkwdQImys1lcaW+nbvUajjUfp6G+3oVX19Rw6+4dysrm5gqO0pTlJhClXk9cgWJoKMaK6mpmlpRw/9EjYrEop1ta+DH0PS8cQBzntZvANM1+y4p+QKhwC0RYWbuK27duokTRFwrR292DPxBgztz810Xgo+n1vnMTpIDBzMJT/laWLqvi+tUOvoa/cLbtPJu2bMkLT6anI80sqXA4XDSjqHgAmDcpIb/C8dGRyrFfxbgDbFlWDaJ1AcV/CU9ownrDMJ6PDYz7XXu93pCg9gJZm8dkcJTsTodDjoYTjUZrHcUdoLxAeFhQjaZpvsicmNBwAAzD6I2PjixByUmBjzmxig8oTsRHRyqzwaHApm9ZViWatgIn1fQ1YjjOS2/qKP5X/Qb1xA/8B4+wcgAAAABJRU5ErkJggg=='); }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry .overlay-container:hover .remove, .raga-mode-skin-selector .skin-entry .overlay-container:hover .copy { display: block; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry.pending { opacity: 0.8; }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry.pending>.sprite-common.rush_icon { transform: matrix(0.6, 0, 0, 0.6, 25, 15); }";
                _0xc6d71a +=
                    ".raga-mode-skin-selector .skin-entry.selected { opacity: 0.2; }";
                const _0x191bd1 = document.createElement("style");
                _0x191bd1.innerHTML = _0xc6d71a;
                document.head.appendChild(_0x191bd1);
            }
            ["hookListeners"]() {
                addEventListener(
                    "hashchange",
                    (_0x56302f) => {
                        if (!document.getElementById("mainui-modes")) {
                            return;
                        }
                        let _0x3e64bb;
                        if (!_0x56302f.newURL) {
                            _0x3e64bb = location.hash;
                        } else {
                            _0x3e64bb = _0x56302f.newURL.substr(_0x56302f.newURL.indexOf("#"));
                        }
                        if (
                            _0x3e64bb &&
                            (_0x3e64bb === "#ffa" ||
                                _0x3e64bb === "#battleroyale" ||
                                _0x3e64bb === "#teams" ||
                                _0x3e64bb === "#experimental")
                        ) {
                            const _0x896159 = _0x3e64bb.substr(0x1);
                            document.querySelectorAll(".ffa")[0x1].className = "item ffa";
                            document.querySelectorAll(".battleroyale")[0x1].className =
                                "item battleroyale";
                            document.querySelectorAll(".teams")[0x1].className = "item teams";
                            document.querySelectorAll(".experimental")[0x1].className =
                                "item experimental";
                            this.gameModes.forEach((_0x4c88ee) => {
                                document.querySelector("." + _0x4c88ee.type).className =
                                    "item " + _0x4c88ee.type;
                            });
                            if (_0x896159 === "teams" && this.isIgnoringTeams) {
                                this.isIgnoringTeams = false;
                            } else if (!this.pendingGameMode) {
                                if (
                                    this.isUiRefreshed &&
                                    this.gameModes.find(
                                        (_0x55c736) => _0x55c736.type === this.gameMode,
                                    )
                                ) {
                                    document.querySelector("." + this.gameMode).className =
                                        "item active " + this.gameMode;
                                } else {
                                    document.querySelectorAll("." + _0x896159)[0x1].className =
                                        "item active " + _0x896159;
                                    this.gameMode = _0x896159;
                                }
                            } else {
                                this.gameMode = _0x896159;
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
                    this.gameModes.forEach((_0x511037) => {
                        document.querySelector("." + _0x511037.type).className =
                            "item active " + _0x511037.type;
                    });
                    this.gameMode = "party";
                });
                addEventListener("login", () => {
                    const _0x3bbc82 = window.MiniclipAPI.prototype.getUserInfo();
                    this.profileImage = _0x3bbc82.avatarUrl;
                    this.profileName = _0x3bbc82.userInfo.name;
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
                addEventListener("keydown", (_0x2219ae) => {
                    if (this.changingSettings) {
                        _0x2219ae.preventDefault();
                        if (
                            _0x2219ae.key.toLowerCase() === "escape" ||
                            _0x2219ae.key.toLowerCase() === this.changingSettings.entry.value
                        ) {
                            this.changingSettings.element.classList.toggle("active");
                            this.changingSettings = null;
                            return;
                        }
                        const _0x578bfd =
                            this.changingSettings.entry.ident +
                            ":" +
                            _0x2219ae.key.toLowerCase();
                        const _0x4444c5 = new Uint8Array([
                            0x24,
                            ...unescape(encodeURIComponent(_0x578bfd))
                            .split("")
                            .map((_0x4d78b2) => _0x4d78b2.charCodeAt(0x0)),
                            0x0,
                        ]);
                        window.core.proxyMobileData(_0x4444c5);
                        window.core.proxyMobileData(new Uint8Array([0x9]));
                        this.changingSettings.element.classList.toggle("active");
                        this.changingSettings = null;
                        return;
                    }
                    if (document.getElementById("overlays")) {
                        return;
                    }
                    if (_0x2219ae.key.toLowerCase() === "escape") {
                        _0x2219ae.preventDefault();
                        document.dispatchEvent(new Event("show_main_menu"));
                    } else {
                        if (
                            _0x2219ae.key.toLowerCase() === "q" &&
                            !window.core.playerHasCells()
                        ) {
                            _0x2219ae.preventDefault();
                            window.core.specialOn();
                        } else {
                            const _0x1e4153 = this.settings.find(
                                (_0x74fc04) =>
                                typeof _0x74fc04.command === "function" &&
                                _0x74fc04.value === _0x2219ae.key.toLowerCase(),
                            );
                            if (_0x1e4153 && (!_0x1e4153.toggle || !_0x2219ae.repeat)) {
                                _0x2219ae.preventDefault();
                                _0x1e4153.command();
                            }
                        }
                    }
                });
                addEventListener("keyup", (_0x3df327) => {
                    const _0x1c1afe = this.settings.find(
                        (_0x385f58) =>
                        typeof _0x385f58.command === "function" &&
                        _0x385f58.value === _0x3df327.key.toLowerCase() &&
                        _0x385f58.toggle,
                    );
                    if (_0x1c1afe) {
                        _0x3df327.preventDefault();
                        _0x1c1afe.command(true);
                    }
                });
            }
            ["startObserver"]() {
                const _0x4a88c4 = [
                    "agar-io_160x600",
                    "agar-io_300x600",
                    "agar-io_728x90",
                    "agar-io_160x600_2",
                    "agar-io_300x600_2",
                    "agar-io_970x90",
                ];
                const _0x519935 = new WebKitMutationObserver((_0x2b6ee8) => {
                    _0x2b6ee8.forEach((_0x21fac0) => {
                        _0x21fac0.addedNodes.forEach((_0x30a037) => {
                            if (!this.isClean) {
                                let _0xbb44d5 = [
                                    ...document.querySelectorAll(
                                        _0x4a88c4.map((_0x1919f4) => "#" + _0x1919f4).join(","),
                                    ),
                                ];
                                _0xbb44d5.forEach((_0x30ba12) => {
                                    _0x30ba12.setAttribute = (_0x3492da) => {
                                        if (_0x3492da === "data-google-query-id") {
                                            _0x30ba12.remove();
                                        }
                                    };
                                    _0x30ba12.remove();
                                });
                                document.getElementById("preroll").remove();
                                this.isClean = true;
                            } else if (_0x4a88c4.includes(_0x30a037.id)) {
                                _0x30a037.setAttribute = (_0x1c7dfb) => {
                                    if (_0x1c7dfb === "data-google-query-id") {
                                        _0x30a037.remove();
                                    }
                                };
                                _0x30a037.remove();
                            }
                            if (
                                _0x30a037.classList &&
                                _0x30a037.classList.contains("adsbygoogle")
                            ) {
                                _0x30a037.remove();
                                [...document.getElementsByClassName("adsbygoogle")].forEach(
                                    (_0xafc225) => {
                                        _0xafc225.remove();
                                    },
                                );
                            } else {
                                if (_0x30a037.id === "overlays") {
                                    const _0x353753 = document.getElementById("skinButton");
                                    let _0x78b80 = document.getElementById("new-skinButton");
                                    if (!_0x78b80) {
                                        _0x78b80 = _0x353753.cloneNode(true);
                                        _0x78b80.id = "new-skinButton";
                                        _0x78b80.onclick = () => this.openSkinSelectorInterface(0x0);
                                        _0x78b80.style.display = "none";
                                        _0x353753.after(_0x78b80);
                                    }
                                } else {
                                    if (_0x30a037.id === "mainui-user") {
                                        this.switchInterface();
                                    } else {
                                        if (_0x30a037.id === "mainui-modes") {
                                            const _0x5c126e = document.querySelector(".ffa");
                                            const _0x372a53 = _0x5c126e.cloneNode(true);
                                            _0x372a53.onclick = () => this.changeGameMode("ffa");
                                            _0x5c126e.style.display = "none";
                                            _0x5c126e.parentNode.appendChild(_0x372a53);
                                            const _0xe0eb1b = document.querySelector(".battleroyale");
                                            const _0x2ace86 = _0xe0eb1b.cloneNode(true);
                                            _0x2ace86.onclick = () =>
                                                this.changeGameMode("battleroyale");
                                            _0xe0eb1b.style.display = "none";
                                            _0xe0eb1b.parentNode.appendChild(_0x2ace86);
                                            const _0x17defb = document.querySelector(".teams");
                                            const _0x140a98 = _0x17defb.cloneNode(true);
                                            _0x140a98.onclick = () => this.changeGameMode("teams");
                                            _0x17defb.style.display = "none";
                                            _0x17defb.parentNode.appendChild(_0x140a98);
                                            const _0xf8d154 = document.querySelector(".experimental");
                                            const _0x3a104d = _0xf8d154.cloneNode(true);
                                            _0x3a104d.onclick = () =>
                                                this.changeGameMode("experimental");
                                            _0xf8d154.style.display = "none";
                                            _0xf8d154.parentNode.appendChild(_0x3a104d);
                                            let _0x3740a5 = 0xed;
                                            this.gameModes.forEach((_0x274159) => {
                                                const _0x573e85 = _0xf8d154.cloneNode(true);
                                                _0x573e85.style.display = "flex";
                                                if (_0x274159.type.indexOf("tourney") !== -0x1) {
                                                    _0x573e85.style.flexBasis = "100%";
                                                    _0x573e85.style.display = "none";
                                                    if (_0x274159.type === this.tournamentMode) {
                                                        _0x573e85.style.display = "flex";
                                                        _0x3740a5 += 0x43;
                                                    }
                                                }
                                                _0x573e85.className = "item " + _0x274159.type;
                                                _0x573e85.onclick = () =>
                                                    this.changeGameMode(_0x274159.type);
                                                _0x573e85.children[0x0].innerHTML = _0x274159.fullName;
                                                _0xf8d154.parentNode.appendChild(_0x573e85);
                                            });
                                            dispatchEvent(new Event("hashchange"));
                                            if (document.querySelector(".partymode-info")) {
                                                dispatchEvent(new Event("joinparty"));
                                            }
                                            _0x30a037.style.height = _0x3740a5 + "px";
                                        } else {
                                            if (_0x30a037.className === "partymode-info") {
                                                if (document.getElementById("mainui-modes")) {
                                                    dispatchEvent(new Event("joinparty"));
                                                }
                                            } else {
                                                if (_0x30a037.className === "party-dialog") {
                                                    const _0x1c014d = document.querySelector(
                                                        ".party-dialog .party-join",
                                                    );
                                                    _0x1c014d.onclick = () => this.startLoader();
                                                    const _0x5b5be5 = document.querySelectorAll(
                                                        ".party-dialog .Close, .party-dialog .party-cancel",
                                                    );
                                                    _0x5b5be5.forEach((_0x420556) => {
                                                        _0x420556.onclick = () => {
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
                        _0x21fac0.removedNodes.forEach((_0x41acbd) => {
                            if (_0x41acbd.id === "mainui-modes") {
                                this.isUiRefreshed = true;
                            }
                        });
                    });
                });
                _0x519935.observe(document, {
                    childList: true,
                    subtree: true,
                });
            }
            ["onRegisterSkin"](_0x4c4aec, _0x107f96, _0x3f5924, _0x392c24, _0x13523f) {
                if (
                    !_0x4c4aec &&
                    _0x107f96 &&
                    _0x107f96.substr(0x0, 0x1) === "%" &&
                    _0x107f96.indexOf("%rm_") === -0x1 &&
                    _0x107f96.indexOf("%custom_") === -0x1 &&
                    _0x3f5924 !== "uses_spine"
                ) {
                    this.agarioSkins.unshift({
                        ident: _0x107f96.substr(0x1),
                        url: _0x3f5924,
                        color: _0x13523f,
                    });
                }
            }
            ["onConnect"]() {
                if (!this.isSetup) {
                    this.skins.forEach((_0x3194ea) => {
                        if (_0x3194ea.color >= 0x0) {
                            window.core.registerSkin(
                                null,
                                "%" + _0x3194ea.ident,
                                "" + _0x3194ea.url,
                                "2",
                                _0x3194ea.color,
                            );
                        } else {
                            window.core.registerSkin(
                                null,
                                "%" + _0x3194ea.ident,
                                "" + _0x3194ea.url,
                            );
                        }
                    });
                    window.core.setMinimap(true);
                    window.core.playersMinimap(true);
                    this.isSetup = true;
                }
                this.isAuthSent = false;
                if (
                    this.gameModes.find((_0x22fe6b) => _0x22fe6b.type === this.gameMode)
                ) {
                    const _0x602e31 = window.MiniclipAPI.prototype.getHost();
                    const _0x4fb26d = new Uint8Array([
                        0x1,
                        ...unescape(encodeURIComponent(_0x602e31))
                        .split("")
                        .map((_0x5e99cf) => _0x5e99cf.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(_0x4fb26d);
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
            ["onPacket"](_0x10261b) {
                const _0x211675 = new Uint8Array(Array.from(_0x10261b)).buffer;
                const _0x4bb629 = new DataView(_0x211675);
                let _0xead094 = 0x0;
                const _0x55f106 = _0x4bb629.getUint8(_0xead094);
                _0xead094 += 0x1;
                if (_0x55f106 === 0x8 || _0x55f106 === 0x9) {
                    if (
                        this.gameModes.find((_0x3dfdc1) => _0x3dfdc1.type === this.gameMode)
                    ) {
                        this.ident = "";
                        while (_0x4bb629.getUint8(_0xead094)) {
                            this.ident += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                        }
                        this.ident = decodeURIComponent(escape(this.ident));
                        _0xead094 += 0x1;
                        this.money = _0x4bb629.getUint32(_0xead094, true);
                        _0xead094 += 0x4;
                        this.skin = "";
                        while (_0x4bb629.getUint8(_0xead094)) {
                            this.skin += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                        }
                        this.skin = decodeURIComponent(escape(this.skin));
                        _0xead094 += 0x1;
                        let _0x317e39 = "";
                        while (_0x4bb629.getUint8(_0xead094)) {
                            _0x317e39 += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                        }
                        _0x317e39 = decodeURIComponent(escape(_0x317e39));
                        _0xead094 += 0x1;
                        const _0x113dc4 = _0x4bb629.getUint8(_0xead094);
                        _0xead094 += 0x1;
                        const _0x1934ff = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        const _0x1b4af5 = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        const _0xc81775 = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        const _0x15c675 = _0x4bb629.getUint32(_0xead094, true);
                        this.minions = {
                            loaded: _0x1934ff,
                            owner: _0x317e39,
                            state: _0x113dc4,
                            amount: _0x1934ff,
                            fatAmount: _0x1b4af5,
                            fatMass: _0xc81775,
                            expireTime: Date.now() + _0x15c675 * 0x3e8,
                            time: () =>
                                Math.max(
                                    Math.ceil((this.minions.expireTime - Date.now()) / 0x3e8),
                                    0x0,
                                ),
                            refundStart: 0x0,
                            refundEnd: 0x0,
                        };
                        _0xead094 += 0x4;
                        const _0x4a0b9c = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        this.friends = [];
                        for (let _0x522331 = 0x0; _0x522331 < _0x4a0b9c; _0x522331++) {
                            let _0x1c87d6 = "";
                            while (_0x4bb629.getUint8(_0xead094)) {
                                _0x1c87d6 += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                            }
                            _0x1c87d6 = decodeURIComponent(escape(_0x1c87d6));
                            this.friends.push(_0x1c87d6);
                            _0xead094 += 0x1;
                        }
                        const _0x123d11 = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        this.ownedSkins = [];
                        for (let _0x3e69ee = 0x0; _0x3e69ee < _0x123d11; _0x3e69ee++) {
                            let _0x170da3 = "";
                            while (_0x4bb629.getUint8(_0xead094)) {
                                _0x170da3 += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                            }
                            _0x170da3 = decodeURIComponent(escape(_0x170da3));
                            this.ownedSkins.push(_0x170da3);
                            _0xead094 += 0x1;
                        }
                        this.isLogged = true;
                        this.isAuthSent = true;
                        window.core.proxyMobileData(
                            new Uint8Array([!!window[this.defaultProfile] + 0x30]),
                        );
                        this.loadSkin(this.skin);
                        clearInterval(this.listenLoop);
                        if (this.minions.time() > 0x0) {
                            this.listenLoop = setInterval(() => {
                                if (this.minions.time() <= 0x0) {
                                    clearInterval(this.listenLoop);
                                    window.core.proxyMobileData(new Uint8Array([0x9]));
                                }
                                this.updateInterface(true);
                            }, 0x3e8);
                        }
                        const _0x5398ed = _0x4bb629.getUint16(_0xead094, true);
                        _0xead094 += 0x2;
                        for (let _0x173d86 = 0x0; _0x173d86 < _0x5398ed; _0x173d86++) {
                            let _0x1b60b2 = "";
                            while (_0x4bb629.getUint8(_0xead094)) {
                                _0x1b60b2 += String.fromCharCode(_0x4bb629.getUint8(_0xead094++));
                            }
                            _0x1b60b2 = decodeURIComponent(escape(_0x1b60b2));
                            const _0x3ea7c5 = _0x1b60b2.split(":");
                            const _0x2e4bc2 = this.settings.find(
                                (_0x130c82) => _0x130c82.ident === _0x3ea7c5[0x0],
                            );
                            if (_0x2e4bc2) {
                                const _0x384591 = JSON.parse(JSON.stringify(_0x2e4bc2));
                                _0x2e4bc2.value = _0x3ea7c5[0x1];
                                if (_0x2e4bc2.ident === "connection") {
                                    localStorage.setItem(
                                        _0x2e4bc2.ident,
                                        JSON.stringify(_0x2e4bc2),
                                    );
                                    if (_0x2e4bc2.value !== _0x384591.value) {
                                        this.changeGameMode("ffa", false);
                                    }
                                }
                            }
                            _0xead094 += 0x1;
                        }
                        this.tournamentMode = "";
                        while (_0x4bb629.getUint8(_0xead094)) {
                            this.tournamentMode += String.fromCharCode(
                                _0x4bb629.getUint8(_0xead094++),
                            );
                        }
                        this.tournamentMode = decodeURIComponent(escape(this.tournamentMode));
                        _0xead094 += 0x1;
                        const _0x3d9591 = _0x4bb629.getUint32(_0xead094, true);
                        _0xead094 += 0x4;
                        const _0x1d5d9c = _0x4bb629.getUint32(_0xead094, true);
                        this.minions.refundStart = _0x3d9591;
                        this.minions.refundEnd = _0x1d5d9c;
                        _0xead094 += 0x4;
                        this.serverFatMinions = !!_0x4bb629.getUint8(_0xead094);
                        this.updateInterface();
                        return null;
                    }
                    this.ident = null;
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
                    if (_0x55f106 === 0xa) {
                        if (
                            this.gameModes.find((_0x1eddf2) => _0x1eddf2.type === this.gameMode)
                        ) {
                            location.reload();
                            return null;
                        }
                    } else {
                        if (_0x55f106 === 0xb) {
                            if (
                                this.gameModes.find(
                                    (_0x4f424a) => _0x4f424a.type === this.gameMode,
                                )
                            ) {
                                return new Uint8Array([
                                    0x8, 0x1, 0x12, 0x7, 0x8, 0x14, 0xa2, 0x1, 0x2, 0x8, 0x3,
                                ]);
                            }
                        } else {
                            if (_0x55f106 === 0xe) {
                                this.tournament.time = _0x4bb629.getUint32(_0xead094, true);
                                _0xead094 += 0x4;
                                this.tournament.message = "";
                                while (_0x4bb629.getUint8(_0xead094)) {
                                    this.tournament.message += String.fromCharCode(
                                        _0x4bb629.getUint8(_0xead094++),
                                    );
                                }
                                this.tournament.message = decodeURIComponent(
                                    escape(this.tournament.message),
                                );
                                _0xead094 += 0x1;
                                this.tournament.alive = _0x4bb629.getUint32(_0xead094, true);
                                _0xead094 += 0x4;
                                this.tournament.dead = _0x4bb629.getUint32(_0xead094, true);
                                return null;
                            } else {
                                if (_0x55f106 === 0xc) {
                                    this.tournament.time = _0x4bb629.getUint32(_0xead094, true);
                                    _0xead094 += 0x4;
                                    this.tournament.message = "";
                                    while (_0x4bb629.getUint8(_0xead094)) {
                                        this.tournament.message += String.fromCharCode(
                                            _0x4bb629.getUint8(_0xead094++),
                                        );
                                    }
                                    this.tournament.message = decodeURIComponent(
                                        escape(this.tournament.message),
                                    );
                                    _0xead094 += 0x1;
                                    this.tournament.team1Tag = "";
                                    while (_0x4bb629.getUint8(_0xead094)) {
                                        this.tournament.team1Tag += String.fromCharCode(
                                            _0x4bb629.getUint8(_0xead094++),
                                        );
                                    }
                                    this.tournament.team1Tag = decodeURIComponent(
                                        escape(this.tournament.team1Tag),
                                    );
                                    _0xead094 += 0x1;
                                    this.tournament.team1Score = Math.round(
                                        _0x4bb629.getFloat32(_0xead094, true),
                                    );
                                    _0xead094 += 0x4;
                                    this.tournament.team1Color = _0x4bb629.getUint8(_0xead094);
                                    _0xead094 += 0x1;
                                    this.tournament.team2Tag = "";
                                    while (_0x4bb629.getUint8(_0xead094)) {
                                        this.tournament.team2Tag += String.fromCharCode(
                                            _0x4bb629.getUint8(_0xead094++),
                                        );
                                    }
                                    this.tournament.team2Tag = decodeURIComponent(
                                        escape(this.tournament.team2Tag),
                                    );
                                    _0xead094 += 0x1;
                                    this.tournament.team2Score = Math.round(
                                        _0x4bb629.getFloat32(_0xead094, true),
                                    );
                                    _0xead094 += 0x4;
                                    this.tournament.team2Color = _0x4bb629.getUint8(_0xead094);
                                    return null;
                                } else {
                                    if (_0x55f106 === 0xd) {
                                        this.survivorCoins = _0x4bb629.getInt32(_0xead094, true);
                                        return null;
                                    } else {
                                        if (_0x55f106 === 0xf) {
                                            const _0x3fe969 = window.MiniclipAPI.prototype.getUserId();
                                            const _0x5e29aa = new Uint8Array([
                                                0x2,
                                                ...unescape(encodeURIComponent(_0x3fe969))
                                                .split("")
                                                .map((_0xedaaab) => _0xedaaab.charCodeAt(0x0)),
                                                0x0,
                                            ]);
                                            window.core.proxyMobileData(_0x5e29aa);
                                            return null;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x10261b;
            }
            ["onMouseX"](_0x2679f0) {
                if (this.isPlayerStopped) {
                    return window.innerWidth / 0x2;
                }
                return _0x2679f0;
            }
            ["onMouseY"](_0x2f8596) {
                if (this.isPlayerStopped) {
                    return window.innerHeight / 0x2;
                }
                return _0x2f8596;
            }
            ["onPlayerZoom"](_0x46e65e) {
                const _0x26fc40 = document.getElementById("overlays");
                return _0x26fc40 ? 0x0 : _0x46e65e;
            }
            ["onDisconnect"](_0x5ed7c0) {
                if (
                    this.gameModes.find((_0x5c4177) => _0x5c4177.type === this.gameMode) &&
                    _0x5ed7c0.url.indexOf("agar.io") === -0x1 &&
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
            ["loadSkin"](_0x411b93) {
                let _0x20cf49;
                if (document.getElementById("skinButton").style.display === "") {
                    _0x20cf49 = "skinButton";
                } else {
                    _0x20cf49 = "new-skinButton";
                }
                if (_0x411b93) {
                    window.core.loadSkin("%" + _0x411b93);
                    const {
                        skinOpts: _0x3f4242
                    } = this.getInterface();
                    const _0x4dec22 = document.querySelector(
                        "#" + _0x20cf49 + " .skinWrapper img",
                    );
                    _0x4dec22.src =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
                    _0x4dec22.style.width = "50px";
                    _0x4dec22.style.height = "50px";
                    _0x4dec22.style.display = "block";
                    _0x4dec22.style.backgroundSize = "50px";
                    _0x4dec22.style.backgroundImage = "url('" + _0x3f4242.url + "')";
                    _0x4dec22.style.opacity = "1";
                    const _0x483d8a = document.querySelector(
                        "#" + _0x20cf49 + " .skinWrapper",
                    );
                    _0x483d8a.style.border = "3px solid " + _0x3f4242.color;
                    const _0x489799 = document.querySelector(
                        "#" + _0x20cf49 + " #skinLabel",
                    );
                    _0x489799.style.display = "none";
                    _0x489799.style.opacity = "1";
                } else {
                    window.core.loadSkin("%empty");
                    const _0x3ed70d = document.querySelector(
                        "#" + _0x20cf49 + " .skinWrapper img",
                    );
                    _0x3ed70d.src =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
                    _0x3ed70d.style.width = "50px";
                    _0x3ed70d.style.height = "50px";
                    _0x3ed70d.style.display = "none";
                    _0x3ed70d.style.backgroundSize = "50px";
                    _0x3ed70d.style.backgroundImage = "";
                    _0x3ed70d.style.opacity = "1";
                    const _0x1eb3d2 = document.querySelector(
                        "#" + _0x20cf49 + " .skinWrapper",
                    );
                    _0x1eb3d2.style.border = "3px solid rgb(131, 131, 131)";
                    const _0x749706 = document.querySelector(
                        "#" + _0x20cf49 + " #skinLabel",
                    );
                    _0x749706.style.display = "block";
                    _0x749706.style.opacity = "1";
                }
            }
            ["startLoader"]() {
                if (this.pendingGameMode) {
                    document.querySelector(
                        "." + this.pendingGameMode,
                    ).children[0x0].innerHTML = '<img width="50%" src="img/loader.gif" />';
                }
            }
        async ["changeGameMode"](_0x374619, _0x13f4c4 = true) {
                if (document.querySelector(".partymode-info")) {
                    if (this.gameModes.find((_0x5483f8) => _0x5483f8.type === _0x374619)) {
                        this.pendingGameMode = _0x374619;
                        document.querySelectorAll(".ffa")[0x0].click();
                    } else {
                        document.querySelectorAll("." + _0x374619)[0x0].click();
                    }
                    return;
                }
                if (
                    this.gameModes.find((_0x2a6838) => _0x2a6838.type === this.gameMode) &&
                    _0x374619 === "ffa"
                ) {
                    this.isIgnoringTeams = true;
                    document.querySelectorAll(".teams")[0x0].click();
                    document.querySelectorAll(".ffa")[0x0].click();
                } else {
                    if (!this.gameModes.find((_0x1e14b9) => _0x1e14b9.type === _0x374619)) {
                        document.querySelectorAll("." + _0x374619)[0x0].click();
                    } else {
                        if (
                            !this.gameModes.find(
                                (_0x1365fb) => _0x1365fb.type === this.gameMode,
                            ) &&
                            this.gameMode !== "ffa"
                        ) {
                            this.pendingGameMode = _0x374619;
                            document.querySelectorAll(".ffa")[0x0].click();
                            this.startLoader();
                        } else {
                            if (
                                this.gameModes.find(
                                    (_0x3b2eee) => _0x3b2eee.type === this.gameMode,
                                ) &&
                                _0x374619 !== this.gameMode
                            ) {
                                this.pendingGameMode = _0x374619;
                                document.querySelectorAll(".teams")[0x0].click();
                                document.querySelectorAll(".ffa")[0x0].click();
                                this.startLoader();
                            } else {
                                if (
                                    (!this.pendingGameMode || !_0x13f4c4) &&
                                    _0x374619 !== this.gameMode
                                ) {
                                    const _0x29db7f = await fetch(
                                            "https://minions.raga.pw/ragamode/findServer", {
                                                cache: "no-store",
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded",
                                                },
                                                body: "gameMode=" + _0x374619,
                                            },
                                        )
                                        .then((_0x4fd12e) => _0x4fd12e.text())
                                        .then((_0x4a51b8) => {
                                            if (
                                                this.settings.find(
                                                    (_0x5c5d4b) => _0x5c5d4b.ident === "connection",
                                                ).value === "1"
                                            ) {
                                                return _0x4a51b8.replace("rm", "rm-cf");
                                            } else {
                                                if (
                                                    this.settings.find(
                                                        (_0x4f53d8) => _0x4f53d8.ident === "connection",
                                                    ).value === "2"
                                                ) {
                                                    return _0x4a51b8.replace("rm", "rm-us");
                                                } else {
                                                    if (
                                                        this.settings.find(
                                                            (_0x12af9f) => _0x12af9f.ident === "connection",
                                                        ).value === "3"
                                                    ) {
                                                        return _0x4a51b8.replace("rm", "rm-in");
                                                    }
                                                }
                                            }
                                            return _0x4a51b8;
                                        })["catch"](() => {});
                                    if (!_0x29db7f) {
                                        alert("Something went wrong, please try again later");
                                    } else {
                                        document.querySelectorAll(".ffa")[0x1].className = "item ffa";
                                        document.querySelector("." + this.gameMode).className =
                                            "item " + this.gameMode;
                                        document.querySelector(
                                            "." + _0x374619,
                                        ).children[0x0].innerHTML = this.gameModes.find(
                                            (_0x23e4d2) => _0x23e4d2.type === _0x374619,
                                        ).fullName;
                                        document.querySelector("." + _0x374619).className =
                                            "item active " + _0x374619;
                                        window.core.connect(_0x29db7f);
                                        this.gameMode = _0x374619;
                                        this.isSwitchingGameMode = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            ["formatInterfaceTime"](_0x87e8c6) {
                if (_0x87e8c6 < 0x3c) {
                    let _0x19912e = _0x87e8c6;
                    _0x19912e += _0x19912e === 0x1 ? " second" : " seconds";
                    return _0x19912e;
                }
                if (_0x87e8c6 < 0xe10) {
                    let _0x21a9f4 = Math.floor(_0x87e8c6 / 0x3c);
                    _0x21a9f4 += _0x21a9f4 === 0x1 ? " minute" : " minutes";
                    return _0x21a9f4;
                }
                if (_0x87e8c6 < 0x15180) {
                    let _0x5b4fc8 = Math.floor(_0x87e8c6 / 0xe10);
                    let _0x2ae169 = Math.floor((_0x87e8c6 - _0x5b4fc8 * 0xe10) / 0x3c);
                    if (_0x2ae169 > 0x0) {
                        _0x5b4fc8 += _0x5b4fc8 === 0x1 ? " hour" : " hrs";
                        _0x2ae169 += _0x2ae169 === 0x1 ? " minute" : " mins";
                        return _0x5b4fc8 + " " + _0x2ae169;
                    }
                    _0x5b4fc8 += _0x5b4fc8 === 0x1 ? " hour" : " hours";
                    return _0x5b4fc8;
                }
                if (_0x87e8c6 < 0x278d00) {
                    let _0x32a1fb = Math.floor(_0x87e8c6 / 0x15180);
                    let _0x11def8 = Math.floor((_0x87e8c6 - _0x32a1fb * 0x15180) / 0xe10);
                    if (_0x11def8 > 0x0) {
                        _0x32a1fb += _0x32a1fb === 0x1 ? " day" : " days";
                        _0x11def8 += _0x11def8 === 0x1 ? " hour" : " hrs";
                        return _0x32a1fb + " " + _0x11def8;
                    }
                    _0x32a1fb += _0x32a1fb === 0x1 ? " day" : " days";
                    return _0x32a1fb;
                }
                let _0x3e804d = Math.floor(_0x87e8c6 / 0x278d00);
                let _0x459eb5 = Math.floor((_0x87e8c6 - _0x3e804d * 0x3f480) / 0x15180);
                if (_0x459eb5 > 0x0) {
                    _0x3e804d += _0x3e804d === 0x1 ? " month" : " months";
                    _0x459eb5 += _0x459eb5 === 0x1 ? " day" : " days";
                    return _0x3e804d + " " + _0x459eb5;
                }
                _0x3e804d += _0x3e804d === 0x1 ? " month" : " months";
                return _0x3e804d;
            }
            ["getInterface"]() {
                const _0x41d1cd = this.profileImage ?
                    this.profileImage :
                    "img/profilepic_guest.png";
                const _0x2e0331 = this.money ? this.money : "0";
                const _0x335ff9 =
                    "ID: " +
                    (this.isLogged ?
                        this.ident ?
                        '<span class="ident">' + this.ident + "</span>" :
                        "Loading..." :
                        "Sign in");
                const _0x2ddb9e = this.profileName ? this.profileName : "Guest";
                let _0x1ed7af;
                let _0xcf5ac6;
                if (!this.isLogged) {
                    _0x1ed7af = "Sign in";
                    _0xcf5ac6 = "Sign in";
                } else {
                    if (this.minions.amount === 0x0 && this.minions.fatAmount === 0x0) {
                        _0x1ed7af = "Loading...";
                        _0xcf5ac6 = "Loading...";
                    } else if (this.minions.time() <= 0x0) {
                        _0x1ed7af =
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " free minions";
                        _0xcf5ac6 =
                            "You have " +
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " free minions, rent more now";
                    } else {
                        _0x1ed7af =
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " minions, " +
                            this.formatInterfaceTime(this.minions.time()) +
                            " left";
                        _0xcf5ac6 =
                            "You have " +
                            (this.minions.fatAmount === 0x0 ?
                                this.minions.amount :
                                this.minions.amount + " + " + this.minions.fatAmount) +
                            " minions, rent ends in " +
                            this.formatInterfaceTime(this.minions.time());
                    }
                }
                let _0x3baae7 = "";
                if (this.isLogged && this.minions.refundEnd > 0x0) {
                    if (
                        Date.now() > new Date(this.minions.refundStart * 0x3e8) &&
                        Date.now() < new Date(this.minions.refundEnd * 0x3e8)
                    ) {
                        _0x3baae7 =
                            '<div class="refund">Click <span onclick="raga.refundMinionsInterface();">here</span> to refund this rent</div>';
                    } else {
                        _0x3baae7 =
                            '<div class="refund">Contact our <span onclick="raga.supportMinionsInterface();">Support Center</span> if you need any help</div>';
                    }
                }
                let _0x225ef5 = null;
                if (this.skin) {
                    if (this.skin.indexOf("rm_") !== -0x1) {
                        const _0x5c5399 = this.skins.find(
                            (_0x95b2ff) => _0x95b2ff.ident === this.skin,
                        );
                        _0x225ef5 = {
                            url: _0x5c5399.url.replace("/normal/", "/small/"),
                            color: "#" +
                                (_0x5c5399.color >= 0x0 ? _0x5c5399.color : 0xffffff)
                                .toString(0x10)
                                .padStart(0x6, "0"),
                        };
                    } else {
                        const _0x1b9435 = this.agarioSkins.find(
                            (_0x5ca242) => _0x5ca242.ident === this.skin,
                        );
                        _0x225ef5 = {
                            url: _0x1b9435.url.replace(".png", "_low.png"),
                            color: "#" + _0x1b9435.color.toString(0x10).padStart(0x6, "0"),
                        };
                    }
                }
                return {
                    profileImage: _0x41d1cd,
                    money: _0x2e0331,
                    ident: _0x335ff9,
                    profileName: _0x2ddb9e,
                    minions: _0x1ed7af,
                    minionsShop: _0xcf5ac6,
                    minionsShopRefund: _0x3baae7,
                    skinOpts: _0x225ef5,
                };
            }
            ["updateInterface"](_0x16e83d = false) {
                const _0x485711 = document.querySelector(".new-user-container");
                if (_0x485711) {
                    const _0x572a35 = this.getInterface();
                    const _0x4ee9ff = document.querySelector(
                        ".new-user-container .user-picture",
                    );
                    _0x4ee9ff.src = _0x572a35.profileImage;
                    const _0x2e9b7b = document.querySelector(
                        ".new-user-container .currency-container .label",
                    );
                    _0x2e9b7b.innerHTML = _0x572a35.money;
                    const _0x524ffa = document.querySelector(
                        ".new-user-container .ident-container",
                    );
                    if (_0x524ffa.innerHTML !== _0x572a35.ident) {
                        _0x524ffa.innerHTML = _0x572a35.ident;
                    }
                    const _0x490e4b = document.querySelector(
                        ".new-user-container .user-name",
                    );
                    _0x490e4b.innerHTML = _0x572a35.profileName;
                    const _0x3bf3a3 = document.querySelector(
                        ".new-user-container .progress-bar-text",
                    );
                    _0x3bf3a3.innerHTML = _0x572a35.minions;
                    const _0x3718ea = document.querySelector(
                        ".leagues-dialog .currency-container .label",
                    );
                    if (_0x3718ea) {
                        _0x3718ea.innerHTML = _0x572a35.money;
                    }
                    const _0x2ed09b = document.querySelector(
                        ".raga-mode-shop .minions-stop",
                    );
                    if (_0x2ed09b) {
                        _0x2ed09b.innerHTML = _0x572a35.minionsShop;
                    }
                    const _0x3c2415 = document.querySelector(
                        ".raga-mode-shop .minions .refund-container",
                    );
                    if (_0x3c2415) {
                        _0x3c2415.innerHTML = _0x572a35.minionsShopRefund;
                    }
                    if (!_0x16e83d) {
                        const _0x39e84b = document.querySelector(".raga-mode-shop .minions");
                        if (_0x39e84b) {
                            this.openShopInterface(0x1);
                        }
                        let _0x357bf3 = document.querySelector(".raga-mode-settings");
                        if (_0x357bf3) {
                            const {
                                scrollTop: _0x30fefe
                            } = _0x357bf3;
                            this.openSettingsInterface();
                            _0x357bf3 = document.querySelector(".raga-mode-settings");
                            _0x357bf3.scrollTop = _0x30fefe;
                        }
                    }
                }
                const _0x4a9eb8 = document.getElementById("nick");
                if (_0x4a9eb8) {
                    this.checkSpawnInterface();
                }
                const _0x3e8cc6 = document.getElementById("mainui-modes");
                if (_0x3e8cc6) {
                    let _0x1d68d2 = 0xed;
                    [...document.querySelectorAll(".item")].forEach((_0x132967) => {
                        if (_0x132967.className.indexOf("tourney") !== -0x1) {
                            _0x132967.style.display = "none";
                            if (_0x132967.classList.contains(this.tournamentMode)) {
                                _0x132967.style.display = "flex";
                                _0x1d68d2 += 0x43;
                            }
                        }
                    });
                    _0x3e8cc6.style.height = _0x1d68d2 + "px";
                }
            }
            ["openShopInterface"](_0x38bc3e, _0x3a6054 = 0x0) {
                if (!this.isLogged) {
                    alert("Please sign in to use shop");
                    return;
                }
                let _0x2f1a47 = "";
                _0x2f1a47 +=
                    '<div onclick="raga.closeShopInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                _0x2f1a47 += '<div class="leagues-dialog">';
                _0x2f1a47 +=
                    '<span onclick="raga.closeShopInterface();" class="leagues-inner-close sprite-main Close"></span>';
                _0x2f1a47 += "<h1>Raga Mode Shop</h1>";
                _0x2f1a47 +=
                    '<div onclick="raga.openShopInterface(0);" class="currency-container"><span class="label">' +
                    this.getInterface().money +
                    '</span><span class="icon sprite-main currency-icon raga-coins"></span><div class="plus"><span>+</span></div></div>';
                _0x2f1a47 += '<div id="menu-leagues">';
                _0x2f1a47 += '<div class="button-row">';
                _0x2f1a47 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(0);" class="btn btn-myleague' +
                    (_0x38bc3e === 0x0 ? "-selected" : "") +
                    ' left">Buy Coins</button></div>';
                _0x2f1a47 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(1);" class="btn btn-country' +
                    (_0x38bc3e === 0x1 ? "-selected" : "") +
                    '">Rent Minions</button></div>';
                _0x2f1a47 +=
                    '<div class="button-cell"><button onclick="raga.openShopInterface(2);" class="btn btn-world' +
                    (_0x38bc3e === 0x2 ? "-selected" : "") +
                    '">Create Skin</button></div>';
                _0x2f1a47 += "</div>";
                _0x2f1a47 += "</div>";
                _0x2f1a47 += '<div class="raga-mode-shop">';
                if (_0x38bc3e === 0x0) {
                    this.shops
                        .filter((_0xa4a54f) => _0xa4a54f.money.amount)
                        .forEach((_0x27b535) => {
                            _0x2f1a47 +=
                                '<div onclick="raga.buyCoinsInterface(' +
                                _0x27b535.id +
                                ');" class="coins-entry"><div class="block first">' +
                                _0x27b535.money.amount +
                                '</div><div class="block">+</div><div class="block"><span class="orange">' +
                                _0x27b535.money.bonus +
                                '%</span></div><div class="block orange-text">=</div><div class="block orange-text">' +
                                Math.round(
                                    _0x27b535.money.amount +
                                    _0x27b535.money.amount * (_0x27b535.money.bonus / 0x64),
                                ) +
                                ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -3px;"></span></div><div class="block"><span class="light">€' +
                                _0x27b535.price.toFixed(0x2) +
                                '</span></div><div class="block green last">Buy</div></div>';
                        });
                } else {
                    if (_0x38bc3e === 0x1) {
                        _0x2f1a47 +=
                            '<div class="minions-stop">' +
                            this.getInterface().minionsShop +
                            "</div>";
                        _0x2f1a47 += '<div class="minions">';
                        if (
                            this.minions.owner === this.ident &&
                            this.minions.state === 0x1 &&
                            this.minions.time() > 0x0
                        ) {
                            _0x2f1a47 += '<div class="friends">';
                            _0x2f1a47 += '<div class="title">Share With Friends</div>';
                            _0x2f1a47 += '<div class="block">';
                            this.friends.forEach((_0x5095fb) => {
                                _0x2f1a47 +=
                                    '<input type="text" spellcheck="false" placeholder="Enter Friend\'s ID" value="' +
                                    _0x5095fb +
                                    '" class="friend ' +
                                    (_0x5095fb ? "taken" : "") +
                                    '" />';
                            });
                            _0x2f1a47 += "</div>";
                            _0x2f1a47 +=
                                '<div onclick="raga.saveFriendsInterface();" class="save">Save</div>';
                            _0x2f1a47 +=
                                '<div class="refund-container">' +
                                this.getInterface().minionsShopRefund +
                                "</div>";
                            _0x2f1a47 += "</div>";
                        } else {
                            if (
                                this.minions.owner === this.ident &&
                                this.minions.state === 0x2 &&
                                this.minions.time() > 0x0
                            ) {
                                _0x2f1a47 +=
                                    '<div class="no-friends">This rent can\'t be shared with friends</div>';
                                _0x2f1a47 +=
                                    '<div class="refund-container">' +
                                    this.getInterface().minionsShopRefund +
                                    "</div>";
                            } else {
                                if (
                                    this.minions.owner !== this.ident &&
                                    this.minions.time() > 0x0
                                ) {
                                    _0x2f1a47 += '<div class="cancel-friendship">';
                                    _0x2f1a47 += '<div class="title">Shared By</div>';
                                    _0x2f1a47 +=
                                        '<div class="block"><div class="friendship">' +
                                        this.minions.owner +
                                        "</div></div>";
                                    _0x2f1a47 +=
                                        '<div onclick="raga.cancelFriendshipInterface();" class="cancel">Cancel</div>';
                                    _0x2f1a47 += "</div>";
                                } else {
                                    if (this.serverFatMinions) {
                                        _0x2f1a47 +=
                                            '<div id="menu-leagues" style="margin-top: 5px; margin-bottom: 15px; border-spacing: 0;">';
                                        _0x2f1a47 += '<div class="button-row">';
                                        _0x2f1a47 +=
                                            '<div class="button-cell"><button onclick="raga.openShopInterface(1, 0);" class="btn btn-one' +
                                            (_0x3a6054 === 0x0 ? "-selected" : "") +
                                            ' left">Regular</button></div>';
                                        _0x2f1a47 +=
                                            '<div class="button-cell"><button onclick="raga.openShopInterface(1, 1);" class="btn btn-two' +
                                            (_0x3a6054 === 0x1 ? "-selected" : "") +
                                            '">Solo Bundle (No Sharing)</button></div>';
                                        _0x2f1a47 += "</div>";
                                        _0x2f1a47 += "</div>";
                                    }
                                    if (_0x3a6054 === 0x0) {
                                        const _0x33afd9 = this.shops.filter(
                                            (_0x2c9111) => _0x2c9111.minions.state === 0x1,
                                        );
                                        _0x33afd9
                                            .filter((_0x49d48a) => _0x49d48a.minions.fatAmount === 0x0)
                                            .forEach((_0x214ce0) => {
                                                _0x2f1a47 += '<div class="minions-entry">';
                                                _0x2f1a47 += '<div class="block">';
                                                _0x2f1a47 +=
                                                    '<div class="btn-one title">' +
                                                    _0x214ce0.minions.amount +
                                                    " Minions</div>";
                                                _0x2f1a47 +=
                                                    '<div class="time"><span class="clock-grey sprite-main"></span>' +
                                                    this.formatInterfaceTime(_0x214ce0.minions.time) +
                                                    "</div>";
                                                _0x2f1a47 += '<div class="hr"></div>';
                                                _0x2f1a47 += '<div class="mass-selector">';
                                                _0x2f1a47 +=
                                                    '<div onclick="raga.prepareMinionsInterface(this, ' +
                                                    _0x214ce0.id +
                                                    ", " +
                                                    _0x214ce0.price +
                                                    ');" class="selected"><div></div><span>None</span></div>';
                                                _0x33afd9
                                                    .filter(
                                                        (_0x1ba253) =>
                                                        _0x1ba253.minions.amount ===
                                                        _0x214ce0.minions.amount &&
                                                        _0x1ba253.minions.time === _0x214ce0.minions.time &&
                                                        _0x1ba253.minions.fatAmount > 0x0,
                                                    )
                                                    .forEach((_0x373702) => {
                                                        _0x2f1a47 +=
                                                            '<div onclick="raga.prepareMinionsInterface(this, ' +
                                                            _0x373702.id +
                                                            ", " +
                                                            _0x373702.price +
                                                            ');"><div></div><span>' +
                                                            _0x373702.minions.fatAmount +
                                                            " Mass Minions</span></div>";
                                                    });
                                                _0x2f1a47 += "</div>";
                                                _0x2f1a47 += "</div>";
                                                _0x2f1a47 +=
                                                    '<div onclick="raga.buyMinionsInterface(this, ' +
                                                    _0x214ce0.id +
                                                    ');" class="buy">' +
                                                    _0x214ce0.price +
                                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div>';
                                                _0x2f1a47 += "</div>";
                                            });
                                    } else if (_0x3a6054 === 0x1) {
                                        this.shops
                                            .filter((_0x6ddd32) => _0x6ddd32.minions.state === 0x2)
                                            .forEach((_0xe83c1f) => {
                                                _0x2f1a47 +=
                                                    '<div class="minions-entry"><div class="block"><div class="btn-two title">' +
                                                    _0xe83c1f.minions.amount +
                                                    " + " +
                                                    _0xe83c1f.minions.fatAmount +
                                                    ' Minions</div><div class="time">' +
                                                    _0xe83c1f.minions.fatMass +
                                                    ' mass</div><div class="time"><span class="clock-grey sprite-main"></span>' +
                                                    this.formatInterfaceTime(_0xe83c1f.minions.time) +
                                                    '</div></div><div onclick="raga.buyMinionsInterface(this, ' +
                                                    _0xe83c1f.id +
                                                    ');" class="buy">' +
                                                    _0xe83c1f.price +
                                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div></div>';
                                            });
                                    }
                                }
                            }
                        }
                        _0x2f1a47 += "</div>";
                    } else {
                        if (_0x38bc3e === 0x2) {
                            if (_0x3a6054 === 0x0) {
                                _0x2f1a47 += '<div class="create-skin">';
                                _0x2f1a47 +=
                                    '<div class="instruction">Recommended image size is 512 x 512 pixels</div>';
                                _0x2f1a47 += '<div class="border">';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);" class="selected"><span class="green"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="yellow"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="orange"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="red"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="violet"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="pink"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="blue"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="light-blue"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="white"></span></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.selectSkinBorderInterface(this);"><span class="black"></span></div>';
                                _0x2f1a47 += "</div>";
                                _0x2f1a47 += '<canvas width="208" height="208"></canvas>';
                                _0x2f1a47 +=
                                    '<label for="select-image-upload" class="select-image">Select image</label><input id="select-image-upload" type="file" accept="image/*" onchange="raga.selectSkinImageInterface(this);" />';
                                _0x2f1a47 += '<div class="serror"></div>';
                                _0x2f1a47 +=
                                    '<div onclick="raga.saveSkinInterface(this);" class="save">' +
                                    this.shops.find((_0x41faa4) => _0x41faa4.skin).price +
                                    ' <span class="sprite-main currency-icon raga-coins" style="vertical-align: -4px;"></span></div>';
                                _0x2f1a47 += "</div>";
                            } else {
                                if (_0x3a6054 === 0x1) {
                                    _0x2f1a47 += '<div class="create-skin">';
                                    _0x2f1a47 +=
                                        '<div class="instruction">Please wait while your skin is being created</div>';
                                    _0x2f1a47 += '<div class="loader"></div>';
                                    _0x2f1a47 += "</div>";
                                } else if (_0x3a6054 === 0x2) {
                                    _0x2f1a47 += '<div class="create-skin">';
                                    _0x2f1a47 +=
                                        '<div class="instruction">Your skin is created and will be approved in 24 hours</div>';
                                    _0x2f1a47 += '<div class="done sprite-common rush_icon"></div>';
                                    _0x2f1a47 += "</div>";
                                }
                            }
                        }
                    }
                }
                _0x2f1a47 += "</div>";
                _0x2f1a47 += "</div>";
                const _0x1c9f52 = document.createElement("div");
                _0x1c9f52.innerHTML = _0x2f1a47;
                const _0x533f57 = document.getElementById("leagues-app");
                if (_0x533f57.lastChild.nodeType === 0x1) {
                    _0x533f57.removeChild(_0x533f57.lastChild);
                }
                _0x533f57.appendChild(_0x1c9f52);
            }
            ["buyCoinsInterface"](_0x50d4ae) {
                open(
                    "https://minions.raga.pw/ragamode/coins/" +
                    this.ident +
                    "/" +
                    _0x50d4ae,
                    "_blank",
                );
            }
            ["prepareMinionsInterface"](_0x34a775, _0x1712b9, _0x16a291) {
                const _0x41e4e1 = _0x34a775.parentNode.parentNode.parentNode;
                const _0xf929ff = _0x41e4e1.querySelector(".buy");
                _0xf929ff.innerHTML = _0xf929ff.innerHTML.replace(/\d+/, _0x16a291);
                _0xf929ff.setAttribute(
                    "onclick",
                    "raga.buyMinionsInterface(this, " + _0x1712b9 + ");",
                );
                const _0x2e4228 = _0x41e4e1.querySelector(
                    ".block .mass-selector>div.selected",
                );
                _0x2e4228.className = "";
                _0x34a775.className = "selected";
            }
            ["buyMinionsInterface"](_0x279557, _0x1af248) {
                if (!confirm("Are you sure you want to rent this package?")) {
                    return;
                }
                if (parseInt(_0x279557.innerHTML, 0xa) > this.money) {
                    alert("You do not have enough Raga Coins");
                    return;
                }
                const _0x6c566 = new DataView(new ArrayBuffer(0x3));
                let _0x33345b = 0x0;
                _0x6c566.setUint8(_0x33345b, 0x20);
                _0x33345b += 0x1;
                _0x6c566.setUint16(_0x33345b, _0x1af248, true);
                const _0x30802e = new Uint8Array(_0x6c566.buffer);
                window.core.proxyMobileData(_0x30802e);
                window.core.proxyMobileData(new Uint8Array([0x9]));
            }
            ["saveFriendsInterface"]() {
                const _0x1eb089 = Array.prototype.slice.call(
                    document.querySelectorAll(
                        ".raga-mode-shop .minions .friends .block .friend",
                    ),
                );
                const _0x2bfda3 =
                    0x3 +
                    _0x1eb089.reduce(
                        (_0x58f0d6, _0x376804) =>
                        _0x58f0d6 +
                        unescape(encodeURIComponent(_0x376804.value)).length +
                        0x1,
                        0x0,
                    );
                const _0x44eb60 = new DataView(new ArrayBuffer(_0x2bfda3));
                let _0x12c812 = 0x0;
                _0x44eb60.setUint8(_0x12c812, 0x21);
                _0x12c812 += 0x1;
                _0x44eb60.setUint16(_0x12c812, _0x1eb089.length, true);
                _0x12c812 += 0x2;
                _0x1eb089.forEach((_0x397a46) => {
                    unescape(encodeURIComponent(_0x397a46.value))
                        .split("")
                        .forEach((_0x6a58fd) => {
                            _0x44eb60.setUint8(_0x12c812++, _0x6a58fd.charCodeAt(0x0));
                        });
                    _0x44eb60.setUint8(_0x12c812, 0x0);
                    _0x12c812 += 0x1;
                });
                const _0x1fa90b = new Uint8Array(_0x44eb60.buffer);
                window.core.proxyMobileData(_0x1fa90b);
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
            ["selectSkinImageInterface"](_0x3d9091) {
                const _0xf650ff = _0x3d9091.files[0x0];
                const _0x46936c = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected>span",
                );
                const _0xa64128 = getComputedStyle(_0x46936c).backgroundColor;
                this.drawSkinInterface(_0xf650ff, _0xa64128);
            }
            ["selectSkinBorderInterface"](_0x242c1b) {
                const _0x3f219b = document.getElementById("select-image-upload");
                const _0x10a0b2 = _0x3f219b.files[0x0];
                const _0x44bf8c = getComputedStyle(_0x242c1b.firstChild).backgroundColor;
                this.drawSkinInterface(_0x10a0b2, _0x44bf8c);
                const _0x2cf4d7 = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected",
                );
                _0x2cf4d7.className = "";
                _0x242c1b.className = "selected";
                _0x242c1b.style.borderColor = _0x44bf8c;
            }
            ["drawSkinInterface"](_0x519405, _0x39c74e) {
                const _0x514198 = document
                    .querySelector(".raga-mode-shop .create-skin canvas")
                    .getContext("2d");
                const _0x1c2983 = new Image();
                _0x1c2983.onload = () => {
                    _0x514198.clearRect(
                        0x0,
                        0x0,
                        _0x514198.canvas.width,
                        _0x514198.canvas.height,
                    );
                    _0x514198.save();
                    _0x514198.beginPath();
                    _0x514198.arc(
                        _0x514198.canvas.width / 0x2,
                        _0x514198.canvas.height / 0x2,
                        0x64,
                        0x0,
                        Math.PI * 0x2,
                        true,
                    );
                    _0x514198.closePath();
                    _0x514198.clip();
                    _0x514198.drawImage(
                        _0x1c2983,
                        _0x1c2983.naturalWidth / 0x2 - 0x100,
                        _0x1c2983.naturalHeight / 0x2 - 0x100,
                        0x200,
                        0x200,
                        _0x514198.canvas.width / 0x2 - 0x64,
                        _0x514198.canvas.width / 0x2 - 0x64,
                        0xc8,
                        0xc8,
                    );
                    _0x514198.restore();
                    _0x514198.strokeStyle = _0x39c74e;
                    _0x514198.lineWidth = 0x4;
                    _0x514198.beginPath();
                    _0x514198.arc(
                        _0x514198.canvas.width / 0x2,
                        _0x514198.canvas.height / 0x2,
                        0x64,
                        0x0,
                        Math.PI * 0x2,
                        true,
                    );
                    _0x514198.closePath();
                    _0x514198.stroke();
                    const _0x3a85c6 = document.querySelector(
                        ".raga-mode-shop .create-skin .border",
                    );
                    _0x3a85c6.style.display = "block";
                    _0x514198.canvas.style.display = "block";
                    const _0x3e6739 = document.querySelector(
                        ".raga-mode-shop .create-skin .serror",
                    );
                    const _0x1df32c = document.querySelector(
                        ".raga-mode-shop .create-skin .save",
                    );
                    if (_0x519405.size > 1048576) {
                        _0x3e6739.innerHTML = "Maximum file size is 1 MB";
                        _0x3e6739.style.display = "block";
                        _0x1df32c.style.display = "none";
                    } else if (
                        _0x1c2983.naturalWidth < 0x200 ||
                        _0x1c2983.naturalHeight < 0x200
                    ) {
                        _0x3e6739.innerHTML = "Selected image is too small";
                        _0x3e6739.style.display = "block";
                        _0x1df32c.style.display = "none";
                    } else {
                        _0x3e6739.style.display = "none";
                        _0x1df32c.style.display = "block";
                    }
                };
                const _0x26fea8 = new FileReader();
                _0x26fea8.onloadend = () => {
                    _0x1c2983.src = _0x26fea8.result;
                };
                _0x26fea8.readAsDataURL(_0x519405);
            }
        async ["saveSkinInterface"](_0x20f759) {
                if (!confirm("Are you sure you want to create this skin?")) {
                    return;
                }
                if (parseInt(_0x20f759.innerHTML, 0xa) > this.money) {
                    alert("You do not have enough Raga Coins");
                    return;
                }
                const _0x1f4ae8 = document.getElementById("select-image-upload");
                const _0x3462df = _0x1f4ae8.files[0x0];
                const _0x1f5acb = document.querySelector(
                    ".raga-mode-shop .create-skin .border>div.selected>span",
                );
                const _0x3ae780 = getComputedStyle(_0x1f5acb).backgroundColor;
                const _0x725b9 = _0x3ae780
                    .match(/\d+/g)
                    .map((_0x891894) => parseInt(_0x891894, 0xa));
                const _0x1ad6dd =
                    (_0x725b9[0x0] << 0x10) + (_0x725b9[0x1] << 0x8) + _0x725b9[0x2];
                const _0x4d9acc = new FormData();
                _0x4d9acc.append("skin", _0x3462df);
                _0x4d9acc.append("color", _0x1ad6dd.toString());
                this.openShopInterface(0x2, 0x1);
                const _0x3b0109 = await fetch("https://minions.raga.pw/ragamode/skins", {
                        cache: "no-store",
                        method: "POST",
                        body: _0x4d9acc,
                    })
                    .then((_0x24e1e5) => _0x24e1e5.json())["catch"](() => {});
                if (_0x3b0109 && _0x3b0109.status === "OK") {
                    const _0x4c0f32 = new Uint8Array([
                        0x23,
                        ...unescape(encodeURIComponent(_0x3b0109.claim))
                        .split("")
                        .map((_0x18f92e) => _0x18f92e.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(_0x4c0f32);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                    this.openShopInterface(0x2, 0x2);
                }
            }
            ["closeShopInterface"]() {
                const _0x348c66 = document.getElementById("leagues-app");
                if (_0x348c66.lastChild.nodeType === 0x1) {
                    _0x348c66.removeChild(_0x348c66.lastChild);
                }
            }
            ["openSettingsInterface"]() {
                if (!this.isLogged) {
                    alert("Please sign in to use settings");
                    return;
                }
                let _0x124c0a = "";
                _0x124c0a +=
                    '<div onclick="raga.closeSettingsInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                _0x124c0a += '<div class="leagues-dialog">';
                _0x124c0a +=
                    '<span onclick="raga.closeSettingsInterface();" class="leagues-inner-close sprite-main Close"></span>';
                _0x124c0a += "<h1>Raga Mode Settings</h1>";
                _0x124c0a += '<div class="raga-mode-settings">';
                _0x124c0a += '<div class="settings-entry general">';
                _0x124c0a += '<div class="section">General</div>';
                this.settings
                    .filter((_0x198cf4) => _0x198cf4.section === "general")
                    .forEach((_0x18b2da) => {
                        _0x124c0a +=
                            '<div class="command"><div class="name">' +
                            _0x18b2da.name +
                            '</div><select onfocus="this.oldValue = this.value;" onchange="raga.changeSettingsInterface(this);" data-ident="' +
                            _0x18b2da.ident +
                            '" class="select">' +
                            _0x18b2da.command
                            .map(
                                (_0x26daf7) =>
                                '<option value="' +
                                _0x26daf7.value +
                                '" ' +
                                (_0x26daf7.value === _0x18b2da.value ? "selected" : "") +
                                ">" +
                                _0x26daf7.name +
                                "</option>",
                            )
                            .join() +
                            "</select></div>";
                    });
                _0x124c0a += "</div>";
                _0x124c0a += '<div class="settings-entry">';
                _0x124c0a += '<div class="section">Player</div>';
                this.settings
                    .filter((_0x5a6a1b) => _0x5a6a1b.section === "player")
                    .forEach((_0x542dc7) => {
                        _0x124c0a +=
                            '<div class="command"><div class="name">' +
                            _0x542dc7.name +
                            '</div><div onclick="raga.changeSettingsInterface(this);" data-ident="' +
                            _0x542dc7.ident +
                            '" data-active="Press a key" class="value ' +
                            (this.settings.filter(
                                    (_0xce0094) =>
                                    typeof _0xce0094.command === "function" &&
                                    _0xce0094.value === _0x542dc7.value,
                                ).length > 0x1 ?
                                "conflict" :
                                "") +
                            '"><span>' +
                            _0x542dc7.value.replace(" ", "space").toUpperCase() +
                            "</span></div></div>";
                    });
                _0x124c0a += "</div>";
                _0x124c0a += '<div class="settings-entry">';
                _0x124c0a += '<div class="section">Minion</div>';
                this.settings
                    .filter((_0x294373) => _0x294373.section === "minion")
                    .forEach((_0x4ab262) => {
                        _0x124c0a +=
                            '<div class="command"><div class="name">' +
                            _0x4ab262.name +
                            '</div><div onclick="raga.changeSettingsInterface(this);" data-ident="' +
                            _0x4ab262.ident +
                            '" data-active="Press a key" class="value ' +
                            (this.settings.filter(
                                    (_0x57f012) =>
                                    typeof _0x57f012.command === "function" &&
                                    _0x57f012.value === _0x4ab262.value,
                                ).length > 0x1 ?
                                "conflict" :
                                "") +
                            '"><span>' +
                            _0x4ab262.value.replace(" ", "space").toUpperCase() +
                            "</span></div></div>";
                    });
                _0x124c0a += "</div>";
                _0x124c0a += "</div>";
                _0x124c0a += "</div>";
                const _0x4ae324 = document.createElement("div");
                _0x4ae324.innerHTML = _0x124c0a;
                const _0x4337ca = document.getElementById("leagues-app");
                if (_0x4337ca.lastChild.nodeType === 0x1) {
                    _0x4337ca.removeChild(_0x4337ca.lastChild);
                }
                _0x4337ca.appendChild(_0x4ae324);
            }
            ["changeSettingsInterface"](_0x44d709) {
                const _0x1c14a1 = this.settings.find(
                    (_0x2dad27) => _0x2dad27.ident === _0x44d709.getAttribute("data-ident"),
                );
                if (_0x1c14a1.section === "general") {
                    if (_0x1c14a1.ident === "connection") {
                        if (!confirm("The game will restart now to apply the changes")) {
                            _0x44d709.value = _0x44d709.oldValue;
                            return;
                        }
                    }
                    const _0x140970 = _0x1c14a1.ident + ":" + _0x44d709.value;
                    const _0x456166 = new Uint8Array([
                        0x24,
                        ...unescape(encodeURIComponent(_0x140970))
                        .split("")
                        .map((_0x36d01e) => _0x36d01e.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(_0x456166);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                } else {
                    if (!this.changingSettings) {
                        this.changingSettings = {
                            element: _0x44d709,
                            entry: _0x1c14a1,
                        };
                        _0x44d709.classList.toggle("active");
                    } else if (_0x1c14a1.ident === this.changingSettings.entry.ident) {
                        this.changingSettings = null;
                        _0x44d709.classList.toggle("active");
                    }
                }
            }
            ["closeSettingsInterface"]() {
                this.changingSettings = null;
                const _0x59a478 = document.getElementById("leagues-app");
                if (_0x59a478.lastChild.nodeType === 0x1) {
                    _0x59a478.removeChild(_0x59a478.lastChild);
                }
            }
            ["openCommunityInterface"]() {
                open("https://discord.com/invite/UK4R9fg", "_blank");
            }
            ["openSkinSelectorInterface"](_0x5016c0) {
                if (!this.isLogged) {
                    alert("Please sign in to use skins");
                    return;
                }
                let _0x41bd4c = "";
                _0x41bd4c +=
                    '<div onclick="raga.closeSkinSelectorInterface();" class="leagues-blocker"><div class="disabler"></div></div>';
                _0x41bd4c += '<div class="leagues-dialog">';
                _0x41bd4c +=
                    '<span onclick="raga.closeSkinSelectorInterface();" class="leagues-inner-close sprite-main Close"></span>';
                _0x41bd4c += "<h1>Raga Mode Skins</h1>";
                _0x41bd4c += '<div id="menu-leagues" style="margin-top: 15px;">';
                _0x41bd4c += '<div class="button-row">';
                _0x41bd4c +=
                    '<div class="button-cell"><button onclick="raga.openSkinSelectorInterface(0);" class="btn btn-world' +
                    (_0x5016c0 === 0x0 ? "-selected" : "") +
                    ' left">Normal</button></div>';
                _0x41bd4c +=
                    '<div class="button-cell"><button onclick="raga.openSkinSelectorInterface(1);" class="btn btn-world' +
                    (_0x5016c0 === 0x1 ? "-selected" : "") +
                    '">Custom</button></div>';
                _0x41bd4c += "</div>";
                _0x41bd4c += "</div>";
                _0x41bd4c += '<div class="raga-mode-skin-selector">';
                if (_0x5016c0 === 0x0) {
                    this.agarioSkins.forEach((_0x3f6e2b) => {
                        _0x41bd4c +=
                            "<div onclick=\"raga.setSkinInterface(this, '" +
                            _0x3f6e2b.ident +
                            '\');" class="skin-entry ' +
                            (_0x3f6e2b.ident === this.skin ? "selected" : "") +
                            '" style="background-image: url(\'' +
                            _0x3f6e2b.url.replace(".png", "_low.png") +
                            "'); border: 3px solid #" +
                            _0x3f6e2b.color.toString(0x10).padStart(0x6, "0") +
                            ';"></div>';
                    });
                } else if (_0x5016c0 === 0x1) {
                    this.ownedSkins.forEach((_0x587f08) => {
                        const _0x567382 = this.skins.find(
                            (_0x4e0cd2) => _0x4e0cd2.ident === _0x587f08,
                        );
                        if (!_0x567382) {
                            _0x41bd4c +=
                                '<div onclick="raga.setSkinInterface(this);" class="skin-entry pending" style="background-image: url(\'https://minions.raga.pw/ragamode/skins/small/' +
                                _0x587f08 +
                                "'); border: 3px solid #ffffff;\">";
                            _0x41bd4c += '<div class="sprite-common rush_icon"></div>';
                            _0x41bd4c += '<div class="overlay-container">';
                            _0x41bd4c +=
                                "<div onclick=\"raga.copySkinInterface('" +
                                _0x587f08 +
                                '\', event);" class="copy"></div>';
                            _0x41bd4c += "</div>";
                            _0x41bd4c += "</div>";
                        } else {
                            _0x41bd4c +=
                                "<div onclick=\"raga.setSkinInterface(this, '" +
                                _0x567382.ident +
                                '\');" class="skin-entry ' +
                                (_0x567382.ident === this.skin ? "selected" : "") +
                                '" style="background-image: url(\'' +
                                _0x567382.url.replace("/normal/", "/small/") +
                                "'); border: 3px solid #" +
                                (_0x567382.color >= 0x0 ? _0x567382.color : 0xffffff)
                                .toString(0x10)
                                .padStart(0x6, "0") +
                                ';">';
                            _0x41bd4c += '<div class="overlay-container">';
                            _0x41bd4c +=
                                "<div onclick=\"raga.removeSkinInterface(this, '" +
                                _0x567382.ident +
                                '\', event);" class="remove" style="visibility: ' +
                                (_0x567382.ident !== this.skin ? "visible" : "hidden") +
                                ';"></div>';
                            _0x41bd4c +=
                                "<div onclick=\"raga.copySkinInterface('" +
                                _0x567382.ident +
                                '\', event);" class="copy"></div>';
                            _0x41bd4c += "</div>";
                            _0x41bd4c += "</div>";
                        }
                    });
                }
                _0x41bd4c += "</div>";
                _0x41bd4c += "</div>";
                const _0x29d87a = document.createElement("div");
                _0x29d87a.innerHTML = _0x41bd4c;
                const _0x4f3105 = document.getElementById("leagues-app");
                if (_0x4f3105.lastChild.nodeType === 0x1) {
                    _0x4f3105.removeChild(_0x4f3105.lastChild);
                }
                _0x4f3105.appendChild(_0x29d87a);
            }
            ["setSkinInterface"](_0x43f2f9, _0xca92ba = null) {
                if (window.core.playerHasCells()) {
                    alert("You can't change skin while playing");
                    return;
                }
                if (!_0xca92ba) {
                    alert("This skin is not approved yet");
                    return;
                }
                const _0x28590c = _0x43f2f9.classList.contains("selected") ?
                    "" :
                    _0xca92ba;
                const _0x2e6ba4 = new Uint8Array([
                    0x25,
                    ...unescape(encodeURIComponent(_0x28590c))
                    .split("")
                    .map((_0x10555c) => _0x10555c.charCodeAt(0x0)),
                    0x0,
                ]);
                window.core.proxyMobileData(_0x2e6ba4);
                window.core.proxyMobileData(new Uint8Array([0x9]));
                const _0x3e36cb = document.querySelector(
                    ".raga-mode-skin-selector .skin-entry.selected",
                );
                if (_0x3e36cb) {
                    _0x3e36cb.classList.toggle("selected");
                    if (_0x3e36cb.children.length) {
                        _0x3e36cb.children[0x0].children[0x0].style.visibility = "visible";
                    }
                }
                if (_0x43f2f9 !== _0x3e36cb) {
                    _0x43f2f9.classList.toggle("selected");
                    if (_0x43f2f9.children.length) {
                        _0x43f2f9.children[0x0].children[0x0].style.visibility = "hidden";
                    }
                }
            }
            ["removeSkinInterface"](_0x5a7edc, _0x12b6c8, _0x34b87a) {
                if (
                    confirm(
                        "Are you sure you want to remove this skin, coins will not be refunded?",
                    )
                ) {
                    const _0xcc5631 = new Uint8Array([
                        0xa0,
                        ...unescape(encodeURIComponent(_0x12b6c8))
                        .split("")
                        .map((_0x55dae1) => _0x55dae1.charCodeAt(0x0)),
                        0x0,
                    ]);
                    window.core.proxyMobileData(_0xcc5631);
                    window.core.proxyMobileData(new Uint8Array([0x9]));
                    _0x5a7edc.parentNode.parentNode.remove();
                }
                _0x34b87a.stopPropagation();
            }
            ["copySkinInterface"](_0xa27256, _0x1b6ee8) {
                navigator.clipboard
                    .writeText(_0xa27256)
                    .then(() => alert("Skin ID is copied to clipboard"));
                _0x1b6ee8.stopPropagation();
            }
            ["closeSkinSelectorInterface"]() {
                const _0xf279b7 = document.getElementById("leagues-app");
                if (_0xf279b7.lastChild.nodeType === 0x1) {
                    _0xf279b7.removeChild(_0xf279b7.lastChild);
                }
            }
            ["checkSpawnInterface"]() {
                const _0x1f4fc5 = document.getElementById("nick");
                const _0x3e41ea = document.getElementById("play");
                if (
                    this.gameMode &&
                    this.tournamentMode &&
                    this.gameMode === this.tournamentMode &&
                    !this.isAuthSent
                ) {
                    _0x1f4fc5.disabled = true;
                    _0x3e41ea.innerHTML = "Please Wait";
                    _0x3e41ea.disabled = true;
                } else {
                    _0x1f4fc5.disabled = false;
                    _0x3e41ea.innerHTML = "Play";
                    _0x3e41ea.disabled = false;
                }
            }
            ["switchInterface"]() {
                if (document.getElementById("mainui-user") && this.gameMode) {
                    if (
                        this.gameModes.find((_0x1bca5e) => _0x1bca5e.type === this.gameMode)
                    ) {
                        const _0x5320da = document.querySelector(".user-container");
                        _0x5320da.style.display = "none";
                        let _0x1155d9 = document.querySelector(".new-user-container");
                        if (!_0x1155d9) {
                            let _0x4b7d09 = "";
                            _0x4b7d09 +=
                                '<img src="' +
                                this.getInterface().profileImage +
                                '" class="user-picture" />';
                            _0x4b7d09 +=
                                '<div onclick="raga.openShopInterface(0);" class="currency-container"><span class="label">' +
                                this.getInterface().money +
                                '</span><span class="icon sprite-main currency-icon raga-coins"></span><div class="plus"><span>+</span></div></div>';
                            _0x4b7d09 +=
                                '<div class="ident-container">' +
                                this.getInterface().ident +
                                "</div>";
                            _0x4b7d09 +=
                                '<div class="user-name">' +
                                this.getInterface().profileName +
                                "</div>";
                            _0x4b7d09 +=
                                '<div class="progress-bar-container"><div class="progress-bar" style="width: 0%;"></div><span class="progress-bar-text">' +
                                this.getInterface().minions +
                                "</span></div>";
                            _0x1155d9 = document.createElement("div");
                            _0x1155d9.className = "new-user-container";
                            _0x1155d9.innerHTML = _0x4b7d09;
                            _0x5320da.parentNode.appendChild(_0x1155d9);
                        }
                        _0x1155d9.style.display = "block";
                        const _0x235a05 = document.querySelector(".offers-container");
                        _0x235a05.style.display = "none";
                        let _0x17249c = document.querySelector(".new-offers-container");
                        if (!_0x17249c) {
                            let _0x4264e2 = "";
                            _0x4264e2 += '<div class="buttons-container">';
                            _0x4264e2 +=
                                '<div onclick="raga.openShopInterface(0);" class="shop"><span class="label">Shop</span><span class="sprite-main Icon-Store"></span></div>';
                            _0x4264e2 +=
                                '<div onclick="raga.openSettingsInterface();" class="settings"><span class="label">Settings</span><span class="sprite-main controller"></span></div>';
                            _0x4264e2 +=
                                '<div onclick="raga.openCommunityInterface();" class="community"><span class="label">Community</span><span class="sprite-main Icon-Leaderboards"></span></div>';
                            _0x4264e2 += "</div>";
                            _0x17249c = document.createElement("div");
                            _0x17249c.className = "new-offers-container";
                            _0x17249c.innerHTML = _0x4264e2;
                            _0x235a05.parentNode.appendChild(_0x17249c);
                        }
                        _0x17249c.style.display = "block";
                        const _0x48f84e = document.getElementById("mainui-features");
                        _0x48f84e.style.display = "none";
                        const _0x5f5864 = document.querySelector(".bubble");
                        if (_0x5f5864) {
                            _0x5f5864.style.display = "none";
                        }
                        const _0x46ccca = document.getElementById("skinButton");
                        _0x46ccca.style.display = "none";
                        const _0x514d3c = document.getElementById("new-skinButton");
                        _0x514d3c.style.display = "";
                    } else {
                        const _0x313d3b = document.querySelector(".user-container");
                        _0x313d3b.style.display = "block";
                        const _0x24a4a4 = document.querySelector(".new-user-container");
                        if (_0x24a4a4) {
                            _0x24a4a4.style.display = "none";
                        }
                        const _0x1a1b65 = document.querySelector(".offers-container");
                        _0x1a1b65.style.display = "block";
                        const _0x58ea2f = document.querySelector(".new-offers-container");
                        if (_0x58ea2f) {
                            _0x58ea2f.style.display = "none";
                        }
                        const _0x27cfc2 = document.getElementById("mainui-features");
                        _0x27cfc2.style.display = "block";
                        const _0x23324f = document.querySelector(".bubble");
                        if (_0x23324f) {
                            _0x23324f.style.display = "block";
                        }
                        const _0x208cfa = document.getElementById("skinButton");
                        _0x208cfa.style.display = "";
                        const _0x259e47 = document.getElementById("new-skinButton");
                        _0x259e47.style.display = "none";
                    }
                    this.checkSpawnInterface();
                    this.closeShopInterface();
                }
            }
            ["renderCounter"](_0x281c03) {
                const _0x322399 = 0xd * _0x281c03;
                const _0x454b0f = 0xe * _0x281c03;
                this.hud.counter.font = _0x322399 + "px Ubuntu";
                const _0x328a03 = this.hud.counter.measureText(this.developer).width;
                const _0x116458 = this.hud.counter.measureText("M").width;
                const _0xebde55 = _0x328a03 + 0x3c * _0x281c03;
                const _0x5bbd27 = _0x116458 + 0xa * _0x281c03;
                this.hud.counter.font = _0x454b0f + "px Ubuntu";
                const _0x653252 = this.hud.counter.measureText(
                    this.hud.utils.getSurvivorCoins(),
                ).width;
                const _0x317ac8 = this.hud.counter.measureText("M").width;
                this.hud.counter.font = _0x322399 + "px Ubuntu";
                const _0x5d8899 = _0x653252 + 0x32 * _0x281c03;
                const _0x4fd32b = _0x317ac8 + 0xf * _0x281c03;
                const _0x912cb7 = 0x3c * _0x281c03;
                const _0x44036f = 0x8 * _0x281c03;
                const _0x4af29b = 0x10 * _0x281c03;
                const _0x31fd8c = 0x10 * _0x281c03;
                const _0xaa86e0 = this.hud.counter.measureText(
                    this.hud.utils.getGameMode(),
                ).width;
                const _0x28cebd = 0x1e * _0x281c03;
                const _0x426a61 = 0x23 * _0x281c03;
                const _0x11ea24 = 0x10 * _0x281c03;
                const _0x1d445e = 0x10 * _0x281c03;
                const _0xc09fbf = this.hud.counter.measureText(
                    this.hud.utils.getMinions(),
                ).width;
                const _0x201f42 = 0x12c * _0x281c03;
                const _0x578ab8 = _0x5bbd27 / 0x2 + _0x912cb7 + _0x4fd32b;
                this.hud.counter.canvas.width = _0x201f42;
                this.hud.counter.canvas.height = _0x578ab8;
                this.hud.counter.clearRect(
                    0x0,
                    0x0,
                    this.hud.counter.canvas.width,
                    this.hud.counter.canvas.height,
                );
                this.hud.counter.font = _0x322399 + "px Ubuntu";
                this.hud.counter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        0x0,
                        _0x5bbd27 / 0x2,
                        _0x201f42,
                        _0x912cb7,
                        _0x912cb7 / 1.8,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        this.hud.counter.canvas.width / 0x2 - _0xebde55 / 0x2,
                        0x0,
                        _0xebde55,
                        _0x5bbd27,
                        _0x5bbd27 / 1.8,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#ffffff";
                this.hud.counter.fillText(
                    this.developer,
                    this.hud.counter.canvas.width / 0x2 - _0x328a03 / 0x2,
                    _0x5bbd27 / 0x2 + _0x116458 / 2.5,
                );
                const _0x1b3ea6 = new Image();
                _0x1b3ea6.src = this.hud.images.gameMode;
                this.hud.counter.drawImage(
                    _0x1b3ea6,
                    _0x912cb7 / 1.8 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        _0x912cb7 / 1.8 / 0x2 -
                        _0x28cebd / 0x2 -
                        (_0x4af29b + _0x44036f + _0xaa86e0)) /
                    0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    _0x31fd8c / 0x2 +
                    _0x5bbd27 / 0x4 -
                    _0x4fd32b / 0x2,
                    _0x4af29b,
                    _0x31fd8c,
                );
                this.hud.counter.fillText(
                    this.hud.utils.getGameMode(),
                    _0x912cb7 / 1.8 / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        _0x912cb7 / 1.8 / 0x2 -
                        _0x28cebd / 0x2 -
                        (_0x4af29b + _0x44036f + _0xaa86e0)) /
                    0x2 +
                    _0x4af29b +
                    _0x44036f,
                    this.hud.counter.canvas.height / 0x2 +
                    this.hud.counter.measureText("M").width / 2.5 +
                    _0x5bbd27 / 0x4 -
                    _0x4fd32b / 0x2,
                );
                const _0x296043 = new Image();
                _0x296043.src = this.hud.images.logo;
                this.hud.counter.drawImage(
                    _0x296043,
                    this.hud.counter.canvas.width / 0x2 - _0x28cebd / 0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    _0x426a61 / 0x2 +
                    _0x5bbd27 / 0x2 -
                    _0x4fd32b / 1.6,
                    _0x28cebd,
                    _0x426a61,
                );
                const _0x59de0c = new Image();
                _0x59de0c.src = this.hud.images.minions;
                this.hud.counter.drawImage(
                    _0x59de0c,
                    this.hud.counter.canvas.width / 0x2 +
                    _0x28cebd / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        _0x28cebd / 0x2 -
                        _0x912cb7 / 1.8 / 0x2 -
                        (_0x11ea24 + _0x44036f + _0xc09fbf)) /
                    0x2,
                    this.hud.counter.canvas.height / 0x2 -
                    _0x1d445e / 0x2 +
                    _0x5bbd27 / 0x4 -
                    _0x4fd32b / 0x2,
                    _0x11ea24,
                    _0x1d445e,
                );
                this.hud.counter.fillText(
                    this.hud.utils.getMinions(),
                    this.hud.counter.canvas.width / 0x2 +
                    _0x28cebd / 0x2 +
                    (this.hud.counter.canvas.width / 0x2 -
                        _0x28cebd / 0x2 -
                        _0x912cb7 / 1.8 / 0x2 -
                        (_0x11ea24 + _0x44036f + _0xc09fbf)) /
                    0x2 +
                    _0x11ea24 +
                    _0x44036f,
                    this.hud.counter.canvas.height / 0x2 +
                    this.hud.counter.measureText("M").width / 2.5 +
                    _0x5bbd27 / 0x4 -
                    _0x4fd32b / 0x2,
                );
                this.hud.counter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.counter,
                        this.hud.counter.canvas.width / 0x2 - _0x5d8899 / 0x2,
                        this.hud.counter.canvas.height - _0x4fd32b - _0x4fd32b / 0x4,
                        _0x5d8899,
                        _0x4fd32b,
                        _0x4fd32b / 0x2,
                    )
                    .fill();
                this.hud.counter.fillStyle = "#ffffff";
                this.hud.counter.fillText(
                    this.hud.utils.getSurvivorCoins(),
                    this.hud.counter.canvas.width / 0x2 - _0x653252 / 0x2,
                    this.hud.counter.canvas.height - _0x4fd32b / 0x2 - _0x317ac8 / 3.5,
                );
                return this.hud.counter.canvas;
            }
            ["renderTournamentCounterSolo"](_0x19a543) {
                const _0x199b4e = 0xd * _0x19a543;
                const _0x1784db = 0x10 * _0x19a543;
                this.hud.tournamentCounter.font = _0x199b4e + "px Ubuntu";
                const _0x51631a =
                    this.hud.tournamentCounter.measureText("Raga Tournament").width;
                const _0x8bb899 = this.hud.tournamentCounter.measureText("M").width;
                const _0x1f2b2a = _0x51631a + 0x3c * _0x19a543;
                const _0x3c3b1a = _0x8bb899 + 0xa * _0x19a543;
                this.hud.tournamentCounter.font = _0x1784db + "px Ubuntu";
                let _0x183442 = "";
                let _0x3e1ea7 = [];
                let _0x5ac10a = 0x0;
                if (this.tournament.message) {
                    _0x183442 = this.tournament.message;
                    const _0x441394 = _0x183442.split(",");
                    if (_0x441394.length === 0x3) {
                        _0x3e1ea7 = _0x441394;
                        _0x5ac10a = 0x32 * _0x19a543;
                    }
                } else {
                    _0x183442 = new Date(this.tournament.time * 0x3e8)
                        .toISOString()
                        .substr(0xe, 0x5);
                }
                let _0x1fd720 = this.hud.tournamentCounter.measureText(_0x183442).width;
                if (_0x3e1ea7.length === 0x3) {
                    _0x3e1ea7.forEach((_0x4bbb20, _0x5b89df) => {
                        while (
                            this.hud.tournamentCounter.measureText(_0x4bbb20).width >
                            Math.round(this.hud.tournamentCounter.canvas.width * 0.6)
                        ) {
                            _0x4bbb20 = _0x4bbb20.slice(0x0, -0x1);
                        }
                        _0x3e1ea7[_0x5b89df] = _0x4bbb20;
                    });
                    _0x1fd720 =
                        this.hud.tournamentCounter.measureText(
                            _0x3e1ea7.reduce((_0x2fdbb4, _0x46f006) =>
                                this.hud.tournamentCounter.measureText(_0x2fdbb4).width >
                                this.hud.tournamentCounter.measureText(_0x46f006).width ?
                                _0x2fdbb4 :
                                _0x46f006,
                            ),
                        ).width +
                        0xa * _0x19a543;
                }
                const _0x398218 = this.hud.tournamentCounter.measureText("M").width;
                this.hud.tournamentCounter.font = _0x199b4e + "px Ubuntu";
                const _0x352513 = _0x1fd720 + 0x3c * _0x19a543;
                const _0x5e92c5 = _0x398218 + 0x14 * _0x19a543;
                const _0x80b7b = 0x46 * _0x19a543;
                const _0x9beb55 = 0x8 * _0x19a543;
                this.hud.tournamentCounter.font = _0x1784db + "px Ubuntu";
                const _0x149d12 = this.hud.tournamentCounter.measureText("Alive").width;
                const _0x3905b9 = this.hud.tournamentCounter.measureText(
                    this.tournament.alive,
                ).width;
                this.hud.tournamentCounter.font = _0x199b4e + "px Ubuntu";
                const _0x5f4dd6 = 0x1e * _0x19a543;
                const _0x55b2bc = 0x23 * _0x19a543;
                this.hud.tournamentCounter.font = _0x1784db + "px Ubuntu";
                const _0x3f6a7e = this.hud.tournamentCounter.measureText("Dead").width;
                const _0x14e650 = this.hud.tournamentCounter.measureText(
                    this.tournament.dead,
                ).width;
                this.hud.tournamentCounter.font = _0x199b4e + "px Ubuntu";
                const _0x23c9d8 = 0x190 * _0x19a543;
                const _0x441670 = _0x3c3b1a / 0x2 + _0x80b7b + _0x5e92c5 + _0x5ac10a;
                this.hud.tournamentCounter.canvas.width = _0x23c9d8;
                this.hud.tournamentCounter.canvas.height = _0x441670;
                this.hud.tournamentCounter.clearRect(
                    0x0,
                    0x0,
                    this.hud.tournamentCounter.canvas.width,
                    this.hud.tournamentCounter.canvas.height,
                );
                this.hud.tournamentCounter.font = _0x199b4e + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        0x0,
                        _0x3c3b1a / 0x2,
                        _0x23c9d8,
                        _0x80b7b,
                        _0x80b7b / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - _0x1f2b2a / 0x2,
                        0x0,
                        _0x1f2b2a,
                        _0x3c3b1a,
                        _0x3c3b1a / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Raga Tournament",
                    this.hud.tournamentCounter.canvas.width / 0x2 - _0x51631a / 0x2,
                    _0x3c3b1a / 0x2 + _0x8bb899 / 2.5,
                );
                this.hud.tournamentCounter.font = _0x1784db + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Alive",
                    _0x80b7b / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x80b7b / 1.8 / 0x2 -
                        _0x5f4dd6 / 0x2 -
                        (_0x149d12 + _0x9beb55 + _0x3905b9)) /
                    0x2,
                    (this.hud.tournamentCounter.canvas.height - _0x5ac10a) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x5e92c5 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.alive,
                    _0x80b7b / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x80b7b / 1.8 / 0x2 -
                        _0x5f4dd6 / 0x2 -
                        (_0x149d12 + _0x9beb55 + _0x3905b9)) /
                    0x2 +
                    _0x149d12 +
                    _0x9beb55,
                    (this.hud.tournamentCounter.canvas.height - _0x5ac10a) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x5e92c5 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                const _0x2a3b44 = new Image();
                _0x2a3b44.src = this.hud.images.logo;
                this.hud.tournamentCounter.drawImage(
                    _0x2a3b44,
                    this.hud.tournamentCounter.canvas.width / 0x2 - _0x5f4dd6 / 0x2,
                    (this.hud.tournamentCounter.canvas.height - _0x5ac10a) / 0x2 -
                    _0x55b2bc / 0x2 -
                    _0x5e92c5 / 0x4,
                    _0x5f4dd6,
                    _0x55b2bc,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Dead",
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    _0x5f4dd6 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x5f4dd6 / 0x2 -
                        _0x80b7b / 1.8 / 0x2 -
                        (_0x3f6a7e + _0x9beb55 + _0x14e650)) /
                    0x2,
                    (this.hud.tournamentCounter.canvas.height - _0x5ac10a) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x5e92c5 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.dead,
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    _0x5f4dd6 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x5f4dd6 / 0x2 -
                        _0x80b7b / 1.8 / 0x2 -
                        (_0x3f6a7e + _0x9beb55 + _0x14e650)) /
                    0x2 +
                    _0x3f6a7e +
                    _0x9beb55,
                    (this.hud.tournamentCounter.canvas.height - _0x5ac10a) / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x5e92c5 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - _0x352513 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        _0x5ac10a -
                        _0x5e92c5 -
                        _0x5e92c5 / 0x4,
                        _0x352513,
                        _0x5e92c5 + _0x5ac10a,
                        _0x5e92c5 / 0x2,
                    )
                    .fill();
                if (_0x3e1ea7.length === 0x3) {
                    let _0x153d86 = 0x0;
                    let _0x5eabf0 = 0x1;
                    _0x3e1ea7.forEach((_0x28296d) => {
                        if (_0x5eabf0 === 0x1) {
                            this.hud.tournamentCounter.fillStyle = "#e9e077";
                        } else {
                            if (_0x5eabf0 === 0x2) {
                                this.hud.tournamentCounter.fillStyle = "#d4d4d4";
                            } else if (_0x5eabf0 === 0x3) {
                                this.hud.tournamentCounter.fillStyle = "#f8c48c";
                            }
                        }
                        this.hud.tournamentCounter.fillText(
                            _0x5eabf0++ + ". " + _0x28296d,
                            this.hud.tournamentCounter.canvas.width / 0x2 - _0x1fd720 / 0x2,
                            this.hud.tournamentCounter.canvas.height -
                            _0x5ac10a -
                            _0x5e92c5 / 0x2 -
                            _0x398218 / 0x3 +
                            _0x153d86,
                        );
                        _0x153d86 += 0x19 * _0x19a543;
                    });
                } else {
                    this.hud.tournamentCounter.fillStyle = "#ffffff";
                    this.hud.tournamentCounter.fillText(
                        _0x183442,
                        this.hud.tournamentCounter.canvas.width / 0x2 - _0x1fd720 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        _0x5ac10a -
                        _0x5e92c5 / 0x2 -
                        _0x398218 / 0x3,
                    );
                }
                return this.hud.tournamentCounter.canvas;
            }
            ["renderTournamentCounterTeams"](_0x478d9b) {
                const _0x58d9a2 = 0xd * _0x478d9b;
                const _0x31b84e = 0x10 * _0x478d9b;
                this.hud.tournamentCounter.font = _0x58d9a2 + "px Ubuntu";
                const _0x42c947 =
                    this.hud.tournamentCounter.measureText("Raga Tournament").width;
                const _0x415366 = this.hud.tournamentCounter.measureText("M").width;
                const _0x10bb62 = _0x42c947 + 0x3c * _0x478d9b;
                const _0x3bc117 = _0x415366 + 0xa * _0x478d9b;
                this.hud.tournamentCounter.font = _0x31b84e + "px Ubuntu";
                let _0x2e6d8a = "";
                if (this.tournament.message && this.tournament.time > 0x0) {
                    _0x2e6d8a = "Draw in " + this.tournament.time + "!";
                } else if (this.tournament.message) {
                    _0x2e6d8a = this.tournament.message;
                } else {
                    _0x2e6d8a = new Date(this.tournament.time * 0x3e8)
                        .toISOString()
                        .substr(0xe, 0x5);
                }
                const _0xcaa19f = this.hud.tournamentCounter.measureText(_0x2e6d8a).width;
                const _0x5dfcd8 = this.hud.tournamentCounter.measureText("M").width;
                this.hud.tournamentCounter.font = _0x58d9a2 + "px Ubuntu";
                const _0x23b059 = _0xcaa19f + 0x3c * _0x478d9b;
                const _0x3ca650 = _0x5dfcd8 + 0x14 * _0x478d9b;
                const _0x46248d = 0x46 * _0x478d9b;
                const _0xd73457 = 0x8 * _0x478d9b;
                this.hud.tournamentCounter.font = _0x31b84e + "px Ubuntu";
                const _0x82d67e = this.hud.tournamentCounter.measureText(
                    this.tournament.team1Tag,
                ).width;
                const _0x24448e = this.hud.tournamentCounter.measureText(
                    this.tournament.team1Score,
                ).width;
                this.hud.tournamentCounter.font = _0x58d9a2 + "px Ubuntu";
                const _0x503645 = 0x1e * _0x478d9b;
                const _0x33c022 = 0x23 * _0x478d9b;
                this.hud.tournamentCounter.font = _0x31b84e + "px Ubuntu";
                const _0x3b12a2 = this.hud.tournamentCounter.measureText(
                    this.tournament.team2Tag,
                ).width;
                const _0xcfa5bd = this.hud.tournamentCounter.measureText(
                    this.tournament.team2Score,
                ).width;
                this.hud.tournamentCounter.font = _0x58d9a2 + "px Ubuntu";
                const _0x1239ef = 0x190 * _0x478d9b;
                const _0x3858cc = _0x3bc117 / 0x2 + _0x46248d + _0x3ca650;
                this.hud.tournamentCounter.canvas.width = _0x1239ef;
                this.hud.tournamentCounter.canvas.height = _0x3858cc;
                this.hud.tournamentCounter.clearRect(
                    0x0,
                    0x0,
                    this.hud.tournamentCounter.canvas.width,
                    this.hud.tournamentCounter.canvas.height,
                );
                this.hud.tournamentCounter.font = _0x58d9a2 + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        0x0,
                        _0x3bc117 / 0x2,
                        _0x1239ef,
                        _0x46248d,
                        _0x46248d / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - _0x10bb62 / 0x2,
                        0x0,
                        _0x10bb62,
                        _0x3bc117,
                        _0x3bc117 / 1.8,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    "Raga Tournament",
                    this.hud.tournamentCounter.canvas.width / 0x2 - _0x42c947 / 0x2,
                    _0x3bc117 / 0x2 + _0x415366 / 2.5,
                );
                this.hud.tournamentCounter.font = _0x31b84e + "px Ubuntu";
                this.hud.tournamentCounter.fillStyle = "#cccccc";
                if (this.tournament.team1Color === 0x1) {
                    this.hud.tournamentCounter.fillStyle = "#bff3b0";
                } else if (this.tournament.team1Color === 0x2) {
                    this.hud.tournamentCounter.fillStyle = "#f3b0b0";
                }
                this.hud.tournamentCounter.fillText(
                    this.tournament.team1Tag,
                    _0x46248d / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x46248d / 1.8 / 0x2 -
                        _0x503645 / 0x2 -
                        (_0x82d67e + _0xd73457 + _0x24448e)) /
                    0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x3ca650 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.team1Score,
                    _0x46248d / 1.8 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x46248d / 1.8 / 0x2 -
                        _0x503645 / 0x2 -
                        (_0x82d67e + _0xd73457 + _0x24448e)) /
                    0x2 +
                    _0x82d67e +
                    _0xd73457,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x3ca650 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                const _0xd720fb = new Image();
                _0xd720fb.src = this.hud.images.logo;
                this.hud.tournamentCounter.drawImage(
                    _0xd720fb,
                    this.hud.tournamentCounter.canvas.width / 0x2 - _0x503645 / 0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 -
                    _0x33c022 / 0x2 -
                    _0x3ca650 / 0x4,
                    _0x503645,
                    _0x33c022,
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
                    _0x503645 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x503645 / 0x2 -
                        _0x46248d / 1.8 / 0x2 -
                        (_0x3b12a2 + _0xd73457 + _0xcfa5bd)) /
                    0x2,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x3ca650 / 0x3,
                );
                this.hud.tournamentCounter.fillText(
                    this.tournament.team2Score,
                    this.hud.tournamentCounter.canvas.width / 0x2 +
                    _0x503645 / 0x2 +
                    (this.hud.tournamentCounter.canvas.width / 0x2 -
                        _0x503645 / 0x2 -
                        _0x46248d / 1.8 / 0x2 -
                        (_0x3b12a2 + _0xd73457 + _0xcfa5bd)) /
                    0x2 +
                    _0x3b12a2 +
                    _0xd73457,
                    this.hud.tournamentCounter.canvas.height / 0x2 +
                    this.hud.tournamentCounter.measureText("M").width / 2.5 -
                    _0x3ca650 / 0x3,
                );
                this.hud.tournamentCounter.fillStyle = "#21b8fa";
                this.hud.utils
                    .roundedRectangle(
                        this.hud.tournamentCounter,
                        this.hud.tournamentCounter.canvas.width / 0x2 - _0x23b059 / 0x2,
                        this.hud.tournamentCounter.canvas.height -
                        _0x3ca650 -
                        _0x3ca650 / 0x4,
                        _0x23b059,
                        _0x3ca650,
                        _0x3ca650 / 0x2,
                    )
                    .fill();
                this.hud.tournamentCounter.fillStyle = "#ffffff";
                this.hud.tournamentCounter.fillText(
                    _0x2e6d8a,
                    this.hud.tournamentCounter.canvas.width / 0x2 - _0xcaa19f / 0x2,
                    this.hud.tournamentCounter.canvas.height -
                    _0x3ca650 / 0x2 -
                    _0x5dfcd8 / 0x3,
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
                const _0x36c8c2 =
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
                        0xc * _0x36c8c2,
                        0xc * _0x36c8c2,
                        (this.hud.counter.canvas.width / 0x2) * _0x36c8c2,
                        (this.hud.counter.canvas.height / 0x2) * _0x36c8c2,
                    );
                } else {
                    if (
                        this.gameMode === "ragatourney-solo" &&
                        (this.tournament.alive || this.tournament.dead)
                    ) {
                        this.canvas.drawImage(
                            this.renderTournamentCounterSolo(0x2),
                            0xc * _0x36c8c2,
                            0xc * _0x36c8c2,
                            (this.hud.tournamentCounter.canvas.width / 0x2) * _0x36c8c2,
                            (this.hud.tournamentCounter.canvas.height / 0x2) * _0x36c8c2,
                        );
                    } else if (
                        this.gameMode === "ragatourney-teams" &&
                        this.tournament.team1Tag &&
                        this.tournament.team2Tag
                    ) {
                        this.canvas.drawImage(
                            this.renderTournamentCounterTeams(0x2),
                            0xc * _0x36c8c2,
                            0xc * _0x36c8c2,
                            (this.hud.tournamentCounter.canvas.width / 0x2) * _0x36c8c2,
                            (this.hud.tournamentCounter.canvas.height / 0x2) * _0x36c8c2,
                        );
                    }
                }
            }
    }
    window.raga = new _0x490eea();
    const _0x433ff2 = await fetch(
            document.getElementById("agario.core.js").getAttribute("path"),
        )
        .then((_0x110644) => _0x110644.text())
        .then((_0x4febaf) => {
            _0x4febaf = _0x4febaf.replace(
                /("\s?registerSkin\s?"\s?:\s?function\s?\(\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?,\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1raga.onRegisterSkin($2,$3,$4,$5,$6);",
            );
            _0x4febaf = _0x4febaf.replace(
                /(;..?\s?\.\s?onopen\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onConnect();",
            );
            _0x4febaf = _0x4febaf.replace(
                /(\s?if\s?\(\s?window\s?\[\s?"\s?MC\s?"\s?]\s?&&\s?window\s?\[\s?"\s?MC\s?"\s?]\s?\[\s?"\s?onMobileData\s?"\s?]\s?\)\s?window\s?\[\s?"\s?MC\s?"\s?]\s?\[\s?"\s?onMobileData\s?"\s?]\s?\(\s?(.+?)\s?\))/i,
                "$2=raga.onPacket($2);$1",
            );
            _0x4febaf = _0x4febaf.replace(
                /("\s?setTarget\s?"\s?:\s?function\s?\(\s?(.+?)\s?,\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1$2=raga.onMouseX($2);$3=raga.onMouseY($3);",
            );
            _0x4febaf = _0x4febaf.replace(
                /("\s?playerZoom\s?"\s?:\s?function\s?\(\s?(.+?)\s?\)\s?\{\s?)/i,
                "$1$2=raga.onPlayerZoom($2);",
            );
            _0x4febaf = _0x4febaf.replace(
                /(;..?\s?\.\s?onclose\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onDisconnect(this);",
            );
            _0x4febaf = _0x4febaf.replace(
                /(;..?\s?\.\s?onerror\s?=\s?function\s?\(\s?\)\s?\{\s?)/i,
                "$1raga.onDisconnect(this);",
            );
            _0x4febaf = _0x4febaf.replace(
                /(,\s?requestAnimationFrame\s?:\s?function\s?\(\s?.+?\s?\)\s?\{\s?)/i,
                "$1raga.renderLoop();",
            );
            _0x4febaf = _0x4febaf.replace(
                /(\(\s?[a-z|A-Z]{10}\s?\)\s?\.\s?then\s?\(\s?([a-z]{6})\s?=>\s?\{\s?)/i,
                "$1const a=new Uint8Array($2,0,19889);const aa=new Uint8Array([0x20,0x00,0x28,0x02,0x1c,0x45,0x04,0x40,0x0f,0x0b]);const aaa=new Uint8Array($2,19889);const aaaa=new Uint8Array(a.length+aa.length+aaa.length);aaaa.set(a);aaaa.set(aa,a.length);aaaa.set(aaa,a.length+aa.length);aaaa[2476]=203;aaaa[19824]=138;aaaa[222918]=0;aaaa[222919]=0;binary=aaaa.buffer;",
            );
            _0x4febaf = _0x4febaf.replace(
                /([a-z]{6}\s?[a-z|A-Z]{16}\s?\(\s?([a-z]{6})\s?,\s?[a-z|A-Z]{10}\s?,\s?[a-z|A-Z]{7}\s?,\s?[a-zA-Z]{8}\s?\)\s?\{\s?)/i,
                "$1$2=true;",
            );
            return _0x4febaf;
        });
    eval(_0x433ff2);
})();
