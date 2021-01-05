function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"container\" autosize>\n    <mat-drawer #drawer class=\"sidenav\" mode=\"side\">\n        <nav>\n            <ul>\n            <li><a routerLink=\"/quests\">Quests</a></li>\n            </ul>\n            <app-player></app-player>\n        </nav>\n    </mat-drawer>\n  \n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        More\n    </button>\n    <div class=\"sidenav-content\">\n        <h3>UPCOMING:</h3>\n        \n        <div class=\"todo-quest\" *ngIf=\"hasUpcoming()\">\n            <div class=\"material-icons\" (click)=\"utils.toggleTodo(getUpcoming().name)\">{{utils.isTodoIcon(getUpcoming().name)}}</div>\n            <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(getUpcoming().name)]\" [style.color]=\"!utils.isQuestDoable(getUpcoming().name)?'red':null\">{{getUpcoming().name}}</div>\n            <div class=\"material-icons\" (click)=\"utils.toggleCompleted(getUpcoming().name)\">{{utils.isCompletedIcon(getUpcoming().name)}}</div>\n        </div>\n        \n        <div style=\"width:200px;margin-top: 10px;margin-bottom: 10px;\"></div>\n\n        <div class=\"todo-quest\" *ngFor=\"let quest of todoQuests()\" [style.margin-left]=\"20*quest.indent+'px'\">\n            <div class=\"material-icons\" (click)=\"utils.toggleTodo(quest.name)\">{{utils.isTodoIcon(quest.name)}}</div>\n            <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(quest.name)]\" [style.color]=\"!utils.isQuestDoable(quest.name)?'red':null\">{{quest.name}}</div>\n            <div class=\"material-icons\" (click)=\"utils.toggleCompleted(quest.name)\">{{utils.isCompletedIcon(quest.name)}}</div>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Skill Requirements:</h4>\n            <div class=\"todo-quest\" *ngFor=\"let skill of todoSkillRequirements()\">\n                <img [src]=\"utils.getSkillImage(skill)\" width=\"21\" height=\"21\" data-file-width=\"25\" data-file-height=\"25\">\n                <div class=\"name\" [routerLink]=\"['/skill',skill.skill]\">{{utils.getSkillReqInfo(skill)}}</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleSkill(skill)\">{{utils.isSkillAchievedIcon(skill)}}</div>\n            </div>\n        </div>\n    </div>\n  \n  </mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayerPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"player-form\" (change)=\"utils.savePlayer()\">\n<div *ngFor=\"let skill of utils.skills; let i=index;\" style=\"display: grid;\n                                                            height: 25px;\n                                                            grid-template-columns: 25px auto 125px;\">\n    <img [src]=\"utils.skillImages[i]\" width=\"21\" height=\"21\" data-file-width=\"25\" data-file-height=\"25\">\n    <div [routerLink]=\"['/skill',skill]\">{{skill}}</div>\n    <input matInput [name] = \"skill\" type=\"number\" [(ngModel)]=\"utils.player[skill]\" style=\"border: 1px solid black;text-align: center;margin-left: 5px;\"/>\n</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quest/quest.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quest/quest.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestQuestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"container\" autosize>\n    <mat-drawer #drawer class=\"sidenav\" mode=\"side\">\n        <nav>\n            <ul>\n                <li><a routerLink=\"/home\">Home</a></li>\n                <li><a routerLink=\"/quests\">Quests</a></li>\n            </ul>\n            <app-player></app-player>\n        </nav>\n    </mat-drawer>\n  \n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        More\n    </button>\n    <div class=\"sidenav-content\">        \n        <div class=\"todo-quest\">\n            <div class=\"material-icons\" (click)=\"utils.toggleTodo(quest.name)\">{{utils.isTodoIcon(quest.name)}}</div>\n            <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(quest.name)]\" [style.color]=\"!utils.isQuestDoable(quest.name)?'red':null\">{{quest.name}}</div>\n            <div class=\"material-icons\" (click)=\"utils.toggleCompleted(quest.name)\">{{utils.isCompletedIcon(quest.name)}}</div>\n        </div>\n        <div style=\"display:block\">{{quest.diff}} - {{quest.length}} - {{quest.points}}</div>\n        <div style=\"height:inherit\">\n            <h4><a target=\"_blank\" [href]=\"quest.guide\">GUIDE</a> </h4>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Quest Requirements:</h4>\n            <div class=\"todo-quest\" [style.margin-left]=\"20*quest.indent+'px'\" *ngFor=\"let quest of utils.getQuestRequirements(quest)\">\n                <div class=\"material-icons\" (click)=\"utils.toggleTodo(quest.name)\">{{utils.isTodoIcon(quest.name)}}</div>\n                <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(quest.name)]\" [style.color]=\"!utils.isQuestDoable(quest.name)?'red':null\">{{utils.getQuest(quest.name).name}}</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleCompleted(quest.name)\">{{utils.isCompletedIcon(quest.name)}}</div>\n            </div>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Skill Requirements:</h4>\n            <div class=\"todo-quest\" *ngFor=\"let skill of quest.skillRequirements\">\n                <img [src]=\"utils.getSkillImage(skill)\" width=\"21\" height=\"21\" data-file-width=\"25\" data-file-height=\"25\">\n                <div class=\"name\" [routerLink]=\"['/skill',skill.skill]\">{{utils.getSkillReqInfo(skill)}}</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleSkill(skill)\">{{utils.isSkillAchievedIcon(skill)}}</div>\n            </div>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Quest Unlocks:</h4>\n            <div class=\"todo-quest\" *ngFor=\"let quest of quest.unlocks\">\n                <div class=\"material-icons\" (click)=\"utils.toggleTodo(quest)\">{{utils.isTodoIcon(quest)}}</div>\n                <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(quest)]\" [style.color]=\"!utils.isQuestDoable(quest)?'red':null\">{{utils.getQuest(quest).name}}</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleCompleted(quest)\">{{utils.isCompletedIcon(quest)}}</div>\n            </div>\n        </div>\n    </div>\n  \n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quests/quests.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quests/quests.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestsQuestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"container\" autosize>\n    <mat-drawer #drawer class=\"sidenav\" mode=\"side\">\n        <nav>\n            <ul>\n            <li><a routerLink=\"/home\">Home</a></li>\n            </ul>\n            <app-player></app-player>\n        </nav>\n    </mat-drawer>\n  \n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        More\n    </button>\n    <div class=\"sidenav-content\">\n        <form class=\"filters-form\">\n            <div style=\"display: grid; height: 25px; grid-template-columns: auto auto;\">\n                <input matInput name = \"filter\" type=\"text\" [(ngModel)]=\"name\" style=\"border: 1px solid black;text-align: center;margin-left: 5px;\"/>\n                <mat-checkbox style=\"margin-left:10px\" [(ngModel)]=\"showOnlyAvailable\" name=\"available\">Only Available</mat-checkbox>\n            </div>\n        </form>\n        <div class=\"todo-quest\" *ngFor=\"let quest of filter(utils.quests)\">\n            <div class=\"material-icons\" (click)=\"utils.toggleTodo(quest.name)\">{{utils.isTodoIcon(quest.name)}}</div>\n            <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(quest.name)]\" [style.color]=\"!utils.isQuestDoable(quest.name)?'red':null\">{{quest.name}}</div>\n            <div class=\"material-icons\" (click)=\"utils.toggleCompleted(quest.name)\">{{utils.isCompletedIcon(quest.name)}}</div>\n        </div>\n    </div>\n  \n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"container\" autosize>\n    <mat-drawer #drawer class=\"sidenav\" mode=\"side\">\n        <nav>\n            <ul>\n                <li><a routerLink=\"/home\">Home</a></li>\n                <li><a routerLink=\"/quests\">Quests</a></li>\n            </ul>\n            <app-player></app-player>\n        </nav>\n    </mat-drawer>\n  \n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        More\n    </button>\n    <div class=\"sidenav-content\">        \n        <div class=\"todo-quest\">\n            <h3>{{skill}}&nbsp;<img [src]=\"utils.getSkillImage({skill:skill})\" width=\"21\" height=\"21\" data-file-width=\"25\" data-file-height=\"25\"></h3>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Construction Specifically:</h4>\n            <div class=\"todo-quest\" *ngFor=\"let info of related(utils.skillQuestXp,true)\">\n                <div class=\"material-icons\" (click)=\"utils.toggleTodo(info.quest)\">{{utils.isTodoIcon(info.quest)}}</div>\n                <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(info.quest)]\" [style.color]=\"!utils.isQuestDoable(info.quest)?'red':null\">{{utils.getQuest(info.quest).name}}</div>\n                <div> - {{info.xp}}XP</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleCompleted(info.quest)\">{{utils.isCompletedIcon(info.quest)}}</div>\n            </div>\n        </div>\n        <div style=\"height:inherit\">\n            <h4>Quests for any skill:</h4>\n            <div class=\"todo-quest\" *ngFor=\"let info of related(utils.skillQuestXp)\">\n                <div class=\"material-icons\" (click)=\"utils.toggleTodo(info.quest)\">{{utils.isTodoIcon(info.quest)}}</div>\n                <div class=\"name\" [routerLink]=\"['/quest',utils.fixQuestUrl(info.quest)]\" [style.color]=\"!utils.isQuestDoable(info.quest)?'red':null\">{{utils.getQuest(info.quest).name}}</div>\n                <div> - {{info.xp}}XP</div>\n                <div class=\"material-icons\" (click)=\"utils.toggleCompleted(info.quest)\">{{utils.isCompletedIcon(info.quest)}}</div>\n            </div>\n        </div>\n    </div>\n  \n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>skills works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _skill_skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./skill/skill.component */
    "./src/app/skill/skill.component.ts");
    /* harmony import */


    var _quest_quest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./quest/quest.component */
    "./src/app/quest/quest.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _quests_quests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quests/quests.component */
    "./src/app/quests/quests.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'quests',
      component: _quests_quests_component__WEBPACK_IMPORTED_MODULE_4__["QuestsComponent"]
    }, {
      path: 'quest/:quest',
      component: _quest_quest_component__WEBPACK_IMPORTED_MODULE_2__["QuestComponent"]
    }, {
      path: 'skills',
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]
    }, {
      path: 'skill/:skill',
      component: _skill_skill_component__WEBPACK_IMPORTED_MODULE_1__["SkillComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'osrs-quests';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _skill_skill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./skill/skill.component */
    "./src/app/skill/skill.component.ts");
    /* harmony import */


    var _quests_quests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./quests/quests.component */
    "./src/app/quests/quests.component.ts");
    /* harmony import */


    var _quest_quest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./quest/quest.component */
    "./src/app/quest/quest.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_11__["SkillComponent"], _quests_quests_component__WEBPACK_IMPORTED_MODULE_12__["QuestsComponent"], _quest_quest_component__WEBPACK_IMPORTED_MODULE_13__["QuestComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_17__["PlayerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100vw;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.sidenav-content {\n  display: grid;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  grid-auto-rows: 40px;\n}\n\n.sidenav {\n  padding: 20px;\n}\n\n.todo-quest {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFRzaW5pa1xcRGVza3RvcFxcd29ya3NwYWNlXFxBbmd1bGFyXFxvc3JzLXF1ZXN0cy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNJLGFBQUE7RUFDRSxXQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXHJcbiAgICBncmlkLWF1dG8tcm93czogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC50b2RvLXF1ZXN0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWF1dG8tcm93czogNDBweDtcbn1cblxuLnNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9kby1xdWVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(utils) {
        _classCallCheck(this, HomeComponent);

        this.utils = utils;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "todoQuests",
        value: function todoQuests() {
          var _this = this;

          var todo = [];
          this.utils.getTodo().forEach(function (q) {
            return todo.push({
              name: q,
              indent: 0
            });
          });
          if (todo.length == 0) return [];
          var index = 0;

          while (todo[index]) {
            todo.splice.apply(todo, [index + 1, 0].concat(_toConsumableArray(this.utils.getQuest(todo[index].name).questRequirements.filter(function (q) {
              return !_this.utils.isQuestCompleted(q);
            }).map(function (e) {
              return {
                name: e,
                indent: todo[index].indent + 1
              };
            }))));
            index++;
          }

          return todo;
        }
      }, {
        key: "todoSkillRequirements",
        value: function todoSkillRequirements() {
          var _this2 = this;

          var skills = [];
          this.todoQuests().forEach(function (q) {
            return skills = skills.concat(_this2.utils.getQuest(q.name).skillRequirements.filter(function (s) {
              return !_this2.utils.isSkillAchieved(s);
            }));
          });
          return skills.sort(function (a, b) {
            return _this2.utils.skills.findIndex(function (s) {
              return s == a.skill;
            }) < _this2.utils.skills.findIndex(function (s) {
              return s == b.skill;
            }) ? -1 : _this2.utils.skills.findIndex(function (s) {
              return s == a.skill;
            }) > _this2.utils.skills.findIndex(function (s) {
              return s == b.skill;
            }) ? 1 : a.level - b.level;
          });
        }
      }, {
        key: "getUpcoming",
        value: function getUpcoming() {
          var _this3 = this;

          var diffs = ["Novice", "Intermediate", "Special", "Experienced", "Master"];
          var lengths = ["Very short", "Short", "Short – Medium", "Medium", "Medium – Long", "Long", "Long – Very long", "Very long"];

          if (!this.upcoming) {
            var quests = this.todoQuests().filter(function (q) {
              return _this3.utils.isQuestDoable(q.name);
            }).sort(function (a, b) {
              var ind = b.indent - a.indent;
              var diff = diffs.findIndex(function (d) {
                return d == _this3.utils.getQuest(a.name).diff;
              }) - diffs.findIndex(function (d) {
                return d == _this3.utils.getQuest(b.name).diff;
              });
              var length = lengths.findIndex(function (l) {
                return l == _this3.utils.getQuest(a.name).length;
              }) - lengths.findIndex(function (l) {
                return l == _this3.utils.getQuest(b.name).length;
              });
              return length != 0 ? length : diff != 0 ? diff : ind;
            });
            if (!quests || quests.length == 0) return null;
            return quests[0];
          }

          return this.upcoming;
        }
      }, {
        key: "hasUpcoming",
        value: function hasUpcoming() {
          return this.getUpcoming() != null;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/player/player.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/player/player.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayerPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/player/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/player/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent(utils) {
        _classCallCheck(this, PlayerComponent);

        this.utils = utils;
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ctorParameters = function () {
      return [{
        type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
      }];
    };

    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-player',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./player.component.scss */
      "./src/app/player/player.component.scss"))["default"]]
    })], PlayerComponent);
    /***/
  },

  /***/
  "./src/app/quest/quest.component.scss":
  /*!********************************************!*\
    !*** ./src/app/quest/quest.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestQuestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100vw;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.sidenav-content {\n  display: grid;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 40px 10px 40px;\n}\n\n.sidenav {\n  padding: 20px;\n}\n\n.todo-quest {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3QvQzpcXFVzZXJzXFxUc2luaWtcXERlc2t0b3BcXHdvcmtzcGFjZVxcQW5ndWxhclxcb3Nycy1xdWVzdHMvc3JjXFxhcHBcXHF1ZXN0XFxxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3QvcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0ksYUFBQTtFQUNFLFdBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0L3F1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDEwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC50b2RvLXF1ZXN0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMTBweCA0MHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50b2RvLXF1ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/quest/quest.component.ts":
  /*!******************************************!*\
    !*** ./src/app/quest/quest.component.ts ***!
    \******************************************/

  /*! exports provided: QuestComponent */

  /***/
  function srcAppQuestQuestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestComponent", function () {
      return QuestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QuestComponent = /*#__PURE__*/function () {
      function QuestComponent(route, utils) {
        _classCallCheck(this, QuestComponent);

        this.route = route;
        this.utils = utils;
      }

      _createClass(QuestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this4.quest = _this4.utils.getQuest(_this4.decode(params['quest']));
          });
        }
      }, {
        key: "decode",
        value: function decode(q) {
          return q.replace(/_/g, " ");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return QuestComponent;
    }();

    QuestComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
      }];
    };

    QuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-quest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quest/quest.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quest.component.scss */
      "./src/app/quest/quest.component.scss"))["default"]]
    })], QuestComponent);
    /***/
  },

  /***/
  "./src/app/quests/quests.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/quests/quests.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestsQuestsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100vw;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.sidenav-content {\n  display: grid;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  grid-auto-rows: 40px;\n}\n\n.sidenav {\n  padding: 20px;\n}\n\n.todo-quest {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3RzL0M6XFxVc2Vyc1xcVHNpbmlrXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXEFuZ3VsYXJcXG9zcnMtcXVlc3RzL3NyY1xcYXBwXFxxdWVzdHNcXHF1ZXN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3RzL3F1ZXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDSSxhQUFBO0VBQ0UsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcXVlc3RzL3F1ZXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZG8tcXVlc3R7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50b2RvLXF1ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/quests/quests.component.ts":
  /*!********************************************!*\
    !*** ./src/app/quests/quests.component.ts ***!
    \********************************************/

  /*! exports provided: QuestsComponent */

  /***/
  function srcAppQuestsQuestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestsComponent", function () {
      return QuestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuestsComponent = /*#__PURE__*/function () {
      function QuestsComponent(utils) {
        _classCallCheck(this, QuestsComponent);

        this.utils = utils;
      }

      _createClass(QuestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "filter",
        value: function filter(quests) {
          var _this5 = this;

          return quests.filter(function (q) {
            return (!_this5.name || q.name.toLowerCase().includes(_this5.name.toLowerCase())) && (!_this5.showOnlyAvailable || _this5.utils.isQuestDoable(q.name));
          }).sort(function (a, b) {
            return a.name.replace(/^The[ ]/g, "") < b.name.replace(/^The[ ]/g, "") ? -1 : a.name.replace(/^The[ ]/g, "") > b.name.replace(/^The[ ]/g, "");
          });
        }
      }]);

      return QuestsComponent;
    }();

    QuestsComponent.ctorParameters = function () {
      return [{
        type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
      }];
    };

    QuestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-quests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quests/quests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quests.component.scss */
      "./src/app/quests/quests.component.scss"))["default"]]
    })], QuestsComponent);
    /***/
  },

  /***/
  "./src/app/skill/skill.component.scss":
  /*!********************************************!*\
    !*** ./src/app/skill/skill.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100vw;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.sidenav-content {\n  display: grid;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 40px;\n}\n\n.sidenav {\n  padding: 20px;\n}\n\n.todo-quest {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvQzpcXFVzZXJzXFxUc2luaWtcXERlc2t0b3BcXHdvcmtzcGFjZVxcQW5ndWxhclxcb3Nycy1xdWVzdHMvc3JjXFxhcHBcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0ksYUFBQTtFQUNFLFdBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZG8tcXVlc3R7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweDtcbn1cblxuLnNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9kby1xdWVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/skill/skill.component.ts":
  /*!******************************************!*\
    !*** ./src/app/skill/skill.component.ts ***!
    \******************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utils.service */
    "./src/app/utils.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SkillComponent = /*#__PURE__*/function () {
      function SkillComponent(route, utils) {
        _classCallCheck(this, SkillComponent);

        this.route = route;
        this.utils = utils;
      }

      _createClass(SkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this6.skill = params['skill'];
          });
        }
      }, {
        key: "related",
        value: function related(data, direct) {
          var _this7 = this;

          return data.filter(function (d) {
            return direct && d.skill == _this7.skill || !direct && d.skill == "Skills available";
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return SkillComponent;
    }();

    SkillComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
      }];
    };

    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/skill/skill.component.scss"))["default"]]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/skills/skills.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/skills/skills.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/skills/skills.component.scss"))["default"]]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/app/utils.service.ts":
  /*!**********************************!*\
    !*** ./src/app/utils.service.ts ***!
    \**********************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_osrs_quests_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/osrs_quests.json */
    "./src/assets/osrs_quests.json");

    var _assets_osrs_quests_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/osrs_quests.json */
    "./src/assets/osrs_quests.json", 1);
    /* harmony import */


    var _assets_skill_quest_xp_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/skill_quest_xp.json */
    "./src/assets/skill_quest_xp.json");

    var _assets_skill_quest_xp_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/skill_quest_xp.json */
    "./src/assets/skill_quest_xp.json", 1);

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);

        this.player = {}; //SKILLS

        this.skills = ["Attack", "Strength", "Defence", "Ranged", "Prayer", "Magic", "Runecraft", "Hitpoints", "Crafting", "Mining", "Smithing", "Fishing", "Cooking", "Firemaking", "Woodcutting", "Agility", "Herblore", "Thieving", "Fletching", "Slayer", "Farming", "Construction", "Hunter"];
        this.skillImages = ["https://oldschool.runescape.wiki/images/thumb/f/fe/Attack_icon.png/21px-Attack_icon.png?b4bce", "https://oldschool.runescape.wiki/images/1/1b/Strength_icon.png?e6e0c", "https://oldschool.runescape.wiki/images/b/b7/Defence_icon.png?ca0cd", "https://oldschool.runescape.wiki/images/thumb/1/19/Ranged_icon.png/21px-Ranged_icon.png?01b0e", "https://oldschool.runescape.wiki/images/thumb/f/f2/Prayer_icon.png/21px-Prayer_icon.png?ca0dc", "https://oldschool.runescape.wiki/images/thumb/5/5c/Magic_icon.png/21px-Magic_icon.png?334cf", "https://oldschool.runescape.wiki/images/thumb/6/63/Runecraft_icon.png/21px-Runecraft_icon.png?c278c", "https://oldschool.runescape.wiki/images/thumb/9/96/Hitpoints_icon.png/21px-Hitpoints_icon.png?a4819", "https://oldschool.runescape.wiki/images/thumb/c/cf/Crafting_icon.png/21px-Crafting_icon.png?a1f71", "https://oldschool.runescape.wiki/images/thumb/4/4a/Mining_icon.png/21px-Mining_icon.png?00870", "https://oldschool.runescape.wiki/images/d/dd/Smithing_icon.png?d26c5", "https://oldschool.runescape.wiki/images/thumb/3/3b/Fishing_icon.png/21px-Fishing_icon.png?15a98", "https://oldschool.runescape.wiki/images/d/dc/Cooking_icon.png?a0156", "https://oldschool.runescape.wiki/images/thumb/9/9b…iremaking_icon.png/21px-Firemaking_icon.png?45ea0", "https://oldschool.runescape.wiki/images/thumb/f/f4…dcutting_icon.png/17px-Woodcutting_icon.png?6ead4", "https://oldschool.runescape.wiki/images/thumb/8/86/Agility_icon.png/21px-Agility_icon.png?389e0", "https://oldschool.runescape.wiki/images/thumb/0/03/Herblore_icon.png/21px-Herblore_icon.png?ffa9e", "https://oldschool.runescape.wiki/images/thumb/4/4a/Thieving_icon.png/21px-Thieving_icon.png?973fe", "https://oldschool.runescape.wiki/images/thumb/9/93/Fletching_icon.png/21px-Fletching_icon.png?15cda", "https://oldschool.runescape.wiki/images/thumb/2/28/Slayer_icon.png/20px-Slayer_icon.png?cd34f", "https://oldschool.runescape.wiki/images/thumb/f/fc/Farming_icon.png/21px-Farming_icon.png?558fa", "https://oldschool.runescape.wiki/images/thumb/f/f6…ruction_icon.png/21px-Construction_icon.png?f9bf7", "https://oldschool.runescape.wiki/images/thumb/d/dd/Hunter_icon.png/20px-Hunter_icon.png?8762f"];
        this.quests = _assets_osrs_quests_json__WEBPACK_IMPORTED_MODULE_2__;
        this.skillQuestXp = _assets_skill_quest_xp_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (s) {
          return s.xp != "Experience\nreward";
        });
        if (localStorage["player"]) this.player = JSON.parse(localStorage["player"]);
      }

      _createClass(UtilsService, [{
        key: "savePlayer",
        value: function savePlayer() {
          localStorage["player"] = JSON.stringify(this.player);
        }
      }, {
        key: "getCompleted",
        value: function getCompleted() {
          if (!localStorage["completed"]) localStorage["completed"] = JSON.stringify([]);
          return JSON.parse(localStorage["completed"]);
        }
      }, {
        key: "isQuestCompleted",
        value: function isQuestCompleted(quest) {
          return this.getCompleted().includes(quest);
        }
      }, {
        key: "isCompletedIcon",
        value: function isCompletedIcon(quest) {
          return this.isQuestCompleted(quest) ? "lens" : "panorama_fish_eye";
        }
      }, {
        key: "toggleCompleted",
        value: function toggleCompleted(quest) {
          var completed = this.getCompleted();
          var index = completed.findIndex(function (q) {
            return q == quest;
          });
          if (index == -1) completed.push(quest);else {
            completed.splice(index, 1);
            if (this.isQuestTodo(quest)) this.toggleTodo(quest);
          }
          localStorage["completed"] = JSON.stringify(completed);
        }
      }, {
        key: "getTodo",
        value: function getTodo() {
          if (!localStorage["todo"]) localStorage["todo"] = JSON.stringify([]);
          return JSON.parse(localStorage["todo"]);
        }
      }, {
        key: "isQuestTodo",
        value: function isQuestTodo(quest) {
          return this.getTodo().includes(quest);
        }
      }, {
        key: "isTodoIcon",
        value: function isTodoIcon(quest) {
          return this.getTodo().includes(quest) ? "star" : "star_border";
        }
      }, {
        key: "toggleTodo",
        value: function toggleTodo(quest) {
          var todo = this.getTodo();
          var index = todo.findIndex(function (q) {
            return q == quest;
          });
          if (index == -1) todo.push(quest);else todo.splice(index, 1);
          localStorage["todo"] = JSON.stringify(todo);
        }
      }, {
        key: "getQuest",
        value: function getQuest(quest) {
          var t = this.quests.find(function (q) {
            return q.name == quest;
          });
          if (!t) return {
            name: quest,
            questRequirements: [],
            skillRequirements: []
          };
          return t;
        }
      }, {
        key: "fixQuestUrl",
        value: function fixQuestUrl(quest) {
          return quest.replace(/[ ]/g, "_");
        }
      }, {
        key: "getQuestRequirements",
        value: function getQuestRequirements(quest) {
          var todo = [];
          todo.push({
            name: quest.name,
            indent: -1
          });
          var index = 0;

          while (todo[index]) {
            todo.splice.apply(todo, [index + 1, 0].concat(_toConsumableArray(this.getQuest(todo[index].name).questRequirements.map(function (q) {
              return {
                name: q,
                indent: todo[index].indent + 1
              };
            }))));
            index++;
          }

          todo.splice(0, 1);
          return todo;
        }
      }, {
        key: "isQuestDoable",
        value: function isQuestDoable(quest) {
          var _this8 = this;

          var q = this.getQuest(quest);
          return this.getQuestRequirements(q).filter(function (e) {
            return !_this8.isQuestCompleted(e.name);
          }).length == 0 && (q.skillRequirements.length == 0 || q.skillRequirements.filter(function (e) {
            return !_this8.isSkillAchieved(e);
          }).length == 0);
        }
      }, {
        key: "isSkillAchieved",
        value: function isSkillAchieved(skill) {
          return this.player[skill.skill] >= skill.level;
        }
      }, {
        key: "isSkillAchievedIcon",
        value: function isSkillAchievedIcon(skill) {
          return this.isSkillAchieved(skill) ? "lens" : "panorama_fish_eye";
        }
      }, {
        key: "getSkillImage",
        value: function getSkillImage(skill) {
          return this.skillImages[this.skills.findIndex(function (s) {
            return s == skill.skill;
          })];
        }
      }, {
        key: "getSkillReqInfo",
        value: function getSkillReqInfo(skill) {
          return skill.skill + ": " + skill.level + " " + skill.extra;
        }
      }, {
        key: "toggleSkill",
        value: function toggleSkill(skill) {
          if (!this.isSkillAchieved(skill)) this.player[skill.skill] = skill.level;
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    /***/
  },

  /***/
  "./src/assets/osrs_quests.json":
  /*!*************************************!*\
    !*** ./src/assets/osrs_quests.json ***!
    \*************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, default */

  /***/
  function srcAssetsOsrs_questsJson(module) {
    module.exports = JSON.parse("[{\"name\":\"Cook's Assistant\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Cook%27s_Assistant\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Recipe for Disaster\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/7c/Cook%27s_Assistant_reward_scroll.png?69721\",\"completed\":false},{\"name\":\"Demon Slayer\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Demon_Slayer\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Shadow of the Storm\",\"Recipe for Disaster/Freeing the Lumbridge Guide\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f7/Demon_Slayer_reward_scroll.png?5f0a2\",\"completed\":false},{\"name\":\"The Restless Ghost\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Restless_Ghost\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Nature Spirit\",\"Creature of Fenkenstrain\",\"Ghosts Ahoy\",\"Making History\",\"Animal Magnetism\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e5/The_Restless_Ghost_reward_scroll.png?5828a\",\"completed\":false},{\"name\":\"Romeo & Juliet\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"5\",\"guide\":\"https://oldschool.runescape.wiki/w/Romeo_%26_Juliet\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Making Friends with My Arm\"],\"rewards\":\"https://oldschool.runescape.wiki/images/3/32/Romeo_%26_Juliet_reward_scroll.png?8d21d\",\"completed\":false},{\"name\":\"Sheep Shearer\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Sheep_Shearer\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f7/Sheep_Shearer_reward_scroll.png?0d60e\",\"completed\":false},{\"name\":\"Shield of Arrav\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Shield_of_Arrav\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Heroes' Quest\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e3/Shield_of_Arrav_reward_scroll.png?8824c\",\"completed\":false},{\"name\":\"Ernest the Chicken\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Ernest_the_Chicken\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Animal Magnetism\"],\"rewards\":\"https://oldschool.runescape.wiki/images/5/56/Ernest_the_Chicken_reward_scroll.png?c5c58\",\"completed\":false},{\"name\":\"Vampyre Slayer\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Vampyre_Slayer\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Sins of the Father\"],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a9/Vampyre_Slayer_reward_scroll.png?562a2\",\"completed\":false},{\"name\":\"Imp Catcher\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Imp_Catcher\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/75/Imp_Catcher_reward_scroll.png?9b1c5\",\"completed\":false},{\"name\":\"Prince Ali Rescue\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Prince_Ali_Rescue\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Contact!\"],\"rewards\":\"https://oldschool.runescape.wiki/images/5/56/Prince_Ali_Rescue_reward_scroll.png?3afb2\",\"completed\":false},{\"name\":\"Doric's Quest\",\"diff\":\"Novice\",\"length\":\"Very short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Doric%27s_Quest\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Devious Minds\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/7a/Doric%27s_Quest_reward_scroll.png?a47d2\",\"completed\":false},{\"name\":\"Black Knights' Fortress\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Recruitment Drive\",\"King's Ransom\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f1/Black_Knights%27_Fortress_reward_scroll.png?c451f\",\"completed\":false},{\"name\":\"Witch's Potion\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Witch%27s_Potion\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/8/82/Witch%27s_Potion_reward_scroll.png?76438\",\"completed\":false},{\"name\":\"The Knight's Sword\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Knight%27s_Sword\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Mining\",\"level\":10,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/70/The_Knight%27s_Sword_reward_scroll.png?66fdc\",\"completed\":false},{\"name\":\"Goblin Diplomacy\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"5\",\"guide\":\"https://oldschool.runescape.wiki/w/Goblin_Diplomacy\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"The Lost Tribe\",\"Recipe for Disaster\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b5/Goblin_Diplomacy_reward_scroll.png?ef679\",\"completed\":false},{\"name\":\"Pirate's Treasure\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Pirate%27s_Treasure\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Cabin Fever\"],\"rewards\":\"https://oldschool.runescape.wiki/images/5/53/Pirate%27s_Treasure_reward_scroll.png?fb224\",\"completed\":false},{\"name\":\"Dragon Slayer I\",\"diff\":\"Experienced\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Dragon_Slayer_I\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Heroes' Quest\"],\"rewards\":\"https://oldschool.runescape.wiki/images/1/13/Dragon_Slayer_reward_scroll.png?d25a2\",\"completed\":false},{\"name\":\"Rune Mysteries\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Rune_Mysteries\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"One Small Favour\",\"The Lost Tribe\",\"Lunar Diplomacy\",\"What Lies Below\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b7/Rune_Mysteries_reward_scroll.png?c0ea3\",\"completed\":false},{\"name\":\"Misthalin Mystery\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Misthalin_Mystery\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/8/80/Misthalin_Mystery_reward_scroll.png?81958\",\"completed\":false},{\"name\":\"The Corsair Curse\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Corsair_Curse\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4f/The_Corsair_Curse_reward_scroll.png?4a3d8\",\"completed\":false},{\"name\":\"X Marks the Spot\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/X_Marks_the_Spot\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/22/X_Marks_the_Spot_reward_scroll.png?4ab43\",\"completed\":false},{\"name\":\"Druidic Ritual\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Druidic_Ritual\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Eadgar's Ruse\",\"One Small Favour\",\"Recruitment Drive\"],\"rewards\":\"https://oldschool.runescape.wiki/images/c/c5/Druidic_Ritual_reward_scroll.png?5f74f\",\"completed\":false},{\"name\":\"Lost City\",\"diff\":\"Experienced\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Lost_City\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":31,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":36,\"extra\":\"\"}],\"unlocks\":[\"Heroes' Quest\",\"Fairytale I - Growing Pains\",\"Lunar Diplomacy\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/94/Lost_City_reward_scroll.png?1819e\",\"completed\":false},{\"name\":\"Witch's House\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Witch%27s_House\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Freeing the Lumbridge Guide\",\"Grim Tales\"],\"rewards\":\"https://oldschool.runescape.wiki/images/6/6e/Witch%27s_House_reward_scroll.png?272d1\",\"completed\":false},{\"name\":\"Merlin's Crystal\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"6\",\"guide\":\"https://oldschool.runescape.wiki/w/Merlin%27s_Crystal\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Heroes' Quest\",\"Holy Grail\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/49/Merlin%27s_Crystal_reward_scroll.png?2e9ed\",\"completed\":false},{\"name\":\"Heroes' Quest\",\"diff\":\"Experienced\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Heroes%27_Quest\",\"questRequirements\":[\"Shield of Arrav\",\"Lost City\",\"Merlin's Crystal\",\"Dragon Slayer I\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":53,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":53,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[\"Legends' Quest\",\"Throne of Miscellania\",\"Recipe for Disaster/Freeing Sir Amik Varze\",\"The Fremennik Exiles\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4d/Heroes%27_Quest_reward_scroll.png?7983d\",\"completed\":false},{\"name\":\"Scorpion Catcher\",\"diff\":\"Intermediate\",\"length\":\"Short – Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Scorpion_Catcher\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Prayer\",\"level\":31,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f1/Scorpion_Catcher_reward_scroll.png?5956a\",\"completed\":false},{\"name\":\"Family Crest\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Family_Crest\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Mining\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":59,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"Legends' Quest\",\"Recipe for Disaster/Freeing Sir Amik Varze\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/26/Family_Crest_reward_scroll.png?d6d50\",\"completed\":false},{\"name\":\"Tribal Totem\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Tribal_Totem\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":21,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4e/Tribal_Totem_reward_scroll.png?df2cb\",\"completed\":false},{\"name\":\"Fishing Contest\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Fishing_Contest\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Fishing\",\"level\":10,\"extra\":\"\"}],\"unlocks\":[\"Between a Rock...\",\"Forgettable Tale...\",\"Recipe for Disaster\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e9/Fishing_Contest_reward_scroll.png?70d1e\",\"completed\":false},{\"name\":\"Monk's Friend\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Monk%27s_Friend\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/b/bc/Monk%27s_Friend_reward_scroll.png?8d207\",\"completed\":false},{\"name\":\"Temple of Ikov\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Temple_of_Ikov\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":42,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"Desert Treasure\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/95/Temple_of_Ikov_reward_scroll_%28Armadyl%29.png?4d656\",\"completed\":false},{\"name\":\"Clock Tower\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Clock_Tower\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/5/5c/Clock_Tower_reward_scroll.png?7c9b5\",\"completed\":false},{\"name\":\"Holy Grail\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Holy_Grail\",\"questRequirements\":[\"Merlin's Crystal\"],\"skillRequirements\":[{\"skill\":\"Attack\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[\"King's Ransom\"],\"rewards\":\"https://oldschool.runescape.wiki/images/6/6a/Holy_Grail_reward_scroll.png?42604\",\"completed\":false},{\"name\":\"Tree Gnome Village\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Tree_Gnome_Village\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Monkey Madness I\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/26/Tree_Gnome_Village_reward_scroll.png?d7871\",\"completed\":false},{\"name\":\"Fight Arena\",\"diff\":\"Experienced\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Fight_Arena\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/3/3e/Fight_Arena_reward_scroll.png?8028b\",\"completed\":false},{\"name\":\"Hazeel Cult\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Hazeel_Cult\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/73/Hazeel_Cult_reward_scroll.png?f5a22\",\"completed\":false},{\"name\":\"Sheep Herder\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Sheep_Herder\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Mourning's End Part I\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/7f/Sheep_Herder_reward_scroll.png?39773\",\"completed\":false},{\"name\":\"Plague City\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Plague_City\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/af/Plague_City_reward_scroll.png?5b1aa\",\"completed\":false},{\"name\":\"Sea Slug\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Sea_Slug\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Firemaking\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"The Slug Menace\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d0/Sea_Slug_reward_scroll.png?c6926\",\"completed\":false},{\"name\":\"Waterfall Quest\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Waterfall_Quest\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Legends' Quest\",\"Roving Elves\",\"Desert Treasure\",\"Recipe for Disaster/Freeing Sir Amik Varze\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f7/Waterfall_Quest_reward_scroll.png?1daa0\",\"completed\":false},{\"name\":\"Biohazard\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Biohazard\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Underground Pass\",\"Recipe for Disaster/Freeing the Lumbridge Guide\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f0/Biohazard_reward_scroll.png?d266a\",\"completed\":false},{\"name\":\"Jungle Potion\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Jungle_Potion\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Herblore\",\"level\":3,\"extra\":\"\"}],\"unlocks\":[\"Zogre Flesh Eaters\",\"My Arm's Big Adventure\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/76/Jungle_Potion_reward_scroll.png?426e4\",\"completed\":false},{\"name\":\"The Grand Tree\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"5\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Grand_Tree\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Monkey Madness I\"],\"rewards\":\"https://oldschool.runescape.wiki/images/c/c4/The_Grand_Tree_reward_scroll.png?6c490\",\"completed\":false},{\"name\":\"Shilo Village\",\"diff\":\"Experienced\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Shilo_Village\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":32,\"extra\":\"\"}],\"unlocks\":[\"Legends' Quest\",\"One Small Favour\",\"Recipe for Disaster/Freeing Sir Amik Varze\",\"Lunar Diplomacy\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/81/Shilo_Village_reward_scroll.png?15d64\",\"completed\":false},{\"name\":\"Underground Pass\",\"diff\":\"Experienced\",\"length\":\"Long – Very long\",\"points\":\"5\",\"guide\":\"https://oldschool.runescape.wiki/w/Underground_Pass\",\"questRequirements\":[\"Biohazard\"],\"skillRequirements\":[{\"skill\":\"Ranged\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Legends' Quest\",\"Regicide\",\"Recipe for Disaster/Freeing Sir Amik Varze\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/8f/Underground_Pass_reward_scroll.png?33648\",\"completed\":false},{\"name\":\"Observatory Quest\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Observatory_Quest\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/9/9f/Observatory_Quest_reward_scroll.png?d503f\",\"completed\":false},{\"name\":\"The Tourist Trap\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Tourist_Trap\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Fletching\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[\"Desert Treasure\"],\"rewards\":\"https://oldschool.runescape.wiki/images/5/58/The_Tourist_Trap_reward_scroll.png?6287f\",\"completed\":false},{\"name\":\"Watchtower\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Watchtower\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":14,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"Monkey Madness II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/86/Watchtower_reward_scroll.png?e9694\",\"completed\":false},{\"name\":\"Dwarf Cannon\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Dwarf_Cannon\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Between a Rock...\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/e/e8/Cryptic_clue_-_search_boxes_south_Coal_Trucks.png/300px-Cryptic_clue_-_search_boxes_south_Coal_Trucks.png?7b391\",\"completed\":false},{\"name\":\"Murder Mystery\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Murder_Mystery\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Freeing the Lumbridge Guide\",\"King's Ransom\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/91/Murder_Mystery_reward_scroll.png?d444a\",\"completed\":false},{\"name\":\"The Dig Site\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Dig_Site\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Desert Treasure\",\"Another Slice of H.A.M.\",\"Bone Voyage\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/f3/The_Dig_Site_reward_scroll.png?240dc\",\"completed\":false},{\"name\":\"Gertrude's Cat\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Gertrude%27s_Cat\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Freeing Evil Dave\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/8e/Gertrude%27s_Cat_reward_scroll.png?8f792\",\"completed\":false},{\"name\":\"Legends' Quest\",\"diff\":\"Master\",\"length\":\"Very long\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Legends%27_Quest\",\"questRequirements\":[\"Family Crest\",\"Heroes' Quest\",\"Shilo Village\",\"Underground Pass\",\"Waterfall Quest\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":56,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":52,\"extra\":\"\"},{\"skill\":\"Prayer\",\"level\":42,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Strength\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[\"Recipe for Disaster\",\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a9/Legends%27_Quest_reward_scroll.png?0d824\",\"completed\":false},{\"name\":\"Big Chompy Bird Hunting\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Fletching\",\"level\":5,\"extra\":\"\"},{\"skill\":\"Cooking\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"Zogre Flesh Eaters\",\"Mourning's End Part I\",\"Recipe for Disaster\",\"Recipe for Disaster/Freeing the Lumbridge Guide\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b9/Big_Chompy_Bird_Hunting_reward_scroll.png?47515\",\"completed\":false},{\"name\":\"Elemental Workshop I\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Elemental_Workshop_I\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Mining\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4d/Elemental_Workshop_I_reward_scroll.png?6a619\",\"completed\":false},{\"name\":\"Priest in Peril\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Priest_in_Peril\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"Nature Spirit\",\"Creature of Fenkenstrain\",\"Ghosts Ahoy\",\"Desert Treasure\",\"Wanted!\",\"Rum Deal\",\"Making History\",\"Cabin Fever\",\"Animal Magnetism\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d9/Priest_in_Peril_reward_scroll.png?cf23f\",\"completed\":false},{\"name\":\"Nature Spirit\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Nature_Spirit\",\"questRequirements\":[\"Priest in Peril\",\"The Restless Ghost\"],\"skillRequirements\":[],\"unlocks\":[\"In Search of the Myreque\",\"Fairytale I - Growing Pains\",\"Recipe for Disaster\",\"Recipe for Disaster/Freeing the Lumbridge Guide\"],\"rewards\":\"https://oldschool.runescape.wiki/images/6/66/Nature_Spirit_reward_scroll.png?4870d\",\"completed\":false},{\"name\":\"Death Plateau\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Death_Plateau\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/25/Death_Plateau_reward_scroll.png?2449c\",\"completed\":false},{\"name\":\"Troll Stronghold\",\"diff\":\"Experienced\",\"length\":\"Short – Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Troll_Stronghold\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":15,\"extra\":\" \"}],\"unlocks\":[\"Eadgar's Ruse\",\"Troll Romance\",\"Desert Treasure\",\"Devious Minds\",\"Monkey Madness II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/23/Troll_Stronghold_reward_scroll.png?0713c\",\"completed\":false},{\"name\":\"Tai Bwo Wannai Trio\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Cooking\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":5,\"extra\":\" \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a9/Tai_Bwo_Wannai_Trio_reward_scroll.png?a3e97\",\"completed\":false},{\"name\":\"Regicide\",\"diff\":\"Master\",\"length\":\"Long\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Regicide\",\"questRequirements\":[\"Underground Pass\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":56,\"extra\":\"\"}],\"unlocks\":[\"Roving Elves\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/9f/Regicide_reward_scroll.png?116d5\",\"completed\":false},{\"name\":\"Eadgar's Ruse\",\"diff\":\"Experienced\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse\",\"questRequirements\":[\"Druidic Ritual\",\"Troll Stronghold\"],\"skillRequirements\":[{\"skill\":\"Herblore\",\"level\":31,\"extra\":\"\"}],\"unlocks\":[\"My Arm's Big Adventure\",\"Dream Mentor\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4b/Eadgar%27s_Ruse_reward_scroll.png?760d8\",\"completed\":false},{\"name\":\"Shades of Mort'ton\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Shades_of_Mort%27ton\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":5,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/27/Shades_of_Mort%27ton_reward_scroll.png?0ff39\",\"completed\":false},{\"name\":\"The Fremennik Trials\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Fremennik_Trials\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Fletching\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"Throne of Miscellania\",\"Lunar Diplomacy\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/db/The_Fremennik_Trials_reward_scroll.png?31879\",\"completed\":false},{\"name\":\"Horror from the Deep\",\"diff\":\"Experienced\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Horror_from_the_Deep\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":35,\"extra\":\"\"}],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Defeating the Culinaromancer\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/7e/Horror_from_the_Deep_reward_scroll.png?e6b9d\",\"completed\":false},{\"name\":\"Throne of Miscellania\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Throne_of_Miscellania\",\"questRequirements\":[\"Heroes' Quest\",\"The Fremennik Trials\"],\"skillRequirements\":[{\"skill\":\"Woodcutting\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":35,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/75/Throne_of_Miscellania_reward_scroll.png?7e008\",\"completed\":false},{\"name\":\"Monkey Madness I\",\"diff\":\"Master\",\"length\":\"Long\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Monkey_Madness_I\",\"questRequirements\":[\"The Grand Tree\",\"Tree Gnome Village\"],\"skillRequirements\":[],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Freeing King Awowogei\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/98/Monkey_Madness_I_reward_scroll.png?874d3\",\"completed\":false},{\"name\":\"Haunted Mine\",\"diff\":\"Experienced\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Haunted_Mine\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":35,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/3/33/Haunted_Mine_reward_scroll.png?b5bf3\",\"completed\":false},{\"name\":\"Troll Romance\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Troll_Romance\",\"questRequirements\":[\"Troll Stronghold\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":28,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a5/Troll_Romance_reward_scroll.png?8d793\",\"completed\":false},{\"name\":\"In Search of the Myreque\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque\",\"questRequirements\":[\"Nature Spirit\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"In Aid of the Myreque\"],\"rewards\":\"https://oldschool.runescape.wiki/images/6/62/In_Search_of_the_Myreque_reward_scroll.png?edf3e\",\"completed\":false},{\"name\":\"Creature of Fenkenstrain\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain\",\"questRequirements\":[\"Priest In Peril\",\"The Restless Ghost\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Garden of Tranquillity\",\"The Great Brain Robbery\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e3/Creature_of_Fenkenstrain_reward_scroll.png?ac8e7\",\"completed\":false},{\"name\":\"Roving Elves\",\"diff\":\"Master\",\"length\":\"Short – Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Roving_Elves\",\"questRequirements\":[\"Regicide\",\"Waterfall Quest\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":56,\"extra\":\"\\nThere is no agility requirement if using charter ships to reach Islwyn and Eluned, see below\"}],\"unlocks\":[\"Mourning's End Part I\"],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0b/Roving_Elves_reward_scroll.png?d10a7\",\"completed\":false},{\"name\":\"Ghosts Ahoy\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Ghosts_Ahoy\",\"questRequirements\":[\"Priest in Peril\",\"The Restless Ghost\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Cooking\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e8/Ghosts_Ahoy_reward_scroll.png?35bd1\",\"completed\":false},{\"name\":\"One Small Favour\",\"diff\":\"Experienced\",\"length\":\"Very long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/One_Small_Favour\",\"questRequirements\":[\"Rune Mysteries\",\"Druidic Ritual\",\"Shilo Village\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":36,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":18,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"Swan Song\",\"King's Ransom\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/8b/One_Small_Favour_reward_scroll.png?7eb50\",\"completed\":false},{\"name\":\"Mountain Daughter\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Mountain_Daughter\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[\"The Fremennik Exiles\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/4a/Mountain_Daughter_reward_scroll.png?9b335\",\"completed\":false},{\"name\":\"Between a Rock...\",\"diff\":\"Experienced\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Between_a_Rock...\",\"questRequirements\":[\"Dwarf Cannon\",\"Fishing Contest\"],\"skillRequirements\":[{\"skill\":\"Defence\",\"level\":30,\"extra\":\" \"},{\"skill\":\"Mining\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0d/Between_a_Rock..._reward_scroll.png?06459\",\"completed\":false},{\"name\":\"The Feud\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Feud\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"My Arm's Big Adventure\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/2c/The_Feud_reward_scroll.png?44446\",\"completed\":false},{\"name\":\"The Golem\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Golem\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Shadow of the Storm\"],\"rewards\":\"https://oldschool.runescape.wiki/images/1/10/The_Golem_reward_scroll.png?c9cb1\",\"completed\":false},{\"name\":\"Desert Treasure\",\"diff\":\"Master\",\"length\":\"Very long\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Desert_Treasure\",\"questRequirements\":[\"The Dig Site\",\"Temple of Ikov\",\"The Tourist Trap\",\"Troll Stronghold\",\"Priest in Peril\",\"Waterfall Quest\"],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":53,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":10,\"extra\":\" – not required if you have a Gas mask from Plague City.\"}],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Defeating the Culinaromancer\"],\"rewards\":\"https://oldschool.runescape.wiki/images/1/17/Desert_Treasure_reward_scroll.png?6287f\",\"completed\":false},{\"name\":\"Icthlarin's Little Helper\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"A Tail of Two Cats\",\"Ratcatchers\",\"Contact!\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/49/Icthlarin%27s_Little_Helper_reward_scroll.png?856f4\",\"completed\":false},{\"name\":\"Tears of Guthix\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Tears_of_Guthix\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Firemaking\",\"level\":49,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/9/96/Tears_of_Guthix_reward_scroll.png?86079\",\"completed\":false},{\"name\":\"Zogre Flesh Eaters\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters\",\"questRequirements\":[\"Big Chompy Bird Hunting\",\"Jungle Potion\"],\"skillRequirements\":[{\"skill\":\"Smithing\",\"level\":4,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":8,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"Rum Deal\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/28/Zogre_Flesh_Eaters_reward_scroll.png?877cf\",\"completed\":false},{\"name\":\"The Lost Tribe\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Lost_Tribe\",\"questRequirements\":[\"Goblin Diplomacy\",\"Rune Mysteries\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":13,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":13,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":17,\"extra\":\"\"}],\"unlocks\":[\"Wanted!\",\"Death to the Dorgeshuun\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/27/The_Lost_Tribe_reward_scroll.png?05b63\",\"completed\":false},{\"name\":\"The Giant Dwarf\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Giant_Dwarf\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":12,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":16,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":33,\"extra\":\"\\nUse the normal spellbook as you will need to cast Telekinetic Grab.\"},{\"skill\":\"Thieving\",\"level\":14,\"extra\":\"\"}],\"unlocks\":[\"Forgettable Tale...\",\"Another Slice of H.A.M.\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b9/The_Giant_Dwarf_reward_scroll.png?0884b\",\"completed\":false},{\"name\":\"Recruitment Drive\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recruitment_Drive\",\"questRequirements\":[\"Black Knights' Fortress\",\"Druidic Ritual\"],\"skillRequirements\":[],\"unlocks\":[\"Wanted!\"],\"rewards\":\"https://oldschool.runescape.wiki/images/8/8e/Recruitment_Drive_reward_scroll.png?d8b57\",\"completed\":false},{\"name\":\"Mourning's End Part I\",\"diff\":\"Master\",\"length\":\"Long – Very long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_I\",\"questRequirements\":[\"Roving Elves\",\"Big Chompy Bird Hunting\",\"Sheep Herder\"],\"skillRequirements\":[{\"skill\":\"Ranged\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[\"Mourning's End Part II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0a/Mourning%27s_End_Part_I_reward_scroll.png?72f5d\",\"completed\":false},{\"name\":\"Forgettable Tale...\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Forgettable_Tale...\",\"questRequirements\":[\"The Giant Dwarf\",\"Fishing Contest\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":22,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":17,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a9/Forgettable_Tale_of_a_Drunken_Dwarf_reward_scroll.png?8a236\",\"completed\":false},{\"name\":\"Garden of Tranquillity\",\"diff\":\"Intermediate\",\"length\":\"Very long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Garden_of_Tranquillity\",\"questRequirements\":[\"Creature of Fenkenstrain\"],\"skillRequirements\":[{\"skill\":\"Farming\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[\"Swan Song\"],\"rewards\":\"https://oldschool.runescape.wiki/images/f/ff/Garden_of_Tranquillity_reward_scroll.png?07107\",\"completed\":false},{\"name\":\"A Tail of Two Cats\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats\",\"questRequirements\":[\"Icthlarin's Little Helper\"],\"skillRequirements\":[],\"unlocks\":[\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/5/55/Odysseus_%28ghost%29.png/150px-Odysseus_%28ghost%29.png?6a9ff\",\"completed\":false},{\"name\":\"Wanted!\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Wanted!\",\"questRequirements\":[\"Recruitment Drive\",\"The Lost Tribe\",\"Priest in Peril\",\"Enter the Abyss (mini)\"],\"skillRequirements\":[],\"unlocks\":[\"Devious Minds\",\"The Slug Menace\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/ef/Wanted%21_reward_scroll.png?ae9e0\",\"completed\":false},{\"name\":\"Mourning's End Part II\",\"diff\":\"Master\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_II\",\"questRequirements\":[\"Mourning's End Part I\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":70,\"extra\":\"\"}],\"unlocks\":[\"Song of the Elves\"],\"rewards\":\"https://oldschool.runescape.wiki/images/9/9b/Mourning%27s_End_Part_II_reward_scroll.png?393bd\",\"completed\":false},{\"name\":\"Rum Deal\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Rum_Deal\",\"questRequirements\":[\"Zogre Flesh Eaters\",\"Priest in Peril\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":42,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Prayer\",\"level\":47,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":42,\"extra\":\"\"}],\"unlocks\":[\"Cabin Fever\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b6/Rum_Deal_reward_scroll.png?b2ea1\",\"completed\":false},{\"name\":\"Shadow of the Storm\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Shadow_of_the_Storm\",\"questRequirements\":[\"The Golem\",\"Demon Slayer\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[\"Recipe for Disaster\",\"Recipe for Disaster/Freeing Evil Dave\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d3/Shadow_of_the_Storm_reward_scroll.png?f5a11\",\"completed\":false},{\"name\":\"Making History\",\"diff\":\"Intermediate\",\"length\":\"Short – Long\",\"points\":\"3\",\"guide\":\"https://oldschool.runescape.wiki/w/Making_History\",\"questRequirements\":[\"Priest in Peril\",\"The Restless Ghost\"],\"skillRequirements\":[],\"unlocks\":[\"Song of the Elves\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d5/Coins_250.png?c2755\",\"completed\":false},{\"name\":\"Ratcatchers\",\"diff\":\"Intermediate\",\"length\":\"Long – Very long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Ratcatchers\",\"questRequirements\":[\"Icthlarin's Little Helper\"],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/c/c2/Ratcatchers_reward_scroll.png?9cbbe\",\"completed\":false},{\"name\":\"Spirits of the Elid\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Spirits_of_the_Elid\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":33,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":37,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":37,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":37,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/5/5f/Spirits_of_the_Elid_reward_scroll.png?9bd93\",\"completed\":false},{\"name\":\"Devious Minds\",\"diff\":\"Experienced\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Devious_Minds\",\"questRequirements\":[\"Wanted!\",\"Troll Stronghold\",\"Doric's Quest\",\"Enter the Abyss (mini)\"],\"skillRequirements\":[{\"skill\":\"Smithing\",\"level\":65,\"extra\":\"\"},{\"skill\":\"Runecraft\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Fletching\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0d/Devious_Minds_reward_scroll.png?288cd\",\"completed\":false},{\"name\":\"The Hand in the Sand\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":17,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":49,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/b/bc/Wizard%27s_head.png?cb333\",\"completed\":false},{\"name\":\"Enakhra's Lament\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Enakhra%27s_Lament\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Prayer\",\"level\":43,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":39,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/73/Enakhra%27s_Lament_reward_scroll.png?f8290\",\"completed\":false},{\"name\":\"Cabin Fever\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Cabin_Fever\",\"questRequirements\":[\"Pirate's Treasure\",\"Rum Deal\",\"Priest in Peril\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":42,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"The Great Brain Robbery\"],\"rewards\":\"https://oldschool.runescape.wiki/images/4/40/Cabin_Fever_reward_scroll.png?7ffb1\",\"completed\":false},{\"name\":\"Fairytale I - Growing Pains\",\"diff\":\"Experienced\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains\",\"questRequirements\":[\"Lost City\",\"Nature Spirit\"],\"skillRequirements\":[],\"unlocks\":[\"Fairytale II - Cure a Queen\"],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d8/Fairytale_I_-_Growing_Pains_reward_scroll.png?53f29\",\"completed\":false},{\"name\":\"Recipe for Disaster\",\"diff\":\"Special\",\"length\":\"Very long\",\"points\":\"10\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster\",\"questRequirements\":[\"Cook's Assistant\",\"Fishing Contest\",\"Goblin Diplomacy\",\"Big Chompy Bird Hunting\",\"Murder Mystery\",\"Nature Spirit\",\"Witch's House\",\"Gertrude's Cat\",\"Shadow of the Storm\",\"Legends' Quest\",\"Monkey Madness I\",\"Desert Treasure\",\"Horror from the Deep\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":48,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":53,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":53,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":59,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Fletching\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":10,\"extra\":\" - not required if you have a Gas mask from Plague City\"},{\"skill\":\"Woodcutting\",\"level\":36,\"extra\":\"\"}],\"unlocks\":[\"Monkey Madness II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/78/Recipe_for_Disaster_%28Defeating_the_Culinaromancer%29_reward_scroll.png?ef922\",\"completed\":false},{\"name\":\"Recipe for Disaster/Another Cook's Quest\",\"diff\":\"Special\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Another_Cook%27s_Quest\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":10,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/02/Another_Cook%27s_Quest_reward_scroll.png?c650e\",\"completed\":false},{\"name\":\"Recipe for Disaster/Defeating the Culinaromancer\",\"diff\":\"Special\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Defeating_the_Culinaromancer\",\"questRequirements\":[\"Desert Treasure\",\"Horror from the Deep\",\"Freeing the Goblin generals (mini)\",\"Freeing the Mountain dwarf (mini)\",\"Freeing Evil Dave (mini)\",\"Freeing the Lumbridge Guide (mini)\",\"Freeing Pirate Pete (mini)\",\"Freeing Skrach Uglogwee (mini)\",\"Freeing Sir Amik Varze (mini)\",\"Freeing King Awowogei (mini)\"],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/78/Recipe_for_Disaster_%28Defeating_the_Culinaromancer%29_reward_scroll.png?ef922\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing the Mountain Dwarf\",\"diff\":\"Special\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Mountain_Dwarf\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/23/Recipe_for_Disaster_%28Freeing_the_Mountain_Dwarf%29_reward_scroll.png?6c19b\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing the Goblin generals\",\"diff\":\"Special\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Goblin_generals\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/8/80/Slop_of_compromise.png?b31a9\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing Pirate Pete\",\"diff\":\"Special\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":31,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d7/Diving_apparatus.png?018d0\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing the Lumbridge Guide\",\"diff\":\"Special\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Lumbridge_Guide\",\"questRequirements\":[\"Big Chompy Bird Hunting\",\"Biohazard\",\"Demon Slayer\",\"Murder Mystery\",\"Nature Spirit\",\"Witch's House\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/23/Recipe_for_Disaster_%28Freeing_the_Lumbridge_Guide%29_reward_scroll.png?cca5c\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing Evil Dave\",\"diff\":\"Special\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Evil_Dave\",\"questRequirements\":[\"Gertrude's Cat\",\"Shadow of the Storm\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/7/70/Recipe_for_Disaster_%28Freeing_Evil_Dave%29_reward_scroll.png?d0aa3\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing King Awowogei\",\"diff\":\"Special\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei\",\"questRequirements\":[\"Monkey Madness I\"],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":48,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/1/1f/Recipe_for_Disaster_%28Freeing_King_Awowogei%29_reward_scroll.png?184b9\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing Sir Amik Varze\",\"diff\":\"Special\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze\",\"questRequirements\":[\"Family Crest\",\"Heroes' Quest\",\"Shilo Village\",\"Underground Pass\",\"Waterfall Quest\"],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/6/63/Recipe_for_Disaster_%28Freeing_Sir_Amik_Varze%29_reward_scroll.png?a36b5\",\"completed\":false},{\"name\":\"Recipe for Disaster/Freeing Skrach Uglogwee\",\"diff\":\"Special\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Skrach_Uglogwee\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Cooking\",\"level\":41,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/03/Recipe_for_Disaster_%28Freeing_Skrach_Uglogwee%29_reward_scroll.png?6aa85\",\"completed\":false},{\"name\":\"In Aid of the Myreque\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque\",\"questRequirements\":[\"In Search of the Myreque\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":25,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":7,\"extra\":\"\"}],\"unlocks\":[\"Darkness of Hallowvale\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/27/In_Aid_of_the_Myreque_reward_scroll.png?9e07f\",\"completed\":false},{\"name\":\"A Soul's Bane\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/A_Soul%27s_Bane\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/ae/A_Soul%27s_Bane_reward_scroll.png?cbf12\",\"completed\":false},{\"name\":\"Rag and Bone Man I\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_I\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/4/48/Rag_and_Bone_Man_I_reward_scroll.png?0f524\",\"completed\":false},{\"name\":\"Rag and Bone Man II\",\"diff\":\"Intermediate\",\"length\":\"Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_II\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Slayer\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Defence\",\"level\":20,\"extra\":\" to wield a mirror shield to kill a basilisk \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0f/Rag_and_Bone_Man_II_reward_scroll_%28Ram_skull_helm_and_Bonesack%29.png?040d6\",\"completed\":false},{\"name\":\"Swan Song\",\"diff\":\"Master\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Swan_Song\",\"questRequirements\":[\"One Small Favour\",\"Garden of Tranquillity\"],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":66,\"extra\":\"\"},{\"skill\":\"Cooking\",\"level\":62,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":62,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":42,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"Making Friends with My Arm\"],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e0/Swan_Song_reward_scroll.png?10935\",\"completed\":false},{\"name\":\"Royal Trouble\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Royal_Trouble\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":40,\"extra\":\" \"},{\"skill\":\"Slayer\",\"level\":40,\"extra\":\" \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/9/95/Royal_Trouble_reward_scroll.png?7e008\",\"completed\":false},{\"name\":\"Death to the Dorgeshuun\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun\",\"questRequirements\":[\"The Lost Tribe\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":23,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":23,\"extra\":\"\"}],\"unlocks\":[\"Another Slice of H.A.M.\"],\"rewards\":\"https://oldschool.runescape.wiki/images/2/24/Death_to_the_Dorgeshuun_reward_scroll.png?ea02c\",\"completed\":false},{\"name\":\"Fairytale II - Cure a Queen\",\"diff\":\"Experienced\",\"length\":\"Short – Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen\",\"questRequirements\":[\"Fairytale I - Growing Pains\"],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":49,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":57,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/8/86/Fairytale_II_-_Cure_a_Queen_reward_scroll.png?7a450\",\"completed\":false},{\"name\":\"Lunar Diplomacy\",\"diff\":\"Experienced\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Lunar_Diplomacy\",\"questRequirements\":[\"The Fremennik Trials\",\"Lost City\",\"Rune Mysteries\",\"Shilo Village\"],\"skillRequirements\":[{\"skill\":\"Herblore\",\"level\":5,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":61,\"extra\":\"\"},{\"skill\":\"Defence\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":49,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":65,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":55,\"extra\":\"\\nNote: Lokar will not talk to you if you do not have all of the required non-boostable stats.\"}],\"unlocks\":[\"Dream Mentor\",\"The Fremennik Exiles\"],\"rewards\":\"https://oldschool.runescape.wiki/images/a/aa/Lunar_Diplomacy_reward_scroll.png?9c0b6\",\"completed\":false},{\"name\":\"The Eyes of Glouphrie\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Eyes_of_Glouphrie\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Construction\",\"level\":5,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":46,\"extra\":\"\"}],\"unlocks\":[\"Monkey Madness II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/e/ef/The_Eyes_of_Glouphrie_goblins.png/270px-The_Eyes_of_Glouphrie_goblins.png?fbe7b\",\"completed\":false},{\"name\":\"Darkness of Hallowvale\",\"diff\":\"Intermediate\",\"length\":\"Very long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale\",\"questRequirements\":[\"In Aid of the Myreque\"],\"skillRequirements\":[{\"skill\":\"Construction\",\"level\":5,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":22,\"extra\":\" \"},{\"skill\":\"Agility\",\"level\":26,\"extra\":\" Note: The level 26 Agility requirement to begin the quest is boostable, but the unboostable obstacles within Meiyerditch only require 25 Agility. Therefore, 25 Agility is the lowest level possible to complete the quest.\"},{\"skill\":\"Crafting\",\"level\":32,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":33,\"extra\":\"\"},{\"skill\":\"Strength\",\"level\":40,\"extra\":\"\"}],\"unlocks\":[\"A Taste of Hope\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/74/Darkness_of_Hallowvale_reward_scroll.png?be2f8\",\"completed\":false},{\"name\":\"The Slug Menace\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Slug_Menace\",\"questRequirements\":[\"Wanted!\",\"Sea Slug\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Runecraft\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/6/65/The_Slug_Menace_reward_scroll.png?ad854\",\"completed\":false},{\"name\":\"Elemental Workshop II\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Elemental_Workshop_II\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":30,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a6/Elemental_Workshop_II_reward_scroll.png?52987\",\"completed\":false},{\"name\":\"My Arm's Big Adventure\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure\",\"questRequirements\":[\"Eadgar's Ruse\",\"The Feud\",\"Jungle Potion\"],\"skillRequirements\":[{\"skill\":\"Woodcutting\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":29,\"extra\":\"\"}],\"unlocks\":[\"Making Friends with My Arm\"],\"rewards\":\"https://oldschool.runescape.wiki/images/3/38/My_Arm%27s_Big_Adventure_reward_scroll.png?95940\",\"completed\":false},{\"name\":\"Enlightened Journey\",\"diff\":\"Intermediate\",\"length\":\"Short – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Enlightened_Journey\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Firemaking\",\"level\":20,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":36,\"extra\":\"\"}],\"unlocks\":[\"Monkey Madness II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/7/72/Enlightened_Journey_reward_scroll.png?1d457\",\"completed\":false},{\"name\":\"Eagles' Peak\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Eagles%27_Peak\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Hunter\",\"level\":27,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0f/Eagles%27_Peak_reward_scroll.png?176cb\",\"completed\":false},{\"name\":\"Animal Magnetism\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Animal_Magnetism\",\"questRequirements\":[\"The Restless Ghost\",\"Ernest the Chicken\",\"Priest in Peril\"],\"skillRequirements\":[{\"skill\":\"Slayer\",\"level\":18,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":19,\"extra\":\"\"},{\"skill\":\"Ranged\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":35,\"extra\":\"\"}],\"unlocks\":[\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/1/11/Animal_Magnetism_reward_scroll.png?85fc0\",\"completed\":false},{\"name\":\"Contact!\",\"diff\":\"Master\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Contact!\",\"questRequirements\":[\"Prince Ali Rescue\",\"Icthlarin's Little Helper\"],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/b/b5/Contact%21_reward_scroll.png?3afb2\",\"completed\":false},{\"name\":\"Cold War\",\"diff\":\"Intermediate\",\"length\":\"Medium – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Cold_War\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Hunter\",\"level\":10,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Construction\",\"level\":34,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":15,\"extra\":\"\"}],\"unlocks\":[\"Making Friends with My Arm\"],\"rewards\":\"https://oldschool.runescape.wiki/images/b/be/Cold_War_reward_scroll.png?3a2e7\",\"completed\":false},{\"name\":\"The Fremennik Isles\",\"diff\":\"Experienced\",\"length\":\"Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Fremennik_Isles\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Construction\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[\"The Fremennik Exiles\"],\"rewards\":\"https://oldschool.runescape.wiki/images/a/aa/The_Fremennik_Isles_reward_scroll.png?1ccc9\",\"completed\":false},{\"name\":\"Tower of Life\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Tower_of_Life\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Construction\",\"level\":10,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/5/54/Tower_of_Life_reward_scroll.png?88f34\",\"completed\":false},{\"name\":\"The Great Brain Robbery\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery\",\"questRequirements\":[\"Creature of Fenkenstrain\",\"Cabin Fever\",\"Pirate Pete (mini)\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":16,\"extra\":\" \"},{\"skill\":\"Construction\",\"level\":30,\"extra\":\"\"},{\"skill\":\"Prayer\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/2/21/The_Great_Brain_Robbery_reward_scroll.png?e9e6c\",\"completed\":false},{\"name\":\"What Lies Below\",\"diff\":\"Intermediate\",\"length\":\"Short – Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/What_Lies_Below\",\"questRequirements\":[\"Rune Mysteries\"],\"skillRequirements\":[{\"skill\":\"Runecraft\",\"level\":35,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":42,\"extra\":\" to use the shortcut to Chaos altar \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/8/84/What_Lies_Below_reward_scroll.png?ff154\",\"completed\":false},{\"name\":\"Olaf's Quest\",\"diff\":\"Intermediate\",\"length\":\"Short – Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Olaf%27s_Quest\",\"questRequirements\":[],\"skillRequirements\":[{\"skill\":\"Firemaking\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/f/fc/Olaf%27s_Quest_reward_scroll.png?0c532\",\"completed\":false},{\"name\":\"Another Slice of H.A.M.\",\"diff\":\"Intermediate\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.\",\"questRequirements\":[\"Death to the Dorgeshuun\",\"The Giant Dwarf\",\"The Dig Site\"],\"skillRequirements\":[{\"skill\":\"Attack\",\"level\":15,\"extra\":\"\"},{\"skill\":\"Prayer\",\"level\":25,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/e/e3/Another_Slice_of_H.A.M._reward_scroll.png?79d13\",\"completed\":false},{\"name\":\"Dream Mentor\",\"diff\":\"Master\",\"length\":\"Short – Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Dream_Mentor\",\"questRequirements\":[\"Lunar Diplomacy\",\"Eadgar's Ruse\"],\"skillRequirements\":[],\"unlocks\":[\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/3/39/Dream_Mentor_reward_scroll.png?2268c\",\"completed\":false},{\"name\":\"Grim Tales\",\"diff\":\"Master\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Grim_Tales\",\"questRequirements\":[\"Witch's House\"],\"skillRequirements\":[{\"skill\":\"Farming\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":52,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":58,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":59,\"extra\":\" \"},{\"skill\":\"\",\"level\":71,\"extra\":\" \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/6/62/Grim_Tales_reward_scroll.png?f0ff4\",\"completed\":false},{\"name\":\"King's Ransom\",\"diff\":\"Experienced\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/King%27s_Ransom\",\"questRequirements\":[\"Black Knights' Fortress\",\"Holy Grail\",\"Murder Mystery\",\"One Small Favour\"],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Defence\",\"level\":65,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/a/a9/King%27s_Ransom_reward_scroll.png?23da7\",\"completed\":false},{\"name\":\"Monkey Madness II\",\"diff\":\"Grandmaster\",\"length\":\"Very long\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Monkey_Madness_II\",\"questRequirements\":[\"Enlightened Journey\",\"The Eyes of Glouphrie\",\"Recipe for Disaster\",\"Troll Stronghold\",\"Watchtower\"],\"skillRequirements\":[{\"skill\":\"Slayer\",\"level\":69,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Hunter\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":55,\"extra\":\"\"},{\"skill\":\"Thieving\",\"level\":55,\"extra\":\"\"},{\"skill\":\"Firemaking\",\"level\":60,\"extra\":\" \"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/9/96/Monkey_Madness_II_log_in_screen_competition_prize_-_3D_printed_demonic_gorilla.jpg/120px-Monkey_Madness_II_log_in_screen_competition_prize_-_3D_printed_demonic_gorilla.jpg?7aae9\",\"completed\":false},{\"name\":\"Client of Kourend\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Client_of_Kourend\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[\"The Queen of Thieves\",\"The Depths of Despair\",\"Dragon Slayer II\",\"Tale of the Righteous\",\"The Ascent of Arceuus\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/f/f3/Ring_of_charos_%28a%29_detail.png/100px-Ring_of_charos_%28a%29_detail.png?c823c\",\"completed\":false},{\"name\":\"Bone Voyage\",\"diff\":\"Intermediate\",\"length\":\"Short – Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Bone_Voyage\",\"questRequirements\":[\"The Dig Site\"],\"skillRequirements\":[],\"unlocks\":[\"Dragon Slayer II\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/1/1a/Fossil_Island_login_screen.png/300px-Fossil_Island_login_screen.png?83265\",\"completed\":false},{\"name\":\"The Queen of Thieves\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Queen_of_Thieves\",\"questRequirements\":[\"Client of Kourend\"],\"skillRequirements\":[{\"skill\":\"Thieving\",\"level\":20,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/b/bb/The_Queen_of_Thieves_reward_scroll.png?91ce8\",\"completed\":false},{\"name\":\"The Depths of Despair\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Depths_of_Despair\",\"questRequirements\":[\"Client of Kourend\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":18,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/1/1f/The_Depths_of_Despair_reward_scroll.png?28a4c\",\"completed\":false},{\"name\":\"Dragon Slayer II\",\"diff\":\"Grandmaster\",\"length\":\"Very long\",\"points\":\"5\",\"guide\":\"https://oldschool.runescape.wiki/w/Dragon_Slayer_II\",\"questRequirements\":[\"Legends' Quest\",\"Dream Mentor\",\"A Tail of Two Cats\",\"Animal Magnetism\",\"Ghosts Ahoy\",\"Bone Voyage\",\"Client of Kourend\"],\"skillRequirements\":[{\"skill\":\"Magic\",\"level\":75,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":68,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":62,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":60,\"extra\":\" \"},{\"skill\":\"Thieving\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Construction\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Hitpoints\",\"level\":50,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/3/39/Dragon_Slayer_II_login_screen.png/300px-Dragon_Slayer_II_login_screen.png?79c77\",\"completed\":false},{\"name\":\"Tale of the Righteous\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Tale_of_the_Righteous\",\"questRequirements\":[\"Client of Kourend\"],\"skillRequirements\":[{\"skill\":\"Strength\",\"level\":16,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":10,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/5/55/Library_Historical_Archive_-_old_jail_cells.png/220px-Library_Historical_Archive_-_old_jail_cells.png?4f74e\",\"completed\":false},{\"name\":\"A Taste of Hope\",\"diff\":\"Experienced\",\"length\":\"Long\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/A_Taste_of_Hope\",\"questRequirements\":[\"Darkness of Hallowvale\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":48,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":45,\"extra\":\"\"},{\"skill\":\"Attack\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":40,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":38,\"extra\":\"\"}],\"unlocks\":[\"Sins of the Father\"],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/4/4e/Dev_Blog-_Theatre_of_Blood_%285%29.png/120px-Dev_Blog-_Theatre_of_Blood_%285%29.png?bfc7d\",\"completed\":false},{\"name\":\"Making Friends with My Arm\",\"diff\":\"Master\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm\",\"questRequirements\":[\"My Arm's Big Adventure\",\"Swan Song\",\"Cold War\",\"Romeo & Juliet\"],\"skillRequirements\":[{\"skill\":\"Firemaking\",\"level\":66,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":72,\"extra\":\"\"},{\"skill\":\"Construction\",\"level\":35,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":68,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/b/bd/Making_Friends_with_My_Arm_teaser_5.png/120px-Making_Friends_with_My_Arm_teaser_5.png?cf092\",\"completed\":false},{\"name\":\"The Forsaken Tower\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Forsaken_Tower\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/9/94/The_Forsaken_Tower_reward_scroll.png?d305c\",\"completed\":false},{\"name\":\"The Ascent of Arceuus\",\"diff\":\"Novice\",\"length\":\"Medium\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Ascent_of_Arceuus\",\"questRequirements\":[\"Client of Kourend\"],\"skillRequirements\":[{\"skill\":\"Hunter\",\"level\":12,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/0/0c/The_Ascent_of_Arceuus_reward_scroll.png?2a2b8\",\"completed\":false},{\"name\":\"Song of the Elves\",\"diff\":\"Grandmaster\",\"length\":\"Very long\",\"points\":\"4\",\"guide\":\"https://oldschool.runescape.wiki/w/Song_of_the_Elves\",\"questRequirements\":[\"Mourning's End Part II\",\"Making History\"],\"skillRequirements\":[{\"skill\":\"Agility\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Construction\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Farming\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Herblore\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Hunter\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Mining\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":70,\"extra\":\"\"},{\"skill\":\"Woodcutting\",\"level\":70,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/2/20/Seal_of_the_Forgotten.png/170px-Seal_of_the_Forgotten.png?50092\",\"completed\":false},{\"name\":\"The Fremennik Exiles\",\"diff\":\"Master\",\"length\":\"Medium\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/The_Fremennik_Exiles\",\"questRequirements\":[\"The Fremennik Isles\",\"Lunar Diplomacy\",\"Mountain Daughter\",\"Heroes' Quest\"],\"skillRequirements\":[{\"skill\":\"Crafting\",\"level\":65,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Smithing\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Fishing\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Runecraft\",\"level\":55,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/c/c5/The_Fremennik_Exiles_reward_scroll.png?b8beb\",\"completed\":false},{\"name\":\"Sins of the Father\",\"diff\":\"Master\",\"length\":\"Long\",\"points\":\"2\",\"guide\":\"https://oldschool.runescape.wiki/w/Sins_of_the_Father\",\"questRequirements\":[\"Vampyre Slayer\",\"A Taste of Hope\"],\"skillRequirements\":[{\"skill\":\"Woodcutting\",\"level\":62,\"extra\":\"\"},{\"skill\":\"Fletching\",\"level\":60,\"extra\":\"\"},{\"skill\":\"Crafting\",\"level\":56,\"extra\":\"\"},{\"skill\":\"Agility\",\"level\":52,\"extra\":\"\"},{\"skill\":\"Attack\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Slayer\",\"level\":50,\"extra\":\"\"},{\"skill\":\"Magic\",\"level\":49,\"extra\":\"\"}],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/e/e4/Darkmeyer_Key_Art_with_logo.jpg/300px-Darkmeyer_Key_Art_with_logo.jpg?30c9e\",\"completed\":false},{\"name\":\"A Porcine of Interest\",\"diff\":\"Novice\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/A_Porcine_of_Interest\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/d/d8/A_Porcine_of_Interest_reward_scroll.png?32f02\",\"completed\":false},{\"name\":\"Getting Ahead\",\"diff\":\"Intermediate\",\"length\":\"Short\",\"points\":\"1\",\"guide\":\"https://oldschool.runescape.wiki/w/Getting_Ahead\",\"questRequirements\":[],\"skillRequirements\":[],\"unlocks\":[],\"rewards\":\"https://oldschool.runescape.wiki/images/thumb/b/b4/Getting_Ahead_-_polling_ends.jpg/120px-Getting_Ahead_-_polling_ends.jpg?dfad4\",\"completed\":false}]");
    /***/
  },

  /***/
  "./src/assets/skill_quest_xp.json":
  /*!****************************************!*\
    !*** ./src/assets/skill_quest_xp.json ***!
    \****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, default */

  /***/
  function srcAssetsSkill_quest_xpJson(module) {
    module.exports = JSON.parse("[{\"skill\":\"Agility\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Agility\",\"quest\":\"Recruitment Drive\",\"xp\":\"1,000\"},{\"skill\":\"Agility\",\"quest\":\"The Depths of Despair\",\"xp\":\"1,500\"},{\"skill\":\"Agility\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Agility\",\"quest\":\"Underground Pass\",\"xp\":\"3,000\"},{\"skill\":\"Agility\",\"quest\":\"Icthlarin's Little Helper\",\"xp\":\"4,000\"},{\"skill\":\"Agility\",\"quest\":\"Cold War\",\"xp\":\"5,000\"},{\"skill\":\"Agility\",\"quest\":\"Royal Trouble\",\"xp\":\"5,000\"},{\"skill\":\"Agility\",\"quest\":\"Grim Tales\",\"xp\":\"6,000\"},{\"skill\":\"Agility\",\"quest\":\"Cabin Fever\",\"xp\":\"7,000\"},{\"skill\":\"Agility\",\"quest\":\"Darkness of Hallowvale\",\"xp\":\"7,000\"},{\"skill\":\"Agility\",\"quest\":\"The Grand Tree\",\"xp\":\"7,900\"},{\"skill\":\"Agility\",\"quest\":\"Troll Romance\",\"xp\":\"8,000\"},{\"skill\":\"Agility\",\"quest\":\"Making Friends with My Arm\",\"xp\":\"10,000\"},{\"skill\":\"Agility\",\"quest\":\"Recipe for Disaster/Awowogei\",\"xp\":\"10,000\"},{\"skill\":\"Agility\",\"quest\":\"Regicide\",\"xp\":\"13,750\"},{\"skill\":\"Agility\",\"quest\":\"Dragon Slayer II\",\"xp\":\"15,000\"},{\"skill\":\"Agility\",\"quest\":\"Mourning's End Part II\",\"xp\":\"20,000\"},{\"skill\":\"Agility\",\"quest\":\"Monkey Madness II\",\"xp\":\"20,000\"},{\"skill\":\"Agility\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Attack\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Attack\",\"quest\":\"A Soul's Bane\",\"xp\":\"40[1]\"},{\"skill\":\"Attack\",\"quest\":\"In Search of the Myreque\",\"xp\":\"600\"},{\"skill\":\"Attack\",\"quest\":\"Mountain Daughter\",\"xp\":\"1,000\"},{\"skill\":\"Attack\",\"quest\":\"Fairytale I - Growing Pains\",\"xp\":\"2,000\"},{\"skill\":\"Attack\",\"quest\":\"In Aid of the Myreque\",\"xp\":\"2,000\"},{\"skill\":\"Attack\",\"quest\":\"Tai Bwo Wannai Trio\",\"xp\":\"2,500\"},{\"skill\":\"Attack\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Attack\",\"quest\":\"Death Plateau\",\"xp\":\"3,000\"},{\"skill\":\"Attack\",\"quest\":\"Underground Pass\",\"xp\":\"3,000\"},{\"skill\":\"Attack\",\"quest\":\"Heroes' Quest\",\"xp\":\"3,075\"},{\"skill\":\"Attack\",\"quest\":\"Vampyre Slayer\",\"xp\":\"4,825\"},{\"skill\":\"Attack\",\"quest\":\"Tree Gnome Village\",\"xp\":\"11,450\"},{\"skill\":\"Attack\",\"quest\":\"Fight Arena\",\"xp\":\"12,175\"},{\"skill\":\"Attack\",\"quest\":\"Waterfall Quest\",\"xp\":\"13,750\"},{\"skill\":\"Attack\",\"quest\":\"The Grand Tree\",\"xp\":\"18,400\"},{\"skill\":\"Attack\",\"quest\":\"Camelot training room\\n(minigame)\",\"xp\":\"20,000\"},{\"skill\":\"Construction\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Construction\",\"quest\":\"The Eyes of Glouphrie\",\"xp\":\"250\"},{\"skill\":\"Construction\",\"quest\":\"Daddy's Home\\n\\n(miniquest)\",\"xp\":\"400\"},{\"skill\":\"Construction\",\"quest\":\"Tower of Life\",\"xp\":\"1,000\"},{\"skill\":\"Construction\",\"quest\":\"Cold War\",\"xp\":\"1,500\"},{\"skill\":\"Construction\",\"quest\":\"Darkness of Hallowvale\",\"xp\":\"2,000\"},{\"skill\":\"Construction\",\"quest\":\"The Great Brain Robbery\",\"xp\":\"2,000\"},{\"skill\":\"Construction\",\"quest\":\"Making Friends with My Arm\",\"xp\":\"2,000\"},{\"skill\":\"Construction\",\"quest\":\"Getting Ahead\",\"xp\":\"3,200\"},{\"skill\":\"Construction\",\"quest\":\"The Fremennik Isles\",\"xp\":\"5,000\"},{\"skill\":\"Construction\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Cooking\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Cooking\",\"quest\":\"Cook's Assistant\",\"xp\":\"300\"},{\"skill\":\"Cooking\",\"quest\":\"Rag and Bone Man I\",\"xp\":\"500\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Mountain Dwarf\",\"xp\":\"1,000\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Goblin generals\",\"xp\":\"1,000\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Pirate Pete\",\"xp\":\"1,000\"},{\"skill\":\"Cooking\",\"quest\":\"Big Chompy Bird Hunting\",\"xp\":\"1,470\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Skrach Uglogwee\",\"xp\":\"1,500\"},{\"skill\":\"Cooking\",\"quest\":\"Gertrude's Cat\",\"xp\":\"1,525\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Lumbridge Guide\",\"xp\":\"2,500\"},{\"skill\":\"Cooking\",\"quest\":\"Heroes' Quest\",\"xp\":\"2,825\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Sir Amik Varze\",\"xp\":\"4,000\"},{\"skill\":\"Cooking\",\"quest\":\"Forgettable Tale...\",\"xp\":\"5,000\"},{\"skill\":\"Cooking\",\"quest\":\"Tai Bwo Wannai Trio\",\"xp\":\"5,000\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Evil Dave\",\"xp\":\"7,000\"},{\"skill\":\"Cooking\",\"quest\":\"Recipe for Disaster/Awowogei\",\"xp\":\"10,000\"},{\"skill\":\"Crafting\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Crafting\",\"quest\":\"Sheep Shearer\",\"xp\":\"150\"},{\"skill\":\"Crafting\",\"quest\":\"Goblin Diplomacy\",\"xp\":\"200\"},{\"skill\":\"Crafting\",\"quest\":\"Tower of Life\",\"xp\":\"500\"},{\"skill\":\"Crafting\",\"quest\":\"In Search of the Myreque\",\"xp\":\"600\"},{\"skill\":\"Crafting\",\"quest\":\"Misthalin Mystery\",\"xp\":\"600\"},{\"skill\":\"Crafting\",\"quest\":\"Dwarf Cannon\",\"xp\":\"750\"},{\"skill\":\"Crafting\",\"quest\":\"Animal Magnetism\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"The Golem\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"Making History\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"Tears of Guthix\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"Recipe for Disaster/Goblin generals\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"Recipe for Disaster/Pirate Pete\",\"xp\":\"1,000\"},{\"skill\":\"Crafting\",\"quest\":\"Murder Mystery\",\"xp\":\"1,406\"},{\"skill\":\"Crafting\",\"quest\":\"Recipe for Disaster/Skrach Uglogwee\",\"xp\":\"1,500\"},{\"skill\":\"Crafting\",\"quest\":\"Cold War\",\"xp\":\"2,000\"},{\"skill\":\"Crafting\",\"quest\":\"Enlightened Journey\",\"xp\":\"2,000\"},{\"skill\":\"Crafting\",\"quest\":\"In Aid of the Myreque\",\"xp\":\"2,000\"},{\"skill\":\"Crafting\",\"quest\":\"Shades of Mort'ton\",\"xp\":\"2,000\"},{\"skill\":\"Crafting\",\"quest\":\"Observatory Quest\",\"xp\":\"2,250\"},{\"skill\":\"Crafting\",\"quest\":\"The Giant Dwarf\",\"xp\":\"2,500\"},{\"skill\":\"Crafting\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Crafting\",\"quest\":\"The Great Brain Robbery\",\"xp\":\"3,000\"},{\"skill\":\"Crafting\",\"quest\":\"Nature Spirit\",\"xp\":\"3,000\"},{\"skill\":\"Crafting\",\"quest\":\"The Slug Menace\",\"xp\":\"3,500\"},{\"skill\":\"Crafting\",\"quest\":\"Shilo Village\",\"xp\":\"3,875\"},{\"skill\":\"Crafting\",\"quest\":\"Getting Ahead\",\"xp\":\"4,000\"},{\"skill\":\"Crafting\",\"quest\":\"Elemental Workshop I\",\"xp\":\"5,000\"},{\"skill\":\"Crafting\",\"quest\":\"The Fremennik Isles\",\"xp\":\"5,000\"},{\"skill\":\"Crafting\",\"quest\":\"Cabin Fever\",\"xp\":\"7,000\"},{\"skill\":\"Crafting\",\"quest\":\"Enakhra's Lament\",\"xp\":\"7,000\"},{\"skill\":\"Crafting\",\"quest\":\"Elemental Workshop II\",\"xp\":\"7,500\"},{\"skill\":\"Crafting\",\"quest\":\"The Hand in the Sand\",\"xp\":\"9,000\"},{\"skill\":\"Crafting\",\"quest\":\"The Fremennik Exiles\",\"xp\":\"15,000\"},{\"skill\":\"Defence\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Defence\",\"quest\":\"A Soul's Bane\",\"xp\":\"500\"},{\"skill\":\"Defence\",\"quest\":\"In Search of the Myreque\",\"xp\":\"600\"},{\"skill\":\"Defence\",\"quest\":\"In Aid of the Myreque\",\"xp\":\"2,000\"},{\"skill\":\"Defence\",\"quest\":\"Nature Spirit\",\"xp\":\"2,000\"},{\"skill\":\"Defence\",\"quest\":\"What Lies Below\",\"xp\":\"2,000\"},{\"skill\":\"Defence\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Defence\",\"quest\":\"Heroes' Quest\",\"xp\":\"3,075\"},{\"skill\":\"Defence\",\"quest\":\"Between a Rock...\",\"xp\":\"5,000\"},{\"skill\":\"Defence\",\"quest\":\"Olaf's Quest\",\"xp\":\"12,000\"},{\"skill\":\"Defence\",\"quest\":\"Holy Grail\",\"xp\":\"15,300\"},{\"skill\":\"Defence\",\"quest\":\"Dragon Slayer I\",\"xp\":\"18,650\"},{\"skill\":\"Defence\",\"quest\":\"Camelot training room\\n(minigame)\",\"xp\":\"20,000\"},{\"skill\":\"Defence\",\"quest\":\"King's Ransom\",\"xp\":\"33,000\"},{\"skill\":\"Farming\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Farming\",\"quest\":\"Recipe for Disaster/Goblin generals\",\"xp\":\"1,000\"},{\"skill\":\"Farming\",\"quest\":\"Enlightened Journey\",\"xp\":\"3,000\"},{\"skill\":\"Farming\",\"quest\":\"Fairytale I - Growing Pains\",\"xp\":\"3,500\"},{\"skill\":\"Farming\",\"quest\":\"Grim Tales\",\"xp\":\"4,000\"},{\"skill\":\"Farming\",\"quest\":\"Forgettable Tale...\",\"xp\":\"5,000\"},{\"skill\":\"Farming\",\"quest\":\"Garden of Tranquillity\",\"xp\":\"5,000\"},{\"skill\":\"Farming\",\"quest\":\"My Arm's Big Adventure\",\"xp\":\"5,000\"},{\"skill\":\"Farming\",\"quest\":\"Rum Deal\",\"xp\":\"7,000\"},{\"skill\":\"Farming\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Firemaking\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Firemaking\",\"quest\":\"The Giant Dwarf\",\"xp\":\"1,500\"},{\"skill\":\"Firemaking\",\"quest\":\"Heroes' Quest\",\"xp\":\"1,575\"},{\"skill\":\"Firemaking\",\"quest\":\"Enlightened Journey\",\"xp\":\"4,000\"},{\"skill\":\"Firemaking\",\"quest\":\"Making Friends with My Arm\",\"xp\":\"5,000\"},{\"skill\":\"Firemaking\",\"quest\":\"Enakhra's Lament\",\"xp\":\"7,000\"},{\"skill\":\"Fishing\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Fishing\",\"quest\":\"Recipe for Disaster/Pirate Pete\",\"xp\":\"1,000\"},{\"skill\":\"Fishing\",\"quest\":\"Fishing Contest\",\"xp\":\"2,437\"},{\"skill\":\"Fishing\",\"quest\":\"Heroes' Quest\",\"xp\":\"2,725\"},{\"skill\":\"Fishing\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Fishing\",\"quest\":\"Tai Bwo Wannai Trio\",\"xp\":\"5,000\"},{\"skill\":\"Fishing\",\"quest\":\"Rum Deal\",\"xp\":\"7,000\"},{\"skill\":\"Fishing\",\"quest\":\"Sea Slug\",\"xp\":\"7,175\"},{\"skill\":\"Fishing\",\"quest\":\"Swan Song\",\"xp\":\"10,000\"},{\"skill\":\"Fletching\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Fletching\",\"quest\":\"Big Chompy Bird Hunting\",\"xp\":\"262\"},{\"skill\":\"Fletching\",\"quest\":\"Animal Magnetism\",\"xp\":\"1,000\"},{\"skill\":\"Fletching\",\"quest\":\"Zogre Flesh Eaters\",\"xp\":\"2,000\"},{\"skill\":\"Fletching\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Fletching\",\"quest\":\"Devious Minds\",\"xp\":\"5,000\"},{\"skill\":\"Fletching\",\"quest\":\"Temple of Ikov\",\"xp\":\"8,000\"},{\"skill\":\"Herblore\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Herblore\",\"quest\":\"Druidic Ritual\",\"xp\":\"250\"},{\"skill\":\"Herblore\",\"quest\":\"Jungle Potion\",\"xp\":\"775\"},{\"skill\":\"Herblore\",\"quest\":\"Recruitment Drive\",\"xp\":\"1,000\"},{\"skill\":\"Herblore\",\"quest\":\"Heroes' Quest\",\"xp\":\"1,325\"},{\"skill\":\"Herblore\",\"quest\":\"The Dig Site\",\"xp\":\"2,000\"},{\"skill\":\"Herblore\",\"quest\":\"Shades of Mort'ton\",\"xp\":\"2,000\"},{\"skill\":\"Herblore\",\"quest\":\"Zogre Flesh Eaters\",\"xp\":\"2,000\"},{\"skill\":\"Herblore\",\"quest\":\"Fairytale II - Cure a Queen\",\"xp\":\"3,500\"},{\"skill\":\"Herblore\",\"quest\":\"Grim Tales\",\"xp\":\"5,000\"},{\"skill\":\"Herblore\",\"quest\":\"My Arm's Big Adventure\",\"xp\":\"10,000\"},{\"skill\":\"Herblore\",\"quest\":\"Eadgar's Ruse\",\"xp\":\"11,000\"},{\"skill\":\"Herblore\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Hitpoints\",\"quest\":\"A Soul's Bane\",\"xp\":\"500\"},{\"skill\":\"Hitpoints\",\"quest\":\"In Search of the Myreque\",\"xp\":\"600\"},{\"skill\":\"Hitpoints\",\"quest\":\"Nature Spirit\",\"xp\":\"2,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Hitpoints\",\"quest\":\"Heroes' Quest\",\"xp\":\"3,075\"},{\"skill\":\"Hitpoints\",\"quest\":\"Recipe for Disaster/Sir Amik Varze\",\"xp\":\"4,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Grim Tales\",\"xp\":\"5,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Royal Trouble\",\"xp\":\"5,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Witch's House\",\"xp\":\"6,325\"},{\"skill\":\"Hitpoints\",\"quest\":\"Dream Mentor\",\"xp\":\"15,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Camelot training room\\n(minigame)\",\"xp\":\"20,000\"},{\"skill\":\"Hitpoints\",\"quest\":\"Mourning's End Part I\",\"xp\":\"25,000\"},{\"skill\":\"Hunter\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Hunter\",\"quest\":\"Natural history quiz\\n(miniquest)\",\"xp\":\"1,000\"},{\"skill\":\"Hunter\",\"quest\":\"The Ascent of Arceuus\",\"xp\":\"1,500\"},{\"skill\":\"Hunter\",\"quest\":\"Eagles' Peak\",\"xp\":\"2,500\"},{\"skill\":\"Hunter\",\"quest\":\"Monkey Madness II\",\"xp\":\"15,000\"},{\"skill\":\"Hunter\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Magic\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Magic\",\"quest\":\"Witch's Potion\",\"xp\":\"325\"},{\"skill\":\"Magic\",\"quest\":\"Imp Catcher\",\"xp\":\"875\"},{\"skill\":\"Magic\",\"quest\":\"Fairytale I - Growing Pains\",\"xp\":\"1,000\"},{\"skill\":\"Magic\",\"quest\":\"Spirits of the Elid\",\"xp\":\"1,000\"},{\"skill\":\"Magic\",\"quest\":\"The Giant Dwarf\",\"xp\":\"1,500\"},{\"skill\":\"Magic\",\"quest\":\"The Grand Tree\",\"xp\":\"2,150\"},{\"skill\":\"Magic\",\"quest\":\"Recipe for Disaster/Lumbridge Guide\",\"xp\":\"2,500\"},{\"skill\":\"Magic\",\"quest\":\"Horror from the Deep\",\"xp\":\"4,662\"},{\"skill\":\"Magic\",\"quest\":\"King's Ransom\",\"xp\":\"5,000\"},{\"skill\":\"Magic\",\"quest\":\"Lunar Diplomacy\",\"xp\":\"5,000\"},{\"skill\":\"Magic\",\"quest\":\"Enakhra's Lament\",\"xp\":\"7,000\"},{\"skill\":\"Magic\",\"quest\":\"Dream Mentor\",\"xp\":\"10,000\"},{\"skill\":\"Magic\",\"quest\":\"The Eyes of Glouphrie\",\"xp\":\"12,000\"},{\"skill\":\"Magic\",\"quest\":\"Swan Song\",\"xp\":\"15,000\"},{\"skill\":\"Magic\",\"quest\":\"Watchtower\",\"xp\":\"15,250\"},{\"skill\":\"Magic\",\"quest\":\"Desert Treasure\",\"xp\":\"20,000\"},{\"skill\":\"Mining\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Mining\",\"quest\":\"The Forsaken Tower\",\"xp\":\"500\"},{\"skill\":\"Mining\",\"quest\":\"Doric's Quest\",\"xp\":\"1,300\"},{\"skill\":\"Mining\",\"quest\":\"Plague City\",\"xp\":\"2,425\"},{\"skill\":\"Mining\",\"quest\":\"The Giant Dwarf\",\"xp\":\"2,500\"},{\"skill\":\"Mining\",\"quest\":\"Heroes' Quest\",\"xp\":\"2,575\"},{\"skill\":\"Mining\",\"quest\":\"Another Slice of H.A.M.\",\"xp\":\"3,000\"},{\"skill\":\"Mining\",\"quest\":\"The Lost Tribe\",\"xp\":\"3,000\"},{\"skill\":\"Mining\",\"quest\":\"Between a Rock...\",\"xp\":\"5,000\"},{\"skill\":\"Mining\",\"quest\":\"Enakhra's Lament\",\"xp\":\"7,000\"},{\"skill\":\"Mining\",\"quest\":\"Making Friends with My Arm\",\"xp\":\"10,000\"},{\"skill\":\"Mining\",\"quest\":\"The Dig Site\",\"xp\":\"15,300\"},{\"skill\":\"Mining\",\"quest\":\"Dragon Slayer II\",\"xp\":\"18,000\"},{\"skill\":\"Mining\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Prayer\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Prayer\",\"quest\":\"Rag and Bone Man I\",\"xp\":\"500\"},{\"skill\":\"Prayer\",\"quest\":\"Making History\",\"xp\":\"1,000\"},{\"skill\":\"Prayer\",\"quest\":\"Recruitment Drive\",\"xp\":\"1,000\"},{\"skill\":\"Prayer\",\"quest\":\"The Restless Ghost\",\"xp\":\"1,125\"},{\"skill\":\"Prayer\",\"quest\":\"Priest in Peril\",\"xp\":\"1,406\"},{\"skill\":\"Prayer\",\"quest\":\"Mountain Daughter\",\"xp\":\"2,000\"},{\"skill\":\"Prayer\",\"quest\":\"Ghosts Ahoy\",\"xp\":\"2,400\"},{\"skill\":\"Prayer\",\"quest\":\"Another Slice of H.A.M.\",\"xp\":\"3,000\"},{\"skill\":\"Prayer\",\"quest\":\"Rag and Bone Man II\",\"xp\":\"5,000\"},{\"skill\":\"Prayer\",\"quest\":\"The Great Brain Robbery\",\"xp\":\"6,000\"},{\"skill\":\"Prayer\",\"quest\":\"Rum Deal\",\"xp\":\"7,000\"},{\"skill\":\"Prayer\",\"quest\":\"Spirits of the Elid\",\"xp\":\"8,000\"},{\"skill\":\"Prayer\",\"quest\":\"Swan Song\",\"xp\":\"10,000\"},{\"skill\":\"Prayer\",\"quest\":\"Holy Grail\",\"xp\":\"11,000\"},{\"skill\":\"Ranged\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Ranged\",\"quest\":\"Big Chompy Bird Hunting\",\"xp\":\"735\"},{\"skill\":\"Ranged\",\"quest\":\"Recipe for Disaster/Skrach Uglogwee\",\"xp\":\"1,500\"},{\"skill\":\"Ranged\",\"quest\":\"Death to the Dorgeshuun\",\"xp\":\"2,000\"},{\"skill\":\"Ranged\",\"quest\":\"Zogre Flesh Eaters\",\"xp\":\"2,000\"},{\"skill\":\"Ranged\",\"quest\":\"Heroes' Quest\",\"xp\":\"2,075\"},{\"skill\":\"Ranged\",\"quest\":\"Horror from the Deep\",\"xp\":\"4,662.5\"},{\"skill\":\"Ranged\",\"quest\":\"Temple of Ikov\",\"xp\":\"10,500\"},{\"skill\":\"Ranged\",\"quest\":\"Chompy Bird Hunting\\n(miniquest)\",\"xp\":\"30,000\"},{\"skill\":\"Runecraft\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Runecraft\",\"quest\":\"The Ascent of Arceuus\",\"xp\":\"500\"},{\"skill\":\"Runecraft\",\"quest\":\"Enter the Abyss\\n(miniquest)\",\"xp\":\"1,000\"},{\"skill\":\"Runecraft\",\"quest\":\"The Slug Menace\",\"xp\":\"3,500\"},{\"skill\":\"Runecraft\",\"quest\":\"Devious Minds\",\"xp\":\"5,000\"},{\"skill\":\"Runecraft\",\"quest\":\"The Fremennik Exiles\",\"xp\":\"5,000\"},{\"skill\":\"Runecraft\",\"quest\":\"Lunar Diplomacy\",\"xp\":\"5,000\"},{\"skill\":\"Runecraft\",\"quest\":\"The Eyes of Glouphrie\",\"xp\":\"6,000\"},{\"skill\":\"Runecraft\",\"quest\":\"What Lies Below\",\"xp\":\"8,000\"},{\"skill\":\"Slayer\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Slayer\",\"quest\":\"Natural history quiz\\n(miniquest)\",\"xp\":\"1,000\"},{\"skill\":\"Slayer\",\"quest\":\"Recipe for Disaster/Mountain Dwarf\",\"xp\":\"1,000\"},{\"skill\":\"Slayer\",\"quest\":\"Animal Magnetism\",\"xp\":\"1,000\"},{\"skill\":\"Slayer\",\"quest\":\"A Porcine of Interest\",\"xp\":\"1,000\"},{\"skill\":\"Slayer\",\"quest\":\"The General's Shadow\\n(miniquest)\",\"xp\":\"2,000\"},{\"skill\":\"Slayer\",\"quest\":\"Royal Trouble\",\"xp\":\"5,000\"},{\"skill\":\"Slayer\",\"quest\":\"Wanted!\",\"xp\":\"5,000\"},{\"skill\":\"Slayer\",\"quest\":\"Lair of Tarn Razorlor\\n(miniquest)\",\"xp\":\"5,000\"},{\"skill\":\"Slayer\",\"quest\":\"The Fremennik Exiles\",\"xp\":\"15,000\"},{\"skill\":\"Slayer\",\"quest\":\"Monkey Madness II\",\"xp\":\"25,000\"},{\"skill\":\"Smithing\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Smithing\",\"quest\":\"The Forsaken Tower\",\"xp\":\"500\"},{\"skill\":\"Smithing\",\"quest\":\"Recipe for Disaster/Pirate Pete\",\"xp\":\"1,000\"},{\"skill\":\"Smithing\",\"quest\":\"Heroes' Quest\",\"xp\":\"2,257\"},{\"skill\":\"Smithing\",\"quest\":\"The Giant Dwarf\",\"xp\":\"2,500\"},{\"skill\":\"Smithing\",\"quest\":\"Between a Rock...\",\"xp\":\"5,000\"},{\"skill\":\"Smithing\",\"quest\":\"Elemental Workshop I\",\"xp\":\"5,000\"},{\"skill\":\"Smithing\",\"quest\":\"Devious Minds\",\"xp\":\"6,500\"},{\"skill\":\"Smithing\",\"quest\":\"Cabin Fever\",\"xp\":\"7,000\"},{\"skill\":\"Smithing\",\"quest\":\"Elemental Workshop II\",\"xp\":\"7,500\"},{\"skill\":\"Smithing\",\"quest\":\"The Knight's Sword\",\"xp\":\"12,725\"},{\"skill\":\"Smithing\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Smithing\",\"quest\":\"Dragon Slayer II\",\"xp\":\"25,000\"},{\"skill\":\"Strength\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Strength\",\"quest\":\"In Search of the Myreque\",\"xp\":\"600\"},{\"skill\":\"Strength\",\"quest\":\"In Aid of the Myreque\",\"xp\":\"2,000\"},{\"skill\":\"Strength\",\"quest\":\"Tai Bwo Wannai Trio\",\"xp\":\"2,500\"},{\"skill\":\"Strength\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Strength\",\"quest\":\"Heroes' Quest\",\"xp\":\"3,075\"},{\"skill\":\"Strength\",\"quest\":\"Troll Romance\",\"xp\":\"4,000\"},{\"skill\":\"Strength\",\"quest\":\"Horror from the Deep\",\"xp\":\"4,662.5\"},{\"skill\":\"Strength\",\"quest\":\"Scorpion Catcher\",\"xp\":\"6,625\"},{\"skill\":\"Strength\",\"quest\":\"Roving Elves\",\"xp\":\"10,000\"},{\"skill\":\"Strength\",\"quest\":\"Waterfall Quest\",\"xp\":\"13,750\"},{\"skill\":\"Strength\",\"quest\":\"Dragon Slayer I\",\"xp\":\"18,650\"},{\"skill\":\"Strength\",\"quest\":\"Camelot training room\\n(minigame)\",\"xp\":\"20,000\"},{\"skill\":\"Strength\",\"quest\":\"Haunted Mine\",\"xp\":\"22,000\"},{\"skill\":\"Thieving\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Thieving\",\"quest\":\"Tower of Life\",\"xp\":\"500\"},{\"skill\":\"Thieving\",\"quest\":\"Creature of Fenkenstrain\",\"xp\":\"1,000\"},{\"skill\":\"Thieving\",\"quest\":\"The Golem\",\"xp\":\"1,000\"},{\"skill\":\"Thieving\",\"quest\":\"The Hand in the Sand\",\"xp\":\"1,000\"},{\"skill\":\"Thieving\",\"quest\":\"Spirits of the Elid\",\"xp\":\"1,000\"},{\"skill\":\"Thieving\",\"quest\":\"Biohazard\",\"xp\":\"1,250\"},{\"skill\":\"Thieving\",\"quest\":\"The Giant Dwarf\",\"xp\":\"1,500\"},{\"skill\":\"Thieving\",\"quest\":\"Hazeel Cult\",\"xp\":\"1,500\"},{\"skill\":\"Thieving\",\"quest\":\"Tribal Totem\",\"xp\":\"1,775\"},{\"skill\":\"Thieving\",\"quest\":\"Death to the Dorgeshuun\",\"xp\":\"2,000\"},{\"skill\":\"Thieving\",\"quest\":\"The Queen of Thieves\",\"xp\":\"2,000\"},{\"skill\":\"Thieving\",\"quest\":\"Fight Arena\",\"xp\":\"2,175\"},{\"skill\":\"Thieving\",\"quest\":\"Fairytale II - Cure a Queen\",\"xp\":\"2,500\"},{\"skill\":\"Thieving\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Thieving\",\"quest\":\"The Slug Menace\",\"xp\":\"3,500\"},{\"skill\":\"Thieving\",\"quest\":\"Icthlarin's Little Helper\",\"xp\":\"4,500\"},{\"skill\":\"Thieving\",\"quest\":\"Ratcatchers\",\"xp\":\"4,500\"},{\"skill\":\"Thieving\",\"quest\":\"Darkness of Hallowvale\",\"xp\":\"6,000\"},{\"skill\":\"Thieving\",\"quest\":\"Grim Tales\",\"xp\":\"6,000\"},{\"skill\":\"Thieving\",\"quest\":\"Contact!\",\"xp\":\"7,000\"},{\"skill\":\"Thieving\",\"quest\":\"Dragon Slayer II\",\"xp\":\"15,000\"},{\"skill\":\"Thieving\",\"quest\":\"The Feud\",\"xp\":\"15,000\"},{\"skill\":\"Thieving\",\"quest\":\"Monkey Madness II\",\"xp\":\"15,000\"},{\"skill\":\"Thieving\",\"quest\":\"Mourning's End Part I\",\"xp\":\"25,000\"},{\"skill\":\"Woodcutting\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Woodcutting\",\"quest\":\"Enlightened Journey\",\"xp\":\"1,500\"},{\"skill\":\"Woodcutting\",\"quest\":\"Recipe for Disaster/Skrach Uglogwee\",\"xp\":\"1,500\"},{\"skill\":\"Woodcutting\",\"quest\":\"Heroes' Quest\",\"xp\":\"1,575\"},{\"skill\":\"Woodcutting\",\"quest\":\"Monk's Friend\",\"xp\":\"2,000\"},{\"skill\":\"Woodcutting\",\"quest\":\"Animal Magnetism\",\"xp\":\"2,500\"},{\"skill\":\"Woodcutting\",\"quest\":\"The Eyes of Glouphrie\",\"xp\":\"2,500\"},{\"skill\":\"Woodcutting\",\"quest\":\"The Fremennik Trials\",\"xp\":\"2,812\"},{\"skill\":\"Woodcutting\",\"quest\":\"Icthlarin's Little Helper\",\"xp\":\"4,000\"},{\"skill\":\"Woodcutting\",\"quest\":\"The Fremennik Isles\",\"xp\":\"10,000\"},{\"skill\":\"Woodcutting\",\"quest\":\"Grim Tales\",\"xp\":\"14,000\"},{\"skill\":\"Woodcutting\",\"quest\":\"Song of the Elves\",\"xp\":\"20,000\"},{\"skill\":\"Skills available\",\"quest\":\"Quest\",\"xp\":\"Experience\\nreward\"},{\"skill\":\"Skills available\",\"quest\":\"X Marks the Spot\",\"xp\":\"300\"},{\"skill\":\"Skills available\",\"quest\":\"Client of Kourend\",\"xp\":\"500 twice\"},{\"skill\":\"Skills available\",\"quest\":\"Fairytale II - Cure a Queen\",\"xp\":\"2,500\"},{\"skill\":\"Skills available\",\"quest\":\"A Tail of Two Cats\",\"xp\":\"2,500 twice\"},{\"skill\":\"Skills available\",\"quest\":\"The Great Brain Robbery\",\"xp\":\"5,000\"},{\"skill\":\"Skills available\",\"quest\":\"King's Ransom\",\"xp\":\"5,000\"},{\"skill\":\"Skills available\",\"quest\":\"Darkness of Hallowvale\",\"xp\":\"2,000 three times\"},{\"skill\":\"Skills available\",\"quest\":\"A Taste of Hope\",\"xp\":\"2,500 three times\"},{\"skill\":\"Skills available\",\"quest\":\"The Tourist Trap\",\"xp\":\"4,650 twice\"},{\"skill\":\"Skills available\",\"quest\":\"Architectural Alliance\\n(miniquest)\",\"xp\":\"10,000\"},{\"skill\":\"Skills available\",\"quest\":\"In Search of Knowledge\\n(miniquest)\",\"xp\":\"10,000\"},{\"skill\":\"Skills available\",\"quest\":\"Curse of the Empty Lord\\n(miniquest)\",\"xp\":\"10,000\"},{\"skill\":\"Skills available\",\"quest\":\"Shadow of the Storm\",\"xp\":\"10,000\"},{\"skill\":\"Skills available\",\"quest\":\"Contact!\",\"xp\":\"7,000 twice\"},{\"skill\":\"Skills available\",\"quest\":\"Dream Mentor\",\"xp\":\"15,000\"},{\"skill\":\"Skills available\",\"quest\":\"The Fremennik Isles\",\"xp\":\"10,000 twice\"},{\"skill\":\"Skills available\",\"quest\":\"One Small Favour\",\"xp\":\"10,000 twice\"},{\"skill\":\"Skills available\",\"quest\":\"Recipe for Disaster/The final battle\",\"xp\":\"20,000\"},{\"skill\":\"Skills available\",\"quest\":\"Legends' Quest\",\"xp\":\"7,650 four times\"},{\"skill\":\"Skills available\",\"quest\":\"Monkey Madness I\",\"xp\":\"35,000 & 20,000[2]\"},{\"skill\":\"Skills available\",\"quest\":\"Sins of the Father\",\"xp\":\"15,000 three times\"},{\"skill\":\"Skills available\",\"quest\":\"Dragon Slayer II\",\"xp\":\"25,000 four times\"},{\"skill\":\"Skills available\",\"quest\":\"Monkey Madness II\",\"xp\":\"50,000 twice\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Tsinik\Desktop\workspace\Angular\osrs-quests\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map