let button = document.getElementById("btn");

const API_URL = "https://api.spacexdata.com/v3/rockets/{{1}}";

const ChargeRocket = async () => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let stringifiedData = JSON.stringify(data);
            document.querySelector("#posts").innerHTML = stringifiedData;
            localStorage.setItem("posts", stringifiedData);
        });
};

button.addEventListener("click", ChargeRocket);


