gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDtxtLogoObjects1= [];
gdjs.SplashScreenCode.GDtxtLogoObjects2= [];
gdjs.SplashScreenCode.GDlogosenacObjects1= [];
gdjs.SplashScreenCode.GDlogosenacObjects2= [];
gdjs.SplashScreenCode.GDbtnComecarObjects1= [];
gdjs.SplashScreenCode.GDbtnComecarObjects2= [];
gdjs.SplashScreenCode.GDtxtObjects1= [];
gdjs.SplashScreenCode.GDtxtObjects2= [];
gdjs.SplashScreenCode.GDtxtLabelNomeObjects1= [];
gdjs.SplashScreenCode.GDtxtLabelNomeObjects2= [];
gdjs.SplashScreenCode.GDsensorTecladoObjects1= [];
gdjs.SplashScreenCode.GDsensorTecladoObjects2= [];
gdjs.SplashScreenCode.GDnomeDaEntradaObjects1= [];
gdjs.SplashScreenCode.GDnomeDaEntradaObjects2= [];

gdjs.SplashScreenCode.conditionTrue_0 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashScreenCode.conditionTrue_1 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_1 = {val:false};


gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects = Hashtable.newFrom({"btnComecar": gdjs.SplashScreenCode.GDbtnComecarObjects1});gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects = Hashtable.newFrom({"btnComecar": gdjs.SplashScreenCode.GDbtnComecarObjects1});gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects = Hashtable.newFrom({"btnComecar": gdjs.SplashScreenCode.GDbtnComecarObjects1});gdjs.SplashScreenCode.eventsList0x6b0e14 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.createFrom(runtimeScene.getObjects("nomeDaEntrada"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.length === 0 ) ? "" :gdjs.SplashScreenCode.GDnomeDaEntradaObjects1[0].getString()));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Conteudo\\Click.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPrinc", false);
}}

}


}; //End of gdjs.SplashScreenCode.eventsList0x6b0e14
gdjs.SplashScreenCode.eventsList0xb3ea0 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
gdjs.SplashScreenCode.GDbtnComecarObjects1.createFrom(runtimeScene.getObjects("btnComecar"));
gdjs.SplashScreenCode.GDlogosenacObjects1.createFrom(runtimeScene.getObjects("logosenac"));
gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.createFrom(runtimeScene.getObjects("nomeDaEntrada"));
gdjs.SplashScreenCode.GDtxtObjects1.createFrom(runtimeScene.getObjects("txt"));
{for(var i = 0, len = gdjs.SplashScreenCode.GDbtnComecarObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDbtnComecarObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDlogosenacObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDlogosenacObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDtxtObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDtxtObjects1[i].returnVariable(gdjs.SplashScreenCode.GDtxtObjects1[i].getVariables().getFromIndex(0)).setString("");
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDnomeDaEntradaObjects1[i].setString("");
}
}}

}


{



}


{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.createFrom(runtimeScene.getObjects("nomeDaEntrada"));
gdjs.SplashScreenCode.GDsensorTecladoObjects1.createFrom(runtimeScene.getObjects("sensorTeclado"));
{for(var i = 0, len = gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDnomeDaEntradaObjects1[i].setString((( gdjs.SplashScreenCode.GDsensorTecladoObjects1.length === 0 ) ? "" :gdjs.SplashScreenCode.GDsensorTecladoObjects1[0].getString()));
}
}}

}


{



}


{

gdjs.SplashScreenCode.GDlogosenacObjects1.createFrom(runtimeScene.getObjects("logosenac"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDlogosenacObjects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDlogosenacObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDlogosenacObjects1[k] = gdjs.SplashScreenCode.GDlogosenacObjects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDlogosenacObjects1.length = k;}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDlogosenacObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDlogosenacObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDlogosenacObjects1[i].setOpacity(gdjs.SplashScreenCode.GDlogosenacObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.SplashScreenCode.GDbtnComecarObjects1.createFrom(runtimeScene.getObjects("btnComecar"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDbtnComecarObjects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDbtnComecarObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDbtnComecarObjects1[k] = gdjs.SplashScreenCode.GDbtnComecarObjects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDbtnComecarObjects1.length = k;}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDbtnComecarObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDbtnComecarObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDbtnComecarObjects1[i].setOpacity(gdjs.SplashScreenCode.GDbtnComecarObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.SplashScreenCode.GDbtnComecarObjects1.createFrom(runtimeScene.getObjects("btnComecar"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashScreenCode.conditionTrue_1 = gdjs.SplashScreenCode.condition1IsTrue_0;
gdjs.SplashScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7249820);
}
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDbtnComecarObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDbtnComecarObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDbtnComecarObjects1[i].setColor("255;140;0");
}
}}

}


{

gdjs.SplashScreenCode.GDbtnComecarObjects1.createFrom(runtimeScene.getObjects("btnComecar"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects, runtimeScene, true, true);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDbtnComecarObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDbtnComecarObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDbtnComecarObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.SplashScreenCode.GDbtnComecarObjects1.createFrom(runtimeScene.getObjects("btnComecar"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDbtnComecarObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SplashScreenCode.eventsList0x6b0e14(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SplashScreenCode.eventsList0xb3ea0


gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDtxtLogoObjects1.length = 0;
gdjs.SplashScreenCode.GDtxtLogoObjects2.length = 0;
gdjs.SplashScreenCode.GDlogosenacObjects1.length = 0;
gdjs.SplashScreenCode.GDlogosenacObjects2.length = 0;
gdjs.SplashScreenCode.GDbtnComecarObjects1.length = 0;
gdjs.SplashScreenCode.GDbtnComecarObjects2.length = 0;
gdjs.SplashScreenCode.GDtxtObjects1.length = 0;
gdjs.SplashScreenCode.GDtxtObjects2.length = 0;
gdjs.SplashScreenCode.GDtxtLabelNomeObjects1.length = 0;
gdjs.SplashScreenCode.GDtxtLabelNomeObjects2.length = 0;
gdjs.SplashScreenCode.GDsensorTecladoObjects1.length = 0;
gdjs.SplashScreenCode.GDsensorTecladoObjects2.length = 0;
gdjs.SplashScreenCode.GDnomeDaEntradaObjects1.length = 0;
gdjs.SplashScreenCode.GDnomeDaEntradaObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
