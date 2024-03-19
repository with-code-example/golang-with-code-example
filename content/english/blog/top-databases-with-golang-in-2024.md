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

<p>Hey, I am going to discuss the leading databases you can start with golang. StackOverflow was surveyed in 2023 to choose these databases. So I will be using it as my point of reference and giving code examples on how to use those databases with golang this year 2024. So without wasting any more time let’s get started.</p>
<p>{{&lt; toc &gt;}}</p>
<p><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/screenshot-2024-03-19-at-12.31.19%E2%80%AFpm_URaLZB0s.png" alt="top databases"></p>
<h2 id="postgresql">PostgreSQL</h2>
<p>A relational database management system (RDBMS) is an open-source product called PostgreSQL, which supports SQL and other relational databases. It is also famous for its dependability, versatility, and backing of open standards in technology. PostgreSQL operates as a chief repository or storehouse of information for numerous web apps, mobile devices, geographical programs and analytical systems.</p>
<p>I have published a blog to start using <a href="https://golang.withcodeexample.com/blog/golang-postgres/">Postgres with golang</a>, you can check that out for a detailed overview.</p>
<p><a href="https://golang.withcodeexample.com/blog/golang-postgres/"><img src="https://golang.withcodeexample.com/Golang_Postgres_lspchx_15385181454893692583.png" alt="golang with postgres"></a></p>
<h3 id="start-using-postgres-with-golang">Start using Postgres with Golang</h3>
<ol>
<li><strong>Install golang postgres package</strong></li>
</ol>
<p><a href="https://github.com/lib/pq"><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/git-pq_c1AGqfPn.jpg" alt="git pq"></a></p>
<pre><code class="lang-bash">go get github.com/lib/pq
</code></pre>
<ol>
<li><strong>Code implementation for Golang Postgres</strong></li>
</ol>
<pre><code class="lang-go">
package main

import (
    &quot;database/sql&quot;
    &quot;fmt&quot;
    &quot;log&quot;

    _ &quot;github.com/lib/pq&quot;
)

func main() {
    // Establish a connection to the PostgreSQL database
    db, err := sql.Open(&quot;postgres&quot;, &quot;postgres://username:password@host:port/dbname?sslmode=disable&quot;)
    if err != nil {
        log.Fatal(&quot;Error connecting to the database: &quot;, err)
    }
    defer db.Close()

    // Check if the connection is successful
    err = db.Ping()
    if err != nil {
        log.Fatal(&quot;Error pinging the database: &quot;, err)
    }
    fmt.Println(&quot;Successfully connected to PostgreSQL!&quot;)

    // Example query
    rows, err := db.Query(&quot;SELECT * FROM your_table&quot;)
    if err != nil {
        log.Fatal(&quot;Error executing query: &quot;, err)
    }
    defer rows.Close()

    // Process query results
    for rows.Next() {
        // Process each row
    }
}
</code></pre>
<h2 id="mysql">MySQL</h2>
<p>The free and open-source relational database management system (RDBMS) MySQL stores data in distinct tables rather than one single large database. It is an SQL-based RDBMS that can be run under various platforms such as Unix, Mac OS and Windows operating systems. MySQL is employed across many sectors and supports transactions, real-time analytics, and machine learning.</p>
<ol>
<li><strong>Install Golang MySQL package</strong></li>
</ol>
<p><a href="https://github.com/go-sql-driver/mysql"><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mysql_fBpTmMzJ.jpg" alt="gp-mysql"></a></p>
<pre><code class="lang-bash">https://github.com/go-sql-driver/mysql
</code></pre>
<ol>
<li><strong>Code implementation for Golang Mysql</strong></li>
</ol>
<pre><code class="lang-go">package main
import (
    &quot;fmt&quot;
    &quot;database/sql&quot;
    _ &quot;github.com/go-sql-driver/mysql&quot;
)

func main() {
    fmt.Println(&quot;Go MySQL Tutorial&quot;)

    // Open up our database connection.
    // I&#39;ve set up a database on my local machine using phpmyadmin.
    // The database is called testDb
    db, err := sql.Open(&quot;mysql&quot;, &quot;root:password1@tcp(127.0.0.1:3306)/test&quot;)

    // if there is an error opening the connection, handle it
    if err != nil {
        panic(err.Error())
    }

    // defer the close till after the main function has finished
    // executing
    defer db.Close()

    // perform a db.Query insert
    insert, err := db.Query(&quot;INSERT INTO test VALUES ( 2, &#39;TEST&#39; )&quot;)

    // if there is an error inserting, handle it
    if err != nil {
        panic(err.Error())
    }
    // be careful deferring Queries if you are using transactions
    defer insert.Close()


}
</code></pre>
<h2 id="sqlite">SQLite</h2>
<p>SQLite is a relational database management system (RDBMS) that is open source and serverless. It is a library embedded by software developers in their applications and acts as the most widely available database engine. SQLite is cross-platform and hence can be used on platforms such as macOS and Windows.</p>
<ol>
<li><strong>Install Golang SQLite package</strong></li>
</ol>
<p><a href="https://github.com/mattn/go-sqlite3"><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-sqlite_wwEtCm9j.jpg" alt="gp-sqlite"></a></p>
<pre><code class="lang-bash">go get github.com/mattn/go-sqlite3
</code></pre>
<ol>
<li><strong>Code implementation for Golang SQLite</strong></li>
</ol>
<pre><code class="lang-go">
package main

import (
    &quot;database/sql&quot;
    &quot;fmt&quot;
    _ &quot;github.com/mattn/go-sqlite3&quot;
    &quot;log&quot;
    &quot;os&quot;
)

func main() {
    os.Remove(&quot;./foo.db&quot;)

    db, err := sql.Open(&quot;sqlite3&quot;, &quot;./foo.db&quot;)
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
        log.Printf(&quot;%q: %s\n&quot;, err, sqlStmt)
        return
    }

    tx, err := db.Begin()
    if err != nil {
        log.Fatal(err)
    }
    stmt, err := tx.Prepare(&quot;insert into foo(id, name) values(?, ?)&quot;)
    if err != nil {
        log.Fatal(err)
    }
    defer stmt.Close()
    for i := 0; i &lt; 10; i++ {
        _, err = stmt.Exec(i, fmt.Sprintf(&quot;Transaction %d&quot;, i))
        if err != nil {
            log.Fatal(err)
        }
    }
    err = tx.Commit()
    if err != nil {
        log.Fatal(err)
    }
}
</code></pre>
<p><a href="https://github.com/mattn/go-sqlite3/tree/master/_example">Click here</a> for more examples</p>
<h2 id="mongodb">MongoDB</h2>
<p>MongoDB is a non-relational database management system that is open-source, meaning its source code is available to the public. It uses documents and collections rather than tables to store data, hence it qualifies as a NoSQL or Not only SQL database. This means that you can store unstructured structured data in this DBMS due to its flexible data model with indexing support and replication using rich and intuitive APIs.</p>
<ol>
<li><strong>Install Golang MongoDB package</strong></li>
</ol>
<p><a href="https://github.com/mongodb/mongo-go-driver"><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mongo_BV4RZwPY.jpg" alt="golang mongodb"></a></p>
<pre><code class="lang-bash">go get go.mongodb.org/mongo-driver/mongo
</code></pre>
<ol>
<li><strong>Code implementation for Golang MongoDB</strong></li>
</ol>
<pre><code class="lang-go">
package main

import (
    &quot;context&quot;
    &quot;fmt&quot;
    &quot;log&quot;
    &quot;go.mongodb.org/mongo-driver/mongo&quot;
    &quot;go.mongodb.org/mongo-driver/mongo/options&quot;
)

type Person struct {
    Name string
    Age  int
    City string
}

func main() {
    // Set client options
    clientOptions := options.Client().ApplyURI(&quot;mongodb://localhost:27017&quot;)

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

    fmt.Println(&quot;Connected to MongoDB!&quot;)

    // Access a MongoDB collection
    collection := client.Database(&quot;testdb&quot;).Collection(&quot;people&quot;)

    // Insert a document
    _, err = collection.InsertOne(context.Background(), Person{&quot;John Doe&quot;, 30, &quot;New York&quot;})
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(&quot;Inserted document into collection!&quot;)

    // Find a document
    var result Person
    err = collection.FindOne(context.Background(), nil).Decode(&amp;result)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf(&quot;Found document: %+v\n&quot;, result)

    // Disconnect from MongoDB
    err = client.Disconnect(context.Background())
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(&quot;Connection to MongoDB closed.&quot;)
}
</code></pre>
<h2 id="microsoft-sql-server">Microsoft SQL Server</h2>
<p>Microsoft SQL Server is made on Structured Query Language (SQL). It uses the programming language for database administrators (DBAs) to run and manage databases. Like other RDBMS software solutions, it is based on structured query language, a standard programming language used by database administrators (DBAs) and other IT professionals for managing databases and querying the data they contain. Transact-SQL(T-SQL) serves as the SQL server’s query language, which ensures instances or databases of SQL Servers are connected and communicated through various applications and tools from Microsoft alone.</p>
<p>Corporate IT environments can be supported by Microsoft SQL Server which is a relational database management system (RDBMS) that has a broad range concerning transaction processing, business intelligence (BI), and data analytics applications.</p>
<ol>
<li><strong>Install Golang MsSqlDb package</strong></li>
</ol>
<p><a href="https://github.com/mongodb/mongo-go-driver"><img src="https://res.cloudinary.com/harendra21/image/upload/w_1280,f_auto/images/go-mongo_BV4RZwPY.jpg" alt="golang mongodb"></a></p>
<pre><code class="lang-bash">go get github.com/denisenkom/go-mssqldb
</code></pre>
<ol>
<li><strong>Code implementation for Golang MongoDB</strong></li>
</ol>
<pre><code class="lang-go">package main

import (
    &quot;context&quot;
    &quot;database/sql&quot;
    &quot;fmt&quot;
    &quot;log&quot;

    _ &quot;github.com/denisenkom/go-mssqldb&quot;
)

func main() {
    // Connection parameters
    server := &quot;localhost&quot;
    port := 1433
    user := &quot;your_username&quot;
    password := &quot;your_password&quot;
    database := &quot;your_database&quot;

    // Connection string
    connString := fmt.Sprintf(&quot;server=%s;user id=%s;password=%s;port=%d;database=%s;&quot;,
        server, user, password, port, database)

    // Connect to SQL Server
    conn, err := sql.Open(&quot;sqlserver&quot;, connString)
    if err != nil {
        log.Fatal(&quot;Error connecting to SQL Server:&quot;, err.Error())
    }
    defer conn.Close()

    // Test the connection
    err = conn.Ping()
    if err != nil {
        log.Fatal(&quot;Error pinging SQL Server:&quot;, err.Error())
    }
    fmt.Println(&quot;Connected to SQL Server!&quot;)

    // Querying the database
    rows, err := conn.QueryContext(context.Background(), &quot;SELECT * FROM YourTable&quot;)
    if err != nil {
        log.Fatal(&quot;Error executing query:&quot;, err.Error())
    }
    defer rows.Close()

    // Iterate through the result set
    for rows.Next() {
        var id int
        var name string
        var age int
        if err := rows.Scan(&amp;id, &amp;name, &amp;age); err != nil {
            log.Fatal(&quot;Error scanning row:&quot;, err.Error())
        }
        fmt.Printf(&quot;ID: %d, Name: %s, Age: %d\n&quot;, id, name, age)
    }
    if err := rows.Err(); err != nil {
        log.Fatal(&quot;Error iterating rows:&quot;, err.Error())
    }
}
</code></pre>
<p><strong>Conclusion</strong></p>
<p>With this post, we took a look at some of the front-running databases that Go (Golang) can work with based on a StackOverflow survey done in 2023. These are; PostgreSQL, MySQL, SQLite, MongoDB and Microsoft SQL Server. Each has different features and capabilities useful for different software development goals.</p>
<p>We presented code samples to show how to connect and interact with these databases using Go. This empowers developers to easily integrate database functionality into their Go applications. Go provides powerful libraries and packages for effective database operations whether you are dealing with relational databases such as PostgreSQL, MySQL, and Microsoft SQL Server or non-relational ones like MongoDB and SQLite.</p>
<p>Armed with these insights plus the code examples provided, developers can start developing database-driven applications in Go by taking advantage of these leading databases’ power and flexibility.</p>
