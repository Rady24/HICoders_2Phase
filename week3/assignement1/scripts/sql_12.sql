SELECT Director, COUNT(*) AS Number_of_Movies
FROM Movies
GROUP BY Director;
SELECT m.Director, SUM(b.Domestic_sales + b.International_sales) AS Total_Sales
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id
GROUP BY m.Director;

