
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
![](../assets/main/01.png){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/02.jpg){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/03.jpg){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/04.jpg){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/05.jpg){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/06.jpg){: .no-filter }
![](https://geo.fsv.cvut.cz/data/cehak/MkDocs/index/07.jpg){: .no-filter }


</div>

<!-- ## Doporučená literatura

1. Kolář, J.: Geografické informační systémy 10. Vydavatelství ČVUT, Praha 1998.
2. Rapant, P. (2006): Geoinformatika a geoinformační technologie. VŠB-TU Ostrava, 500 str. ISBN 80-248-1264-9.
3. Břehovský, M., Jedlička, K. (2005): Přednáškové texty pro Úvod do GIS. ZČU Plzeň, 116 s.
4. Hrubý M.: Geografické Informační Systémy (GIS) - Studijní opora. VÚT v Brně, 91 str.
5. Tuček J.: Geografické informační systémy, Praha Computer Press, 1998. -->

## Přednášky {: style="margin-bottom:0;"}

jsou spíše formou workshopu a bezprostředně předcházejí cvičením, s nimiž se mnohdy prolínají
{: style="opacity:50%;margin-top:0;"}

__Ing. Tomáš Janata, Ph.D.__ | __Mgr. Petra Justová, Ph.D.__ | __Ing. František Mužík__

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

## Harmonogram {: style="margin-bottom:0;"}

<!--
[![](./assets/index/schedule.svg#only-light){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/1551GIS/semester/B232){target="_blank"}
[![](./assets/index/schedule_dark.svg#only-dark){.off-glb .no-filter}](https://kos.cvut.cz/schedule/course/1551GIS/semester/B232){target="_blank"}

---

[Stránka předmětu v :custom-kos-logo-img-BW:{.middle style="margin-left:3px;"} :custom-kos-logo-BW:{.xl .middle}](https://kos.cvut.cz/course-syllabus/1551GIS/B232){ .md-button .md-button--primary target="_blank"}
{align=center}

-->