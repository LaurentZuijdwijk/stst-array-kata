'''
The "import" keyword enables modules to reuse code from other
modules. These can be libraries from the community, or references
to your own code.
'''

# The "import" section is usually best placed at the top of your
# module.

import math

# You can "nickname" some imports with the "as" keyword
# You can also import just a bit of a whole module with "from"

from modules_and_functions import func as local_print

'''
IMPORTANT!

You will note that when "modules_and_functions" is imported,
it runs the whole file. This is because Python is an "interpreted"
language, which compiles as it is executed.

Be careful when you define your libraries of functions to avoid
side effects when importing them into other code.
'''

# Once imported, you can use their code

sqrt4 = math.sqrt(4)
local_print("The square root of 4 is {}.".format(sqrt4))



print(":: imports.py :: DONE\n\n")
