/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loads miscellaneous EMIT and PACE related features and functions
// Questions? Contact Emil A. Cherrington, Ph.D. (eac0021@uah.edu)
// This supports the following GEE code repository: https://bit.ly/gee_repo_pace_oci.
// Last updated: 27.06.2025

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PLANKTON, AEROSOL, CLOUD, OCEAN ECOSYSTEM - OCEAN COLOR INSTRUMENT (PACE OCI), 2024-PRESENT

// Wavelengths for the PACE OCI surface reflectance bands (v3) - ALL 122 bands
var wl_pace = [346, 351, 356, 361, 366, 371, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
    445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540,
    545, 550, 555, 560, 565, 570, 575, 580, 586, 615, 620, 625, 630, 635, 640, 642, 645, 647, 650, 652,
    655, 657, 660, 662, 665, 667, 670, 672, 675, 677, 679, 682, 697, 699, 702, 704, 707, 709, 712, 714,
    719, 724, 729, 734, 739, 742, 744, 747, 749, 752, 754, 772, 774, 779, 784, 789, 794, 799, 804, 809,
    814, 819, 824, 829, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 1038, 1249, 1618, 2131, 2258];

exports.wl_pace = wl_pace;

// Wavelengths for the PACE OCI surface reflectance (SR) bands (v3) - 117 bands, not including the 5 SWIR bands
var wl_pace_vnir = [346, 351, 356, 361, 366, 371, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440,
    445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540,
    545, 550, 555, 560, 565, 570, 575, 580, 586, 615, 620, 625, 630, 635, 640, 642, 645, 647, 650, 652,
    655, 657, 660, 662, 665, 667, 670, 672, 675, 677, 679, 682, 697, 699, 702, 704, 707, 709, 712, 714,
    719, 724, 729, 734, 739, 742, 744, 747, 749, 752, 754, 772, 774, 779, 784, 789, 794, 799, 804, 809,
    814, 819, 824, 829, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895];

exports.wl_pace_vnir = wl_pace_vnir;

// Wavelengths for equivalent MODIS bands in PACE OCI
var wl_modis = [470,555,645,860,1249,2131];

exports.wl_modis = wl_modis;

// Actual MODIS wavelengths (6 of 7 bands); see: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43A4#bands
var wl_modis_ = [469,555,645,859,1240,2130];

exports.wl_modis_ = wl_modis_;

// also see the full list of SR v3 bands (provided by Dr. Morgaine McKibben of NASA GSFC):
// https://bit.ly/pace_oci_sr_v3_bands

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INTERNATIONAL SPACE STATION - EARTH SURFACE MINERAL DUST SOURCE INVESTIGATION (ISS EMIT), 2023-PRESENT

// Wavelengths for the EMIT spectral bands - ALL 285 bands
var wl_emit = [381.00558, 388.4092, 395.81583, 403.2254, 410.638, 418.0536, 425.47214, 432.8927, 440.31726, 447.7428, 455.17035,
462.59888, 470.0304, 477.46292, 484.89743, 492.33292, 499.77142, 507.2099, 514.6504, 522.0909, 529.5333, 536.9768,
544.42126, 551.8667, 559.3142, 566.7616, 574.20905, 581.6585, 589.108, 596.55835, 604.0098, 611.4622, 618.9146,
626.36804, 633.8215, 641.2759, 648.7303, 656.1857, 663.6411, 671.09753, 678.5539, 686.0103, 693.4677, 700.9251,
708.38354, 715.84094, 723.2993, 730.7587, 738.2171, 745.6765, 753.1359, 760.5963, 768.0557, 775.5161, 782.97754,
790.4379, 797.89935, 805.36176, 812.8232, 820.2846, 827.746, 835.2074, 842.66986, 850.1313, 857.5937, 865.0551,
872.5176, 879.98004, 887.44147, 894.90393, 902.3664, 909.82886, 917.2913, 924.7538, 932.21625, 939.6788, 947.14026,
954.6027, 962.0643, 969.5268, 976.9883, 984.4498, 991.9114, 999.37286, 1006.8344, 1014.295, 1021.7566, 1029.2172,
1036.6777, 1044.1383, 1051.5989, 1059.0596, 1066.5201, 1073.9797, 1081.4404, 1088.9, 1096.3597, 1103.8184, 1111.2781,
1118.7368, 1126.1964, 1133.6552, 1141.1129, 1148.5717, 1156.0304, 1163.4882, 1170.9459, 1178.4037, 1185.8616, 1193.3184,
1200.7761, 1208.233, 1215.6898, 1223.1467, 1230.6036, 1238.0596, 1245.5154, 1252.9724, 1260.4283, 1267.8833, 1275.3392,
1282.7942, 1290.2502, 1297.7052, 1305.1603, 1312.6144, 1320.0685, 1327.5225, 1334.9756, 1342.4287, 1349.8818, 1357.3351,
1364.7872, 1372.2384, 1379.6907, 1387.1418, 1394.5931, 1402.0433, 1409.4937, 1416.944, 1424.3933, 1431.8427, 1439.292,
1446.7404, 1454.1888, 1461.6372, 1469.0847, 1476.5321, 1483.9796, 1491.4261, 1498.8727, 1506.3192, 1513.7649, 1521.2104,
1528.655, 1536.1007, 1543.5454, 1550.9891, 1558.4329, 1565.8766, 1573.3193, 1580.7621, 1588.205, 1595.6467, 1603.0886,
1610.5295, 1617.9705, 1625.4104, 1632.8513, 1640.2903, 1647.7303, 1655.1694, 1662.6074, 1670.0455, 1677.4836, 1684.9209,
1692.358, 1699.7952, 1707.2314, 1714.6667, 1722.103, 1729.5383, 1736.9727, 1744.4071, 1751.8414, 1759.2749, 1766.7084,
1774.1418, 1781.5743, 1789.007, 1796.4385, 1803.8701, 1811.3008, 1818.7314, 1826.1611, 1833.591, 1841.0206, 1848.4495,
1855.8773, 1863.3052, 1870.733, 1878.16, 1885.5869, 1893.013, 1900.439, 1907.864, 1915.2892, 1922.7133, 1930.1375, 1937.5607,
1944.9839, 1952.4071, 1959.8295, 1967.2518, 1974.6732, 1982.0946, 1989.515, 1996.9355, 2004.355, 2011.7745, 2019.1931, 2026.6118,
2034.0304, 2041.4471, 2048.865, 2056.2808, 2063.6965, 2071.1123, 2078.5273, 2085.9421, 2093.3562, 2100.769, 2108.1821, 2115.5942,
2123.0063, 2130.4175, 2137.8289, 2145.239, 2152.6482, 2160.0576, 2167.467, 2174.8755, 2182.283, 2189.6904, 2197.097, 2204.5034,
2211.9092, 2219.3147, 2226.7195, 2234.1233, 2241.5269, 2248.9297, 2256.3328, 2263.7346, 2271.1365, 2278.5376, 2285.9387, 2293.3386,
2300.7378, 2308.136, 2315.5342, 2322.9326, 2330.3298, 2337.7263, 2345.1216, 2352.517, 2359.9126, 2367.3071, 2374.7007, 2382.0935,
2389.486, 2396.878, 2404.2695, 2411.6604, 2419.0513, 2426.4402, 2433.8303, 2441.2183, 2448.6064, 2455.9944, 2463.3816, 2470.7678,
2478.153, 2485.5386, 2492.9238];

exports.wl_emit = wl_emit;

// Wavelengths for working EMIT spectral bands - excluding bands with missing data (bands 128-143, 188-213)
var wl_emit_sub = [381.00558, 388.4092, 395.81583, 403.2254, 410.638, 418.0536, 425.47214, 432.8927, 440.31726, 447.7428, 455.17035,
462.59888, 470.0304, 477.46292, 484.89743, 492.33292, 499.77142, 507.2099, 514.6504, 522.0909, 529.5333, 536.9768,
544.42126, 551.8667, 559.3142, 566.7616, 574.20905, 581.6585, 589.108, 596.55835, 604.0098, 611.4622, 618.9146,
626.36804, 633.8215, 641.2759, 648.7303, 656.1857, 663.6411, 671.09753, 678.5539, 686.0103, 693.4677, 700.9251,
708.38354, 715.84094, 723.2993, 730.7587, 738.2171, 745.6765, 753.1359, 760.5963, 768.0557, 775.5161, 782.97754,
790.4379, 797.89935, 805.36176, 812.8232, 820.2846, 827.746, 835.2074, 842.66986, 850.1313, 857.5937, 865.0551,
872.5176, 879.98004, 887.44147, 894.90393, 902.3664, 909.82886, 917.2913, 924.7538, 932.21625, 939.6788, 947.14026,
954.6027, 962.0643, 969.5268, 976.9883, 984.4498, 991.9114, 999.37286, 1006.8344, 1014.295, 1021.7566, 1029.2172,
1036.6777, 1044.1383, 1051.5989, 1059.0596, 1066.5201, 1073.9797, 1081.4404, 1088.9, 1096.3597, 1103.8184, 1111.2781,
1118.7368, 1126.1964, 1133.6552, 1141.1129, 1148.5717, 1156.0304, 1163.4882, 1170.9459, 1178.4037, 1185.8616, 1193.3184,
1200.7761, 1208.233, 1215.6898, 1223.1467, 1230.6036, 1238.0596, 1245.5154, 1252.9724, 1260.4283, 1267.8833, 1275.3392,
1282.7942, 1290.2502, 1297.7052, 1305.1603, 1312.6144, 1320.0685,
1446.7404, 1454.1888, 1461.6372, 1469.0847, 1476.5321, 1483.9796, 1491.4261, 1498.8727, 1506.3192, 1513.7649, 1521.2104,
1528.655, 1536.1007, 1543.5454, 1550.9891, 1558.4329, 1565.8766, 1573.3193, 1580.7621, 1588.205, 1595.6467, 1603.0886,
1610.5295, 1617.9705, 1625.4104, 1632.8513, 1640.2903, 1647.7303, 1655.1694, 1662.6074, 1670.0455, 1677.4836, 1684.9209,
1692.358, 1699.7952, 1707.2314, 1714.6667, 1722.103, 1729.5383, 1736.9727, 1744.4071, 1751.8414, 1759.2749, 1766.7084,
1967.2518, 1974.6732, 1982.0946, 1989.515, 1996.9355, 2004.355, 2011.7745, 2019.1931, 2026.6118,
2034.0304, 2041.4471, 2048.865, 2056.2808, 2063.6965, 2071.1123, 2078.5273, 2085.9421, 2093.3562, 2100.769, 2108.1821, 2115.5942,
2123.0063, 2130.4175, 2137.8289, 2145.239, 2152.6482, 2160.0576, 2167.467, 2174.8755, 2182.283, 2189.6904, 2197.097, 2204.5034,
2211.9092, 2219.3147, 2226.7195, 2234.1233, 2241.5269, 2248.9297, 2256.3328, 2263.7346, 2271.1365, 2278.5376, 2285.9387, 2293.3386,
2300.7378, 2308.136, 2315.5342, 2322.9326, 2330.3298, 2337.7263, 2345.1216, 2352.517, 2359.9126, 2367.3071, 2374.7007, 2382.0935,
2389.486, 2396.878, 2404.2695, 2411.6604, 2419.0513, 2426.4402, 2433.8303, 2441.2183, 2448.6064, 2455.9944, 2463.3816, 2470.7678,
2478.153, 2485.5386, 2492.9238];

exports.wl_emit_sub = wl_emit_sub;

// also see the full list of EMIT spectral bands:
// https://bit.ly/iss_emit_bands

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NASA EARTH OBSERVING-1 (EO-1) HYPERION INSTRUMENT, 2000-2017

// Wavelengths for all 224 EO-1 Hyperion spectral bands

var wl_hyperion =
[426.8200, 436.9900, 447.1700, 457.3400, 467.5200, 477.6900, 487.8700, 498.0400,
508.2200, 518.3900, 528.5700, 538.7400, 548.9200, 559.0900, 569.2700, 579.4500, 589.6200, 599.8000,
609.9700, 620.1500, 630.3200, 640.5000, 650.6700, 660.8500, 671.0200, 681.2000, 691.3700,
701.5500, 711.7200, 721.9000, 732.0700, 742.2500, 752.4300, 762.6000, 772.7800, 782.9500, 793.1300,
803.3000, 813.4800, 823.6500, 833.8300, 844.0000, 854.1800, 864.3500, 874.5300, 884.7000, 894.8800,
905.0500, 915.2300, 925.4100, 912.4500, 922.5400, 932.6400, 942.7300, 952.8200, 962.9100, 972.9900, 983.0800, 993.1700,
1003.300,1013.300, 1023.400,1033.490,1043.590, 1053.690, 1063.790, 1073.890, 1083.990, 1094.090,
1104.190, 1114.190, 1124.280,1134.3800, 1144.4800, 1154.5800, 1164.6800, 1174.7700, 1184.8700, 1194.9700,
1205.0700, 1215.1700, 1225.1700, 1235.2700, 1245.3600, 1255.4600, 1265.5600, 1275.6600, 1285.7600, 1295.8600,
1305.9600, 1316.0500, 1326.0500, 1336.1500, 1346.2500, 1356.3500, 1366.4500, 1376.5500, 1386.6500, 1396.7400,
1406.8400, 1416.9400, 1426.9400, 1437.0400, 1447.1400, 1457.2300, 1467.3300, 1477.4300, 1487.5300, 1497.6300,
1507.7300, 1517.8300, 1527.9200, 1537.9200, 1548.0200, 1558.1200, 1568.2200, 1578.3200, 1588.4200, 1598.5100,
1608.6100, 1618.7100, 1628.8100, 1638.8100, 1648.9000, 1659.0000, 1669.1000, 1679.2000, 1689.3000, 1699.4000,
1709.5000, 1719.6000, 1729.7000, 1739.7000, 1749.7900, 1759.8900, 1769.9900, 1780.0900, 1790.1900,
1800.2900, 1810.3800, 1820.4800, 1830.5800, 1840.5800, 1850.6800, 1860.7800, 1870.8700, 1880.9800, 1891.0700,
1901.1700, 1911.2700, 1921.3700, 1931.4700, 1941.5700, 1951.5700, 1961.6600, 1971.7600, 1981.8600, 1991.9600,
2002.0600, 2012.1500, 2022.2500, 2032.3500, 2042.4500, 2052.4500, 2062.5500, 2072.6500, 2082.7500, 2092.8400,
2102.9400, 2113.0400, 2123.1400, 2133.2400, 2143.3400, 2153.3400, 2163.4300, 2173.5300, 2183.6300, 2193.7300,
2203.8300, 2213.9300, 2224.0300, 2234.1200, 2244.2200, 2254.2200, 2264.3200, 2274.4200, 2284.5200, 2294.6100,
2304.7100, 2314.8100, 2324.9100, 2335.0100, 2345.1100, 2355.2100, 2365.2000, 2375.3000, 2385.4000, 2395.5000];

// NASA EO-1 Hyperion wavelengths courtesy of Dr. Gennadii Donchyts of Google

exports.wl_hyperion = wl_hyperion;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var coll_emit = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 284));
exports.coll_emit = coll_emit;

var coll_emit_sub = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 126).cat(ee.List.sequence(143, 186)).cat(ee.List.sequence(213, 284)));
exports.coll_emit_sub = coll_emit_sub;

var coll_emit_rescaled = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 284))
                        .map(function(img){return img.multiply(10000).toInt16().set('system:time_start',img.get('system:time_start'))}
                        //.map(function(img){return img.updateMask(img.select(ee.List.sequence(0, 284)).lt(10000)).set('system:time_start',img.get('system:time_start'))})
                        );

exports.coll_emit_rescaled = coll_emit_rescaled;

// Subset of EMIT data (243 bands), excluding bands with missing data (bands 128-143, 188-213) - SINGLE DATE
var emit_sr = function(roi, date){

var src = ee.ImageCollection('NASA/EMIT/L2A/RFL');  

var img1 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(0, 126))
              .median().multiply(10000).toInt16();

var img2 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(143, 186))
              .median().multiply(10000).toInt16();

var img3 = src.filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
              .select(ee.List.sequence(213, 284))
              .median().multiply(10000).toInt16();

return img1.addBands(img2).addBands(img3).set('system:time_start',img1.get('system:time_start'))};


exports.emit_sr = emit_sr;

// Subset of EMIT data (243 bands), excluding bands with missing data (bands 128-143, 188-213) - MULTIPLE DATES
var emit_sr2 = function(roi, date1, date2){

var src = ee.ImageCollection('NASA/EMIT/L2A/RFL');  

var img1 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(0, 126))
              .median().multiply(10000).toInt16().clip(roi);

var img2 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(143, 186))
              .median().multiply(10000).toInt16().clip(roi);

var img3 = src.filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
              .select(ee.List.sequence(213, 284))
              .median().multiply(10000).toInt16().clip(roi);

return img1.addBands(img2).addBands(img3)};


exports.emit_sr2 = emit_sr2;


// Full EMIT data, including bad bands
var emit_sr_full = function(roi, date){

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16()};

exports.emit_sr_full = emit_sr_full;


// Full EMIT data, including bad bands - allows changing date range to more than 1 day
var emit_sr_bz = function(date){

var roi = ee.Geometry.Rectangle(-87.28, 15.85, -89.27, 18.54);

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16().clip(roi)};

exports.emit_sr_bz = emit_sr_bz;


// Full EMIT data, including bad bands - allows changing date range to more than 1 day
var emit_sr_full2 = function(roi, date1, date2){

return ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate(ee.Date(date1), ee.Date(date2)).filterBounds(roi)
        .select(ee.List.sequence(0, 284))
        .median().multiply(10000).toInt16()};

exports.emit_sr_full2 = emit_sr_full2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BAND COMBINATIONS FOR IMAGE VISUALIZATIONS

// The following three visualizations are designed to mimic the band 5-4-3 combination from Landsats -4, -5, and -7 (6-5-4 for L8, L9).
// These display forested areas in dark green, grasslands in pink / purple, and water in dark blue.

var viz1_scaled = {bands: ["b120","b111","b60"], min: [2700,2500,450], max: [3800,3700,1250]};
exports.viz1 = viz1_scaled;

var viz1_unscaled = {bands: ["b120","b111","b60"], min: [0.27,0.25,0.045], max: [0.38,0.37,0.125]};
exports.viz1_ = viz1_unscaled;

var viz2_scaled = {bands: ["b120","b111","b60"], min: [-1100, -1350, -700], max:[3800, 5100, 2050]};
exports.viz2 = viz2_scaled;

var viz3_scaled = {bands: ["b120","b111","b60"], min: [-730, -834, -684], max:[4050, 5376, 2140]};
exports.viz3 = viz3_scaled;

var viz3_unscaled = {bands: ["b120","b111","b60"], min: [-0.0730, -0.0834, -0.0684], max:[0.4050, 0.5376, 0.2140]};
exports.viz3_ = viz3_unscaled;

/////

var viz1_emit = {bands: ['reflectance_164','reflectance_65','reflectance_37'], min: [-730, -834, -684], max:[4050, 5376, 2140]};

exports.viz1_emit = viz1_emit;

var viz1b_emit = {bands: ['reflectance_164','reflectance_65','reflectance_37'], min: [-0.0730, -0.0834, -0.0684], max:[0.4050, 0.5376, 0.2140]};

exports.viz1b_emit = viz1b_emit;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VEGETATION INDICES (VIs)
// src: https://pace.oceansciences.org/docs/03-c-Huemmrich_PACE_Terrestrial.pdf (Huemmrich, 2024)
// using the bands from: https://bit.ly/pace_oci_sr_v3_bands


// NDVI - Normalized Difference Vegetation Index
var ndvi = function(img){

return img.normalizedDifference(['b111','b60']).multiply(10000).rename("NDVI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndvi = ndvi;

// EVI - Enhanced Vegetation Index
var evi = function(img) {

return img.expression('2.5 * ( (NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1) )',
{
"BLUE": img.select([26]),
"RED":  img.select([59]),
"NIR":  img.select([110]),

}).multiply(10000).rename('EVI').set('system:time_start', img.get('system:time_start'));
};

exports.evi = evi;

// Normalized Burn Ratio (NBR)
// more info: https://www.usgs.gov/landsat-missions/landsat-normalized-burn-ratio

var nbr = function(img) {

return img.normalizedDifference(['b111','b121']).multiply(10000).rename("NBR")
.set('system:time_start',img.get('system:time_start'));
};

exports.nbr = nbr;

// NDWI: Normalized Difference Water Index
// ("water content and foliage water stress" - Huemmrich, 2024)
var ndwi = function(img) {

return img.normalizedDifference(['b111','b119']).multiply(10000).rename("NDWI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndwi = ndwi;

// NDII: Normalized Difference Infrared Index
// ("water content and foliage water stress" - Huemmrich, 2024)
var ndii = function(img) {

return img.normalizedDifference(['b111','b120']).multiply(10000).rename("NDII")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndii = ndii;

// NDSI: Normalized Difference Snow Index
var ndsi = function(img) {

return img.normalizedDifference(['b43','b120']).multiply(10000).rename("NDSI")
.set('system:time_start',img.get('system:time_start'));
};

exports.ndsi = ndsi;

// PRI: Photochemical Reflectance Index
// ("shifts in xanthopyll cycle pigments related to light use efficiency" - Huemmrich, 2024)
var pri = function(img) {

return img.normalizedDifference(['b38','b46']).multiply(10000).rename("PRI")
.set('system:time_start',img.get('system:time_start'));
};

exports.pri = pri;

// CCI:Chlorophyll Carotenoid Index
// ("info. on photosynthetic efficiency through chlorophyll / carotenoid pigment ratios" - Huemmrich, 2024)
var cci = function(img) {

return img.normalizedDifference(['b38','b60']).multiply(10000).rename("CCI")
.set('system:time_start',img.get('system:time_start'));
};

exports.cci = cci;

// CIRE - Chlorophyll Index Red Edge
// ("canopy chlorophyll content" - Huemmrich, 2024)
var cire = function(img) {

var pt1 = img.select([97]);
var pt2 = img.select([75]);
var pt3 = pt1.divide(pt2);

return pt3.subtract(1).multiply(10000).rename("CIRE").set('system:time_start',img.get('system:time_start'));
};

exports.cire = cire;

// CAR - Carotenoid Content Index
// ("canopy carotenoid content, which gives insight on photosynthesis & photoprotection" - Huemmrich, 2024)
var car = function(img) {

return img.expression('P800 * ( (1 / P495) - (1 / P705) )',

{
"P495":img.select([30]),
"P705":img.select([75]),
"P800":img.select([97])

}).multiply(10000).rename("CAR").set('system:time_start',img.get('system:time_start'));
};

exports.car = car;

// mARI - Modified Anthocyanin Reflectance Index
// ("anthocyanin content, providing info. on photoprotection & early indications of senescence" - Huemmrich, 2024)
var mari = function(img) {

return img.expression('P800 * ( (1 / P550) - (1 / P705) )',

{
"P550":img.select([41]),
"P705":img.select([75]),
"P800":img.select([97])

}).multiply(10000).rename("mARI").set('system:time_start',img.get('system:time_start'));
};

exports.mari = mari;

/////

// The following combines CAR, CIRE, and mARI as three bands of a single image to allow for tracking over time.
// As noted above, CAR tracks carotenoids, CIRE tracks chlorophyll, and mARI tracks anthocyanins.
var car_cire_mari = function(img) {

var car = img.expression('P800 * ( (1 / P495) - (1 / P705) )',

{"P495":img.select([30]),
"P705":img.select([75]),
"P800":img.select([97])}).multiply(10000).rename("CAR").set('system:time_start',img.get('system:time_start'));

var cire = img.expression(' ( (P800 / P705) - 1 )',

{"P705": img.select([75]),
"P800": img.select([97])}).multiply(10000).rename("CIRE").set('system:time_start',img.get('system:time_start'));


var mari = img.expression('P800 * ( (1 / P550) - (1 / P705) )',

{"P550":img.select([41]),
"P705":img.select([75]),
"P800":img.select([97])}).multiply(10000).rename("mARI").set('system:time_start',img.get('system:time_start'));

return ee.Image.cat(car,cire,mari).set('system:time_start',img.get('system:time_start'))};

exports.car_cire_mari = car_cire_mari;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rescale = function(img){return img.divide(10000).set('system:time_start',img.get('system:time_start'))};
exports.rescale = rescale;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function norm(img){
  var bandNames = img.bandNames();
  // Compute min and max of the image
  var minDict = img.reduceRegion({reducer: ee.Reducer.min(), geometry: img.geometry().bounds(),
    scale: img.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var maxDict = img.reduceRegion({reducer: ee.Reducer.max(),geometry: img.geometry().bounds(),
    scale: img.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var mins = ee.Image.constant(minDict.values(bandNames));
  var maxs = ee.Image.constant(maxDict.values(bandNames));

  return img.subtract(mins).divide(maxs.subtract(mins))}

exports.norm = norm;

/////

// Principal Component Analysis (PCA)
// slightly modified from Ujaval Gandhi's End-to-End Google Earth Engine course (https://courses.spatialthoughts.com/end-to-end-gee-supplement.html#principal-component-analysis-pca)
// src: https://code.earthengine.google.co.in/?scriptPath=users%2Fujavalgandhi%2FEnd-to-End-GEE%3ASupplement%2FSupervised_Classification%2FPrincipal_Components_Analysis

function pca(img){
  var image = img.unmask();
  var scale = img.projection().nominalScale();
  var region = img.geometry().bounds();
  var bandNames = image.bandNames();
  // Mean center the data to enable a faster covariance reducer and an SD stretch of the principal components.
  var meanDict = image.reduceRegion({reducer:ee.Reducer.mean(),geometry:region,scale:scale,maxPixels: 1e13,tileScale: 16});
  var means = ee.Image.constant(meanDict.values(bandNames));
  var centered = image.subtract(means);
  var getNewBandNames = function(prefix) { // This helper function returns a list of new band names.
    var seq = ee.List.sequence(1, bandNames.length());
    return seq.map(function(b) {return ee.String(prefix).cat(ee.Number(b).int())})};
  
  // This function accepts mean centered imagery, a scale and a region in which to perform the analysis. It returns the PCs in the region as a new image.
  var getPrincipalComponents = function(centered, scale, region) {
    
    var arrays = centered.toArray(); // Collapse the bands of the image into a 1D array per pixel.
    
    // Compute the covariance of the bands within the region.
    var covar = arrays.reduceRegion({reducer: ee.Reducer.centeredCovariance(),geometry:region,scale: scale,maxPixels: 1e13,tileScale: 16});
    var covarArray = ee.Array(covar.get('array')); // Get the 'array' covariance result and cast to an array. This represents the band-to-band covariance within the region.
    var eigens = covarArray.eigen(); // Perform an eigen analysis and slice apart the values and vectors.
    var eigenValues = eigens.slice(1, 0, 1); // This is a P-length vector of Eigenvalues.
    
    // Compute Percentage Variance of each component. This will allow us to decide how many components capture most of the variance in the input.
    var eigenValuesList = eigenValues.toList().flatten();
    var total = eigenValuesList.reduce(ee.Reducer.sum());

    var percentageVariance = eigenValuesList.map(function(item) {
      var component = eigenValuesList.indexOf(item).add(1).format('%02d');
      var variance = ee.Number(item).divide(total).multiply(100).format('%.2f');
      return ee.List([component, variance])});
    
    var varianceDict = ee.Dictionary(percentageVariance.flatten()); // Create a dictionary that will be used to set properties on final image
    
    var eigenVectors = eigens.slice(1, 1); // This is a PxP matrix with eigenvectors in rows.
    
    var arrayImage = arrays.toArray(1); // Convert the array image to 2D arrays for matrix computations.

    var principalComponents = ee.Image(eigenVectors).matrixMultiply(arrayImage); // Left multiply the image array by the matrix of eigenvectors.

    // Turn the square roots of the Eigenvalues into a P-band image. Call abs() to turn negative eigenvalues to positive before taking the square root.
    var sdImage = ee.Image(eigenValues.abs().sqrt()).arrayProject([0]).arrayFlatten([getNewBandNames('sd')]);

    // Turn the PCs into a P-band image, normalized by SD.
    return principalComponents
      .arrayProject([0]) // Throw out an an unneeded dimension, [[]] -> [].
      .arrayFlatten([getNewBandNames('pc')]) // Make the one band array image a multi-band image, [] -> image.
      .divide(sdImage).set(varianceDict); // Normalize the PCs by their SDs.
  };
  var pcImage = getPrincipalComponents(centered, scale, region);
  return pcImage.mask(img.mask())}

exports.pca = pca;

/////

function variance_pca(img) {
print('Variance of Principal Components', pca(img).toDictionary());
}

exports.variance_pca = variance_pca;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ln1 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:1})};
var ln2 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};

exports.ln1 = ln1;
exports.ln2 = ln2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sample axis titles for charts in Google Earth Engine

var haxis = {title: 'Wavelength (nm)'};
exports.haxis = haxis;

var vaxis = {title: 'Reflectance x 10,000'}; // Since we usually scale reflectance data for better data handling (i.e., 0 to 1 to 0 to 10,000)
exports.vaxis = vaxis;

var vaxis2 = {title: 'VI x 10,000'}; // We might also want to scale the VI data (i.e., from -1 to 1 to -10,000 to 10,000)
exports.vaxis2 = vaxis2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////