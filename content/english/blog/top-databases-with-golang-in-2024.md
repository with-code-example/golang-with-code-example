---
title: "Top Databases To Start Using With Golang In 2024"
subtitle: "PostgreSQL, MySQL, SQLite, MongoDB, and Microsoft SQL Server with Go"
description: "Learn how to integrate PostgreSQL, MySQL, SQLite, MongoDB, and Microsoft SQL Server with Go applications using code examples provided in this guide for 2024."
slug: top-databases-with-golang-in-2024
tags: ['golang', ' database', ' postgres', ' mysql']
date: 2024-03-19T08:27:49.287Z
featured_image: "https://res.cloudinary.com/harendra21/image/upload/w_1920,f_auto/images/top-databases-to-start-using-with-golang_pYS6B2ht.png"
thumbnail: "https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/top-databases-to-start-using-with-golang_pYS6B2ht.png"
comments: true
draft: false
series: ['']
audio: ""
---


Hey, I am going to discuss the leading databases you can start with golang. StackOverflow was surveyed in 2023 to choose these databases. So I will be using it as my point of reference and giving code examples on how to use those databases with golang this year 2024. So without wasting any more time let’s get started.

{{< toc >}}

![top databases](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/screenshot-2024-03-19-at-12.31.19%E2%80%AFpm_URaLZB0s.png)

## PostgreSQL

A relational database management system (RDBMS) is an open-source product called PostgreSQL, which supports SQL and other relational databases. It is also famous for its dependability, versatility, and backing of open standards in technology. PostgreSQL operates as a chief repository or storehouse of information for numerous web apps, mobile devices, geographical programs and analytical systems.

I have published a blog to start using [Postgres with golang](https://golang.withcodeexample.com/blog/golang-postgres/), you can check that out for a detailed overview.

[![golang with postgres](https://golang.withcodeexample.com/Golang_Postgres_lspchx_15385181454893692583.png)](https://golang.withcodeexample.com/blog/golang-postgres/)

### Start using Postgres with Golang

1. **Install golang postgres package**

[![git pq](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/git-pq_c1AGqfPn.jpg)](https://github.com/lib/pq)

```bash
go get github.com/lib/pq
```

2. **Code implementation for Golang Postgres**

```go

package main

import (
    "database/sql"
    "fmt"
    "log"

    _ "github.com/lib/pq"
)

func main() {
    // Establish a connection to the PostgreSQL database
    db, err := sql.Open("postgres", "postgres://username:password@host:port/dbname?sslmode=disable")
    if err != nil {
        log.Fatal("Error connecting to the database: ", err)
    }
    defer db.Close()

    // Check if the connection is successful
    err = db.Ping()
    if err != nil {
        log.Fatal("Error pinging the database: ", err)
    }
    fmt.Println("Successfully connected to PostgreSQL!")

    // Example query
    rows, err := db.Query("SELECT * FROM your_table")
    if err != nil {
        log.Fatal("Error executing query: ", err)
    }
    defer rows.Close()

    // Process query results
    for rows.Next() {
        // Process each row
    }
}

```

## MySQL

The free and open-source relational database management system (RDBMS) MySQL stores data in distinct tables rather than one single large database. It is an SQL-based RDBMS that can be run under various platforms such as Unix, Mac OS and Windows operating systems. MySQL is employed across many sectors and supports transactions, real-time analytics, and machine learning.

### Start using MySQL with Golang

1. **Install Golang MySQL package**

[![gp-mysql](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mysql_fBpTmMzJ.jpg)](https://github.com/go-sql-driver/mysql)

```bash
https://github.com/go-sql-driver/mysql
```

2. **Code implementation for Golang Mysql**

```go
package main
import (
    "fmt"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    fmt.Println("Go MySQL Tutorial")

    // Open up our database connection.
    // I've set up a database on my local machine using phpmyadmin.
    // The database is called testDb
    db, err := sql.Open("mysql", "root:password1@tcp(127.0.0.1:3306)/test")

    // if there is an error opening the connection, handle it
    if err != nil {
        panic(err.Error())
    }

    // defer the close till after the main function has finished
    // executing
    defer db.Close()

    // perform a db.Query insert
    insert, err := db.Query("INSERT INTO test VALUES ( 2, 'TEST' )")

    // if there is an error inserting, handle it
    if err != nil {
        panic(err.Error())
    }
    // be careful deferring Queries if you are using transactions
    defer insert.Close()


}

```

## SQLite

SQLite is a relational database management system (RDBMS) that is open source and serverless. It is a library embedded by software developers in their applications and acts as the most widely available database engine. SQLite is cross-platform and hence can be used on platforms such as macOS and Windows.

### Start using SQLite with Golang

1. **Install Golang SQLite package**

[![gp-sqlite](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-sqlite_wwEtCm9j.jpg)](https://github.com/mattn/go-sqlite3)

```bash
go get github.com/mattn/go-sqlite3
```

2. **Code implementation for Golang SQLite**


```go

package main

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
)

func main() {
	os.Remove("./foo.db")

	db, err := sql.Open("sqlite3", "./foo.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `
	create table foo (id integer not null primary key, name text);
	delete from foo;
	`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Printf("%q: %s\n", err, sqlStmt)
		return
	}

	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err := tx.Prepare("insert into foo(id, name) values(?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	for i := 0; i < 10; i++ {
		_, err = stmt.Exec(i, fmt.Sprintf("Transaction %d", i))
		if err != nil {
			log.Fatal(err)
		}
	}
	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
}

```
[Click here](https://github.com/mattn/go-sqlite3/tree/master/_example) for more examples

## MongoDB

MongoDB is a non-relational database management system that is open-source, meaning its source code is available to the public. It uses documents and collections rather than tables to store data, hence it qualifies as a NoSQL or Not only SQL database. This means that you can store unstructured structured data in this DBMS due to its flexible data model with indexing support and replication using rich and intuitive APIs.

### Start using MongoDB with Golang

1. **Install Golang MongoDB package**

[![golang mongodb](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mongo_BV4RZwPY.jpg)](https://github.com/mongodb/mongo-go-driver)


```bash
go get go.mongodb.org/mongo-driver/mongo

```

2. **Code implementation for Golang MongoDB**

```go

package main

import (
    "context"
    "fmt"
    "log"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

type Person struct {
    Name string
    Age  int
    City string
}

func main() {
    // Set client options
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

    // Connect to MongoDB
    client, err := mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }

    // Check the connection
    err = client.Ping(context.Background(), nil)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Connected to MongoDB!")

    // Access a MongoDB collection
    collection := client.Database("testdb").Collection("people")

    // Insert a document
    _, err = collection.InsertOne(context.Background(), Person{"John Doe", 30, "New York"})
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Inserted document into collection!")

    // Find a document
    var result Person
    err = collection.FindOne(context.Background(), nil).Decode(&result)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Found document: %+v\n", result)

    // Disconnect from MongoDB
    err = client.Disconnect(context.Background())
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connection to MongoDB closed.")
}

```

## Microsoft SQL Server

Microsoft SQL Server is made on Structured Query Language (SQL). It uses the programming language for database administrators (DBAs) to run and manage databases. Like other RDBMS software solutions, it is based on structured query language, a standard programming language used by database administrators (DBAs) and other IT professionals for managing databases and querying the data they contain. Transact-SQL(T-SQL) serves as the SQL server’s query language, which ensures instances or databases of SQL Servers are connected and communicated through various applications and tools from Microsoft alone.

Corporate IT environments can be supported by Microsoft SQL Server which is a relational database management system (RDBMS) that has a broad range concerning transaction processing, business intelligence (BI), and data analytics applications.


### Start using Microsoft SQL Server with Golang

1. **Install Golang MsSqlDb package**

[![golang mongodb](https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mongo_BV4RZwPY.jpg)](https://github.com/mongodb/mongo-go-driver)


```bash
go get github.com/denisenkom/go-mssqldb
```

2. **Code implementation for Golang MongoDB**

```go
package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/denisenkom/go-mssqldb"
)

func main() {
	// Connection parameters
	server := "localhost"
	port := 1433
	user := "your_username"
	password := "your_password"
	database := "your_database"

	// Connection string
	connString := fmt.Sprintf("server=%s;user id=%s;password=%s;port=%d;database=%s;",
		server, user, password, port, database)

	// Connect to SQL Server
	conn, err := sql.Open("sqlserver", connString)
	if err != nil {
		log.Fatal("Error connecting to SQL Server:", err.Error())
	}
	defer conn.Close()

	// Test the connection
	err = conn.Ping()
	if err != nil {
		log.Fatal("Error pinging SQL Server:", err.Error())
	}
	fmt.Println("Connected to SQL Server!")

	// Querying the database
	rows, err := conn.QueryContext(context.Background(), "SELECT * FROM YourTable")
	if err != nil {
		log.Fatal("Error executing query:", err.Error())
	}
	defer rows.Close()

	// Iterate through the result set
	for rows.Next() {
		var id int
		var name string
		var age int
		if err := rows.Scan(&id, &name, &age); err != nil {
			log.Fatal("Error scanning row:", err.Error())
		}
		fmt.Printf("ID: %d, Name: %s, Age: %d\n", id, name, age)
	}
	if err := rows.Err(); err != nil {
		log.Fatal("Error iterating rows:", err.Error())
	}
}
```
**Conclusion**

With this post, we took a look at some of the front-running databases that Go (Golang) can work with based on a StackOverflow survey done in 2023. These are; PostgreSQL, MySQL, SQLite, MongoDB and Microsoft SQL Server. Each has different features and capabilities useful for different software development goals.

We presented code samples to show how to connect and interact with these databases using Go. This empowers developers to easily integrate database functionality into their Go applications. Go provides powerful libraries and packages for effective database operations whether you are dealing with relational databases such as PostgreSQL, MySQL, and Microsoft SQL Server or non-relational ones like MongoDB and SQLite.

Armed with these insights plus the code examples provided, developers can start developing database-driven applications in Go by taking advantage of these leading databases’ power and flexibility.