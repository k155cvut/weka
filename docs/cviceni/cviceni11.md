---
icon: custom/vc-numeric-11-box
title: Cvičení 11
---


- [**QGIS**](https://qgis.org) – jeden z nejpoužívanějších open source GIS nástrojů v praxi
- [**Gisquick**](https://gisquick.org/) – jedna z volně dostupných publikačních open source platforem pro QGIS

## Příprava projektu v QGIS

Nejprve musíme připravit základní projekt v QGIS. V ideálním případě si připravíme několik vektorových vrstev a připojenou WMS vrstvu.

## Publikace projektu

Podklady: [dokumentace Gisquick](https://gisquick.readthedocs.io)

!!! warning "Důležité"

    Pro účel výuky budeme používat vlastní instanci publikačního serveru Gisquick provozované na **<http://geo102.fsv.cvut.cz:8083/>**.

Po [přihlášení](http://geo102.fsv.cvut.cz:8083/user/) se objeví profil uživatele:

![](../assets/cviceni9/gisquick_new_project.png "Gisquick: nový projekt")

Vytvoříme nový projekt. Objeví se žádost o instalaci zásuvného modulu:

![](../assets/cviceni9/gisquick_plugin.png "Gisquick: instalace pluginu")

!!! note "Poznámka"

    Pokud se výše uvedená stránka neobjeví, tak ji najdete na <https://gisquick.org/plugin/>

Při instalaci postupuje podle [návodu](https://gisquick.readthedocs.io/en/latest/user-manual/before-publishing.html#qgis-gisquick-plugin) v dokumentaci Gisquick.

Jelikož pracujeme v projektu s formátem GeoPackage, tak nainstalujeme
verzi zásuvného modulu Gisquick s podporou dbhash. Tato verze
zásuvného modulu zamezí znovu nahrávání datových zdrojů ve formátu
GeoPackage například při změně viditelnosti vrstvy.

![](../assets/cviceni9/gisquick_plugin_select.png "Gisquick: instalace pluginu")

Poté se pomocí zásuvného modulu přihlásíme do prostředí publikační
platformy Gisquick (`Web > Publish in Gisquick`). 

![](../assets/cviceni9/gisquick_login.png "Gisquick: přihlášeni")

Do publikačního prostředí platformy Gisquick nás přesměruje tlačítko `Open Browser`:

![](../assets/cviceni9/gisquick_login_open.png "Gisquick: otevření")

Po vytvoření projektu se objeví úvodní formulář se seznamem vrstev určených k publikaci:

![](../assets/cviceni9/gisquick_data_layers.png "Gisquick: seznam vrstev")

Nejprve opravíme případné chyby (`Manage Layers Names` > `Generate Names` > `Update QGIS Project`):

![](../assets/cviceni9/gisquick_data_layers_errors.png "Gisquick: seznam chyb")

Dále povolíme WFS, abychom umožnili uživateli se dotazovat na vektorové vrstvy:

![](../assets/cviceni9/gisquick_data_layers_wfs.png "Gisquick: zapnutí WFS")

Datové vrstvy nahrajeme na publikační server:

![](../assets/cviceni9/gisquick_data_layers_load.png "Gisquick: nahrání dat")

![](../assets/cviceni9/gisquick_create_project.png "Gisquick: zadání jména projektu")

Nastavíme titulek projektu:

![](../assets/cviceni9/gisquick_title.png "Gisquick: zadání titulku projektu")

Projdeme jednotlivá nastavení projektu:

![](../assets/cviceni9/gisquick_menu.png "Gisquick: menu")

A provedeme následující změny v nastavení:

- prostorový rozsah nastavíme z vrstvy "Obce":

    
- nastavíme vhodnou měřítkovou sadu:

    ![](../assets/cviceni9/gisquick_scales.png "Gisquick: měřítka")

- v záložce `Layers` přesuňte vrstvy ze skupiny "WMS" do `Base Layers` (je nutné přesunout celou skupinu)

![](../assets/cviceni9/gisquick_base_layers.png "Gisquick: podkladové vrstvy")

!!! tip "Tip pro pokročilé uživatele"

    Ke zrychlení načítání vrstev může dojít při vhodně zvolené měřítkové sadě dle [specifikace ČÚZK](https://geoportal.cuzk.cz/Dokumenty/Dlazdicove_sluzby_CR_v1.1.pdf). Případně lze použít WMTS s měřítkovou sadou Google Maps.
    

A připravený projekt publikujeme (`Publish`). Po publikaci projektu se objeví tlačítko

![](../assets/cviceni9/gisquick_map.png "Gisquick: mapová aplikace")

které nás přesměruje do mapové aplikace:

![](../assets/cviceni9/gisquick_map_app.png "Gisquick: zobrazení mapové aplikace")

!!! tip

    Ve výchozím nastavení je projekt nastaven jako soukromý. Toto nastavení lze změnit v `Permissions`:
    
    ![](../assets/cviceni9/gisquick_permissions.png "Gisquick: nastavení")

#### Další nastavení projektu

Zkusme změnit následující nastavení projektu:
    
- skryjeme CSV tabulky v záložce `Layers`

![](../assets/cviceni9/gisquick_csv_tables.png "Gisquick: CSV data")



- nastavíme viditelnost zvolených atributů u vrstvy "Parcely" (kmenové
  číslo, pododdělení čísla, výměra a druh pozemku)
  
Nejprve v QGISu nastavíme u zvolených atributů aliasy (`Attributes Form` ve vlastnostech vrstvy).

![](../assets/cviceni9/qgis_field_alias.png "QGIS: nastavení aliasů")

Změny v QGIS projektu uložíme. V nastavení Gisquick projektu provedeme aktualizaci.



Viditelnost atributů nastavíme z záložce `Layers`.


Po uložení změn (`Save`) znovu načteme mapovou aplikaci.

![](../assets/cviceni9/gisquick_field_alias.png "Gisquick: nastavení aliasů")

Po uložení změn se mezi podkladovými vrstvami jednoduše přepínat.

![](../assets/cviceni9/gisquick_base_layers_switch.png "Gisquick: přepínaní mezi podkladovými vrstvami")


Ukázkovou mapovou aplikaci najdete na adrese <http://geo102.fsv.cvut.cz:8083/?PROJECT=gis1/cv10>