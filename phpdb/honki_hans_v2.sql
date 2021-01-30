-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2021 at 02:31 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `honki`
--

-- --------------------------------------------------------

--
-- Table structure for table `discount_codes`
--

CREATE TABLE `discount_codes` (
  `sid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `dis_percentage` int(11) NOT NULL,
  `discount_code` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) NOT NULL,
  `capacity_limit` tinyint(1) NOT NULL DEFAULT 1,
  `capacity` int(11) NOT NULL DEFAULT 1,
  `create_memo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `discount_codes`
--

INSERT INTO `discount_codes` (`sid`, `title`, `dis_percentage`, `discount_code`, `created_at`, `created_by`, `capacity_limit`, `capacity`, `create_memo`) VALUES
(1, '75折', 75, '這應該要自動產生？待研究', '2021-01-30 21:17:56', 'laohanj', 1, 1, '測試折扣');

-- --------------------------------------------------------

--
-- Table structure for table `solar_terms`
--

CREATE TABLE `solar_terms` (
  `sid` int(11) NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `year` date NOT NULL,
  `solar_term` varchar(10) NOT NULL,
  `st_img` varchar(255) NOT NULL,
  `st_desc` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) NOT NULL,
  `last_modified_at` datetime NOT NULL DEFAULT current_timestamp(),
  `last_modified_by` varchar(50) NOT NULL,
  `last_mod_memo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `solar_terms`
--

INSERT INTO `solar_terms` (`sid`, `visible`, `year`, `solar_term`, `st_img`, `st_desc`, `created_at`, `created_by`, `last_modified_at`, `last_modified_by`, `last_mod_memo`) VALUES
(1, 1, '2020-03-05', '驚蜇', 'test.jpg', '動物昆蟲自入冬以來即藏伏土中，不飲不食，稱為「蟄」；到了這時天氣轉暖，大地春雷，而「驚蟄」即上天以打雷方式驚醒蟄居動物的冬眠。', '2021-01-30 19:32:39', 'laohanj', '2021-01-30 00:00:00', 'laohanj', '用 MySQL 直接輸入的資料。');

-- --------------------------------------------------------

--
-- Table structure for table `solar_term_books`
--

CREATE TABLE `solar_term_books` (
  `sid` int(11) NOT NULL,
  `visible` varchar(10) NOT NULL,
  `year` date NOT NULL,
  `solar_term_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `this_year_happened` text NOT NULL,
  `why_this_book` text NOT NULL,
  `related_link` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `editor_memo` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) NOT NULL,
  `last_modified_at` datetime NOT NULL DEFAULT current_timestamp(),
  `last_modified_by` varchar(50) NOT NULL,
  `last_mod_memo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `solar_term_books`
--

INSERT INTO `solar_term_books` (`sid`, `visible`, `year`, `solar_term_id`, `book_id`, `this_year_happened`, `why_this_book`, `related_link`, `editor_memo`, `created_at`, `created_by`, `last_modified_at`, `last_modified_by`, `last_mod_memo`) VALUES
(1, 'deleted', '2021-01-01', 1, 1, '測試節氣選書資料庫。', '測試節氣選書資料庫。', NULL, '測試節氣選書資料庫。', '2021-01-30 20:51:53', 'laohanj', '2021-01-30 20:51:53', '', '測試節氣選書資料庫。');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `discount_codes`
--
ALTER TABLE `discount_codes`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `solar_terms`
--
ALTER TABLE `solar_terms`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `solar_term_books`
--
ALTER TABLE `solar_term_books`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `discount_codes`
--
ALTER TABLE `discount_codes`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `solar_terms`
--
ALTER TABLE `solar_terms`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `solar_term_books`
--
ALTER TABLE `solar_term_books`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
