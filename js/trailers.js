(function () {
    document.getElementById("search_button").addEventListener("click", test);
    document.getElementsByTagName("body")[0].onkeydown = checkKey;

    function checkKey(e) {

        if (e.keyCode === 13) {
            test();
        }

    }

    function test() {

        let input = document.getElementById("search_input").value;

        let link = "https://www.youtube.com/embed/";

        let forFetch = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + input + "trailer official" + "&type=video&key=AIzaSyDdlhYgPFwejy_bGJcfLEL68iFdr83o1vA";
        fetch(forFetch)
            .then(function (response) {

                return response.json();

            })
            .then(function (myJson) {
                return myJson.items;
            })
            .then(function (items) {
                let div = document.getElementsByClassName("video")[0];

                if (items.length === 0) {

                    div.innerHTML = "No trailer with that name."
                } else {
                    let iframe;
                    div.innerHTML = "";
                    for (let i = 0; i < 5; i++) {
                        iframe = document.createElement("iframe");
                        iframe.setAttribute("src", link + items[i].id.videoId);
                        div.append(iframe);


                    }
                }


            })
            .catch(function () {

                let div = document.getElementsByClassName("video")[0];
                div.innerHTML = "Error with database";
            })

    };
    test();

})();