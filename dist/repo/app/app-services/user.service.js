!function(){"use strict";function a(a,b){function c(){return a.get("/api/users/current").then(j,k)}function d(){return a.get("/api/users").then(j,k)}function e(b){return a.get("/api/users/"+b).then(j,k)}function f(b){return a.get("/api/users/"+b).then(j,k)}function g(b){return a.post("/api/users",b).then(j,k)}function h(b){return a.put("/api/users/"+b._id,b).then(j,k)}function i(b){return a["delete"]("/api/users/"+b).then(j,k)}function j(a){return a.data}function k(a){return b.reject(a.data)}var l={};return l.GetCurrent=c,l.GetAll=d,l.GetById=e,l.GetByUsername=f,l.Create=g,l.Update=h,l.Delete=i,l}angular.module("app").factory("UserService",a)}();