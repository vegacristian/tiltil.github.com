var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Til_TilWGS84_1 = new ol.format.GeoJSON();
var features_Til_TilWGS84_1 = format_Til_TilWGS84_1.readFeatures(json_Til_TilWGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Til_TilWGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Til_TilWGS84_1.addFeatures(features_Til_TilWGS84_1);
var lyr_Til_TilWGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Til_TilWGS84_1, 
                style: style_Til_TilWGS84_1,
                interactive: true,
                title: '<img src="styles/legend/Til_TilWGS84_1.png" /> Til_Til WGS84'
            });
var format_Topinimos_2 = new ol.format.GeoJSON();
var features_Topinimos_2 = format_Topinimos_2.readFeatures(json_Topinimos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Topinimos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Topinimos_2.addFeatures(features_Topinimos_2);
var lyr_Topinimos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Topinimos_2, 
                style: style_Topinimos_2,
                interactive: true,
                title: '<img src="styles/legend/Topinimos_2.png" /> Topinimos'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Til_TilWGS84_1.setVisible(true);lyr_Topinimos_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Til_TilWGS84_1,lyr_Topinimos_2];
lyr_Til_TilWGS84_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', });
lyr_Topinimos_2.set('fieldAliases', {'objectid': 'objectid', 'fc': 'fc', 'cod_comuna': 'cod_comuna', 'Nombre': 'Nombre', 'Clase_Topo': 'Clase_Topo', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Region': 'Region', });
lyr_Til_TilWGS84_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_Topinimos_2.set('fieldImages', {'objectid': 'TextEdit', 'fc': 'TextEdit', 'cod_comuna': 'TextEdit', 'Nombre': 'TextEdit', 'Clase_Topo': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', 'Region': 'TextEdit', });
lyr_Til_TilWGS84_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', });
lyr_Topinimos_2.set('fieldLabels', {'objectid': 'no label', 'fc': 'no label', 'cod_comuna': 'no label', 'Nombre': 'no label', 'Clase_Topo': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', 'Region': 'no label', });
lyr_Topinimos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});