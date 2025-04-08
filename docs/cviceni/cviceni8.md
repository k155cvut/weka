---
icon: material/numeric-8-box
title: ArcGIS for JavaScript – základy
---


## ArcGIS API for JavaScript – základy

**ArcGIS API for JavaScript** je výkonný nástroj pro vytváření interaktivních webových mapových aplikací. V dalších cvičeních se naučíme základy práce s tímto API, od vytvoření jednoduché mapy a vložení do HTML stránky až po pokročilejší customizace.

**Úvod – potřebné stránky**

- Začneme vytvořením základní HTML stránky (soubor `index.html`), do které chceme vložit mapu.
- Vytvoříme `<div>` element s identifikátorem "mapDiv", který bude sloužit jako kontejner pro mapu.
- Přidáme JavaScript kód, který vytvoří mapu.
- Použijeme modul *esri/Map* k vytvoření instance mapy.
- Nastavíme základní mapu (basemap) pomocí vlastnosti *basemap*.
- Vytvoříme instanci esri/views/MapView a nastavíme kontejner mapy pomocí vlastnosti *container*.
- Nastavíme střed mapy (*center*) a úroveň přiblížení (*zoom*).
- Vložíme JavaScript kód do souboru `script.js`.
- Přidáme odkaz na ArcGIS API for JavaScript a na soubor se skriptem v `<head>` elementu HTML stránky.

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
            <script src="https://js.arcgis.com/4.28/"></script>     <!-- odkaz na knihovny a skripty Esri   -->
            <script src="script.js"></script>
            <style>
                #mapDiv {
                    width: 60%;
                    height: 600px;
                    
                }
            </style>

        </head>
        <body>
            <h1>První mapa vytvořená v ArcGIS API for JavaScript</h1>
            <div id="mapDiv"></div>

        </body>
        </html>
        ```

    === "script.js"

        ``` js
        require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
            const map = new Map({
                basemap: "streets"      // rastrová basemapa, lze jinak volit např. topo, satellite, hybrid, gray, oceans atd.
                                        // nebo vektorové např. streets-vector, topo-vector, gray-vector apod.
            });
            const view = new MapView({
                container: "mapDiv",
                map: map,
                center: [14.42, 50.09], // souřadnice Prahy
                zoom: 10
            });
        });
        ```


Tento kód vytvoří jednoduchou mapu s podkladovou mapou *streets* a zobrazí Prahu.

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

??? note "&nbsp;<span style="color:#448aff">Vložení dynamické rastrové vrstvy</span>"

    === "script.js"

        ``` js
        require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",

        ], function(Map, MapView, MapImageLayer) {

        var map = new Map({
            basemap: "streets"     // rastrová basemapa, lze jinak volit např. topo, satellite, hybrid, gray, oceans atd.
                                   // nebo vektorové např. streets-vector, topo-vector, gray-vector apod.
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [14.42, 50.09], // souřadnice Prahy
            zoom: 12
        });

        var Ortofoto = new MapImageLayer({
            url: "https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer"
        });

        map.add(Ortofoto);          // přidání k vykreslení do mapy
        });
        ```


Nyní bychom rádi vytvořili mapu, která bude obsahovat jako basemap vrstvu ortofota např. s obcemi z ArcČR. Můžeme využít toho, že lze v aplikacích pracovat i s vrstvami v ArccGIS Online nebo Portal for ArcGIS. Tyto vrstvy voláme pomocí tzv. Portal ID, které lze zjistit přes REST rozhraní dané vrstvy.

Kód bude vypadat následovně:

??? note "&nbsp;<span style="color:#448aff">Vložení vlastní basemapy</span>"

    === "script.js"

        ``` js
        require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/layers/FeatureLayer", //nově: importujeme vektorovou vrstvu
        "esri/Basemap", // nově: importujeme Basemap
        "esri/portal/PortalItem" //nově: importujeme položku z ArcGIS Online
        ], function(Map, MapView, MapImageLayer, FeatureLayer, Basemap) {

        // Vytvoření rastrové vrstvy pro ortofoto
        const ortofoto = new MapImageLayer({
            url: "https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer",
            title: "Ortofoto ČR"
        });

        // Vytvoření vektorové vrstvy obcí pomocí ItemID
        const obce = new FeatureLayer({
            portalItem: {
            id: "1838754f565b47658477ab75ea2eced0"
            },
            title: "Obce ČR"
        });

        // Vytvoření vlastní basemapy
        const vlastniBasemap = new Basemap({
            baseLayers: [ortofoto, obce], // Vložíme obě vrstvy do baseLayers
            title: "Ortofoto + hranice obcí", // Název naší vlastní basemapy
            id: "ortofoto-obce" // Unikátní ID basemapy
        });

        // Vytvoření mapy a nastavení vlastní basemapy
        const map = new Map({
            basemap: vlastniBasemap // Použijeme naši vlastní basemapu
        });

        var view = new MapView({
            container: "mapDiv",
            map: map,
            center: [14.42, 50.09], // souřadnice Prahy
            zoom: 12
        });
        
        });
        ```

Abychom uživateli umožnili si podkladovou mapu přepnout na jinou, než jsme mu právě načetli, je možné vložit kus kódu pro přepínač basemap.

``` js

"esri/widgets/BasemapGallery"

...

// Vytvoření instance BasemapGallery
const basemapGallery = new BasemapGallery({
    view: view,
        source: [ // nastavení zdroje basemap – můžeme přidat naši vlastní
        vlastniBasemap,
        "topo-vector",
        "satellite",
        "streets"
        // můžete přidat další předdefinované basemapy nebo instance Basemap
    ]
  });

  // přidání BasemapGallery widgetu do zobrazení (například do pravého horního rohu)
  view.ui.add(basemapGallery, {
    position: "top-right"
  });
```

Případně pokud chceme využít výchozí galerii basemap, stačí deklarovat jen 

``` js

"esri/widgets/BasemapGallery"

...

// Vytvoření instance BasemapGallery
const basemapGallery = new BasemapGallery({
    view: view
    });

  // přidání BasemapGallery widgetu do zobrazení (například do pravého horního rohu)
    view.ui.add(basemapGallery, {
    position: "top-right"
    });
```


### Grafika v mapě

Pojďme nyní zkusit do mapy přidat pár stacionárních bodů, nad kterými se zobrazí nějaký základní bodový symbol.

Budeme potřebovat další moduly, a to `esri/Graphic`, `esri/layers/GraphicsLayer` a `esri/symbols/SimpleMarkerSymbol`.
Následující kus kódu přidá do mapy několik bodů definovaných v poli `coordinates` – několik měst:

``` js

// Vytvoření vrstvy pro grafiku (body)
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  // Definování symbolu pro body
  const pointSymbol = new SimpleMarkerSymbol({
    color: [0, 0, 255], // Modrá barva
    outline: {
      color: [255, 255, 255], // Bílá obrys
      width: 1
    },
    size: 8
  });

  // pole souřadnic bodů (longitude, latitude)
  const coordinates = [
    [14.42, 50.09],   // Praha
    [16.61, 49.20],   // Brno
    [18.21, 49.59],   // Ostrava
    [15.77, 49.09],   // Jihlava
    [12.91, 50.08]    // Plzeň
  ];

  // iterování pole souřadnic a vytvoření grafických objektů
  coordinates.forEach(function(coords) {
    // vytvoření geometrie bodu
    const point = {
      type: "point",
      longitude: coords[0],
      latitude: coords[1]
    };

    // vytvoření grafického objektu
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: pointSymbol
    });

    // přidání grafického objektu do vrstvy grafiky
    graphicsLayer.add(pointGraphic);
  });
```

### Přidání vrstev z ArcGIS Serveru

Můžeme přidávat jako obsah samozřejmě nejen vrstvy ArcGIS Online, ale i z ArcGIS Serveru, dostupné přes REST rozhraní.

Zde je příklad s vrstvou silnic z DATA50 přidanou do mapy:

``` js
    const silnice = new FeatureLayer({
    url: "https://ags.cuzk.cz/arcgis/rest/services/DATA50/MapServer/41"  // vrstva silnic z DATA50
    });

    // přidání vrstvy z ArcGIS Serveru do mapy
    map.add(silnice);
```

Vyzkoušejte si práci s různými druhy vrstev (rastrové, vektorové; z ArcGIS Online, ze serveru). 


#### Další kroky

- Naučíme se přidávat interaktivní prvky do mapy – např. popup okna.
- Přidáme kompoziční prvky (legendu, galerii podkladových map apod.).
- Naučíme se pracovat s geometriemi a symboly pro vizualizaci dat na mapě.
- Přidáme geoprocessingové nástroje pro analýzu dat na mapě.
- Funkcionalitu mapové aplikace rozšíříme pomocí widgetů.

