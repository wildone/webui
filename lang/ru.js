var lang = [
	"Торрент файлы||*.torrent||Все файлы (*.*)||*.*||",
	"Настройки",
	"OK",
	"Отмена",
	"Язык:",
	"Конфиденциальность",
	"Автопроверка обновлений",
	"Обновлять до beta версий",
	"Отправлять анонимную информацию при проверке обновлений",
	"При загрузке",
	".!ut для незавершенных файлов",
	"Размещать все файлы сразу",
	"Запретить спящий режим во время загрузки",
	"Подтверждать удаление торрентов",
	"Чередовать цвета фона списка",
	"Текущая скорость в заголовке",
	"При добавлении нового торрента",
	"Не запускать загрузки автоматически",
	"Расположение загруженных файлов",
	"Помещать загрузки в:",
	"Перемещать завершенные загрузки в:",
	"Добавить торрентам метку",
	"Перемещать загрузки только из папки по умолчанию",
	"Местонахождение .torrent файлов",
	"Хранить .torrent файлы в:",
	"Перемещать .torrent файлы завершенных задач в:",
	"Автозагрузка .torrent файлов из:",
	"Удалять загруженные",
	"Порт",
	"Порт входящих соединений:",
	"Случайный",
	"Случайный порт при запуске",
	"Включить UPnP переадресацию",
	"Включить NAT-PMP переадресацию",
	"Прокси-сервер",
	"Тип:",
	"Прокси:",
	"Порт:",
	"Учетная запись",
	"Логин:",
	"Пароль:",
	"Использовать прокси-сервер для P2P соединений",
	"В исключения брандмауэра",
	"Общий лимит отдачи",
	"Ограничить до (кб/с): [0 неограниченно]",
	"Авторежим",
	"Альтернативная скорость если нет загрузок (кб/с):",
	"Общий лимит загрузки",
	"Ограничить до (кб/с): [0 неограниченно]",
	"Количество соединений",
	"Общее максимальное количество соединений:",
	"Максимум присоединенных пиров для одного торрента:",
	"Количество слотов отдачи одного торрента:",
	"Добавлять слоты отдачи, если скорость отдачи < 90%",
	"Основные настройки BitTorrent",
	"Включить DHT сеть",
	"Включить scrape запросы",
	"Вкл. DHT для новых торрентов",
	"Включить обмен пирами",
	"Поиск локальных пиров",
	"Лимит скорости локальных пиров",
	"IP/Имя хоста для отчета трекеру:",
	"Шифрование протокола",
	"Состояние:",
	"Принимать нешифрованные",
	"Настройки очередности",
	"Максимальное число активных торрентов (отдачи и загрузки):",
	"Максимальное число одновременных загрузок:",
	"Раздавать до    [по умолчанию: 150% и \"Игнорировать\"]",
	"Коэфф.: <=",
	"% или времени раздачи",
	"Раздачи имеют более высокий приоритет в сравнении с загрузками",
	"Когда коэффициент раздачи достигнут",
	"Ограничить скорость отдачи до (кб/с): [0 остановить]",
	"Включить планировщик",
	"Настройки лимитов скорости",
	"Лимит отдачи (кб/с):",
	"Лимит загрузки (кб/с):",
	"Откл. DHT в режиме Стоп",
	"Включить Web UI",
	"Учетная запись",
	"Логин:",
	"Пароль:",
	"Включить гостевой аккаунт с логином:",
	"Настройки соединения",
	"Использовать порт (порт соединений по умолчанию):",
	"Разрешить доступ со следующих IP [Разделять запятой]:",
	"Продвинутые настройки [ВНИМАНИЕ: Не изменяйте их!]",
	"Постоянные метки [Не зависят от торрентов, разделять символом | ]",
	"Основные настройки кэша",
	"Кэш используется для хранения часто используемой информации и уменьшения количества обращений к жесткому диску. µTorrent распределяет кэш автоматически, но Вы можете настроить его самостоятельно.",
	"Заменить авто-кэш значением, выставленным вручную (мб):",
	"Уменьшать загрузку памяти, когда кэш не используется",
	"Дополнительные настройки кэша",
	"Включить кэширование записи на диск",
	"Записывать нетронутые блоки каждые 2 минуты",
	"Записывать завершенные части немедленно",
	"Включить кэширование чтения с диска",
	"Отключить кэширование чтения при низкой скорости отдачи",
	"Удалять устаревшие блоки из кэша",
	"Увеличивать размер кэша автоматически, при его заполнении",
	"Отключить Windows кэширование записи на диск",
	"Отключить Windows кэширование чтения с диска",
	"Свойства торрента",
	"ОК",
	"Отмена",
	"Трекеры [Разделять ссылки пустой строкой]",
	"Настройки скорости",
	"Макс. скорость отдачи (кб/с): [0 по умолчанию]",
	"Макс. скорость загрузки (кб/с): [0 по умолчанию]",
	"Слотов отдачи: [0 по умолчанию]",
	"Раздавать до:  [Игнорировать общие настройки]",
	"Заменить следующими:",
	"Коэфф: <=",
	"% или время раздачи:",
	"Другие настройки",
	"Суперсид",
	"Включить DHT",
	"Обмен пирами",
	"Выполнено",
	"Имя файла",
	"%",
	"Приоритет",
	"Размер",
	"пропущен",
	"низкий",
	"нормальный",
	"высокий",
	"Загружено:",
	"Отдано:",
	"Сидов:",
	"Осталось:",
	"Скор. загрузки:",
	"Скор. отдачи:",
	"Пиров:",
	"Коэффициент:",
	"Хеш-сумма:",
	"Передача",
	"подключенных %d из %d (всего: %d)",
	"Пр: %s / От: %s  -  %s",
	"Показать список категорий",
	"Подробная информация",
	"Не загружать",
	"Высокий приоритет",
	"Низкий приоритет",
	"Нормальный приоритет",
	"Стереть загруженные файлы",
	"Перехешировать",
	"Запустить принудительно",
	"Метка",
	"Пауза",
	"Свойства",
	"Удалить",
	"Удалить и",
	"Запустить",
	"Остановить",
	"Активные",
	"Все",
	"Готовые",
	"Загружаемые",
	"Неактивные",
	"Без метки",
	"||Доступ.||Доступность",
	"%",
	"Получено",
	"||Загр. скор.||Скорость загрузки",
	"Время",
	"Метка",
	"Имя торрента",
	"Позиция",
	"Пиры",
	"Осталось",
	"Сиды",
	"Сиды/Пиры",
	"||Коэфф.||Коэффициент",
	"Размер",
	"Статус",
	"Отдано",
	"||Отд. скор.||Скорость отдачи",
	"Вы действительно хотите удалить %d выбранных торрента(ов) и все связанные с ними данные?",
	"Вы действительно хотите удалить выбранный торрент и все связанные с ним данные?",
	"Вы действительно хотите удалить %d выбранных торрента(ов)?",
	"Вы действительно хотите удалить выбранный торрент?",
	"Проверено %:.1d%%",
	"Загружается",
	"Ошибка! %s",
	"Загружен",
	"Пауза",
	"В очереди",
	"Раздается",
	"Остановлен",
	"Ввод новой метки",
	"Введите новую метку для выделенных торрентов",
	"Создать новую метку...",
	"Удалить метку",
	"Общее||Трекеры||Пиры||Части||Файлы||Скорость||Журнал||",
	"Добавить торрент",
	"Пауза",
	"Конфигурация",
	"Удалить",
	"Запустить",
	"Остановить",
	"гб",
	"кб",
	"мб",
	"Дополнительно",
	"Скорость",
	"Соединение",
	"Кэширование",
	"Папки",
	"Общие",
	"Планировщик",
	"Очередность",
	"BitTorrent",
	"Web интерфейс",
	"Отключено||Включено||Принудительно||",
	"(Нет)||Socks4||Socks5||HTTPS||HTTP||",
	"Наименование",
	"Значение",
	"<= %d часов",
	"Игнорировать",
	"<= %d минут",
	"%d дн. %d час.",
	"%d час. %d мин.",
	"%d мин. %d сек.",
	"%d сек.",
	"%d нед. %d дн.",
	"%d год(а)/лет %d нед."
], lang_code = "ru";