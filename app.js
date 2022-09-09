const intTxt = document.querySelector("#int-text")
const btnTranslate = document.querySelector("#btn-translate")
const outTxt = document.querySelector("#out-text")

const serverUrl = "https://api.funtranslations.com/translate/minion.json"


{
    function clickHandler() {

        var requestUrl = serverUrl + "?text=" + intTxt.value;

        fetch(requestUrl)
            .then((response) => response.json())
            .then((json) => (outTxt.innerHTML = json.contents.translated))
            .catch(showError);
    }

    function showError(error) {

        console.log("Error occured", error);

        alert("Free Plan has limited number of API calls , please try again after sometime.")
    }
}

btnTranslate.addEventListener("click", clickHandler)