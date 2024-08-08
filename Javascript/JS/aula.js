var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.setnumerousuario = function (_numeroUsuario) {
        this.numeroUsuario = _numeroUsuario;
    };
    Usuario.prototype.getnumerousuario = function () {
        return this.numeroUsuario;
    };
    return Usuario;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setnomeadmin = function (_nomeAdmin) {
        this.nomeAdmin = _nomeAdmin;
    };
    Admin.prototype.getnomeadmin = function () {
        return this.nomeAdmin;
    };
    return Admin;
}(Usuario));
var Admin1 = new Admin();
Admin1.setnumerousuario('1');
Admin1.setnomeadmin('Roberto');
console.log(Admin1.getnumerousuario(), Admin1.getnomeadmin());
