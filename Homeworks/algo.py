
# //Task 1
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result
# //Task 2
def merge_files(file_list, output_file):
    all_numbers = []
    for filename in file_list:
        with open(filename, 'r') as f:
            numbers = [int(line.strip()) for line in f if line.strip()]
            all_numbers.extend(numbers)
    sorted_numbers = merge_sort(all_numbers)

    with open(output_file, 'w') as f:
        for num in sorted_numbers:
            f.write(f"{num}\n")
