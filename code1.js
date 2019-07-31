gdjs.MenuPrincCode = {};
gdjs.MenuPrincCode.GDtxtLogoObjects1= [];
gdjs.MenuPrincCode.GDtxtLogoObjects2= [];
gdjs.MenuPrincCode.GDtxtLogoObjects3= [];
gdjs.MenuPrincCode.GDtxtCreditosObjects1= [];
gdjs.MenuPrincCode.GDtxtCreditosObjects2= [];
gdjs.MenuPrincCode.GDtxtCreditosObjects3= [];
gdjs.MenuPrincCode.GDtxtIniciarObjects1= [];
gdjs.MenuPrincCode.GDtxtIniciarObjects2= [];
gdjs.MenuPrincCode.GDtxtIniciarObjects3= [];
gdjs.MenuPrincCode.GDboasVindasObjects1= [];
gdjs.MenuPrincCode.GDboasVindasObjects2= [];
gdjs.MenuPrincCode.GDboasVindasObjects3= [];
gdjs.MenuPrincCode.GDplayerObjects1= [];
gdjs.MenuPrincCode.GDplayerObjects2= [];
gdjs.MenuPrincCode.GDplayerObjects3= [];
gdjs.MenuPrincCode.GDchaoObjects1= [];
gdjs.MenuPrincCode.GDchaoObjects2= [];
gdjs.MenuPrincCode.GDchaoObjects3= [];

gdjs.MenuPrincCode.conditionTrue_0 = {val:false};
gdjs.MenuPrincCode.condition0IsTrue_0 = {val:false};
gdjs.MenuPrincCode.condition1IsTrue_0 = {val:false};


gdjs.MenuPrincCode.eventsList0x6e9fe4 = function(runtimeScene) {

{

gdjs.MenuPrincCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuPrincCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuPrincCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MenuPrincCode.condition0IsTrue_0.val = true;
        gdjs.MenuPrincCode.GDplayerObjects2[k] = gdjs.MenuPrincCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuPrincCode.GDplayerObjects2.length = k;}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
}

}


{

gdjs.MenuPrincCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuPrincCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuPrincCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MenuPrincCode.condition0IsTrue_0.val = true;
        gdjs.MenuPrincCode.GDplayerObjects1[k] = gdjs.MenuPrincCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.MenuPrincCode.GDplayerObjects1.length = k;}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDplayerObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.MenuPrincCode.eventsList0x6e9fe4
gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtIniciarObjects1Objects = Hashtable.newFrom({"txtIniciar": gdjs.MenuPrincCode.GDtxtIniciarObjects1});gdjs.MenuPrincCode.eventsList0x71d21c = function(runtimeScene) {

{


gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CutScene1", false);
}}

}


}; //End of gdjs.MenuPrincCode.eventsList0x71d21c
gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtIniciarObjects1Objects = Hashtable.newFrom({"txtIniciar": gdjs.MenuPrincCode.GDtxtIniciarObjects1});gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtCreditosObjects1Objects = Hashtable.newFrom({"txtCreditos": gdjs.MenuPrincCode.GDtxtCreditosObjects1});gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtCreditosObjects1Objects = Hashtable.newFrom({"txtCreditos": gdjs.MenuPrincCode.GDtxtCreditosObjects1});gdjs.MenuPrincCode.eventsList0x6ecb64 = function(runtimeScene) {

{


gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuCreditos", false);
}}

}


}; //End of gdjs.MenuPrincCode.eventsList0x6ecb64
gdjs.MenuPrincCode.eventsList0xb3ea0 = function(runtimeScene) {

{



}


{


gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuPrincCode.eventsList0x6e9fe4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
gdjs.MenuPrincCode.GDboasVindasObjects1.createFrom(runtimeScene.getObjects("boasVindas"));
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Conteudo\\SweetDreams.ogg", 2, true, 100, 1);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.MenuPrincCode.GDboasVindasObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDboasVindasObjects1[i].setString("Olá, " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " é um desprazer tê-lx aqui.");
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Camada1");
}}

}


{



}


{

gdjs.MenuPrincCode.GDtxtIniciarObjects1.createFrom(runtimeScene.getObjects("txtIniciar"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtIniciarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDtxtIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDtxtIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDtxtIniciarObjects1[i].setColor("121;247;78");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 30);
}
{ //Subevents
gdjs.MenuPrincCode.eventsList0x71d21c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuPrincCode.GDtxtIniciarObjects1.createFrom(runtimeScene.getObjects("txtIniciar"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtIniciarObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDtxtIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDtxtIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDtxtIniciarObjects1[i].setColor("255;255;255");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, 100);
}}

}


{

gdjs.MenuPrincCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtCreditosObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDtxtCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDtxtCreditosObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.MenuPrincCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
gdjs.MenuPrincCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuPrincCode.mapOfGDgdjs_46MenuPrincCode_46GDtxtCreditosObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDtxtCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDtxtCreditosObjects1[i].setColor("121;247;78");
}
}
{ //Subevents
gdjs.MenuPrincCode.eventsList0x6ecb64(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MenuPrincCode.GDtxtLogoObjects1.createFrom(runtimeScene.getObjects("txtLogo"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuPrincCode.GDtxtLogoObjects1.length;i<l;++i) {
    if ( gdjs.MenuPrincCode.GDtxtLogoObjects1[i].getY() <= 70 ) {
        gdjs.MenuPrincCode.condition0IsTrue_0.val = true;
        gdjs.MenuPrincCode.GDtxtLogoObjects1[k] = gdjs.MenuPrincCode.GDtxtLogoObjects1[i];
        ++k;
    }
}
gdjs.MenuPrincCode.GDtxtLogoObjects1.length = k;}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuPrincCode.GDtxtLogoObjects1 */
{for(var i = 0, len = gdjs.MenuPrincCode.GDtxtLogoObjects1.length ;i < len;++i) {
    gdjs.MenuPrincCode.GDtxtLogoObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.MenuPrincCode.GDtxtLogoObjects1.createFrom(runtimeScene.getObjects("txtLogo"));

gdjs.MenuPrincCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuPrincCode.GDtxtLogoObjects1.length;i<l;++i) {
    if ( gdjs.MenuPrincCode.GDtxtLogoObjects1[i].getY() >= 70 ) {
        gdjs.MenuPrincCode.condition0IsTrue_0.val = true;
        gdjs.MenuPrincCode.GDtxtLogoObjects1[k] = gdjs.MenuPrincCode.GDtxtLogoObjects1[i];
        ++k;
    }
}
gdjs.MenuPrincCode.GDtxtLogoObjects1.length = k;}if (gdjs.MenuPrincCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Camada1");
}}

}


}; //End of gdjs.MenuPrincCode.eventsList0xb3ea0


gdjs.MenuPrincCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPrincCode.GDtxtLogoObjects1.length = 0;
gdjs.MenuPrincCode.GDtxtLogoObjects2.length = 0;
gdjs.MenuPrincCode.GDtxtLogoObjects3.length = 0;
gdjs.MenuPrincCode.GDtxtCreditosObjects1.length = 0;
gdjs.MenuPrincCode.GDtxtCreditosObjects2.length = 0;
gdjs.MenuPrincCode.GDtxtCreditosObjects3.length = 0;
gdjs.MenuPrincCode.GDtxtIniciarObjects1.length = 0;
gdjs.MenuPrincCode.GDtxtIniciarObjects2.length = 0;
gdjs.MenuPrincCode.GDtxtIniciarObjects3.length = 0;
gdjs.MenuPrincCode.GDboasVindasObjects1.length = 0;
gdjs.MenuPrincCode.GDboasVindasObjects2.length = 0;
gdjs.MenuPrincCode.GDboasVindasObjects3.length = 0;
gdjs.MenuPrincCode.GDplayerObjects1.length = 0;
gdjs.MenuPrincCode.GDplayerObjects2.length = 0;
gdjs.MenuPrincCode.GDplayerObjects3.length = 0;
gdjs.MenuPrincCode.GDchaoObjects1.length = 0;
gdjs.MenuPrincCode.GDchaoObjects2.length = 0;
gdjs.MenuPrincCode.GDchaoObjects3.length = 0;

gdjs.MenuPrincCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['MenuPrincCode'] = gdjs.MenuPrincCode;
