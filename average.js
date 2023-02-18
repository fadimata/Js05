function average (){
   const   nombre = [20, 12, 8, 9];
      let sum = 0
      for (let i=0 ; i<nombre.length ; i++){
     sum+= nombre[i];
    }
    const moyenne = sum / nombre.length;
     console.log(moyenne);
};
average ();
    module.exports = average;
