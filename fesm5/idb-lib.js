import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var IndexedDbService = /** @class */ (function () {
    function IndexedDbService() {
        this.fetchDbData = [];
    }
    IndexedDbService.prototype.stream = function (res) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (window.indexedDB) {
                var openDb_1;
                var main = window.indexedDB.open(res.name, 1);
                main.onerror = function (event) {
                    reject(0);
                };
                main.onsuccess = function (event) {
                    openDb_1 = event.target.result;
                    openDb_1.onerror = function (dbEvent) {
                        reject(0);
                    };
                    var getTrans = openDb_1.transaction(res.store);
                    var getStore = getTrans.objectStore(res.store);
                    var getAllReq = getStore.getAll();
                    getAllReq.onerror = function (getAllEvent) {
                        reject(0);
                    };
                    getAllReq.onsuccess = function (getAllEvent) {
                        resolve(getAllReq.result);
                    };
                };
                main.onupgradeneeded = function (event) {
                    var upgradeDb = event.target.result;
                    var upgradeStore = upgradeDb.createObjectStore(res.store);
                    // upgradeStore.createIndex('key', 'key', { unique: true });
                    upgradeStore.transaction.oncomplete = function (transactionEvent) {
                        var fetchObjectStore = upgradeDb.transaction(res.store, 'readwrite')
                            .objectStore(res.store);
                        _this.fetchDbData.forEach(function (el) {
                            fetchObjectStore.add(el);
                        });
                    };
                };
            }
            else {
                reject(0);
            }
        });
    };
    IndexedDbService.prototype.updateDB = function (res) {
        return new Promise(function (resolve, reject) {
            if (window.indexedDB) {
                var openDb_2;
                var main_1 = window.indexedDB.open(res.name, 1);
                main_1.onerror = function (me) {
                    reject(0);
                };
                main_1.onsuccess = function (me) {
                    openDb_2 = main_1.result;
                    var addreq = openDb_2.transaction([res.store], 'readwrite')
                        .objectStore(res.store)
                        .put(res.data, res.key);
                    addreq.onerror = function (ce) {
                        reject(0);
                    };
                    addreq.onsuccess = function (ce) {
                        resolve(1);
                    };
                };
            }
            else {
                reject(0);
            }
        });
    };
    IndexedDbService.prototype.deleteId = function (res) {
        return new Promise(function (resolve, reject) {
            if (window.indexedDB) {
                var openDb_3;
                var main_2 = window.indexedDB.open(res.name, 1);
                main_2.onerror = function (me) {
                    reject(0);
                };
                main_2.onsuccess = function (me) {
                    openDb_3 = main_2.result;
                    var deleteReq = openDb_3.transaction([res.store], 'readwrite')
                        .objectStore(res.store)
                        .delete(res.key);
                    deleteReq.onerror = function (ce) {
                        reject(0);
                    };
                    deleteReq.onsuccess = function (ce) {
                        resolve(1);
                    };
                };
            }
            else {
                reject(0);
            }
        });
    };
    IndexedDbService.ɵprov = ɵɵdefineInjectable({ factory: function IndexedDbService_Factory() { return new IndexedDbService(); }, token: IndexedDbService, providedIn: "root" });
    IndexedDbService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], IndexedDbService);
    return IndexedDbService;
}());

var IndexedDbComponent = /** @class */ (function () {
    function IndexedDbComponent() {
    }
    IndexedDbComponent.prototype.ngOnInit = function () { };
    IndexedDbComponent = __decorate([
        Component({
            selector: 'idb-lib-indexedDb',
            template: "\n    &nbsp;\n  "
        })
    ], IndexedDbComponent);
    return IndexedDbComponent;
}());

var IndexedDbModule = /** @class */ (function () {
    function IndexedDbModule() {
    }
    IndexedDbModule = __decorate([
        NgModule({
            declarations: [IndexedDbComponent],
            imports: [],
            exports: [IndexedDbComponent]
        })
    ], IndexedDbModule);
    return IndexedDbModule;
}());

/*
 * Public API Surface of indexed-db
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IndexedDbComponent, IndexedDbModule, IndexedDbService };
//# sourceMappingURL=idb-lib.js.map
