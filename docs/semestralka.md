# Semestrální práce - Analýza území

## Zadání
Nad zadaným územím proveďte následující analýzy s využitím GIS softwaru. Výsledky jednotlivých úloh následně publikujte formou webové mapové aplikace na ArcGIS Online či pomocí open-source řešení (např. GISQuick). Tato aplikace může mít libovolnou formu, takovou, kterou uznáte za vhodnou či zajímavou (ArcGIS Instant Apps, Story Maps, Experience Builder,...). 

Svou aplikaci na konci semestru **30.4.2024** krátce odprezentujete před ostatními v 5 minutové prezentaci. 

Dotazy či připomínky k semestrální práci směřujte sem: *frantisek.muzik@fsv.cvut.cz*

**Pro zadané území vypracujte následující úkoly:**

**1.** Zjistěte v jaké obci se nachází zadaný definiční bod. Z databáze RÚIAN tuto obec vyberte a vyexportujte ji do samostatné vrstvy.

**2.** Určete počet adresních míst na území dané obce (zdroj: RÚIAN).

**3.** Zjistěte, zda se na území zadané obce a v 10 km kolem ní nachází chráněné území (zdroj: ZABAGED). Pokud ano, zobrazte jej v mapě jako samostatnou vrstvu. 

**4.** Vytvořte samostatnou vrstvu, která bude obsahovat data způsobu využití pozemku (zdroj: RÚIAN – vrstva *Parcela*). Na základě atributů v tabulce níže vypočítejte pro data nový sloupec *TYP_VYUZITI*, na základě kterého vrstvu následně vhodně vizualizujte. Číselníky pro přiřazení kódů: [Způsob využití pozemku](https://www.cuzk.cz/Katastr-nemovitosti/Poskytovani-udaju-z-KN/Ciselniky-ISKN/Ciselniky-k-nemovitosti/Zpusob-vyuziti-pozemku.aspx), [Kód druhu pozemku](https://www.cuzk.cz/Katastr-nemovitosti/Poskytovani-udaju-z-KN/Ciselniky-ISKN/Ciselniky-k-nemovitosti/Druh-pozemku.aspx). Závěrem proveďte *Dissolve* dle atributu *TYP_VYUZITI*.

|  Typ využití pozemku *TYP_VYUZITI* (vypočtené)       | Kód druhu pozemku *SC_D_POZEMKU*        | Způsob využití pozemku *SC_ZP_VYUZITI_POZ*            
| ------------ | ------------------------- |----------------|
| orná půda    | 2 | -|
| lesní půda | 10 |  -|
| trvalý travní porost   | 7, 8 | -|
| zahrada    | 5, 6 | -|
| vodstvo   | 11 | -|
| zastavěná plocha     |  13  | *Null* |
| nádvoří     |  13  | *Not Null* |
| komunikace   | 3, 4 , 14 | 14, 15, 16, 17|
| ostatní   | 3, 4 , 14 | vše kromě 14, 15, 16, 17|


???+ note "&nbsp;<span style="color:#448aff">Poznámka</span>"
      V případě určování typu využití pozemku (sloupec *TYP_VYUZITI*) pro atributy *ostatní* a *komunikace* musí platit výběr prvků ze sloupců *Kód druhu pozemku* a *Způsob využití pozemku* zároveň (tedy využití *AND* ve funkci *Select by attributes*).

**5.** Georeferencujte rastry Státní mapy 1 : 5 000 – odvozené (SMO5) z 50. let 20. století. Najdete je na disku S. Georeferencujte pouze rastry, kterých se dotýká území v okruhu 500 metrů od definičního bodu obce. Ten vypočítejte jako těžiště polygonu obce (musí být uvnitř polygonu). Z georeferencovaných rastrů vytvořte mozaiku. Rastrovou mapu SMO5 neexportujte do výsledné webové aplikace.

**6.** Na podkladu SMO5 vektorizujte území v okruhu 500 metrů od definičního bodu obce. Tato data slučte na základě typů využití ploch (funkce Dissolve). 

Rozlišujte následující typy využití ploch (stejně jako v bodě 5 pro data z RÚIAN): 

- orná půda

- lesní půda

- trvalý travní porosty (louky, pastviny)

- zahrada

- vodstvo (řeky, potoky, rybníky), nevektorizujte malé vodní toky vyznačené pouze liniově

- zastavěná plocha

- nádvoří (okolí domů, neoznačené zahrady, veřejné prostory v intravilánu)

- komunikace (cesty, silnice, železnice)

- ostatní lomy, neúrodná půda apod.

<figure markdown>
![SMO5_legenda](../assets/cviceni6/SMO5_legenda.png "Legenda SMO5"){ width="600" }
    <figcaption>Značkový klíč SMO5</figcaption>
</figure>

**7.** Vektorizaci SMO5 topologicky zkontrolujte dle pravidel *Must Not Have Gaps (Area)*, *Must Not Overlap With (Area-Area)* a *Must Not Overlap (Area)*.

**8.** Ve výsledné aplikaci porovnejte vývoj využití krajiny v 50. letech 20. století (vektorizace z SMO5) se současností (RÚIAN – vrstva *Parcela*). Způsob porovnání zvolte dle vlastního uvážení (posuvník v aplikaci, nová vrstva s vypočtenými rozdíly apod.).

**9.** Jako samostatnou vrstvu do svého projektu připojte WMS, WMTS či WFS službu dle vašeho výběru (např. historickou mapu, ortofoto či katastrální mapu). Tato vrstva musí být součástí výsledné mapové aplikace.

## Konkrétní zadání
Bude rozesláno emailem.

## Termín
- 5 minutová **prezentace** výsledné online aplikace **30.4.2024**
