CREATE TABLE customers (
    customer_id   NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    age           NUMBER
);
CREATE TABLE loans (
    loan_id        NUMBER PRIMARY KEY,
    customer_id    NUMBER,
    interest_rate NUMBER,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
select * from customers;
select * from loans;
INSERT INTO customers VALUES (1, 'John', 45);
INSERT INTO customers VALUES (2, 'Mary', 65);
INSERT INTO customers VALUES (3, 'David', 70);

INSERT INTO loans VALUES (101, 1, 10.0);
INSERT INTO loans VALUES (102, 2, 9.0);
INSERT INTO loans VALUES (103, 3, 11.0);
SET SERVEROUTPUT ON;
BEGIN
    FOR rec IN (
        SELECT cust.customer_id, cust.age, l.loan_id, l.interest_rate
        FROM customers cust
        JOIN loans l ON cust.customer_id = l.customer_id
    )
    LOOP
        IF rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate * 0.99  
            WHERE loan_id = rec.loan_id;

            DBMS_OUTPUT.PUT_LINE ('Updated interest for loan ID ' || rec.loan_id);
        END IF;
    END LOOP;
END;
/
SELECT * FROM loans;
