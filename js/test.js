// var année=2017;
//  var futur=3;
//   var calcul=année+futur;
//  document.write(calcul,"<br>"+"<br>",calcul);

//  var nb1,nb2,resultat;
//  nb1=10;
//  nb2=5;
//  resultat=nb1+nb2;
//  console.log(resultat);
// document.write(resultat);

// var resultat2
// resultat2=nb1-nb2
// console.log(resultat2);
// document.write(resultat2);

// var resultat3
// resultat3=nb1*nb2
// console.log(resultat3);
// document.write(resultat3);

// var resultat4
// resultat4=nb1/nb2
// console.log(resultat4);
// document.write(resultat4);

// var resultat5
// resultat4=nb1%nb2
// console.log(resultat5);
// document.write(resultat5);
// var nombreEntier=prompt("entrer un nombre entier","");
// document.write(nombreEntier)
// if (nombreEntier>10){
//     document.write("cedric")
// }
// var prenom;
//  prenom = prompt("entrez une chaine de caractere");
// if (prenom=="cedric"){
//     document.write(prenom);
// }else{
//     document.write("cette valeur n'est pas mon prenom")

// }
// var unChiffre=prompt("Entrz un Chiffre");
// var result=unChiffre%5;
// if(result == 0){
//     document.write("est un multiple");

// } else {
// document.write("sa nest pas un multiple");
// }
// var test;
// test=prompt("");
// document.write=(typeof test);
// var ced = prompt("Boite de dialogue");
// // var cedric = 5;
// var cedric2 = parseInt(ced);
// if (cedric2 === 5){
// document.write(cedric2);
// }



// var cedric
// parseInt(cedric)
// if(Number == 5){
 
//     document.write(ced)
// }
// var nb1=prompt("Nombre");
// parseFloat(nb1)
// var nb2=nb1%13;
// if(nb2==0){
//  document.write("ce nombre est un multiple");
// }
// else {
//  document.write("ce nombre n'est pas un multiple de 13" );

// }


// var saisie=prompt("");
// var resultat=parseFloat(saisie);
// if(isNaN(resultat)){
//     document.write(saisie+"est une chaine de caractere peut-etre composée de chiffres");

// }else{
//     var finalResalt = resultat %7;
//     if(finalResalt == 0 ){
//         document.write(saisie+"est un multiple de 7");
//     }else{
//         document.write(saisie+"n'est pas un multiple de 7 et le résultat du modulo est:"+finalResalt);
//     }
// }

// var nombre=prompt("Entrez un nombre");
//  var nombreMultiplier=(nombre*1.8+32);
//  document.write( nombreMultiplier+"<br>");
//  var modulo = nombreMultiplier%3;
//  document.write(modulo);

// boite1 = 40, 
// boite2 = 50
// boite3 = 60
// var boite1 ,boite2,boite3;
// boite3 = boite1;
// boite1 = boite2;
// boite2 = boite3;
// console.log(boite1)
// console.log(boite2)
// prompt("",boite2)
// prompt("",boite1)

// for (var i = 25; i<=35;i+=2){
//     document.write("<p>Instruction exécutée:"+i+"</p>");
// }
// var j = prompt("Inserez votre prénom")
// while(j!="cedric" ){
//     j = prompt("La valeur n'est pas correcte Inserez votre prénom")
// }
// document.write("<hr/><p>Votre Prénom est:"+j+"</p>");
// var tps=0
// for (var monCompte = 1000 ; monCompte<=2000; monCompte+=50){
//       document.write("<p>Paye du mois:"+monCompte+"</p>"+"Mois"+  tps);
//       tps++
// }
// var monCompte =1000;
// var mois = 0;
// while(monCompte<2000){
//     monCompte+=50;
//     mois++;
// }
// document.write("<h3>Sous sur mon compte"+monCompte+"</h3>");
// document.write("<p>Jusqu'a 2000€,il me faut :"+mois+"mois")
var majarotité=18
var age=parseInt(prompt("Indiquez votre age"));
while((age >=3)||(age<120)){
    age=parseInt(prompt("Indiquez votre age"));

}