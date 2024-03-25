---
title: "How To Handle Errors In Golang Effectively"
subtitle: "Handle errors in golang"
description: "Golang provides a robust error handling mechanism that allows developers to manage errors effectively. By understanding how to use error types and custom errors, defer and panic, and error wrapping, you can build reliable and resilient applications that gracefully handle unexpected situations."
slug: error-handling-in-golang-a-comprehensive-guide-with-examples
tags: ['golang', 'golang-best-practices', 'error-handling']
date: 2023-08-09
featured_image: "https://res.cloudinary.com/harendra21/image/upload/w_1200/awesome-blog/awesome-golang/Error_Handling_aqphgs.png"
thumbnail: "https://res.cloudinary.com/harendra21/image/upload/w_400/awesome-blog/awesome-golang/Error_Handling_aqphgs.png"
comments: false
draft: false
series: ['Golang Best Practices']
audio: ""
---


If you are a software developer, then you understand the importance of [error handling](https://en.wikipedia.org/wiki/Exception_handling) as a way to build dependable and strong applications. [Go](https://golang.withcodeexample.com/blog/golang-tutorial-for-beginners/) is rich in error-handling features that enable efficient identification and management of errors. So, three key areas will be discussed about Go’s error handling: Use Errors Types (and Custom Errors), Defer and Panic – When should they be used appropriately? And Error Wrapping and Error Chains. Let us get started.

## 1. Using Error Types and Custom Errors


In Go, “Using Error Types and Custom Errors” talks about how errors are worked on in a more structured, informative way. In Go, developers can extend error class and have better error messages that help debug a program.

Here’s a simple guide on how to use errors and define custom errors in Go:

1. **Error Interface:** An error is an interface in the programming language called Go which has one method named Error() string. Any type in Go that has this method implemented is considered an error type.

2. **Standard Errors:** The built-in package for Go called errors provides us with a function New() that we can call to create a new error using the specified message.

```go
import "errors"

err := errors.New("Something went wrong")

```

3. **User-defined errors:** By defining your struct types that implement the error interface, you can invent custom error types.


```go
type MyError struct {
    Message string
    Code    int
}

func (e *MyError) Error() string {
    return fmt.Sprintf("%s (code: %d)", e.Message, e.Code)
}

```

4. **Creating and returning user-defined errors:** From their functions, instances of them can be created and returned once you have defined your custom error types.

```go
func doSomething() error {
    // Perform some operation
    if err != nil {
        return &MyError{"Something went wrong", 500}
    }
    return nil
}

```

5. **Checking for particular errors:** To check for specific error types and perform appropriate actions, type assertions are used when handling errors.

```go
err := doSomething()
if myErr, ok := err.(*MyError); ok {
    // Handle MyError specifically
    fmt.Printf("Custom error: %s (code: %d)\n", myErr.Message, myErr.Code)
} else if err != nil {
    // Handle other types of errors
    fmt.Println("Unknown error:", err)
}

```

**Example:**

By creating custom errors or using error types, programmers can provide more information and context about Go programming language-based issues which is useful in debugging and maintaining code.

To create custom errors, implement this interface for your error type. Custom errors enable you to provide additional context and information about the error.



```go
package main

import (
    "fmt"
)

type MyError struct {
    message string
}

func (e MyError) Error() string {
    return e.message
}

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, MyError{"division by zero"}
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

Output:
```
Error: division by zero
```

## 2. Defer and Panic - When to Use Them Wisely

Golang provides the `defer` keyword, which allows you to schedule a function call to be executed after the surrounding function returns. It's commonly used for cleanup tasks like closing files or releasing resources.

Example:

```go
package main

import (
    "fmt"
)

func processFile() {
    fmt.Println("Opening file...")
    defer fmt.Println("Closing file...")
    // Code to process the file goes here
}

func main() {
    processFile()
}
```

Output:
```
Opening file...
Closing file...
```

On the other hand, `panic` is used to indicate unexpected and unrecoverable errors. When a `panic` occurs, it immediately stops the execution of the current function and starts unwinding the stack, executing deferred functions along the way.

Example:

```go
package main

import (
    "fmt"
)

func performTask() {
    fmt.Println("Starting task...")
    panic("Unexpected error occurred!")
    fmt.Println("Task completed.") // This line will not be executed
}

func main() {
    performTask()
}
```

Output:
```
Starting task...
panic: Unexpected error occurred!
```

## 3. Error Wrapping and Error Chains

When handling errors, it's often useful to wrap the original error with additional context to provide a more comprehensive understanding of the error's origin. Golang provides the `fmt.Errorf()` function to create a new error that wraps the original error.

Example:

```go
package main

import (
    "fmt"
    "errors"
)

func process() error {
    err := doSomething()
    if err != nil {
        return fmt.Errorf("process failed: %w", err)
    }
    return nil
}

func doSomething() error {
    return errors.New("something went wrong")
}

func main() {
    err := process()
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Success!")
    }
}
```

Output:
```
Error: process failed: something went wrong
```

By using `%w` verb in `fmt.Errorf()`, we create an error chain that retains information about the original error.

In conclusion, Golang provides a robust error-handling mechanism that allows developers to manage errors effectively. By understanding how to use error types and custom errors, defer and panic, and error wrapping, you can build reliable and resilient applications that gracefully handle unexpected situations.