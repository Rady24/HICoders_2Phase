SELECT Name, Role FROM Employees WHERE Building IS NULL OR Building = '';
SELECT b.Building_name
FROM Buildings b
LEFT JOIN Employees e ON b.Building_name = e.Building
GROUP BY b.Building_name
HAVING COUNT(e.Name) = 0;
