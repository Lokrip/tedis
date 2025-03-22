import random


def generate_unique_code(length: int):
    while True:
        code = ''.join([str(random.randint(0, 9)) for _ in range(length)])
        print(code)


generate_unique_code(6)
