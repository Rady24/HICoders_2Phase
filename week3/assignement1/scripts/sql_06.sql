SELECT m.Id, m.Title, b.Domestic_sales, b.International_sales
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id;
SELECT m.Id, m.Title, b.Domestic_sales, b.International_sales
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id
WHERE b.International_sales > b.Domestic_sales;
SELECT m.Id, m.Title, b.Rating
FROM Movies m
JOIN Boxoffice b ON m.Id = b.Movie_id
ORDER BY b.Rating DESC;
