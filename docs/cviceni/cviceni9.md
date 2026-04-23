---
icon: material/numeric-9-box
title: ArcGIS Maps SDK for JavaScript – základy (ESM)
---

## ArcGIS Maps SDK for JavaScript – základy

**ArcGIS Maps SDK for JavaScript** (ve verzi 5.0+) je výkonný nástroj pro vytváření interaktivních webových mapových aplikací. V dalších cvičeních se naučíme základy práce s tímto API, od vytvoření jednoduché mapy a vložení do HTML stránky až po pokročilejší customizace. Na začátku se naučíme základy práce s tímto SDK v moderním standardu **ES modulů**.

### Zásadní změny v moderním SDK

Předtím, než začneme programovat, musíme pochopit dvě novinky, které verze 5.0 přináší:

1. **AMD vs. ESM:** Starší verze používaly standard AMD (Asynchronous Module Deinition – funkce `require`). Moderní JavaScript a verze 5.0 využívají **ES moduly (`import`)**. Tento přístup je rychlejší, přehlednější a odpovídá dnešním webovým standardům. Povšimnete si toho např. tak, že v HTML musíme u skriptu uvést `type="module"`.
2. **API Key:** Pro přístup k podkladovým mapám a dalším službám (geocoding, routing) je nyní vyžadován **API klíč**. Je to vaše identifikace vývojáře. Získáte ji zdarma na [developers.arcgis.com](https://developers.arcgis.com).

---

**Úvod – příprava aplikace**

- Začneme vytvořením základní HTML stránky (soubor `index.html`).
- Místo starého způsobu budeme používat moduly přímo z CDN pomocí příkazu `import`.
- Pro rozvržení stránky použijeme **CSS Flexbox**, aby mapa správně vyplnila okno prohlížeče.
- Vytvoříme `<div>` element s identifikátorem `viewDiv`.
- Nastavíme API klíč pomocí modulu `esri/config`.

Po otevření HTML souboru ve webovém prohlížeči se zobrazí interaktivní mapa. V kódu použijeme modernější řízení layoutu pomocí _flexbox_.

??? note "&nbsp;<span style="color:#448aff">Stav kódu po vložení mapy a inicializaci (v5.0 ESM)</span>"

    === "index.html"

        ``` html
        <!DOCTYPE html>
        <html lang="cs">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
            <title>Moje první pěkná mapa</title>
            
            <link rel="stylesheet" href="https://js.arcgis.com/5.0/esri/themes/light/main.css">
            
            <style>
                
                body {
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    margin: 0;
                    height: 100vh;
                    width: 100%;
                }
                h1 {
                    padding: 10px;
                    margin: 0;
                    background: #f8f8f8;
                    font-size: 1.2rem;
                }
                #viewDiv {
                    flex: 1; /* Mapa vyplní zbývající prostor */
                    width: 100%;
                }
            </style>

            <script type="module" src="https://js.arcgis.com/5.0/"></script>
    
            <script type="module" src="script.js"></script>
        
        </head>
        <body>
            <h1>První mapa v ArcGIS Maps SDK 5.0 (ESM)</h1>
            <div id="viewDiv"></div>
        </body>
        </html>
        ```

    === "script.js"

        ``` js
        // importujeme konkrétní moduly z tzv. sítě CDN
        
        const [Map, MapView, config] = await $arcgis.import([
            "esri/Map", 
            "esri/views/MapView", 
            "esri/config"
        ]);

        // 1. Nastavení API klíče (nutné pro basemapy)
        config.apiKey = "******* váš_API_key *******";

        // 2. Vytvoření instance mapy
        const map = new Map({
            basemap: "topo-vector" // původní "topo-vector"
        });

        // 3. Vytvoření pohledu na mapu
        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [14.42, 50.09], // souřadnice Prahy [lon, lat]
            zoom: 10
        });

        view.when(() => {
            console.log("Mapa byla úspěšně načtena pomocí ES modulů");
        });
        ```

---

Tento kód vytvoří jednoduchou mapu s podkladovou mapou a zobrazí Prahu.

### Přehled důležitých modulů (Standard ESM)

Podívejme se nyní na moduly. V novém standardu již nepoužíváme pole v `require`, ale každý modul importujeme samostatně.
Mezi důležité moduly patří např.:

| Modul | Popis | Příklad importu |
|---|---|---|
| `esri/Map` | Vytvoření mapy | `import Map from ".../esri/Map.js";` |
| `esri/views/MapView` | Zobrazení 2D mapy | `import MapView from ".../esri/views/MapView.js";` |
| `esri/views/SceneView` | Zobrazení 3D scény | `import SceneView from ".../esri/views/SceneView.js";` |
| `esri/layers/FeatureLayer` | Zobrazení vektorové vrstvy prvků | `import FeatureLayer from ".../esri/layers/FeatureLayer.js";` |
| `esri/layers/MapImageLayer` | Zobrazení dynamické mapové služby | `import MapImageLayer from ".../esri/layers/MapImageLayer.js";` |
| `esri/widgets/Legend` | Widget legendy | `import Legend from ".../esri/widgets/Legend.js";` |
| `esri/Graphic` | Grafický prvek | `import Graphic from ".../esri/Graphic.js";` |
| `esri/core/reactiveUtils` | Sledování změn (náhrada watchUtils) | `import * as reactiveUtils from ".../core/reactiveUtils.js";` |

---

## Přidání rastrové vrstvy

V ESM verzi můžeme importovat např. `MapImageLayer` přímo z jeho cesty jako soubor JS, ale **lepší je použít tzv. zavaděč** (řádek `<script type="module" src="https://js.arcgis.com/5.0/"></script>` v HTML souboru) a moduly poté volat pomocí funkce `$arcgis.import` (doporučené řešení od Esri).

Zde je příklad kódu pro načtení dynamické mapové služby ortofota ČÚZK:

??? note "&nbsp;<span style="color:#448aff">Vložení dynamické rastrové vrstvy (ESM)</span>"

    === "script.js"

        ``` js
        const [Map, MapView, config, MapImageLayer] = await $arcgis.import([
            "esri/Map", 
            "esri/views/MapView", 
            "esri/config",
            "esri/MapImageLayer"
        ]);

        // tedy ne přímo import MapImageLayer from "https://js.arcgis.com/5.0/esri/layers/MapImageLayer.js";

        config.apiKey = "****";

        const map = new Map({
            basemap: "arcgis-topographic"
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [14.42, 50.09],
            zoom: 12
        });

        // Načtení ortofota ČÚZK
        const ortofoto = new MapImageLayer({
            url: "https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer"
        });

        map.add(ortofoto);  // přidání k vykreslení do mapy
        ```

V ESM verzi můžeme importovat např. `MapImageLayer` přímo z jeho cesty jako soubor JS, ale lepší je použít tzv. zavaděč (řádek `<script type="module" src="https://js.arcgis.com/5.0/"></script>` v HTML souboru) a moduly poté volat pomocí funkce `$arcgis.import` (doporučené řešení od Esri).

---

## Vlastní basemap z více zdrojů

Nyní bychom rádi vytvořili mapu, která bude obsahovat jako basemap vrstvu ortofota např. s obcemi z ArcČR. Můžeme využít toho, že lze v aplikacích pracovat i s vrstvami v ArccGIS Online nebo Portal for ArcGIS. Tyto vrstvy voláme pomocí tzv. Portal ID, které lze zjistit přes REST rozhraní dané vrstvy.

Kód bude vypadat následovně:

??? note "&nbsp;<span style="color:#448aff">Vložení vlastní basemapy (ESM)</span>"

    === "script.js"

        ``` js

        const [Map, MapView, MapImageLayer, FeatureLayer, Basemap] = await $arcgis.import([
            "esri/Map", 
            "esri/views/MapView", 
            "esri/layers/MapImageLayer",
            "esri/layers/FeatureLayer",
            "esri/Basemap"
        ]);
        // nově: importujeme vektorovou vrstvu, importujeme Basemap

        const ortofoto = new MapImageLayer({
            url: "https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer",
            title: "Ortofoto ČR"
        });

        // Vytvoření vektorové vrstvy obcí pomocí ItemID
        // Není již od verze 5.0 třeba explicitně volat modul portal/PortalItem
        const obce = new FeatureLayer({
            portalItem: { id: "1838754f565b47658477ab75ea2eced0" },
            title: "Obce ČR"
        });

        // Vytvoření vlastní basemapy
        const vlastniBasemap = new Basemap({
            baseLayers: [ortofoto, obce],  // Vložíme obě vrstvy do baseLayers
            title: "Ortofoto + obce",  // Název naší vlastní basemapy
            id: "moje_basemapa"  // Unikátní ID basemapy
        });

        // Vytvoření mapy a nastavení vlastní basemapy
        const map = new Map({
            basemap: vlastniBasemap
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [14.42, 50.09], // souřadnice Prahy
            zoom: 12
        });
        ```

---

## Práce s widgety (BasemapGallery)

Abychom uživateli umožnili si podkladovou mapu přepnout na jinou, než jsme mu právě načetli, je možné vložit kus kódu pro přepínač basemap.

Widgety v ESM verzi přidáváme importem z `esri/widgets/`.

``` js

const [BasemapGallery, LocalBasemapsSource] = await $arcgis.import([
    "esri/widgets/BasemapGallery", 
    "esri/widgets/BasemapGallery/support/LocalBasemapsSource"
    });


...

// vytvoření galerie basemap s vlastním zdrojem (LocalBasemapsSource)
const basemapGallery = new BasemapGallery({
    view: view,
    // ve v5 je vhodnější použít LocalBasemapsSource pro definici vlastního seznamu
    source: new LocalBasemapsSource({
        basemaps: [
            vlastniBasemap, // naše ortofoto + obce
            Basemap.fromId("arcgis-topographic"),
            Basemap.fromId("arcgis-imagery"),
            Basemap.fromId("arcgis-navigation")
        ]
    })
});

// přidání widgetu do zobrazení (například do pravého horního rohu)
view.ui.add(basemapGallery, "top-right");

```

Případně pokud chceme využít výchozí galerii basemap, stačí deklarovat jen 

``` js
import BasemapGallery from "https://js.arcgis.com/5.0/esri/widgets/BasemapGallery.js";

...

// vytvoření instance BasemapGallery
const basemapGallery = new BasemapGallery({
    view: view
});

// přidání widgetu do zobrazení (například do pravého horního rohu)
view.ui.add(basemapGallery, "top-right");

```

Kdybychom nechtěli, aby ta galerie zabírala tolik místa, můžeme ji obalit do widgetu Expand. Např:

``` js

import Expand from "https://js.arcgis.com/5.0/esri/widgets/Expand.js";

const galerieExp = new Expand({
    view: view,
    content: basemapGallery,
    expandIcon: "basemap" // klasická basemap ikona čtyř čtverečků
});

view.ui.add(galerieExp, "top-right");

```

### Grafika v mapě

Grafika slouží k zobrazení prvků, které nejsou uloženy v databázi na serveru, ale vytváříme je přímo v prohlížeči (např. výsledek měření, zvýraznění bodu zájmu). 

Pojďme nyní zkusit do mapy přidat pár stacionárních bodů, nad kterými se zobrazí nějaký základní bodový symbol. Budeme potřebovat moduly `GraphicsLayer` a `Graphic`.

Každý grafický prvek se skládá ze tří částí: **geometrie** (poloha), **symbolu** (vzhled) a volitelně **atributů**.

??? note "&nbsp;<span style="color:#448aff">Vytvoření a zobrazení grafiky (ESM v5.0)</span>"

    === "script.js"

        ``` js

        ...

        
        import GraphicsLayer from "https://js.arcgis.com/5.0/esri/layers/GraphicsLayer.js";
        import Graphic from "https://js.arcgis.com/5.0/esri/Graphic.js";

        // 1. Vytvoření vrstvy pro grafiku a přidání do mapy
        const graphicsLayer = new GraphicsLayer({
            title: "Moje grafika"
        });
        map.add(graphicsLayer);

        // 2. Definování vzhledu (symbolu) – v5.0 stačí prostý objekt
        const pointSymbol = {
            type: "simple-marker", // autocast
            color: [0, 25, 255],   // modrá barva
            size: "10px",
            outline: {
                color: [255, 255, 255],  //bílý obrys
                width: 1
            }
        };

        // 3. Pole souřadnic měst (longitude, latitude)
        const mesta = [
            { name: "Praha", coords: [14.42, 50.09] },
            { name: "Brno", coords: [16.61, 49.20] },
            { name: "Ostrava", coords: [18.21, 49.59] },
            { name: "Jihlava", coords: [15.77, 49.09] },
            { name: "Plzeň", coords: [12.91, 50.08] }
            
        ];

        // 4. Iterování pole souřadnic a vytvoření grafických objektů
        mesta.forEach(mesto => {
            const pointGraphic = new Graphic({
                geometry: {
                    type: "point",
                    longitude: mesto.coords[0],
                    latitude: mesto.coords[1]
                },
                symbol: pointSymbol,
                attributes: {
                    NAZEV: mesto.name
                },
                // Popup se zobrazí po kliknutí na bod
                popupTemplate: {
                    title: "{NAME}",
                    content: "Toto je grafický prvek zobrazený v vrstvě GraphicsLayer."
                }
            });

            graphicsLayer.add(pointGraphic);
        });
        ```

---

### Přidání vrstev z ArcGIS Serveru (REST rozhraní)

Můžeme přidávat jako obsah samozřejmě nejen vrstvy ArcGIS Online, ale i z ArcGIS Serveru, dostupné přes REST rozhraní. K tomu nejčastěji využíváme `FeatureLayer` (pro vektorová data s možností dotazování) nebo `MapImageLayer` (pro dynamicky generované obrázky celých mapových služeb).

Zde je příklad s vrstvou silnic z DATA50 přidanou do mapy:

??? note "&nbsp;<span style="color:#448aff">Vložení vrstvy z ArcGIS Serveru (ESM)</span>"

    === "script.js"

        ``` js
        import FeatureLayer from "https://js.arcgis.com/5.0/esri/layers/FeatureLayer.js";

        // Vytvoření instance FeatureLayer směřující na REST rozhraní ArcGIS Serveru
        const silnice = new FeatureLayer({
            url: "https://ags.cuzk.cz/arcgis/rest/services/DATA50/MapServer/41",
            title: "Silniční síť (DATA50)",
            opacity: 0.8
        });

        // Přidání vrstvy do mapy
        map.add(silnice);
        ```

---

### Úkoly k procvičení
1. Vyzkoušejte si do aplikace přidat další vrstvu ze služeb ČÚZK (např. vodní toky nebo plochy z [DATA50](https://ags.cuzk.cz/arcgis/rest/services/DATA50/MapServer)).
2. Zkuste změnit typ grafického symbolu pro města na `"simple-marker"` s jiným tvarem (např. `style: "square"`).
3. Ověřte, že se po kliknutí na bod grafiky správně zobrazí okno **Popup**.

---

#### Další kroky
V příštím cvičení se naučíme:
- Pracovat s celou **WebMapou** uloženou na portálu.
- Zobrazovat **atributovou tabulku** pro vybrané vrstvy.
- Dynamicky měnit obsah legendy podle toho, co uživatel v mapě vidí.