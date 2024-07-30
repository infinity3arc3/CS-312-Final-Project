import Validate from "./Validate";

function Addition(array) {
    var sum = Number(0);
    const number_array = array;

    //check array and make sure it only has numbers
    var boolean = Validate(number_array, Number(5));

    //Make array only have numbers
    if (boolean == false) {
        try{
            for (let index = 0; index < array.length; index++) {
                number_array[index] = Number(number_array[index]);
            }
        }

        catch {
            return null;
        }
    }

    //calculate sum
    for (let index = 0; index < number_array.length; index++) {
        sum = sum + Number(number_array[index]);
    }

    return sum;
  }
  
export default Addition;  