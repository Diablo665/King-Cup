# Карточная игра
## Описание
> Карточная игра "Кубок короля" — это интерактивное приложение, где игроки взаимодействуют с виртуальными картами, добавляя правила(при определённых картах) и выполняя различные действия.

## Технологии

- **React** — для создания пользовательского интерфейса
- **Redux** - для хранения данных и управления ими
- **CSS Modules** — для стилизации компонентов
- **JavaScript/JSX** — для логики игры

## Как поиграть

### Локально: 

1. Клонируем репозиторий: 

    ``` clone https://github.com/Diablo665/King-Cup ```

2. Загружаем необходимые файлы:
    ``` npm install ```

3. Запускаем: 
    ``` npm run start ```

---

### Онлайн:

Сайт пожно открыть по этой ссылке: [King Cup](http://kingcup.ru/) 

## Кастомные карты

### Создание кастомных карт:

1. Заходим на сайт https://custom.kingcup.ru/
2. Загружаем файл которые хотим отредактировать или создаём новый с нуля: 
3. Количество карт не ограничено.

Полная инструкция есть на сайте.

### Использование кастомных карт:

1. Зайдите на сайт.
2. Нажмите на кнопку "Загрузить свои карты".
3. Выберите файл с кастомными картами, который был создан ранее.
4. Начните игру.

---

# Структура проекта


```
│public/
├── icon.ico (Иконка страницы)
├── index.html (Страница)
├── patternCard.json (Файл-шаблон для кастомных карт)
│src/
├── components/
│   ├── Card/ (Игральная карта)
│   │   ├── Card.jsx
│   │   └── Card.module.css
│   ├── CardPanel/ (Средня панель (Счётчик карт, карты, кнопки во время игры))
│   │   ├── CardPanel.jsx
│   │   └── CardPanel.module.css
│   ├── EndCardInfo/ (Панель с информацией о картах)
│   │   ├── EndCardInfo.jsx
│   │   └── EndCardInfo.module.css
│   ├── EndGame/ (Экран окончания игры)
│   │   ├── EndGame.jsx
│   │   └── EndGame.module.css
│   ├── Header/ (Верхняя панель)
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── Instruction/(Инструкция (Отображается по по центу пока игра не начата))
│   │   ├── Instruction.jsx
│   │   └── Instruction.module.css
│   ├── LeftPanel/ (Левая панель с кнопками)
│   │   ├── LeftPanel.jsx
│   │   └── LeftPanel.module.css
│   ├── RightPanel/ (Правая панель с правилами)
│   │   ├── RightPanel.jsx
│   │   └── RightPanel.module.css
│   ├── Rule/ (Правило отображаемое в правой панели)
│   │   ├── Rule.jsx
│   │   └── Rule.module.css
│   ├── RulesAddFord/ (Окно для добавления правил (Появляется на определённых картах))
│   │   ├── RulesAddFord.jsx
│   │   └── RulesAddFord.module.css
│   ├── SelectEndCard/ (Логика выбора кастомных карт)
│   │   ├── SelectEndCard.jsx 
│   │   └── SelectEndCard.module.css
│   └── UploadInfo/ (Информация о загрузке файла)
│       ├── UploadInfo.jsx
│       └── UploadInfo.module.css
├── store/ 
│   ├── cardInfoSlice.js (Слайс для работы с картами во время игры)
│   ├── gameStatuses.js 
│   └── store.js
├── utils/ (Доп.функции)
│   └── helpers.js
├── App.jsx 
├── cards.js (Список карт)
├── index.js (Главный файл, в котором происходит рендер)
└── styles.css (Стили)

```

## Автор 

- [Diablo](https://github.com/Diablo665)

- Поддержка: support@kingcup.ru