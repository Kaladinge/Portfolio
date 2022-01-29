import { projectUrl } from "./data/querys.js";
import { displayMessage } from "./functions/displayMessage.js";


(async function getProjects() {

  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";

  try{
    const response = await fetch(projectUrl);
    const result = await response.json();
    
    const projectArray = result.result;
    
    projectArray.forEach(function(item) {
      
      const position = item.position;
      const logoPosition = item.logo_position;
      const logoImageUrl = item.logoImageUrl;
      const link = item.link;
      const title = item.title;
      const excerpt = item.excerpt;
      const categories = item.categories;
    
      
      projectContainer.innerHTML += `<div class="project-box col-12 col-xl-6 border border-secondary p-0 bg-white text-center" style="position: relative; min-height: 170px;">
                                      <a href="${link}" target="_blank" rel="noopener noreferrer">
                                        <img src="${item.imageUrl}" class="w-75 d-none d-md-block ${position === "left" ? "float-end" : ""}" alt="Gamehub project"/>
                                        <div class="w-100 h-100 d-none d-md-block" style="background-color: white; position: absolute; top: 0; left: 0; ${position === "right" ? "clip-path: polygon(70% 100%, 100% 100%, 100% 0%, 50% 0%)" : "clip-path: polygon(0% 100%, 50% 100%, 30% 0%, 0% 0%)"}">
                                          <img src="${logoImageUrl}" class="w-25 position-absolute translate-middle" style="${logoPosition}" />
                                        </div>
                                        <img src="${logoImageUrl}" class="w-50 d-md-none position-absolute translate-middle top-50 p-3"/>
                                        <div class="fadebox w-100 h-100 position-absolute top-0 start-0 d-none d-md-block">
                                          <div class="info text">
                                            <h4>${title}</h4>
                                            <p>${excerpt}</p>
                                            <p class="text-warning">${showCategories(categories)}</p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    `;

    })
  
  } catch(error) {
    displayMessage("project-container", "Were not able to generate project list at this moment", "message-style");
  }
})();

function showCategories(categories) {
  
  let innerText = "";
  categories.forEach(function(item) {
    innerText += item.title + " ";
  })
  return innerText;
}



document.onscroll = function() {
  const projects = document.getElementById("projects");
  const h2 = document.querySelectorAll("h2");
  const navi = document.querySelectorAll(".navbar-nav li");

  /*const newtype = navil.filter(function(oh) {
    if ("same" === "same") {
      console.log("ha");
    }
  })*/

  h2.forEach(function(item, index) {

    if (item.getBoundingClientRect().top >= 0 && item.getBoundingClientRect().top <= 150) {
      
      console.log(item.getBoundingClientRect().top);
      
      navi[0].style.border = "none";
      navi[1].style.border = "none";
      navi[2].style.border = "none";
      navi[3].style.border = "none";
      navi[4].style.border = "none";
      navi[5].style.border = "none";
      navi[index].style.border = "1px solid #eeec00";
      
      console.log(navi[index]);
    } 
  })
};


