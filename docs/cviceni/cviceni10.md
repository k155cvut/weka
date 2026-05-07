---
icon: material/numeric-10-box
title: Práce s WebMap v prostředí ArcGIS Maps SDK for JavaScript
---

## WebMap jako základní prvek interakce s mapovou aplikací

Práce s webovými mapami je pro efektivní využití **ArcGIS Maps SDK for JavaScript** (dříve ArcGIS API for JS) podstatná a usnadňuje mnoho nastavení a konfigurace. Webové mapy uložené na ArcGIS Online nebo ArcGIS Enterprise v sobě nesou nejen definici vrstev, ale také jejich symboliku, rozsah mapy, záložky a další nastavení. Díky tomu lze ve své aplikaci snadno využít již připravený obsah.

### Načtení webové mapy do aplikace

##### Použití třídy *WebMap*

Základním nástrojem pro práci s webovými mapami je třída *WebMap* z modulu `esri/WebMap.js`. 
**ID webové mapy:** K načtení konkrétní webové mapy potřebujete její unikátní ID. Toto ID je 32znakový řetězec, který najdete v URL adrese webové mapy na ArcGIS Online (např. `https://www.server.cz/arcgis/webmap/viewer.html?webmap=57f61c36146aa98995d68cd2b17b39ec`).

Připomínáme, že v moderním standardu **ESM** již nepoužíváme funkci `require`, ale moduly importujeme přímo. Důležité je také nastavení **API klíče**, bez kterého se v nové verzi SDK basemapy a některé služby nenačtou.

V kódu aplikace lze vytvořit instanci třídy WebMap a jako parametr jí předat ID požadované webové mapy.
Následně tuto instanci WebMap přiřadíme do mapy instance MapView.

##### Použití konstrukce *view.when()*

`view.when()` představuje důležitou metodu, která slouží k asynchronnímu zpracování událostí souvisejících s načítáním a inicializací mapového pohledu (`MapView` nebo `SceneView`). Vrací *Promise*, která se vyřeší (*resolves*) v momentě, kdy je pohled plně inicializován a připraven k interakci.

Při načítání webové aplikace s mapou se děje mnoho věcí na pozadí – načítají se data podkladové mapy a všech přidaných vrstev, což může v závislosti na objemu a rychlosti připojení trvat různě dlouho. Prohlížeč musí tato data zpracovat a vykreslit mapu na displej. Samotný MapView nebo SceneView potřebuje čas na svou vnitřní inicializaci, nastavení počátečního rozsahu, načtení prostorového referenčního systému atd.
Pokud bychom se pokusili manipulovat s pohledem (například přidávat grafiku, registrovat události kliknutí, měnit rozsah) dříve, než je plně inicializován, mohlo by dojít k chybám, protože některé jeho interní struktury a zdroje ještě nemusí být dostupné. 

V takovém případě `view.when()` nám umožňuje bezpečně spustit kód, který závisí na plně inicializovaném pohledu. Poskytuje elegantní způsob, jak zajistit, že kód bude proveden až poté, co je mapa připravena.

Můžete využít JS soubor z minula nebo si (lépe) založit aplikaci novou.
Budeme potřebovat nový modul `esri/WebMap` pro práci s webovými mapami.

``` js
    
    // Importujeme potřebné moduly pro verzi 5.0
    import config from "https://js.arcgis.com/5.0/esri/config.js";
    import WebMap from "https://js.arcgis.com/5.0/esri/WebMap.js";
    import MapView from "https://js.arcgis.com/5.0/esri/views/MapView.js";

    // Nastavení API klíče (nutné pro Location Services)
    config.apiKey = "******";

    const webmap = new WebMap({
      portalItem: {
        id: "id_webmapy" // nahradit skutečným ID webové mapy
      }
    });

    const view = new MapView({
      container: "mapDiv", 
      map: webmap
    });

          // Kód, který závisí na plně načtené mapě, by měl být níže
    view.when(() => {
        console.log("Webová mapa byla úspěšně načtena a zobrazena.");
        // Zde lze bezpečně provádět další operace s mapou nebo jejími vrstvami
      }, (error) => {
        console.error("Chyba při načítání webové mapy:", error);
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

---

### Práce s webmapou

#### Zobrazení legendy pro viditelné vrstvy

Je možné dynamicky aktualizovat legendu podle viditelnosti vrstev. Vytvoříme prvek na stránce, který zobrazí legendu pouze pro aktuálně viditelné vrstvy z webové mapy. Když uživatel přepne viditelnost vrstvy  pomocí přepínače, legenda by se měla aktualizovat a zobrazit symboly pouze pro viditelné vrstvy.
Vyzkoušíme si také **zobrazení** mapových kompozičních **prvků mimo samotné mapové pole**. Pro tyto účely si rozdělíme obrazovku na pětiny, kde levé 4/5 budou představovat mapové okno, zbylá pětina vpravo ovládací prvky typu legenda a přepínač vrstev. 
Vytvoříme aplikaci, která zobrazuje legendu pouze pro aktuálně viditelné vrstvy. Pro rozvržení použijeme CSS Flexbox, kde mapa zabere 80 % šířky a postranní panel zbylých 20 %.

V HTML souboru musíme u skriptu nastavit `type="module"`.

??? note "&nbsp;<span style="color:#448aff">Dynamická legenda a LayerList</span>"

    === "index.html"

        ``` html
        <!DOCTYPE html>
        <html lang="cs">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
          <title>Dynamická legenda (ESM)</title>
          <link rel="stylesheet" href="https://js.arcgis.com/5.0/esri/themes/light/main.css">
          <script type="module" src="script.js"></script>
          <style>
            html, body { 
              padding: 0; 
              margin: 0; 
              height: 100%; 
              width: 100%; 
              display: flex; }
            #mapDiv { 
              flex: 4; 
              height: 100%; }
            #panelDiv { /* nový kontejner pro legendu a LayerList */
                flex: 1; 
                padding: 10px; 
                box-sizing: border-box; 
                overflow-y: auto; /* v případě dlouhé legendy půjde rolovat */
                background-color: #f9f9f9; 
                border-left: 1px solid #ccc;  }
            #legDiv, #layerListDiv { 
              padding: 10px; 
              margin-bottom: 10px;  /* mezera mezi legendou a LayerList */
              border: 1px solid #ccc; 
              background: white; }
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

    === "script.js"

        ``` js
        import config from "[https://js.arcgis.com/5.0/esri/config.js](https://js.arcgis.com/5.0/esri/config.js)";
        import WebMap from "[https://js.arcgis.com/5.0/esri/WebMap.js](https://js.arcgis.com/5.0/esri/WebMap.js)";
        import MapView from "[https://js.arcgis.com/5.0/esri/views/MapView.js](https://js.arcgis.com/5.0/esri/views/MapView.js)";
        import Legend from "[https://js.arcgis.com/5.0/esri/widgets/Legend.js](https://js.arcgis.com/5.0/esri/widgets/Legend.js)";
        import LayerList from "[https://js.arcgis.com/5.0/esri/widgets/LayerList.js](https://js.arcgis.com/5.0/esri/widgets/LayerList.js)";
        import * as reactiveUtils from "[https://js.arcgis.com/5.0/esri/core/reactiveUtils.js](https://js.arcgis.com/5.0/esri/core/reactiveUtils.js)";

        config.apiKey = "VÁŠ_API_KLÍČ";

        const webmap = new WebMap({
          portalItem: { id: "38b56df5741748d29bc1f7761590962b" }
        });

        const view = new MapView({
          container: "mapDiv",
          map: webmap
        });

        const legend = new Legend({
          view: view,
          container: "legDiv",
          layerInfos: [] 
        });

        const layerList = new LayerList({
          view: view,
          container: "layerListDiv"
        });

        view.when(() => {
          function updateLegend() {
            legend.layerInfos = webmap.layers.toArray().map(layer => ({
              layer: layer,
              title: layer.title 
            })).filter(info => info.layer.visible);
          }

          updateLegend();

          // Sledování změn v kolekci vrstev a jejich viditelnosti pomocí reactiveUtils
          reactiveUtils.on(() => webmap.layers, "change", () => updateLegend());
          
          webmap.layers.forEach(layer => {
            reactiveUtils.watch(() => layer.visible, () => updateLegend());
          });
        });
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



**Úkol:**
Vytvořte si vlastní webmapu. Volitelně nastavte basemap a do webmapy uložte kombinaci rastrových vrstev a vektorových vrstev takto: na pozadí budou rastrové vrstvy ortofota (ČÚZK) a III. vojenského mapování (TLS služba přístupná přes `https://www.chartae-antiquae.cz/TMS/Military3/{z}/{x}/{y}`) a nad tím vrstvy lesů, vodních ploch, vodních toků a letišť z DATA50 (`https://ags.cuzk.cz/arcgis/rest/services/DATA50/MapServer`).

---

**Zobrazení atributové tabulky pro vybranou vektorovou vrstvu**

Vyzkoušejte si práci s atributy vektorových vrstev a jejich zobrazením v tabulkové formě.
Uživatel si může vybrat vybrat jednu z vektorových vrstev z rozbalovacího seznamu. Po výběru by se měla zobrazit atributová tabulka pro tuto vrstvu s jejími poli a záznamy.
Budete muset získat vybranou *FeatureLayer* z `webmap.layers`. Pro zobrazení atributové tabulky můžete použít buď hotový widget *FeatureTable* z `esri/widgets/FeatureTable` nebo si můžete data načíst pomocí `layer.queryFeatures()` a dynamicky vytvořit HTML tabulku.

Kód může vypadat např. takto, je třeba přidat příslušné elementy i do HTML stránky:

??? note "&nbsp;<span style="color:#448aff">Atributová tabulka a výběr vrstvy</span>"

    === "index.html"

        ``` html
        <!DOCTYPE html>
        <html lang="cs">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
          <title>Atributová tabulka</title>
          <link rel="stylesheet" href="[https://js.arcgis.com/5.0/esri/themes/light/main.css](https://js.arcgis.com/5.0/esri/themes/light/main.css)">
          <script type="module" src="script.js"></script>
          <style>
            html, body { padding: 0; margin: 0; height: 100%; width: 100%; display: flex; flex-direction: column; }
            #mapDiv { flex: 7; width: 100%; }
            #controls { padding: 10px; background: #eee; border-top: 1px solid #ccc; }
            #tableDiv { flex: 3; width: 100%; overflow: auto; background: white; }
          </style>
        </head>
        <body>
            <div id="mapDiv"></div>
            <div id="controls">
              <select id="layerSelect">
                <option value="">Vyberte vektorovou vrstvu ...</option>
              </select>
            </div>
            <div id="tableDiv"></div>
          </body>
        </html>
        ```

    === "script.js"

        ``` js
        import config from "https://js.arcgis.com/5.0/esri/config.js";
        import WebMap from "https://js.arcgis.com/5.0/esri/WebMap.js";
        import MapView from "https://js.arcgis.com/5.0/esri/views/MapView.js";
        import FeatureTable from "https://js.arcgis.com/5.0/esri/widgets/FeatureTable.js";

        config.apiKey = "*********";

        const layerSelect = document.getElementById("layerSelect");
        const tableDiv = document.getElementById("tableDiv");
        let featureTable;

        const webmapa = new WebMap({
          portalItem: { id: "38b56df5741748d29bc1f7761590962b" }
        });

        const view = new MapView({
          container: "mapDiv",
          map: webmapa
        });

        view.when(() => {
          webmap.layers.forEach(layer => {
            // naplnění select elementu vektorovými vrstvami
            if (layer.type === "feature") {
              const opt = document.createElement("option");
              opt.value = layer.id;
              opt.text = layer.title;
              layerSelect.appendChild(opt);
            }
          });

          // zobrazení atributové tabulky pro vybranou vrstvu
          function showTable(layerId) {
            const layer = webmap.layers.find(lay => lay.id === layerId);
            if (featureTable) featureTable.destroy();
            // pokud atributová tabulka již existuje, zlikvidujeme

            if (layer && layer.type === "feature") {
              featureTable = new FeatureTable({
                view: view,
                layer: layer,
                container: tableDiv
              });
            }
          }

         // změna v select elementu pomocí standardní události
          layerSelect.addEventListener("change", (ev) => showTable(ev.target.value));

          // Počáteční zobrazení pro první vrstvu
          const first = webmap.layers.find(lay => lay.type === "feature");
          if (first) {
            showTable(first.id);
            layerSelect.value = first.id;
          }
        });
        ```

Všimněte si použití metody `destroy()`. Při každé změně výběru vrstvy je nutné stávající instanci widgetu `FeatureTable` odstranit, aby nedocházelo k chybám při vykreslování a k úniku paměti prohlížeče.