---
icon: material/numeric-11-box
title: Analytické nástroje a dotazy
---

V tomto cvičení si vyzkoušejte práci s dalšími pokročilými prvky aplikací, např. filtrování dat, analýzy, hledání nejkratších cest

## Analýza dat v prohlížeči: Client-side vs. Server-side

Dnes se posuneme od prostého zobrazování dat k jejich analýze. V ArcGIS Maps SDK rozlišujeme dva základní přístupy k dotazování (Query), které se liší tím, kde se výpočet odehrává.



## 1. Client-side Query (LayerView)
Pracuje velmi rychle pouze s daty, která už jsou stažená v prohlížeči. Je ideální pro interaktivní filtry a analýzy nad tím, co uživatel zrovna vidí v mapě.

Místo abychom se ptali serveru přes query, využijeme metodu layerView.queryFeatures(). Ta pracuje pouze s daty, která už prohlížeč stáhl pro zobrazení mapy. Výsledek je díky tomu okamžitý.

??? note "&nbsp;<span style="color:#448aff">Příkladový kód – kreslení a buffer"

    === "index.html"
        
        ``` html

<!DOCTYPE html>
        <html lang="cs">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
        <title>Moje další pěkná mapa</title>

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
        <div id="viewDiv"></div>
        <div id="resultsPanel">
        <h3>Analýza</h3>
        <p>Nakreslete bod do mapy. Vytvoří se 5km buffer a spočítáme vybrané prvky.</p>
        <div id="resultText">Čekám na kresbu...</div>
        </div>
        </body>
        </html>
        ```
        
    === "script.js"

        ``` js

            const [Map, MapView, config, WebMap, GraphicsLayer, Sketch, geometryEngine, Graphic] = await $arcgis.import([
            "esri/Map", 
            "esri/views/MapView", 
            "esri/config",
            "esri/WebMap",
            "esri/layers/GraphicsLayer",
            "esri/widgets/Sketch",
            "esri/geometry/geometryEngine",
            "esri/Graphic"
            ]);


            config.apiKey = " *********** ";

            const webmap = new WebMap({
            portalItem: { id: "38b56df5741748d29bc1f7761590962b" }
            });

            const view = new MapView({
            container: "viewDiv",
            map: webmap
            });

            
            const sketchLayer = new GraphicsLayer();
            const bufferLayer = new GraphicsLayer(); // vrstva pro zobrazení obalové zóny
            webmap.addMany([bufferLayer, sketchLayer]);

            const sketch = new Sketch({
            view: view,
            layer: sketchLayer,
            creationMode: "update"
            });
            view.ui.add(sketch, "top-left");

            // reakce na dokončení kresby
            sketch.on("create", (event) => {
            if (event.state === "complete") {
                runAnalysis(event.graphic.geometry);
            }
            });

            async function runAnalysis(geometry) {
            bufferLayer.removeAll();
            
            // napřed vytvoření obalové zóny (5 km) pomocí Geometry Engine
            const buffer = geometryEngine.geodesicBuffer(geometry, 5, "kilometers");
            
            bufferLayer.add(new Graphic({
                geometry: buffer,
                symbol: {
                type: "simple-fill",
                color: [255, 0, 0, 0.2],    // 20% průhlednost barvy
                outline: { color: [255, 0, 0], width: 1 }
                }
            }));

            // najdeme FeatureLayerView pro vrstvu sídel (index 0 v této WebMapě)
            const layer = webmap.layers.getItemAt(0);
            const layerView = await view.whenLayerView(layer);
            // alternativně → const layer = webmap.findLayerById("konkrétní_ID_vrstvy");

            // klientský prostorový dotaz
            const query = layerView.createQuery();
            query.geometry = buffer; // dotazujeme se geometrií bufferu
            query.spatialRelationship = "intersects";

            const results = await layerView.queryFeatures(query);
            document.getElementById("resultText").innerHTML = `Počet prvků v bufferu: <b>${results.features.length}</b>`;
            }
        ```


### Samostatně si vyzkoušejte 

Vytvořte interaktivní aplikaci, která vypíše prvky na základě uživatelova vstupu. 

Vlastní WebMapa: Použijte svou WebMapu z minulého cvičení.
Měření plochy: Přidejte do aplikace widgety pro měření vzdálenosti a plochy (DistanceMeasurement2D, AreaMeasurement2D). Umístěte je do widgetu Expand.

Upravte skript tak, aby:

- aplikace vytvořila obalovou zónu (např. 2 km) kolem této linie;

- aplikace vypsala jmenný seznam prvků (např. názvy obcí), které tato zóna protíná.

Můžete zkusit vylepšení, že se výsledný seznam obcí vypíše do postranního panelu jako HTML seznam (<ul>).

??? tip Seznam názvů 
    Získat ho z výsledků dotazu můžete např. takto:
    `const names = results.features.map(f => f.attributes.NAZEV).join(", ");`


## 2. Server-side Query (FeatureLayer)
Tento dotaz prohledává **celou databázi na serveru**. Je nezbytný, pokud hledáte prvek, který zrovna nemáte stažený v prohlížeči (např. hledáte obec podle názvu v rámci celé ČR).

**Příklad použití:**

??? note "&nbsp;<span style="color:#448aff">Server-side dotaz</span>"

    === "script.js"

        ``` js
            
            const [FeatureLayer] = await $arcgis.import([
            "esri/layers/FeatureLayer" 
            ]);


            const layer = new FeatureLayer({ url: "..." });
            // Můžete využít např. vrstev DATA50 z ArcGIS Server služby ČÚZK

            // Vytvoření dotazu pro server
            const query = layer.createQuery();
            query.where = "NAZEV = 'Praha'"; // SQL podmínka
            query.outFields = ["*"];    // výpis vrácených atributů
            query.returnGeometry = true;

            // Provedení dotazu na serveru
            layer.queryFeatures(query).then((results) => {
                const feature = results.features[0];
                view.goTo(feature.geometry); // mapa se přesune na nalezený prvek
            });
        ```

Využívá se zde standardní metody Query, kterou lze volat i napřímo z internetového prohlížeče, pokud není nad feature službou zakázána.

### Úkol k procvičení: Vlastní SQL konzole (Server-side filtering)

Cílem je vytvořit jednoduchý ovládací panel, kde uživatel napíše SQL podmínku (následující po WHERE) a aplikace ji aplikuje přímo na vrstvu v mapě. K tomu využijeme vlastnost _definitionExpression_.

Tato vlastnost u FeatureLayer funguje jako filtr přímo na straně serveru. Server pošle do prohlížeče pouze ty prvky, které splňují danou podmínku. Je to mnohem efektivnější než stahovat všechna data a pak je skrývat pomocí JavaScriptu.

??? note "Příkladový kód: SQL filtr – pouze nové části kódu"

    === "index.html"

        ``` html
        <div id="sqlPanel" style="padding: 10px; background: #ebebeb; border-bottom: 1px solid #ccc;">
        <h4>SQL Konzole</h4>
        <p style="font-size: 0.8rem;">Zadejte podmínku (např. <code>POČET_OBYV > 10000</code>)</p>
        <input type="text" id="sqlInput" placeholder="SQL klauzule WHERE..." style="width: 80%; padding: 5px;">
        <button id="applyFilter">Filtrovat</button>
        <button id="clearFilter">Zrušit</button>
        <div id="sqlError" style="color: red; font-size: 0.8rem; margin-top: 5px;"></div>
        </div>
        ```

    === "script.js"

        ``` js
        // Předpokládáme, že už máte načtený $arcgis.import z předchozí části

        view.when(() => {
        // najdeme vrstvu, kterou chceme filtrovat
        const layer = webmap.allLayers.find(l => l.id === "xxxxx");
        // můžete použít např. obce z ArcČR z portálové položky s ID = cec12ac8c6bb4dba8b5c0f11657d7a39
        // kde lze využít atributy o počtech obyvatel, domů apod.

        const input = document.getElementById("sqlInput");
        const btnApply = document.getElementById("applyFilter");
        const btnClear = document.getElementById("clearFilter");
        const errorDiv = document.getElementById("sqlError");

        // funkce pro aplikaci filtru
        btnApply.addEventListener("click", () => {
            const sqlText = input.value;
            errorDiv.innerHTML = ""; // vyčistit staré texty

            // nastavením definitionExpression se automaticky vyvolá nový dotaz na server
            layer.definitionExpression = sqlText;

            // volitelná kontrola, zda se něco vyfiltrovalo
            view.whenLayerView(layer).then((lv) => {
            // sledujeme, až se vrstva doupraví (aktualizuje)
            reactiveUtils.whenOnce(() => !lv.updating).then(() => {
                console.log("Filtr aplikován: " + sqlText);
            });
            }).catch(err => {
            errorDiv.innerHTML = "Chyba v SQL dotazu!";
            console.error(err);
            });
        });

        // zrušení filtru
        btnClear.addEventListener("click", () => {
            input.value = "";
            layer.definitionExpression = null; // Nastavením na null zobrazíme vše
            errorDiv.innerHTML = "";
        });
        });

        ```


### Rozdíl mezi oběma přístupy

V podstatě jde o rozdíl mezi „filtrováním toho, co lze vidět v mapě“ a „dotazováním se na data, která chci analyzovat“.

**definitionExpression**
   
Nastavíme-li *definitionExpression*, říkáme vrstvě, že další prvky nyní neexistují, Vrstva se na mapě okamžitě překreslí. Prvky, které nesplňují podmínku, zmizí. Je to trvalý stav. Dokud se podmínka nezmění nebo nenastaví na *null*, vrstva bude zobrazovat jen ten výběr.

Využijeme např., když chceme v mapě nechat např. jen obce z jednoho konkrétního okresu a vše ostatní skrýt.

``` js
// všechno ostatní z mapy zmizí
layer.definitionExpression = "KRAJ = 'Ústecký'";
```

**layer.queryFeatures()**

Dotaz (Query) je jednorázová akce. Podobně jako když pošleme požadavek do databáze a čekáme na odpověď (objekt featureSet).

Na mapě se samo o sobě nezmění vůbec nic. Všechny prvky tam zůstanou dál. Ale v JavaScriptu obdržíme pole prvků (atributy, geometrii), se kterými pak můžeme v kódu dál pracovat (např. vypsat jejich jména do seznamu, spočítat průměrný věk, nechat je zvýraznit apod.).

Využijeme např., když chceme zjistit, kolik lidí žije v obcích nad 5000 obyvatel, ale v mapě chceme mít pořád zobrazené všechny obce.

``` js
const query = layer.createQuery();
query.where = "OBYVATEL > 5000";

// mapa vypadá pořád stejně, ale v proměnné results máme data pro další výpočty
const results = await layer.queryFeatures(query);
console.log("Mám data pro " + results.features.length + " obcí.");
```