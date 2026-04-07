
# Webová kartografie {: .page_title}

Tento povinně-volitelný předmět seznamuje se základy fungování a vytváření mapových aplikací ve webovém prostředí.

Začíná se seznámením s jazykem JavaScript a jeho možnostmi, přičemž je zmíněno fungování webových stránek a serverů, problematika DNS a domén a hostování webového obsahu. Mapové výstupy jsou pak vytvářeny užitím dvou metod – pomocí open-source mapové knihovny (využíváme __:simple-leaflet: Leaflet__{: style="white-space: nowrap;"}) a pomocí API rozhraní pokročilého kartografického cloudu (využíváme __:simple-arcgis: ArcGIS Online__{: style="white-space: nowrap;"}).

Jako účastníci kurzu se naučíte naprogramovat mapové aplikace využívající širokou škálu funkcionality, od rastrových a vektorových podkladových vrstev, přes stylování, tvorbu pop-upů, grafů a tematických výstupů po propojení mapy s grafikou či dalším obsahem. Pomocí ArcGIS API for Javascript si rozšíříte znalosti o tvorbě webových mapových aplikací v prostředí Esri, kde tento předmět navazuje na základy probírané v Kartografii 3.

<h2 style="text-align:center;">Naučíte se</h2>
<!-- styl je zde pridany HTML tagem (ne pomoci '##'), aby se text neobjevil v tabulce obsahu vlevo na strance -->

<div class="grid cards grid_icon_info smaller_padding" markdown> <!-- specificky format gridu (trida "grid_icon_info") na miru uvodni strance predmetu -->

-   :octicons-code-16:{ .xl }

    základy __HTML__, __CSS__ a __JavaScriptu__

-   :material-map-outline:{ .xl }

    __vyvíjet__ interaktivní webové mapové aplikace

-   :material-leaf-circle-outline:{ .xl }

    využívat open-source mapové knihovny jako třeba __Leaflet__ či __OpenLayers__

-   :simple-materialdesignicons:{ .xl }

    __vizualizovat__ geoprostorová data na webu

-   :material-tools:{ .xl }

    pochopit fungování webových __serverů__


-   :octicons-graph-16:{ .xl }

    vytvořit interaktivní __infografiku__ a propojit jí s mapou

-   :simple-arcgis:{ .xl }

    __sdílet__ data prostřednictvím webu (systém _ArcGIS Online_, webové mapové aplikace)

-   :simple-qgis:{ .xl }

    __publikovat__ webové mapové aplikace s využití open-source softwaru __QGIS__


</div>

<div class="gallery_container" markdown>
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_1.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_2.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_3.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_4.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_5.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_6.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/muzik/MkDocs/ywek_nahledy/ywek_nahled_7.png){: .no-filter }



</div>

## Doporučená literatura

- Nétek, R. (2020): [Webová kartografie: Specifika tvorby interaktivních map na webu](https://webova.kartografie.upol.cz/). Univerzita Palackého v Olomouci.
- Miklín, J. a kol (2018): [Tvorba map](https://tvorbamap.osu.cz/). Ostravská univerzita.
- [Leaflet](https://leafletjs.com/): An Open-Source JavaScript Library for Interactive Maps.
- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/). Esri.


## Harmonogram {: style="margin-bottom:0;"}
Informace jsou aktuální pro letní semestr 2025/2026.
{: style="opacity:50%;margin-top:0;"}

[__Ing. Tomáš Janata, Ph.D.__](https://geomatics.fsv.cvut.cz/employees/tomas-janata/) | [__Ing. František Mužík__](https://geomatics.fsv.cvut.cz/employees/frantisek-muzik/)

<table style="border-collapse:collapse; width:100%; font-family:Arial,sans-serif; font-size:14px;">
  <thead>
    <tr style="background:#26a69a; color:#fff;">
      <th style="padding:8px 12px; text-align:center;">Týden</th>
      <th style="padding:8px 12px; text-align:center;">Datum</th>
      <th style="padding:8px 12px; text-align:center;">Typ</th>
      <th style="padding:8px 12px;">Náplň</th>
      <th style="padding:8px 12px; text-align:center;">Vyučující</th>
      <th style="padding:8px 12px;">Domácí úkol</th>
    </tr>
  </thead>
  <tbody>

    <!-- ===== Týden 1 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">1</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">19.2.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Motivace k webové kartografii, úvod. Představení prostředí a technik. Přístupy k tvorbě webového obsahu. Webový server, typy serverů. Hosting</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 1 – Základ HTML. VS Code. Tvorba webové formy životopisu</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 2 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">2</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">26.2.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Webový server – konfigurace. DNS, propojení obsahu s doménou. Základy JavaScript – datové typy, proměnné. Funkce, pole, řetězce, moderní operátory, cykly. DevTools, konzole, debug, responsivita.</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 1 - Základy práce s CSS. Základy JavaScriptu</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;">U1 - Životopis</td>
    </tr>

    <!-- ===== Týden 3 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">3</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">5.3.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Základy JavaScript – DOM, asynchronní přenos, události, objektové typy. JSON, odkazování do souborů a načítání ze souborů.</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 2A –  Mapová aplikace v prostředí Leaflet</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 4 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">4</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">12.3.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Mapové knihovny – Leaflet, OpenLayers, MapTiler. Leaflet – základní informace. Leaflet – mapový objekt, symbolika, prostorové dotazování, pop-up. Mapové elementy a rozdíly oproti konvenční kartografii.</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 2A - GeoJSON. Tvorba kartogramu v Leaflet</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 5 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">5</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">19.3.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Vstupní a výstupní formáty souborů. GeoJSON, souborové databáze, GeoPackage. Vektorové a rastrové dlaždice</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 2B – Knihovna D3.js</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 6 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">6</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">26.3.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Javascriptové knihovny a prostředí pro tvorbu map. D3.js</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 2 - Propojení Leaflet a D3.js. Kartodiagram</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 7 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">7</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">2.4.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="color:#999; font-style:italic; padding:8px 12px;">děkanské volno</td>
      <td style="text-align:center; padding:8px 12px;"></td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="color:#999; font-style:italic; padding:8px 12px;">děkanské volno</td>
      <td style="padding:8px 12px;"></td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 8 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">8</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">9.4.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">—</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 3 - Tvorba mapové aplikace vybraného státu</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;">U3 - Leaflet aplikace stát</td>
    </tr>

    <!-- ===== Týden 9 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">9</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">16.4.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Serverové fungování, nastavení, širší vztahy webového mapování. Apache, IIS</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Windows server (IIS) – konfigurace vlastního prostoru</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 10 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">10</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">23.4.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Základy ArcGIS JavaScript API. Práce s WebMap</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 4 – Základy ArcGIS JavaScript API. Práce s WebMap. Mapová aplikace pomocí ArcGIS API</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 11 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">11</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">30.4.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">ArcGIS JavaScript API – pokročilé možnosti. Feature Collection</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 4 - Pokročilejší práce s ArcGIS JavaScript API</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 12 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">12</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">7.5.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">Ladění a škálování aplikací. Další API prostředí – CARTO.db, Mapbox aj. MapTiler, OSM</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr>
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Úloha 4 - Finalizace aplikace pomocí ArcGIS JavaScript API</td>
      <td style="text-align:center; padding:8px 12px;">TJ</td>
      <td style="padding:8px 12px;"></td>
    </tr>

    <!-- ===== Týden 13 ===== -->
    <tr style="border-top:2px solid #aaa;">
      <td rowspan="2" style="text-align:center; font-weight:bold; vertical-align:middle; padding:8px;">13</td>
      <td rowspan="2" style="text-align:center; vertical-align:middle; padding:8px;">14.5.</td>
      <td style="text-align:center; padding:8px 12px;">Přednáška</td>
      <td style="padding:8px 12px;">—</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>
    <tr style="border-bottom:2px solid #aaa;">
      <td style="text-align:center; padding:8px 12px;">Cvičení</td>
      <td style="padding:8px 12px;">Využití AI pro zpracování dat a kartografickou vizualizaci</td>
      <td style="text-align:center; padding:8px 12px;">FM</td>
      <td style="padding:8px 12px;"></td>
    </tr>

  </tbody>
</table>

<!--
## Harmonogram {: style="margin-bottom:0;"}


[![](./assets/index/schedule.svg#only-light){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/155YWEK/semester/B242){target="_blank"}
[![](./assets/index/schedule_dark.svg#only-dark){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/155YWEK/semester/B242){target="_blank"}


---

[Stránka předmětu v :custom-kos-logo-img-BW:{.middle style="margin-left:3px;"} :custom-kos-logo-BW:{.xl .middle}](https://kos.cvut.cz/course-syllabus/1551GIS/B232){ .md-button .md-button--primary target="_blank"}
{align=center}
-->
