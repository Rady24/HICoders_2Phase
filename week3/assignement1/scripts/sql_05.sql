SELECT City, Population FROM north_american_cities WHERE Country = 'Canada';
SELECT City FROM north_american_cities WHERE Country = 'United States' ORDER BY Latitude DESC;
SELECT city, longitude FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;
SELECT City FROM north_american_cities WHERE Country = 'Mexico' ORDER BY Population DESC LIMIT 2;
SELECT City, Population FROM north_american_cities WHERE Country = 'United States' ORDER BY Population DESC LIMIT 2 OFFSET 2;
