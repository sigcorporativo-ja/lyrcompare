import M$plugin$LyrCompare from '/home/fbmanas/Codigo/git-sigc/lyrcompare/src/facade/js/lyrcompare';
import M$control$LyrCompareControl from '/home/fbmanas/Codigo/git-sigc/lyrcompare/src/facade/js/lyrcomparecontrol';
import M$impl$control$CurtainInteraction from '/home/fbmanas/Codigo/git-sigc/lyrcompare/src/impl/ol/js/CurtainInteraction';
import M$impl$control$Lyrcomparecontrol from '/home/fbmanas/Codigo/git-sigc/lyrcompare/src/impl/ol/js/lyrcomparecontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.LyrCompare = M$plugin$LyrCompare;
window.M.control.LyrCompareControl = M$control$LyrCompareControl;
window.M.impl.control.CurtainInteraction = M$impl$control$CurtainInteraction;
window.M.impl.control.Lyrcomparecontrol = M$impl$control$Lyrcomparecontrol;
