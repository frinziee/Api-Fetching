let rootele=document.getElementById("root")
let apiurl=fetch("https://api.github.com/users")    //!fetching the api link

let data=apiurl.then((res)=>{
    return(res.json())      //!converting json to js object
})

data.then((githubuser)=>{
    // console.log(githubuser);

    githubuser.map((ele)=>{
        // console.log(ele);
        let {login,avatar_url}=ele
        console.log(`user name: ${login} and img ${avatar_url}`);
        rootele.innerHTML+=`
        <div class=card>
       
        <div><img src=${avatar_url}></div>
         <div class=title> ${login}</div> 
        </div>`
    })
})


