import type { ImageMetadata } from "astro";

import projectPlaceholder from "@/assets/project-photo-placeholder.svg";

// One neutral placeholder is used throughout the demo instead of client media.
const heroFacade = projectPlaceholder;
const pavingCleaning = projectPlaceholder;
const wallPainting = projectPlaceholder;
const panels = projectPlaceholder;
const fenceRenovation = projectPlaceholder;
const facadeCleaning = projectPlaceholder;
const renovation = projectPlaceholder;
const decorativeStone = projectPlaceholder;
const roofPainting = projectPlaceholder;
const lift = projectPlaceholder;
const snowRemoval = projectPlaceholder;
const windowService = projectPlaceholder;
const windowPainting = projectPlaceholder;

export const company = {
  name: "Forma Remontu",
  legalName: "Forma Remontu — fikcyjna marka demonstracyjna",
  domain: import.meta.env.PUBLIC_SITE_URL ?? "https://renovation-demo.example.com",
  locale: "pl_PL",
  language: "pl",
  phoneDisplay: "000 000 000",
  email: "kontakt@forma-remontu.example",
  street: "Adres demonstracyjny",
  postalCode: "00-000",
  city: "Poznań",
  hoursDisplay: "Przykładowe godziny: pon.–pt. 9:00–17:00",
  area: "Poznań i okolice — zakres demonstracyjny",
} as const;

export const siteDraftNotice =
  "Projekt koncepcyjny. Marka i dane kontaktowe są fikcyjne, a miejsca na zdjęcia oznaczono neutralnym placeholderem.";

export type ServiceCategory = "cleaning" | "renovation" | "windows" | "outdoor";

export type Service = {
  slug: string;
  navLabel: string;
  title: string;
  seoTitle: string;
  description: string;
  category: ServiceCategory;
  eyebrow: string;
  intro: string;
  detailTitle: string;
  details: string[];
  signalsTitle: string;
  signals: string[];
  image: ImageMetadata;
  imageAlt: string;
  scope: string[];
  outcomes: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "mycie-elewacji-i-dachow",
    navLabel: "Mycie elewacji i dachów",
    title: "Mycie elewacji i dachów",
    seoTitle: "Mycie dachów i elewacji Poznań | Forma Remontu",
    description: "Przykładowa oferta mycia dachów i elewacji w Poznaniu i okolicy. Dobór metody do powierzchni, dokładne czyszczenie i jasny zakres prac.",
    category: "cleaning",
    eyebrow: "Czysta, zadbana bryła budynku",
    intro: "Zabrudzenia atmosferyczne, osady i naloty odbierają elewacji oraz pokryciu dachowemu ich wygląd. Zakres i metodę czyszczenia dobieramy do stanu konkretnej powierzchni.",
    detailTitle: "Najpierw rozpoznajemy zabrudzenie i rodzaj powierzchni.",
    details: [
      "Na elewacjach i dachach osadzają się kurz, zanieczyszczenia atmosferyczne oraz wilgoć. W zacienionych miejscach mogą pojawić się także zielone lub ciemne naloty, których nie należy traktować jak zwykłego brudu.",
      "Przed rozpoczęciem prac oceniamy materiał, stan powłoki i dostęp do budynku. Dzięki temu można ustalić odpowiednie ciśnienie, środek czyszczący oraz to, czy powierzchnia wymaga dodatkowego usunięcia nalotów biologicznych.",
    ],
    signalsTitle: "Kiedy warto zapytać o czyszczenie?",
    signals: ["elewacja straciła równy kolor", "na dachu lub ścianie pojawił się zielony nalot", "widoczne są zacieki i osady", "budynek wymaga odświeżenia przed dalszymi pracami"],
    image: facadeCleaning,
    imageAlt: "Demonstracyjne ujęcie prac przy elewacji budynku",
    scope: ["ocena rodzaju zabrudzeń", "mycie elewacji", "mycie pokryć dachowych", "dobór środków do czyszczonej powierzchni"],
    outcomes: ["odświeżony wygląd budynku", "usunięcie zalegających zabrudzeń", "zakres dopasowany do materiału"],
    featured: true,
  },
  {
    slug: "mycie-kostki-brukowej",
    navLabel: "Mycie kostki brukowej",
    title: "Czyszczenie kostki brukowej",
    seoTitle: "Mycie kostki brukowej Poznań | Forma Remontu",
    description: "Przykładowa oferta mycia kostki brukowej w Poznaniu i okolicy: podjazdy, chodniki i przestrzeń wokół domu.",
    category: "cleaning",
    eyebrow: "Porządek zaczyna się przed wejściem",
    intro: "Kostka wokół domu z czasem zbiera osady, mech i zabrudzenia użytkowe. Profesjonalne czyszczenie pomaga przywrócić jej równy, zadbany wygląd.",
    detailTitle: "Mech, osady i tłuste plamy wymagają różnego podejścia.",
    details: [
      "Podjazdy, chodniki i nawierzchnie wokół domu są narażone na mech, ziemię, ślady po pojazdach oraz zabrudzenia olejowe. Po zimie mogą być widoczne również ślady związane z wilgocią i stosowaniem soli.",
      "Rodzaj kostki i charakter zabrudzenia decydują o sposobie pracy. Zbyt agresywne czyszczenie może pogorszyć wygląd nawierzchni, dlatego metodę oraz środki dobieramy po obejrzeniu powierzchni.",
    ],
    signalsTitle: "Co najczęściej wymaga usunięcia?",
    signals: ["mech i zielony nalot", "ciemne osady komunikacyjne", "tłuste plamy użytkowe", "zabrudzenia podjazdów, chodników i opasek wokół domu"],
    image: pavingCleaning,
    imageAlt: "Kostka brukowa przygotowana do czyszczenia",
    scope: ["podjazdy i chodniki", "kostka wokół posesji", "usuwanie typowych osadów", "dobór ciśnienia i sposobu pracy"],
    outcomes: ["wyraźnie czystsza nawierzchnia", "spójniejszy wygląd posesji", "bezpieczny dobór metody"],
    featured: true,
  },
  {
    slug: "malowanie",
    navLabel: "Prace malarskie",
    title: "Prace malarskie",
    seoTitle: "Malowanie i prace malarskie Poznań | Forma Remontu",
    description: "Przykładowa oferta prac malarskich w Poznaniu dla mieszkań, domów i obiektów firmowych.",
    category: "renovation",
    eyebrow: "Dobre przygotowanie. Równy efekt.",
    intro: "Trwały efekt malowania zależy nie tylko od farby, ale przede wszystkim od oceny i przygotowania podłoża. Zaczynamy od ustalenia realnego zakresu prac.",
    detailTitle: "Malowanie zaczyna się przed otwarciem puszki z farbą.",
    details: [
      "Ta strona zbiera różne prace malarskie wykonywane we wnętrzach i na zewnątrz. W zależności od materiału inaczej przygotowuje się ścianę, drewno, metal, ramę okienną czy pokrycie dachowe.",
      "Podczas pierwszej rozmowy ustalamy, co ma zostać pomalowane, jaki jest stan starej powłoki i czy potrzebne są naprawy, czyszczenie albo zabezpieczenie otoczenia. Dopiero później można dobrać właściwy wariant realizacji.",
    ],
    signalsTitle: "Od czego zaczynamy wycenę?",
    signals: ["rodzaj i powierzchnia podłoża", "stan starej farby lub powłoki", "zakres przygotowania i zabezpieczeń", "oczekiwany kolor oraz sposób wykończenia"],
    image: renovation,
    imageAlt: "Prace remontowo-malarskie przy ogrodzeniu",
    scope: ["ocena podłoża", "zabezpieczenie otoczenia", "przygotowanie powierzchni", "malowanie zgodnie z ustalonym zakresem"],
    outcomes: ["spójne wykończenie", "porządek na kolejnych etapach", "zakres dopasowany do powierzchni"],
  },
  {
    slug: "malowanie-scian",
    navLabel: "Malowanie ścian",
    title: "Malowanie wnętrz, mieszkań i elewacji",
    seoTitle: "Malowanie mieszkań i ścian Poznań | Forma Remontu",
    description: "Przykładowa oferta malowania ścian, mieszkań i wnętrz w Poznaniu: przygotowanie podłoża i zabezpieczenie pomieszczeń.",
    category: "renovation",
    eyebrow: "Nowy charakter wnętrza",
    intro: "Od odświeżenia jednego pomieszczenia po większy zakres prac — przed malowaniem ustalamy stan ścian, potrzebne przygotowanie i sposób zabezpieczenia wnętrza.",
    detailTitle: "Odświeżenie wnętrza bez pomijania przygotowania.",
    details: [
      "Malowanie jest potrzebne nie tylko wtedy, gdy kolor się znudził. Zabrudzenia, miejscowe uszkodzenia i zużyta powłoka mogą wymagać wcześniejszego oczyszczenia lub wyrównania podłoża.",
      "Przed pracami ustalamy możliwość swobodnego dostępu do ścian oraz sposób ochrony podłóg, mebli, parapetów, grzejników, drzwi i innych elementów, które pozostają w pomieszczeniu.",
    ],
    signalsTitle: "Kiedy warto odświeżyć ściany?",
    signals: ["farba jest zabrudzona lub miejscami odchodzi", "pomieszczenie jest przygotowywane do zamieszkania", "zmienia się kolor lub aranżacja wnętrza", "remont obejmuje kilka powiązanych powierzchni"],
    image: wallPainting,
    imageAlt: "Przykład wnętrza związanego z usługą malowania ścian",
    scope: ["zabezpieczenie pomieszczeń", "przygotowanie ścian", "malowanie wnętrz", "malowanie wybranych powierzchni zewnętrznych"],
    outcomes: ["równy kolor i wykończenie", "ograniczenie zabrudzeń podczas prac", "czytelnie ustalony zakres"],
    featured: true,
  },
  {
    slug: "profesjonalne-malowanie-dachow",
    navLabel: "Malowanie dachów",
    title: "Profesjonalne malowanie dachów",
    seoTitle: "Malowanie dachów Poznań | Forma Remontu",
    description: "Przykładowa oferta malowania dachów w Poznaniu i okolicy: ocena pokrycia, przygotowanie powierzchni i aplikacja powłoki.",
    category: "outdoor",
    eyebrow: "Odświeżenie i ochrona pokrycia",
    intro: "Przed malowaniem dachu trzeba ocenić stan pokrycia i ustalić, jakiego przygotowania wymaga. Zakres prac dobieramy po rozpoznaniu powierzchni.",
    detailTitle: "Zużyta powłoka nie zawsze oznacza wymianę pokrycia.",
    details: [
      "Na dachach z blachy i blachodachówki z czasem widać utratę koloru, zabrudzenia albo pierwsze ogniska korozji. O możliwości renowacji decyduje jednak rzeczywisty stan pokrycia, nie sam wygląd z poziomu posesji.",
      "Prace malarskie poprzedza ocena dachu oraz ustalenie sposobu oczyszczenia i przygotowania podłoża. Nowa powłoka ma sens tylko na powierzchni, która została właściwie przygotowana.",
    ],
    signalsTitle: "Co warto sprawdzić przed malowaniem?",
    signals: ["rodzaj i stan pokrycia", "miejsca z korozją lub łuszczącą się farbą", "dostęp oraz warunki pracy na wysokości", "zakres czyszczenia i przygotowania powierzchni"],
    image: roofPainting,
    imageAlt: "Dach budynku po pracach malarskich",
    scope: ["ocena pokrycia", "przygotowanie powierzchni", "malowanie dachu", "prace z dostępem na wysokości"],
    outcomes: ["odświeżony wygląd dachu", "równomierna powłoka", "dobór rozwiązania do pokrycia"],
  },
  {
    slug: "renowacja-malowanie-plotow-i-balustrad",
    navLabel: "Płoty i balustrady",
    title: "Renowacja i malowanie płotów oraz balustrad",
    seoTitle: "Malowanie płotów i balustrad Poznań | Forma Remontu",
    description: "Przykładowa oferta renowacji płotów i balustrad w Poznaniu: przygotowanie metalu lub drewna i odnowienie powierzchni.",
    category: "outdoor",
    eyebrow: "Detal, który porządkuje całą posesję",
    intro: "Ogrodzenia i balustrady są stale wystawione na pogodę. Odpowiednie oczyszczenie oraz przygotowanie powierzchni jest podstawą trwałego efektu renowacji.",
    detailTitle: "Metal i drewno wymagają innych zabezpieczeń.",
    details: [
      "Na metalowych elementach problemem są przede wszystkim rdza, luźne warstwy farby i miejscowe uszkodzenia powłoki. Drewno z kolei reaguje na wilgoć, mróz i promieniowanie słoneczne, dlatego wymaga systemu przeznaczonego do tego materiału.",
      "Zakres może obejmować oczyszczenie, usunięcie słabo związanych powłok, przygotowanie podkładu oraz malowanie. Sposób wykonania zależy od stanu ogrodzenia lub balustrady i oczekiwanego efektu.",
    ],
    signalsTitle: "Typowe oznaki zużycia",
    signals: ["rdza na metalowych elementach", "łuszcząca się lub spękana farba", "wyblakły kolor i nierówna powierzchnia", "drewno pozbawione skutecznej warstwy ochronnej"],
    image: fenceRenovation,
    imageAlt: "Metalowe ogrodzenie podczas prac renowacyjnych",
    scope: ["ocena stanu powierzchni", "usuwanie luźnych powłok", "przygotowanie metalu lub drewna", "malowanie i zabezpieczenie"],
    outcomes: ["uporządkowany wygląd", "odnowiona warstwa ochronna", "rozwiązanie dopasowane do materiału"],
  },
  {
    slug: "ukladanie-paneli-podlogowych",
    navLabel: "Układanie paneli",
    title: "Układanie paneli podłogowych",
    seoTitle: "Układanie paneli podłogowych Poznań | Forma Remontu",
    description: "Przykładowa oferta układania paneli podłogowych w Poznaniu: ocena podłoża, plan ułożenia i wykończenie podłogi.",
    category: "renovation",
    eyebrow: "Równa baza dla całego wnętrza",
    intro: "Dobrze ułożona podłoga wymaga oceny podłoża, właściwego rozplanowania i starannego wykonania połączeń oraz krawędzi.",
    detailTitle: "Równa podłoga zależy od tego, czego nie widać po montażu.",
    details: [
      "Panele mogą dobrze wyglądać przez długi czas tylko wtedy, gdy podłoże jest odpowiednio przygotowane, a układ został zaplanowany z uwzględnieniem kształtu pomieszczenia i krawędzi.",
      "Przykładowy zakres może obejmować panele laminowane, winylowe lub drewniane. Konkretny materiał i sposób montażu ustala się przed wyceną, ponieważ każdy system ma inne wymagania.",
    ],
    signalsTitle: "Co ustalamy przed montażem?",
    signals: ["rodzaj wybranych paneli", "stan i równość podłoża", "układ pomieszczenia oraz kierunek montażu", "sposób wykończenia progów i krawędzi"],
    image: panels,
    imageAlt: "Panele podłogowe we wnętrzu",
    scope: ["ocena przygotowania podłoża", "rozplanowanie kierunku ułożenia", "montaż paneli", "wykończenie przy krawędziach"],
    outcomes: ["równy układ paneli", "estetyczne łączenia", "czytelnie ustalony zakres prac"],
  },
  {
    slug: "ukladanie-kamienia-ozdobnego",
    navLabel: "Kamień ozdobny",
    title: "Układanie kamienia ozdobnego",
    seoTitle: "Układanie kamienia ozdobnego Poznań | Forma Remontu",
    description: "Przykładowa oferta układania kamienia ozdobnego w Poznaniu: przygotowanie podłoża, rozplanowanie wzoru i wykończenie detali.",
    category: "renovation",
    eyebrow: "Materiał z mocnym charakterem",
    intro: "Kamień dekoracyjny przyciąga wzrok, dlatego liczy się równy rytm, staranne docinki i dobrze przygotowane podłoże.",
    detailTitle: "Dekoracyjny materiał wymaga precyzyjnego rozplanowania.",
    details: [
      "Kamień ozdobny może być stosowany jako akcent w salonie, kuchni lub sypialni, ale także na wybranych fragmentach elewacji i ogrodzenia. Miejsce montażu wpływa na dobór materiałów oraz przygotowanie podłoża.",
      "Przed klejeniem ustalamy układ elementów, sposób prowadzenia wzoru i wykonanie narożników. Dzięki temu docinki nie dominują w widocznych miejscach, a całość zachowuje równy rytm.",
    ],
    signalsTitle: "Co wpływa na efekt końcowy?",
    signals: ["nośne i przygotowane podłoże", "rozplanowanie wzoru przed montażem", "dokładne docinki przy narożnikach", "materiały dobrane do wnętrza lub warunków zewnętrznych"],
    image: decorativeStone,
    imageAlt: "Fragment ściany wykończonej kamieniem ozdobnym",
    scope: ["ocena i przygotowanie podłoża", "rozplanowanie układu", "docinanie elementów", "montaż i wykończenie krawędzi"],
    outcomes: ["spójny układ materiału", "dokładnie wykonane narożniki", "wyraziste wykończenie wnętrza"],
  },
  {
    slug: "serwis-okien",
    navLabel: "Serwis okien",
    title: "Serwis okien",
    seoTitle: "Serwis i regulacja okien Poznań | Forma Remontu",
    description: "Przykładowa oferta serwisu okien w Poznaniu: diagnostyka, regulacja, konserwacja oraz wymiana wybranych elementów.",
    category: "windows",
    eyebrow: "Zanim pomyślisz o wymianie okna",
    intro: "Chłód przy ramie, trudności z domknięciem albo zużyta uszczelka nie zawsze oznaczają konieczność wymiany całego okna. Zaczynamy od diagnozy problemu.",
    detailTitle: "Wiele problemów z oknem zaczyna się od regulacji lub zużytego elementu.",
    details: [
      "Sygnałem do serwisu może być chłód wyczuwalny przy ramie, większy hałas z zewnątrz, kurz zbierający się przy zamkniętym oknie albo trudność z jego otwarciem i domknięciem.",
      "Podczas diagnostyki sprawdzamy sposób pracy skrzydła, okucia, zawiasy, klamkę i stan uszczelek. Dopiero po rozpoznaniu można zdecydować o regulacji, konserwacji lub wymianie konkretnego elementu zamiast całego okna.",
    ],
    signalsTitle: "Objawy, których nie warto ignorować",
    signals: ["okno ociera lub trudno się domyka", "klamka nie pracuje prawidłowo", "przy ramie czuć chłód lub słychać większy hałas", "uszczelka jest pęknięta, twarda albo odkształcona"],
    image: windowService,
    imageAlt: "Demonstracyjne ujęcie prac wykończeniowych przy oknie",
    scope: ["diagnostyka nieszczelności", "regulacja skrzydeł i okuć", "konserwacja mechanizmów", "wymiana uszczelek, okuć lub szyb po ocenie"],
    outcomes: ["łatwiejsze otwieranie i domykanie", "ograniczenie odczuwalnych nieszczelności", "naprawa dobrana do przyczyny problemu"],
    featured: true,
  },
  {
    slug: "malowanie-okien",
    navLabel: "Renowacja okien",
    title: "Renowacja i malowanie okien",
    seoTitle: "Renowacja i malowanie okien Poznań | Forma Remontu",
    description: "Przykładowa oferta renowacji okien drewnianych w Poznaniu: ocena ram, przygotowanie powierzchni i odtworzenie powłoki.",
    category: "windows",
    eyebrow: "Drugie życie drewnianych ram",
    intro: "Drewniane okna wymagają okresowej oceny i konserwacji. Gdy powłoka jest zużyta, odpowiednie przygotowanie ram pozwala je estetycznie odnowić.",
    detailTitle: "Renowację najlepiej zacząć, zanim wilgoć dotrze w głąb drewna.",
    details: [
      "Pęknięcia, przetarcia i łuszczenie powłoki to sygnały, że rama wymaga oceny. Wcześniejsza reakcja ogranicza zakres prac i pozwala sprawdzić, czy istniejącą stolarkę można nadal skutecznie zabezpieczyć.",
      "Przed malowaniem oglądamy ramy, uzupełniamy uzgodnione drobne ubytki oraz zabezpieczamy szyby, klamki i okucia. Termin prac zewnętrznych musi uwzględniać temperaturę, wilgotność i czas potrzebny na wyschnięcie powłoki.",
    ],
    signalsTitle: "Kiedy drewniana rama wymaga uwagi?",
    signals: ["farba matowieje, pęka lub się łuszczy", "na powierzchni widać rysy i drobne ubytki", "drewno zaczyna chłonąć wilgoć", "kolor ram jest nierówny lub wyraźnie wypłowiały"],
    image: windowPainting,
    imageAlt: "Drewniane okno związane z usługą renowacji ram",
    scope: ["ocena stanu ram", "oczyszczenie i szlifowanie", "uzupełnienie drobnych ubytków", "malowanie i zabezpieczenie"],
    outcomes: ["odświeżony wygląd ram", "nowa powłoka ochronna", "zachowanie istniejącej stolarki, gdy jej stan na to pozwala"],
  },
  {
    slug: "uslugi-podnosnikiem-koszowym",
    navLabel: "Podnośnik koszowy",
    title: "Usługi podnośnikiem koszowym",
    seoTitle: "Usługi podnośnikiem koszowym Poznań | Forma Remontu",
    description: "Przykładowa oferta prac podnośnikiem koszowym w Poznaniu i okolicy przy elewacjach, dachach i trudno dostępnych miejscach.",
    category: "outdoor",
    eyebrow: "Bezpieczny dostęp do trudnych miejsc",
    intro: "Podnośnik koszowy ułatwia realizację prac na elewacjach, dachach i innych powierzchniach, do których zwykły dostęp jest utrudniony.",
    detailTitle: "Podnośnik dobieramy do zadania i warunków na miejscu.",
    details: [
      "Podest roboczy pozwala dotrzeć do wysokich fragmentów elewacji, dachu i instalacji bez każdorazowego budowania rusztowania. Przykładowy zakres obejmuje prace malarskie i czyszczące oraz wybrane prace montażowe.",
      "Przed realizacją trzeba sprawdzić wysokość i zasięg pracy, możliwość ustawienia sprzętu, dojazd oraz rodzaj podłoża. Dopiero te informacje pozwalają potwierdzić, czy podnośnik będzie właściwym rozwiązaniem.",
    ],
    signalsTitle: "Jakie informacje są potrzebne?",
    signals: ["wysokość i miejsce wykonywania prac", "możliwość dojazdu do budynku", "rodzaj oraz stabilność podłoża", "zakres zadania wykonywanego z kosza"],
    image: lift,
    imageAlt: "Praca na elewacji z użyciem podnośnika koszowego",
    scope: ["ocena dostępu do miejsca pracy", "prace elewacyjne na wysokości", "wsparcie prac dachowych", "realizacja uzgodnionego zakresu z kosza"],
    outcomes: ["dostęp do wysokich fragmentów budynku", "sprawniejsza organizacja prac", "zakres ustalony do warunków na posesji"],
  },
  {
    slug: "odsniezanie-dachow-i-posesji",
    navLabel: "Odśnieżanie",
    title: "Odśnieżanie dachów i posesji",
    seoTitle: "Odśnieżanie dachów i posesji Poznań | Forma Remontu",
    description: "Przykładowa sezonowa oferta odśnieżania dachów i posesji w Poznaniu. Zakres i dostępność wymagają potwierdzenia.",
    category: "outdoor",
    eyebrow: "Sezonowa pomoc po intensywnych opadach",
    intro: "Zalegający śnieg może utrudniać korzystanie z posesji i wymagać działania na większych powierzchniach. Dostępność usługi potwierdzamy przed przyjęciem zlecenia.",
    detailTitle: "Zakres odśnieżania zależy od obiektu i aktualnych warunków.",
    details: [
      "Przykładowy zakres obejmuje dachy i większe posesje przy domach lub innych budynkach. Przy dużych powierzchniach sposób organizacji prac ustala się indywidualnie.",
      "Znaczenie ma rodzaj dachu, dostęp, miejsce bezpiecznego odkładania śniegu i warunki pogodowe. Usługa ma charakter sezonowy, dlatego przed przyjęciem zlecenia potwierdzamy bieżącą dostępność.",
    ],
    signalsTitle: "Co trzeba podać podczas rozmowy?",
    signals: ["typ i przybliżona powierzchnia dachu lub posesji", "adres oraz możliwość dojazdu", "ilość i stan zalegającego śniegu", "miejsca, które muszą pozostać dostępne podczas prac"],
    image: snowRemoval,
    imageAlt: "Budynek zimą związany z usługą odśnieżania",
    scope: ["odśnieżanie wybranych dachów", "odśnieżanie większych posesji", "wstępna ocena dostępu", "ustalenie zakresu zależnie od warunków"],
    outcomes: ["udrożnienie ustalonego obszaru", "zakres dobrany do obiektu", "realizacja zależna od warunków i dostępności"],
  },
  {
    slug: "malowanie-domow-z-drewna",
    navLabel: "Domy z drewna",
    title: "Malowanie domów z drewna",
    seoTitle: "Malowanie domów z drewna Poznań | Forma Remontu",
    description: "Przykładowa oferta malowania drewnianych elewacji domów w Poznaniu i okolicy. Zakres dobiera się po ocenie powierzchni.",
    category: "outdoor",
    eyebrow: "Pielęgnacja naturalnej elewacji",
    intro: "Drewniana elewacja pracuje pod wpływem pogody i wymaga okresowej pielęgnacji. Przed malowaniem oceniamy stan istniejącej powłoki i podłoża.",
    detailTitle: "Drewno sygnalizuje, kiedy warstwa ochronna przestaje działać.",
    details: [
      "Oferta dotyczy domów z bali, budynków szkieletowych, domków letniskowych oraz elewacji wykończonych deską. Promieniowanie UV, wilgoć i zmiany temperatury mogą powodować matowienie, szarzenie oraz pękanie starej powłoki.",
      "Częstotliwość renowacji zależy od gatunku drewna, wcześniejszego preparatu i ekspozycji ścian. Przed nałożeniem nowej warstwy powierzchnię trzeba umyć, usunąć luźne fragmenty i przygotować zgodnie z wybranym systemem wykończeniowym.",
    ],
    signalsTitle: "Kiedy warto zaplanować renowację?",
    signals: ["powłoka traci kolor i staje się matowa", "farba lub lakierobejca zaczyna się łuszczyć", "drewno szarzeje albo pojawiają się naloty", "elewacja szybciej chłonie wodę po deszczu"],
    image: heroFacade,
    imageAlt: "Dom jednorodzinny związany z pracami elewacyjnymi",
    scope: ["ocena drewnianej elewacji", "przygotowanie powierzchni", "dobór systemu powłok", "malowanie uzgodnionego zakresu"],
    outcomes: ["odświeżony wygląd drewna", "nowa warstwa ochronna", "rozwiązanie dobrane do stanu elewacji"],
  },
];

export const serviceGroups = [
  { id: "cleaning", label: "Czyszczenie powierzchni", short: "Elewacje, dachy i otoczenie domu." },
  { id: "windows", label: "Okna", short: "Serwis, regulacja i renowacja ram." },
  { id: "renovation", label: "Wnętrza i wykończenia", short: "Prace malarskie i wykończeniowe." },
  { id: "outdoor", label: "Prace zewnętrzne", short: "Dachy, ogrodzenia i prace na wysokości." },
] as const;

export const featuredServices = services.filter((service) => service.featured);

export const galleryGroups = [
  {
    slug: "profesjonalne-mycie-myjka-cisnieniowa",
    title: "Profesjonalne mycie myjką ciśnieniową",
    description: "Wybrane materiały związane z czyszczeniem elewacji, dachów i nawierzchni.",
    relatedService: "mycie-elewacji-i-dachow",
    images: [facadeCleaning, pavingCleaning, heroFacade],
    captions: ["Elewacja budynku związana z zakresem czyszczenia", "Kostka brukowa i sprzęt przygotowany do mycia", "Budynek podczas prac przy zewnętrznej powierzchni"],
  },
  {
    slug: "odsniezanie-dachow-i-posesji",
    title: "Odśnieżanie dachów i posesji",
    description: "Archiwalna galeria sezonowych prac związanych z odśnieżaniem.",
    relatedService: "odsniezanie-dachow-i-posesji",
    images: [snowRemoval, lift],
    captions: ["Budynek i posesja w warunkach zimowych", "Sprzęt wykorzystywany przy pracach wymagających dostępu na wysokości"],
  },
  {
    slug: "uslugi-remontowo-budowlane",
    title: "Usługi remontowo-budowlane",
    description: "Przykładowe materiały z prac wykończeniowych, malarskich i zewnętrznych.",
    relatedService: "malowanie",
    images: [renovation, wallPainting, decorativeStone, panels, fenceRenovation],
    captions: ["Fragment prac remontowych przy posesji", "Wnętrze po pracach związanych z odświeżeniem ścian", "Ściana wykończona kamieniem ozdobnym", "Podłoga wykończona panelami", "Metalowe ogrodzenie podczas renowacji"],
  },
  {
    slug: "serwis-okien",
    title: "Serwis okien",
    description: "Materiały związane z serwisem, regulacją i renowacją stolarki okiennej.",
    relatedService: "serwis-okien",
    images: [windowService, windowPainting],
    captions: ["Ocena stolarki okiennej podczas realizacji serwisowej", "Drewniane okno związane z zakresem renowacji ram"],
  },
];

export const processSteps = [
  { number: "01", title: "Krótka rozmowa", text: "Opisujesz problem, zakres lub efekt, którego potrzebujesz." },
  { number: "02", title: "Rozpoznanie", text: "Ustalamy warunki, powierzchnię i dostęp do miejsca pracy." },
  { number: "03", title: "Zakres i wycena", text: "Porządkujemy prace, materiały oraz kolejność działania." },
  { number: "04", title: "Realizacja", text: "Wykonujemy uzgodniony zakres i zamykamy prace odbiorem." },
] as const;

export const getService = (slug: string) => services.find((service) => service.slug === slug);
