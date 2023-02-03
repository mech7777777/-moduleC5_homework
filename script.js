const btn_req = document.querySelector(".get_request");
const my_storage = window.localStorage;
const resultNode = document.querySelector('.j-result');
let num;

// function displayLocalStorage(num) {
//     let cards = '';
//     while (true) {
//         let i = 0;
//         i++;
//         let author = localStorage.getItem(`download_url${i}`);
//         let download_url = localStorage.getItem(`author${i}`);
//         const cardBlock = `
//       <div class="card">
//         <img src=${download_url} width="400px" height="300px" class="card-image" />
//         <p>${author}</p>
//       </div>`;
//         cards = cards + cardBlock;
//     };
//     resultNode.innerHTML = cards;
// }


let useRequest = (callback) => {
    let num_page = document.getElementById("num_page").value;
    let limit = document.getElementById("limit").value;
    if(typeof (limit) !== "number"){
    if(num_page<=10 &&  limit<=10){
    fetch( `https://picsum.photos/v2/list?page=${num_page}&limit=${limit}`)
         .then((response) =>{
         let result = response.json();
      return result
    })
        .then((data) => {
            if (callback){
                localStorage.clear()
                callback(data);
            }
        //    console.log(data);
        })
     .catch(() => { console.log('error') });
    }
    else if(limit>10 && num_page>10){
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
    }
    else if(num_page>10){
        alert("Номер страницы вне диапазона от 1 до 10");
    }
    else if(limit>10){
        alert("Лимит вне диапазона от 1 до 10");
    }}
}
    function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img src=${item.download_url} width="400px" height="300px" class="card-image" />
        <p>${item.author}</p>
      </div>`;
        cards = cards + cardBlock;
        num++
        localStorage.setItem(`download_url${num}`,item.download_url);
        localStorage.setItem(`author${num}`,item.author)
    });
    resultNode.innerHTML = cards;
}
// console.log(num)
// displayLocalStorage();
btn_req.addEventListener('click', async ()=>{
    num = 0;
    let requestResult = await useRequest(displayResult);
})