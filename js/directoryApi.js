const requestURL = "https://asidermakriver.github.io/wdd230/lesson14/json/listOfCompanies.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const localBusiness = jsonObject["localBusiness"];
    for (let i = 0; i < localBusiness.length; i++) {
      //****************************************************Declare Variables*************
      let sectionHTML = document.createElement("section");
      let articleHTML = document.createElement("article");
      let businessName = document.createElement("h2");
      let figureHTML = document.createElement("figure");
      let imageHTML = document.createElement("img");
      let figcaptionHTML = document.createElement("figcaption");
      let aHTML = document.createElement("a");
      let textToAdd = document.createTextNode("Visit");
      let textToAdd2 = document.createTextNode("Logo");
      //****************************************************Assign Variables***************
      businessName.textContent = localBusiness[i].name;
      imageHTML.setAttribute("src", `images/${localBusiness[i].photo}`);
      aHTML.setAttribute("href", localBusiness[i].website);
      aHTML.setAttribute("target", `_blank`);
      figcaptionHTML.setAttribute("alt", `logo`);
      // *******************************************Push Variables Into the HTML Code******
      sectionHTML.appendChild(articleHTML);
      articleHTML.appendChild(businessName);
      sectionHTML.appendChild(figureHTML);
      figureHTML.appendChild(imageHTML);
      figureHTML.appendChild(figcaptionHTML).appendChild(textToAdd2);
      sectionHTML.appendChild(aHTML).appendChild(textToAdd);
      document.querySelector("div.homeInfo").appendChild(sectionHTML).classList.add("homeInfoSection");
    }
  });
