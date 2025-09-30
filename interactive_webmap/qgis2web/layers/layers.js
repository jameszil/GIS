var wms_layers = [];

var format_WorldGDPPPP_0 = new ol.format.GeoJSON();
var features_WorldGDPPPP_0 = format_WorldGDPPPP_0.readFeatures(json_WorldGDPPPP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldGDPPPP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldGDPPPP_0.addFeatures(features_WorldGDPPPP_0);
var lyr_WorldGDPPPP_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldGDPPPP_0, 
                style: style_WorldGDPPPP_0,
                popuplayertitle: "World GDP PPP",
                interactive: true,
    title: 'World GDP PPP<br />\
    <img src="styles/legend/WorldGDPPPP_0_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/WorldGDPPPP_0_1.png" /> 865 - 3368<br />\
    <img src="styles/legend/WorldGDPPPP_0_2.png" /> 3368 - 6754<br />\
    <img src="styles/legend/WorldGDPPPP_0_3.png" /> 6754 - 13043<br />\
    <img src="styles/legend/WorldGDPPPP_0_4.png" /> 13043 - 18823<br />\
    <img src="styles/legend/WorldGDPPPP_0_5.png" /> 18823 - 36621<br />\
    <img src="styles/legend/WorldGDPPPP_0_6.png" /> 36621 - 55836<br />\
    <img src="styles/legend/WorldGDPPPP_0_7.png" /> 55836 - 141587<br />'
        });

lyr_WorldGDPPPP_0.setVisible(true);
var layersList = [lyr_WorldGDPPPP_0];
lyr_WorldGDPPPP_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'MyKey': 'MyKey', 'Developmen': 'Development Group', 'HDI': 'HDI', 'GDP PPP': 'GDP PPP', });
lyr_WorldGDPPPP_0.set('fieldImages', {'fid': 'Hidden', 'iso_a2': 'Hidden', 'NAME': 'TextEdit', 'FIPS_10_': 'Hidden', 'ISO_A3': 'Hidden', 'WB_A2': 'Hidden', 'WB_A3': 'Hidden', 'MyKey': 'Hidden', 'Developmen': 'TextEdit', 'HDI': 'TextEdit', 'GDP PPP': 'TextEdit', });
lyr_WorldGDPPPP_0.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Developmen': 'inline label - visible with data', 'HDI': 'inline label - visible with data', 'GDP PPP': 'inline label - visible with data', });
lyr_WorldGDPPPP_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});