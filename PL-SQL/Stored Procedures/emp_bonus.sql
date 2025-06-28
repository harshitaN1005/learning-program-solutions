CREATE TABLE employees (
    emp_id   NUMBER PRIMARY KEY,
    dept_id  NUMBER,
    salary   NUMBER
);

INSERT INTO employees VALUES (101, 10, 50000);
INSERT INTO employees VALUES (102, 20, 60000);
INSERT INTO employees VALUES (103, 10, 55000);
INSERT INTO employees VALUES (104, 30, 70000);
COMMIT;

CREATE OR REPLACE PROCEDURE updateEmployeeBonus (
    update_dept_id IN NUMBER,
    update_bonus IN NUMBER
)
IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * update_bonus / 100)
    WHERE dept_id = update_dept_id;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || update_dept_id);
END;
/

SET SERVEROUTPUT ON;

BEGIN
    updateEmployeeBonus(10, 10);
END;
/

SELECT * FROM employees;
