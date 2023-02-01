const btn_req = document.querySelector(".get_request");
const my_storage = window.localStorage;
const resultNode = document.querySelector('.j-result');
let useRequest = () => {
    let num_page = document.getElementById("num_page").value;
    let limit = document.getElementById("limit").value;
    console.log(limit);
    console.log(num_page);
    if(typeof (limit) !== "number"){
    if(num_page<=10 && limit<=10){
     fetch( `https://picsum.photos/v2/list?page=${num_page}&limit=${limit}`)
    .then((response) =>{
        return response.json();
    })
     .then((json) => { return json; })
     .catch(() => { console.log('error') });
    }
    else if(num_page>10){
        alert("Номер страницы вне диапазона от 1 до 10");
    }
    else if(limit>10){
        alert("Лимит вне диапазона от 1 до 10");
    }
    else if (limit>10 && num_page>10 ) {
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
    }
    else{
        alert("Вы ввели не число");
    }
}}
    function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img src=${item.download_url} class="card-image" />
        <p>${item.author}</p>
      </div>`;
        cards = cards + cardBlock;
    });

    // console.log('end cards', cards);

    resultNode.innerHTML = cards;
}
btn_req.addEventListener('click', async ()=>{
    let requestResult = await useRequest();
    console.log("requestResult",requestResult)
})