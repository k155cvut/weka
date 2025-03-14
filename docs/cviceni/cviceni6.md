---
icon: material/numeric-6-box
title: Cvičení 6
---

# Propojení JS knihoven [D3](https://d3js.org/) a [Leaflet](https://leafletjs.com/)

Při práci ve VS Code je nutné nainstalovat extension Live Sever

## Jednotlivé kroky jsou rozděleny do samostatných commitů pro případné hledání chyb:
### [0) Připojení souborů s mapou (Leaflet) a grafem (D3)](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/fc7b26e26c99d16835b72308b229987619705c76)
- do stejné složky vložit soubory pro vykreslení mapy a grafu

<figure markdown>
![stin_relief](../assets/cviceni6/obr1.png){ width="800" }
    <figcaption>Výstupy obou stránek</figcaption>
</figure>

### [1) Vytvoření samostatného souboru pro leaflet script](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/b9152db8489e91dc972cea80db682740ff2130b7)
- do nového souboru se překopíruje skript vytvářející mapu v *index_geoJSON.html*
- reference na vytvořený JS skript v body html

### [2) Přidání grafu k mapě](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/2a9164334042fc3d3c575f0b92ec5d813b123837)
- překopírování kódu pro vykreslení grafu z *D3_YWEK_kod.html* do *index_geoJSON.html*
- **další práce pokračuje v *index_geoJSON.html***

### [3) Uspořádání UI stránky](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/1e3db875efc507b67b7286b15ac7ee0834739ca5)
- rozřazení do divů - mapa s popisem + graf s popupem
- přidělení stylů pro divy kvůli správnému rozdělení stránky
- přepsání výpočtu polohy popu-pu

<figure markdown>
![stin_relief](../assets/cviceni6/obr2.png){ width="800" }
    <figcaption>Uspořádání UI</figcaption>
</figure>

### [4) Import bodové vrstvy ORP](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/2bac49f23da49c0d098651e81b0b17a3e1d7392e)
- úprava geoJSONu + propojení s html
- import geoJSON bodů ORP do mapy jako nová vrstva 
- nastavení symbologie vrsty
- posun vrstvy na první místo vykreslování v mapě

<figure markdown>
![stin_relief](../assets/cviceni6/obr3.png){ width="800" }
    <figcaption>Import bodové vrstvy ORP do mapy</figcaption>
</figure>

### [5) Vizualizace diagramu pomocí D3](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/ee3ec6f01cdb9d4acd56570195b884dbcfdcd5e7)
- skrytí vykreslování bodových znaků ORP
- nastavení vykreslení diagramů

### [6) Oprava vykreslení grafů](https://github.com/frantisekmuzik/YWEK_D3_Leaflet/commit/1bd438fe98b366759181d780dad94db0d324fdb6)
-  oprava vykreslování grafů v mapě

<figure markdown>
![stin_relief](../assets/cviceni6/obr4.png){ width="800" }
    <figcaption>Opravené vykreslení bodů</figcaption>
</figure>

!!! info "&nbsp;<span>Užitečné odkazy</span>"
    - práce s div: [https://www.w3schools.com/html/html_div.asp](https://www.w3schools.com/html/html_div.asp)
    - mapová vizualizace přímo z D3: [https://observablehq.com/@coachman/week-11-intro-to-d3-js-mapping-data-with-d3](https://observablehq.com/@coachman/week-11-intro-to-d3-js-mapping-data-with-d3)
    - Leaflet + D3 popup: [https://gist.github.com/Andrew-Reid/11602fac1ea66c2a6d7f78067b2deddb#file-thumbnail-png](https://gist.github.com/Andrew-Reid/11602fac1ea66c2a6d7f78067b2deddb#file-thumbnail-png)
    - D3 + Leaflet: [https://observablehq.com/@sfu-iat355/intro-to-leaflet-d3-interactivity](https://observablehq.com/@sfu-iat355/intro-to-leaflet-d3-interactivity)
    - Leaflet - načtení geoJSON: [https://leafletjs.com/examples/geojson/](https://leafletjs.com/examples/geojson/)
