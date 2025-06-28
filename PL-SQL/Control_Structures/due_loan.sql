CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name        VARCHAR2(100)
);
CREATE TABLE loans (
    loan_id     NUMBER PRIMARY KEY,
    customer_id NUMBER,
    due_date    DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
BEGIN
    INSERT INTO customers VALUES (1, 'Alice');
    INSERT INTO customers VALUES (2, 'Bob');
    INSERT INTO customers VALUES (3, 'Charlie');
    INSERT INTO loans VALUES (101, 1, TO_DATE ('03-JUL-2025', 'DD-MON-YYYY'));
    INSERT INTO loans VALUES (102, 2, TO_DATE ('13-JUL-2025', 'DD-MON-YYYY'));
    INSERT INTO loans VALUES (103, 3, TO_DATE ('12-AUG-2025', 'DD-MON-YYYY'));
END;
/
SET SERVEROUTPUT ON;
BEGIN
    FOR loan_rec IN (
        SELECT l.loan_id, l.customer_id, l.due_date, c.name
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE (
            'Reminder: Dear ' || loan_rec.name || 
            ', your loan (ID: ' || loan_rec.loan_id || 
            ') is due on ' || TO_CHAR (loan_rec.due_date, 'DD-MON-YYYY') || '.'
        );
    END LOOP;
END;
/
SELECT * FROM loans;
