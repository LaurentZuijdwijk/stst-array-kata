"""
Conditional expressions enable your code to control true/false scenarios.

They are defined with an "if" expression and body, and may also have an
"else" body. Both "if" and "else" expressions end with a colon (:).
"""

# Example 1
if(1 == 1):
    print("One is equal to one.")
else:
    print("This code will evidently never run")



# Example 2
x = 5
y = 10
if x == y:
    print("x is equal to y")
elif x > y:
    print("x is greater than y")
else:
    print("x is less than y")

    
print(":: conditional.py :: DONE\n\n")
