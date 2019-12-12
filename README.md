# Py Kata

_Learn the basics of python one file at a time._

## 00 _ Before you start

Before you start these sessions consider the project structure
 and the requirements file. These serve as examples for your
  future projects.

### Project structure

- The `README.md` explains the basics of the project.
- The `.gitignore` is tailored to generic Python projects.
- The `.vscode` folder contains:
  - A `launch.json` file defining how to run the project.
  - A `tasks.json` file that ensures `pip` is run before
    debug to install all package dependencies.
- The `src` folder is where all code is.
  - There, the `src/main.py` is the entry point to the code.
  - And the `src/requirements.txt` is the file definining
    the package dependencies of the project.

> #### The requirements.txt file
>
> It is good practice to keep dependencies on `pip`
> libraries listed there so that they can be installed in any
> environment the code is run, without being specific about
> whether it is Windows or Linux.
>
> To be able to run with those dependencies installed run:
>
> ```pip install -r src/requirements.txt```

## 01 _ Python Basics

On this first session, find one file at a time the very
basics of every Python program, such as:

- Comments (one line, multiline and scoped)
- Conditional expressions
- For loops
- While loops
- Modules and functions
- Module imports
- Main module
- Error handling (Try-Except-Finally)
- Tuples, Lists, Sets and Dictionaries
- Variables and scopes
