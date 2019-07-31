gdjs.CutScene1Code = {};
gdjs.CutScene1Code.GDtxtLogoObjects1= [];
gdjs.CutScene1Code.GDtxtLogoObjects2= [];
gdjs.CutScene1Code.GDtxtTextoObjects1= [];
gdjs.CutScene1Code.GDtxtTextoObjects2= [];
gdjs.CutScene1Code.GDbtnPularObjects1= [];
gdjs.CutScene1Code.GDbtnPularObjects2= [];

gdjs.CutScene1Code.conditionTrue_0 = {val:false};
gdjs.CutScene1Code.condition0IsTrue_0 = {val:false};
gdjs.CutScene1Code.condition1IsTrue_0 = {val:false};
gdjs.CutScene1Code.condition2IsTrue_0 = {val:false};
gdjs.CutScene1Code.conditionTrue_1 = {val:false};
gdjs.CutScene1Code.condition0IsTrue_1 = {val:false};
gdjs.CutScene1Code.condition1IsTrue_1 = {val:false};
gdjs.CutScene1Code.condition2IsTrue_1 = {val:false};


gdjs.CutScene1Code.eventsList0x66e0dc = function(runtimeScene) {

{


gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
gdjs.CutScene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "gama");
}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].returnVariable(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gama");
}}

}


}; //End of gdjs.CutScene1Code.eventsList0x66e0dc
gdjs.CutScene1Code.mapOfGDgdjs_46CutScene1Code_46GDbtnPularObjects1Objects = Hashtable.newFrom({"btnPular": gdjs.CutScene1Code.GDbtnPularObjects1});gdjs.CutScene1Code.mapOfGDgdjs_46CutScene1Code_46GDbtnPularObjects1Objects = Hashtable.newFrom({"btnPular": gdjs.CutScene1Code.GDbtnPularObjects1});gdjs.CutScene1Code.eventsList0x6ea16c = function(runtimeScene) {

{


gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
gdjs.CutScene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].returnVariable(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.CutScene1Code.eventsList0x6ea16c
gdjs.CutScene1Code.eventsList0xb3ea0 = function(runtimeScene) {

{


gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
gdjs.CutScene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].returnVariable(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{



}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getOpacity() <= 255 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setOpacity(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getOpacity() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getOpacity() >= 255 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CutScene1Code.eventsList0x66e0dc(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7351428);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " acaba de sair do ensino médio e está a procura de um emprego...");
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7268204);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setString("Ao procurar uma vaga, " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " descobriu que é preciso se qualificar.");
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7261188);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setString("Sendo assim, " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " se matriculou em um curso no SENAC de Pindamonhangaba.");
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6874988);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " não sabe, mas está prestes a viver a melhor experiência de sua vida...");
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6764564);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDtxtTextoObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setString("Na escola mais legal da cidade ♥.");
}
}{for(var i = 0, len = gdjs.CutScene1Code.GDtxtTextoObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDtxtTextoObjects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.CutScene1Code.GDtxtTextoObjects1.createFrom(runtimeScene.getObjects("txtTexto"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
gdjs.CutScene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutScene1Code.GDtxtTextoObjects1.length;i<l;++i) {
    if ( gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariableNumber(gdjs.CutScene1Code.GDtxtTextoObjects1[i].getVariables().getFromIndex(0)) == 6 ) {
        gdjs.CutScene1Code.condition0IsTrue_0.val = true;
        gdjs.CutScene1Code.GDtxtTextoObjects1[k] = gdjs.CutScene1Code.GDtxtTextoObjects1[i];
        ++k;
    }
}
gdjs.CutScene1Code.GDtxtTextoObjects1.length = k;}if ( gdjs.CutScene1Code.condition0IsTrue_0.val ) {
{
{gdjs.CutScene1Code.conditionTrue_1 = gdjs.CutScene1Code.condition1IsTrue_0;
gdjs.CutScene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6765356);
}
}}
if (gdjs.CutScene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}


{



}


{

gdjs.CutScene1Code.GDbtnPularObjects1.createFrom(runtimeScene.getObjects("btnPular"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
gdjs.CutScene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CutScene1Code.mapOfGDgdjs_46CutScene1Code_46GDbtnPularObjects1Objects, runtimeScene, true, true);
}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDbtnPularObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDbtnPularObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDbtnPularObjects1[i].setColor("255;0;0");
}
}}

}


{

gdjs.CutScene1Code.GDbtnPularObjects1.createFrom(runtimeScene.getObjects("btnPular"));

gdjs.CutScene1Code.condition0IsTrue_0.val = false;
{
gdjs.CutScene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CutScene1Code.mapOfGDgdjs_46CutScene1Code_46GDbtnPularObjects1Objects, runtimeScene, true, false);
}if (gdjs.CutScene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.CutScene1Code.GDbtnPularObjects1 */
{for(var i = 0, len = gdjs.CutScene1Code.GDbtnPularObjects1.length ;i < len;++i) {
    gdjs.CutScene1Code.GDbtnPularObjects1[i].setColor("0;89;255");
}
}
{ //Subevents
gdjs.CutScene1Code.eventsList0x6ea16c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.CutScene1Code.eventsList0xb3ea0


gdjs.CutScene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutScene1Code.GDtxtLogoObjects1.length = 0;
gdjs.CutScene1Code.GDtxtLogoObjects2.length = 0;
gdjs.CutScene1Code.GDtxtTextoObjects1.length = 0;
gdjs.CutScene1Code.GDtxtTextoObjects2.length = 0;
gdjs.CutScene1Code.GDbtnPularObjects1.length = 0;
gdjs.CutScene1Code.GDbtnPularObjects2.length = 0;

gdjs.CutScene1Code.eventsList0xb3ea0(runtimeScene);
return;

}
gdjs['CutScene1Code'] = gdjs.CutScene1Code;
