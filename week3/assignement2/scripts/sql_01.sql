SELECT * from inhabitant;
SELECT * from inhabitant WHERE state = 'friendly';
SELECT * from inhabitant WHERE state = 'friendly' AND job = 'weaponsmith';
SELECT * FROM inhabitant WHERE job LIKE '%smith'AND state = 'friendly';
SELECT personid from inhabitant WHERE name = 'Stranger';
SELECT gold from inhabitant WHERE name = 'Stranger';
SELECT * from ITEM WHERE owner IS NULL;
UPDATE item SET owner = 20 WHERE owner IS NULL;
SELECT * FROM ITEM WHERE owner = 20;
SELECT * FROM INHABITANT WHERE state = "friendly" AND job = "dealer" OR job = "merchant";
UPDATE item SET owner = 15 WHERE item = "ring"OR item = "teapot";
UPDATE inhabitant SET name = "Nick Singh" WHERE personid = 20;
SELECT * FROM inhabitant WHERE job = "baker" ORDER BY gold DESC;
SELECT * FROM inhabitant WHERE job = "pilot";
SELECT inhabitant.name FROM village, inhabitant WHERE village.chief = inhabitant.personid AND village.name = "Onionville";
SELECT name FROM inhabitant WHERE villageid = 3 AND gender = "f";
SELECT SUM(inhabitant.gold) FROM inhabitant WHERE job = "baker" OR job = "dealer" OR job = "merchant";
SELECT state, AVG(inhabitant.gold)FROM inhabitantGROUP BY stateORDER BY AVG(inhabitant.gold);
DELETE FROM inhabitant WHERE name = "Dirty Diane";
UPDATE inhabitant SET state = "friendly"
WHERE state = "kidnapped";
UPDATE inhabitant SET state = 'emigrated' WHERE personid = 20;
