window.addEventListener("load", function()
{
    var header = document.querySelector("header");
    header.setAttribute("class", "container-fluid bg-dark position-fixed");
    //header.setAttribute("class", "container-fluid");

    let logo = document.querySelector("#logo"); //Fetch id logo with query selector
    let img = document.createElement("img"); //Making element img
    img.setAttribute("alt", "Ovo je alt atribut iz javascripta"); //Setting attribute alt
    img.setAttribute("src", "assets/img/krigla.png"); //Setting attribute src
    img.setAttribute("width", "60"); //Setting attribute width
    img.setAttribute("id", "logo-src");

    //DEFAULTNA VREDNOST JE 40 sirine SLIKE

    logo.appendChild(img); //Adding element "img" to variable logo(#logo);

    document.addEventListener("scroll", function()
    {
        //console.log(window.scrollY);
        if(window.scrollY == 0)
        {
            img.setAttribute("width", "60");
            header.style.fontSize = "32px";
            header.style.height = "90px";
        }
        else if(window.scrollY > 0)
        {
            img.setAttribute("width", "40");
            header.style.fontSize = "24px";
            header.style.height = "63px";
        }
    })
    var navList = document.getElementById("nav-list");
    var nav =
    [
        {
            putanja:"#home",
            ime:"Home"
        },
        {
            putanja:"#about",
            ime:"About"
        },
        {
            putanja:"#beer-choice",
            ime:"Shop"
        },
        {
            putanja:"#gallery",
            ime:"Gallery"
        },
        {
            putanja:"#contact",
            ime:"Contact"
        }
    ]

    for(let element of nav)
    {
        if(element.ime == "Home")
        {
            navList.innerHTML += `<li class="nav-items pl-1 pr-1"><a href="${element.putanja}" class="nav-link text-uppercase d-inline-block mt-2">${element.ime}</a></li>`
        }
        else
        {
            navList.innerHTML += `<li class="nav-items pl-1 pr-1"><a href="${element.putanja}" class="nav-link text-uppercase d-inline-block mt-2">${element.ime}</a></li>`
        }
    }

    
    
    // querySelector ne detektuje klik i kad je stavljena klasa i kad je stavljen tag.
    // querySelector wouldn't detect click, even if class or tag were added.

    
    let liTag = document.getElementsByTagName("li"); 
    let aTag = document.getElementsByTagName("a");
    liTag[0].classList.add("border-bot")
    aTag[0].classList.add("active");

    let activeLi = liTag[0]; // Li tag
    let activeA = aTag[0]; //A tag
    
    //console.log(liTag[0]);
    
    for(let i = 0; i < liTag.length; i++)
    {
        let li = liTag[i];
        let a = aTag[i]; //Obrati paznju da li ce ovo a da se prenese na druge
        
        liTag[i].addEventListener("click", function()
        {
            //console.log(li.textContent);
            if (activeLi) activeLi.classList.remove("border-bot");
            li.classList.add("border-bot");
            activeLi = li;

            if (activeA) activeA.classList.remove("active")
            a.classList.add("active");
            activeA = a;
        })
    }

    let val = document.getElementById("value");
    let p_tag_value = document.getElementById("p-tag-value");
    let vrednostBrojacaPive = val.value;
    let increment = document.getElementById("increment");
    let decrement = document.getElementById("decrement");

    increment.addEventListener("click", function()
    {
        p_tag_value.innerHTML = ++vrednostBrojacaPive;
        console.log("klik plus");
    });
    decrement.addEventListener("click", function()
    {
        if(vrednostBrojacaPive <= 0)
        {
            vrednostBrojacaPive = 0;
        }
        else
        {
            p_tag_value.innerHTML = --vrednostBrojacaPive;
        }
        console.log("klik mins");
    });






    function returnDescription(el)
    {
        if(el.description1 == undefined)
        {
            return `<div class="col-lg-6">
            <h2 class="mb-3 border-bot">${el.title}</h2> <!-- H2 TAG -->
            <p class="text-left w-75 p-font-size">${el.description}</p>`;
        }
        else
        {
            return `<div class="col-lg-6">
                        <h2 class="mb-3 border-bot">${el.title}</h2> <!-- H2 TAG -->
                        <p class="text-left w-75 p-font-size">${el.description}</p>
                        <p class="text-left w-75 p-font-size">${el.description1}</p>
                    </div>`;
        }
    }

    var titleDescriptionID = document.getElementById("title-description");
    var titleDescription = 
    [
        {
            title: "What is BeerShop?",
            description: "Beershop is a web application for ordering beers. All you need is to select your beer and to cart. After that fill the form and in 1 hour you will get beers. If you have a problem, send us an e-mail or contact us on our Instagram page."
        },
        {
            title: "What we offer?",
            description: "We offer every kind of beer. Beer in a glass bottle, draft beer, craft beer, wheat beer. Also, we offer special beer like chocolate beer, honey beer, and strawberry beer",
            description1: "We have beer from every country. The most popular beer is BIP, from Belgrade, Serbia."
        }
    ]

    for(let element of titleDescription)
    {
        console.log(element.title)
        if(element.description1 == undefined)
        {
            titleDescriptionID.innerHTML += returnDescription(element);               
        }
        else
        {
            titleDescriptionID.innerHTML += returnDescription(element);
        }
    }
    
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "parallax-h3");
    h3.setAttribute("class", "text-white text-uppercase text-center h1 font-airside position-absolute");
    h3.innerText = "Explore our shop";
    document.getElementById("parallax").appendChild(h3);


    var niz = new Array(3);
    niz[0] = "Staklenac";
    niz[1] = "Toceni";
    niz[2] = "Psenicno";
    console.log(niz);

    var ispis = "";
    var beerChoice = document.getElementById("beer-choice1"); //Overflow hidden omogucava mi da napravim granice na divu
    for(let i = 0; i < niz.length; i++)
    {
        if((i == 0) || (i == 2))
        {
            ispis += `<div class="col-4 overflow-hidden">
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid"/>
                    </div>`;
        }
        else
        {
            ispis += `<div class="col-4 border-left border-right overflow-hidden">
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid"/>
                    </div>`;
        }
    }
    beerChoice.innerHTML += ispis;
    // console.log(ispis);
    // console.log(beerChoice);

    var search = document.getElementById("search");
    search.addEventListener("input", () => 
    {
        let vrednost = search.value.toLowerCase(); //Ovako radi
        vrednost.toLowerCase(); //Ovako kad imam ne radi
        // console.log(vrednost);
    });


    var quotesArr = ["Pivo treba piti, svaki dan.", "Pivo je nije alkohol.", "Ko pije pivo, unece vitamin D.", "Od svih piva, BIP je najbolje.", "Opasno se drogiram, al to nije vazno", "Droga je najboja osobina.", "Citat 1", "Citat 2", "Citat 3", "Citar 4"];
    var authorQuoteArr = ["Albert Ajnstajn", "Nikola Tesla", "Aleksandar Vucic", "Neznani junak", "Pera Peric", "Mika Mikic", "Zika Zikic", "Seka Sekic", "Paja Patak", "Miki Maus"];
    var quotes = document.getElementById("quotes");
    let randomNum = Math.floor(Math.random() * quotesArr.length);
    quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    setInterval(getQuote, 5000);

    function getQuote()
    {
        randomNum = Math.floor(Math.random() * quotesArr.length);
        console.log(randomNum);
        quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    }
})