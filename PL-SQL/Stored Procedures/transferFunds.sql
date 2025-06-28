CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    balance    NUMBER
);
INSERT INTO accounts VALUES (101, 5000);
INSERT INTO accounts VALUES (102, 3000);
INSERT INTO accounts VALUES (103, 1000);
select * from accounts;
CREATE OR REPLACE PROCEDURE transferFunds (
    src_id   IN NUMBER,
    dest_id IN NUMBER,
    amt      IN NUMBER
)
IS
    v_source_balance NUMBER;
BEGIN
    SELECT balance INTO v_source_balance
    FROM accounts
    WHERE account_id = src_id;
    IF v_source_balance >= amt THEN
        UPDATE accounts
        SET balance = balance - amt
        WHERE account_id = src_id;

        UPDATE accounts
        SET balance = balance + amt
        WHERE account_id = dest_id;

        DBMS_OUTPUT.PUT_LINE ('Transfer of Rs. ' || amt || ' completed from ' || src_id || ' to ' || dest_id);
    ELSE
        RAISE_APPLICATION_ERROR (-20001, 'Maintain enough balance in source account.');
    END IF;
END;
/
SET SERVEROUTPUT ON;
BEGIN
    transferFunds (101, 102, 2000); 
END;
/
SELECT * FROM accounts;
