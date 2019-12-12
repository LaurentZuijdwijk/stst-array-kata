# This is a single-line comment.

'''
This is a multiline comment.
'''

# You can concatenate as many single-line comments as you want
# but you have to prepend every line with the # symbol.

# Single-line comments are useful as contextual annotations
# to your code as you type.

'''
Multiline comments are useful to document any part of your code
but you will generally see them documenting the parameters of
module functions.

Like any other piece of Python code, comments are scoped by
tabulation.

For example, this is a root-level comment.
'''

def say_hello(name):
    '''
    This function says hello to the person's name passed as
    parameter.

    This comment is tab-scoped inside the function, so it will be
    automatically used as contextual documentation for the 
    function.

    Parameters:
        name: The name of the person to say hello to.
    '''
    print("Hello, {}.".format(name))

say_hello("Little Grasshopper")

print(":: comments.py :: DONE\n\n")