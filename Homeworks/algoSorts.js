function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([5, 2, 9, 1, 5, 6]));


function quickSortIterative(arr) {
  const stack = [[0, arr.length - 1]];

  while (stack.length > 0) {
    const [start, end] = stack.pop();
    if (start >= end) continue;

    const pivotIndex = partition(arr, start, end);

    stack.push([start, pivotIndex - 1]);
    stack.push([pivotIndex + 1, end]);
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

console.log(quickSortIterative([5, 2, 9, 1, 5, 6]));
