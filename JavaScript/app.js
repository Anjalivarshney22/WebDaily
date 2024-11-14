// let p=new Promise((resolve , reject)=>{
    function sum(a,b){
        // let a=10;
        // let b=60;
        return new Promise((resolve , object)=>{
            let person = {
                
            }
        // if(a+b >50){
        //     resolve(a+b)
        // }else{
        //     reject("sum of a & b is less than 50");
        // }
        if(person.name == "abcde"){
            resolve(person)
        }else{
            reject("object is not matched")
        }
    })
    }
    //consumer
    // p.then((res)=>{
    //         console.log(res)
    // }).catch((err)=>{
    //         console.log(err)
    // })
    
    // console.log(sum());
    // sum(10,15).then((res)=>{
    //         console.log(res)
    //         return res+20;
    // }).then(()=>{
    
    // }).catch((err)=>{
    //         console.log(err)
    // })
    
    
    sum().then((res)=>{
        console.log(res)
        res.education= "B.Tech"
        return res;
    }).then((newRes)=>{
        console.log(newRes)
    }).catch((err)=>{
        console.log(err)
    })