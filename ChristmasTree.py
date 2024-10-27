n = 10  
for i in range(n):

    for j in range(i, n-1):
        print(" ", end="")

    for j in range(i*2 + 1):
        if j == 0 or j == i*2: 
            print("*", end="")
        else:
            print("|", end="")

    print()