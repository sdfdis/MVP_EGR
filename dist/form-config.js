/* Куда уходят заявки с сайта.
   Заполните нужные поля и залейте файл вместе с сайтом.
   Пока поля пустые — форма работает в демо-режиме: показывает
   подтверждение, но никуда не отправляет.

   1) EMAIL — письмо на почту отдела + автоответ клиенту.
      Регистрация: web3forms.com → «Create Access Key» → на почту
      приходит ключ вида 0a1b2c3d-4e5f-6789-abcd-ef0123456789.
      Вставьте его в web3formsKey. Работает на любом хостинге,
      в том числе статическом, без сервера. До 250 заявок в месяц бесплатно.

   2) SHEET — строка в Google-таблице для сотрудника, который звонит.
      Таблица → Расширения → Apps Script → вставить скрипт из
      instructions-zayavki.md → Развернуть как веб-приложение
      («Доступ: все») → скопировать URL вида
      https://script.google.com/macros/s/AKfy.../exec
      Вставьте его в sheetUrl.

   Можно заполнить одно из двух или оба сразу. */

window.ERG_FORM = {
  web3formsKey: "37c8027d-2003-41c2-b491-25c474247a51",
  sheetUrl: "https://script.google.com/macros/s/AKfycbwYT5MV_l-NM0yQ2q3hwQhLgnw763uCWJhgdP4PLtJtHeAFh3ZSM426DU9VRVDknaqw/exec",

  mailTo: "info@ergcu.kz",
  mailSubject: "Заявка на обучение — сайт КУ ERG",

  autoReply: true,
  autoReplyFrom: "Корпоративный университет ERG"
};
