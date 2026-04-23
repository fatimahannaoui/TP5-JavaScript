let a=parseFloat(prompt("Entrer le premier nombre"));
let b=parseFloat(prompt("Entrer le deuxième nombre"));
    let somme=a+b;
    let difference=a-b;
    let produit=a*b;
    if(b!==0){
        let quotient=a/b;
        alert("Somme:"+somme);
        alert("Différencee:"+difference);
        alert("Produit:"+produit);
        alert("Quotient:"+quotient);
       
    }else{
        console.log("Ereur:division par zéro impossible");
    }

