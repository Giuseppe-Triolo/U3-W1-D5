var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        console.log("Credito prima della chiamata:", this.numero404());
        var costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente.");
        }
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        console.log("Credito prima della chiamata:", this.numero404());
        var costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente.");
        }
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        console.log("Credito prima della chiamata:", this.numero404());
        var costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente.");
        }
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var utente1 = new FirstUser();
utente1.ricarica(20);
utente1.chiamata(5); // chiamata di 5 minuti
console.log("Saldo residuo utente 1:", utente1.numero404());
console.log("Chiamate effettuate utente 1:", utente1.getNumeroChiamate());
utente1.azzeraChiamate();
console.log("Chiamate azzerate utente 1:", utente1.getNumeroChiamate());
var utente2 = new SecondUser();
utente2.ricarica(30);
utente2.chiamata(10); // chiamata di 10 minuti
console.log("Saldo residuo utente 2:", utente2.numero404());
console.log("Chiamate effettuate utente 2:", utente2.getNumeroChiamate());
utente2.azzeraChiamate();
console.log("Chiamate azzerate utente 2:", utente2.getNumeroChiamate());
var utente3 = new ThirdUser();
utente3.ricarica(25);
utente3.chiamata(15); //chiamata di 15 minuti
console.log("Saldo residuo utente 3:", utente3.numero404());
console.log("Chiamate effettuate utente 3:", utente3.getNumeroChiamate());
utente3.azzeraChiamate();
console.log("Chiamate azzerate utente 3:", utente3.getNumeroChiamate());
