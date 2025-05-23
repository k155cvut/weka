---
icon: material/numeric-3-box
title: Cvičení 3
---

## Výběr nejoblíbenějších JS mapových knihoven

<div class="grid cards" markdown>

-   :simple-leaflet:{ .lg .middle height} __[Leaflet](https://leafletjs.com/)__

    ---

    Lehká a výkonná knihovna pro interaktivní mapy. 
    
    Je __jednoduchá na použití__ a vhodná pro většinu projektů.

    ![](../assets/cviceni3/leaflet.png)

-   :simple-openlayers:{ .lg .middle } __[Open Layers](https://openlayers.org/)__

    ---

    Výkonná knihovna pro vytváření dynamických aplikací. 
    
    Vhodná pro rozsáhlé a __komplexní GIS aplikace__.

    ![](../assets/cviceni3/openlayers.png)

-   :simple-maplibre:{ .lg .middle } __[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)__

    ---

    Vykreslování interaktivních map pomocí __WebGL__.

    Ideální pro aplikace, které potřebují svižné 3D vizualizace a vlastní stylování map.

    ![](../assets/cviceni3/maplibre.png)

-   :simple-cesium:{ .lg .middle } __[CesiumJS](https://cesium.com/learn/cesiumjs-learn/)__

    ---

    Vhodná pro 3D aplikace či interaktivní analýzu terénu.  

    Perfektní pro aplikace, které vyžadují __realistickou 3D vizualizaci__.

    ![](../assets/cviceni3/cesium.png)

</div>

## VS Code

Visual Studio Code (VS Code) je bezplatný a multiplatformní editor zdrojového kódu, který vyvinula společnost Microsoft. Je populární díky flexibilitě a podpoře široké škály programovacích jazyků.

Mezi výhody patří zvýraznění syntaxe, našeptávání při psaní, ladění kódu přímo z editoru a možnost instalace řady rozšíření (např. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).


<figure markdown>
![](../assets/cviceni3/vscode-live-server.png){ width="800" }
    <figcaption>Prostředí VS Code s ukázkou rozšíření Live server, díky kterému je možné sledovat změny kódu v reálném čase</figcaption>
</figure>

[Stažení VS Code :material-microsoft-visual-studio-code:](https://code.visualstudio.com/download){ .md-button .md-button--primary .center}
{: .button_array}

## Mapová aplikace v prostředí Leaflet

### 0) Příprava struktury souborů

Na disku si vytvoříme prázdnou složku, ve které budeme uchovávat veškeré soubory spojené s tímto cvičením (html, js a css soubory + např. obrázky pro ikony). Ideálně volíme umístění na vlastním disku H.

 - nový soubor ```index.html```

    ``` html
    <!DOCTYPE html> 
    <html> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Moje první Leaflet mapa</title> 
    </head>
    <body> 

        <h1>Pěkná mapa v Leafletu</h1> 
        

    </body>
    </html>
    ```

- nový soubor ```script.js``` - zatím ponecháme prázdný

- nový soubor ```style.css``` - zatím ponecháme prázdný

### 1) Zobrazení jednoduchého mapového okna

Do souboru ```index.html``` je potřeba připojit knihovnu Leaflet v hlavičce souboru (*head*). Dále musíme v sekci *body* vložit mapové okno a připojit skript odkazující na ovládání mapy.

=== "index.html"

    ``` html
    ...
    <head> 
        ...

        <!-- Externí připojení CSS symbologie Leaflet -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""/>

        <!-- Externí připojení JS knihovny -> vložit až po připojení CSS souboru -->
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>

        ...
    </head>

    ...

    <body> 
        ...
        <!-- Vložení divu pro zobrazení mapového okna -->
        <div id="map"></div>

        <!-- Připojení JS scriptu ovládajícího mapové okno -->
        <script src="script.js"></script>

    </body>

    ```

Ve ```script.js``` vytvoříme proměnnou mapy, nastavíme její střed a úroveň přiblížení. Dále určíme podkladovou mapu, maximální úroveň přiblížení a popis datového zdroje.

=== "script.js"

    ``` js
    // Nastavení mapy, jejího středu a úrovně přiblížení
    var map = L.map('map').setView([50.104, 14.388], 13);

    // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    ```

Pomocí ```style.css``` upravíme velikost mapového okna dle potřeb.

=== "style.css"

    ``` css
    /* Velikost mapového okna */
    #map {
        height: 800px;
        width: 60%;
    }

    ```

<figure markdown>
![](../assets/cviceni3/leaflet1.png){ width="1000" }
    <figcaption>Základní zobrazení mapového okna pomocí knihovny Leaflet</figcaption>
</figure>


??? note "&nbsp;<span style="color:#448aff">Stav kódu po dokončení kroku 1) Zobrazení jednoduchého mapového okna</span>"

    === "index.html"

        ``` html
        <!DOCTYPE html> 
        <html> 
        <head> 
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">

            <!-- Externí připojení CSS symbologie Leaflet-->
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
            

            <!-- Externí připojení JS knihovny -> vložit až po připojení CSS souboru -->
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

            <title>Moje první Leaflet mapa</title> 
        </head>
        <body> 

            <h1>Pěkná mapa v Leafletu</h1> 

            <div id="map"></div>
            <script src="script.js"></script>

        </body>
        </html>
        ```

    === "script.js"

        ``` js
        // Nastavení mapy, jejího středu a úrovně přiblížení
        var map = L.map('map').setView([50.104, 14.388], 13);

        // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        ```

    === "style.css"

        ``` css
        /* Velikost mapového okna */
        #map {
            height: 800px;
            width: 60%;
        }

        ```

### 2) Vykreslení útvarů v mapě

Pomocí kódu je možné do mapy přidat body, linie či polygony různých tvarů. Data můžeme buď zadat manuálně nebo načíst ze souboru, např. z formátu [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON). Tomu se budeme věnovat v příštím cvičení, nyní nám postačí ruční zadání.


Nejprve přidáme obyčejný marker, aneb bod v mapě. Například pro polohu FSv ČVUT v Praze, jejíž souřadnice vyčteme z Google Map. 

=== "script.js"

    ``` js
    // Bod zobrazující FSv ČVUT v Praze
    var marker = L.marker([50.104, 14.388]).addTo(map);

    ```

V kroku 3 budeme marker vylepšovat, ale nejprve zkusíme vykreslit obdobným způsobem linii a polygony.

Vykreslíme několik bodů na základě jejich souřadnic. Následně je spojíme do [polyline](https://leafletjs.com/reference.html#polyline). V dokumentaci najdeme také parametry vizualizace linie.

=== "script.js"

    ``` js
    // Body 
    var points = [
        [50.104, 14.388], // FSv ČVUT v Praze
        [50.091, 14.402], // Pražský hrad
        [50.082, 14.426], // metro Můstek
        [50.106, 14.437]  // vlak Praha Holešovice-zastávka
    ];

    // Linie propojující několik bodů 
    var line = L.polyline(points).addTo(map);

    ```

Následně zkusíme upravit barvu a styl linie spojující body.

=== "script.js"

    ``` js
    // Linie propojující několik bodů 
    var line = L.polyline(points, {color: "red", weight: 10}).addTo(map);

    ```

<figure markdown>
![](../assets/cviceni3/leaflet2.png){ width="800" }
    <figcaption>Vykreslení bodu a linie</figcaption>
</figure>

Dále vytvoříme [polygon](https://leafletjs.com/reference.html#polygon) spojující zadané body a opět upravíme jeho styl s pomocí dokumentace.

=== "script.js"

    ``` js
    // Polygon se zadanými vrcholy
    var polygon = L.polygon(points, {color: "blue", weight: 3, fillColor: "lightblue", fillOpacity: "0.8"}).addTo(map);
    ```

Nově vytvořená vrstva (tedy níže v kódu) se v mapě vykreslí nad předchozí vrstvu. V tomto případě je tedy linie zobrazená pod polygonem.

<figure markdown>
![](../assets/cviceni3/leaflet3.png){ width="800" }
    <figcaption>Vykreslení bodu a linie</figcaption>
</figure>


??? note "&nbsp;<span style="color:#448aff">Stav kódu po dokončení kroku 2) Vykreslení útvarů v mapě</span>"

    === "index.html - beze změny"

        ``` html
        <!DOCTYPE html> 
        <html> 
        <head> 
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">

            <!-- Externí připojení CSS symbologie Leaflet-->
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
            

            <!-- Externí připojení JS knihovny -> vložit až po připojení CSS souboru -->
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

            <title>Moje první Leaflet mapa</title> 
        </head>
        <body> 

            <h1>Pěkná mapa v Leafletu</h1> 

            <div id="map"></div>
            <script src="script.js"></script>

        </body>
        </html>
        ```


    === "script.js"

        ``` js
        // Nastavení mapy, jejího středu a úrovně přiblížení
        var map = L.map('map').setView([50.104, 14.388], 13);

        // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Bod zobrazující FSv ČVUT v Praze
        var marker = L.marker([50.104, 14.388]).addTo(map);

        // Body 
        var points = [
            [50.104, 14.388], // FSv ČVUT v Praze
            [50.091, 14.402], // Pražský hrad
            [50.082, 14.426], // metro Můstek
            [50.106, 14.437]  // vlak Praha Holešovice-zastávka
        ];

        // Linie propojující několik bodů 
        var line = L.polyline(points, {color: "red", weight: 10}).addTo(map);

        // Polygon se zadanými vrcholy
        var polygon = L.polygon(points, {color: "blue", weight: 3, fillColor: "lightblue", fillOpacity: "0.8"}).addTo(map);

        ```

    === "style.css - beze změny"

        ``` css
        /* Velikost mapového okna */
        #map {
            height: 800px;
            width: 60%;
        }
        ```


### 3) Pop-up 

Nejprve zobrazíme markery pro všechny body v poli ```points```. To je možné provést postupně po jednom (jako v prvním kroku) nebo automatizovaně. 

=== "script.js"

    ``` js
    // Přidání markerů pro každý bod
    points.forEach(function(coords) {
        L.marker(coords).addTo(map);
    });
    ```

V kódu výše se pro každý bod z pole ```points``` vytvoří marker v mapě. Proměnná ```coords``` (coordinates) představuje každý jednotlivý prvek (bod = dvojice souřadnic) v poli ```points``` během iterace pomocí funkce ```forEach()```.

Následně je možné smazat či vložit do blokového komentáře předchozí zadání markeru na FSv ČVUT. 

<figure markdown>
![](../assets/cviceni3/leaflet4.png){ width="800" }
    <figcaption>Vytvoření markeru nad každým z bodů v poli points</figcaption>
</figure>

Dále přiřadíme pop-up jednomu prvku v mapě. Například polygonu, který spojuje všechny naše body. 

=== "script.js"

    ``` js
    // Pop-up pro polygon
    polygon.bindPopup("Toto je polygon");
    ```

Podobně bychom mohli postupně přiřadit pop-up jiným prvkům v mapě. Nicméně vyzkoušíme automatizovaný popis bodů z pole ```points```.

Prvním krokem je úprava zadání bodového pole. Souřadnice vložíme do proměnné ```coords```, kterou jsme už předtím využívali. Zároveň přidáme textový parametr.

=== "script.js"

    ``` js
    // Body s textovými informacemi
    var points = [
        { coords: [50.104, 14.388], text: "FSv ČVUT v Praze" },
        { coords: [50.091, 14.402], text: "Pražský hrad" },
        { coords: [50.082, 14.426], text: "metro Můstek" },
        { coords: [50.106, 14.437], text: "vlak Praha Holešovice-zastávka" }
    ];
    ```

Následně bude nutné vůči této úpravě přizpůsobit vykreslení linie a polygonu, což provedeme přidání tzv. [arrow funkce](https://js.provyvojare.cz/funkce/arrow-funkce).

=== "script.js"

    ``` js
    // Linie propojující několik bodů 
    var line = L.polyline(points.map(p => p.coords), {color: "red", weight: 10}).addTo(map);

    // Polygon se zadanými vrcholy
    var polygon = L.polygon(points.map(p => p.coords), {color: "blue", weight: 3, fillColor: "lightblue", fillOpacity: "0.8"}).addTo(map);
    ```

Výše použitá arrow funkce přijme každý objekt ```p``` z pole ```points``` a vrátí hodnotu jeho vlastnosti ```coords```.

Nyní je kód opět funkční ve vykreslení linie a polygonu. Zbývá upravit markery, pro které je potřeba drobně upravit funkci ```forEach()```.

=== "script.js"

    ``` js
    // Přidání markerů s popisky pro každý bod
    points.forEach(function(point) {
        L.marker(point.coords).addTo(map).bindPopup(point.text);
    });
    ```

<figure markdown>
![](../assets/cviceni3/leaflet5.png){ width="800" }
    <figcaption>Ukázka pop-upu pro vykreslený bod</figcaption>
</figure>

!!! warning "&nbsp;<span>Upozornění</span>"

    Pozor, uvnitř iterace funkce ```forEach()``` pracujeme s proměnnou jednoho zvoleného bodu ```point```, ne se všemy body ze seznamu ```points```.

Závěrem tohoto kroku vytvoříme nový a samostatný marker s vlastní ikonou, kterou si v ve formátu *png* s průhledným pozadím stáhneme z internetu.

Pomocí dokumentace můžeme upravit styl markeru ([ikony](https://leafletjs.com/reference.html#icon)). 

=== "script.js"

    ``` js
    // Nastavení parametrů vlastního markeru
    var blackMarker = L.icon({
        iconUrl: '/assets/cerny_popup.png', // Umístění obrázku na disku
        iconSize:     [60, 60], // Velikost ikony v px
        iconAnchor:   [0, 80], // Pozice, na které se zobrazí ikona - vůči bodu
        popupAnchor:  [5, -100] // Pozice, ze které se popup otevře - vůči bodu
    });

    // Samostatný bod s novým značením
    var markerDivokaS = L.marker([50.093, 14.324], {icon: blackMarker}).addTo(map); 
    markerDivokaS.bindPopup("Zde je <b style='color: red;'>Divoká Šárka</b>");
    ```

!!! warning "&nbsp;<span>Upozornění</span>"

    Při zápisu textu v pop-upu je nutné využít dvojité uvozovky ```"..."``` pro textový řetězec a jednoduché ```'...'``` pro případné určený stylu (= barvy). 
    
    Při použití dvou párů dvojitých uvozovek by nastala chyba, protože by nebylo jasné, kdy má být textový řetězec ukončen.

<figure markdown>
![](../assets/cviceni3/leaflet6.png){ width="800" }
    <figcaption>Mapa s vlastním stylem markeru a upraveným stylem pop-upu</figcaption>
</figure>


??? note "&nbsp;<span style="color:#448aff">Stav kódu po dokončení kroku 3) Pop-up </span>"

    === "index.html - beze změny"

        ``` html
        <!DOCTYPE html> 
        <html> 
        <head> 
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">

            <!-- Externí připojení CSS symbologie Leaflet-->
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
            

            <!-- Externí připojení JS knihovny -> vložit až po připojení CSS souboru -->
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

            <title>Moje první Leaflet mapa</title> 
        </head>
        <body> 

            <h1>Pěkná mapa v Leafletu</h1> 

            <div id="map"></div>
            <script src="script.js"></script>

        </body>
        </html>
        ```


    === "script.js"

        ``` js
        // Nastavení mapy, jejího středu a úrovně přiblížení
        var map = L.map('map').setView([50.104, 14.388], 13);

        // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Body s textovými informacemi
        var points = [
            { coords: [50.104, 14.388], text: "FSv ČVUT v Praze" },
            { coords: [50.091, 14.402], text: "Pražský hrad" },
            { coords: [50.082, 14.426], text: "metro Můstek" },
            { coords: [50.106, 14.437], text: "vlak Praha Holešovice-zastávka" }
        ];

        // Linie propojující několik bodů 
        var line = L.polyline(points.map(p => p.coords), {color: "red", weight: 10}).addTo(map);

        // Polygon se zadanými vrcholy
        var polygon = L.polygon(points.map(p => p.coords), {color: "blue", weight: 3, fillColor: "lightblue", fillOpacity: "0.8"}).addTo(map);

        // Pop-up pro polygon
        polygon.bindPopup("Toto je polygon");

        // Přidání markerů s popisky pro každý bod
        points.forEach(function(point) {
            L.marker(point.coords).addTo(map).bindPopup(point.text);
        });

        // Nastavení parametrů vlastního markeru
        var blackMarker = L.icon({
            iconUrl: '/assets/cerny_popup.png', // Umístění obrázku na disku
            iconSize:     [60, 60], // Velikost ikony v px
            iconAnchor:   [0, 80], // Pozice, na které se zobrazí ikona - vůči bodu
            popupAnchor:  [30, -100] // Pozice, ze které se popup otevře - vůči bodu
        });

        // Samostatný bod s novým značením
        var markerDivokaS = L.marker([50.093, 14.324], {icon: blackMarker}).addTo(map); 
        markerDivokaS.bindPopup("Zde je <b style='color: red;'>Divoká Šárka</b>");
        ```

    === "style.css - beze změny"

        ``` css
        /* Velikost mapového okna */
        #map {
            height: 800px;
            width: 60%;
        }
        ```
### 4) Přidání mapových vrstev

Katalog různých podkladových map nalezneme [ZDE](https://leaflet-extras.github.io/leaflet-providers/preview/). Stačí v pravém menu vybrat mapu a následně zkopírovat její parametry v js kódu.

<figure markdown>
![](../assets/cviceni3/leaflet7.png){ width="800" }
    <figcaption>Výběr podkladové mapy v katalogu</figcaption>
</figure>

Zkopírované parametry podkladové mapy vložíme do JavaScriptu.

=== "script.js"

    ``` js
    // Definice podkladové OpenTopoMap
    var otm = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Přiání OpenTopoMap do mapy
    otm.addTo(map);
    ```

<figure markdown>
![](../assets/cviceni3/leaflet8.png){ width="800" }
    <figcaption>Změna podkladové mapy</figcaption>
</figure>

Následně je potřeba upravit definici původní OpenStreetMap na začátku skriptu přiřazením názvu, např. ```osm```.

=== "script.js"

    ``` js
    // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    ```

Jako třetí podkladovou vrstvu přidáme [Ortofoto ČR z ČÚZK](https://geoportal.cuzk.cz/(S(qc0rzifrjshkbyytskpzdilh))/Default.aspx?menu=3121&mode=TextMeta&side=wms.verejne&metadataID=CZ-CUZK-WMS-ORTOFOTO-P&metadataXSL=metadata.sluzba). Tato vrsta je dostupná jako [WMS](https://leafletjs.com/examples/wms/wms.html) služba, tudíž ji musíme přidat s trochu jinými parametry než předchozí OpenTopoMap.

=== "script.js"

    ``` js
    // Přidání ortofota jako WMS služby, určení vrstvy, formátu a průhlednosti
    var ortofoto = L.tileLayer.wms("https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer", {
        layers: "0", 
        format: "image/png",
        transparent: true,
        attribution: "&copy ČÚZK"
    }).addTo(map);
    ```

Parametry vrstvy ```layers```, ```format``` a ```transparent``` nalezneme ve vlastnostech služby [```GetCapabilities```](https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer?service=WMS&request=getCapabilities). 

<figure markdown>
![](../assets/cviceni3/wms-get-c.png){ width="1200" }
    <figcaption>Získání potřebných parametrů z GetCapabilities</figcaption>
</figure>

<figure markdown>
![](../assets/cviceni3/leaflet9.png){ width="800" }
    <figcaption>Přidání ortofota</figcaption>
</figure>

Nyní na konec skriptu vložíme [přepínání](https://leafletjs.com/reference.html#control-layers) podkladových vrstev. 

=== "script.js"

    ``` js
    // Proměnná uchovávající podkladové mapy, mezi kterými chceme přepínat
    var baseMaps = {
        "OpenStreetMap": osm, // "popis mapy": nazevPromenne
        "OpenTopoMap": otm,
        "Ortofoto ČR": ortofoto
    };

    // Grafické přepínání podkladových map
    var layerControl = L.control.layers(baseMaps).addTo(map);
    ```

Nyní se nabídka přepnutí map zobrazí po najetí kurzoru myši na ikonu mapových vrstev. Jestliže bychom chtěli vidět přepínání vrstev stále zobrazené, pak přidáme úpravu parametru ```collapsed```. 

Prvním parametrem níže upraveného přepínání je proměnná podkladových map (```baseMaps```), druhým proměnná mapových vrstev (zatím jsme neučili, proto ```null```) a následuje volitelné nastavení, tedy např ```collapsed```. 

Při načtení stránky se v podkladu zobrazí OpenTopoMap, která byla v kódu přidaná jako poslední.

=== "script.js"

    ``` js
    // Grafické přepínání podkladových map
    var layerControl = L.control.layers(baseMaps, null, {collapsed: false}).addTo(map);
    ```

<figure markdown>
![](../assets/cviceni3/leaflet10.png){ width="800" }
    <figcaption>Přepínání podkladových map</figcaption>
</figure>

Závěrem ještě přidáme přepínání i pro mapové vrstvy, tedy body, linii a polygon. 

Následně musíme přepsat druhý parametr v přepínání vrstev z ```null``` na ```overlayMaps```, tedy přidat mapové vrstvy jako součást přepínání.

=== "script.js"

    ``` js
    // Proměnná uchovávající mapové vrstvy, které chceme zobrazovat a skrývat
    var overlayMaps = {
        "Divoká Šárka": markerDivokaS,
        "Moje linie": line, 
        "Můj polygon": polygon
    };

    // Grafické přepínání podkladových map
    var layerControl = L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
    ```

<figure markdown>
![](../assets/cviceni3/leaflet11.png){ width="800" }
    <figcaption>Přepínání podkladových map a mapových vrstev</figcaption>
</figure>

Pokud bychom chtěli do přepínání vložit i body dávkově zobrazené funkcí ```forEach()```, pak je třeba tyto body nejdříve shluknout do jedné skupiny, se kterou budeme pracovat jako s celkem.

Zároveň je třeba upravit funkci ```forEach()``` tak, aby se každý bod nepřiřadil hned do mapy, ale do skupiny ```markersLayer```. Až na dalším řádku všechny body dohromady vložíme do mapy.

=== "script.js"

    ``` js
    // Vytvoření vrstvy pro markery
    var markersLayer = L.layerGroup();

    // Přidání markerů s popisky pro každý bod
    points.forEach(function(point) {
        L.marker(point.coords).bindPopup(point.text).addTo(markersLayer);
    });

    // Vložení skupiny bodů do mapy
    markersLayer.addTo(map);
    ```

Posledním krokem je pak přidání skupiny bodů ```markersLayer``` do výběru vrstev.

=== "script.js"

    ``` js
    // Proměnná uchovávající mapové vrstvy, které chceme zobrazovat a skrývat
    var overlayMaps = {
        "Zajímavá místa": markersLayer,
        "Divoká Šárka": markerDivokaS,
        "Moje linie": line, 
        "Můj polygon": polygon
    };
    ```

<figure markdown>
![](../assets/cviceni3/leaflet12.png){ width="800" }
    <figcaption>Finální verze mapové aplikace se všemi mapovými vrstvami</figcaption>
</figure>

!!! warning "&nbsp;<span>Upozornění</span>"

    Pokud chceme mít nějakou vrstvu skrytou při načtení mapy, pak ji jednoduše nepřidáváme do mapy v kódu pomocí ```vrstva.addTo(map)```, ale zobrazíme ji pouze výběrem vrstev.

??? note "&nbsp;<span style="color:#448aff">Stav kódu po dokončení kroku 4) Přidání mapových vrstev </span>"

    === "index.html - beze změny"

        ``` html
        <!DOCTYPE html> 
        <html> 
        <head> 
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">

            <!-- Externí připojení CSS symbologie Leaflet-->
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
            

            <!-- Externí připojení JS knihovny -> vložit až po připojení CSS souboru -->
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

            <title>Moje první Leaflet mapa</title> 
        </head>
        <body> 

            <h1>Pěkná mapa v Leafletu</h1> 

            <div id="map"></div>
            <script src="script.js"></script>

        </body>
        </html>
        ```


    === "script.js"

        ``` js
        // Nastavení mapy, jejího středu a úrovně přiblížení
        var map = L.map('map').setView([50.104, 14.388], 13);

        // Určení podkladové mapy, maximální úrovně přiblížení a zdroje dat
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Definice podkladové OpenTopoMap
        var otm = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });

        // Přiání OpenTopoMap do mapy
        //otm.addTo(map);

        // Přidání ortofota jako WMS služby, určení vrstvy, formátu a průhlednosti
        var ortofoto = L.tileLayer.wms("https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer", {
            layers: "0", 
            format: "image/png",
            transparent: true,
            attribution: "&copy ČÚZK"
        });

        // Body s textovými informacemi
        var points = [
            { coords: [50.104, 14.388], text: "FSv ČVUT v Praze" },
            { coords: [50.091, 14.402], text: "Pražský hrad" },
            { coords: [50.082, 14.426], text: "metro Můstek" },
            { coords: [50.106, 14.437], text: "vlak Praha Holešovice-zastávka" }
        ];

        // Linie propojující několik bodů 
        var line = L.polyline(points.map(p => p.coords), {color: "red", weight: 10}).addTo(map);

        // Polygon se zadanými vrcholy
        var polygon = L.polygon(points.map(p => p.coords), {color: "blue", weight: 3, fillColor: "lightblue", fillOpacity: "0.8"}).addTo(map);

        // Pop-up pro polygon
        polygon.bindPopup("Toto je polygon");

        // Vytvoření vrstvy pro markery
        var markersLayer = L.layerGroup();

        // Přidání markerů s popisky pro každý bod
        points.forEach(function(point) {
            L.marker(point.coords).bindPopup(point.text).addTo(markersLayer);
        });

        // Vložení skupiny bodů do mapy
        markersLayer.addTo(map);

        // Nastavení parametrů vlastního markeru
        var blackMarker = L.icon({
            iconUrl: '/assets/cerny_popup.png', // Umístění obrázku na disku
            iconSize:     [60, 60], // Velikost ikony v px
            iconAnchor:   [0, 80], // Pozice, na které se zobrazí ikona - vůči bodu
            popupAnchor:  [30, -100] // Pozice, ze které se popup otevře - vůči bodu
        });

        // Samostatný bod s novým značením
        var markerDivokaS = L.marker([50.093, 14.324], {icon: blackMarker}).addTo(map); 
        markerDivokaS.bindPopup("Zde je <b style='color: red;'>Divoká Šárka</b>");

        // Proměnná uchovávající podkladové mapy, mezi kterými chceme přepínat
        var baseMaps = {
            "OpenStreetMap": osm, // "popis mapy": nazevPromenne
            "OpenTopoMap": otm,
            "Ortofoto ČR": ortofoto
        };

        // Proměnná uchovávající mapové vrstvy, které chceme zobrazovat a skrývat
        var overlayMaps = {
            "Zajímavá místa": markersLayer,
            "Divoká Šárka": markerDivokaS,
            "Moje linie": line, 
            "Můj polygon": polygon
        };

        // Grafické přepínání podkladových map
        var layerControl = L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
        ```

    === "style.css - beze změny"

        ``` css
        /* Velikost mapového okna */
        #map {
            height: 800px;
            width: 60%;
        }
        ```



