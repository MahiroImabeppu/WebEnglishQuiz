let name = "";
let quizPattern = "";

// form要素を取得
let element = document.getElementById("QuizPattern") ;

// form要素内のラジオボタングループ(name="drone")を取得
let radioNodeList = element.drone ;

//問題ページに移動
function testStart() {
    quizPattern = radioNodeList.value ; 
    name = document.getElementById("name").value;
    document.cookie = "user=John";
    if(name != "" && quizPattern != ""){
        location.href = "./EngTestPage.html" +"?name="+name+"?quizPattern="+quizPattern;
    }else{
        alert("please input your name or quiz pattern")
    }
    
}










