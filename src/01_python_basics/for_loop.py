"""
For loops enable your code to iterate over an enumeration
of values and extract these into a scoped variable.

For loops are useful to iterate over sets, tuples or lists.
"""

# For loops on lists run sequentially.

myList = ["Spain", "France", "United Kingdom", "Narnia"]
print("Countries I've visited:")
for country in myList:
    print("- {}".format(country))
    
# For loops on tuples run sequentially.

mytuple = ("blue", "green", "yellow", "orange")
print("Colours of the rainbow:")
for country in mytuple:
    print("- {}".format(country))

# However, for loops on sets run in no particular order.
# Careful with that!

mySet = {"Spain", "France", "United Kingdom", "Narnia"}
print("Countries I've visited:")
for country in mySet:
    print("- {}".format(country))

print(":: for_loop.py :: DONE\n\n")
