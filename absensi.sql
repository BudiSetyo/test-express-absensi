-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2023 at 02:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `absensi`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `userId`, `date`, `time`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 26, '2023-04-12', '08:30:00', 'hadir', '2023-05-16 13:13:56', '2023-05-16 13:13:56'),
(2, 26, '2023-04-13', '08:30:00', 'hadir', '2023-05-16 13:16:51', '2023-05-16 13:16:51'),
(3, 26, '2023-04-14', '09:30:00', 'terlambat', '2023-05-16 13:17:04', '2023-05-16 13:17:04'),
(8, 26, '2023-05-16', '00:00:00', 'tidak hadir', '2023-05-16 15:13:15', '2023-05-16 15:13:15'),
(10, 26, '2023-05-17', '00:00:00', 'tidak hadir', '2023-05-16 19:07:46', '2023-05-16 19:07:46'),
(11, 26, '2023-04-14', '09:30:00', 'terlambat', '2023-05-17 05:16:31', '2023-05-17 05:16:31'),
(12, 27, '2023-05-17', '14:23:47', 'terlambat', '2023-05-17 07:23:50', '2023-05-17 07:23:50'),
(13, 31, '2023-05-17', '00:00:00', 'tidak hadir', '2023-05-17 09:20:04', '2023-05-17 09:20:04'),
(14, 25, '2023-05-17', '00:00:00', 'tidak hadir', '2023-05-17 09:20:26', '2023-05-17 09:20:26'),
(15, 34, '2023-05-17', '00:00:00', 'tidak hadir', '2023-05-17 09:57:28', '2023-05-17 09:57:28'),
(16, 36, '2023-05-17', '17:31:49', 'terlambat', '2023-05-17 10:31:49', '2023-05-17 10:31:49'),
(17, 26, '2023-05-18', '06:27:44', 'hadir', '2023-05-17 23:27:46', '2023-05-17 23:27:46');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(2, '20220930134854_create-table-user.js', 1, '2023-05-15 19:17:02'),
(3, '20230515193051_create-table-history.js', 2, '2023-05-15 19:36:15');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nik` varchar(255) NOT NULL COMMENT 'Nik is unique',
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nik`, `password`, `name`, `role`, `createdAt`, `updatedAt`) VALUES
(25, '7820', '$2b$10$c059TxazZfcgkIPHsyHwROaYo0yMP5InssdruV9Vh1oN0NoixGjvK', 'Komang Raden', 'admin', '2023-05-16 07:15:49', '2023-05-16 07:15:49'),
(26, '7821', '$2b$10$5Jom7UCQjLbdqsPsRAyAKeHhXA.iwvP2DDHhapsVRA.hylTttPJRS', 'Sagalih', 'user', '2023-05-16 07:59:53', '2023-05-16 07:59:53'),
(27, '0432', '$2b$10$FjbZCJWDBvl320HuOVdckevETdI5Jzilef3jIl8ymrtGDQNa4.naC', 'Dias L', 'user', '2023-05-16 08:01:38', '2023-05-16 08:01:38'),
(34, '7654', '$2b$10$WwTevgZb23sEgcp8q4K4Geh1Un6XPIiON416LCcWWFbNqg/9s5z0C', 'Karsina', 'user', '2023-05-17 09:56:02', '2023-05-17 09:56:02'),
(37, '4532', '$2b$10$hiDlCcPb9bZPjUb6Lb2T4OW7Lf.SKKI98IxRN6BKNdvyWZdZgFgya', 'Rangga Sugi', 'user', '2023-05-17 23:34:07', '2023-05-17 23:34:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_nik_unique` (`nik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
