//-------------------------------fetching--------------------------------------------

    async function main(){
    let input=document.getElementById("search").value;
    let data=await getData(input)
    append(data)
    }
    
    
    async function getData(input){
        let url=`https://www.omdbapi.com/?apikey=3abc10&s=${input}`;
        let res=await fetch(url);
        let data=await res.json();
        return data.Search;
    }
    
    
    function append(data){
       document.getElementById("appendSearch").innerHTML="";
        if(!data){
            return;
        }
        data.forEach(function(el){
            let div=document.createElement("div");
            div.style.cursor="pointer";
            div.addEventListener("click",function(){
                details(el);
            });
            let img=document.createElement("img");
            img.src=el.Poster;
            let title=document.createElement("p");
            title.setAttribute("id","title")
            title.innerText=el.Title;
            div.append(img,title);
            document.getElementById("appendSearch").append(div);
    
        })
    }
    // --------------------------debounce--------------------------------
    let id;
    
        function debounce(func,delay){
            if(id){
                clearTimeout(id);
            }
            id=setTimeout(function(){
                func()
            }, delay);
        }

//------------------------------------------------------------------








//---------------------------------send to display----------------------------

function details(el){
 detail.push(el);
 localStorage.setItem("Details",JSON.stringify(detail));
 window.location.reload();
}
//-----------------------------------------------------------------






    //----------------------------slide show----------------------

var myImage = document.getElementById("mainImage");
var imageArray = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5201/675201-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9947/1279947-h-d5d3ff34dad1",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4728/674728-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4966/674966-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5108/675108-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4469/674469-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4600/674600-h",
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6715/1106715-h-7b88aaf59197"];

var imageIndex = 0;

function changeImage() {
  myImage.src=(imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,2500);

//-------------------------------------------------------



//-------------------------display details-----------------------------


let detail=JSON.parse(localStorage.getItem("Details")) || [];

display(detail)
function display(data){
    data.forEach(function(el){

        let container=document.querySelector("#displayDetails")
        container.innerHTML=null;

      let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.Poster;

      let div2=document.createElement("div");
        div2.setAttribute("id","rigthDiv")

        let name=document.createElement("h1");
        name.innerText=`Title: ${el.Title}`;

        let type=document.createElement("h2");
        type.innerText=`Type: ${el.Type}`;

        let year=document.createElement("h2");
        year.innerText=`Year:  ${el.Year}`;

        let imdbID=document.createElement("h2");
        imdbID.innerText=`imdbID: ${el.imdbID}`;
        
        div.append(img,div2);
        div2.append(name,type,year,imdbID,)
        container.append(div);
    })


}