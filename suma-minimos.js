//Podria usar un metodo de ordenamiento (points.sort(function(a, b){return a-b});), obtener los 
//primeros dos numeros positivos y sumarlos, pero la siguiente funcion posee menos costo.



array = [2,5,1,3,2,1,0,-1,3,8,-3]; //arreglo de entrada

function sumaMinimos(array){       //funcion que retorna la suma de los dos menores

let min_1 = array[0];             //inicializo el primer numero
let min_2 = array[1];             //inicializo el segundo numero

array.forEach((element)=>{       //recorro el arreglo 
  if(element >= 0){              //condicion para que sea un numero positivo
    if(element < min_1){
      if(min_1<min_2)           //condicion para no perder el segundo menor...
        min_2=min_1;            //en caso de que min_1 contenga el segundo mmas bajo
      min_1 = element;
  }
  else
  {
    if (element < min_2)        //En caso de que element sea mayor que min_1 
      min_2 = element;          //pero menor a min_2
  }}});
  return min_1+min_2;           //retorna la suma de los dos menores
}

console.log(sumaMinimos(array)); // muestra por consola la suma.

