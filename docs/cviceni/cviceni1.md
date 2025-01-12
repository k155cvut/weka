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

        <!-- Toto je komentář, pod kterým je obrázek -->
        <img src="obrazek.jpg" alt="Popis obrázku">
        ```

- **CSS (Cascading Style Sheets)**
    - editace stylu stránky
    - definice barev, typů písma, fontů, velikostní či rozložení
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


???+ note "&nbsp;<span style="color:#448aff">Využití AI pro usnadnění psaní HTML</span>"
    Psaní HTML kódu je ideální příležitostí pro uplatnění umělé inteligence ([ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com)). 
    
    Tyto nástroje pomáhají v hledání chyb nebo třeba pro vygenerování základní struktury stránky, kterou lze dále upavit pomocí vlastních znalostí. 

    **AI nenahradí vaše znalosti, pouze pomůže v jejich efektivnější aplikaci!**

    <figure markdown>
    ![](../assets/cviceni1/gemini.png){ width="600" }
        <figcaption>Ukázka návrhu jednoduché HTML stránky pomocí AI Gemini</figcaption>
    </figure>

## Popis CSS

## Popis prostředí Glitch

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

