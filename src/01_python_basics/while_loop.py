"""
While loops enable your code to iterate over a body of code while
a condition is evaluated to True.
"""

x = 0
while(x <= 5):
    x += 1

    print("I'm inside the loop. Iteration #{}".format(x))

print("I'm outside the loop.")

"""
The keyword "continue" enables your code to skip bits within a loop and
go straight to the next iteration.

The keyword "break" enables your code to break the loop early if a condition
is met.
"""

x = 0
while(x <= 5):
    x += 1

    if(x == 1):
        # Iteration #1 of this loop will be skipped
        continue

    if(x == 3):
        # Iteration #3 will exit the loop early
        break

    print("I'm inside the loop. Iteration #{}".format(x))

print(":: while_loop.py :: DONE\n\n")
