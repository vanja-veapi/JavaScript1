$(document).ready(function()
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

    var beers =
    [
        {
            id: "pivo1",
            beerName:"Argus",
            typeBeer:"Bottle",
            price: 45,
            img:
            {
                src:"assets/img/store/argus.jpg",
                alt:"Argus beer"
            }
        },
        {
            id: "pivo2",
            beerName:"Bip",
            typeBeer:"Bottle",
            price: 70,
            img:
            {
                src:"assets/img/store/bip.jpg",
                alt:"BIP beer"
            }
        },
        {
            id: "pivo3",
            beerName:"Dilemma - IPA",
            typeBeer:"Craft",
            price: 250,
            img:
            {
                src:"assets/img/store/dilemma-ipa.jpg",
                alt:"Dilemma - IPA"
            }
        },
        {
            id: "pivo4",
            beerName:"Dilemma - ALE",
            typeBeer:"Craft",
            price: 250,
            img:
            {
                src:"assets/img/store/dilemma-spring-ale.jpg",
                alt:"Dilemma spring ALE"
            }
        },
        {
            id: "pivo5",
            beerName:"Dogma - Albino",
            typeBeer:"Craft",
            price: 290,
            img:
            {
                src:"assets/img/store/dogma-albino.jpg",
                alt:"Dogma albino"
            }
        },
        {
            id: "pivo6",
            beerName:"Dogma - Hoptopod",
            typeBeer:"Craft",
            price: 290,
            img:
            {
                src:"assets/img/store/dogma-hoptopod.jpg",
                alt:"Dogma hoptopod"
            }
        },
        {
            id: "pivo7",
            beerName:"Dogma - Svetionik",
            typeBeer:"Craft",
            price: 290,
            img:
            {
                src:"assets/img/store/dogma-svetionik.jpg",
                alt:"Dogma svetionik"
            }
        },
        {
            id: "pivo8",
            beerName:"Dvorog - Zduhač",
            typeBeer:"Craft",
            price: 300,
            img:
            {
                src:"assets/img/store/dvorog-zduhac.jpg",
                alt:"Dvorog zdhuac"
            }
        },
        {
            id: "pivo9",
            beerName:"Heineken",
            typeBeer:"Bottle",
            price: 90,
            img:
            {
                src:"assets/img/store/heineken.jpg",
                alt:"Heineken"
            }
        },
        {
            id: "pivo10",
            beerName:"Jelen",
            typeBeer:"Bottle",
            price: 55,
            img:
            {
                src:"assets/img/store/jelen.jpg",
                alt:"Jelen"
            }
        },
        {
            id: "pivo11",
            beerName:"Kabinet - Moon",
            typeBeer:"Craft",
            price: 310,
            img:
            {
                src:"assets/img/store/kabinet-to-the-moon.jpg",
                alt:"Kabinet to the moon"
            }
        },
        {
            id: "pivo12",
            beerName:"Lav",
            typeBeer:"Bottle",
            price: 55,
            img:
            {
                src:"assets/img/store/lav.jpg",
                alt:"Lav"
            }
        },
        {
            id: "pivo13",
            beerName:"Lowenbrau",
            typeBeer:"Bottle",
            price: 65,
            img:
            {
                src:"assets/img/store/lowenbrau.jpg",
                alt:"Lowenbrau"
            }
        },
        {
            id: "pivo14",
            beerName:"Niksic",
            typeBeer:"Bottle",
            price: 55,
            img:
            {
                src:"assets/img/store/niksic.jpg",
                alt:"Niksic"
            }
        },
        {
            id: "pivo15",
            beerName:"Paulaner",
            typeBeer:"Wheat",
            price: 110,
            img:
            {
                src:"assets/img/store/paulaner-psenicno.jpg",
                alt:"Paulaner - Wheat beer"
            }
        },
        
    ]
    
    
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
        let a = aTag[i];
        
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


    //Adding slider with jQuery
    slideShow();



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
    niz[0] = "Bottle";
    niz[1] = "Craft";
    niz[2] = "Wheat";
    console.log(niz);

    var ispis = "";
    var beerChoice = document.getElementById("beer-choice1"); //Overflow hidden omogucava mi da napravim granice na divu
    for(let i = 0; i < niz.length; i++)
    {
        if((i == 0) || (i == 2))
        {
            ispis += `<div id="hover${i}" class="col-4 overflow-hidden cursor">
                        <p class="text-center p-translate font-fjalla h1">${niz[i]}</p>
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid hover"/>
                    </div>`;
        }
        else
        {
            ispis += `<div id="hover${i}" class="col-4 border-left border-right overflow-hidden cursor">
                        <p class="text-center p-translate font-fjalla h1">${niz[i]}</p>
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid hover"/>
                    </div>`;
        }
    }
    beerChoice.innerHTML += ispis;
    // console.log(ispis);
    // console.log(beerChoice);

    //Translate Animation
    var hover = document.getElementsByClassName("hover");
    var pTranslate = document.getElementsByClassName("p-translate");

    for(let i = 0; i < hover.length; i++)
    {
        //Sa parent elementom pristupamom elemntu iznad u odnosu na onaj koji smo hteli da dohvatimo.font-fjalla
        //U ovom slucaju se koristi da kada se desi mouseover, da se automatski ne des mouseout, jer inicijalno kada bi se okinuo mouseover kako se pomeri slika na dole tako se okine mouseout, sa parentElement to sprecavamo.
        let container = hover[i].parentElement;

        pTranslate[i].style.transform = "translateY(-100px)";
        container.addEventListener("mouseover", function()
        {
            // var hoverID = document.getElementById(`hover${i}`);
            // hoverID.innerHTML = `<h1>PROBA</h1>`
            // console.log(hoverID);

            //Pristupam velicini diva pomocu clientHeight i delim sa dva da bih tag pozicionirao na sreidnu.
            const positionY = container.clientHeight / 2;
            pTranslate[i].style.transform = `translateY(${positionY}px)`;
            hover[i].style.transform = "translateY(100%)";
        })
        container.addEventListener("mouseout", function()
        {
            //hover[i].classList.remove("text");
            pTranslate[i].style.transform = "translateY(-100px)";
            hover[i].style.transform = "translateY(0px)";
        })
        container.addEventListener("click", function()
        {
            console.log(hover[i].alt);
            let rezultat = beers.filter(element => element.typeBeer === hover[i].alt)
            console.log(rezultat);
        });
    }

    var quotesArr = ["Pivo treba piti, svaki dan.", "Pivo je nije alkohol.", "Ko pije pivo, unece vitamin D.", "Od svih piva, BIP je najbolje.", "Opasno se drogiram, al to nije vazno", "Droga je najboja osobina.", "Citat 1", "Citat 2", "Citat 3", "Citar 4"];
    var authorQuoteArr = ["Albert Ajnstajn", "Nikola Tesla", "Aleksandar Vucic", "Neznani junak", "Pera Peric", "Mika Mikic", "Zika Zikic", "Seka Sekic", "Paja Patak", "Miki Maus"];
    var quotes = document.getElementById("quotes");
    let randomNum = Math.floor(Math.random() * quotesArr.length);
    quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    setInterval(getQuote, 5000);

    function getQuote()
    {
        randomNum = Math.floor(Math.random() * quotesArr.length);
        // console.log(randomNum);
        quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    }

    //Adding store

   
    var store = document.getElementById("store");

    ispis = "";       
    for(let beer of beers)
    {
        ispis += `<div id=${beer.id} class="col-md-3 border roundend mt-4 pb-2 shadow bg-white font-fjalla ml-1 d-block">
                    <img src="${beer.img.src}" alt="${beer.img.alt}" class="img-fluid border-bottom pt-2 mb-2 col-12"/>
                    <table class="table-responsive">
                        <tr><td><p class="text-primary">Name:</p></td> <td><p class="ml-1">${beer.beerName}</p></td></tr>
                        <tr><td><p class="text-primary">Type:</p></td> <td><p>${beer.typeBeer}</p></td></tr>
                        <tr><td><p class="text-primary">Price:</p></td><td><p> ${beer.price} RSD</p></td></tr>
                    </table>
                    <input type="button" class="btn btn-warning add-to-cart w-100 text-white rounded display-1" value="Add to cart"/>
                </div>`;
    }
    store.innerHTML += ispis;


    

    // for(let i = 0; i < 3; i++)
    // {
    //     var filterClickBeerID = document.querySelectorAll(`#hover${i}`);
    //     filterClickBeerID[i].addEventListener("click", function()
    //     {
    //         console.log(filterClickBeerID);
    //         //var rezultat1 = beers.filter(beer =>
    //             //     {
    //             //         let beerId = document.getElementById(beer.id);
    //             //         if(beer.typeBeer == "Bottle")
    //             //         {
    //             //             beerId.classList.add("d-block");
    //             //         }
    //             //         else
    //             //         {
    //             //             beerId.classList.remove("d-block");
    //             //             beerId.classList.add("d-none");
    //             //         }
    //     });
    // }

    // clickId0.addEventListener("click", function()
    // {
    //     var rezultat1 = beers.filter(beer =>
    //     {
    //         let beerId = document.getElementById(beer.id);
    //         if(beer.typeBeer == "Bottle")
    //         {
    //             beerId.classList.add("d-block");
    //         }
    //         else
    //         {
    //             beerId.classList.remove("d-block");
    //             beerId.classList.add("d-none");
    //         }

    //     });
                
                
    //     // rezultat1.forEach((beer) => 
    //     // {
    //     //     let beerId = document.getElementById(beer.id);
    //     //     if(rezultat1 == "Bottle")
    //     //     {
    //     //         beerId.classList.remove("d-block");
    //     //         beerId.classList.add("d-none");
    //     //     }
    //     //     else
    //     //     {
    //     //         beerId.classList.add("d-block");
    //     //     }
    //     // })
    //     console.log(rezultat1);
    // })



    var search = document.getElementById("search");
    search.addEventListener("input", () => 
    {
        let vrednost = search.value.toLowerCase(); //Ovako radi
        //vrednost.toLowerCase(); //Ovako kad imam ne radi
        console.log(vrednost);
        let proba1 = beers.filter((beer) => {
            let beerId = document.getElementById(beer.id);
            if(beer.beerName.toLowerCase().indexOf(vrednost) > -1)
            {
                beerId.classList.add("d-block");
            }
            else
            {
                beerId.classList.remove("d-block");
                beerId.classList.add("d-none");
            }
        });
       

        console.log(proba1); 
    });

    //Gallery

    //Forms - Regular expression
    var btn = document.getElementById("btn");

    btn.addEventListener("click", checkForm);
    
});

function slideShow()
{
    var trenutni = $("#slider .d-block");
    trenutni.animate({transform: "translateX(200px)"}, 1000);
    var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');
    trenutni.removeClass('d-block');
    trenutni.addClass('d-none');
    sledeci.addClass('d-block');
    setTimeout(slideShow, 5000);
}

function checkForm()
{
    let counter = 0; //Brojac koji ce ako bude sve validno da vrati broj 3

    let errName = document.getElementById("error-name");
    let name = document.getElementById("name").value;

    let regExpNameSurname = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,12}$/;
    let valid = true;
    if(name === "")
    {
        valid = false;
        errName.innerHTML = '<p class="error">The field Name is empty.</p>';
    }
    else
    {
        if(!regExpNameSurname.test(name))
        {
            valid = false;
            errName.innerHTML = '<p class="error">Name is not in valid format. Name must start with first capital letter and to have minimum 3 characters.</p>';
        }
        else
        {
            counter++;
            valid = true;
            errName.innerHTML = "";
        }
    }

    let errSurname = document.getElementById("error-surname");
    let surname = document.getElementById("surname").value;
    let regExpSurname = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,12}$/;

    if(surname == "")
    {
        valid = false;
        errSurname.innerHTML = `<p class="error">Field surname is empty</p>`;
    }
    else
    {
        if(!regExpNameSurname.test(name))
        {
            valid = false;
            errSurname.innerHTML = `<p class="error">Surname is not in valid format.</p>`;
        }
        else
        {
            counter++;
            valid = true;
            errSurname = "";
        }
    }
    console.log(surname);

    let errEmail = document.getElementById("error-email");
    let email = document.getElementById("email").value;

    let regExpMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email === "")
    {
        valid = false;
        errEmail.innerHTML = "<p class='error'>Greska</p>";
    }
    else
    {
        if(!regExpMail.test(email))
        {
            valid = false;
            errEmail.innerHTML = "<p class='error'>Lose napisan mail</p>";
        }
        else
        {
            counter++;
            valid = true;
            errEmail.innerHTML = "";
        }
    }

    if(counter === 3)
    {
        console.log("jesteeee");
    }
    else
    {
        console.log("Nije bajo");
    }
}