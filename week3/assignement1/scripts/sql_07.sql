SELECT DISTINCT Building FROM Employees;
SELECT Building_name, Capacity FROM Buildings;
SELECT b.Building_name, e.Role
FROM Buildings b
LEFT JOIN Employees e ON b.Building_name = e.Building
GROUP BY b.Building_name, e.Role
ORDER BY b.Building_name;
