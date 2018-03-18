# Neo4J Employee Application using Node.js Express

![alt text](https://github.com/Merlion23/Neo4JEmployeeTest/blob/EMP1.0/img/screen.png)

## Objectives and Tasks
1. Create an Employee node that will take 2 params - a String and an int. The String value will populate the name property of the new Employee node, the int value will populate the emp_id value. 

2. Return all Employee nodes to a client. 

3. Check your code into a github repo along with instructions on how to set up/use the API. 

4. Include instructions on how to use it in the README.md file in the github repo. 

5. Develop a simple UI that can be used directly from the web browser to drive the API.

6. Deploy your app along with a Neo4J instance to an AWS EC2 instance (or any other cloud).

## Stack
* Neo4j Bolt JavaScript Driver
* Neo4j
* Node.js
* HTML Forms

## Instructions and notes on app

1. The Employee node was created using the Neo4j CSV load command :
 
```LOAD CSV WITH HEADERS FROM 'https://raw.githubusercontent.com/Merlion23/Neo4JEmployeeTest/EMP1.0/data/employees.csv' AS line
 CREATE (n:Employees { name: line.name, emp_id: toInteger(line.emp_id)})
 RETURN n.name AS name, n.emp_id AS emp_id 
 ```
Data File Path : https://github.com/Merlion23/Neo4JEmployeeTest/data/employees.csv

2. To access Employee data from a Client, use the following URL

**Neo4j Browser** : http://ec2-34-228-20-122.compute-1.amazonaws.com:7474/browser/
username: neo4j password: admin

**Web Browser** : http://ec2-34-228-20-122.compute-1.amazonaws.com:3000/

3. **Github repository** : https://github.com/Merlion23/Neo4JEmployeeTest/tree/EMP1.0

File path:
package.json : https://github.com/Merlion23/Neo4JEmployeeTest/package.json
Main : https://github.com/Merlion23/Neo4JEmployeeTest/src/app.js
UI : https://github.com/Merlion23/Neo4JEmployeeTest/src/views/index.ejs

## Instructions on usage

Browse to http://ec2-34-228-20-122.compute-1.amazonaws.com:3000/ to access application

On page load, the application lists all the employess and the their respective ids on the page.
When a new employee record with the id is created, the new record will written to the Neo4j Employee node and the result returned to the client

## AWS
Neo4j community edition had been deployed on an EC2 instance : ec2-34-228-20-122.compute-1.amazonaws.com
In addition, Node.js, NPM (ver 6.11.5) and Nodemon (ver 1.17.2) have been installed in the said environment. Nodemon is currently active to monitor for any changes in the node.js application.
