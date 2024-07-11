const array1 = [
  -19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92,
  381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384,
  -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904,
  295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434,
  491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607,
  121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321,
];
const array2 = [8, 5, 2, 9, 5, 6, 3];
bubbleSort1(array2);
function bubbleSort(array = array1) {
  let isSort = false;
  let count = 0;
  while (!isSort) {
    isSort = true;
    for (let i = 0; i < array.length - 1 - count; i++) {
      if (array[i] > array[i + 1]) {
        [array[i + 1], array[i]] = [array[i], array[i + 1]];
        isSort = false;
      }
    }
    count++;
  }
  console.log(array);
}

function bubbleSort1(array = array2) {
  for (i = 0; i <array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
}
