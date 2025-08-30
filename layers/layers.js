ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-35506.414110, 628562.495478, -35405.393243, 628639.670218]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PlanData_2 = new ol.format.GeoJSON();
var features_PlanData_2 = format_PlanData_2.readFeatures(json_PlanData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanData_2.addFeatures(features_PlanData_2);
var lyr_PlanData_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanData_2, 
                style: style_PlanData_2,
                popuplayertitle: 'Plan Data',
                interactive: true,
                title: '<img src="styles/legend/PlanData_2.png" /> Plan Data'
            });
var format_BOUNDARY_3 = new ol.format.GeoJSON();
var features_BOUNDARY_3 = format_BOUNDARY_3.readFeatures(json_BOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_3.addFeatures(features_BOUNDARY_3);
var lyr_BOUNDARY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_3, 
                style: style_BOUNDARY_3,
                popuplayertitle: 'BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_3.png" /> BOUNDARY'
            });
var format_BEACON_4 = new ol.format.GeoJSON();
var features_BEACON_4 = format_BEACON_4.readFeatures(json_BEACON_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEACON_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEACON_4.addFeatures(features_BEACON_4);
var lyr_BEACON_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BEACON_4, 
                style: style_BEACON_4,
                popuplayertitle: 'BEACON',
                interactive: true,
                title: '<img src="styles/legend/BEACON_4.png" /> BEACON'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PlanData_2.setVisible(true);lyr_BOUNDARY_3.setVisible(true);lyr_BEACON_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_PlanData_2,lyr_BOUNDARY_3,lyr_BEACON_4];
lyr_PlanData_2.set('fieldAliases', {'NAME': 'NAME', 'LOCALITY': 'LOCALITY', 'DISTRICT': 'DISTRICT', 'REGION': 'REGION', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'DIRECTION': 'DIRECTION', });
lyr_BOUNDARY_3.set('fieldAliases', {});
lyr_BEACON_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', });
lyr_PlanData_2.set('fieldImages', {'NAME': '', 'LOCALITY': '', 'DISTRICT': '', 'REGION': '', 'ACRES': '', 'HECTARES': '', 'DIRECTION': '', });
lyr_BOUNDARY_3.set('fieldImages', {});
lyr_BEACON_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PlanData_2.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LOCALITY': 'inline label - visible with data', 'DISTRICT': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'ACRES': 'inline label - visible with data', 'HECTARES': 'inline label - visible with data', 'DIRECTION': 'inline label - visible with data', });
lyr_BOUNDARY_3.set('fieldLabels', {});
lyr_BEACON_4.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_BEACON_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});