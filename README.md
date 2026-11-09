# JSAQA 7-06 — Cypress

Автотесты для учебного приложения Books из репозитория Netology.

## Состав решения

- Cypress E2E-проект в отдельной папке/репозитории.
- Проверка открытия главной страницы.
- Проверки авторизации: успешный вход, пустой email, пустой пароль.
- Три сценария избранного: добавление книги, отображение в разделе Favorites, удаление из избранного.
- Повторяющиеся действия вынесены в кастомные команды `cy.login()` и `cy.mockBooksApi()`.
- Две конфигурации viewport:
  - Desktop: 1366 × 768.
  - Mobile: 390 × 844.
- Четыре npm-скрипта: headed/headless; Chrome для desktop, Electron для mobile.

## Подготовка приложения

В отдельной папке клонируйте учебное приложение:

```bash
git clone https://github.com/netology-code/jsaqa-code.git
cd jsaqa-code/booksApp
npm install
npm run server
```

В другом терминале запустите React-приложение:

```bash
npm start
```

Оно должно быть доступно по адресу `http://localhost:3000`, API — на `http://localhost:7071`.

## Установка и запуск тестов

В папке этого Cypress-проекта:

```bash
npm install
```

Запуск desktop (Chrome):

```bash
npm run cy:desktop:headed
npm run cy:desktop:headless
```

Запуск mobile (Electron):

```bash
npm run cy:mobile:headed
npm run cy:mobile:headless
```

Для Chrome должен быть установлен Google Chrome. В headed-режиме откроется Cypress Test Runner; headless-режим выполняет тесты в терминале.

## Примечание

Тесты избранного используют `cy.intercept()` для изоляции сценариев от состояния учебной базы данных. Проверяется пользовательский интерфейс и HTTP-взаимодействие с API, поэтому предварительно добавлять книги вручную не требуется.
