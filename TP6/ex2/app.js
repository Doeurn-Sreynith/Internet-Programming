
var scroller = document.getElementById("scroller");

var passengers = localStorage.getItem("passengers") != null ? JSON.parse(localStorage.getItem("passengers")) : [];

let dataLoading = false;
var pageNumber = 0;

// input as array
function showData(dataList) {
  // let j = 1;
  dataList.forEach(element => {
    scroller.innerHTML += `
            <div class="border-2 rounded-lg px-4 py-1 bg-[#f1f1f1] mb-1">
                <p>✈️ : ${element.airline[0].name} - ${element.airline[0].country}</p>
                <p>😊 : ${element.name} - ${pageNumber}</p>
            </div>
        `

  });
}

fetchData(pageNumber);

function fetchDataFromLocal(pageNumber) {
  showData(passengers[pageNumber]);
}

function fetchData(pageNum) {
  pageNum >= passengers.length ? fetchAPI(pageNum) : fetchDataFromLocal(pageNum);
  pageNumber++;
}

function fetchAPI(pageNumber) {
  dataLoading = true;
  fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=20`)
    .then((res) => {
      res.json().then((dataInfors) => {
        
        showData(dataInfors.data);
        passengers.push(dataInfors.data);
        localStorage.setItem("passengers", JSON.stringify(passengers));
        
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
      fetchData(pageNumber);
    }
  }
})



