let nombreSecret=Math.floor(Math.random()*10)+1;
let tentatives=0;
let proposition;
do{
    proposition=parseInt(prompt("Deveinez un nombre entre 1 et 10:"));
    tentatives++;
    if (proposition<nombreSecret){
        alert("le nombre est plus grand");
    }
    
    else if(proposition>nombreSecret){
        alert("le nombre est plus petit");
    }
    else{
        alert("Bravo vous avez trouvé le nombre ");
    }
}while (proposition!==nombreSecret);
alert("nombre de tentatives:"+tnombreSecret);
alert("Tentatives:"+tentatives);
    
   

