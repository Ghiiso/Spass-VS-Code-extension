# Spaß for Visual Studio Code

Unofficial sintax highlighting and code snippets extension for Spaß first order theorem prover.

## Get started
Once the extension is installed, you can use its features by creating a new file with the `.dfg`, `.sps` or `.spass` extension or by manually setting the **language mode** to *Spass*. You can [run your code here](https://webspass.spass-prover.org/) or you can run it locally if you have a local installation of Spass by using the **Run Spass file** button in the navbar, by pressing *Ctrl+Alt+S* or by using the equivalent command in the command palette. You can [download Spass here](https://www.mpi-inf.mpg.de/departments/automation-of-logic/software/spass-workbench/classic-spass-theorem-prover/download).

> **!** &nbsp; in order to run your code locally you must add Spass root folder to your PATH

## Features

- syntax higlighting
- code snippets for the most used function such as
    - **Logical connectives** &nbsp;  `and(,)` , `implies([],)` etc.
    - **built-in functions** &nbsp; `predicates[(,)].` , `functions[(,)].` , `formula().`
- local code compiling
> you can use `begin_problem().` snippet to add a full program template to your file: the template also contains a link to the online compiler

## Future features
- linting

## Release Notes

### 1.2.0
Code can be compiled locally by using the **Run Spass file** button in the navbar or by using the equivalent command in the command palette

### 1.1.0
User-defined functions and predicates are now highlited. Minor changes to `begin_problem().` snippet

### 1.0.0
Initial release of Spaß extension