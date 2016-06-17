System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhoneListController;
    return {
        setters:[],
        execute: function() {
            debugger;
            PhoneListController = (function () {
                function PhoneListController(phone) {
                    var _this = this;
                    phone.query().subscribe(function (phones) {
                        _this.phones = phones;
                    });
                    this.orderProp = 'age';
                }
                PhoneListController.$inject = ['phone'];
                return PhoneListController;
            }());
            angular.
                module('phoneList').
                component('phoneList', {
                templateUrl: 'phone-list/phone-list.template.html',
                controller: PhoneListController
            });
        }
    }
});
//# sourceMappingURL=phone-list.component.js.map