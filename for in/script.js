let myresume={
    name:"nagaraj",
    age:"24",
    gender:"male",
    hobbies: ["cricket","volleyball"],
    address: {
       city:"udumalpet",
       district:"tiruppur",
       state:"tamilnadu",
       country:"india"
    },
    skills: ["html" ,"css"," javascript"],
    education :{
        college:"bharathiyar university",
    degree:"bachelor of degree",
    year:"2020"
  }

}

for(let key in myresume){
    console.log(key,myresume[key])
}