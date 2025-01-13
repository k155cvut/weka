---
icon: material/numeric-2-box
title: Cvičení 2
---

Náplň tohoto cvičení navazuje na [předchozí cvičení](https://k155cvut.github.io/weka/cviceni/cviceni1/#tvorba-webove-stranky-s-vlastnim-zivotopisem).

### Základ CSS
- editace stylu stránky
- definice barev, typů písma, fontů, velikostní či rozložení
- CSS kód může být vložen přímo do HTML nebo na něj lze odkázat a udržovat kód v odděleném souboru
- kaskádové styly
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

### Zápis CSS
Jestliže máme HTML kód:
```html
<h1>Text</h1>
```

Jemuž upravujeme styl pomocí CSS:
```css
h1 {
  color: red;
}
```

Pak platí, že: 

- **```h1```** je tzv. **CSS selektor**, který vybere prvek na stránce. Pomocí tohoto selektoru jsou vybrány všechny tagy (značky) na stránce.

- **```{}```** složené závorky, které obalují zápis stylu pro daný selektor

- **```color```** je **CSS vlastnost** upravující barvu

- **```:```** dvojtečkou se přiřazuje hodnota CSS vlastnosti

- **```red```** je **CSS hodnota** přiřazená k vlastnosti před dvojtečkou

- **```;```** středník odděluje více párů *vlastnost–hodnota*; za poslední dvojicí se psát nemusí, ale je lepší na něj nezapomínat

**Úprava stylu stránky pomocí CSS může být k HTML souboru připojena dvěma způsoby:**

- **přímo součástí kódu** - využití tagu ```<style>```
```html
<!DOCTYPE html> 
<html> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moje první HTML stránka</title> 
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        }
    </style>
</head>
<body> 

    <h1>Ahoj světe!</h1> 
    <p>Toto je první odstavec na mé stránce.</p> 

</body>
</html>
```

- **v odděleném souboru** -> vložení do HTML přes referenci

    HTML kód:
```html
<!DOCTYPE html> 
<html> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moje první HTML stránka</title> 
    <link rel="stylesheet" href="style.css">

</head>
<body> 

    <h1>Ahoj světe!</h1> 
    <p>Toto je první odstavec na mé stránce.</p> 

</body>
</html>
```

    CSS kód:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  }
```

<figure markdown>
![](../assets/cviceni2/css01.png){ width="600" }
    <figcaption>Rozdíl mezi stránkou bez využití CSS (vlevo) a s editací stylu pomocí CSS (vpravo).</figcaption>
</figure>

Výsledek bude stejný. Pokud budeme styl upravovat pouze málo, stačí zápis přímo v HTML. Jestliže ale chceme editaci stylu v CSS rozepsat více, je vhodnější vytvoření samostatného souboru. Mimo přehlednosti pak můžeme jeden CSS soubor připojit k více HTML souborům, čímž můžeme zachovat stejný styl napříč několika stránkami.

Pokud je třeba, lze změnit pouze styl v určitém HTML tagu, ale takový kód se špatně udržuje.

```html
<h1 style="color: red">Červený text</h1>
```
#### 1) Úprava CSS v životopise

Pro editaci stylu v životopise zvolíme možnost psaní CSS kódu v samostatném souboru. Do HTML jej tedy připojíme odkazem na zdrojový soubor skrze tag ```<link>```.
```html
...
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Životopis</title>
    <link rel="stylesheet" href="style.css">
</head>
...
```

V CSS souboru změníme font, barvu pozadí a barvu textu. Pro určení HTML kódu barvy můžeme použít [online nástroje](https://www.w3schools.com/colors/colors_picker.asp). [Základní barvy](https://www.jakpsatweb.cz/archiv/barvy-zakladni.html) je možné zadávat pomocí RGB kódu či jménem.

Například <span style="color:red">červenou</span> barvu lze zapsat jako ```color: red``` nebo ```color: #FF0000```.

Upravený CSS soubor ```style.css``` bude vypadat následovně:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  }

h1 {
  color: #008080;
  font-size: 40px;
}

p {
  color: #800080;
}
```

<figure markdown>
![](../assets/cviceni2/css02.png){ width="600" }
    <figcaption>Užití editace stylu CSS</figcaption>
</figure>


#### 2) Pokročilejší úpravy

Stránku můžeme upravit dle našich preferencí celou řadou způsobů. Níže je doplnění CSS kódu o vypnutí značek pro odrážky, vystředění textu, zaoblení obrázku a jeho oddělení od textu.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
  }

h1 {
  color: #008080;
  font-size: 40px;
}

p {
  color: #800080;
}

ul {
  list-style-type: none;
}

img {
  padding: 10px;
  border-radius: 20px;
}
```

<figure markdown>
![](../assets/cviceni2/css03.png){ width="600" }
    <figcaption>Další editace stylu CSS</figcaption>
</figure>


???+ note "&nbsp;<span style="color:#448aff">Užitečné odkazy</span>"
    - základy CSS: <https://jecas.cz/css-zaklady>

    - úpravy obrázků: <https://www.w3schools.com/css/css3_images.asp>

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
