class FirstUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    console.log("Credito prima della chiamata:", this.numero404());

    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Credito insufficiente.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class SecondUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    console.log("Credito prima della chiamata:", this.numero404());

    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Credito insufficiente.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class ThirdUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    console.log("Credito prima della chiamata:", this.numero404());

    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Credito insufficiente.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const utente1 = new FirstUser();
utente1.ricarica(20);
utente1.chiamata(5); // chiamata di 5 minuti
console.log("Saldo residuo utente 1:", utente1.numero404());
console.log("Chiamate effettuate utente 1:", utente1.getNumeroChiamate());
utente1.azzeraChiamate();
console.log("Chiamate azzerate utente 1:", utente1.getNumeroChiamate());

const utente2 = new SecondUser();
utente2.ricarica(30);
utente2.chiamata(10); // chiamata di 10 minuti
console.log("Saldo residuo utente 2:", utente2.numero404());
console.log("Chiamate effettuate utente 2:", utente2.getNumeroChiamate());
utente2.azzeraChiamate();
console.log("Chiamate azzerate utente 2:", utente2.getNumeroChiamate());

const utente3 = new ThirdUser();
utente3.ricarica(25);
utente3.chiamata(15); //chiamata di 15 minuti
console.log("Saldo residuo utente 3:", utente3.numero404());
console.log("Chiamate effettuate utente 3:", utente3.getNumeroChiamate());
utente3.azzeraChiamate();
console.log("Chiamate azzerate utente 3:", utente3.getNumeroChiamate());
