            const [Map, MapView, config, WebMap, GraphicsLayer, Sketch, geometryEngine, Graphic] = await $arcgis.import([
            "esri/Map", 
            "esri/views/MapView", 
            "esri/config",
            "esri/WebMap",
            "esri/layers/GraphicsLayer",
            "esri/widgets/Sketch",
            "esri/geometry/geometryEngine",
            "esri/Graphic"
            ]);


            config.apiKey = "AAPTadHemnkLYGbXVtCkpQ0HEWw..e6gpWx4DO7pAAGAwKvHLrKKYtVbbiG_zP6ptmR0p2sxoBinjvVpUnvaZqYwe0dHwmwnZ9gOEH64T_Ksr_anxpJ7qrrcs0lSoEUOcPXCPYS2de-lkE4gIxi6WlIdj1pTHxS9OCn7W02omV49LZ2B7yMJx0keBQ1wJtrtr6rMgrLJNTkf2PY_AMOAsLbfIqFxU_ItH44DuhAD4NM79jG6zkKHoqmIT2bOT2PYLSdXeRdK3wZv40KNaEA..AT1_5AVOWhgd";

            const webmap = new WebMap({
            portalItem: { id: "38b56df5741748d29bc1f7761590962b" }
            });

            const view = new MapView({
            container: "viewDiv",
            map: webmap
            });

            
            const sketchLayer = new GraphicsLayer();
            const bufferLayer = new GraphicsLayer(); // vrstva pro zobrazení obalové zóny
            webmap.addMany([bufferLayer, sketchLayer]);

            const sketch = new Sketch({
            view: view,
            layer: sketchLayer,
            creationMode: "update"
            });
            view.ui.add(sketch, "top-left");

            // reakce na dokončení kresby
            sketch.on("create", (event) => {
            if (event.state === "complete") {
                runAnalysis(event.graphic.geometry);
            }
            });

            async function runAnalysis(geometry) {
            bufferLayer.removeAll();
            
            // napřed vytvoření obalové zóny (5 km) pomocí Geometry Engine
            const buffer = geometryEngine.geodesicBuffer(geometry, 5, "kilometers");
            
            bufferLayer.add(new Graphic({
                geometry: buffer,
                symbol: {
                type: "simple-fill",
                color: [255, 0, 0, 0.2],    // 20% průhlednost barvy
                outline: { color: [255, 0, 0], width: 1 }
                }
            }));

            // najdeme FeatureLayerView pro vrstvu sídel (index 0 v této WebMapě)
            const layer = webmap.findLayerById("ORP_Ustecky_kraj_TJ_4410");
            const layerView = await view.whenLayerView(layer);

            // klientský prostorový dotaz
            const query = layerView.createQuery();
            query.geometry = buffer; // dotazujeme se geometrií bufferu
            query.spatialRelationship = "intersects";

            const results = await layerView.queryFeatures(query);
            document.getElementById("resultText").innerHTML = `Počet prvků v bufferu: <b>${results.features.length}</b>`;
            }

        view.when(() => {
  webmap.layers.forEach(l => console.log(`Název: ${l.title} | ID: ${l.id}`));
});