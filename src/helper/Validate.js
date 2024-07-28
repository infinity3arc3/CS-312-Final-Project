function Validate(array, type_ex) {
    const typed_array = array;
    var boolean = true;

    //Check the array for incorrect type
    for (let index = 0; index < typed_array.length; index++) {
        if(typeof typed_array[index] != typeof type_ex){
            boolean = false;
        }
    }

    return boolean;
  }
  
export default Validate;  