n = int(input())
for _ in range(n):
    num = int(input())
    print("YES" if num % 100 < 60 and num // 100 < 24 else "NO")