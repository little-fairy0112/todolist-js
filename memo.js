//綁定dom
var sendData = document.querySelector('.button');
var Data = JSON.parse(localStorage.getItem('listData')) || [];//讀取原在listData內的資料到Data，Data是資料的匯總處，並將其由string轉為array格式，若沒有舊資料則為空[]
var list = document.querySelector('.todolist');

//綁定事件
sendData.addEventListener('click',addToDoList);
list.addEventListener('click',deleteTodolist);  //如果點擊list a就會觸發deleteTodolist()
updateList(Data);

//存入使用者輸入的字串
function addToDoList(e){
    e.preventDefault();
    var str =  document.querySelector('.text').value;  //讀取使用者輸入的內容到txt
    //把新的資料放進去todolist
    var todolist = {
        content:str
    };
    //將todolist的新資料放入Data[]內
    Data.push(todolist);
    updateList(Data); 
    localStorage.setItem('listData',JSON.stringify(Data)); //將最新版的Data資料轉為string狀態，並存入listData項目內
}

//更新網頁上list內容
function updateList(item){    //將傳入的資料命名為item
    var str = '';
    var length = item.length;
    for(i=0; i < length; i++){
       str +=  '<li style="list-style:none; ">' + item[i].content + '<a href ="#" style="padding: 70px; text-decoration:none; " data-num =' + i + '>V 已完成</a> </li>';
    }
    list.innerHTML = str;
}

//刪除內容
function deleteTodolist(e){
    e.preventDefault();
    if(e.target.nodeName != 'A'){return};  //只有點擊nodeName ＝ a標籤處 才會觸發
    var num = e.target.dataset.num;
    Data.splice(num,1);
    localStorage.setItem('listData',JSON.stringify(Data));
    updateList(Data);
}
