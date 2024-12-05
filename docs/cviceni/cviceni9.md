---
icon: material/numeric-9-box
title: Cvičení 9
---

# Volně dostupné GIS nástroje (QGIS)

## Cíl cvičení

Seznámit se s volně dostupnými (open source) GIS nástroji. V praktické
rovině je prezentován [QGIS](https://qgis.org).

## Základní pojmy

- [**open
  source**](https://cs.wikipedia.org/wiki/Otev%C5%99en%C3%BD_software) –
  počítačový software s otevřeným zdrojovým kódem
- [**svobodný
  software**](https://cs.wikipedia.org/wiki/Svobodn%C3%BD_software) –
  software, který uživatelé mohou používat k libovolnému účelu,
  kopírovat, distribuovat, studovat a měnit
- [**OSGeo**](https://www.osgeo.org/) – nevládní nezisková organizace, jejímž cílem je podporovat a prosazovat společný vývoj otevřených geoinformačních technologií a dat
- [**QGIS**](https://qgis.org) – svobodný a multiplatformní geografický informační systém (GIS)

## Použité datové podklady

- [Data](https://geo.fsv.cvut.cz/vyuka/155gis1/geodata/gis1-cviceni10.zip)

## Náplň cvičení

Jako podpůrný materiál budeme používat školící materiály [QGIS pro
začátečníky](https://gismentors.github.io/qgis-zacatecnik) skupiny
[GISMentors](https://gismentors.cz).

### Načtení vstupních dat

Načteme polygonovou vrstvu obcí z RUIAN a tabulku s předvybranými
informacemi o počtu nezaměstnaných v jednotlivých obcích z roku 2018
za 10 měsíc.

Podklady:

- [přídání a export
  dat](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/vektor_import.html#pridani-a-export-dat),
- [data s oddělenými
  hodnotami](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/import_delim.html#import-dat)
  (pozor na datové typy - přetažení vs formulář)

U tabulky *nez01_data201810_orig* změníme filter na ``rok, mesic,
vuk``.

### Připojení statistických dat

Připojíme tabulku o nezaměstnaných k polygovové vrstvě obcí na základě
kódu obce.

Podklady: [Postup
připojení dat](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/join.html#postup-pripojeni)
 
### Nastavení stylu

Nastavíme symbologii podle počtu nezaměstnaných v přidaných datech.

Dále vypočteme hustotu počtu nezaměstnaných na km^2^ pomocí kalkulačky
polí.

Podklady:

- [Nastavení stylu](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/vektor_data_prace.html#styl)
- [Kalkulátor polí](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/editace.html#kalkulator-poli)
 
### Vytvoření obalové zóny kolem dálnic

Přidáme vrstvu *silnice* a vybereme pomocí vzorce ``"typ" = 1``
dálnice.

Dále pomocí funkce **BUFFER** vytvoříme obalové zóny kolem dálnic s šířkou 10 km.

Podklady:

- [Atributové dotazování](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/dotazovani.html#atributove-dotazovani)
- [Obalová zóna dle pevné vzdálenosti (buffer)](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/prostorove_analyzy.html#obalova-zona-dle-pevne-vzdalenosti-buffer)

### Vyběr obcí

Vybereme obce, které alespoň částí svého území leží v 10km okolí dálnic.

Podklady: [Prostorové dotazování](https://gismentors.github.io/qgis-zacatecnik/vektorova_data/dotazovani.html#prostorove-dotazovani)

### Pokročilé dotazování

Pokročilé dotazování pomocí jazyka SQL umožňuje *Databázový manager*.
<!---

## Zadání domácího úkolu k semestrální práci

Zpracujte podklady i pro ostatní měsíce roku 2018.

Pomocí jazyka SQL zkuste vyřešit následující úlohy:

1. Zjistěte průměrnou nezaměstnanost v daném okrese
2. Proveďte agregace údajů na úrovni kraje
-->