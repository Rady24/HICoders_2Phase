SELECT * FROM movies WHERE id=6;
SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010;
SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010;
SELECT Id, Title, Year FROM movies ORDER BY Year ASC LIMIT 5;