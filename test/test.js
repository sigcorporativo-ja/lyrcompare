import LyrCompare from 'facade/lyrcompare';

const map = M.map({
  container: 'mapjs',
});

M.language.setLang('es'); //Español
//M.language.setLang('en');//Inglés

const mp = new M.plugin.LyrCompare({
  layers: [
      'WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*orto_2010-11',
      'WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*toporaster',
      'WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*SPOT_Andalucia',
      'WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*base',
  ],
});
map.addPlugin(mp);

/**
 * Ejemplo 1
 * Insertar capas WMS con formato Mapea.
 * El modo de comparación es 0, por lo que no se iniciará al cargarlo.
 * El modo de división es 1 por lo que será estático.
 * La interfaz está activa.
 */
/* const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'WMS*SIGPAC*https://www.ign.es/wms/pnoa-historico*SIGPAC',
    'WMS*OLISTAT*https://www.ign.es/wms/pnoa-historico*OLISTAT',
    'WMS*Nacional_1981-1986*https://www.ign.es/wms/pnoa-historico*Nacional_1981-1986',
    'WMS*Interministerial_1973-1986*https://www.ign.es/wms/pnoa-historico*Interministerial_1973-1986',
  ],
  collapsible: true,
  collapsed: true,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 0,
  interface: true,
});

map.addPlugin(pluginLyrCompare);
*/
/**
 * Ejemplo 2
 * Al no indicar capas mostrará un error en pantalla: El número de capas es insuficiente para aplicar el efecto
 */
/* const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  collapsible: true,
  collapsed: false,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 0,
  defaultLyrA: 0,
  defaultLyrB: 1,
  defaultLyrC: 2,
  defaultLyrD: 3,
  interface: true,
}); */

/**
 * Ejemplo 3
 * WMS con formato Mapea y sin interfaz
 */
/* const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'WMS*SIGPAC*https://www.ign.es/wms/pnoa-historico*SIGPAC',
    'WMS*OLISTAT*https://www.ign.es/wms/pnoa-historico*OLISTAT',
    'WMS*Nacional_1981-1986*https://www.ign.es/wms/pnoa-historico*Nacional_1981-1986',
    'WMS*Interministerial_1973-1986*https://www.ign.es/wms/pnoa-historico*Interministerial_1973-1986',
  ],
  collapsible: true,
  collapsed: false,
  staticDivision: 0,
  opacityVal: 100,
  comparisonMode: 2,
  interface: false,
});
 */

/**
 * Ejemplo 4
 * WMTS con formato Mapea y sin interfaz
 */
/* const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*orto_2010-11',
    'WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*toporaster',
    'WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*SPOT_Andalucia',
    'WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*base',
  ],
  collapsible: true,
  collapsed: false,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 1,
  defaultLyrA: 0,
  defaultLyrB: 1,
  defaultLyrC: 2,
  defaultLyrD: 3,
  interface: false,
});
 */

/**
 * Ejemplo 5
 * WMS como objeto
 *//*
const wms1 = new M.layer.WMS('WMS*SIGPAC*https://www.ign.es/wms/pnoa-historico*SIGPAC');
const wms2 = new M.layer.WMS('WMS*OLISTAT*https://www.ign.es/wms/pnoa-historico*OLISTAT');
const wms3 = new M.layer.WMS('WMS*Nacional_1981-1986*https://www.ign.es/wms/pnoa-historico*Nacional_1981-1986');
const wms4 = new M.layer.WMS('WMS*Interministerial_1973-1986*https://www.ign.es/wms/pnoa-historico*Interministerial_1973-1986');
map.addLayers([wms1, wms2, wms3, wms4]);

const pluginLyrCompare = new LyrCompare({
 position: 'TL',
 layers: [
   'SIGPAC', 'OLISTAT', 'Nacional_1981-1986', 'Interministerial_1973-1986'
 ],
 collapsible: true,
 collapsed: false,
 staticDivision: 1,
 opacityVal: 100,
 comparisonMode: 1,
 defaultLyrA: 0,
 defaultLyrB: 1,
 defaultLyrC: 2,
 defaultLyrD: 3,
 interface: false,
});
*/

/**
 * Ejemplo 6
 * WMTS como objeto
 */
/*
const wmts1 = new M.layer.WMTS('WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*orto_2010-11');
const wmts2 = new M.layer.WMTS('WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*toporaster');
const wmts3 = new M.layer.WMTS('WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*SPOT_Andalucia');
const wmts4 = new M.layer.WMTS('WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*base');
map.addLayers([wmts1, wmts2, wmts3, wmts4]);

const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'orto_2010-11', 'toporaster', 'SPOT_Andalucia-1986', 'base'
  ],
  collapsible: true,
  collapsed: false,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 1,
  defaultLyrA: 2,
  defaultLyrB: 0,
  defaultLyrC: 1,
  defaultLyrD: 3,
  interface: false,
});
 */

/**
 * Ejemplo 7
 * WMS + WMTS como cadena y como texto
 */
/*
const wmts1 = new M.layer.WMTS('WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*orto_2010-11');
const wms2 = new M.layer.WMS('WMS*OLISTAT*https://www.ign.es/wms/pnoa-historico*OLISTAT');
map.addLayers([wmts1, wms2]);

const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'orto_2010-11', 'OLISTAT', 'WMS*Nacional_1981-1986*https://www.ign.es/wms/pnoa-historico*Nacional_1981-1986', 'WMTS*http://www.callejerodeandalucia.es/servicios/base/gwc/service/wmts?*base'
  ],
  collapsible: true,
  collapsed: false,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 1,
  defaultLyrA: 0,
  defaultLyrB: 1,
  defaultLyrC: 2,
  defaultLyrD: 3,
  interface: false,
});
 */

/**
 * Ejemplo 8
 * Al añadir capas que no son válidas para el plugin no se contarán y mostrará el mensaje: El número de capas es insuficiente para aplicar el efecto
 */
/*
const pluginLyrCompare = new LyrCompare({
  position: 'TL',
  layers: [
    'WFST*CapaWFS*http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?*tematicos:Provincias*MPOLYGON',
    'KML*Arboleda*http://mapea4-sigc.juntadeandalucia.es/files/kml/*arbda_sing_se.kml*true',
    'WFST*CapaWFSColegio*http://g-gis-online-lab.desarrollo.guadaltel.es/geoserver/ggiscloud_root/wms?*ggiscloud_root:a1585301579731_colegios*MPOINT',
    'WFST*CapaWFSRed*http://g-gis-online-lab.desarrollo.guadaltel.es/geoserver/ggiscloud_root/wms?*ggiscloud_root:a1585301955480_red_hidrografica*MLINE',
  ],
  collapsible: true,
  collapsed: false,
  staticDivision: 1,
  opacityVal: 100,
  comparisonMode: 0,
  defaultLyrA: 0,
  defaultLyrB: 1,
  defaultLyrC: 2,
  defaultLyrD: 3,
  interface: true,
}); */