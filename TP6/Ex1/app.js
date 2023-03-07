
var scroller = document.getElementById("scroller");


let dataLoading = false;
var pageNumber = 0;

fetchAPI(pageNumber);

function fetchAPI(pageNumber) {
    dataLoading = true;
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=20`)
    .then((res) => {
        res.json().then((dataInfors) => {
            scroller.innerHTML += `
                    <div class="border-2 rounded-lg px-4 py-1 bg-[#f1f1f1] mb-1">
                        <p>${pageNumber}</p>
                    </div>
                `
            // alert(pageNumber);
            let j = 1;
            dataInfors.data.forEach(element => {
                scroller.innerHTML += `
                    <div class="border-2 rounded-lg px-4 py-1 bg-[#f1f1f1] mb-1">
                        <p>✈️ : ${element.airline[0].name} - ${element.airline[0].country}</p>
                        <p>😊 : ${element.name} - ${pageNumber}.${j}</p>
                    </div>
                `
                j++;
            });
            
            dataLoading = false;
        })
        
    })
    .catch((err) => {
        console.log(err);
    })
}

scroller.addEventListener("scroll", (event) => {
    const { scrollTop, clientHeight, scrollHeight } = scroller;
    if ((clientHeight + scrollTop) >= scrollHeight * 0.95) {
      if (!dataLoading) {
        pageNumber += 1;
        fetchAPI(pageNumber);
      }
    }
})



