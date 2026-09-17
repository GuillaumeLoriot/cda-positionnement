//-------------FizzBuzz-------------

console.log(
  "-------------------------------   FIZZBUZZ   ----------------------------------",
);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

//-------------Palindrome-------------
//l'idée est de comparer la première et derniere lettre pour vérifier si elle sont identiques puis de décalé d'un cran et de recommencer j'usquà arrivé au millieu du mot.

console.log(
  "-------------------------------   PALINDROME   ----------------------------------",
);

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");

  let leftCharPosition = 0;
  let rightCharPosition = str.length - 1;

  console.log(str);

  while (leftCharPosition < rightCharPosition) {
    if (str[leftCharPosition] !== str[rightCharPosition]) {
      return false;
    }

    leftCharPosition++;
    rightCharPosition--;
  }

  return true;
}
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("chaussette")); // false
console.log(isPalindrome("anna")); // false

//-------------Anagramme-------------
//l'idée est de prendre la première lettre de la str1 et de parcourir la str2 pour voir si on la trouve. si oui, on la supprime et on recommence avec la lettre suivante de str1.
// après avoir testé tout les lettres de str1, on est sensé avoir supprimé toute les lettres de str2 pour être une anagrame
console.log(
  "-------------------------------   ANAGRAME   ----------------------------------",
);

function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  console.log(str1, str2);

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        str2 = str2.replace(str2[j], "");
        break;
      }
    }
  }

  return str2.length === 0;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "eholl")); // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true (ignorer espaces/casse)

//-------------Fibonacci-------------
//là, l'idée est de générer la suite en mettant les chiffres dans un tableau au fur et à mesure et le nombre de fois demandé en paramètre puis d'affiché le chiffre à l'indice où la suite s'arrète

console.log(
  "-------------------------------   FIBONACCI   ----------------------------------",
);

function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextFibNumber = fib[i - 1] + fib[i - 2];
    fib.push(nextFibNumber);
  }
  console.log(fib[n]);
}

fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(6); // 8 (0, 1, 1, 2, 3, 5, 8)
fibonacci(10); // 55

//-------------TRI & RECHERCHE-------------
// pour le tri c'est un tri à bulle ou on compare 2 chiffres et on met le plus grand à l'indice supérieur et on recommence sur les indice suivant, ce qui fait remonter les plus grands nombres vers la fin du tableau au fur et a mesure
// pour la recherche, je défini une variable max comme le premier nombre de tableau puis compare avec la valeur à l'indice suivant. je remplace si il est plus grand et ainsi de suite sur tout le tableau
console.log(
  "-------------------------------   TRI & RECHERCHE   ----------------------------------",
);

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(sortArray([3, 1, 4, 1, 5, 9, 2]));
console.log("le plus grand est", findMax([3, 1, 4, 1, 5, 9, 2]));

//-------------MANIPULATION DE DONNEES-------------
//Pour filtrer par catégorie je parcour le tableau d'objet en comparant si la clé catégorie corespont à la donnée donnée en parametre, si oui je met l'objet dans un tableau

console.log(
  "-------------------------------   MANIPULATION DE DONNEES   ----------------------------------",
);

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Phone", price: 699, category: "Electronics" },
  { id: 3, name: "Desk", price: 299, category: "Furniture" },
  { id: 4, name: "Chair", price: 199, category: "Furniture" },
  { id: 5, name: "Monitor", price: 299, category: "Electronics" },
];

function filterByCategory(products, category) {
  let result = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      result.push(products[i]);
    }
  }

  return result;
}

//pour la moyenne j'aditionne les valeur corespondant à la clé price puis divise par le nombre objet du tableau d'objets

function getAveragePrice(products) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }

  return total / products.length;
}

//pour le plus cher j'utilise la même logique que l'algo de l'exercice recherche

function getMostExpensive(products) {
  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}

//pour le groupement par categorie je fait un nouvel objet qui acceuillera les clé corespondant aux différentes catégorie, puis je parcours le tableau de produits, si la categorie n'existe pas dans mon nouvel objet, je l'y ajoute et ajoute le produit dans le tableau ayant cette clé

function groupByCategory(products) {
  const result = {};

  for (let i = 0; i < products.length; i++) {
    let category = products[i].category;

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(products[i]);
  }

  return result;
}

console.log(filterByCategory(products, "Electronics"));
console.log("le prix moyen est:", getAveragePrice(products));
console.log("le plus cher est:", getMostExpensive(products));
console.log(groupByCategory(products));
