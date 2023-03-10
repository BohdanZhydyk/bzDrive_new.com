
export const tr = (txt, lang)=>{

  const translations = {
    Nav_Workshop: {en: "Workshop", ua:"Майстерня", pl:"Warsztat"},
    Nav_News: {en: "News", ua:"Новини", pl:"Aktualności"},
    Nav_Apps: {en: "Apps", ua:"Додатки", pl:"Aplikacje"},
    Nav_bzPass:{en:"bzPasswords", ua:"bzПаролі", pl:"bzHasła"},
    Nav_bzFiles:{en:"bzFiles", ua:"bzФайли", pl:"bzPliki"},
    Nav_bzStore:{en:"bzStore", ua:"bzМагазин", pl:"bzSklep"},
    Nav_CV:{en:"bzCV", ua:"bzРезюме", pl:"bzCV"},
    Nav_Unsplash:{en:"Unsplash", ua:"Unsplash", pl:"Unsplash"},
    Nav_Office:{en:"Office", ua:"Офіс", pl:"Biuro"},
    Nav_FI:{en:"Finances", ua:"Фінанси", pl:"Finanse"},
    Nav_ZL:{en:"Orders", ua:"Замовлення", pl:"Zlecenia"},
    Nav_FS:{en:"Invoices", ua:"Рахунки", pl:"Faktury"},
    Nav_FZ:{en:"Buy", ua:"Купівля", pl:"Zakup"},
    Nav_SP:{en:"Sellers", ua:"Продавці", pl:"Sprzedawcy"},
    Nav_KL:{en:"Customers", ua:"Клієнти", pl:"Klienci"},
    Nav_TO:{en:"Warehouse", ua:"Склад", pl:"Magazyn"},
    Nav_Statistic:{en:"Statistic", ua:"Статистика", pl:"Statystyka"},
    Nav_Traffic:{en:"Traffic", ua:"Трафік", pl:"Trafik"},
    Nav_Profile:{en:"Profile", ua:"Профіль", pl:"Profil"},
    PlaceHolder:{en:"enter data...", ua:"введіть дані...", pl:"wprowadź dane..."},
    LogInLegend:{en:"login", ua:"логін", pl:"login"},
    EmailLegend:{en:"email", ua:"email", pl:"email"},
    PassLegend:{en:"password", ua:"пароль", pl:"hasło"},
    VerifyLegend:{en:"confirm password", ua:"підтвердження пароля", pl:"potwierdzenie hasła"},
    ConfirmLegend:{en:"confirmation", ua:"підтвердження", pl:"potwierdzenie"},
    PlaceLegend:{en:"locality", ua:"населений пункт", pl:"miejscowość"},
    FromLegend:{en:"from", ua:"від", pl:"od"},
    ToLegend:{en:"to", ua:"до", pl:"do"},
    BrandLegend:{en:"brand", ua:"бренд", pl:"marka"},
    ModelLegend:{en:"model", ua:"модель", pl:"model"},
    NumbersLegend:{en:"numbers", ua:"номери", pl:"tablice"},
    VinLegend:{en:"VIN", ua:"VIN", pl:"VIN"},
    EngineLegend:{en:"engine", ua:"двигун", pl:"silnik"},
    ProdLegend:{en:"year of production", ua:"рік виробництва", pl:"rok produkcji"},
    FuelLegend:{en:"fuel level", ua:"рівень палива", pl:"poziom paliwa"},
    OdoLegend:{en:"mileage", ua:"пробіг", pl:"przebieg"},
    AgreeLegend:{en:"test drive consent", ua:"згода на тест-драйв", pl:"zgoda na jazdę próbną"},
    ShortName:{en:"short name", ua:"коротка назва", pl:"krótka nazwa"},
    NameLegend:{en:"customer name / company name", ua:"ім'я клієнта / назва компанії", pl:"imię klienta / nazwa firmy"},
    NipLegend:{en:"NIP", ua:"NIP", pl:"NIP"},
    AccountLegend:{en:"bank account number", ua:"номер банківського рахунку", pl:"numer rachunku bankowego"},
    ZipLegend:{en:"postal code", ua:"поштовий індекс", pl:"kod pocztowy"},
    TownLegend:{en:"town", ua:"населений пункт", pl:"miejscowość"},
    StreetLegend:{en:"street", ua:"вулиця", pl:"ulica"},
    StreetNrLegend:{en:"house", ua:"будинок", pl:"numer"},
    TelLegend:{en:"phone", ua:"телефон", pl:"telefon"},
    WwwLegend:{en:"website", ua:"веб-сайт", pl:"strona internetowa"},
    DirectorsList:{en:"director",ua:"директор",pl:"dyrektor"},
    AccountantsList:{en:"accountant",ua:"бухгалтер",pl:"księgowy"},
    WorkersList:{en:"worker", ua:"робітник", pl:"pracownik"},
    LogInTitle:{en:"Login", ua:"Вхід", pl:"Logowanie"},
    SignUpTitle:{en:"Registration", ua:"Реєстрація", pl:"Rejestracja"},
    ForgotTitle:{en:"Password Reset", ua:"Скидання пароля", pl:"Resetowanie hasła"},
    ConfirmTitle:{en:"Confirmation", ua:"Підтвердження", pl:"Potwierdzenie"},
    LogInBtn:{en:"Log In", ua:"Увійти", pl:"Zaloguj się"},
    SignUpBtn:{en:"Sign Up", ua:"Зареєструватися", pl:"Zarejestruj się"},
    ForgotBtn:{en:"Forgot Password?", ua:"Забув пароль?", pl:"Zapomniałeś hasła?"},
    PrivacyBtn:{en:"Privacy Policy", ua:"Політика конфіденційності", pl:"Polityka prywatności"},
    LogOutBtn:{en:"Log Out", ua:"Вийти", pl:"Wyloguj się"},
    ImgBtn_empty:{en:"", ua:"", pl:""},
    ImgBtn_check:{en:"check", ua:"позначити", pl:"zaznaczyć"},
    ImgBtn_save:{en:"save", ua:"зберегти", pl:"zapisać"},
    ImgBtn_edit:{en:"edit", ua:"редагувати", pl:"edytować"},
    ImgBtn_print:{en:"print", ua:"друкувати", pl:"drukować"},
    ImgBtn_settings:{en:"settings", ua:"налаштування", pl:"ustawienia"},
    ImgBtn_cancel:{en:"cancel", ua:"скасувати", pl:"anulować"},
    ImgBtn_delete:{en:"delete", ua:"видалити", pl:"usunąć"},
    DayNames:{
      en:['mo','tu','we','th','fr','sa','su'],
      ua:['пн','вт','ср','чт','пт','сб','нд'],
      pl:['po','wt','śr','cz','pi','so','ni']
    },
    MonthNames:{
      en:['jan','feb','mar','apr','maj','jun','jul','aug','sep','oct','nov','dec'],
      ua:['січ','лют','бер','кві','тра','чер','лип','сер','вер','жов','лис','гру'],
      pl:['sty','lut','mrz','kwi','maj','cze','lip','sie','wrz','paź','lis','gru']
    },
    CommingSoon_1:{
      en:"Information panel, where users can view their data and activity history, coming soon.",
      ua:"Панель інформації, де користувачі зможуть переглянути свої дані та історію дій, скоро буде доступна.",
      pl:"Panel informacji, gdzie użytkownicy będą mogli zobaczyć swoje dane oraz historię działań, wkrótce będzie dostępny.",
    },
    CommingSoon_2:{
      en:"Stay tuned!..",
      ua:"Слідкуйте за оновленнями!..",
      pl:"Śledź nasze aktualności!..",
    },
    Err_0:{
      en:"**en**",
      ua:"**ua**",
      pl:"**pl**"
    },
    Err_1:{
      en:"this field cannot be empty!",
      ua:"це поле не може бути порожнім!",
      pl:"to pole nie może być puste!"
    },
    Err_2: {
      en:"must contain from 4 to 8 characters!",
      ua:"має містити від 4 до 8 символів!",
      pl:"musi zawierać od 4 do 8 znaków!"
    },
    Err_3: {
      en:"wrong e-mail is entered!",
      ua:"введено неправильний e-mail!",
      pl:"wprowadzono nieprawidłowy adres e-mail!"
    },
    Err_4: {
      en:"must contain at least one special character!",
      ua:"має містити принаймні один спеціальний символ!",
      pl:"musi zawierać co najmniej jeden znak specjalny!"
    },    
    Err_5: {
      en:"must contain at least one lowercase letter!",
      ua:"має містити принаймні одну малу літеру!",
      pl:"musi zawierać przynajmniej jedną małą literę!"
    },
    Err_6: {
      en:"must contain at least one digit!",
      ua:"має містити принаймні одну цифру!",
      pl:"musi zawierać przynajmniej jedną cyfrę!"
    },
    Err_7: {
      en:"must contain at least one uppercase letter!",
      ua:"має містити хоча б одну велику літеру!",
      pl:"musi zawierać co najmniej jedną dużą literę!"
    },
    Err_8: {
      en:"must contain from 8 to 20 characters!",
      ua:"має містити від 8 до 20 символів!",
      pl:"musi zawierać od 8 do 20 znaków!",
    },
    UserNotPresent:{
      en:"such user is not present in a database!",
      ua:"такий користувач не знайдений в базі даних!",
      pl:"taki użytkownik nie istnieje w bazie danych!"
    },
    WrongPass:{
      en:"a wrong password is entered!",
      ua:"введено неправильний пароль!",
      pl:"wprowadzono nieprawidłowe hasło!"
    },
    AppAuthor: {
      en:"Web application author:",
      ua:"Автор веб-додатку:",
      pl:"Autor aplikacji webowej",
    },
    SecurityPannelTxtLogin:{
      en: "Logging in is required to access certain features of the website. If you do not have an account yet, you can easily create one.",
      ua: "Увійти до системи необхідно, щоб отримати доступ до деяких функцій сайту. Якщо у тебе ще немає облікового запису, можеш легко створити його.",
      pl: "Logowanie jest wymagane, aby uzyskać dostęp do niektórych funkcji strony. Jeśli nie masz jeszcze konta, możesz łatwo je założyć."
    },
    SecurityPannelTxtSignup:{
      en: "Registering on the website is a step towards fully utilizing all of its features. Personalize your experience with the site.",
      ua: "Реєстрація на сайті - це крок до повного використання всіх його функцій. Сперсоналізуй свій досвід з сайтом.",
      pl: "Rejestracja na stronie to krok w kierunku pełnego korzystania z jej wszystkich funkcji. Spersonalizuj swoje doświadczenie ze stroną."
    },
    SecurityPannelTxtForgot:{
      en: "Forgot your account password? It can happen to anyone. Just a few clicks are enough to fully restore the functionality of your account.",
      ua: "Забув пароль до акаунту? Це може трапитися з будь-ким. Достатньо кількох кліків, щоб повністю відновити функціональність свого акаунту.",
      pl: "Zapomniałeś hasła do swojego konta? To może przytrafić się każdemu. Wystarczy kilka kliknięć, aby w pełni przywrócić funkcjonalność swojego konta."
    },
    AddNewCompanyBtn:{en:"Add a new company", ua:"Додати нову компанію", pl:"Dodać nową firmę"},
    ActionBtn_color:{en:"color", ua:"колір", pl:"kolor"},
    ActionBtn_open:{en:"open", ua:"відкритий", pl:"otwarty"},
    ActionBtn_repair:{en:"repaired", ua:"відремонтований", pl:"naprawiony"},
    ActionBtn_close:{en:"closed", ua:"закритий", pl:"zamknięty"},
    ActionBtn_delete:{en:"deleted", ua:"видалений", pl:"usunięty"},
    NewOrderBtn:{en:"Add new order", ua:"Додати нове замовлення", pl:"Dodac nowe zlecenie"},
    DocName_ZL:{en:"Order", ua:"Замовлення", pl:"Zlecenie"},
    DocName_FS:{en:"Invoice", ua:"Рахунок", pl:"Faktura"},
    InfoPannelCar:{en:"Information about car", ua:"Інформація про автомобіль", pl:"Informacja o samochodzie"},
    InfoPannelClient:{en:"Customer information", ua:"Інформація про клієнта", pl:"Informacja o kliencie"},
    FaultsTop:{en:"Description and scope of damage", ua:"Опис та обсяг пошкодження", pl:"Opis i zakres uszkodzenia"},
    CommentsTop:{en:"Comment", ua:"Коментар", pl:"Komentarz"},
    IssuePerson:{en:"Authorized person to issue", ua:"Особа, уповноважена на видачу", pl:"Osoba upoważniona do wystawienia"},
    ReceivePerson:{en:"Authorized person to receive", ua:"Особа, уповноважена на отримання", pl:"Osoba upoważniona do odbioru"},
    AddWeekBtn_MINUS_WEEK:{en:"last week...", ua:"попередній тиждень...", pl:"poprzedni tydzień..."},
    AddWeekBtn_PLUS_WEEK:{en:"next week...", ua:"наступний тиждень...", pl:"następny tydzień..."},
    NewTranslate:{en:"", ua:"", pl:""}
  }

  return translations[txt] ? translations[txt][lang] : <span className="txtRed">-</span>
}