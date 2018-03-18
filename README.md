# Neo4J Employee Application using Node.js Express

![alt text](https://github.com/Merlion23/Neo4JEmployeeTest/blob/EMP1.0/img/screen.png)

## Objectives
1. Create an Employee node that will take 2 params - a String and an int. The String value will populate the name property of the new Employee node, the int value will populate the emp_id value. 

2. Return all Employee nodes to a client. 

3. Check your code into a github repo along with instructions on how to set up/use the API. 

4. include instructions on how to use it in the README.md file in the github repo. 

5. Develop a simple UI that can be used directly from the web browser to drive the API.

6. Deploy your app along with a Neo4J instance to an AWS EC2 instance  (or any other cloud) so that we can see it in action without going through the setup process.

## Stack
* Neo4j Bolt JavaScript Driver
* Neo4j
* HTML Forms

## Instructions and notes on app

1. The Employee node was created using the Neo4j CSV load command :
 
```LOAD CSV WITH HEADERS FROM 'https://raw.githubusercontent.com/Merlion23/Neo4JEmployeeTest/EMP1.0/data/employees.csv' AS line
 CREATE (n:Employees { name: line.name, emp_id: toInteger(line.emp_id)})
 RETURN n.name AS name, n.emp_id AS emp_id 
 ```
Data File Path : https://github.com/Merlion23Neo4JEmployeeTest/data/employees.csv

