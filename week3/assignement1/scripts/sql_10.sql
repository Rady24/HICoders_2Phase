SELECT MAX(Years_employed) FROM Employees;
SELECT Role, AVG(Years_employed) FROM Employees GROUP BY Role;
SELECT Building, SUM(Years_employed) FROM Employees GROUP BY Building;
