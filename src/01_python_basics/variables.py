"""
Python does not have a command to declare variables.

Variables are created with inferred types at the time they are
assigned the first time.
"""

intVariable = 1
boolVariable = True
noneVariable = None

"""
Python is not very strict when it comes to keeping the type
of the variables.

For example, it won't stop you if you want to assign a String
to intVariable.
"""

myVariable = 0
# myVariable is now of type Integer

myVariable = "This is OK for Python!"
# myVariable is now of type String

"""
Variables are scoped, like in most languages. Scoped variables
can only be accessed within their declaration scope.
"""

def func() :

    scoped_var = "OK"

    # scoped_var is defined within func() so it can be accessed within
    # the scope of this function 

    print("This code can access the scoped_var {}".format(scoped_var))
    
    # myVariable is a module level variable
    print("I can access the module level myVariable {}".format(myVariable))
    
# Call function
func()

# Uncomment the following line to see a compilation error
# print("This code cannot reach scoped_var.".format(scoped_var))

"""
Variable names are important. They must...
- Start with a character or with the underscore (_) character
- Never start with a number
- Only contain alphanumeric characters or underscores (_)
- Be case-sensitive

And the standard programing rule is to use
- Lowercase always
- Separated by underscores

e.g.
this_is_ok
this_is_not_OK      (because it has uppercase)
thisIsNotOkEither   (because it is camel-cased)
"""

print(":: variables.py :: DONE\n\n")
