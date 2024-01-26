SELECT COUNT(*) FROM Employees WHERE Role = 'Artist';
SELECT Role, COUNT(*) FROM Employees GROUP BY Role;
SELECT SUM(Years_employed) FROM Employees WHERE Role = 'Engineer';
