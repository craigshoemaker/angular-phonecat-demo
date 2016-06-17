System.register(['@angular/upgrade', '@angular/http', './core/phone/phone.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_1, http_1, phone_service_1;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (phone_service_1_1) {
                phone_service_1 = phone_service_1_1;
            }],
        execute: function() {
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
            upgradeAdapter.addProvider(phone_service_1.Phone);
            angular.module('core.phone')
                .factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
            upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
        }
    }
});
//# sourceMappingURL=main.js.map