(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chons\Documents\Dev\four-gravity\src\main.ts */"zUnb");


/***/ }),

/***/ "6bvh":
/*!************************************!*\
  !*** ./src/app/init-game-state.ts ***!
  \************************************/
/*! exports provided: GAME_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STATE", function() { return GAME_STATE; });
const GAME_STATE = {
    // Game Setting
    size: 10,
    numOfPlayers: 4,
    // Game Status
    gameEnded: false,
    canRetract: false,
    turn: 1,
    learningMode: false,
    tiles: [],
    availableMoves: 10 * 10,
    // For retract function
    preMoveTile: null,
    // Save tile's coordinates which the tile's isValid property is updated (to be valid)
    updatedIsValidTiles: []
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "L6xp":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-state.service */ "YsRZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "selected": a0 }; };
function StarterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarterComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const sizeOption_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChooseSize(sizeOption_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sizeOption_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, sizeOption_r2 == ctx_r0.gameState.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", sizeOption_r2, "x", sizeOption_r2, "");
} }
const _c1 = function (a0) { return { selected: a0 }; };
function StarterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarterComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const numOfPlayersOption_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onChooseNumOfPlayers(numOfPlayersOption_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numOfPlayersOption_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, numOfPlayersOption_r5 == ctx_r1.gameState.numOfPlayers));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numOfPlayersOption_r5);
} }
class StarterComponent {
    constructor(router, gameStateService) {
        this.router = router;
        this.gameStateService = gameStateService;
        this.sizeOptions = [...Array(5).keys()].map(x => x += 8);
        this.numOfPlayersOptions = [...Array(5).keys()].map(x => x += 2);
    }
    ngOnInit() {
        this.getGameState();
    }
    getGameState() {
        this.gameStateService.getGameState()
            .subscribe(gameState => this.gameState = gameState);
    }
    onChooseSize(size) {
        this.gameState.size = size;
    }
    onChooseNumOfPlayers(numOfPlayers) {
        this.gameState.numOfPlayers = numOfPlayers;
    }
    initGameState() {
        this.gameState.gameEnded = false;
        this.gameState.canRetract = false;
        this.gameState.turn = 1;
        this.gameState.tiles = [];
        this.gameState.availableMoves = this.gameState.size * this.gameState.size;
        this.gameState.preMoveTile = null;
        this.gameState.updatedIsValidTiles = [];
        // only leraning mode setting is kept
    }
    onNewGame() {
        this.initGameState();
        this.router.navigate(['/game']);
    }
}
StarterComponent.ɵfac = function StarterComponent_Factory(t) { return new (t || StarterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"])); };
StarterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarterComponent, selectors: [["app-starter"]], decls: 25, vars: 2, consts: [[1, "newGame"], [1, "grid-x", "grid-padding-x"], [1, "logo"], [1, "tile"], [1, "cell"], [1, "setting"], [1, "options-text"], [1, "size", "options", "grid-x", "grid-margin-x"], ["class", "cell auto square", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "options-te", "t"], [1, "numOfPlayer", "options", "grid-x", "grid-margin-x"], [1, "button", "new_game", 3, "click"], [1, "cell", "auto", "square", 3, "ngClass", "click"], [1, "option"]], template: function StarterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4Gravity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Size of the board:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StarterComponent_div_17_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Number of Players:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StarterComponent_div_22_Template, 4, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarterComponent_Template_div_click_23_listener() { return ctx.onNewGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numOfPlayersOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 20px auto;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  display: inline-block;\n  border-radius: 5px;\n  background: white;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n+1) {\n  background: #d11141;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n+2) {\n  background: #f37735;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n+3) {\n  background: #cba948;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n+4) {\n  background: #00b159;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n+5) {\n  background: #00aedb;\n}\n.logo[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]:nth-child(6n) {\n  background: #553285;\n}\n.setting[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.setting[_ngcontent-%COMP%]   .options-text[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 10px 0;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  list-style: none;\n  overflow: auto;\n  cursor: pointer;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: black;\n  border-radius: 5px;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%] {\n  background: #573480;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n+1) {\n  background: #d11141;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n+2) {\n  background: #f37735;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n+3) {\n  background: #cba948;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n+4) {\n  background: #00b159;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n+5) {\n  background: #00aedb;\n}\n.setting[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%]:nth-child(6n) {\n  background: #553285;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxzdGFydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUFHQyxzQkFBQTtBQUNEO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUdKO0FBRkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJUjtBQUhRO0VBQW9CLG1CRGZ0QjtBQ3FCTjtBQUxRO0VBQW9CLG1CRGZuQjtBQ3VCVDtBQVBRO0VBQW9CLG1CRGZuQjtBQ3lCVDtBQVRRO0VBQW9CLG1CRGZwQjtBQzJCUjtBQVhRO0VBQW9CLG1CRGZyQjtBQzZCUDtBQWJRO0VBQWtCLG1CRGZqQjtBQytCVDtBQUlBO0VBQ0ksZUFBQTtBQURKO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUVJO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRFI7QUFFUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQVo7QUFFUTtFQU1JLGlCQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBT0ksbUJENUVDO0FDa0VqQjtBQUlnQjtFQUFvQixtQkRyRTlCO0FDb0VOO0FBRWdCO0VBQW9CLG1CRHJFM0I7QUNzRVQ7QUFBZ0I7RUFBb0IsbUJEckUzQjtBQ3dFVDtBQUZnQjtFQUFvQixtQkRyRTVCO0FDMEVSO0FBSmdCO0VBQW9CLG1CRHJFN0I7QUM0RVA7QUFOZ0I7RUFBa0IsbUJEckV6QjtBQzhFVCIsImZpbGUiOiJzdGFydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJGxpZ2h0V2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbiRkYXJrV2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuJGhpZ2hsaWdodENvbG9yOiAjNTczNDgwO1xuJHJlZDogI2QxMTE0MTtcbiRvcmFuZ2U6ICNmMzc3MzU7XG4keWVsbG93OiByZ2IoMjAzLCAxNjksIDcyKTtcbiRncmVlbjogIzAwYjE1OTtcbiRibHVlOiAjMDBhZWRiO1xuJHB1cnBsZTogIzU1MzI4NTtcbiRwaW5rOiAjRkYzNThCO1xuJHRleHRDb2xvcjogI0Q1RkJGRjsiLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcbioge1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIC50aWxlIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICY6bnRoLWNoaWxkKDZuKzEpIHsgYmFja2dyb3VuZDogJHJlZCB9XG4gICAgICAgICY6bnRoLWNoaWxkKDZuKzIpIHsgYmFja2dyb3VuZDogJG9yYW5nZSB9XG4gICAgICAgICY6bnRoLWNoaWxkKDZuKzMpIHsgYmFja2dyb3VuZDogJHllbGxvdyB9XG4gICAgICAgICY6bnRoLWNoaWxkKDZuKzQpIHsgYmFja2dyb3VuZDogJGdyZWVuIH1cbiAgICAgICAgJjpudGgtY2hpbGQoNm4rNSkgeyBiYWNrZ3JvdW5kOiAkYmx1ZSB9XG4gICAgICAgICY6bnRoLWNoaWxkKDZuKSB7IGJhY2tncm91bmQ6ICRwdXJwbGUgfVxuICAgIH1cbiAgICBcbn1cbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkYWxpZ246IG1pZGRsZSkge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiAkYWxpZ247XG4gICAgLy8geW91IGNhbiBhZGQgZm9udC1zaXplIDAgaGVyZSBhbmQgcmVzdG9yZSBpbiB0aGUgY2hpbGRyZW4gdG8gcHJldmVudFxuICAgIC8vIHRoZSBpbmxpbmUtYmxvY2sgd2hpdGUtc3BhY2UgdG8gbWVzcyB0aGUgd2lkdGggb2YgeW91ciBlbGVtZW50c1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxuICAmID4gKiB7XG4gICAgdmVydGljYWwtYWxpZ246ICRhbGlnbjtcbiAgICAvLyBhbHRob3VnaCB5b3UgbmVlZCB0byBrbm93IHRoZSBmb250LXNpemUsIGJlY2F1c2UgXCJpbmhlcml0XCIgaXMgMFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnNldHRpbmcge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAub3B0aW9ucy10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgICAub3B0aW9ucyB7XG4gICAgICAgIC8vIHdpZHRoOiA1MCo2cHg7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJiA+IGRpdiB7XG4gICAgICAgICAgICAvLyBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIC8vIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAycHggNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNm4rMSkgeyBiYWNrZ3JvdW5kOiAkcmVkIH1cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg2bisyKSB7IGJhY2tncm91bmQ6ICRvcmFuZ2UgfVxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDZuKzMpIHsgYmFja2dyb3VuZDogJHllbGxvdyB9XG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNm4rNCkgeyBiYWNrZ3JvdW5kOiAkZ3JlZW4gfVxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDZuKzUpIHsgYmFja2dyb3VuZDogJGJsdWUgfVxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDZuKSB7IGJhY2tncm91bmQ6ICRwdXJwbGUgfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVx0XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-starter',
                templateUrl: './starter.component.html',
                styleUrls: ['./starter.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'four-gravity';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YsRZ":
/*!***************************************!*\
  !*** ./src/app/game-state.service.ts ***!
  \***************************************/
/*! exports provided: GameStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateService", function() { return GameStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _init_game_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-game-state */ "6bvh");




class GameStateService {
    constructor() { }
    getGameState() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_init_game_state__WEBPACK_IMPORTED_MODULE_2__["GAME_STATE"]);
    }
}
GameStateService.ɵfac = function GameStateService_Factory(t) { return new (t || GameStateService)(); };
GameStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameStateService, factory: GameStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _starter_starter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starter/starter.component */ "L6xp");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help/help.component */ "i2qR");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _starter_starter_component__WEBPACK_IMPORTED_MODULE_3__["StarterComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _starter_starter_component__WEBPACK_IMPORTED_MODULE_3__["StarterComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "i2qR":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class HelpComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    onGoBack() {
        this.location.back();
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 22, vars: 0, consts: [[1, "howToPlay"], [1, "grid-x", "grid-padding-x"], [1, "cell"], [1, "button", 3, "click"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How to Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to the world with four directions of gravity! 4Gravity is a multiplayer game. 3-4 players are recommended. First player to form a horizontal, vertical, or diagonal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "line of four tiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to win. You can only put a tile that is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "supported by at least one side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " of the grid. Tap on a tile to make a move! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tips:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Turn on Learning Mode to view the available moves!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "If you have a false move, tap on the \"Retract\" button to retract your move.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_div_click_20_listener() { return ctx.onGoBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-state.service */ "YsRZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GameComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_15_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const tile_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onMove(tile_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.setTileClasses(tile_r4));
} }
function GameComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameComponent_div_15_div_2_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
const _c0 = function (a0) { return { "learningMode": a0 }; };
const _c1 = function (a0) { return { "checked": a0 }; };
class Coordinate {
}
class GameComponent {
    constructor(router, gameStateService) {
        this.router = router;
        this.gameStateService = gameStateService;
        this.PLAYER_NAME = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        this.FOUR = 4;
    }
    ngOnInit() {
        // Get gameState
        this.getGameState();
        if (this.gameState.tiles.length == 0) {
            const EDGE_INDICES = [0, this.gameState.size - 1];
            for (let i of Array(this.gameState.size).keys()) {
                let row = [];
                for (let j of Array(this.gameState.size).keys()) {
                    let tile = {
                        r: i,
                        c: j,
                        player: 0,
                        isValid: EDGE_INDICES.includes(i) || EDGE_INDICES.includes(j),
                        isPartOfWinStreak: false,
                    };
                    row.push(tile);
                }
                this.gameState.tiles.push(row);
            }
            console.log(this.gameState.tiles);
        }
    }
    getGameState() {
        this.gameStateService.getGameState()
            .subscribe(gameState => this.gameState = gameState);
    }
    static clone(arr) {
        let newArray = [];
        arr.forEach((row, index) => {
            newArray.push(row.slice());
        });
        return newArray;
    }
    setTileClasses(tile) {
        let classes = {};
        classes['valid'] = tile.isValid;
        classes['wonStreak'] = tile.isPartOfWinStreak;
        let playerStr = 'player' + tile.player;
        classes[playerStr] = true;
        return classes;
    }
    trackByFn(index, status) {
        return status[index];
    }
    nextTurn(turn) {
        turn += 1;
        if (turn > this.gameState.numOfPlayers)
            turn = 1;
        return turn;
    }
    preTurn(turn) {
        turn -= 1;
        if (turn <= 0)
            turn = this.gameState.numOfPlayers;
        return turn;
    }
    isOutOfBound(n) {
        return (n < 0) || (n >= this.gameState.size);
    }
    updateIsValid(tile) {
        tile.isValid = false;
        let end = this.gameState.size - 1;
        let rowPositions = [0, end, tile.r, tile.r];
        let colPositions = [tile.c, tile.c, 0, end];
        let rowOperators = [+1, -1, 0, 0];
        let colOperators = [0, 0, +1, -1];
        for (let i of Array(4).keys()) {
            let row = rowPositions[i];
            let col = colPositions[i];
            let rowOptr = rowOperators[i];
            let colOptr = colOperators[i];
            for (let _ of Array(this.gameState.size)) {
                let curTile = this.gameState.tiles[row][col];
                if (curTile.player == 0) {
                    if (curTile.isValid == true) {
                        break;
                    }
                    else {
                        curTile.isValid = true;
                        this.gameState.updatedIsValidTiles.push(curTile);
                        break;
                    }
                }
                row += rowOptr;
                col += colOptr;
            }
        }
    }
    checkWinCondition(tile) {
        // left to right
        // top to bottom
        // top left to bottom right
        // top right to bottom left
        let hasWon = false;
        let rowPositions = [tile.r, tile.r - 3, tile.r - 3, tile.r - 3];
        let colPositions = [tile.c - 3, tile.c, tile.c - 3, tile.c + 3];
        let rowOperators = [0, +1, +1, +1];
        let colOperators = [+1, 0, +1, -1];
        for (let i of Array(4).keys()) {
            let row = rowPositions[i];
            let col = colPositions[i];
            let rowOptr = rowOperators[i];
            let colOptr = colOperators[i];
            let count = 0;
            let streakIndices = [];
            for (let _ of Array(7)) {
                if (!this.isOutOfBound(row) && !this.isOutOfBound(col)) {
                    if (this.gameState.tiles[row][col].player != tile.player) {
                        count = 0;
                        if (streakIndices.length < this.FOUR)
                            streakIndices = [];
                    }
                    else {
                        count += 1;
                        streakIndices.push({
                            r: row,
                            c: col
                        });
                    }
                    if (count == this.FOUR) {
                        hasWon = true;
                    }
                }
                row += rowOptr;
                col += colOptr;
            }
            if (streakIndices.length >= this.FOUR) {
                for (let streakIndex of streakIndices) {
                    this.gameState.tiles[streakIndex.r][streakIndex.c].isPartOfWinStreak = true;
                }
            }
        }
        return hasWon;
    }
    onLearningMode() {
        this.gameState.learningMode = !this.gameState.learningMode;
    }
    onMove(tile) {
        if (this.gameState.gameEnded) {
            return;
        }
        if (tile.isValid) {
            // For retract
            this.gameState.preMoveTile = tile;
            this.gameState.updatedIsValidTiles = [];
            this.gameState.canRetract = true;
            this.gameState.availableMoves -= 1;
            tile.player = this.gameState.turn;
            this.updateIsValid(tile);
            let hasWon = this.checkWinCondition(tile);
            if (hasWon) {
                console.log(tile.player + " won!");
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Congratulations!",
                    text: this.PLAYER_NAME[this.gameState.turn - 1] + " won the game!",
                });
                this.gameState.gameEnded = true;
                this.gameState.canRetract = false;
            }
            this.gameState.turn = this.nextTurn(this.gameState.turn);
            // Check if the board is full
            if (this.gameState.availableMoves == 0) {
                this.gameState.gameEnded = true;
                this.gameState.canRetract = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Draw!",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonText: "Start a new game!",
                    cancelButtonText: "Close"
                })
                    .then((result) => {
                    if (result.isConfirmed)
                        this.onNewGame();
                });
            }
        }
    }
    onRetract() {
        this.gameState.canRetract = false;
        this.gameState.availableMoves += 1;
        this.gameState.turn = this.preTurn(this.gameState.turn);
        for (let tile of this.gameState.updatedIsValidTiles) {
            tile.isValid = false;
        }
        this.gameState.preMoveTile.isValid = true;
        this.gameState.preMoveTile.player = 0;
    }
    onNewGame() {
        if (this.gameState.gameEnded) {
            this.router.navigate(['/start']);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: "Are you sure to start a new game?",
                text: "You will not be able to recover the game progress!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, start a new game!",
                cancelButtonText: "Cancel"
            })
                .then((result) => {
                if (result.isConfirmed) {
                    this.router.navigate(['/start']);
                }
            });
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_state_service__WEBPACK_IMPORTED_MODULE_3__["GameStateService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 27, vars: 11, consts: [[1, "game"], [1, "grid-x", "grid-padding-x"], [1, "large-6", "medium-6", "small-6", "cell"], [1, "turn"], ["id", "player_color", 3, "ngClass"], [1, "name"], ["id", "retract", 3, "hidden", "ngClass", "click"], [1, "cell"], [1, "wrapper", "square", 3, "ngClass"], ["wrapper", ""], [1, "grid-y"], ["class", "cell auto", 4, "ngFor", "ngForOf"], [1, "grid-x", "grid-padding-x", "grid-padding-y"], [1, "cell", "large-auto", "medium-auto"], ["id", "learning_mode", 1, "button", "pink_button", 3, "ngClass", "click"], ["routerLink", "/how-to-play", 1, "button"], [1, "button", "transparent", 3, "click"], [1, "cell", "auto"], [1, "grid-x", "gird-y", 2, "height", "100%"], ["ngCloak", "", "class", "check cell auto", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngCloak", "", 1, "check", "cell", "auto", 3, "ngClass", "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Turn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_a_click_8_listener() { return ctx.onRetract(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Retract ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GameComponent_div_15_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_div_click_18_listener() { return ctx.onLearningMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "How to Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_div_click_25_listener() { return ctx.onNewGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "player" + ctx.gameState.turn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.gameState.canRetract)("ngClass", "player" + ctx.preTurn(ctx.gameState.turn));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.gameState.learningMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameState.tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.gameState.learningMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Learning Mode: ", ctx.gameState.learningMode ? "On" : "Off", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["section.game[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nsection[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  overflow: visible;\n  margin-bottom: 10px;\n}\n.wrapper.learningMode[_ngcontent-%COMP%]   .valid[_ngcontent-%COMP%] {\n  border: 2px solid #FF358B;\n  box-shadow: 0 0 10px #FF358B inset;\n}\n.wrapper[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: 2px;\n  transition: 0.2s ease-out box-shadow, 0.2s ease-out border;\n}\n.wrapper[_ngcontent-%COMP%]   .check.lastClicked[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.wrapper[_ngcontent-%COMP%]   .check.wonStreak[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-name: wonPulse;\n          animation-name: wonPulse;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  2.5%, 7.5% {\n    transform: scale(1.2);\n  }\n  5% {\n    transform: scale(1);\n  }\n  10%, 100% {\n    transform: scale(1);\n  }\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  2.5%, 7.5% {\n    transform: scale(1.2);\n  }\n  5% {\n    transform: scale(1);\n  }\n  10%, 100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes wonPulse {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  5% {\n    transform: scale(1.2) rotateZ(0);\n  }\n  35%, 100% {\n    transform: scale(1) rotateZ(1turn);\n  }\n}\n@keyframes wonPulse {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  5% {\n    transform: scale(1.2) rotateZ(0);\n  }\n  35%, 100% {\n    transform: scale(1) rotateZ(1turn);\n  }\n}\n.player1[_ngcontent-%COMP%] {\n  background: #d11141;\n}\n.player2[_ngcontent-%COMP%] {\n  background: #f37735;\n}\n.player3[_ngcontent-%COMP%] {\n  background: #cba948;\n}\n.player4[_ngcontent-%COMP%] {\n  background: #00b159;\n}\n.player5[_ngcontent-%COMP%] {\n  background: #00aedb;\n}\n.player6[_ngcontent-%COMP%] {\n  background: #553285;\n}\n.turn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  top: 8px;\n  border-radius: 5px;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  -webkit-animation-name: turnAround;\n          animation-name: turnAround;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes turnAround {\n  0% {\n    transform: rotate(0);\n  }\n  10%, 100% {\n    transform: rotateZ(1turn);\n  }\n}\n@keyframes turnAround {\n  0% {\n    transform: rotate(0);\n  }\n  10%, 100% {\n    transform: rotateZ(1turn);\n  }\n}\n.turn[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.crafted[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.crafted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00aedb;\n}\n#retract[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  text-align: center;\n  width: 100px;\n  float: right;\n  color: white;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxnYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUFDQyxnQkFBQTtBQUNEO0FBQ0E7RUFDQyxjQUFBO0FBRUQ7QUFBQTtFQUVDLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRDtBQURDO0VBQ0MseUJBQUE7RUFDQSxrQ0FBQTtBQUdGO0FBREM7RUFHQywyQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLDBEQUFBO0FBQUY7QUFFRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUFBSDtBQUVFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQUFIO0FBS0E7RUFDQztJQUNHLG1CQUFBO0VBRkY7RUFLRDtJQUNDLHFCQUFBO0VBSEE7RUFNRDtJQUNDLG1CQUFBO0VBSkE7RUFPRDtJQUNDLG1CQUFBO0VBTEE7QUFDRjtBQVZBO0VBQ0M7SUFDRyxtQkFBQTtFQUZGO0VBS0Q7SUFDQyxxQkFBQTtFQUhBO0VBTUQ7SUFDQyxtQkFBQTtFQUpBO0VBT0Q7SUFDQyxtQkFBQTtFQUxBO0FBQ0Y7QUFRQTtFQUNDO0lBQ0MsOEJBQUE7RUFOQTtFQVNEO0lBQ0MsZ0NBQUE7RUFQQTtFQVVEO0lBQ0Msa0NBQUE7RUFSQTtBQUNGO0FBSEE7RUFDQztJQUNDLDhCQUFBO0VBTkE7RUFTRDtJQUNDLGdDQUFBO0VBUEE7RUFVRDtJQUNDLGtDQUFBO0VBUkE7QUFDRjtBQWVBO0VBQ0MsbUJEMUVLO0FDNkROO0FBZ0JBO0VBQ0MsbUJEN0VRO0FDZ0VUO0FBZ0JBO0VBQ0MsbUJEaEZRO0FDbUVUO0FBZ0JBO0VBQ0MsbUJEbkZPO0FDc0VSO0FBZUE7RUFDQyxtQkRyRk07QUN5RVA7QUFjQTtFQUNDLG1CRHZGUTtBQzRFVDtBQWNBO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQVpEO0FBY0E7RUFDQztJQUNFLG9CQUFBO0VBWEQ7RUFjRDtJQUNFLHlCQUFBO0VBWkQ7QUFDRjtBQUtBO0VBQ0M7SUFDRSxvQkFBQTtFQVhEO0VBY0Q7SUFDRSx5QkFBQTtFQVpEO0FBQ0Y7QUFlQTtFQUNDLGlCQUFBO0FBYkQ7QUFnQkE7RUFDQyxrQkFBQTtBQWJEO0FBZUE7RUFDQyxjRDFITTtBQzhHUDtBQWVBO0VBRUMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBR0EsWUFBQTtFQUNBLGVBQUE7QUFmRCIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJGxpZ2h0V2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbiRkYXJrV2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuJGhpZ2hsaWdodENvbG9yOiAjNTczNDgwO1xuJHJlZDogI2QxMTE0MTtcbiRvcmFuZ2U6ICNmMzc3MzU7XG4keWVsbG93OiByZ2IoMjAzLCAxNjksIDcyKTtcbiRncmVlbjogIzAwYjE1OTtcbiRibHVlOiAjMDBhZWRiO1xuJHB1cnBsZTogIzU1MzI4NTtcbiRwaW5rOiAjRkYzNThCO1xuJHRleHRDb2xvcjogI0Q1RkJGRjsiLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5zZWN0aW9uLmdhbWUge1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xufVxuc2VjdGlvbiB7XG5cdG1hcmdpbjogMTBweCAwO1xufVxuLndyYXBwZXIge1xuXHRcblx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdCYubGVhcm5pbmdNb2RlIC52YWxpZCB7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgJHBpbms7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDEwcHggJHBpbmsgaW5zZXQ7XG5cdH1cblx0LmNoZWNrIHtcblx0XHQvLyB3aWR0aDogODBweDtcblx0XHQvLyBoZWlnaHQ6IDgwcHg7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgJGxpZ2h0V2hpdGU7XG5cdFx0Ly8gZmxvYXQ6IGxlZnQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdG1hcmdpbjogMnB4OyAvLyBNQVJHSU4gaW4gamF2YXNjcmlwdFxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0IGJveC1zaGFkb3csLjJzIGVhc2Utb3V0IGJvcmRlcjtcblx0XHQtby10cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQgYm94LXNoYWRvdywuMnMgZWFzZS1vdXQgYm9yZGVyO1xuXHRcdHRyYW5zaXRpb246IC4ycyBlYXNlLW91dCBib3gtc2hhZG93LC4ycyBlYXNlLW91dCBib3JkZXI7XG5cdFxuXHRcdCYubGFzdENsaWNrZWQge1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogNXM7XG5cdFx0XHRhbmltYXRpb24tbmFtZTogcHVsc2U7XG5cdFx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHR9XG5cdFx0Ji53b25TdHJlYWsge1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMHM7XG5cdFx0XHRhbmltYXRpb24tbmFtZTogd29uUHVsc2U7XG5cdFx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcdFxuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcblx0MCUge1xuICBcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxuXG5cdDIuNSUsIDcuNSUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcblx0fVxuXG5cdDUlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1x0XG5cdH1cblxuXHQxMCUsIDEwMCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyB3b25QdWxzZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XG5cdH1cblx0XG5cdDUlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlWigwKTtcblx0fVxuXHRcblx0MzUlLCAxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMXR1cm4pO1xuXHR9XG5cblx0XG5cblx0XG59XG5cbi5wbGF5ZXIxIHtcblx0YmFja2dyb3VuZDogJHJlZDtcbn1cblxuLnBsYXllcjIge1xuXHRiYWNrZ3JvdW5kOiAkb3JhbmdlO1xufVxuXG4ucGxheWVyMyB7XG5cdGJhY2tncm91bmQ6ICR5ZWxsb3c7XG59XG5cbi5wbGF5ZXI0IHtcblx0YmFja2dyb3VuZDogJGdyZWVuO1xufVxuLnBsYXllcjUge1xuXHRiYWNrZ3JvdW5kOiAkYmx1ZTtcbn1cbi5wbGF5ZXI2IHtcblx0YmFja2dyb3VuZDogJHB1cnBsZTtcbn1cblxuLnR1cm4gZGl2e1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiA4cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHRhbmltYXRpb24tZHVyYXRpb246IDEwcztcblx0YW5pbWF0aW9uLWRlbGF5OiA0cztcblx0YW5pbWF0aW9uLW5hbWU6IHR1cm5Bcm91bmQ7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyB0dXJuQXJvdW5kIHtcblx0MCUge1xuXHQgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHR9XG5cblx0MTAlLCAxMDAlIHtcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZVooMXR1cm4pO1xuXHR9XG59XG5cbi50dXJuIHtcblx0bGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5jcmFmdGVkIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNyYWZ0ZWQgYSB7XG5cdGNvbG9yOiAkYmx1ZTtcbn1cblxuI3JldHJhY3Qge1xuXHRcblx0aGVpZ2h0OiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwcHg7XG5cdGZsb2F0OiByaWdodDtcblx0XG5cdC8vIGJhY2tncm91bmQ6ICNFNUI5NkY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luLXRvcDogNXB4O1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _game_state_service__WEBPACK_IMPORTED_MODULE_3__["GameStateService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/help.component */ "i2qR");
/* harmony import */ var _starter_starter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starter/starter.component */ "L6xp");







const routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: _starter_starter_component__WEBPACK_IMPORTED_MODULE_4__["StarterComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] },
    { path: 'how-to-play', component: _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map