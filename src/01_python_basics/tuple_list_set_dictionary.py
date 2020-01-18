"""
Tuples, Lists, Sets and Dictionaries are standard data types in
Python athough normally they are considered complex data types.

All of them might contain an indefinite number of elements and
their elements can be of any mixed types.
"""

# TUPLES are defined within PARENTHESIS
# e.g. (1, 2, 3)

"""
Tuples are a sequential data type in Python characterised by:
- Being immutable (cannot change after being set)
- Being ordered (they keep the sequence they had when created)
- Being indexed (can access a particular index)
"""

myTuple = (None, 1, "Two")
print("These are the elements in my Tuple:")
for element in myTuple:
    print("- {}".format(element))

print("Element #1 in my Tuple is {}.".format(myTuple[1]))

# LISTS are defined with SQUARE BRACKETS
# e.g. [1, 2, 3]

"""
Lists are a sequential data type in Python characterised by:
- Being mutable (we can add or remove elements after creating it)
- Being ordered (they keep the sequence they had when created or altered)
- Being indexed (can access a particular index)
"""

myList = [None, 1, "Two"]
print("These are the elements in my List:")
for element in myList:
    print("- {}".format(element))

print("Element #1 in my List is {}.".format(myList[1]))

# SETS are defined with CURLY BRACKETS
# e.g. {1, 2, 3}

"""
Sets are a non-sequential data type in Python characterised by:
- Being mutable (we can add or remove elements after creating it)
- Being deduplicated (if we add twice the same element, it will appear only once)
- Being unordered (they can be used in a for loop, but the sequence might not always be the same)
- Being non-indexed (cannot access a particular index)
"""

mySet = {None, 1, "Two"}
print("These are the elements in my Set:")
for element in mySet:
    print("- {}".format(element))

# Uncomment the following line to see a compilation error
# print("Element #1 in my Set is {}.".format(mySet[1]))

# DICTIONARIES are SETS, but they contain Key-Value pairs
# e.g. {"Key":"Value", "OtherKey":"OtherValue"}

"""
Dictionaries are a non-sequential data type in Python that 
behaves just like sets. However, each value in the dictionary 
can be set or accessed through the index of their KEY.

Note that in a for loop, the order of these keys is not
sequential or enforced, the same as in sets.
"""

myDictionary = {
    "Ireland":"Dublin",
    "Kingdom":"London",
    "Germany":"Berlin", 
    "Japan":"Tokio"
}

for country in myDictionary:
    print("{} is the capital of {}.".format(myDictionary[country], country))

myDictionary["Spain"] = "Madrid"
print("The capital of {} is {}.".format("Spain", myDictionary["Spain"]))

print(":: tuple_list_set_dictionary.py :: DONE\n\n")
