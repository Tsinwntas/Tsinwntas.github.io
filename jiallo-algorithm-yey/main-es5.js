function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAiAiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"date-container\">\n        <div class=\"date-field\">\n            <mat-form-field color=\"accent\" appearance=\"fill\">\n                <input matInput [matDatepicker]=\"datepicker\" [ngModel]=\"currDate\" (ngModelChange)=\"setDate($event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n                <mat-datepicker #datepicker color=\"primary\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"min-rounds-field\" style=\"margin-left: 10px;\">\n            <mat-form-field color=\"accent\" appearance=\"fill\">\n                <input matInput [ngModel]=\"minRounds\" (ngModelChange)=\"setMinRounds($event)\" placeholder=\"Minimum Rounds to Consider\">\n            </mat-form-field>\n        </div>\n        <div class=\"show-selection\" style=\"margin-left: 10px;\">\n            <mat-radio-group aria-label=\"Select an option\" \n            [ngModel] = \"getShowOnlySelection()\"\n            (ngModelChange) = \"setShowOnlySelection($event)\">\n                <mat-radio-button value=\"0\">Show All</mat-radio-button>\n                <mat-radio-button value=\"1\">Show Only Predictions</mat-radio-button>\n                <mat-radio-button value=\"2\">Show Only FT</mat-radio-button>\n                <mat-radio-button value=\"3\">Show Only Over/Under</mat-radio-button>\n                <mat-radio-button value=\"4\">Show Only Combo</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div class=\"show-selection\" style=\"margin-left: 10px;\">\n            <mat-radio-group aria-label=\"Select an option\" \n            [ngModel] = \"getShowAdvancedSimpleSelection()\"\n            (ngModelChange) = \"setShowAdvancedSimpleSelection($event)\">\n            <mat-radio-button value=\"0\">Show Simple</mat-radio-button>\n                <mat-radio-button value=\"1\">Show Advanced</mat-radio-button>\n          </mat-radio-group>\n        </div>\n    </div>\n    <div style=\"margin-top: 10px;\" class=\"alert alert-info\" *ngIf=\"noValidMatches()\">No data for this date.</div>\n    <div class=\"matches-info\" *ngIf=\"validMatches()\">\n        \n        <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\n        </mat-form-field>\n  \n        <table mat-table [dataSource]=\"dataSource\" matSortActive=\"round\" matSortDirection=\"desc\" class=\"mat-elevation-z8\" style=\"width: -webkit-fill-available;\" matSort>\n            <ng-container matColumnDef=\"league\" >\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> League </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: left;\"> {{match.leagueName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"home\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: right;\"> Home </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: right;\"> {{match.homeName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"round\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Round </th>\n            <td mat-cell *matCellDef=\"let match\"> {{match.round}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"score\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Score </th>\n            <td mat-cell *matCellDef=\"let match\"> {{getScoreTime(match)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"away\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Away </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: left;\"> {{match.awayName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft1\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> 1 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.ft1, 'ft_advanced', 'ft1')}\"> {{getOrDash(match.ai.ft1)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ftX\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> X </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.ftX, 'draw_advanced', 'ftX')}\"> {{getOrDash(match.ai.ftX)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft2\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> 2 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.ft2, 'ft_advanced', 'ft2')}\"> {{getOrDash(match.ai.ft2)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o15\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 1.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.o15, 'ou_advanced', 'o15')}\"> {{getOrDash(match.ai.o15)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o25\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 2.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.o25, 'ou_advanced', 'o25')}\"> {{getOrDash(match.ai.o25)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o35\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 3.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ai.o35, 'ou_advanced', 'o35')}\"> {{getOrDash(match.ai.o35)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> FT </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, simplifyFT(match), 'ft_simple')}\"> {{simplifyFT(match)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ou\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over/Under </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, simplifyOver(match), 'ou_simple')}\"> {{simplifyOver(match)}} </td>\n            </ng-container>\n        \n            <tr mat-header-row *matHeaderRowDef=\"getDisplayedColumns()\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: getDisplayedColumns();\"></tr>\n        \n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n            </tr>\n        </table>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<app-home></app-home>\r\n<!-- <app-ai></app-ai> -->";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"date-container\">\n        <div class=\"date-field\">\n            <mat-form-field color=\"accent\" appearance=\"fill\">\n                <input matInput [matDatepicker]=\"datepicker\" [ngModel]=\"currDate\" (ngModelChange)=\"setDate($event)\">\n                <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n                <mat-datepicker #datepicker color=\"primary\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"min-rounds-field\" style=\"margin-left: 10px;\">\n            <mat-form-field color=\"accent\" appearance=\"fill\">\n                <input matInput [ngModel]=\"minRounds\" (ngModelChange)=\"setMinRounds($event)\" placeholder=\"Minimum Rounds to Consider\">\n            </mat-form-field>\n        </div>\n        <div class=\"show-selection\" style=\"margin-left: 10px;\">\n            <mat-radio-group aria-label=\"Select an option\" \n            [ngModel] = \"getShowOnlySelection()\"\n            (ngModelChange) = \"setShowOnlySelection($event)\">\n                <mat-radio-button value=\"0\">Show All</mat-radio-button>\n                <mat-radio-button value=\"1\">Show Only Predictions</mat-radio-button>\n                <mat-radio-button value=\"2\">Show Only FT</mat-radio-button>\n                <mat-radio-button value=\"3\">Show Only Over/Under</mat-radio-button>\n                <mat-radio-button value=\"4\">Show Only Combo</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div class=\"show-selection\" style=\"margin-left: 10px;\">\n            <mat-radio-group aria-label=\"Select an option\" \n            [ngModel] = \"getShowAdvancedSimpleSelection()\"\n            (ngModelChange) = \"setShowAdvancedSimpleSelection($event)\">\n            <mat-radio-button value=\"0\">Show Simple</mat-radio-button>\n                <mat-radio-button value=\"1\">Show Advanced</mat-radio-button>\n          </mat-radio-group>\n        </div>\n    </div>\n    <div style=\"margin-top: 10px;\" class=\"alert alert-info\" *ngIf=\"noValidMatches()\">No data for this date.</div>\n    <div class=\"matches-info\" *ngIf=\"validMatches()\">\n        \n        <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\n        </mat-form-field>\n  \n        <table mat-table [dataSource]=\"dataSource\" matSortActive=\"round\" matSortDirection=\"desc\" class=\"mat-elevation-z8\" style=\"width: -webkit-fill-available;\" matSort>\n            <ng-container matColumnDef=\"league\" >\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> League </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: left;\"> {{match.leagueName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"home\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: right;\"> Home </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: right;\"> {{match.homeName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"round\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Round </th>\n            <td mat-cell *matCellDef=\"let match\"> {{match.round}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"score\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Score </th>\n            <td mat-cell *matCellDef=\"let match\"> {{getScoreTime(match)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"away\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Away </th>\n            <td mat-cell *matCellDef=\"let match\" style=\"text-align: left;\"> {{match.awayName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft1\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> 1 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ft1, 'ft_advanced', 'ft1')}\"> {{getOrDash(match.ft1)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ftX\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> X </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ftX, 'draw_advanced', 'ftX')}\"> {{getOrDash(match.ftX)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft2\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> 2 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.ft2, 'ft_advanced', 'ft2')}\"> {{getOrDash(match.ft2)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o15\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 1.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.o15, 'ou_advanced', 'o15')}\"> {{getOrDash(match.o15)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o25\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 2.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.o25, 'ou_advanced', 'o25')}\"> {{getOrDash(match.o25)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"o35\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over 3.5 </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, match.o35, 'ou_advanced', 'o35')}\"> {{getOrDash(match.o35)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ft\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> FT </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, simplifyFT(match), 'ft_simple')}\"> {{simplifyFT(match)}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"ou\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef> Over/Under </th>\n            <td mat-cell *matCellDef=\"let match\" [ngStyle]=\"{'background-color':getPredictionColor(match, simplifyOver(match), 'ou_simple')}\"> {{simplifyOver(match)}} </td>\n            </ng-container>\n        \n            <tr mat-header-row *matHeaderRowDef=\"getDisplayedColumns()\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: getDisplayedColumns();\"></tr>\n        \n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n            </tr>\n        </table>\n    </div>\n</div>";
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
  "./src/app/ai/ai.component.scss":
  /*!**************************************!*\
    !*** ./src/app/ai/ai.component.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppAiAiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  text-align: center;\n}\n\n.date-container {\n  display: flex;\n  margin: 15px;\n}\n\n.date-button {\n  margin-left: 10px;\n  height: 60px;\n}\n\n.mat-cell {\n  width: 10px;\n}\n\n::ng-deep .mat-column-home .mat-sort-header-container {\n  justify-content: flex-end;\n}\n\n::ng-deep .mat-column-league .mat-sort-header-container {\n  justify-content: flex-start;\n}\n\n::ng-deep .mat-column-away .mat-sort-header-container {\n  justify-content: flex-start;\n}\n\n::ng-deep .mat-sort-header-container {\n  justify-content: center;\n  text-align: center;\n}\n\n::ng-deep .mat-cell {\n  text-align: center;\n}\n\n.show-selection {\n  padding-left: 10px;\n  display: grid;\n  align-items: center;\n  border-left: 1px solid #0000002e;\n}\n\n.show-selection mat-radio-button {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWkvQzpcXFVzZXJzXFxUc2luaWtcXERlc2t0b3BcXHdvcmtzcGFjZVxcR2l0SHViXFxTb2NjZXJWaXN0YUxlYWd1ZU1pbmVcXFNvY2NlclZpc3RhTGVhZ3VlTWluZS9zcmNcXGFwcFxcYWlcXGFpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9haS9haS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKOztBRENBO0VBQ1EsMkJBQUE7QUNFUjs7QURDQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYWkvYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtaW5mbyB7XHJcbiAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbn1cclxuLmFsZXJ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uZGF0ZS1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jb2x1bW4taG9tZSAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNvbHVtbi1sZWFndWUgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNvbHVtbi1hd2F5IC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNlbGx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaG93LXNlbGVjdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMmU7XHJcbn1cclxuXHJcbi5zaG93LXNlbGVjdGlvbiBtYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iLCIuYWxlcnQtaW5mbyB7XG4gIGNvbG9yOiAjMGM1NDYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xuICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XG59XG5cbi5hbGVydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5kYXRlLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jb2x1bW4taG9tZSAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNvbHVtbi1sZWFndWUgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNvbHVtbi1hd2F5IC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hvdy1zZWxlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDJlO1xufVxuXG4uc2hvdy1zZWxlY3Rpb24gbWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ai/ai.component.ts":
  /*!************************************!*\
    !*** ./src/app/ai/ai.component.ts ***!
    \************************************/

  /*! exports provided: AiComponent */

  /***/
  function srcAppAiAiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiComponent", function () {
      return AiComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AiComponent = /*#__PURE__*/function () {
      function AiComponent(httpClient) {
        _classCallCheck(this, AiComponent);

        this.httpClient = httpClient;
        this.serialized = '';
        this.ftRange = 7;
        this.drawRange = 7;
        this.ouRange = 7;
      }

      _createClass(AiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.textFilter = " "; //"!grp"

          this.showOnlyFT = true;
          this.showOnlyOU = true;
          this.minRounds = 13;
          this.sortByFT = true;
          this.currDate = new Date();
          this.getMatchesFromDate();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.calculateSortings();
          this.sort.changes.subscribe(function (r) {
            _this.calculateSortings();

            _this.dataSource.sort = _this.sort.first;
          });
        }
      }, {
        key: "calculateSortings",
        value: function calculateSortings() {
          var _this2 = this;

          setTimeout(function () {
            _this2.serialized = _this2.sort.map(function (p) {
              return p.active;
            }).join(', ');
          }, 0);
        }
      }, {
        key: "initDatasource",
        value: function initDatasource() {
          var _this3 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.matches);

          this.dataSource.filterPredicate = function (data, filter) {
            return _this3.handleFilter(data, filter) && _this3.extendedFilter(data) && _this3.extraFilters(data);
          };

          this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
              case 'home':
                return item['homeName'];

              case 'away':
                return item['awayName'];

              case 'league':
                return item['leagueName'];

              case 'ft':
                return Math.max(item.ai['ft1'], item.ai['ft2']);

              case 'ou':
                return item.ai["o15"];

              default:
                return item[property];
            }
          };

          if (!this.textFilter || this.textFilter == "") this.textFilter = " ";
          this.dataSource.filter = this.textFilter;
        }
      }, {
        key: "handleFilter",
        value: function handleFilter(match, filter) {
          if (filter[0] == "!") return !match.leagueName.toString().trim().toLowerCase().includes(filter.substring(1));
          var keysToCheck = ["leagueName", "homeName", "awayName"];

          for (var key in keysToCheck) {
            if (match[keysToCheck[key]].toString().trim().toLowerCase().indexOf(filter) != -1) return this.extendedFilter(match) && this.extraFilters(match);
          }

          return false;
        }
      }, {
        key: "extendedFilter",
        value: function extendedFilter(match) {
          if (this.showOnlyPredictions) return this.isInFTRange(match) || this.isInOURange(match);
          if (this.showOnlyFT && this.showOnlyOU) return this.isInFTRange(match) && this.isInOURange(match);
          if (this.showOnlyFT) return this.isInFTRange(match);
          if (this.showOnlyOU) return this.isInOURange(match);
          return true;
        }
      }, {
        key: "extraFilters",
        value: function extraFilters(match) {
          if (this.minRounds && (!match.round || match.round <= this.minRounds)) return false;
          return true;
        }
      }, {
        key: "getDisplayedColumns",
        value: function getDisplayedColumns() {
          if (this.showAll) return ['league', 'round', 'home', 'score', 'away', 'ft1', 'ftX', 'ft2', 'o15', 'o25', 'o35'];
          return ['league', 'round', 'home', 'score', 'away', 'ft', 'ou'];
        }
      }, {
        key: "setDate",
        value: function setDate(date) {
          this.currDate = new Date(date);
          this.getMatchesFromDate();
        }
      }, {
        key: "getDateButtonDisplay",
        value: function getDateButtonDisplay() {
          if (!this.matches && this.currDate.getDate() == new Date().getDate() && this.currDate.getMonth() == new Date().getMonth()) {
            return "RETRIEVE";
          } else if (this.matches) {
            return "REFRESH RESULTS";
          }
        }
      }, {
        key: "getMatchesFromDate",
        value: function getMatchesFromDate() {
          var _this4 = this;

          this.httpClient.get("assets/data/ai_" + this.currDate.getDate() + "_" + (this.currDate.getMonth() + 1)).subscribe(function (data) {
            _this4.matches = data;

            _this4.initDatasource();
          }, function (err) {
            return _this4.matches = null;
          });
        }
      }, {
        key: "noValidMatches",
        value: function noValidMatches() {
          return this.matches == null;
        }
      }, {
        key: "validMatches",
        value: function validMatches() {
          return !this.noValidMatches();
        }
      }, {
        key: "getScoreTime",
        value: function getScoreTime(match) {
          return match.results ? match.results.score[0] + ":" + match.results.score[1] : "-:-";
        }
      }, {
        key: "getOrDash",
        value: function getOrDash(value) {
          return value ? value : "-";
        }
      }, {
        key: "simplifyFT",
        value: function simplifyFT(match) {
          var ft = "";
          if (match.ai.ft1 > this.ftRange) ft += "1";
          if (match.ai.ft2 > this.ftRange) ft += "2";
          if (match.ai.ftX > this.drawRange) ft += ft.length > 0 ? "X" : "";
          if (ft.length > 2) return "";
          return ft;
        }
      }, {
        key: "simplifyOver",
        value: function simplifyOver(match) {
          var ou = "";
          if (this.isInRange(match.ai.o35, this.ouRange) && match.ai.o35 > 0.5) ou += "Over 3.5";else if (this.isInRange(match.ai.o25, this.ouRange) && match.ai.o25 > 0.5) ou += "Over 2.5";else if (this.isInRange(match.ai.o15, this.ouRange) && match.ai.o15 > 0.5) ou += "Over 1.5";else if (this.isInRange(match.ai.o15, this.ouRange) && match.ai.o15 < 0.5) ou += "Under 1.5";else if (this.isInRange(match.ai.o25, this.ouRange) && match.ai.o25 < 0.5) ou += "Under 2.5";else if (this.isInRange(match.ai.o35, this.ouRange) && match.ai.o35 < 0.5) ou += "Under 3.5";
          return ou;
        }
      }, {
        key: "getPredictionColor",
        value: function getPredictionColor(match, value, type, toCheck) {
          if (!value) return "white";

          switch (type) {
            case "ft_advanced":
              return this.getColorFromOneSideRange(match, this.ftRange, value, toCheck);

            case "ft_simple":
              return this.getColorFromSimplifiedFT(match, value);

            case "ou_advanced":
              return this.getColorFromRange(match, this.ouRange, value, toCheck);

            case "ou_simple":
              return this.getColorFromSimplifiedOU(match, value);

            case "draw_advanced":
              return this.getColorFromOneSideRange(match, this.drawRange, value, toCheck);
          }
        }
      }, {
        key: "getColorFromOneSideRange",
        value: function getColorFromOneSideRange(match, range, value, toCheck) {
          if (value > range && match.results) {
            return this.getColorForIfCorrectPrediction(match, toCheck);
          } else if (value > range) {
            return "lightgray";
          }
        }
      }, {
        key: "getColorFromRange",
        value: function getColorFromRange(match, range, value, toCheck) {
          if (this.isInRange(value, range) && match.results) {
            return this.getColorForIfCorrectPrediction(match, toCheck);
          } else if (this.isInRange(value, range)) {
            return "lightgray";
          }
        }
      }, {
        key: "isInFTRange",
        value: function isInFTRange(match) {
          return match.ai.ft1 > this.ftRange || match.ai.ft2 > this.ftRange;
        }
      }, {
        key: "isInOURange",
        value: function isInOURange(match) {
          return this.isInRange(match.o15, this.ouRange) || this.isInRange(match.o25, this.ouRange) || this.isInRange(match.o35, this.ouRange);
        }
      }, {
        key: "isInRange",
        value: function isInRange(value, range) {
          return value > range || value < 1 - range;
        }
      }, {
        key: "getColorForIfCorrectPrediction",
        value: function getColorForIfCorrectPrediction(match, toCheck) {
          var result = match.results[toCheck];
          return this.getColorFromResult(result);
        }
      }, {
        key: "getColorFromResult",
        value: function getColorFromResult(result) {
          return result == 'W' ? "green" : "red";
        }
      }, {
        key: "getColorFromSimplifiedFT",
        value: function getColorFromSimplifiedFT(match, ft) {
          if (!ft || ft == "") return "white";
          if (!match.results) return "lightgray";
          var result = "-";
          Array.from(ft).forEach(function (p) {
            if (result != "W" && match.results["ft" + p] == "L") result = "L";else if (match.results["ft" + p] == "W") result = "W";
          });
          return this.getColorFromResult(result);
        }
      }, {
        key: "getColorFromSimplifiedOU",
        value: function getColorFromSimplifiedOU(match, ou) {
          if (!ou || ou == "") return "white";
          if (!match.results) return "lightgray";
          return this.getColorFromResult(match.results["o" + this.getOverNumber(ou)]);
        }
      }, {
        key: "getOverNumber",
        value: function getOverNumber(ou) {
          return parseInt((parseFloat(ou.split(" ")[1]) * 10).toString());
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value.trim().toLowerCase();
          this.textFilter = filterValue == "" ? " " : filterValue;
          this.dataSource.filter = this.textFilter;
        }
      }, {
        key: "setMinRounds",
        value: function setMinRounds(event) {
          var value = event.toString().trim().toLowerCase();
          if (value == "" || isNaN(parseFloat(value))) this.minRounds = null;else this.minRounds = parseFloat(value);
          this.dataSource.filter = this.textFilter;
        }
      }, {
        key: "getShowOnlySelection",
        value: function getShowOnlySelection() {
          if (this.showOnlyPredictions) return "1";
          if (this.showOnlyFT && this.showOnlyOU) return "4";
          if (this.showOnlyFT) return "2";
          if (this.showOnlyOU) return "3";
          return "0";
        }
      }, {
        key: "setShowOnlySelection",
        value: function setShowOnlySelection(selection) {
          switch (parseInt(selection)) {
            case 0:
              this.switchSelections(false, false, false);
              break;

            case 1:
              this.switchSelections(true, false, false);
              break;

            case 2:
              this.switchSelections(false, true, false);
              break;

            case 3:
              this.switchSelections(false, false, true);
              break;

            case 4:
              this.switchSelections(false, true, true);
              break;
          }

          this.dataSource.filter = this.textFilter;
        }
      }, {
        key: "switchSelections",
        value: function switchSelections(p, f, o) {
          this.showOnlyPredictions = p;
          this.showOnlyFT = f;
          this.showOnlyOU = o;
        }
      }, {
        key: "getShowAdvancedSimpleSelection",
        value: function getShowAdvancedSimpleSelection() {
          return this.showAll ? "1" : "0";
        }
      }, {
        key: "setShowAdvancedSimpleSelection",
        value: function setShowAdvancedSimpleSelection(selection) {
          this.showAll = selection == "1";
          this.dataSource.filter = this.textFilter;
        }
      }]);

      return AiComponent;
    }();

    AiComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], AiComponent.prototype, "sort", void 0);
    AiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ai',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ai.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ai.component.scss */
      "./src/app/ai/ai.component.scss"))["default"]]
    })], AiComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

      this.title = 'jiallo-algorithm-yey';
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


    var _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ai/ai.component */
    "./src/app/ai/ai.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__["AiComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"],
        useValue: 'en-GB'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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


    __webpack_exports__["default"] = ".alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  text-align: center;\n}\n\n.date-container {\n  display: flex;\n  margin: 15px;\n}\n\n.date-button {\n  margin-left: 10px;\n  height: 60px;\n}\n\n.mat-cell {\n  width: 10px;\n}\n\n::ng-deep .mat-column-home .mat-sort-header-container {\n  justify-content: flex-end;\n}\n\n::ng-deep .mat-column-league .mat-sort-header-container {\n  justify-content: flex-start;\n}\n\n::ng-deep .mat-column-away .mat-sort-header-container {\n  justify-content: flex-start;\n}\n\n::ng-deep .mat-sort-header-container {\n  justify-content: center;\n  text-align: center;\n}\n\n::ng-deep .mat-cell {\n  text-align: center;\n}\n\n.show-selection {\n  padding-left: 10px;\n  display: grid;\n  align-items: center;\n  border-left: 1px solid #0000002e;\n}\n\n.show-selection mat-radio-button {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFRzaW5pa1xcRGVza3RvcFxcd29ya3NwYWNlXFxHaXRIdWJcXFNvY2NlclZpc3RhTGVhZ3VlTWluZVxcU29jY2VyVmlzdGFMZWFndWVNaW5lL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksMkJBQUE7QUNFSjs7QURDQTtFQUNRLDJCQUFBO0FDRVI7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1pbmZvIHtcclxuICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcclxufVxyXG4uYWxlcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5kYXRlLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNvbHVtbi1ob21lIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY29sdW1uLWxlYWd1ZSAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY29sdW1uLWF3YXkgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2VsbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNob3ctc2VsZWN0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDAyZTtcclxufVxyXG5cclxuLnNob3ctc2VsZWN0aW9uIG1hdC1yYWRpby1idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSIsIi5hbGVydC1pbmZvIHtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbn1cblxuLmFsZXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmRhdGUtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWNvbHVtbi1ob21lIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY29sdW1uLWxlYWd1ZSAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY29sdW1uLWF3YXkgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaG93LXNlbGVjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwMmU7XG59XG5cbi5zaG93LXNlbGVjdGlvbiBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(httpClient) {
        _classCallCheck(this, HomeComponent);

        this.httpClient = httpClient;
        this.serialized = '';
        this.ftRange = 12;
        this.drawRange = 13;
        this.ouRange = 6;
        this.sortByFT = false;
        this.sortByOU = false;
        this.showOnlyPredictions = false;
        this.showOnlyFT = false;
        this.showOnlyOU = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage["preferences"]) {
            this.textFilter = "!grp";
            this.showOnlyFT = true;
            this.showOnlyOU = true;
            this.minRounds = 13;
            this.sortByFT = true;
            this.savePreferences();
          } else this.loadPreferences();

          this.currDate = new Date();
          this.getMatchesFromDate();
        }
      }, {
        key: "savePreferences",
        value: function savePreferences() {
          localStorage["preferences"] = JSON.stringify({
            ftRange: this.ftRange,
            drawRange: this.drawRange,
            ouRange: this.ouRange,
            sortByFT: this.sortByFT,
            sortByOU: this.sortByOU,
            showOnlyPredictions: this.showOnlyPredictions,
            showOnlyFT: this.showOnlyFT,
            showOnlyOU: this.showOnlyOU,
            textFilter: this.textFilter,
            showAll: this.showAll,
            minRounds: this.minRounds
          });
        }
      }, {
        key: "loadPreferences",
        value: function loadPreferences() {
          var pref = JSON.parse(localStorage["preferences"]);
          this.ftRange = pref.ftRange;
          this.drawRange = pref.drawRange;
          this.ouRange = pref.ouRange;
          this.sortByFT = pref.sortByFT;
          this.sortByOU = pref.sortByOU;
          this.showOnlyPredictions = pref.showOnlyPredictions;
          this.showOnlyFT = pref.showOnlyFT;
          this.showOnlyOU = pref.showOnlyOU;
          this.textFilter = pref.textFilter;
          this.showAll = pref.showAll;
          this.minRounds = pref.minRounds;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          this.calculateSortings();
          this.sort.changes.subscribe(function (r) {
            _this5.calculateSortings();

            _this5.dataSource.sort = _this5.sort.first;
          });
        }
      }, {
        key: "calculateSortings",
        value: function calculateSortings() {
          var _this6 = this;

          setTimeout(function () {
            _this6.serialized = _this6.sort.map(function (p) {
              return p.active;
            }).join(', ');
          }, 0);
        }
      }, {
        key: "initDatasource",
        value: function initDatasource() {
          var _this7 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.matches);

          this.dataSource.filterPredicate = function (data, filter) {
            return _this7.handleFilter(data, filter) && _this7.extendedFilter(data) && _this7.extraFilters(data);
          };

          this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
              case 'home':
                return item['homeName'];

              case 'away':
                return item['awayName'];

              case 'league':
                return item['leagueName'];

              case 'ft':
                return Math.abs(item['ft1']);

              case 'ou':
                return Math.abs(item["o15"]);

              default:
                return item[property];
            }
          };

          if (!this.textFilter || this.textFilter == "") this.textFilter = " ";
          this.dataSource.filter = this.textFilter;
        }
      }, {
        key: "handleFilter",
        value: function handleFilter(match, filter) {
          if (filter[0] == "!") return !match.leagueName.toString().trim().toLowerCase().includes(filter.substring(1));
          var keysToCheck = ["leagueName", "homeName", "awayName"];

          for (var key in keysToCheck) {
            if (match[keysToCheck[key]].toString().trim().toLowerCase().indexOf(filter) != -1) return this.extendedFilter(match) && this.extraFilters(match);
          }

          return false;
        }
      }, {
        key: "extendedFilter",
        value: function extendedFilter(match) {
          if (this.showOnlyPredictions) return this.isInRange(match.ft1, this.ftRange) || this.isInOURange(match);
          if (this.showOnlyFT && this.showOnlyOU) return this.isInRange(match.ft1, this.ftRange) && this.isInOURange(match);
          if (this.showOnlyFT) return this.isInRange(match.ft1, this.ftRange);
          if (this.showOnlyOU) return this.isInOURange(match);
          return true;
        }
      }, {
        key: "extraFilters",
        value: function extraFilters(match) {
          if (this.minRounds && (!match.round || match.round <= this.minRounds)) return false;
          return true;
        }
      }, {
        key: "getDisplayedColumns",
        value: function getDisplayedColumns() {
          if (this.showAll) return ['league', 'round', 'home', 'score', 'away', 'ft1', 'ftX', 'ft2', 'o15', 'o25', 'o35'];
          return ['league', 'round', 'home', 'score', 'away', 'ft', 'ou'];
        }
      }, {
        key: "setDate",
        value: function setDate(date) {
          this.currDate = new Date(date);
          this.getMatchesFromDate();
        }
      }, {
        key: "getDateButtonDisplay",
        value: function getDateButtonDisplay() {
          if (!this.matches && this.currDate.getDate() == new Date().getDate() && this.currDate.getMonth() == new Date().getMonth()) {
            return "RETRIEVE";
          } else if (this.matches) {
            return "REFRESH RESULTS";
          }
        }
      }, {
        key: "getMatchesFromDate",
        value: function getMatchesFromDate() {
          var _this8 = this;

          this.httpClient.get("assets/data/matches_" + this.currDate.getDate() + "_" + (this.currDate.getMonth() + 1)).subscribe(function (data) {
            _this8.matches = data;

            _this8.matches.forEach(function (m) {
              _this8.setResults(m);
            });

            _this8.initDatasource();
          }, function (err) {
            return _this8.matches = null;
          });
        }
      }, {
        key: "noValidMatches",
        value: function noValidMatches() {
          return this.matches == null;
        }
      }, {
        key: "validMatches",
        value: function validMatches() {
          return !this.noValidMatches();
        }
      }, {
        key: "getScoreTime",
        value: function getScoreTime(match) {
          return match.results ? match.results.score[0] + ":" + match.results.score[1] : "-:-";
        }
      }, {
        key: "getOrDash",
        value: function getOrDash(value) {
          return value ? value : "-";
        }
      }, {
        key: "simplifyFT",
        value: function simplifyFT(match) {
          var ft = "";
          if (this.isInRange(match.ft1, this.ftRange, true)) ft += "1";else if (this.isInRange(match.ft2, this.ftRange, true)) ft += "2";else if (this.isInRange(match.ft1, this.ftRange)) ft += "2X";else if (this.isInRange(match.ft2, this.ftRange)) ft += "1X";
          if (this.isInRange(match.ftX, this.drawRange, true)) ft += ft.length == 1 ? "X" : "";
          return ft;
        }
      }, {
        key: "simplifyOver",
        value: function simplifyOver(match) {
          var ou = "";
          if (this.isInRange(match.o35, this.ouRange) && match.o35 > 0) ou += "Over 3.5";else if (this.isInRange(match.o25, this.ouRange) && match.o25 > 0) ou += "Over 2.5";else if (this.isInRange(match.o15, this.ouRange) && match.o15 > 0) ou += "Over 1.5";else if (this.isInRange(match.o15, this.ouRange) && match.o15 < 0) ou += "Under 1.5";else if (this.isInRange(match.o25, this.ouRange) && match.o25 < 0) ou += "Under 2.5";else if (this.isInRange(match.o35, this.ouRange) && match.o35 < 0) ou += "Under 3.5";
          return ou;
        }
      }, {
        key: "getPredictionColor",
        value: function getPredictionColor(match, value, type, toCheck) {
          if (!value) return "white";

          switch (type) {
            case "ft_advanced":
              return this.getColorFromRange(match, this.ftRange, value, toCheck);

            case "ft_simple":
              return this.getColorFromSimplifiedFT(match, value);

            case "ou_advanced":
              return this.getColorFromRange(match, this.ouRange, value, toCheck);

            case "ou_simple":
              return this.getColorFromSimplifiedOU(match, value);

            case "draw_advanced":
              return this.getColorFromRange(match, this.drawRange, value, toCheck);
          }
        }
      }, {
        key: "getColorFromRange",
        value: function getColorFromRange(match, range, value, toCheck) {
          if (this.isInRange(value, range) && match.results) {
            return this.getColorForIfCorrectPrediction(match, toCheck);
          } else if (this.isInRange(value, range)) {
            return "lightgray";
          }
        }
      }, {
        key: "isInOURange",
        value: function isInOURange(match) {
          return this.isInRange(match.o15, this.ouRange) || this.isInRange(match.o25, this.ouRange) || this.isInRange(match.o35, this.ouRange);
        }
      }, {
        key: "isInRange",
        value: function isInRange(value, range, positivesOnly) {
          return Math.abs(value) > range && (!positivesOnly || value > 0);
        }
      }, {
        key: "getColorForIfCorrectPrediction",
        value: function getColorForIfCorrectPrediction(match, toCheck) {
          var result = match.results[toCheck];
          return this.getColorFromResult(result);
        }
      }, {
        key: "getColorFromResult",
        value: function getColorFromResult(result) {
          return result == 'W' ? "green" : "red";
        }
      }, {
        key: "getColorFromSimplifiedFT",
        value: function getColorFromSimplifiedFT(match, ft) {
          if (!ft || ft == "") return "white";
          if (!match.results) return "lightgray";
          var result = "-";
          var score = match.results.score;
          Array.from(ft).forEach(function (p) {
            var currResult = "";

            switch (p) {
              case '1':
                currResult = score[0] > score[1] ? "W" : "L";
                break;

              case 'X':
                currResult = score[0] == score[1] ? "W" : "L";
                break;

              case '2':
                currResult = score[0] < score[1] ? "W" : "L";
                break;
            }

            if (result != "W" || currResult == "W") result = currResult;
          });
          return this.getColorFromResult(result);
        }
      }, {
        key: "getColorFromSimplifiedOU",
        value: function getColorFromSimplifiedOU(match, ou) {
          if (!ou || ou == "") return "white";
          if (!match.results) return "lightgray";
          return this.getColorFromResult(match.results["o" + this.getOverNumber(ou)]);
        }
      }, {
        key: "getOverNumber",
        value: function getOverNumber(ou) {
          return parseInt((parseFloat(ou.split(" ")[1]) * 10).toString());
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value.trim().toLowerCase();
          this.textFilter = filterValue == "" ? " " : filterValue;
          this.dataSource.filter = this.textFilter;
          this.savePreferences();
        }
      }, {
        key: "setMinRounds",
        value: function setMinRounds(event) {
          var value = event.toString().trim().toLowerCase();
          if (value == "" || isNaN(parseFloat(value))) this.minRounds = null;else this.minRounds = parseFloat(value);
          this.dataSource.filter = this.textFilter;
          this.savePreferences();
        }
      }, {
        key: "getShowOnlySelection",
        value: function getShowOnlySelection() {
          if (this.showOnlyPredictions) return "1";
          if (this.showOnlyFT && this.showOnlyOU) return "4";
          if (this.showOnlyFT) return "2";
          if (this.showOnlyOU) return "3";
          return "0";
        }
      }, {
        key: "setShowOnlySelection",
        value: function setShowOnlySelection(selection) {
          switch (parseInt(selection)) {
            case 0:
              this.switchSelections(false, false, false);
              break;

            case 1:
              this.switchSelections(true, false, false);
              break;

            case 2:
              this.switchSelections(false, true, false);
              break;

            case 3:
              this.switchSelections(false, false, true);
              break;

            case 4:
              this.switchSelections(false, true, true);
              break;
          }

          this.dataSource.filter = this.textFilter;
          this.savePreferences();
        }
      }, {
        key: "switchSelections",
        value: function switchSelections(p, f, o) {
          this.showOnlyPredictions = p;
          this.showOnlyFT = f;
          this.showOnlyOU = o;
        }
      }, {
        key: "getShowAdvancedSimpleSelection",
        value: function getShowAdvancedSimpleSelection() {
          return this.showAll ? "1" : "0";
        }
      }, {
        key: "setShowAdvancedSimpleSelection",
        value: function setShowAdvancedSimpleSelection(selection) {
          this.showAll = selection == "1";
          this.dataSource.filter = this.textFilter;
          this.savePreferences();
        }
      }, {
        key: "setResults",
        value: function setResults(match) {
          if (!match.results) return;
          var score = match.results.score;
          match.results.ft1 = this.isValidFTPrediction(match.ft1) ? (score[0] - score[1]) * match.ft1 > 0 ? 'W' : 'L' : '-';
          match.results.ftX = this.isValidDrawPrediction(match.ftX) ? score[0] == score[1] && match.ftX > 0 || score[0] != score[1] && match.ftX < 0 ? 'W' : 'L' : '-';
          match.results.ft2 = this.isValidFTPrediction(match.ft2) ? (score[1] - score[0]) * match.ft2 > 0 ? 'W' : 'L' : '-';
          match.results.o15 = this.isValidOverPrediction(match.o15) ? (score[0] + score[1] - 1.5) * match.o15 > 0 ? 'W' : 'L' : '-';
          match.results.o25 = this.isValidOverPrediction(match.o25) ? (score[0] + score[1] - 2.5) * match.o25 > 0 ? 'W' : 'L' : '-';
          match.results.o35 = this.isValidOverPrediction(match.o35) ? (score[0] + score[1] - 3.5) * match.o35 > 0 ? 'W' : 'L' : '-';
        }
      }, {
        key: "isValidFTPrediction",
        value: function isValidFTPrediction(value) {
          return this.isInRange(value, this.ftRange);
        }
      }, {
        key: "isValidDrawPrediction",
        value: function isValidDrawPrediction(value) {
          return this.isInRange(value, this.drawRange);
        }
      }, {
        key: "isValidOverPrediction",
        value: function isValidOverPrediction(value) {
          return this.isInRange(value, this.ouRange);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], HomeComponent.prototype, "sort", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
    /*! C:\Users\Tsinik\Desktop\workspace\GitHub\SoccerVistaLeagueMine\SoccerVistaLeagueMine\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map