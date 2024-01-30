1378. Replace Employee ID With The Unique Identifier

Table1: Employees
Table2: EmployeeUNI

Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the result table in any order.

# LEFT JOIN __ ON __
# ORDER BY __ ASC

Ans:
    SELECT EmployeeUNI.unique_id, Employees.name
    FROM
    Employees
    LEFT JOIN
    EmployeeUNI ON Employees.id = EmployeeUNI.id
    ORDER BY Employees.name ASC; 

1068. Product Sales Analysis I

Table1: Sales
Table2: Product

Write a solution to report the product_name, year, and price for each sale_id in the Sales table.

Return the resulting table in any order.


# LEFT JOIN __ ON __ 合併查詢 左、右資料表中相同資料 
# ORDER BY __ ASC

Ans:
    SELECT product_id, year, price
    FROM
    Sales
    LEFT JOIN
    Product
    ON Sales.product_id=Product.product_id
    ORDER BY year ASC;


1581. Customer Who Visited but Did Not Make Any Transactions

Table1: Visits
Table2: Transactions

Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.

Return the result table sorted in any order.

# COUNT
# AS
# LEFT JOIN __ ON __
# WHERE __ IS
# GROUP BY

Ans:
    SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans
    FROM Visits v
    LEFT JOIN 
    Transactions t
    ON v.visit_id=t.visit_id
    WHERE t.transation_id IS NULL
    GROUP BY v.customer_id;


197. Rising Temperature

Table: Weather

Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday).

Return the result table in any order.

# DATEDIFF
# WHERE
# AND

Ans:
    SELECT w1.id
    FROM
    Weather AS w1, Weather AS w2
    WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;


1661. Average Time of Process per Machine

Table: Activity

There is a factory website that has several machines each running the same number of processes. Write a solution to find the average time each machine takes to complete a process.

The time to complete a process is the 'end' timestamp minus the 'start' timestamp. The average time is calculated by the total time to complete every process on the machine divided by the number of processes that were run.

The resulting table should have the machine_id along with the average time as processing_time, which should be rounded to 3 decimal places.

# JOIN __ ON
# AND
# GROUP BY
# round
# avg

Ans:
    SELECT a1.machine_id, round(avg(a2.timestamp-a1.timestamp), 3) AS processing_time
    FROM
    Activity AS a1
    JOIN 
    Activity AS a2
    ON 
    a1.machine_id=a2.machine_id
    AND
    a1.process_id=a2.process_id
    AND
    a1.activity_type="start"
    AND
    a2.activity_type="end"
    GROUP BY
    a1.machine_id