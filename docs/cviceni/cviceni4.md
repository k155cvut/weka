---
icon: material/numeric-4-box
title: Cvičení 4
---

## Příprava stránky

Před psaním kódu pro mapu je třeba na stránce provést následující přípravné kroky:

**1) Vložte soubor Leaflet CSS do části head dokumentu:**

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
```

**2) Zahrňte soubor Leaflet JavaScript za soubor Leaflet CSS:**

```html
 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
```


**3) Na místo, kde chcete mít mapu, vložte prvek div s určitým id:**

```html
<div id="map"></div>
```

**4) Ujistěte se, že kontejner mapy má definovanou výšku, například nastavením v CSS:**

```css
#map { height: 180px; }
```

V tuto chvíli můžeme přejít na úpravu mapy

## Nastavení mapy