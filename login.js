function hello(){
    let mail = document.getElementById("mail").value;
    let pwd = document.getElementById("pwd").value;

    if( ((mail,pwd) != '')){
        log_In();
    }
    else{
        alert("Please Fill the fields")
    }
}
function log_In(){
    let mail = document.getElementById("mail").value;
    let pwd = document.getElementById("pwd").value;
    
    let store = JSON.parse(localStorage.getItem("user"));
    // console.log(store);
    var arr_email = [];
    var arr_pwd = [];

    for(i=0; i<store.length; i++){
        var store_mail = store[i].email;
        arr_email.push(store_mail);

        var store_pwd = store[i].password;
        arr_pwd.push(store_pwd);
    }
    console.log(arr_email,"email");
    console.log(arr_pwd,"pwd");

    let filter_mail = "";
    filter_mail = arr_email.filter((aa)=>{
        if(mail == aa){
            return 1;
        }
    });
    let filter_pwd = "";
    filter_pwd = arr_pwd.filter((bb)=>{
        if(pwd == bb){
            return 1;
        }
    });

    let indexFindmail = "";
    indexFindmail = arr_email.findIndex((cc)=>{
        if(mail == cc){
            return 1;
        }
    });
    // console.log(indexFindmail,"indexFindmail");

    let indexFindpwd = "";
    indexFindpwd = arr_pwd.findIndex((dd)=>{
        if(pwd == dd){
            return 2;
        }
    });
    // console.log(indexFindpwd,"indexFindpwd");

    let qq = indexFindmail;
    let ww = indexFindpwd;

    let check_email = mail.includes("@");
    if(check_email == false ){
        alert("Please Enter a valid mail");
    }

    else if(qq === ww && mail === filter_mail[0] && (pwd === filter_pwd[0])){
        // document.getElementById("sam").innerHTML = `Welcome ${full_Name}`;
        location.replace("open.html")
        let full_Name = store[qq].f_name + " " + store[qq].L_name;
        localStorage.setItem("log",JSON.stringify(full_Name))
    }
    else{
        alert("PLease Fill the correct details")
    }
}