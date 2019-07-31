gdjs.MenuConfigsCode = {};
gdjs.MenuConfigsCode.GDtxtLogoObjects1= [];
gdjs.MenuConfigsCode.GDtxtLogoObjects2= [];
gdjs.MenuConfigsCode.GDmaisObjects1= [];
gdjs.MenuConfigsCode.GDmaisObjects2= [];
gdjs.MenuConfigsCode.GDmenosObjects1= [];
gdjs.MenuConfigsCode.GDmenosObjects2= [];
gdjs.MenuConfigsCode.GDbarraVolumeObjects1= [];
gdjs.MenuConfigsCode.GDbarraVolumeObjects2= [];
gdjs.MenuConfigsCode.GDvolumeAtualObjects1= [];
gdjs.MenuConfigsCode.GDvolumeAtualObjects2= [];

gdjs.MenuConfigsCode.conditionTrue_0 = {val:false};
gdjs.MenuConfigsCode.condition0IsTrue_0 = {val:false};
gdjs.MenuConfigsCode.condition1IsTrue_0 = {val:false};
gdjs.MenuConfigsCode.condition2IsTrue_0 = {val:false};
gdjs.MenuConfigsCode.conditionTrue_1 = {val:false};
gdjs.MenuConfigsCode.condition0IsTrue_1 = {val:false};
gdjs.MenuConfigsCode.condition1IsTrue_1 = {val:false};
gdjs.MenuConfigsCode.condition2IsTrue_1 = {val:false};


gdjs.MenuConfigsCode.mapOfGDgdjs_46MenuConfigsCode_46GDmenosObjects1Objects = Hashtable.newFrom({"menos": gdjs.MenuConfigsCode.GDmenosObjects1});gdjs.MenuConfigsCode.eventsList0x6f8c34 = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
gdjs.MenuConfigsCode.condition1IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuConfigsCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuConfigsCode.conditionTrue_1 = gdjs.MenuConfigsCode.condition1IsTrue_0;
gdjs.MenuConfigsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6742404);
}
}}
if (gdjs.MenuConfigsCode.condition1IsTrue_0.val) {
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.createFrom(runtimeScene.getObjects("barraVolume"));
{for(var i = 0, len = gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].setWidth(gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].getWidth() - (30));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x6f8c34
gdjs.MenuConfigsCode.eventsList0x6f8a9c = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 0;
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x6f8c34(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x6f8a9c
gdjs.MenuConfigsCode.mapOfGDgdjs_46MenuConfigsCode_46GDmaisObjects1Objects = Hashtable.newFrom({"mais": gdjs.MenuConfigsCode.GDmaisObjects1});gdjs.MenuConfigsCode.eventsList0x690924 = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
gdjs.MenuConfigsCode.condition1IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuConfigsCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuConfigsCode.conditionTrue_1 = gdjs.MenuConfigsCode.condition1IsTrue_0;
gdjs.MenuConfigsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7350740);
}
}}
if (gdjs.MenuConfigsCode.condition1IsTrue_0.val) {
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.createFrom(runtimeScene.getObjects("barraVolume"));
{for(var i = 0, len = gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].setWidth(gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].getWidth() + (30));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x690924
gdjs.MenuConfigsCode.eventsList0x6907fc = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x690924(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x6907fc
gdjs.MenuConfigsCode.eventsList0x6ee4ac = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
gdjs.MenuConfigsCode.condition1IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 0;
}if ( gdjs.MenuConfigsCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuConfigsCode.conditionTrue_1 = gdjs.MenuConfigsCode.condition1IsTrue_0;
gdjs.MenuConfigsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7267924);
}
}}
if (gdjs.MenuConfigsCode.condition1IsTrue_0.val) {
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.createFrom(runtimeScene.getObjects("barraVolume"));
{for(var i = 0, len = gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].setWidth(gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].getWidth() - (30));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x6ee4ac
gdjs.MenuConfigsCode.eventsList0x6ecabc = function(runtimeScene) {

{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
gdjs.MenuConfigsCode.condition1IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}if ( gdjs.MenuConfigsCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuConfigsCode.conditionTrue_1 = gdjs.MenuConfigsCode.condition1IsTrue_0;
gdjs.MenuConfigsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7261300);
}
}}
if (gdjs.MenuConfigsCode.condition1IsTrue_0.val) {
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.createFrom(runtimeScene.getObjects("barraVolume"));
{for(var i = 0, len = gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].setWidth(gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].getWidth() + (30));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


}; //End of gdjs.MenuConfigsCode.eventsList0x6ecabc
gdjs.MenuConfigsCode.eventsList0xb3ea0 = function(runtimeScene) {

{


{
gdjs.MenuConfigsCode.GDvolumeAtualObjects1.createFrom(runtimeScene.getObjects("volumeAtual"));
{for(var i = 0, len = gdjs.MenuConfigsCode.GDvolumeAtualObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDvolumeAtualObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.createFrom(runtimeScene.getObjects("barraVolume"));
{gdjs.evtTools.sound.playSound(runtimeScene, "Conteudo\\The_Adventure_Begins.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length ;i < len;++i) {
    gdjs.MenuConfigsCode.GDbarraVolumeObjects1[i].setWidth(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) * 3);
}
}}

}


{

gdjs.MenuConfigsCode.GDmenosObjects1.createFrom(runtimeScene.getObjects("menos"));

gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuConfigsCode.mapOfGDgdjs_46MenuConfigsCode_46GDmenosObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x6f8a9c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuConfigsCode.GDmaisObjects1.createFrom(runtimeScene.getObjects("mais"));

gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuConfigsCode.mapOfGDgdjs_46MenuConfigsCode_46GDmaisObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x6907fc(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x6ee4ac(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuConfigsCode.condition0IsTrue_0.val = false;
{
gdjs.MenuConfigsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.MenuConfigsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuConfigsCode.eventsList0x6ecabc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuConfigsCode.eventsList0xb3ea0


gdjs.MenuConfigsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuConfigsCode.GDtxtLogoObjects1.length = 0;
gdjs.MenuConfigsCode.GDtxtLogoObjects2.length = 0;
gdjs.MenuConfigsCode.GDmaisObjects1.length = 0;
gdjs.MenuConfigsCode.GDmaisObjects2.length = 0;
gdjs.MenuConfigsCode.GDmenosObjects1.length = 0;
gdjs.MenuConfigsCode.GDmenosObjects2.length = 0;
gdjs.MenuConfigsCode.GDbarraVolumeObjects1.length = 0;
gdjs.MenuConfigsCode.GDbarraVolumeObjects2.length = 0;
gdjs.MenuConfigsCode.GDvolumeAtualObjects1.length = 0;
gdjs.MenuConfigsCode.GDvolumeAtualObjects2.length = 0;

gdjs.MenuConfigsCode.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['MenuConfigsCode'] = gdjs.MenuConfigsCode;
