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



# You can different type of exceptions
import math

def getsqrt(x):
    """Compute the square root of a number.

    Parameters:
    x : integer

    Returns:
    result : integer
    """
    try:
        result = math.sqrt(x)
        return result
    #specific error
    # except ValueError:
    #     print("Value cannot be negative")
    #generic error
    except Exception as err:
        print(err)
    #multiple errors
    # except (Exception,ValueError) as err:
    #     print(err)
    finally:
        print("exiting function")

answer = getsqrt(-1)
print(answer)

print(":: try_except_finally.py :: DONE\n\n")
