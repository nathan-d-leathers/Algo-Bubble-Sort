# sequence = [4, 3, 5, 0, 1]
# swaps = 0

def bubble(sequence):
    seq_len = len(sequence)
    swaps = 0
    i = 0
    while i < seq_len - 1:
        j = 0
        while j < seq_len - 1 - i:
            if sequence[j] > sequence[j + 1]:
                sequence[j], sequence[j + 1] = sequence[j + 1], sequence[j]
                swaps += 1
            j += 1
        i += 1
    result = sequence
    print(f"Final result: {result}")
    print(f"Swaps: {swaps}")

bubble([4, 3, 5, 0, 1])
# Final result: [0, 1, 3, 4, 5]
# Swaps: 7

 