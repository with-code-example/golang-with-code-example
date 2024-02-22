---
title: "Handy Golang Cheatsheet For Quick Reference"
subtitle: "Understanding Golang Syntax: A Quick Reference Guide"
description: "Simplify your coding process with our comprehensive Golang cheatsheet. Save time and increase productivity with this valuable resource."
slug: handy-golang-cheatsheet-for-quick-reference
tags: ['Golang', ' Cheat Sheet', ' Quick Reference', ' Programming', ' Development']
date: 2024-02-22
featured_image: 
thumbnail: 
comments: False
toc: False
draft: False
series: ['']
audio: 
---
<div class="row">
<div class="col-md-6">


</div>
<div class="col-md-6">


</div>
</div>

Go is an open-source programming language developed by Google in 2007. It is a statically typed, compiled language in the tradition of C, with memory safety, garbage collection, structural typing, and CSP-style concurrency.

> [Download and install Golang](https://golang.withcodeexample.com/blog/golang-tutorial-for-beginners/#how-to-install-golang)

<div class="row">
<div class="col-md-6">

### Hello World

- `package main` - Defines the main package for the program. Every Go program must declare a main package.
- `import "fmt"` - Imports the fmt package, which contains functions for formatted I/O.
- `func main()` - Defines the main function that will run when executing the program.
- `fmt.Println("Hello World!")` - Calls the Println function from the fmt package to print "Hello World!" to the console

</div>
<div class="col-md-6">

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello World!")
}
```
</div>
</div>


<div class="row">
<div class="col-md-6">

### Variables

Variables are declared with the var keyword followed by the variable name and type:
- Common built-in types: int, float64, bool, string, array, slice, struct, map, interface
- Variables must be used, unused variables will generate a compiler error
</div>
<div class="col-md-6">

```go
var name string
var age int

// Can declare and initialize in one line:
var name string = "John"
var age = 25

// Type inference - if initializing, can omit type and let compiler infer:
var name = "John" 
var age = 25

// Shorthand syntax inside functions - can declare with just :=
func main() {
  name := "John"
  age := 25
  
  fmt.Println(name, age)
}

// Visibility - lower case first letter for package scope, upper case first letter for exported from package
var name string // package scope
var Age int // exported from package

// Multiple variables can be declared together:
var (
  name string = "John"
  age int = 25 
)
```
</div>
</div>

