---
icon: material/numeric-7-box
title: IIS a konfigurace vlastního prostoru
---

# Webový server ve Windows

**IIS** (neboli **Internet Information Services**) je webový server vyvinutý společností Microsoft, který slouží k hostování webových stránek a aplikací na serverech s operačním systémem Windows. Jeho hlavním úkolem je přijímat požadavky od klientů (webových prohlížečů) a odesílat jim požadovaný obsah. IIS podporuje různé webové protokoly, včetně HTTP, HTTPS, FTP a SMTP, což z něj činí univerzální nástroj pro webové publikování. Kromě statických webových stránek (HTML, CSS, JavaScript) umožňuje IIS hostovat i dynamické webové aplikace založené na technologiích jako ASP.NET, PHP nebo Node.js. Díky své integraci s operačním systémem Windows a široké škále funkcí je IIS oblíbenou volbou pro webové vývojáře a administrátory, kteří pracují s platformou Microsoft.

### Výchozí složka *inetpub* a její význam

Po instalaci IIS se ve výchozím nastavení vytváří složka *inetpub* v kořenovém adresáři disku C:. Tato složka slouží jako centrální úložiště pro soubory webových stránek a aplikací. Obsahuje několik podsložek, z nichž nejdůležitější je *wwwroot*. Tato složka je kořenovým adresářem pro výchozí webovou stránku. Do ní se umisťují soubory, které mají být dostupné z webového serveru. Kromě *wwwroot* obsahuje složka inetpub i další podsložky, jako je *ftproot* pro FTP server, *mailroot* pro SMTP server a *logs* pro ukládání protokolů. Správné umístění souborů do těchto složek je důležité pro správné fungování webového serveru.

### Weby a jejich definice v IIS

V IIS se weby definují pomocí tzv. "webových stránek" (websites). Každá webová stránka má svůj jedinečný název, fyzickou cestu (obvykle do složky *wwwroot* nebo její podsložky) a nastavení pro přístup (např. port, IP adresa). Fyzická cesta určuje, kde se nacházejí soubory webové stránky na disku serveru. Nastavení pro přístup určuje, jakým způsobem se klienti mohou k webové stránce připojit. IIS umožňuje hostovat více webových stránek na jednom serveru, přičemž každá webová stránka má vlastní konfiguraci. To umožňuje flexibilní správu webových aplikací a jejich izolaci.

### Defaultní soubory a jejich role

Když uživatel zadá do prohlížeče adresu webové stránky bez specifikace konkrétního souboru (např. `http://www.stranka.cz`), IIS hledá v kořenovém adresáři webu tzv. "defaultní soubory" (default documents). To jsou soubory, které se automaticky načtou a zobrazí uživateli. Mezi nejčastější defaultní soubory patří `index.html`, `default.aspx` a `default.php`. Seznam defaultních souborů lze v IIS konfigurovat, což umožňuje přizpůsobit chování webového serveru podle potřeb konkrétní webové aplikace.

### Povolení procházení webu a jeho bezpečnostní aspekty

Ve výchozím nastavení je procházení adresářů webu zakázáno z bezpečnostních důvodů. To znamená, že uživatelé nemohou zobrazit seznam souborů a složek v adresáři, pokud není v adrese specifikován konkrétní soubor. Povolení procházení webu může vést k odhalení citlivých informací a zranitelnosti webové aplikace. Pro vývojové účely může být užitečné toto nastavení dočasně povolit, ale v produkčním prostředí se důrazně nedoporučuje.

### Certifikáty SSL/TLS a zabezpečení komunikace

Pro zabezpečení komunikace mezi webovým serverem a uživateli se používají certifikáty SSL/TLS (Secure Sockets Layer / Transport Layer Security). Tyto certifikáty šifrují data a ověřují identitu webového serveru, čímž chrání citlivé informace, jako jsou hesla nebo platební údaje. IIS umožňuje snadnou instalaci a správu SSL/TLS certifikátů. Pro získání certifikátu je nutné požádat certifikační autoritu (CA). Po instalaci certifikátu je nutné nakonfigurovat IIS tak, aby používal protokol HTTPS (Hypertext Transfer Protocol Secure) pro zabezpečenou komunikaci.

### Správa MIME typů a jejich význam pro webové aplikace

MIME typy (Multipurpose Internet Mail Extensions) určují, jak má webový prohlížeč zpracovat různé typy souborů (např. HTML, CSS, JavaScript, obrázky). IIS umožňuje přidávat a upravovat MIME typy, což je důležité pro správné fungování webových aplikací. Pokud není MIME typ pro konkrétní typ souboru správně nastaven, může dojít k chybnému zobrazení obsahu v prohlížeči. Například, pokud není pro soubory JavaScript nastaven MIME typ application/javascript, prohlížeč je může interpretovat jako textové soubory a nespustit je.

### Protokolování

IIS zaznamenává informace o přístupech k webovému serveru do protokolů (logů). Tyto protokoly mohou být užitečné pro sledování návštěvnosti webu, diagnostiku problémů a analýzu chování uživatelů.

### Ověřování

IIS podporuje různé metody ověřování uživatelů, jako je anonymní ověřování, ověřování pomocí Windows, ověřování pomocí formulářů atd.

### ISAPI filtry a rozšíření

ISAPI (Internet Server Application Programming Interface) filtry a rozšíření umožňují rozšiřovat funkcionalitu IIS. Filtry slouží k úpravě požadavků a odpovědí, zatímco rozšíření slouží k zpracování konkrétních typů požadavků.

### Fondy aplikací (Application Pools)

Fondy aplikací jsou klíčovou součástí IIS, která umožňuje izolovat webové aplikace od sebe navzájem. Každá webová aplikace může mít svůj vlastní fond aplikací s vlastními nastaveními, jako je verze .NET Framework, identita procesu a nastavení recyklace. To zajišťuje, že pokud jedna aplikace selže, neovlivní to ostatní aplikace na serveru.

### Moduly a obslužné rutiny (Modules and Handlers)

IIS používá moduly a obslužné rutiny k zpracování požadavků. Moduly jsou komponenty, které provádějí různé úkoly, jako je ověřování, autorizace a protokolování. Obslužné rutiny zpracovávají požadavky na konkrétní typy souborů, jako jsou `.aspx`, `.php` nebo `.html`. Moduly a obslužné rutiny jsou důležité pro konfiguraci IIS pro různé typy webových aplikací.

### Přepisování adres URL (URL Rewriting)

Přepisování adres URL je technika, která umožňuje upravovat adresy URL, které uživatelé vidí v prohlížeči, aniž by se změnila skutečná adresa, na kterou se server dotazuje. To znamená, že webový server může přijmout požadavek na jednu adresu URL a interně ho přesměrovat na jinou. Tato technika se často používá k zlepšení SEO (optimalizace pro vyhledávače), zjednodušení adres URL pro uživatele a k implementaci různých funkcí webové aplikace.

##### Hlavní důvody pro použití přepisování adres URL

- SEO (Optimalizace pro vyhledávače) <br>
Přepisování adres URL umožňuje vytvářet adresy URL, které jsou pro vyhledávače srozumitelnější a obsahují klíčová slova. Například, místo adresy URL `www.mujserver.cz/product.php?id=1236` lze použít adresu URL `www.mujserver.cz/produkty/1236-nazev-produktu`. To zlepšuje pozici webové stránky ve výsledcích vyhledávání.

- Zjednodušení adres URL pro uživatele <br>
Přepisování adres URL umožňuje vytvářet krátké a srozumitelné adresy URL, které si uživatelé snadněji zapamatují a sdílejí. To zlepšuje uživatelskou zkušenost a usnadňuje navigaci na webové stránce.

- Implementace funkcí webové aplikace <br>
Přepisování adres URL lze použít k implementaci různých funkcí webové aplikace, jako je směrování požadavků na různé skripty, zpracování chyb a implementace REST API. Například lze použít přepisování adres URL k přesměrování požadavků na různé kontrolery na základě adresy URL.

- Zabezpečení <br>
Přepisování URL může sloužit i k maskování skutečných cest k souborům na serveru, což může zvýšit bezpečnost.

##### Jak Rewriting funguje

IIS nabízí modul pro přepisování adres URL, který umožňuje definovat pravidla pro přepisování adres URL. Tato pravidla se obvykle definují pomocí regulárních výrazů, které se používají k porovnání adres URL. Pokud adresa URL odpovídá pravidlu, server ji přepíše na novou adresu URL. Důležité je si uvědomit **rozdíl mezi přesměrováním a přepsáním adresy**.

- **Přesměrování (redirect)** znamená, že uživatel je přesměrován na novou adresu a tato adresa se zobrazí v adresním řádku prohlížeče.
- **Přepsání (rewrite)** znamená, že adresa je přepsána pouze interně na serveru a uživatel vidí v adresním řádku původní adresu.

##### Praktické využití

Přepisování adres URL se často používá k implementaci REST API, kde se adresy URL používají k identifikaci zdrojů dat. Lze ho také použít k implementaci vícejazyčných webových stránek, kde se adresy URL používají k identifikaci jazyka nebo např. pro implementaci takzvaných "hezkých URL" v redakčních systémech.

### Zabezpečení (Security)
Zabezpečení je klíčovým aspektem správy webového serveru. Existují dobré techniky zabezpečení webových aplikací, jako je prevence útoků SQL injection, cross-site scripting (XSS) a cross-site request forgery (CSRF). IIS nabízí různé funkce pro zabezpečení webových aplikací, jako je ověřování, autorizace a filtrování požadavků, ovšem hlavní tíha zabezpečení serveru proti zmíněným útokům leží především na aplikaci samotné.

##### SQL Injection (SQLI)

- **Princip útoku** <br>
Útočník vkládá škodlivý SQL kód do vstupních polí aplikace, což může vést k neoprávněnému přístupu k databázi.
- **Techniky obrany** <br>
*Prepared Statements (Parametrizované dotazy)* – oddělují SQL kód od dat, což znemožňuje interpretaci uživatelského vstupu jako SQL kódu.<br>
*Validace a sanitizace vstupů* – kontrola a čištění uživatelských vstupů před jejich použitím v SQL dotazech.<br>
*Omezení práv databázového uživatele* – udělování minimálních nutných práv databázovému uživateli, který používá webová aplikace.

Zabezpečení webových aplikací je komplexní problém, který vyžaduje vícevrstvý přístup. IIS může poskytnout určité základní bezpečnostní funkce, ale hlavní odpovědnost za ochranu proti XSS a CSRF útokům spočívá na vývojářích webových aplikací. Je důležité pravidelně aktualizovat IIS a operační systém Windows, aby se opravily známé zranitelnosti.

##### Cross-site scripting (XSS)

- **Princip útoku**
Útočník vkládá škodlivý JavaScript kód do webové stránky, který se spustí v prohlížeči jiného uživatele.
- **Techniky obrany**
*Sanitizace výstupů* – Ošetření dat, která se zobrazují na webové stránce, aby se zabránilo spuštění škodlivého kódu.<br>
*Content Security Policy (CSP)* – definování pravidel, která určují, odkud se mohou načítat zdroje (JavaScript, CSS, obrázky). Omezuje spouštění skriptů z nedůvěryhodných zdrojů.<br>
*HTTP-only cookies* – nastavení cookies tak, aby k nim neměl přístup JavaScript. Chrání cookies před krádeží pomocí XSS.<br>
*Ověřování vstupů* – stejně jako u SQLI je nutné ověřovat vstupy uživatelů.

##### Cross-Site Request Forgery (CSRF)

- **Princip útoku**
Útočník přiměje oběť, která je přihlášena k webové aplikaci, aby provedla nechtěnou akci na této aplikaci.
- **Techniky obrany**
*CSRF tokeny* – generování náhodných tokenů, které se odesílají s formuláři. Server ověřuje, zda se token shoduje s tokenem uloženým v relaci uživatele.<br>
*SameSite cookies* – nastavení cookies tak, aby se odesílaly pouze při požadavcích ze stejné domény. Omezuje možnost zneužití cookies při CSRF útoku.<br>
*Ověřování hlavičky Referer* – kontrola hlavičky Referer, která udává, odkud byl požadavek odeslán. Je to ovšem slabá ochrana, protože hlavička Referer může být podvržena.<br>
*Dvojitá ochrana cookies* – tato metoda zahrnuje odeslání CSRF tokenu jako cookie a také jako hodnotu formuláře. Server pak ověřuje, zda se obě hodnoty shodují.



## Rozdíly na Linuxu

Na Linuxu se pro hostování webových stránek nejčastěji používá webový server Apache nebo Nginx. Konfigurace těchto serverů se významně liší od IIS. Místo grafického rozhraní se používají konfigurační soubory (např. httpd.conf pro Apache, nginx.conf pro Nginx). IIS ve Windows je v zásadě také možno konfigurovat pomocí bash souborů spouštěných přes PowerShell (a weboví administrátoři touto cestou spravují zpravidla větší množství stanic s obdobnou základní konfigurací), ale není to běžně rozšířený přístup.

Na Linuxu se pro **správu certifikátů SSL/TLS** obvykle používá nástroj Certbot. Pro **ověřování uživatelů** se používají moduly jako mod_auth_basic pro Apache nebo ngx_http_auth_basic_module pro Nginx. **Protokoly** se ukládají do textových souborů, které se nacházejí v adresáři /var/log.

Linux nabízí větší flexibilitu a kontrolu nad konfigurací webového serveru, ale vyžaduje hlubší znalosti příkazového řádku a konfiguračních souborů. IIS je na druhou stranu uživatelsky přívětivější a snadněji se spravuje pomocí grafického rozhraní, což ovšem může někomu přijít jako ve výsledku méně komfortní způsob vyžadující množství času a klikání v mnoha navzájem odlišných menu.

<br><br>
# DNS – správa domén

**DNS (Domain Name System)** je decentralizovaný systém doménových jmen, který převádí lidsky srozumitelné doménové názvy (např. `www.google.com`) na IP adresy (např. `172.217.168.196`), které počítače používají ke komunikaci. Vše si lze představit jako telefonní seznam internetu. Když zadáme doménový název do webového prohlížeče, počítač odešle dotaz na DNS server, který vyhledá odpovídající IP adresu a vrátí ji zpět. Bez DNS by musel uživatel zadávat složité IP adresy, což by bylo pro praktické používání webu velmi nešikovné.

V hierarchii DNS hrají klíčovou roli tři typy serverů: kořenové, autoritativní a rekurzivní. Kořenové servery stojí na samém vrcholu a slouží jako výchozí bod pro překlad doménových jmen, směrují dotazy na autoritativní servery pro domény nejvyšší úrovně (TLD), jako jsou `.com` nebo `.cz`. Autoritativní servery uchovávají definitivní informace o konkrétních doménách a jejich subdoménách, poskytují IP adresy a další záznamy pro dané doménové jméno. Rekurzivní servery fungují jako prostředníci mezi uživateli a autoritativními servery, přijímají dotazy od uživatelů, procházejí hierarchii DNS a ukládají výsledky do mezipaměti (cache), čímž urychlují budoucí dotazy na stejná doménová jména. Tyto tři typy serverů spolupracují, aby zajistily efektivní a spolehlivý překlad doménových jmen na IP adresy, což je nezbytné pro fungování internetu. 

### Průběh překladu doménového jména na IP adresu

- Uživatel zadá doménový název do webového prohlížeče.
- Počítač uživatele odešle dotaz na rekurzivní DNS server.
- Rekurzivní DNS server se dotáže kořenových DNS serverů.
- Kořenové DNS servery vrátí adresu autoritativních DNS serverů pro doménu nejvyšší úrovně (např. .com).
- Rekurzivní DNS server se dotáže autoritativních DNS serverů pro doménu nejvyšší úrovně.
- Autoritativní DNS servery vrátí adresu autoritativních DNS serverů pro danou doménu.
- Rekurzivní DNS server se dotáže autoritativních DNS serverů pro danou doménu.
- Autoritativní DNS servery vrátí IP adresu odpovídající doménovému názvu.
- Rekurzivní DNS server vrátí IP adresu počítači uživatele.
- Počítač uživatele se připojí k webovému serveru pomocí IP adresy.

DNS systém sám o sobě není koncipován jako nějaký bezpečnostní mechanismus, a proto není automaticky chráněn proti všem zranitelnostem. Nicméně, existují bezpečnostní rozšíření a postupy, které zvyšují jeho odolnost.

##### Zranitelnosti DNS

**DNS spoofing/cache poisoning** <br> 
Útočník podvrhne falešné DNS záznamy, které se uloží do mezipaměti DNS serveru. To může vést k přesměrování uživatelů na škodlivé webové stránky.

**Útoky typu Man-in-the-middle (MitM)**<br> Útočník zachytí komunikaci mezi uživatelem a DNS serverem a manipuluje s ní.

**DDoS útoky (Distributed Denial of Service)**<br> Útočník zahltí DNS servery velkým množstvím požadavků, čímž je znepřístupní.

##### Bezpečnostní opatření

**DNSSEC (DNS Security Extensions)**<br> Rozšíření DNS protokolu, které přidává digitální podpisy k DNS záznamům. To umožňuje ověřit integritu a autenticitu DNS dat.

**DNS over HTTPS (DoH) a DNS over TLS (DoT)**<br> Protokoly, které šifrují komunikaci mezi uživatelem a DNS serverem, čímž chrání před útoky typu MitM.

Dále např.<br>
**Ověřování certifikátů**<br> Uživatelé by měli ověřovat certifikáty webových stránek, aby se ujistili, že se připojují k legitimním serverům.

**Používání VPN**<br> Virtuální privátní sítě (VPN) mohou šifrovat komunikaci a maskovat IP adresu uživatele, čímž zvyšují bezpečnost.

### DNS záznamy

DNS záznamy jsou sekvence uložené na DNS serverech, které obsahují informace o doménových názvech a jejich odpovídajících IP adresách. Existuje několik typů DNS záznamů, z nichž každý slouží k jinému účelu:

| Typ záznamu | Popis | Příklad použití |
|---|---|---|
| A | Mapuje doménový název na IPv4 adresu | `www.mujserver.cz. A 155.112.159.74` |
| AAAA | Mapuje doménový název na IPv6 adresu | `www.mujserver.cz. AAAA 2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| CNAME | Vytvoří alias pro doménový název | `www.mujserver.cz. CNAME mujserver.cz.` |
| MX | Určuje poštovní server pro e-maily | `mujserver.cz. MX 10 mail.mujserver.cz.` |
| NS | Určuje autoritativní DNS servery | `mujserver.cz. NS ns1.forpsi.cz.` |
| TXT | Ukládá libovolný textový řetězec | `mujserver.cz. TXT "v=spf1 mx ~all"` |
| SRV | Určuje umístění serverů pro služby | `_sip._tcp.mujserver.cz. SRV 0 5 5060 sip.mujserver.cz.` |
| TLSA | Ověřuje certifikáty TLS/SSL | `_443._tcp.mujserver.cz. TLSA 3 0 1 ...` |



