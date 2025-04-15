
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



## Přednášky {: style="margin-bottom:0;"}

jsou spíše formou workshopu a bezprostředně předcházejí cvičením, s nimiž se mnohdy prolínají
{: style="opacity:50%;margin-top:0;"}

[__Ing. Tomáš Janata, Ph.D.__](https://geomatics.fsv.cvut.cz/employees/tomas-janata/) | [__Ing. František Mužík__](https://geomatics.fsv.cvut.cz/employees/frantisek-muzik/)

1. Motivace k webové kartografii, úvod. Představení prostředí a technik. Přístupy k tvorbě webového obsahu. Webový server, typy serverů. Hosting
2. Webový server – konfigurace. DNS, propojení obsahu s doménou. Základy JavaScript – datové typy, proměnné. Funkce, pole, řetězce, moderní operátory, cykly. DevTools, konzole, debug, responsivita.
3. Základy JavaScript – DOM, asynchronní přenos, události, objektové typy. JSON, odkazování do souborů a načítání ze souborů.
4. Mapové knihovny – Leaflet, OpenLayers, MapTiler. Leaflet – základní informace. Leaflet – mapový objekt, symbolika, prostorové dotazování, pop-up. Mapové elementy a rozdíly oproti konvenční kartografii.
5. Tvorba pokročilejších aplikací v Leaflet
6. Vstupní a výstupní formáty souborů. GeoJSON, souborové databáze, GeoPackage. Vektorové a rastrové dlaždice
7. Javascriptové knihovny a prostředí pro tvorbu map. D3JS.
8. Serverové fungování, nastavení, širší vztahy webového mapování. Apache, IIS
9. Základy ArcGIS JavaScript API. Práce s WebMap
10. ArcGIS JavaScript API – pokročilé možnosti. Feature Collection
11. Ladění a škálování aplikací. Další API prostředí – CARTO.db, Mapbox aj. MapTiler, OSM

## Cvičení {: style="margin-bottom:0;"}

[__Ing. Tomáš Janata, Ph.D.__](https://geomatics.fsv.cvut.cz/employees/tomas-janata/) | [__Ing. František Mužík__](https://geomatics.fsv.cvut.cz/employees/frantisek-muzik/)

1. **Úloha 1** – Základ HTML. Tvorba webové formy životopisu v prostředí Glitch <!-- JC, TJ, FM -->
2. Základy práce s CSS. Základy JavaScriptu <!-- FM -->
3. **Úloha 2** – VS Code. Mapová aplikace v prostředí Leaflet <!-- TJ -->
4. GeoJSON. Tvorba kartogramu v Leaflet <!-- TJ -->
5. **Úloha 2A** – Knihovna D3.js <!-- FM -->
6. Propojení Leaflet a D3.js. Kartodiagram <!-- FM -->
7. Windows server (IIS) – konfigurace vlastního prostoru <!-- TJ -->
8. **Úloha 3**– Základy ArcGIS JavaScript API. Práce s WebMap. Mapová aplikace pomocí ArcGIS API <!-- TJ -->
9. Pokročilejší práce s ArcGIS JavaScript API <!-- TJ+ (MH?) -->
10. Finalizace aplikace pomocí ArcGIS JavaScript API <!-- TJ+ (MH?) -->
11. **Úloha 4** – Jednoduchá aplikace pomocí GISQuick <!-- FM --> <!-- Případně 3D webová mapa pomocí open source -->

<!--
## Harmonogram {: style="margin-bottom:0;"}


[![](./assets/index/schedule.svg#only-light){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/155YWEK/semester/B242){target="_blank"}
[![](./assets/index/schedule_dark.svg#only-dark){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/155YWEK/semester/B242){target="_blank"}


---

[Stránka předmětu v :custom-kos-logo-img-BW:{.middle style="margin-left:3px;"} :custom-kos-logo-BW:{.xl .middle}](https://kos.cvut.cz/course-syllabus/1551GIS/B232){ .md-button .md-button--primary target="_blank"}
{align=center}
-->
