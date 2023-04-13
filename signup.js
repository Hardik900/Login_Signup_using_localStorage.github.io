

document.getElementById("num").style.display = "none";
    document.getElementById("em").style.display = "none";
    function hello(){
        var f_name,L_name,number,email,password;

        f_name = document.getElementById("f_name").value,
        L_name = document.getElementById("L_name").value,
        number = document.getElementById("number").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value

        if(f_name!== '' && L_name!=='' &&number !== '' && email !=='' && password !== ''){
            // document.getElementById("f_name").style.borderColor = "black";
            // document.getElementById("L_name").style.borderColor = "black";
            Sign();
        }
        else{
            alert("Please Fill all the Fields")
        }
    }
    function Sign() {
        let f_name,L_name,number,email,password;

        f_name = document.getElementById("f_name").value,
        L_name = document.getElementById("L_name").value,
        number = document.getElementById("number").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value

        let arry = [];
        arry = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        // console.log(arry);

        var arr_email = [];
        var arr_pwd = [];

        for(i=0; i<arry.length; i++){
            var store_mail = arry[i].email;
            arr_email.push(store_mail);

            var store_pwd = arry[i].password;
            arr_pwd.push(store_pwd);
        }
        // console.log(arr_email,"email");
        // console.log(arr_pwd,"pwd");

        let filter_mail = "";
        filter_mail = arr_email.filter((aa)=>{
            if(email == aa){
                return 1;
            }
        });
        let filter_pwd = "";
        filter_pwd = arr_pwd.filter((bb)=>{
            if(password == bb){
                return 1;
            }
        });

        let check_email = email.includes("@");

        if(number.length > 10 || number.length < 10 ){
            document.getElementById("num").style.display = "block";
            document.getElementById("number").style.borderColor = "red";
            document.getElementById("num").innerHTML = "Please Enter a valid number";
        }
        
        else if(check_email == false ){
            document.getElementById("em").style.display = "block";
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("em").innerHTML = "Please Enter a valid Mail";
        }

        else if(email === filter_mail[0] || password === filter_pwd[0]){
            document.getElementById("sam").innerHTML = 'you have been sign-up earlier with this credential';
        }

        else{
            arry.push({
                "f_name":f_name,"L_name":L_name,"number":number,"email":email,"password":password
            })
            localStorage.setItem("user",JSON.stringify(arry));
            document.getElementById("sam").innerHTML = 'Sign-up Done';            
        }
    }
