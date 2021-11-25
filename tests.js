// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Bucles II', () => {
  it('La variables soloA y soloL deben estar definida', () => {
    expect(soloA).to.not.be.an('undefined');
    expect(soloL).to.not.be.an('undefined');
  });

  it('La variable soloA vale 7 después del bucle', () => {
    expect(soloA).to.equal(7);
  });

  it('La variable soloL vale 4 después del bucle', () => {
    expect(soloL).to.equal(4);
  });
});
