const array1 = [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321];
const array2 = [8, 5, 2, 9, 5, 6, 3];

selectionSort(array1);
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let index=i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[index]) {
        index =  j;
      }
    }
    [array[index],array[i]]=[array[i],array[index]]
    // let temp = array[index];
    // array[index] = array[i];
    // array[i] = temp;
    console.log(array);
  }
}
