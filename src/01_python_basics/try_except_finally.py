"""
Python has built-in exception handling. It does so through
the try-except-finally structure.
"""

try:
    print("This code runs fine until an exception is raised.")
except:
    print("This code will execute when an exception is raised in the ""try"" section.")
finally:
    print("In any case, the ""finally"" block will execute.")


# You can raise new exceptions with the "raise" keyword.
# You can extract the values off from an exception by typing
# the except block.

try:
    print("This code runs fine until an exception is raised.")
    raise Exception("This throws an exception.")

    print("This code will not be reachable.")
except Exception as ex:
    print(ex)
finally:
    print("In any case, the ""finally"" block will execute.")

print(":: try_except_finally.py :: DONE\n\n")
