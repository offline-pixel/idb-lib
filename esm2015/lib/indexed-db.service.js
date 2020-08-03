import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
IndexedDbService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IndexedDbService_Factory() { return new IndexedDbService(); }, token: IndexedDbService, providedIn: "root" });
IndexedDbService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IndexedDbService);
export { IndexedDbService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRiLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbmRleGVkLWRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBRTNCO1FBREEsZ0JBQVcsR0FBUSxFQUFHLENBQUM7SUFDUCxDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxHQUFHO1FBQ1IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JCLElBQUksTUFBVyxDQUFDO2dCQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUM5QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNaLENBQUMsQ0FBQztvQkFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0MsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pELE1BQU0s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blxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW5kZXhlZERiU2VydmljZSB7XG4gIGZldGNoRGJEYXRhOiBhbnkgPSBbIF07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHN0cmVhbShyZXMpOiBhbnkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIHdpbmRvdy5pbmRleGVkREIgKXtcbiAgICAgICAgbGV0IG9wZW5EYjogYW55O1xuICAgICAgICBjb25zdCBtYWluID0gd2luZG93LmluZGV4ZWREQi5vcGVuKHJlcy5uYW1lLCAxKTtcbiAgICAgICAgbWFpbi5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KDApO1xuICAgICAgICB9O1xuICAgICAgICBtYWluLm9uc3VjY2VzcyA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgb3BlbkRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICBvcGVuRGIub25lcnJvciA9IChkYkV2ZW50KSA9PiB7XG4gICAgICAgICAgICByZWplY3QoMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBnZXRUcmFucyA9IG9wZW5EYi50cmFuc2FjdGlvbihyZXMuc3RvcmUpO1xuICAgICAgICAgIGNvbnN0IGdldFN0b3JlID0gZ2V0VHJhbnMub2JqZWN0U3RvcmUocmVzLnN0b3JlKTtcbiAgICAgICAgICBjb25zdCBnZXRBbGxSZXEgPSBnZXRTdG9yZS5nZXRBbGwoKTtcbiAgICAgICAgICBnZXRBbGxSZXEub25lcnJvciA9IChnZXRBbGxFdmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZWplY3QoMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBnZXRBbGxSZXEub25zdWNjZXNzID0gKGdldEFsbEV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZ2V0QWxsUmVxLnJlc3VsdCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgbWFpbi5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVwZ3JhZGVEYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgdXBncmFkZVN0b3JlID0gdXBncmFkZURiLmNyZWF0ZU9iamVjdFN0b3JlKHJlcy5zdG9yZSk7XG4gICAgICAgICAgLy8gdXBncmFkZVN0b3JlLmNyZWF0ZUluZGV4KCdrZXknLCAna2V5JywgeyB1bmlxdWU6IHRydWUgfSk7XG4gICAgICAgICAgdXBncmFkZVN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAodHJhbnNhY3Rpb25FdmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmZXRjaE9iamVjdFN0b3JlID0gdXBncmFkZURiLnRyYW5zYWN0aW9uKHJlcy5zdG9yZSwgJ3JlYWR3cml0ZScpXG4gICAgICAgICAgICAub2JqZWN0U3RvcmUocmVzLnN0b3JlKTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYkRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgZmV0Y2hPYmplY3RTdG9yZS5hZGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURCKHJlcyl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICggd2luZG93LmluZGV4ZWREQiApe1xuICAgICAgICBsZXQgb3BlbkRiOiBhbnk7XG4gICAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4ocmVzLm5hbWUsIDEpO1xuICAgICAgICBtYWluLm9uZXJyb3IgPSAobWU6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgbWFpbi5vbnN1Y2Nlc3MgPSAobWU6IGFueSkgPT4ge1xuICAgICAgICAgIG9wZW5EYiA9IG1haW4ucmVzdWx0O1xuICAgICAgICAgIGNvbnN0IGFkZHJlcSA9IG9wZW5EYi50cmFuc2FjdGlvbihbcmVzLnN0b3JlXSwgJ3JlYWR3cml0ZScpXG4gICAgICAgICAgLm9iamVjdFN0b3JlKHJlcy5zdG9yZSlcbiAgICAgICAgICAucHV0KHJlcy5kYXRhLCByZXMua2V5KTtcbiAgICAgICAgICBhZGRyZXEub25lcnJvciA9IChjZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZWplY3QoMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBhZGRyZXEub25zdWNjZXNzID0gKGNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoMSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUlkKHJlcyk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICggd2luZG93LmluZGV4ZWREQiApe1xuICAgICAgICBsZXQgb3BlbkRiOiBhbnk7XG4gICAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4ocmVzLm5hbWUsIDEpO1xuICAgICAgICBtYWluLm9uZXJyb3IgPSAobWU6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgbWFpbi5vbnN1Y2Nlc3MgPSAobWU6IGFueSkgPT4ge1xuICAgICAgICAgIG9wZW5EYiA9IG1haW4ucmVzdWx0O1xuICAgICAgICAgIGNvbnN0IGRlbGV0ZVJlcSA9IG9wZW5EYi50cmFuc2FjdGlvbihbcmVzLnN0b3JlXSwgJ3JlYWR3cml0ZScpXG4gICAgICAgICAgLm9iamVjdFN0b3JlKHJlcy5zdG9yZSlcbiAgICAgICAgICAuZGVsZXRlKHJlcy5rZXkpO1xuICAgICAgICAgIGRlbGV0ZVJlcS5vbmVycm9yID0gKGNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGRlbGV0ZVJlcS5vbnN1Y2Nlc3MgPSAoY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=