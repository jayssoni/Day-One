# Day-One
## TODAY LEARN BASIC OF GITS


## NISHA

arr = [1, 4, 5, 6, 0, 0, 9, 0]

pos = 0 

for i in range(len(arr)):
    if arr[i] != 0:
        if i != pos:
            arr[i], arr[pos] = arr[pos], arr[i]
        pos += 1

print(arr)  # output: [1, 4, 5, 6, 9, 0, 0, 0]