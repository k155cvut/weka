---
icon: material/numeric-9-box
title: Práce s WebMap v prostředí ArcGIS API for JavaScript
---

## WebMap jako základní prvek interakce s mapovou aplikací

Práce s webovými mapami je pro efektivní využití ArcGIS JavaScript API důležitá a usnadňuje mnoho nastavení a konfigurace. Webové mapy uložené na ArcGIS Online nebo ArcGIS Enterprise v sobě nesou nejen definici vrstev, ale také jejich symboliku, rozsah mapy, záložky a další nastavení. Díky tomu lze ve své aplikaci snadno využít již připravený obsah.

### Načtení webové mapy do aplikace

##### Použití třídy *WebMap*

Základním nástrojem pro práci s webovými mapami je třída *WebMap* z modulu `esri/WebMap`.
ID webové mapy: K načtení konkrétní webové mapy potřebujete její unikátní ID. Toto ID je 32znakový řetězec, který najdete v URL adrese webové mapy na ArcGIS Online nebo ArcGIS Enterprise (např. `https://www.server.cz/arcgis/webmap/viewer.html?webmap=57f61c36146aa98995d68cd2b17b39ec`).
V kódu aplikace lze vytvořit instanci třídy WebMap a jako parametr jí předat ID požadované webové mapy.
Následně tuto instanci WebMap přiřadíme do mapy instance MapView.

##### Použití konstrukce *view.when()*

`view.when()` představuje důležitou metodu v ArcGIS JavaScript API, která slouží k asynchronnímu zpracování událostí souvisejících s načítáním a inicializací mapového pohledu (MapView nebo SceneView). Vrací *Promise*, která se vyřeší (*resolves*) v momentě, kdy je pohled plně inicializován a připraven k interakci.

Při načítání webové aplikace s mapou se děje mnoho věcí na pozadí – načítají se data podkladové mapy a všech přidaných vrstev, což může v závislosti na objemu a rychlosti připojení trvat různě dlouho. Prohlížeč musí tato data zpracovat a vykreslit mapu na displej. Samotný MapView nebo SceneView potřebuje čas na svou vnitřní inicializaci, nastavení počátečního rozsahu, načtení prostorového referenčního systému atd.
Pokud bychom se pokusili manipulovat s pohledem (například přidávat grafiku, registrovat události kliknutí, měnit rozsah) dříve, než je plně inicializován, mohlo by dojít k chybám, protože některé jeho interní struktury a zdroje ještě nemusí být dostupné.

V takovém případě `view.when()` nám umožňuje bezpečně spustit kód, který závisí na plně inicializovaném pohledu. Poskytuje elegantní způsob, jak zajistit, že kód bude proveden až poté, co je mapa připravena.

Můžete využít JS soubor z minula nebo si (lépe) založit aplikaci novou.
Budeme potřebovat nový modul:
`"esri/WebMap"` pro práci s webovými mapami.

``` js
    
    require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/Basemap",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/WebMap"
    ], function(Map, MapView, MapImageLayer, FeatureLayer, LayerList, Legend, Basemap, Expand, BasemapGallery, Webmap) {

 
    const webmap = new Webmap({
    portalItem: {
        id: "id_webmapy" // nahradit skutečným ID webové mapy
    }
    });

    const view = new MapView({
        container: "mapDiv", 
        map: webmap
      });

      // Kód, který závisí na plně načtené mapě, by měl být níže
    view.when(function() {
        console.log("Webová mapa byla úspěšně načtena a zobrazena.");
        // Zde lze provádět další operace s mapou nebo jejími vrstvami
      }, function(error) {
        console.error("Chyba při načítání webové mapy:", error);
      });
    });
```

Pro další práci můžete použít WebMapu s id `38b56df5741748d29bc1f7761590962b`, jedná se o ORP v Ústeckém kraji se zobrazením vybraných sídel.
Webmapa je sdílena jako everyone a můžete ji použít. Kdyby např. byla sdílena jen s organizací, bude třeba se přihlásit.

Všimněte si, že se převezmou všechna nastavení webmapy, jako např.

- pořadí vrstev;
- styl, symbolika;
- barevnost, průhlednost;
- nastavení popisu včetně měřítkového omezení;
- nastavení pop-upu (on/off a jeho položky) a další.

### Práce s webmapou

#### Zobrazení legendy pro viditelné vrstvy

Je možné dynamicky aktualizovat legendu podle viditelnosti vrstev. Vytvoříme prvek na stránce, který zobrazí legendu pouze pro aktuálně viditelné vrstvy z webové mapy. Když uživatel přepne viditelnost vrstvy  pomocí přepínače, legenda by se měla aktualizovat a zobrazit symboly pouze pro viditelné vrstvy.
Vyzkoušíme si také **zobrazení** mapových kompozičních **prvků mimo samotné mapové pole**. Pro tyto účely si rozdělíme obrazovku na pětiny, kde levé 4/5 budou představovat mapové okno, zbylá pětina vpravo ovládací prvky typu legenda a přepínač vrstev. 

V HTML souboru je třeba přidat definici pohledu:
`<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">`

a poté definovat nové divy – pro legendu a přepínač vrstev. Kompletní kód pro HTML je níže:

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Dynamická legenda pro viditelné vrstvy</title>
  <link rel="stylesheet" href="https://js.arcgis.com/4.29/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.31/"></script>
  <script src="script9.js"></script>
  <style>
    html, body, #mapDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 80%; /* mapa zabírá většinu šířky */
      float: left;
    }
    #panelDiv { /* nový kontejner pro legendu a LayerList */
      width: 20%;
      height: 100%;
      float: left;
      padding: 10px;
      box-sizing: border-box;
      overflow-y: auto; /* v případě dlouhé legendy půjde rolovat */
    }
    #legDiv {
      padding: 10px;
      margin-bottom: 10px; /* mezera mezi legendou a LayerList */
      border: 1px solid #ccc; /* ohraničení pro vizuální oddělení */
    }
    #layerListDiv {
      padding: 10px;
      border: 1px solid #ccc; /* ohraničení */
      background-color: #f9f9f9; /* jemné pozadí */
    }
  </style>
</head>
<body>
  <div id="mapDiv"></div>
  <div id="panelDiv">
    <div id="legDiv"></div>
    <div id="layerListDiv"></div>
  </div>

</body>
</html>
```

V javascriptovém souboru bude třeba iterovat přes `webmap.layers`, zkontrolovat vlastnost visible a následně použít třídu *Legend* a její vlastnost *layerInfos* pro konfiguraci zobrazených vrstev.

Podrobněji:

Vytvoříme instanci *Legend*:

- `const legend = new Legend(...)` 
- `container: "legDiv"` určuje, kam se má legenda vykreslit (do *legDiv*);
- `layerInfos: []` – inicializujeme layerInfos jako prázdné pole. Toto pole bude dynamicky aktualizováno;

Funkce `updateLegendLayerInfos()`:

Tato funkce je zodpovědná za aktualizaci obsahu legendy.

- `webmap.layers.toArray()` převede kolekci vrstev webové mapy na pole;
- `.map(layer => ({ layer: layer, title: layer.title }))` – pro každou vrstvu vytvoří objekt s vlastnostmi layer (samotná vrstva) a title (název vrstvy, který se zobrazí v legendě);
- `.filter(info => info.layer.visible)` – tento krok filtruje pole tak, aby obsahovalo pouze informace o vrstvách, jejichž vlastnost visible je true;
- `legend.layerInfos = ...` nastaví aktualizované pole layerInfos widgetu *Legend*, čímž se legenda dynamicky překreslí pouze pro viditelné vrstvy.
- 
**Inicializace a reakce na změny viditelnosti**

- `view.when(() => { ... });` (viz výše) – zajišťuje, že kód uvnitř se spustí až po načtení mapy;
- `updateLegendLayerInfos()` – první zavolání funkce pro zobrazení počáteční legendy po načtení mapy;
- `webmap.layers.on("change", () => { ... });`  přidává posluchače události `change` na kolekci `webmap.layers`. Tato událost se spouští, když se změní jakákoli vlastnost kterékoli vrstvy v kolekci (včetně viditelnosti). Při každé změně se znovu volá `updateLegendLayerInfos()`, aby se legenda aktualizovala.

Vlastní kód je zde:
``` js
  
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/WebMap",
    "esri/widgets/Legend",
    "esri/widgets/LayerList"
    ], function(Map, MapView, Webmap, Legend, LayerList) {

    const webmapId = "38b56df5741748d29bc1f7761590962b"; 

    const webmap = new Webmap({
      portalItem: {
        id: webmapId
      }
    });

    const view = new MapView({
      container: "mapDiv",
      map: webmap
    });

    const legend = new Legend({
      view: view,
      container: "legDiv",
      layerInfos: [] // inicializujeme prázdné layerInfos
    });

    const layerList = new LayerList({
      view: view,
      container: "layerListDiv"
    });

    view.when(() => {
      // funkce pro aktualizaci layerInfos legendy na základě viditelných vrstev
      function updateLegendLayerInfos() {
        legend.layerInfos = webmap.layers.toArray().map(layer => ({
          layer: layer,
          title: layer.title // použijeme název vrstvy jako titulek v legendě
        })).filter(info => info.layer.visible); // filtrujeme pouze viditelné vrstvy
      }

      // inicializace legendy po načtení mapy
      updateLegendLayerInfos();

      // reakce na změnu viditelnosti kterékoli vrstvy v mapě
      webmap.layers.on("change", () => {
        updateLegendLayerInfos();
        });
      });
    });
```

**Úkol:**
Vytvořte si vlastní webmapu. Volitelně nastavte basemap a do webmapy uložte kombinaci rastrových vrstev a vektorových vrstev takto: na pozadí budou rastrové vrstvy ortofota (ČÚZK) a III. vojenského mapování (TLS služba přístupná přes `https://www.chartae-antiquae.cz/TMS/Military3/{z}/{x}/{y}`) a nad tím vrstvy lesů, vodních ploch, vodních toků a letišť z DATA50 (`https://ags.cuzk.cz/arcgis/rest/services/DATA50/MapServer`).

**Zobrazení atributové tabulky pro vybranou vektorovou vrstvu**

Vyzkoušejte si práci s atributy vektorových vrstev a jejich zobrazením v tabulkové formě.
Uživatel si může vybrat vybrat jednu z vektorových vrstev z rozbalovacího seznamu. Po výběru by se měla zobrazit atributová tabulka pro tuto vrstvu s jejími poli a záznamy.
Budete muset získat vybranou *FeatureLayer* z `webmap.layers`. Pro zobrazení atributové tabulky můžete použít buď hotový widget *FeatureTable* z `esri/widgets/FeatureTable` nebo si můžete data načíst pomocí `layer.queryFeatures()` a dynamicky vytvořit HTML tabulku.








