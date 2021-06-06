var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;

}


function errorHandler(error){
    console.log("error occured",error);
    alert("Something is wrong with server, please try again later")
}

function clickEvent(){
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => outputDiv.innerText=json.contents.translated )
    

    .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickEvent)

