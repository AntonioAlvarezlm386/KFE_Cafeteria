INSERT INTO KFE_CafeteriaDB.roles (name) VALUES
	 ('ADMIN'),
	 ('VENDOR');
	 
	 
INSERT INTO KFE_CafeteriaDB.users (first_name,last_name,access_key,password,createdAt,updatedAt,roleId) VALUES
	 ('jane','doe','b4863','$2a$10$9Je1LB2FXq5cUK4ZlSLvMO2D.w0Ayoq/G07xidV7GptWSFktx4v2S','2024-04-20 23:13:14','2024-04-20 23:13:15',2),
	 ('john','doe','e703a','$2a$10$zw3hi.hU58C5wO8lFqsNmuvCsBRLA9O7HRTYKSs3qE1nLbpQ0VAeC','2024-04-20 23:13:36','2024-04-20 23:13:36',1);
	 
	 
INSERT INTO KFE_CafeteriaDB.categories (name) VALUES
	 ('Bebidas Calientes'),
	 ('Bebidas Frias'),
	 ('Postres'),
	 ('Bocadillos'),
	 ('Extras');
	 
	 
INSERT INTO KFE_CafeteriaDB.products (name,price,availability,createdAt,updatedAt,categoryId) VALUES
	 ('Café Americano',49.99,1,'2024-04-20 03:27:21','2024-04-20 03:27:21',1),
	 ('Café Espresso',49.99,1,'2024-04-20 03:29:21','2024-04-20 03:29:21',1),
	 ('Café Latte',49.99,1,'2024-04-20 03:29:31','2024-04-20 03:29:31',1),
	 ('Cappuccino',74.99,1,'2024-04-20 03:30:01','2024-04-20 03:30:01',1),
	 ('Mocha',64.99,1,'2024-04-20 03:30:21','2024-04-20 03:30:21',1),
	 ('Macchiato',50.99,1,'2024-04-20 03:30:44','2024-04-20 03:30:44',1),
	 ('Té Negro',39.99,1,'2024-04-20 03:31:11','2024-04-20 03:31:11',1),
	 ('Té Verde',39.99,1,'2024-04-20 03:31:21','2024-04-20 03:31:21',1),
	 ('Té Chai Latte',57.99,1,'2024-04-20 03:31:58','2024-04-20 03:31:58',1),
	 ('Café Helado',37.99,1,'2024-04-20 03:32:35','2024-04-20 03:32:35',2);
INSERT INTO KFE_CafeteriaDB.products (name,price,availability,createdAt,updatedAt,categoryId) VALUES
	 ('Té Helado',34.99,1,'2024-04-20 03:33:16','2024-04-20 03:33:16',2),
	 ('Frappé de Café',52.99,1,'2024-04-20 03:33:39','2024-04-20 03:33:39',2),
	 ('Frappé de Chocolate',84.99,1,'2024-04-20 03:34:07','2024-04-20 03:34:07',2),
	 ('Frappé de Frutas',77.99,1,'2024-04-20 03:34:25','2024-04-20 03:34:25',2),
	 ('Smoothie de Frutas',89.99,1,'2024-04-20 03:34:58','2024-04-20 03:34:58',2),
	 ('Limonada Natural',29.99,1,'2024-04-20 03:35:23','2024-04-20 03:35:23',2),
	 ('Browni',99.99,1,'2024-04-20 03:36:21','2024-04-20 03:36:21',3),
	 ('Cheesecake',89.99,1,'2024-04-20 03:36:38','2024-04-20 03:36:38',3),
	 ('Tarta de Zanahoria',104.99,1,'2024-04-20 03:37:05','2024-04-20 03:37:05',3),
	 ('Galletas Caseras',74.99,1,'2024-04-20 03:37:28','2024-04-20 03:37:28',3);
INSERT INTO KFE_CafeteriaDB.products (name,price,availability,createdAt,updatedAt,categoryId) VALUES
	 ('Croissants de Chocolate',107.99,1,'2024-04-20 03:37:54','2024-04-20 03:37:54',3),
	 ('Donas',67.99,1,'2024-04-20 03:38:09','2024-04-20 03:38:09',3),
	 ('Magdalenas',72.99,1,'2024-04-20 03:38:27','2024-04-20 03:38:27',3),
	 ('Pastel de manzana',97.95,1,'2024-04-20 03:39:19','2024-04-20 03:39:19',3),
	 ('Sśndwich de Pollo',75.95,1,'2024-04-20 03:40:55','2024-04-20 03:40:55',4),
	 ('Sśndwich Vegetariano',92.95,1,'2024-04-20 03:41:22','2024-04-20 03:41:22',4),
	 ('Paninis de Jamón y Queso',109.95,1,'2024-04-20 03:41:49','2024-04-20 03:41:49',4),
	 ('Wraps de Pavo',112.95,1,'2024-04-20 03:42:10','2024-04-20 03:42:10',4),
	 ('Bagels con Salmon',123.95,1,'2024-04-20 03:42:35','2024-04-20 03:42:35',4),
	 ('roissants de Jamón y Queso',99.95,1,'2024-04-20 03:43:08','2024-04-20 03:43:08',4);
INSERT INTO KFE_CafeteriaDB.products (name,price,availability,createdAt,updatedAt,categoryId) VALUES
	 ('Sándwich de Atún',78.95,1,'2024-04-20 03:43:34','2024-04-20 03:43:34',4),
	 ('Chips de Tortilla',85.95,1,'2024-04-20 03:44:12','2024-04-20 03:44:12',5),
	 ('Palitos de Zanahoria y Apio con Hummus',134.95,1,'2024-04-20 03:44:43','2024-04-20 03:44:43',5),
	 ('Patatas Fritas',102.95,1,'2024-04-20 03:45:02','2024-04-20 03:45:02',5),
	 ('Nachos con Queso',125.95,1,'2024-04-20 03:45:23','2024-04-20 03:45:23',5),
	 ('Frutos Secos Variados',89.99,1,'2024-04-20 03:45:47','2024-04-20 03:45:47',5);
	 

INSERT INTO KFE_CafeteriaDB.sales (total,createdAt,updatedAt,userId) VALUES
	 (197.53,'2024-04-21 18:34:59','2024-04-13 18:34:59',1),
	 (518.9,'2024-04-21 18:36:07','2024-04-15 18:36:07',1),
	 (631.8,'2024-04-21 18:38:43','2024-04-18 18:38:43',1),
	 (451.92,'2024-04-21 18:42:47','2024-04-21 18:42:47',1);


INSERT INTO KFE_CafeteriaDB.sales_details (items,unit_price,subtotal,productId,saleId) VALUES
	 (2,49.99,99.98,2,1),
	 (4,49.99,199.96,2,4),
	 (2,50.99,101.98,6,3),
	 (2,50.99,101.98,6,4),
	 (3,89.99,269.96,15,2),
	 (3,74.99,224.96,20,3),
	 (2,74.99,149.98,20,4),
	 (1,97.95,97.95,24,1),
	 (2,112.95,225.9,28,3),
	 (1,78.95,78.95,31,3);
INSERT INTO KFE_CafeteriaDB.sales_details (items,unit_price,subtotal,productId,saleId) VALUES
	 (2,125.95,251.9,35,2);