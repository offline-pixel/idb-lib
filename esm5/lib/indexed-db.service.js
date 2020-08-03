import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    IndexedDbService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IndexedDbService_Factory() { return new IndexedDbService(); }, token: IndexedDbService, providedIn: "root" });
    IndexedDbService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], IndexedDbService);
    return IndexedDbService;
}());
export { IndexedDbService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRiLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbmRleGVkLWRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBRUU7UUFEQSxnQkFBVyxHQUFRLEVBQUcsQ0FBQztJQUNQLENBQUM7SUFDakIsaUNBQU0sR0FBTixVQUFPLEdBQUc7UUFBVixpQkF1Q0M7UUF0Q0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDckIsSUFBSSxRQUFXLENBQUM7Z0JBQ2hCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLO29CQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFVO29CQUMxQixRQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLFFBQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxPQUFPO3dCQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1osQ0FBQyxDQUFDO29CQUNGLElBQU0sUUFBUSxHQUFHLFFBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNwQyxTQUFTLENBQUMs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QkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUMsQ0FBQztnQkFDRixNQUFJLENBQUMsU0FBUyxHQUFHLFVBQUMsRUFBTztvQkFDdkIsUUFBTSxHQUFHLE1BQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3JCLElBQU0sU0FBUyxHQUFHLFFBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxDQUFDO3lCQUM3RCxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt5QkFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFDLEVBQU87d0JBQzFCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWixDQUFDLENBQUM7b0JBQ0YsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFDLEVBQU87d0JBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBOUZVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBK0Y1QjsyQkFwR0Q7Q0FvR0MsQUEvRkQsSUErRkM7U0EvRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbmRleGVkRGJTZXJ2aWNlIHtcbiAgZmV0Y2hEYkRhdGE6IGFueSA9IFsgXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgc3RyZWFtKHJlcyk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICggd2luZG93LmluZGV4ZWREQiApe1xuICAgICAgICBsZXQgb3BlbkRiOiBhbnk7XG4gICAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4ocmVzLm5hbWUsIDEpO1xuICAgICAgICBtYWluLm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICByZWplY3QoMCk7XG4gICAgICAgIH07XG4gICAgICAgIG1haW4ub25zdWNjZXNzID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBvcGVuRGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgIG9wZW5EYi5vbmVycm9yID0gKGRiRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGdldFRyYW5zID0gb3BlbkRiLnRyYW5zYWN0aW9uKHJlcy5zdG9yZSk7XG4gICAgICAgICAgY29uc3QgZ2V0U3RvcmUgPSBnZXRUcmFucy5vYmplY3RTdG9yZShyZXMuc3RvcmUpO1xuICAgICAgICAgIGNvbnN0IGdldEFsbFJlcSA9IGdldFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgIGdldEFsbFJlcS5vbmVycm9yID0gKGdldEFsbEV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGdldEFsbFJlcS5vbnN1Y2Nlc3MgPSAoZ2V0QWxsRXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShnZXRBbGxSZXEucmVzdWx0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBtYWluLm9udXBncmFkZW5lZWRlZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgdXBncmFkZURiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCB1cGdyYWRlU3RvcmUgPSB1cGdyYWRlRGIuY3JlYXRlT2JqZWN0U3RvcmUocmVzLnN0b3JlKTtcbiAgICAgICAgICAvLyB1cGdyYWRlU3RvcmUuY3JlYXRlSW5kZXgoJ2tleScsICdrZXknLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgICAgICB1cGdyYWRlU3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICh0cmFuc2FjdGlvbkV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoT2JqZWN0U3RvcmUgPSB1cGdyYWRlRGIudHJhbnNhY3Rpb24ocmVzLnN0b3JlLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIC5vYmplY3RTdG9yZShyZXMuc3RvcmUpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaERiRGF0YS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICBmZXRjaE9iamVjdFN0b3JlLmFkZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlREIocmVzKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCB3aW5kb3cuaW5kZXhlZERCICl7XG4gICAgICAgIGxldCBvcGVuRGI6IGFueTtcbiAgICAgICAgY29uc3QgbWFpbiA9IHdpbmRvdy5pbmRleGVkREIub3BlbihyZXMubmFtZSwgMSk7XG4gICAgICAgIG1haW4ub25lcnJvciA9IChtZTogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KDApO1xuICAgICAgICB9O1xuICAgICAgICBtYWluLm9uc3VjY2VzcyA9IChtZTogYW55KSA9PiB7XG4gICAgICAgICAgb3BlbkRiID0gbWFpbi5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgYWRkcmVxID0gb3BlbkRiLnRyYW5zYWN0aW9uKFtyZXMuc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAub2JqZWN0U3RvcmUocmVzLnN0b3JlKVxuICAgICAgICAgIC5wdXQocmVzLmRhdGEsIHJlcy5rZXkpO1xuICAgICAgICAgIGFkZHJlcS5vbmVycm9yID0gKGNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFkZHJlcS5vbnN1Y2Nlc3MgPSAoY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlSWQocmVzKTogYW55IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCB3aW5kb3cuaW5kZXhlZERCICl7XG4gICAgICAgIGxldCBvcGVuRGI6IGFueTtcbiAgICAgICAgY29uc3QgbWFpbiA9IHdpbmRvdy5pbmRleGVkREIub3BlbihyZXMubmFtZSwgMSk7XG4gICAgICAgIG1haW4ub25lcnJvciA9IChtZTogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KDApO1xuICAgICAgICB9O1xuICAgICAgICBtYWluLm9uc3VjY2VzcyA9IChtZTogYW55KSA9PiB7XG4gICAgICAgICAgb3BlbkRiID0gbWFpbi5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgZGVsZXRlUmVxID0gb3BlbkRiLnRyYW5zYWN0aW9uKFtyZXMuc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAub2JqZWN0U3RvcmUocmVzLnN0b3JlKVxuICAgICAgICAgIC5kZWxldGUocmVzLmtleSk7XG4gICAgICAgICAgZGVsZXRlUmVxLm9uZXJyb3IgPSAoY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KDApO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZGVsZXRlUmVxLm9uc3VjY2VzcyA9IChjZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKDEpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==