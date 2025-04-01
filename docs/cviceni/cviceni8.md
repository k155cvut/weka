---
icon: material/numeric-8-box
title: ArcGIS for JavaScript – základy
---


## ArcGIS API for JavaScript – základy

**ArcGIS API for JavaScript** je výkonný nástroj pro vytváření interaktivních webových mapových aplikací. V dalších cvičeních se naučíme základy práce s tímto API, od vytvoření jednoduché mapy a vložení do HTML stránky až po pokročilejší customizace.

**HTML stránka**
- Začneme vytvořením základní HTML stránky (soubor `index.html`), do které vložíme mapu.
- Vytvoříme <div> element s id "mapaDiv", který bude sloužit jako kontejner pro mapu.
- Přidáme JavaScript kód, který vytvoří mapu.
- Použijeme modul esri/Map k vytvoření instance mapy.
- Nastavíme základní mapu (basemap) pomocí vlastnosti basemap.
- Vytvoříme instanci esri/views/MapView a nastavíme kontejner mapy pomocí vlastnosti container.
- Nastavíme střed mapy (center) a úroveň přiblížení (zoom).
- Vložíme JavaScript kód do souboru `script.js`.
- Přidáme odkaz na ArcGIS API for JavaScript a na soubor se skriptem v <head> elementu HTML stránky.

Po otevření HTML souboru ve webovém prohlížeči se zobrazí interaktivní mapa.


??? note "&nbsp;<span style="color:#448aff">Stav kódu po vložení mapy do stránky a její inicializaci </span>"

    === "index.html"

        ``` html
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <title>Pěkná mapa č. I</title>
            <link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/light/main.css">
            <script src="https://js.arcgis.com/4.28/"></script>
            <script src="script.js"></script>
            <script type="module" src="script.js"></script>
            <style>
                #mapDiv {
                    width: 60%;
                    height: 600px;
                    
                }
            </style>

        </head>
        <body>
            <h1>Pokusná mapa</h1>
            <div id="mapDiv"></div>

        </body>
        </html>

        ```

    === "script.js"

        ``` js
        import Map from "esri/Map";
        import MapView from "esri/views/MapView";

        const map = new Map({
            basemap: "streets"
        });

        const view = new MapView({
            container: "mapDiv",
            map: map,
            center: [14.42, 50.09], // souřadnice Prahy
            zoom: 14
        });
        ```


Tento kód vytvoří jednoduchou mapu s podkladovou mapou "streets" a zobrazí Prahu, ovšem vyžaduje spouštění skriptů jako modulů, což není na serveru vždy zajištěno.

Stejně tak by se kód dal zapsat i následovně, což bude vždy fungovat:

??? note "&nbsp;<span style="color:#448aff">Stav kódu po vložení mapy do stránky a její inicializaci – použití *require* </span>"

    === "script.js"

        ``` js
        require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
            const map = new Map({
                basemap: "streets"
            });
            const view = new MapView({
                container: "mapDiv",
                map: map,
                center: [14.42, 50.09], // Souřadnice Prahy
                zoom: 10
            });
        });
        ```

Podívejme se nyní na sekci **require**. Zde jsou běžně definovány moduly, které mapová aplikace vyžaduje ke svému běhu.
Mezi důležité moduly patří např.:

| Modul | Popis | Příklad použití |
|---|---|---|
| `esri/Map` | Vytvoření mapy | `var map = new Map({ basemap: "streets" });` |
| `esri/views/MapView` | Zobrazení 2D mapy | `var view = new MapView({ container: "viewDiv", map: map });` |
| `esri/views/SceneView` | Zobrazení 3D scény | `var view = new SceneView({ container: "viewDiv", map: map });` |
| `esri/layers/FeatureLayer` | Zobrazení vektorové vrstvy prvků | `var layer = new FeatureLayer({ url: "https://.../FeatureServer/0" });` |
| `esri/layers/MapImageLayer` | Zobrazení dynamické mapové služby | `var layer = new MapImageLayer({ url: "https://.../MapServer" });` |
| `esri/layers/ImageryLayer` | Zobrazení rastrové vrstvy snímků | `var layer = new ImageryLayer({ url: "https://.../ImageServer" });` |
| `esri/layers/GraphicsLayer` | Zobrazení grafických prvků | `var layer = new GraphicsLayer();` |
| `esri/geometry/*` | Práce s geometriemi (body, linie, polygony) | `var point = new Point({ x: 10, y: 20 });` |
| `esri/symbols/*` | Nastavení symbolů pro prvky | `var symbol = new SimpleMarkerSymbol({ color: "red" });` |
| `esri/widgets/*` | Přidání widgetů pro ovládání mapy | `var legend = new Legend({ view: view });` |
| `esri/tasks/*` | Geoprocessingové úlohy | `var task = new GeoprocessingTask({ url: "https://.../GPServer/Buffer" });` |
| `esri/Graphic` | Vytvoření grafického prvku | `var graphic = new Graphic({ geometry: point, symbol: symbol });` |
| `esri/PopupTemplate` | Vytvoření popup okna | `var template = new PopupTemplate({ title: "Atributy", content: "{*}" });` |
| `esri/core/watchUtils` | Sledování změn vlastností objektů | `watchUtils.when(view, "stationary", function() { ... });` |
| `dojo/domReady!` | Zajistí, že se kód spustí až kompletním načtení DOM | –– | 



## Přidání rastrové vrstvy

Přidání vrstvy do mapy:

V JavaScriptovém kódu aplikace používáme modul `esri/layers/MapImageLayer` pro načtení dynamické mapové služby nebo modul `esri/layers/FeatureLayer` pro načtení vektorové vrstvy prvků.

Zde je příklad kódu pro načtení dynamické mapové služby ortofota ČÚZK:


    === "script.js"

        ``` js
        require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/widgets/LayerList",
        "esri/widgets/Legend",
        "esri/widgets/Fullscreen",
        ], function(Map, MapView, MapImageLayer, LayerList, Legend, Fullscreen) {

        var map = new Map({
            basemap: "streets"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [14.42, 50.09], // Souřadnice Prahy
            zoom: 12
        });

        var Ortofoto = new MapImageLayer({
            url: "https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer"
        });

        map.add(Ortofoto);
        });
        ```







#### Další kroky

Přidání vrstev:
Naučíme se přidávat různé typy vrstev do mapy, jako jsou rastrové vrstvy, vektorové vrstvy a vrstvy prvků.

Interakce s mapou:
Naučíme se přidávat interaktivní prvky do mapy, jako jsou popup okna, grafika a události.

Geometrie a symboly:
Naučíme se pracovat s geometriemi a symboly pro vizualizaci dat na mapě.

Geoprocessing:
Naučíme se používat geoprocessingové nástroje pro analýzu dat na mapě.

Widgety:
Naučíme se používat widgety pro přidání funkcionality do mapové aplikace.

