function createLukiHTML(body) {
  return `
    <p>
      <b>Prawdziwy email klienta znajduje się poniżej. Program automatycznie ustawia, że wszystkie maile są wysyłane z ramotOgrody@gmail.com</b>
    </p>
    <p><b>Imię klienta:</b> ${body.imie}</p>
    <p><b>Email klienta:</b> ${body.email}</p>
    <p><b>Telefon klienta:</b> ${body.telefon}</p>
    <p><b>Miejsce wykonania usługi:</b> ${body.miejsce}</p>
    <p><b>Typ usługi:</b> ${body.usluga}</p>
    <p><b>Dodatkowe informacje:</b> ${body.informacje}</p>`;
}
function createMatiHTML(body) {
  return `
    <p>
      <b>Prawdziwy email klienta znajduje się poniżej. Program automatycznie ustawia, że wszystkie maile są wysyłane z ramotOgrody@gmail.com</b>
    </p>
    <p><b>Imię:</b> ${body.imie}</p>
    <p><b>Nazwisko:</b> ${body.nazwisko}</p>
    <p><b>Email:</b> ${body.email}</p>
    <p><b>Telefon:</b> ${body.telefon}</p> 
    <p><b>Wiadomość:</b> ${body.informacje}</p>`;
}
const createLukiSubject = (body) => `${body.imie}. ${body.miejsce}. ${body.usluga}`;
const createMatiSubject = (body) => `${body.imie}. ${body.nazwisko}. ${body.email}`;

const email = {
  createLukiHTML: createLukiHTML,
  createMatiHTML: createMatiHTML,
  createLukiSubject: createLukiSubject,
  createMatiSubject: createMatiSubject,
};

module.exports = email;
