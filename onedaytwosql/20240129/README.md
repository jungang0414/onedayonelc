1757. Recyclable and Low Fat Products

Table: Products

Write a solution to find the ids of products that are both low fat and recyclable.

Return the result table in any order.

The result format is in the following example.

Ans:
    SELECT product_id FROM Products
    WHERE 
    low_fats="Y" 
    AND
    recyclable ="Y";


595. Big Countries

Table: World

it has an area of at least three million (i.e., 3000000 km2), or
it has a population of at least twenty-five million (i.e., 25000000).

Write a solution to find the name, population, and area of the big countries.

Return the result table in any order.

The result format is in the following example.

Ans:
    SELECT name, population, area FROM World
    WHERE
    area >= 3000000
    or
    population >= 25000000;


1148. Article Views I

Table: Views

Write a solution to find all the authors that viewed at least one of their own articles.

Return the result table sorted by id in ascending order.

The result format is in the following example.

Ans:
    SELECT DISTINCT article_id as id FROM table
    WHERE
    author_id = viewer_id
    ORDER BY id ASC;

# DISTINCT 過濾重複資料
# ASC 升冪排序

1683. Invalid Tweets

Table: Tweets

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.

Return the result table in any order.

The result format is in the following example.

Ans:
    SELECT tweet_id FROM Tweets
    WHERE
    length(content) > 15
    ORDER BY tweet_id ASC;