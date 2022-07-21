--
-- Database: `ins_school`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `member_id` smallint UNSIGNED NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birth_date` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` char(5) NOT NULL,
  `city` varchar(50) NOT NULL,
  `cellphone` char(14) DEFAULT NULL,
  `cellphone_father` char(14) DEFAULT NULL,
  `cellphone_mother` char(14) DEFAULT NULL,
  `phone` char(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `means_of_knowledge` enum('POSTER_FLYER','INTERNET','WORD_OF_MOUTH','ADVERTISING_PANEL') NOT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `last_name` (`last_name`,`first_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `first_name`, `last_name`, `birth_date`, `address`, `postal_code`, `city`, `cellphone`, `cellphone_father`, `cellphone_mother`, `phone`, `email`, `means_of_knowledge`) VALUES
(1, 'soraya', 'flores', '2007-02-15', '1 rue de Thiers', '63000', 'CLERMONT FERRAND', '', '', '06 64 62 23 53', '', '', 'INTERNET'),
(2, 'Marie-Laure', 'Teissandier', '1989-06-20', '1 rue des Tamaris', '63000', 'CLERMONT FERRAND', '01 43 67 49 88', '', '', '', 'mlt@gmail.com', 'INTERNET'),
(3, 'Maêva', 'Cordeiro', '1998-11-26', '1 avenue Jean Jaurès', '63170', 'Aubière', '06 68 09 68 15', '', '', '', '', 'WORD_OF_MOUTH'),
(4, 'Clémentine', 'Beaufrere', '1993-11-16', '2 avenue de la republique', '63400', 'Chamalières', '04 42 10 07 94', '', '', '', 'clem.b@gmail.com', 'WORD_OF_MOUTH'),
(5, 'BENOIT', 'THOMAS', '1983-04-17', '2 allée traversière', '63100', 'CLERMONT FERRAND', '06 27 20 64 73', '', '', '', 'benoit@hotmail.fr', 'WORD_OF_MOUTH'),
(6, 'ambre', 'batisse', '2000-11-23', '2 rue de la soie', '63000', 'clermont-', '06 30 16 58 76', '06 12 20 15 68', '06 16 03 15 87', '04 71 28 16 42', 'sand.b@hotmail.fr', 'WORD_OF_MOUTH'),
(7, 'Jolan', 'Chiesa', '1998-10-19', '2 rue lecuelle', '63670', 'LE CENDRE', '07 68 78 67 49', '06 52 71 08 91', '07 68 83 17 17', '', 'chie@sfr.fr', 'WORD_OF_MOUTH'),
(8, 'Mathis', 'Romeyer', '2000-07-29', '379 RUE D ALSACE', '63111', 'Dallet', '06 52 87 43 70', '', '06 14 48 70 58', '04 73 83 34 86', 'drom@gmail.com', 'WORD_OF_MOUTH'),
(9, 'LAURA', 'PINEDE', '1987-01-20', '138 rue Lamartine', '63110', 'BEAUMONT', '06 86 21 47 24', '', '', '', 'l.p@gmail.com', 'WORD_OF_MOUTH'),
(10, 'Anne', 'BOURGUET', '1982-01-22', '1 impasse de la halle', '63430', 'pont du-Chateau', '06 60 56 20 29', '', '', '', 'b.anne@hotmail.com', 'INTERNET'),
(11, 'bing', 'xiao', '1978-01-04', '3 RUE DES FRÈRES LUMIERE', '63000', 'Clermont-ferrand', '06 02 37 70 17', '', '', '', 'bi.xiaoo@yahoo.fr', 'WORD_OF_MOUTH'),
(12, 'judith', 'bertin', '2001-06-17', '96 RUE DES FRÈRES LUMIERE', '63122', 'Ceyrat', '07 80 71 08 23', '07 70 80 38 84', '06 00 74 06 31', '04 73 00 90 58', 'bertin@sfr.fr', 'WORD_OF_MOUTH'),
(13, 'Lisa', 'Vedel', '2009-01-11', '59 avenue du belvedere', '63100', 'CLERMONT FERRAND', '', '06 08 32 00 41', '07 86 63 00 20', '04 73 00 27 16', 'v.m@wanadoo.fr', 'WORD_OF_MOUTH'),
(14, 'Guerline', 'VEDEL', '2003-08-08', '53 chemin des près de roche', '63100', 'CLERMONT FERRAND', '', '06 08 32 00 41', '07 00 63 15 20', '04 00 91 27 16', 'v@wanadoo.fr', 'WORD_OF_MOUTH');

-- --------------------------------------------------------

--
-- Table structure for table `pre_registration`
--

DROP TABLE IF EXISTS `pre_registration`;
CREATE TABLE IF NOT EXISTS `pre_registration` (
  `pre_registration_id` smallint UNSIGNED NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birth_date` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` char(5) NOT NULL,
  `city` varchar(50) NOT NULL,
  `cellphone` char(14) DEFAULT NULL,
  `cellphone_father` char(14) DEFAULT NULL,
  `cellphone_mother` char(14) DEFAULT NULL,
  `phone` char(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `plan` enum('QUARTERLY','ANNUAL') DEFAULT NULL,
  `means_of_knowledge` enum('POSTER_FLYER','INTERNET','WORD_OF_MOUTH','ADVERTISING_PANEL') NOT NULL,
  PRIMARY KEY (`pre_registration_id`),
  KEY `last_name` (`last_name`,`first_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `pre_registration`
--

INSERT INTO `pre_registration` (`pre_registration_id`, `first_name`, `last_name`, `birth_date`, `address`, `postal_code`, `city`, `cellphone`, `cellphone_father`, `cellphone_mother`, `phone`, `email`, `plan`, `means_of_knowledge`) VALUES
(709, 'David', 'Lancelot', '1992-05-19', '1 rue sous les Cézeaux', '63000', 'Clermont-Ferrand', '', '', '', '', 'david@gmail.com', 'QUARTERLY', 'WORD_OF_MOUTH'),
(710, 'Benjamine', 'BENET', '2003-12-17', 'Résidence des augustins', '63170', 'Aubière', '07 00 12 86 90', '', '', '', 'benjnet23@gmail.com', NULL, 'INTERNET'),
(711, 'louis', 'gillet', '2014-08-01', '7 rue des Fontaines', '63119', 'chateaugay', '', '06 37 48 00 07', '06 33 30 40 97', '', 'bg.bg@gmail.com', 'QUARTERLY', 'INTERNET'),
(712, 'Laura', 'Hillairet', '2000-03-03', '41 Rue Gustave Flaubert', '63870', 'ORCINES', '06 00 08 82 75', '', '', '', 'laulae07@gmail.com', NULL, 'INTERNET'),
(715, 'Claire', 'Dinis', '1972-02-27', '88 place des 3 Fontaines', '63360', 'Gerzat', '06 63 72 00 11', '', '', '', 'clinis@gmail.com', NULL, 'INTERNET'),
(716, 'Fabrice', 'Stievenard', '1970-05-02', '1 Rue du 19 mars 1962Du Point Du Jour', '63300', 'Thiers', '', '', '', '', '', NULL, 'WORD_OF_MOUTH'),
(717, 'Elie', 'Dudek', '1999-11-06', '13 boulevard Gustave Flaubert', '63000', 'Clermont-Ferrand', '07 00 05 86 57', '', '', '', 'eliek@gmail.com', 'QUARTERLY', 'INTERNET'),
(718, 'chloé', 'botti', '1993-07-27', '31 AVENUE JOSEPH CLAUSSAT', '63000', 'CLERMONT FERRAND', '06 66 00 72 00', '', '', '', 'chloi@hotmail.fr', 'QUARTERLY', 'INTERNET'),
(719, 'Franck', 'TEISSEDRE', '1966-04-22', '11, rue du quartier', '63200', 'Le Cheix sur Morge', '06 98 00 63 00', '', '', '', 'fraedre@wanadoo.fr', NULL, 'INTERNET'),
(722, 'Chanelle', 'Geoffroy', '2014-10-29', '14 Rue maurice pourchon', '63000', 'Clermont-Ferrand', '', '07 00 73 11 31', '07 00 27 18 61', '09 00 80 81 61', 'min1@gmail.com', NULL, 'INTERNET'),
(723, 'DELPHINE', 'CHAIZE', '1989-05-06', '16 boulevard du Général Crochet', '63400', 'Chamalières', '06 75 47 87 00', '', '', '', 'chaine@gmail.com', NULL, 'INTERNET'),
(724, 'Charlotte', 'Faury', '1995-07-27', '25 avenue du Point Du Jour', '63400', 'Chamalieres', '06 70 00 14 82', '', '', '', 'charloy@gmail.com', 'QUARTERLY', 'INTERNET');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `room_id` tinyint UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` char(5) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `name`, `address`, `postal_code`, `city`) VALUES
(1, 'Salle du Temps', '29 Rue Jules Verne', '63100', 'Clermont-Ferrand'),
(2, 'Salle Afrika Bambaataa', '29 Rue Jules Verne', '63100', 'Clermont-Ferrand'),
(3, 'Studio M.A.0', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `teacher_id` tinyint UNSIGNED NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postal_code` char(5) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `cellphone` char(14) DEFAULT NULL,
  `phone` char(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `absences` tinyint UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `first_name`, `last_name`, `birth_date`, `address`, `postal_code`, `city`, `cellphone`, `phone`, `email`, `absences`) VALUES
(2, 'Djamel', 'Dahak', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(3, 'Deem', 'Manebard', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(4, 'Mariel', 'Fikat', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(5, 'Eve', 'H', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(7, 'Sophie & Hervé', 'Babin', NULL, '', '', '', '', '', '', 0),
(13, 'Sophie', 'Babin', NULL, '', '', '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(24) NOT NULL,
  `password` char(128) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `isAdmin`) VALUES
(1, 'admin', '$2b$10$ZokJC9PwVGrCXqVo.ublZO7xpSgkmkTPgNJ6LoXDXnzz5QmqRKjm2', 1),
(2, 'djam', '$2b$10$ZokJC9PwVGrCXqVo.ublZO7xpSgkmkTPgNJ6LoXDXnzz5QmqRKjm2', 0),
(3, 'Ophelie', '$2b$10$ZokJC9PwVGrCXqVo.ublZO7xpSgkmkTPgNJ6LoXDXnzz5QmqRKjm2', 0),
(4, 'o.c@test.fr', '$2b$10$ZokJC9PwVGrCXqVo.ublZO7xpSgkmkTPgNJ6LoXDXnzz5QmqRKjm2', 1);
COMMIT;