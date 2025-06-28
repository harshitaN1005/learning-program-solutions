CREATE TABLE accounts (
    account_id     NUMBER PRIMARY KEY,
    account_type   VARCHAR2(20),
    balance        NUMBER
);

INSERT INTO accounts VALUES (1, 'SAVINGS', 1000);
INSERT INTO accounts VALUES (2, 'CURRENT', 2000);
INSERT INTO accounts VALUES (3, 'SAVINGS', 1500);
INSERT INTO accounts VALUES (4, 'SAVINGS', 3000);


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE accounts
    SET balance = balance * 5
    WHERE account_type = 'SAVINGS';
    dbms_output.put_line('balances updated');
END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/

select * from accounts where account_type = 'SAVINGS';
