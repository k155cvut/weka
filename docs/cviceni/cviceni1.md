---
icon: material/numeric-1-box
title: Cvičení 1
---

## Základní popis tvorby webové stránky

Každá stránka je na disku nebo na serveru uložena ve formě zdrojového kódu. Ten kód je psaný v jazyce HTML.

Kód HTML se upravuje pomocí editoru. V tomto cvičení se seznámíme s webovým prostředím [Glitch](https://glitch.com/), nicméně po většinu semestru budeme pracovat ve [VS Code](https://code.visualstudio.com/). Zdrojový kód se uchovává na disku, ze kterého je otevřen v prohlížeči.

**Stránka se skládá ze 3 základních částí kódu:**

- **HTML (HyperText Markup Language)**
    - definice základní struktury stránky
    - využití značkového zápisu (tagy) pro označení různých částí stránky(např. `<h1>`, `<p>`, `<img>`) 

        ```html
        <h1>Moje první webová stránka</h1>
        <p>Toto je odstavec textu.</p>

        <!-- Toto je komentář v html-->
        <img src="obrazek.jpg" alt="Popis obrázku">
        ```

- **CSS (Cascading Style Sheets)**
    - editace stylu stránky
    - definice barev, typů písma, fontů, velikostní či rozložení
    - CSS kód může být vložen přímo do HTML nebo na něj lze odkázat a udržovat kód v odděleném souboru
        ```css
        /* Toto je komentář v CSS */
        body {
        background-color: lightblue;
        }

        h1 {
        color: navy;
        text-align: center;
        }
        ```
    

- **JavaScript**
    - přidává do webové stránky dynamiku a interaktivitu
    - Umožňuje reagovat na uživatelské akce (kliknutí, pohyb myši), měnit obsah stránky a vytvářet animace

        ```js
        // Toto je komentář v JS
        function zmenBarvu() {
        document.body.style.backgroundColor = "pink";
        }
        ```

???+ note "&nbsp;<span style="color:#448aff">Zobrazení zdrojového kódu stránky</span>"
    Pokud si chceme prohlédnout zdrojový kúd dané stránky, stačí kliknout pravým tlačítkem a zobrazit zdrojový kód v novém okně. 

    Pro pokročilejší zobrazení včetně konzole a vývojářských nastavení vyvoláme stiskem klávesy **F12**. 

    <figure markdown>
    ![](../assets/cviceni1/kod_stranky.png){ width="800" }
        <figcaption>Zobrazení zdrojového kódu stránky</figcaption>
    </figure>

## Popis HTML
HTML (Hypertext Markup Language), je **hypertextový značkovací jazyk** určený k vytváření jednoduchých webových stránek. Od přelomu 80. a 90. let je vyvíjen a nepřetržitě používán. Aktuálně využívaná verze je HTML 5.

Společně s jazykem HTML vznikl **HTTP protokol**, který zajišťuje komunikaci mezi servery a přenosy souborů. Zabezpečená verze protokolu **HTTPS** je novější verze zajišťující komunikaci mezi webovým serverem a počítačem. Oproti původní verzi HTTP **šifruje přenášená data**, čímž **snižuje riziko zneužití** osobních údajů nebo odposlech komunikace.

HTML kód se z velké části skládá z tagů, neboli definovaných značek. Tagům přiřazujeme atributy a hodnoty, jež jednotlivým prvkům stránky přikládají určitou roli. Prostřednictvím HTML tagů tak například určujeme, kde budou odkazy a kam budou odkazovat nebo kde bude obrázek a odkud je bude prohlížeč čerpat.

Tagy se vládají do špičatých závorek, přičemž je dělíme na párové a nepárové.

- **párové tagy**, se kterými se setkáme nejčastěji, musejí být ukončeny lomítkem a původním tagem
    ```html
    <h1> Toto je nadpis </h1> 
    ```

- **nepárové tagy** ukončení druhým tagem nepotřebují
    ``` html
    <img src="obrazek.jpg"> 
    ```

Tagy je do sebe možné vzájemně vkládat, přičemž důležité je dbát na správnou syntax, čitelnost kódu a nezapomínat párové tagy ukončovat.
```html
<header>
    <h1>Ing. František Mužík</h1>
</header>
```

???+ note "&nbsp;<span style="color:#448aff">Využití AI pro usnadnění psaní HTML</span>"
    Psaní HTML kódu je ideální příležitostí pro uplatnění umělé inteligence ([ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com)). 
    
    Tyto nástroje pomáhají v hledání chyb nebo třeba pro vygenerování základní struktury stránky, kterou lze dále upavit pomocí vlastních znalostí. 

    **AI nenahradí vaše znalosti, pouze pomůže v jejich efektivnější aplikaci!**

    <figure markdown>
    ![](../assets/cviceni1/gemini.png){ width="600" }
        <figcaption>Ukázka návrhu jednoduché HTML stránky pomocí AI Gemini</figcaption>
    </figure>

### Základní struktura webové stránky v html
```html
<!DOCTYPE html> <!-- Deklarace typu dokumentu -->
<html> <!-- Kořenový element, který zastřešuje celý dokument -->
<head> <!-- Hlavička určující metadata. Typicky obsahuje, scripty, odkaz na CSS či titulek -->
    <meta charset="UTF-8"> <!-- Kódování textu -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moje první HTML stránka</title> <!-- Titulek stránky zobrazený v názvu okna -->
</head>
<body> <!-- Zde je zapsán obsah stránky -->

    <h1>Ahoj světe!</h1> <!-- Nadpis -->
    <p>Toto je první odstavec na mé stránce.</p> <!-- Odstavec textu -->

</body>
</html>
```

<figure markdown>
![](../assets/cviceni1/html_zaklad.png){ width="400" }
    <figcaption>Obsah webové stránky vytvořený kódem výše</figcaption>
</figure>

## Popis prostředí Glitch
[Glitch.com](https://glitch.com/) je online platforma, která umožňuje snadno vytvářet, upravovat a sdílet webové projekty. V podstatě se jedná o online editor, ve kterém lze psát kód, vidět výsledky okamžitě a dokonce spolupracovat s ostatními. 

Po registraci vytvoříme nový projekt stisknutím tlačítka *New project* -> možnost *glitch-hello-website*.

<figure markdown>
![](../assets/cviceni1/glitch01.png){ width="800" }
    <figcaption>Obsah webové stránky vytvořený kódem výše</figcaption>
</figure>

Po vygenerování stránky je možné v záložce *Settings* -> *Edit project details* změnit její název na něco rozumného, přičemž stránka vždy bude hostovaná na doméně Glitch a odkaz bude vypadat zhruba takto: <https://muj-test.glitch.me/>

V levé části stránky se nacházejí záložky *Settings* (nastavení), *Assets* (sem se umisťují využité soubory - např. obrázky) a *Files* (pracovní soubory).

V prostřední části se zobrazuje editor kódu a v pravé se zobrazuje výsledek v podobě náhledu stránky. Pokud není náhled zobrazený, zapneme ho tlačítkem *Preview* v dolní části obrazovky. Úpravy se ukládají automaticky.

<figure markdown>
![](../assets/cviceni1/glitch02.png){ width="800" }
    <figcaption>Editace stránky v prostředí Glitch</figcaption>
</figure>

## Tvorba webové stránky s vlastním životopisem


???+ note "&nbsp;<span style="color:#448aff">Užitečné odkazy</span>"
    - základy HTML: <https://www.w3schools.com/html/html_basic.asp>

    - další základy HTML: <https://www.jakpsatweb.cz/zaklady-html.html>

    - a do třetice: <https://www.rascasone.com/cs/blog/html-pro-zacatecniky-jak-psat-web>

!!! warning "K odevzdání"
    Do příštího cvičení vytvořte jednoduchou html stránku se svým životopisem, která bude hostována prostřednictvím platformy Glitch. Berte na vědomí, že vytřvořená stránka je veřejně přístupná. 

    Životopis by měl obsahovat následující prvky:

    - vaše jméno a příjmení včetně dosažených titulů

    - studium (včetně odkazů na závěrečné práce), znalost cizích jazyků

    - případné stáže, praxe v oboru

    - oborové zaměření

    - embed mapy, např. s okolím FSv ČVUT v Praze

    Ve výsledné webové stránce upravte styl pomocí CSS (změny např. textu, fontu, barev, pozadí stránky).

    Budeme rádi, pokud si zkusíte do stránky přidat i další volitelné prvky, např. foto, popis zájmů nebo něco zajímavého.

    Ukázka: <https://frantisek-muzik.glitch.me/>

