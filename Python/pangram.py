def main():
    sentence = [""]
    myInput(sentence)
    output(sentence[0])

def myInput(sentence):
    sentence[0] = input()

def output(sentence):
    print(check(sentence), end='')

def check(sentence):
    letters = {}
    for s in sentence:
        letters[s] = letters.get(s, 0) + 1
    
    isPan = True
    for c in range(ord('a'), ord('z') + 1):
        char = chr(c)
        if letters.get(char, 0) == 0:
            print(f"There is no {char}")
            isPan = False
    return isPan

main()