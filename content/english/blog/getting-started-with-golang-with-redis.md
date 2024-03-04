---
title: "Getting Started With Golang With Redis"
subtitle: "A tutorial to getting started with redis and golang"
description: "Want to learn how to fasten your Golang applications with Redis? This blog post on Getting Started With Golang with Redis is just what you need."
slug: getting-started-with-golang-with-redis
tags: ['Golang', ' Redis', ' Programming', ' Tutorial', ' Development']
date: 2024-02-20
featured_image: "https://appwrite.withcodeexample.com/v1/storage/buckets/65cb3fcd6bbe0f7e04d4/files/65d483ee6ee6f878e473/preview?width=1280&height=0&gravity=center&quality=90&borderWidth=1&borderColor=000000&borderRadius=5&opacity=1&rotation=0&background=000000&output=webp&project=65ca51d2711f0f5e1fa8"
thumbnail: "https://appwrite.withcodeexample.com/v1/storage/buckets/65cb3fcd6bbe0f7e04d4/files/65d483ee6ee6f878e473/preview?width=400&height=0&gravity=center&quality=90&borderWidth=1&borderColor=000000&borderRadius=5&opacity=1&rotation=0&background=000000&output=webp&project=65ca51d2711f0f5e1fa8"
comments: true
toc: false
draft: false
series: ['Golang With']
audio: "https://storage.googleapis.com/with-code-example/blog-audio/getting-started-with-golang-with-redis.wav"
---

Golang, also known as Go, has gained significant traction in recent years due to its simplicity, efficiency, and concurrency support. Redis, on the other hand, is a powerful in-memory data store that excels in caching, session storage, and real-time analytics. Combining these two technologies can lead to scalable and efficient solutions for various use cases. In this guide, we'll delve into the fundamentals of using Golang with Redis, exploring how to integrate them seamlessly into your applications.

{{< toc >}}

{{< notice "note" >}}
[Golang Tutorial](https://golang.withcodeexample.com/blog/golang-tutorial-for-beginners/)
{{< /notice >}}

## What is Redis?

![redis logo](https://appwrite.withcodeexample.com/v1/storage/buckets/65cb3fcd6bbe0f7e04d4/files/65d4846adaa52cf07b0d/preview?width=1280&height=0&gravity=center&quality=90&borderWidth=1&borderColor=000000&borderRadius=5&opacity=1&rotation=0&background=000000&output=webp&project=65ca51d2711f0f5e1fa8)

[Redis](https://redis.io/) is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and sorted sets, making it versatile for different types of applications. Redis is known for its high performance, scalability, and rich set of features, including replication, clustering, and Lua scripting.

## Why use Redis?

There are several reasons why Redis is favoured in many applications:

1. **High Performance**: Redis stores data entirely in memory, allowing for lightning-fast read and write operations.
2. **Versatility**: Redis supports a wide range of data structures and provides atomic operations, making it suitable for various use cases.
3. **Persistence**: Redis offers options for data persistence, allowing you to save data to disk for durability.
4. **Scalability**: Redis can be easily scaled horizontally using clustering, enabling seamless handling of large datasets and high request volumes.

## Running Redis with Docker on Local

![docker logo](https://appwrite.withcodeexample.com/v1/storage/buckets/65cb3fcd6bbe0f7e04d4/files/65d484844e16d6ccf6e5/preview?width=1280&height=0&gravity=center&quality=90&borderWidth=1&borderColor=000000&borderRadius=5&opacity=1&rotation=0&background=000000&output=webp&project=65ca51d2711f0f5e1fa8)

> [Installing Docker and Docker Compose](https://golang.withcodeexample.com/blog/how-to-deploy-sonarqube-with-docker-compose/#installing-docker-and-docker-compose-on-ubuntu)

To get started with Redis locally, you can use Docker to set up a Redis instance quickly. First, ensure you have Docker installed on your system. Then, run the following command in your terminal:

```bash
docker run --name my-redis -p 6379:6379 -d redis
```

This command will pull the Redis Docker image from the official repository and start a Redis container named "my-redis" on port 6379.

## Connect Golang App with Redis

Integrating Redis with your Golang application is straightforward. Follow these steps to get started:

### Install [`github.com/go-redis/redis/v8`](https://github.com/redis/go-redis)

You can install the Redis client for Golang using the following `go get` command:

```bash
go get github.com/go-redis/redis/v8
```

![go-redis](https://appwrite.withcodeexample.com/v1/storage/buckets/65cb3fcd6bbe0f7e04d4/files/65d484f5bfd04b2cd63c/preview?width=1280&height=0&gravity=center&quality=90&borderWidth=1&borderColor=000000&borderRadius=5&opacity=1&rotation=0&background=000000&output=webp&project=65ca51d2711f0f5e1fa8)

### Create Redis Client

In your Golang code, import the Redis package and create a Redis client instance to interact with the Redis server:

```go
import "github.com/go-redis/redis/v8"

func main() {
    // Create a new Redis client
    client := redis.NewClient(&redis.Options{
        Addr:     "localhost:6379",
        Password: "", // no password set
        DB:       0,  // use default DB
    })
    defer client.Close()
}
```

### Write a Ping Pong Example in Golang

Here's a simple example to test the connection to Redis:

```go
pong, err := client.Ping(ctx).Result()
if err != nil {
    panic(err)
}
fmt.Println(pong) // Output: PONG
```

## Redis Set Value Example

To set a value in Redis, you can use the `Set` method:

```go
err := client.Set(ctx, "key", "value", 0).Err()
if err != nil {
    panic(err)
}
```

## Redis Get Value Example

To retrieve a value from Redis, you can use the `Get` method:

```go
val, err := client.Get(ctx, "key").Result()
if err != nil {
    panic(err)
}
fmt.Println("key", val) // Output: key value
```

## Redis Delete Value Example

To delete a value from Redis, you can use the `Del` method:

```go
err := client.Del(ctx, "key").Err()
if err != nil {
    panic(err)
}
```

## Redis Update Value Example

To update a value in Redis, you can use the `Set` method again with the same key:

```go
err := client.Set(ctx, "key", "new_value", 0).Err()
if err != nil {
    panic(err)
}
```

## Redis Golang Example

Golang program that includes all the functionalities discussed earlier, including connecting to Redis, setting, getting, deleting, and updating values:

```go
package main

import (
    "context"
    "fmt"
    "github.com/go-redis/redis/v8"
)

func main() {
    // Connect to Redis
    ctx := context.Background()
    client := redis.NewClient(&redis.Options{
        Addr:     "localhost:6379",
        Password: "", // no password set
        DB:       0,  // use default DB
    })
    defer client.Close()

    // Ping Redis
    pong, err := client.Ping(ctx).Result()
    if err != nil {
        panic(err)
    }
    fmt.Println("Ping:", pong)

    // Set value in Redis
    err = client.Set(ctx, "key", "value", 0).Err()
    if err != nil {
        panic(err)
    }
    fmt.Println("Value Set")

    // Get value from Redis
    val, err := client.Get(ctx, "key").Result()
    if err != nil {
        panic(err)
    }
    fmt.Println("Get Value:", val)

    // Update value in Redis
    err = client.Set(ctx, "key", "new_value", 0).Err()
    if err != nil {
        panic(err)
    }
    fmt.Println("Value Updated")

    // Get updated value from Redis
    val, err = client.Get(ctx, "key").Result()
    if err != nil {
        panic(err)
    }
    fmt.Println("Get Updated Value:", val)

    // Delete value from Redis
    err = client.Del(ctx, "key").Err()
    if err != nil {
        panic(err)
    }
    fmt.Println("Value Deleted")

    // Check if value exists after deletion
    val, err = client.Get(ctx, "key").Result()
    if err == redis.Nil {
        fmt.Println("Key does not exist")
    } else if err != nil {
        panic(err)
    } else {
        fmt.Println("Get Deleted Value:", val)
    }
}
```

This program connects to a local Redis instance, performs a ping to verify the connection, sets a value in Redis, retrieves it, updates it, deletes it, and checks if it's deleted successfully. You can run this program to see the interaction between Golang and Redis in action. Make sure you have Redis running locally on port 6379 before executing the program.


**Conclusion**

In this guide, we've explored the basics of integrating Golang with Redis. By leveraging the simplicity and efficiency of Golang alongside the speed and versatility of Redis, you can build robust and scalable applications that meet the demands of modern software development. Whether you're building real-time analytics systems, caching layers, or session stores, the combination of Golang and Redis offers a powerful solution for your data storage and retrieval needs. Start experimenting with Golang and Redis today to unlock new possibilities for your projects.