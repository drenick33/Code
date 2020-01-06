def upward(sentence):
    letters = []
    for chr in sentence:
        letters.append(chr)
        print(" ".join(letters))

def downward(sentence):
    letters = []
    for chr in sentence:
        letters.append(chr)
    for chr in sentence:
        print(" ".join(letters))
        letters.pop()


Truth = "I love Sasha"

while True:
    upward(Truth)
    downward(Truth)