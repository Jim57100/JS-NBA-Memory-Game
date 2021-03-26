window.addEventListener('load', () => {


  // VARIABLES

  let x = 4; // on choisit le nombre de carte
  let y = 4;

  let tab = [1, 2, 3, 4, 5, 6, 7, 8]; // On crée une série de numéros qui serviront à identifier les cartes.
  let grid = []; // Ce tableau accueillera les valeurs doubles

  for (let i = 0; i < (x + y); i++) { // On parcours le tableau tab
    grid.push(tab[i]); // On injecte une première fois la valeur de tab
    grid.push(tab[i]); // On injecte une deuxième fois la valeur de tab
  };
  console.log(grid);

  // Tri aléatoire (shuffle) du tableau
  grid = grid.sort(function () {
    return Math.random() < 0.5 ? -1 : 1;
  });

  console.log(grid);


  //Création des cartes

  const header = document.querySelector('header');
  const div0 = document.createElement('DIV');
  header.after(div0);
  div0.className = "container";
  
  const container = document.querySelector('.container');
  const divIndex = document.createElement('DIV');
  container.appendChild(divIndex);
  divIndex.className = "start"

  const divStart = document.querySelector('.start');

  for (let i = 0; i < (x * y); i++) {

    const div1 = document.createElement('DIV');
    divStart.appendChild(div1);
    div1.className = "card";

    let div2 = document.createElement('DIV');
    div1.appendChild(div2);
    div2.className = "card-inner";

    const div3 = document.createElement('DIV');
    div2.appendChild(div3);
    div3.className = "card-front";

    const imgFront = document.createElement('IMG');
    imgFront.src = 'images/Front_card.jpg';
    div3.appendChild(imgFront);

    const div4 = document.createElement('DIV');
    div2.appendChild(div4);
    div4.className = "card-back";

    const imgBack = document.createElement('IMG');
    imgBack.src = `images/card_${grid[i]}.jpg`;
    imgBack.style = "border-radius: 10px";
    div4.appendChild(imgBack);
  }

  // FLIP 
  const cards = document.querySelectorAll(".card"); // on sélectionne toutes les cartes

  const currentCards = []; // on prépare un tableau
  let moves = 0;
  let win = 0;


  for (let i = 0; i < cards.length; i++) {  //on parcours les cartes

    cards[i].addEventListener("click", () => {
      if (cards[i].classList.contains('flip')) { // au click, si la carte contient la class 'flip' on ne fait rien.
        return;
      } else {
        cards[i].classList.toggle("flip"); // sinon on lui attribue une classe 'flip' qui la retourne via le css.
      }

      currentCards.push(cards[i]);  // on stock les cartes sélectionnées dans un tableau. Elles contiennent le chemin des images puisque l'on sélectionner toute la div .card au début !

      if (currentCards.length === 2) {
        let card1 = currentCards[0]; //on stock la première carte retournée dans un tableau.
        let card2 = currentCards[1]; //on stock la seconde dans un autre tableau

        if (card1.querySelector('div.card-back img').src !== card2.querySelector('div.card-back img').src) { //on compare si les deux cartes sont différentes. ici on a spécifier le chemin des images avec div.card-back. 
          setTimeout(() => {
            card1.classList.toggle("flip");
            card2.classList.toggle("flip");
          }, 1000);

        } else {
          setTimeout(() => {
            window.alert('Awesome play !!!');
          }, 1000);
        win++;
        console.log(`win : ${win}`);

  if (win == 8){
    alert("You win !!!")
  }
      }
        
        moves++;
        if (moves > 11){
          alert (' Sorry bro ! The match is over !')
        }
        console.log(moves);
        currentCards.length = 0; //remise à zéro du tableau

      }

      // cards[i] est la carte courante
      // On la stock de coté
      // Quand on a deux carte alors on check si elle sont idem
      // Si ok : laisser retournées
      // Sinon, supprimer le flip des deux et continuer
      // Si toutes les cartes flipped : gagné !


    });
  }
  
  //Player rating performance
  /*
  
  if moves = 8 => 4 stars
  if moves = 9 => 3 stars
  if moves = 10 => 2 stars
  if moves = 11 => 1 stars
  if moves > 11 => Loose game
  if(moves > 8 && moves < 12){

    for ( let i = 0; i < 3; i++){

    }

  }
  */
  // On fait ca après le tout



});






/*

ALGORITHME premierAlgo
DEBUT
  Avancer
  tourner gauche
  avancer
FIN

SECOND ALGO
VARIABLES
  score: ENTIER
  coeur: ENTIER;

  DEBUT
    score <= 0
    coeur <= 1




*/