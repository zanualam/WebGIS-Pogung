var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_3 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_5 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BatasDesaPogung_6 = new ol.format.GeoJSON();
var features_BatasDesaPogung_6 = format_BatasDesaPogung_6.readFeatures(json_BatasDesaPogung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaPogung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaPogung_6.addFeatures(features_BatasDesaPogung_6);
var lyr_BatasDesaPogung_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaPogung_6, 
                style: style_BatasDesaPogung_6,
                interactive: true,
                title: '<img src="styles/legend/BatasDesaPogung_6.png" /> Batas Desa Pogung'
            });
var format_Rawan_Banjir_Pogung_7 = new ol.format.GeoJSON();
var features_Rawan_Banjir_Pogung_7 = format_Rawan_Banjir_Pogung_7.readFeatures(json_Rawan_Banjir_Pogung_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rawan_Banjir_Pogung_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rawan_Banjir_Pogung_7.addFeatures(features_Rawan_Banjir_Pogung_7);
var lyr_Rawan_Banjir_Pogung_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rawan_Banjir_Pogung_7, 
                style: style_Rawan_Banjir_Pogung_7,
                interactive: true,
    title: 'Rawan_Banjir_Pogung<br />\
    <img src="styles/legend/Rawan_Banjir_Pogung_7_0.png" /> Rendah<br />\
    <img src="styles/legend/Rawan_Banjir_Pogung_7_1.png" /> Sedang<br />\
    <img src="styles/legend/Rawan_Banjir_Pogung_7_2.png" /> Tinggi<br />'
        });
var format_KlasifikasiRW_8 = new ol.format.GeoJSON();
var features_KlasifikasiRW_8 = format_KlasifikasiRW_8.readFeatures(json_KlasifikasiRW_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlasifikasiRW_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasifikasiRW_8.addFeatures(features_KlasifikasiRW_8);
var lyr_KlasifikasiRW_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KlasifikasiRW_8, 
                style: style_KlasifikasiRW_8,
                interactive: false,
                title: '<img src="styles/legend/KlasifikasiRW_8.png" /> Klasifikasi RW'
            });

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleRoad_3.setVisible(true);lyr_GoogleLabels_4.setVisible(true);lyr_GoogleHybrid_5.setVisible(true);lyr_BatasDesaPogung_6.setVisible(true);lyr_Rawan_Banjir_Pogung_7.setVisible(true);lyr_KlasifikasiRW_8.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_GoogleRoad_3,lyr_GoogleLabels_4,lyr_GoogleHybrid_5,lyr_BatasDesaPogung_6,lyr_Rawan_Banjir_Pogung_7,lyr_KlasifikasiRW_8];
lyr_BatasDesaPogung_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rawan_Banjir_Pogung_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kelas': 'Kelas', });
lyr_KlasifikasiRW_8.set('fieldAliases', {'id': 'id', });
lyr_BatasDesaPogung_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Rawan_Banjir_Pogung_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_KlasifikasiRW_8.set('fieldImages', {'id': 'TextEdit', });
lyr_BatasDesaPogung_6.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'KDPKAB': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Rawan_Banjir_Pogung_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Kelas': 'inline label - visible with data', });
lyr_KlasifikasiRW_8.set('fieldLabels', {'id': 'no label', });
lyr_KlasifikasiRW_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});