SELECT m.Title, (b.Domestic_sales + b.International_sales) / 1000000 AS Combined_sales_millions
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id;
SELECT m.Title, (b.Rating * 10) AS Rating_percent
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id;
SELECT Title, Year
FROM Movies
WHERE (Year % 2) = 0;
