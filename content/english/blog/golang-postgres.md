---
title: "Getting Started With Golang Postgres"
subtitle: "A Comprehensive Guide to Setting Up Golang with Postgres"
description: "Learn how to connect Golang with Postgres in this beginner-friendly tutorial. Get started with database operations today!"
slug: golang-postgres
tags: ['Golang', ' Postgres', ' Database', ' Programming', ' Tutorial']
date: 2024-03-12T18:07:35.340Z
featured_image: "https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/Golang_Postgres_lspchx.png"
thumbnail: "https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/Golang_Postgres_lspchx.png"
comments: false
draft: false
series: ['Golang With']
audio: ""
---

Among SQL databases, PostgreSQL is one of the best. The first reason to use Postgres with Golang is its performance which beats all others. This blog will show how you can use the Postgres database in a Golang application and perform CRUD operations on it. To start with, make sure that you have installed and running Golang on your machine. You can follow my [golang tutorials](https://golang.withcodeexample.com/blog/golang-tutorial-for-beginners) for installing golang and learning from scratch. Let us now begin.

{{< toc >}}


## Postgres

PostgreSQL, frequently known as Postgres, is a tough open-source relational DBMS. The DB has a good reputation for being dependable, strong and feature-rich accounting for its popularity in various applications including but not limited to small projects and large business systems.

To install PostgreSQL using Docker Compose follow the steps below:

1. **Install Docker and Docker Compose**:
   If you haven't already, install Docker and Docker Compose on your system. You can find installation instructions on the official Docker website:
   - Docker: https://docs.docker.com/get-docker/
   - Docker Compose: https://docs.docker.com/compose/install/

2. **Create a Docker Compose File**:
   Create a file named `docker-compose.yml` in your project directory. This file will contain the configuration for your PostgreSQL service.

3. **Define PostgreSQL Service**:
   In the `docker-compose.yml` file, define the PostgreSQL service with the desired configuration. Below is an example configuration:

{{< tabs "docker" >}}

{{< tab "docker-compose.yaml" >}}
   ```yaml
   version: '3.8'

   services:
     postgres:
       image: postgres:latest
       restart: always
       environment:
         POSTGRES_USER: your_username
         POSTGRES_PASSWORD: your_password
         POSTGRES_DB: your_database_name
       ports:
         - "5432:5432"
       volumes:
         - ./data:/var/lib/postgresql/data
   ```

{{< /tab >}}

{{< /tabs >}}

![install postgres](https://res.cloudinary.com/harendra21/image/upload/f_auto/images/646620_sjcstr.gif)

   Replace `"your_username"`, `"your_password"`, and `"your_database_name"` with your desired PostgreSQL username, password, and database name respectively.

4. **Run Docker Compose**:
   Open a terminal in your project directory where the `docker-compose.yml` file is located, and run the following command:

   ```bash
   docker-compose up -d
   ```

   This command will start the PostgreSQL service in the background, using the configuration defined in the `docker-compose.yml` file.

5. **Verify Installation**:
   After the Docker Compose command completes successfully, you can verify that PostgreSQL is running by connecting to it using a PostgreSQL client tool or by accessing it from your application.


## Golang connect to Postgres 

You can connect to PostgreSQL from a Golang application using the `github.com/lib/pq` package by following these steps:

2. **Install the `pq` Package**:
   Use `go get` to install the `pq` package:
   ```
   go get github.com/lib/pq
   ```

![install golang postgres package](https://res.cloudinary.com/harendra21/image/upload/f_auto/images/646618_m8q845.gif)

3. **Import the Required Packages**:
   In your Golang code, import the `database/sql` and `github.com/lib/pq` packages:
   ```go
   import (
       "database/sql"
       _ "github.com/lib/pq"
   )
   ```

4. **Establish a Connection**:
   Set up a connection to your PostgreSQL database using the `sql.Open()` function:
   ```go
   db, err := sql.Open("postgres", "postgres://your_username:your_username@host:port/your_database_name?sslmode=disable")
   if err != nil {
       log.Fatal(err)
   }
   defer db.Close()
   ```

   Replace `"your_username"`, `"your_username"`, `"host"`, `"port"`, and `"your_database_name"` with your PostgreSQL credentials and database details.


{{< notice "note" >}}

If you are using golang application and postgres db both in docker, then replace your host with `postgre`

```go
   db, err := sql.Open("postgres", "postgres://your_username:your_username@postgres:port/your_database_name?sslmode=disable")
```
{{< /notice >}}


5. **Test the Connection**:
   Check if the connection to the database is successful using `Ping()`:
   ```go
   err = db.Ping()
   if err != nil {
       log.Fatal(err)
   }
   fmt.Println("Successfully connected to PostgreSQL!")
   ```

6. **Perform Database Operations**:
   Execute SQL queries and interact with the PostgreSQL database through your Golang application:
   ```go
   rows, err := db.Query("SELECT * FROM your_table")
   if err != nil {
       log.Fatal(err)
   }
   defer rows.Close()

   // Process query results
   for rows.Next() {
       // Process each row
   }
   ```

7. **Handle Errors**:
   Ensure to handle any errors that may occur during database operations appropriately.

The following is a full illustration on how to link with PostgreSQL by employing Go language and `github.com/lib/pq`.

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

## CRUD Operation using Golang Postgres

This is a simple example of Golang code for creating, reading, updating and deleting records in PostgreSQL. There are four functions in this program namely Create, Read, Update and Delete which are all written in the same `main.go` file.


```go
package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "your_username"
	password = "your_password"
	dbname   = "your_database_name"
)

func main() {
	// Establish a connection to the PostgreSQL database
	db, err := sql.Open("postgres", fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname))
	if err != nil {
		log.Fatal("Error connecting to the database: ", err)
	}
	defer db.Close()

	// Create a new record
	id, err := CreateRecord(db, "John", 30)
	if err != nil {
		log.Fatal("Error creating record: ", err)
	}
	fmt.Println("Created record with ID:", id)

	// Read records
	records, err := ReadRecords(db)
	if err != nil {
		log.Fatal("Error reading records: ", err)
	}
	fmt.Println("All records:")
	for _, r := range records {
		fmt.Println("ID:", r.ID, "Name:", r.Name, "Age:", r.Age)
	}

	// Update a record
	err = UpdateRecord(db, id, "Jane", 35)
	if err != nil {
		log.Fatal("Error updating record: ", err)
	}
	fmt.Println("Updated record with ID:", id)

	// Delete a record
	err = DeleteRecord(db, id)
	if err != nil {
		log.Fatal("Error deleting record: ", err)
	}
	fmt.Println("Deleted record with ID:", id)
}

// Record represents a database record
type Record struct {
	ID   int
	Name string
	Age  int
}

// CreateRecord creates a new record in the database
func CreateRecord(db *sql.DB, name string, age int) (int, error) {
	var id int
	err := db.QueryRow("INSERT INTO records(name, age) VALUES($1, $2) RETURNING id", name, age).Scan(&id)
	if err != nil {
		return 0, err
	}
	return id, nil
}

// ReadRecords retrieves all records from the database
func ReadRecords(db *sql.DB) ([]Record, error) {
	rows, err := db.Query("SELECT id, name, age FROM records")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var records []Record
	for rows.Next() {
		var r Record
		err := rows.Scan(&r.ID, &r.Name, &r.Age)
		if err != nil {
			return nil, err
		}
		records = append(records, r)
	}
	return records, nil
}

// UpdateRecord updates an existing record in the database
func UpdateRecord(db *sql.DB, id int, name string, age int) error {
	_, err := db.Exec("UPDATE records SET name=$1, age=$2 WHERE id=$3", name, age, id)
	if err != nil {
		return err
	}
	return nil
}

// DeleteRecord deletes a record from the database
func DeleteRecord(db *sql.DB, id int) error {
	_, err := db.Exec("DELETE FROM records WHERE id=$1", id)
	if err != nil {
		return err
	}
	return nil
}
```

Make sure to replace `"your_username"`, `"your_password"`, and `"your_database_name"` with your actual PostgreSQL username, password, and database name. Also, ensure that you have the PostgreSQL driver installed (`github.com/lib/pq`).

