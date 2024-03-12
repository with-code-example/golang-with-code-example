---
title: "Gorm With Postgres LastInsertId Is Not Supported By This Driver"
subtitle: "Understanding the Limitations of Gorm and Postgres LastInsertId"
description: "Experiencing issues with Gorm and Postgres? Learn why LastInsertId is not supported by the driver in our latest blog post."
slug: gorm-lastinsertid-is-not-supported
tags: ['gorm', ' postgres']
date: 2024-03-10T06:51:03.711Z
featured_image: "https://res.cloudinary.com/harendra21/image/upload/f_auto/images/Gorm-postgres_xYuf3grJ.png"
thumbnail: "https://res.cloudinary.com/harendra21/image/upload/f_auto/images/Gorm-postgres_xYuf3grJ.png"
comments: true
draft: false
series: ['']
audio: ""
---

A few days ago, I encountered an issue while using [Gorm](https://golang.withcodeexample.com/blog/advanced-querying-with-gorm/) with Postgres. The problem arose when I attempted to retrieve the last inserted ID, only to be met with an error message stating that it wasn't supported by the driver. Puzzled by this, I turned to Google for assistance and discovered that I needed to adjust the SQL query to obtain the inserted ID from Gorm with Postgres. With this newfound knowledge, I proceeded to address the issue.

![issue gif](https://res.cloudinary.com/harendra21/image/upload/f_auto/images/issue-iseissss_sNrNneHl.gif)
{.gif}

The issue lies in PostgreSQL's lack of support for the last insert ID concept. To obtain the inserted ID, one must employ QueryRow alongside the RETURNING clause.

## Solution

To fix the issue we have to add the `RETURNING id` to our query.

```go

var id int
err := db.QueryRow("INSERT INTO user (name) VALUES ('John') RETURNING id").Scan(&id)
if err != nil {
...
}

```

## Example

Below is a complete Go program that demonstrates how to use Gorm to insert data into a Postgres table and retrieve the inserted ID:

```go
package main

import (
    "fmt"
    "log"

    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

type User struct {
    ID   uint
    Name string
}

func main() {
    // Connect to the Postgres database
    dsn := "host=localhost user=your_username password=your_password dbname=your_dbname port=5432 sslmode=disable"
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Error connecting to database: %v", err)
    }
    defer db.Close()

    // AutoMigrate the User model to create the 'users' table
    err = db.AutoMigrate(&User{})
    if err != nil {
        log.Fatalf("Error auto migrating table: %v", err)
    }

    // Insert a new user record
    var id int
    err = db.QueryRow("INSERT INTO users (name) VALUES ('John') RETURNING id").Scan(&id)
    if err != nil {
        log.Fatalf("Error inserting record: %v", err)
    }

    fmt.Printf("Inserted ID: %d\n", id)
}
```

Before running this program, make sure to replace `your_username`, `your_password`, and `your_dbname` with your actual database credentials and database name. Additionally, ensure that you have the necessary Postgres driver (`github.com/lib/pq`) and Gorm (`gorm.io/gorm`) installed in your environment. This program establishes a connection to a Postgres database, creates a `User` model with an `ID` and `Name` field, auto migrates the model to create the 'users' table if it doesn't exist, inserts a new record into the 'users' table with the name 'John', and prints the inserted ID to the console.

