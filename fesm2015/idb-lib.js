import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let IndexedDbService = class IndexedDbService {
    constructor() {
        this.fetchDbData = [];
    }
    stream(res) {
        return new Promise((resolve, reject) => {
            if (window.indexedDB) {
                let openDb;
                const main = window.indexedDB.open(res.name, 1);
                main.onerror = (event) => {
                    reject(0);
                };
                main.onsuccess = (event) => {
                    openDb = event.target.result;
                    openDb.onerror = (dbEvent) => {
                        reject(0);
                    };
                    const getTrans = openDb.transaction(res.store);
                    const getStore = getTrans.objectStore(res.store);
                    const getAllReq = getStore.getAll();
                    getAllReq.onerror = (getAllEvent) => {
                        reject(0);
                    };
                    getAllReq.onsuccess = (getAllEvent) => {
                        resolve(getAllReq.result);
                    };
                };
                main.onupgradeneeded = (event) => {
                    const upgradeDb = event.target.result;
                    const upgradeStore = upgradeDb.createObjectStore(res.store);
                    // upgradeStore.createIndex('key', 'key', { unique: true });
                    upgradeStore.transaction.oncomplete = (transactionEvent) => {
                        const fetchObjectStore = upgradeDb.transaction(res.store, 'readwrite')
                            .objectStore(res.store);
                        this.fetchDbData.forEach((el) => {
                            fetchObjectStore.add(el);
                        });
                    };
                };
            }
            else {
                reject(0);
            }
        });
    }
    updateDB(res) {
        return new Promise((resolve, reject) => {
            if (window.indexedDB) {
                let openDb;
                const main = window.indexedDB.open(res.name, 1);
                main.onerror = (me) => {
                    reject(0);
                };
                main.onsuccess = (me) => {
                    openDb = main.result;
                    const addreq = openDb.transaction([res.store], 'readwrite')
                        .objectStore(res.store)
                        .put(res.data, res.key);
                    addreq.onerror = (ce) => {
                        reject(0);
                    };
                    addreq.onsuccess = (ce) => {
                        resolve(1);
                    };
                };
            }
            else {
                reject(0);
            }
        });
    }
    deleteId(res) {
        return new Promise((resolve, reject) => {
            if (window.indexedDB) {
                let openDb;
                const main = window.indexedDB.open(res.name, 1);
                main.onerror = (me) => {
                    reject(0);
                };
                main.onsuccess = (me) => {
                    openDb = main.result;
                    const deleteReq = openDb.transaction([res.store], 'readwrite')
                        .objectStore(res.store)
                        .delete(res.key);
                    deleteReq.onerror = (ce) => {
                        reject(0);
                    };
                    deleteReq.onsuccess = (ce) => {
                        resolve(1);
                    };
                };
            }
            else {
                reject(0);
            }
        });
    }
};
IndexedDbService.ɵprov = ɵɵdefineInjectable({ factory: function IndexedDbService_Factory() { return new IndexedDbService(); }, token: IndexedDbService, providedIn: "root" });
IndexedDbService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IndexedDbService);

let IndexedDbComponent = class IndexedDbComponent {
    constructor() { }
    ngOnInit() { }
};
IndexedDbComponent = __decorate([
    Component({
        selector: 'idb-lib-indexedDb',
        template: `
    &nbsp;
  `
    })
], IndexedDbComponent);

let IndexedDbModule = class IndexedDbModule {
};
IndexedDbModule = __decorate([
    NgModule({
        declarations: [IndexedDbComponent],
        imports: [],
        exports: [IndexedDbComponent]
    })
], IndexedDbModule);

/*
 * Public API Surface of indexed-db
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IndexedDbComponent, IndexedDbModule, IndexedDbService };
//# sourceMappingURL=idb-lib.js.map
