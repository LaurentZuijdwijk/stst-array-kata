"""
Every .py file in a Python project is called a "module".

For example, this is the "modules_and_functions" module.
"""

# Modules contain Python code that is interpreted sequentially,
# but they can also contain funtions defined as small pieces of
# reusable code.

print("This is executed sequentially as part of this module.")

# Functions are defined with the keyword "def" and may define
# any numer of parameters. They are given a name as a handler
# to be called elsewhere in the code, and start their executable
# body after a colon symbol (:).

def func(parameter_one):
    """
    This is a module function.

    Parameters:
    - parameter_one: Literally anything. It will just print it.
    """
    print(parameter_one)

# Modules can continue after functions are defined.
# The scope of each line is defined by their indentation.

func("This will call the function from the global scope of this module.")

print(":: modules_and_functions.py :: DONE\n\n")
