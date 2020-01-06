def decor(func):
    def wrap():
        print("====================")
        func()
        print("====================")
    return wrap


def decor1(func):
    def wrap():
        print("********************")
        func()
        print("********************")
    return wrap

@decor1
@decor
@decor1
def print_text():
    print("I love Sasha")

print_text()