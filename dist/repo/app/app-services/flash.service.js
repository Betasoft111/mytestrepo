!function(){"use strict";function a(a){function b(){function b(){var b=a.flash;b&&(b.keepAfterLocationChange?b.keepAfterLocationChange=!1:delete a.flash)}a.$on("$locationChangeStart",function(){b()})}function c(b,c){a.flash={message:b,type:"success",keepAfterLocationChange:c}}function d(b,c){a.flash={message:b,type:"danger",keepAfterLocationChange:c}}var e={};return e.Success=c,e.Error=d,b(),e}angular.module("app").factory("FlashService",a)}();