
    function countAcaracter(f, letre) {
        let count = 0;
    
        for (let i = 0; i < f.length; i++) {
          if (f[i] === letre) {
            count++;
          };
        }
    
        return count;
      }
    
      let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
    
    
     let  letre = "a";
      let  count = countAcaracter(sentence, letre);
      console.log("Le nombre d'occurrences de '" + letre +  "' est : " + count);  
      module.exports = countAcaracter;
