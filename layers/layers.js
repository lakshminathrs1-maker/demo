var wms_layers = [];

var format_watershed01_0 = new ol.format.GeoJSON();
var features_watershed01_0 = format_watershed01_0.readFeatures(json_watershed01_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_watershed01_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_watershed01_0.addFeatures(features_watershed01_0);
var lyr_watershed01_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_watershed01_0, 
                style: style_watershed01_0,
                popuplayertitle: 'watershed01',
                interactive: false,
                title: '<img src="styles/legend/watershed01_0.png" /> watershed01'
            });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_1.png" /> Clipped'
            });

lyr_watershed01_0.setVisible(true);lyr_Clipped_1.setVisible(true);
var layersList = [lyr_watershed01_0,lyr_Clipped_1];
lyr_watershed01_0.set('fieldAliases', {'WSNAME': 'WSNAME', });
lyr_Clipped_1.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_watershed01_0.set('fieldImages', {'WSNAME': '', });
lyr_Clipped_1.set('fieldImages', {'ORDER1': '', });
lyr_watershed01_0.set('fieldLabels', {'WSNAME': 'no label', });
lyr_Clipped_1.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Clipped_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});