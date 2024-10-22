Целью этой работы является не только создание функционального и эстетически красивого пользовательского интерфейса, но и развитие навыков анализа, проектирования и реализации веб-приложения с использованием современных технологий и методологий разработки.

Задачи проекта:
  - Разработка пользовательского интерфейса с адаптивным дизайном и реализация функциональности 
  - Интеграция с API для получения данных
  - Проведение теоретического обзора и анализа литературы
  - Поиск и анализ академических статей, книг и онлайн-ресурсов 
  - Систематизация полученной информации
  - Оценка достоверности и актуальности источников информации
  - Оценка результатов и формулирование выводов
  - Анализ полученных результатов 
  - Сравнительный анализ существующих подходов и рекомендации по их применению в практике

Техническое задание
Проект SneakMax представляет собой веб-приложение, разработанное для любителей кроссовок, цель которого  предоставить пользователям удобный интерфейс для просмотра, поиска и приобретения различных моделей кроссовок. В данном техническом задании определены основные требования и функциональность, необходимые для успешной реализации проекта.

Описание проекта SneakMax 
SneakMax - это веб-приложение, включающее главную страницу с различными секциями, страницу корзины для оформления заказов и страницу карточки товара с подробной информацией о продукте.

Основной функционал 
Главная страница:
Главная секция: Простой блок с небольшой информацией о сайте.
Каталог: Список товаров с возможностью фильтрации по полу, размеру и цене от и до. Товары выводятся по 6 штук, с кнопкой для подгрузки еще 6 товаров.
Пара слов о нас: Блок с текстом о компании.
Мы подберем идеальную пару для вас: Блок с формой для подбора кроссовок - 
Наша команда: Блок с карточками команды, данные загружаются через get запрос.
Часто задаваемые вопросы: Блок с аккордеоном для отображения вопросов и ответов.
Контакты: Контактная информация и карта с расположением.
Есть вопросы?: Форма для отправки имени и номера телефона для связи.

Страница корзины 
Список добавленных в корзину товаров.
Форма для ввода имени, телефона и почты для оформления заказа через post-запрос.
Удаление всех товаров из корзины после успешной отправки заказа.

Страница карточки товара 
Подробная информация о товаре.
Кнопка для добавления товара в корзину.

API и бэкенд
Использование mokky.dev для управления данными о продуктах и заказах.
RESTful API для взаимодействия фронтенда с бэкендом.

Технологии

Frontend:
  - React
  - Redux Toolkit для управления состоянием
  - React Router для маршрутизации
  - TypeScript
  - Ghakra ui slider для фильтрации по цене
  - Axios для HTTP-запросов к API
  - css
    
Бэкенд:
  - mokky.dev для управления данными о продуктах и заказах
  - RESTful API для взаимодействия с фронтендом

ЭТАПЫ РАЗРАБОТКИ
Подготовка

Для развертывания приложения использовался инструмент сборки Vite. Данный инструмент был выбран по причине, что он обеспечивает быстрый процесс разработки современных веб-проектов, имеет собственный dev-сервер и поддерживается всеми браузера. 

Верстка

Создание Layout компонента 
Для обеспечения единообразия в структуре страниц был разработан Layout компонент, который включает основные элементы интерфейса, такие как header и footer. Этот подход позволяет избежать повторения кода и предоставляет обёртку для каждой страницы приложения.


Разработка переиспользуемых компонентов
Для повторяющихся элементов интерфейса были созданы переиспользуемые компоненты, такие как карточка с товаром, карточка с членами команды и блок аккордиона с вопросами. Это позволяет эффективно использовать компонентный подход при верстке и дальнейшей разработке приложения.


Верстка главной страницы 
На главной странице размещен простой блок с небольшой информацией о сайте. Этот блок предназначен для первичного взаимодействия с посетителями, представляет краткое описание и ключевые аспекты деятельности компании. Верстка этого блока включает:
  Заголовок с описанием сайта.
  Краткое описание основной цели и предложений сайта.
  Дизайн, ориентированный на привлечение внимания и удобство восприятия.
  В разделе Каталог товаров реализован список товаров с функциональностью фильтрации. Ключевые элементы верстки включают:
  Список карточек товаров, отображающих изображение, название и цену.
  Форма для фильтрации товаров по полу, размеру и цене (реализованная с использованием chakra ui slider для ползунка цены).
  Реализация пагинации для пошаговой загрузки товаров (по 6 товаров на страницу с кнопкой "Показать еще").
  Блок секции "Пара слов о нас" содержит текстовое описание компании, её миссии и ценностей. Этот блок является частью формирования имиджа и делает акцент на преимуществах и уникальности предложений компании.

  В блоке “Мы подберем идеальную пару для вас” расположена форма для подбора кроссовок. Она предоставляет пользователям возможность указать предпочтительные параметры для подбора товара. Верстка включает:
  Форма с полями для выбора параметров (тип, размер и возможность написать свои предпочтения).
  Кнопка для отправки данных формы с целью получения рекомендаций.
  На странице "Наша команда" представлен блок с карточками сотрудников или ключевых членов команды.
  Секция "Часто задаваемые вопросы" содержит блок с аккордеоном для отображения вопросов и ответов. Этот блок обеспечивает пользователей необходимой информацией и помогает устранить возможные недоразумения.        
  Верстка включает:
  Аккордеонные панели, открывающиеся по клику на вопрос и показывающие соответствующий ответ.
  Оформление, способствующее удобному и интуитивно понятному взаимодействию с контентом.
  В разделе контактов представлена контактная информация и карта с расположением. Этот раздел обеспечивает пользователей всей необходимой контактной информацией для связи с компанией. Верстка включает:
  Карта с местоположением компании и маркерами.
  Информация о почтовом адресе, телефоне и электронной почте компании.
  Секция "Есть вопросы?" содержит форму для отправки имени и номера телефона для связи. Этот блок предназначен для упрощения процесса связи с потенциальными клиентами. Верстка включает:
  Форма с полями для ввода имени и номера телефона.
  Кнопка для отправки формы и инициирования контакта с компанией.
  
  Верстка страницы корзины
  На странице корзины был подготовлен переиспользуемый компонент для отображения выбранных товаров пользователя. Также была разработана форма для ввода персональных данных (имя, телефон, почта) для оформления      заказа, а также компонент для отображения информации о успешном оформлении заказа.

  Верстка страницы карточки товара
  Страница карточки товара была сверстана с учётом детального отображения информации о товаре, включая его характеристики и изображения. На этой странице также была добавлена кнопка для добавления в корзину, что   позволяет пользователям легко управлять выбранными товарами.


  Организация структуры проекта
  Структура проекта организована таким образом, что каждый компонент содержит файлы с расширениями .tsx для кода компонента и .scss для стилей. Этот подход способствует логической и физической группировке          компонентов и стилей, обеспечивая чистоту и порядок в проекте.


Интеграция с API и работа со стейт менеджером

Добавление данных о кроссовках и команде в mokky.dev 
После подготовки всех компонентов , началась работа над формированием данных интернет-магазина. В mokky.dev был создан проект и добавлены два ресурса , позволяющие получить данные по кроссовкам и команде. Данные эндпоинты были протестированы в программе Postman.
 
Добавление Redux Toolkit для работы с данными 

Для обеспечения эффективного управления состоянием приложения и удобного взаимодействия с данными, полученными через API на mokky.dev, в проект была интегрирована библиотека Redux Toolkit. Этот инструментарий предоставляет современные подходы к управлению состоянием, упрощая разработку и сопровождение приложения.

Создание основного стора Redux
На первом этапе работы был создан и настроен основной стор Redux. Он представляет собой центральное хранилище данных приложения, где будут храниться информация о кроссовках, состав команды и другие необходимые данные.

Создание слайсов для данных о кроссовках и команд
Для каждой сущности был создан отдельный слайс Redux. Слайс представляет собой модуль, содержащий reducer-функции для изменения состояния и actions для взаимодействия с данными. 

Для выполнения асинхронных операций, таких как получение данных с сервера, использовалась функция createAsyncThunk. Она позволяет создавать thunk-функции, автоматически обрабатывающие статусы выполнения запросов (например, загрузка, успешное выполнение, ошибка) и изменяющие состояние приложения в соответствии с этими статусами.



Обработка данных после получения с сервера

После успешного выполнения запросов данные о кроссовках и команде сохраняются в состоянии Redux. Они могут быть легко доступны через соответствующие селекторы и использованы в компонентах приложения для дальнейшей обработки и отображения.

Формирование данных для страницы корзины

Для эффективного управления состоянием данных пользовательской корзины в интернет-магазине был разработан и интегрирован слайс cartSlice.


Слайс cart инициализируется с начальным состоянием, включающим пустой массив items, представляющий товары, добавленные в корзину текущим пользователем. В дополнение к списку товаров, состояние включает поля для управления текущим статусом операций (status) и ошибками (error), что позволяет эффективно управлять жизненным циклом запросов к серверу.

Для передачи данных о корзине на сервер и их последующей регистрации была разработана и интегрирована асинхронная thunk-функция. 

Эта функция использует библиотеку Axios для выполнения POST-запроса на указанный эндпоинт /mokky.dev/cart, передавая текущее состояние корзины в виде параметров запроса. Процесс отправки данных на сервер асинхронно обрабатывается, что обеспечивает плавный пользовательский опыт без блокировки интерфейса.

Слайс cart активно используется в компонентах пользовательского интерфейса для управления состоянием корзины и взаимодействия с данными. Например, при добавлении товара в корзину, соответствующий reducer-экшн addItem вызывается для добавления товара в массив items, который затем автоматически обновляет интерфейс приложения благодаря механизму реактивности Redux.

На странице корзины данные о добавленных товарах отображаются с использованием селектора, который извлекает текущий список товаров из состояния Redux. Это позволяет динамически отображать содержимое корзины, обновляя его при каждом изменении состояния.

Разработанные слайсы обеспечивают надежное хранение данных о добавленных товарах, их передачу на сервер и обратное получение для отображения на странице корзины. Это позволяет пользователю взаимодействовать с корзиной эффективно и безопасно, с минимальными задержками и ошибками в работе интерфейса.


Настройка роутинга 
Настройка навигации по приложению


Для обеспечения навигации по различным страницам веб-приложения была выбрана и интегрирована библиотека react-router-dom, предоставляющая мощные инструменты для реализации динамической маршрутизации в React приложениях. Использование react-router-dom позволяет эффективно управлять переходами между различными представлениями приложения без необходимости полной перезагрузки страницы, что существенно улучшает пользовательский опыт.

Причины, по которым была выбрана данная библиотека следующие: 

Удобство и гибкость: Библиотека предоставляет простой и гибкий способ управления навигацией в приложении. Разработчики могут легко определять и изменять маршруты, а также настраивать поведение навигационных элементов.

Поддержка динамических маршрутов: react-router-dom позволяет использовать динамические параметры в маршрутах, что особенно полезно при создании страниц с динамическим контентом, например, страниц товаров с уникальными идентификаторами.

Обработка ошибок и редиректов: Библиотека предоставляет механизмы для обработки ошибочных маршрутов (Route с path="*" для обработки 404 ошибок) и для реализации редиректов между страницами.

После добавления библиотеки “react-router-dom”  в App.tsx использованы следующие компоненты:


BrowserRouter: Этот компонент предоставляет контекст маршрутизации для всего приложения. Он обеспечивает способность React компонентам взаимодействовать с текущим URL в браузере.

Layout: Компонент Layout играет роль единого шаблона для всех страниц приложения. Он включает в себя общие элементы дизайна, такие как header и footer, что способствует единообразию интерфейса и повышает удобство использования.

Routes и Route: Routes представляет собой контейнер для определения всех маршрутов приложения. Route используется для сопоставления конкретного пути URL с соответствующим компонентом React. 
NotFound: Этот компонент отображает страницу с информацией о том, что запрашиваемая страница не найдена. Он используется для улучшения пользовательского опыта при попытке доступа к недействительным маршрутам.

В приведенном коде используются различные маршруты (path), включая главную страницу ("/"), страницу корзины ("/cart") и обработку всех остальных маршрутов ("*").


Использование библиотеки react-router-dom обеспечивает эффективное управление навигацией в React приложениях, поддерживая высокую производительность и удобство использования для конечных пользователей. Это ключевой инструмент для создания современных веб-приложений, которые предоставляют пользователям плавный и интуитивно понятный пользовательский интерфейс.

Фильтрация кроссовок


Функциональность фильтрации кроссовок на главной странице интернет-магазина играет ключевую роль в улучшении пользовательского опыта, позволяя пользователям находить и выбирать товары в соответствии с их предпочтениями и требованиями. Для реализации данной задачи были выполнены следующие шаги.

Реализация фильтрации на стороне клиента с учетом заданных критериев.

Также был интегрирован слайдер для фильтрации по цене с помощью  библиотеки chakra ui slider. Данная библиотека  предоставляет готовое решение для создания интерактивного слайдера и позволяет пользователям выбирать диапазон цен с помощью плавного перемещения ползунка, что делает процесс выбора более интуитивно понятным и удобным.

