-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th12 05, 2021 lúc 03:35 AM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `laptrinhweb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_product`
--

CREATE TABLE `category_product` (
  `id` int(50) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_product`
--

INSERT INTO `category_product` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'LG', '2021-11-09', '2021-11-09'),
(2, 'SamSung', '2021-11-09', '2021-11-09'),
(3, '1', '2021-11-09', '2021-11-09'),
(4, 'Dell', '2021-11-09', '2021-11-09'),
(5, 'Macbook M1', '2021-11-09', '2021-11-09'),
(7, 'Macbook M2', '2021-11-09', '2021-11-09'),
(10, 'ThinkView', '2021-11-09', '2021-11-09'),
(13, 'HKT', '2021-11-09', '2021-11-09'),
(29, 'YUT456', '2021-11-10', '2021-11-10'),
(30, 'YUT78910', '2021-11-10', '2021-11-10'),
(31, 'YUT1231111', '2021-11-10', '2021-11-10'),
(32, 'IUYT', '2021-11-10', '2021-11-10'),
(33, '', '2021-11-21', '2021-11-21'),
(34, '', '2021-11-21', '2021-11-21'),
(35, 'Huawei', '2021-12-05', '2021-12-05'),
(36, 'Huawei1', '2021-12-05', '2021-12-05'),
(37, 'Huawei12', '2021-12-05', '2021-12-05'),
(38, 'Huawei12', '2021-12-05', '2021-12-05'),
(39, 'Huawei51', '2021-12-05', '2021-12-05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(50) NOT NULL,
  `user_id` int(50) NOT NULL,
  `new_id` int(50) NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `new_id`, `content`, `created_at`, `updated_at`) VALUES
(1, 2, 3, 'ban hang gi hai z', '2021-11-07', '2021-11-07'),
(2, 1, 2, 'ban hang gi hai z', '2021-11-07', '2021-11-07'),
(3, 0, 0, '', '0000-00-00', '0000-00-00'),
(4, 0, 0, '', '0000-00-00', '0000-00-00'),
(5, 123, 123, '123', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(50) NOT NULL,
  `is_show` int(50) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `user_id` int(50) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `is_show`, `created_at`, `updated_at`, `user_id`, `title`) VALUES
(1, 1, '2021-11-09', '2021-11-09', 12, 'hay lam ne '),
(5, 0, '2021-12-04', '2021-12-04', 123, ''),
(6, 0, '2021-12-05', '2021-12-05', 1, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `option`
--

CREATE TABLE `option` (
  `id` int(50) NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(255) NOT NULL,
  `quantity` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `option`
--

INSERT INTO `option` (`id`, `size`, `type`, `price`, `quantity`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'XL11', 'High', 20000, '1', 35, '2021-11-07', '2021-11-07'),
(2, '19 inch1', 'DELL latitude', 25000, '1', 36, '2021-11-07', '2021-11-07'),
(3, '19 inch1', 'DELL', 400000, '2', 37, '2021-11-07', '2021-11-07'),
(4, '21 inch', 'ACER', 250000, '5', 38, '2021-11-06', '2021-11-06'),
(5, '23 inch', 'ASUS', 400000, '10', 39, '2021-11-06', '2021-11-06'),
(6, '23 inch', 'HP', 40000000, '1', 1, '2021-12-05', '2021-12-05'),
(7, '25 inch', 'HKT', 800000, '14', 58, '2021-11-07', '2021-11-07'),
(8, '27 inch', 'ThinkView', 100000, '16', 1, '2021-11-07', '2021-11-07'),
(9, '27 inch', 'TKLink', 12000, '18', 1, '2021-11-07', '2021-11-07'),
(10, '27 inch', 'LinkNew', 1, '1', 1, '2021-12-05', '2021-12-05'),
(11, '19 inch', 'Dell', 400000, '2', 1, '2021-11-07', '2021-11-07'),
(12, '19 inch', 'Dell', 400000, '2', 1, '2021-11-07', '2021-11-07'),
(18, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(19, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(20, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(21, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(22, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(23, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(24, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(25, '123', '123123', 1, '1', 1, '2021-12-05', '2021-12-05'),
(26, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(27, '123', '', 213, '1231', 0, '2021-12-05', '2021-12-05'),
(28, '123', '', 123, '123', 0, '2021-12-05', '2021-12-05'),
(29, '123', '', 123, '123', 0, '2021-12-05', '2021-12-05'),
(30, '123', '', 123, '12', 0, '2021-12-05', '2021-12-05'),
(31, '123', '123', 123, '123', 0, '2021-12-05', '2021-12-05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `option_order`
--

CREATE TABLE `option_order` (
  `id` int(50) NOT NULL,
  `option_id` int(50) NOT NULL,
  `order_id` int(50) NOT NULL,
  `total` int(50) NOT NULL,
  `quantity` int(255) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `option_order`
--

INSERT INTO `option_order` (`id`, `option_id`, `order_id`, `total`, `quantity`, `updated_at`, `created_at`) VALUES
(1, 1, 1, 200000, 2, '0000-00-00', '2021-11-10'),
(2, 2, 2, 200000, 3, '0000-00-00', '2021-11-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` int(50) NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int(50) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(50) DEFAULT NULL,
  `status` int(50) DEFAULT NULL,
  `total_order` int(50) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `address`, `phone`, `name`, `user_id`, `status`, `total_order`, `updated_at`, `created_at`) VALUES
(1, '10234 cao lo ', 392349083, 'Duy Thinh', 1, 4, 100000, '2021-11-09', '2021-11-09'),
(2, '10234 cao lo ', 392349083, 'Duy Thinh', 1, 4, 100000, '2021-11-09', '2021-11-09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `Product_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_catergory_product` int(50) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `Product_name`, `image`, `description`, `id_catergory_product`, `created_at`, `updated_at`) VALUES
(35, 'Dell 36 inch', 'asset/IMG-619b58f55dee47.80724166.jpg', 'hay lam', 13, '2021-11-22', '2021-11-22'),
(36, 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 'asset/IMG-619fc7dcb5a6d5.72406758.png', 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 4, '2021-11-26', '2021-11-26'),
(37, 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 'asset/IMG-619fc804b52e06.05460454.png', 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 4, '2021-11-26', '2021-11-26'),
(38, 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 'asset/IMG-619fc816563da8.09047445.png', 'Màn Hình Dell S2721HN 27inch FHD (1920x1080) 4ms 75Hx IPS 300nits/HDMI+Audio/AMD FreeSync - Hàng Chính Hãng', 4, '2021-11-26', '2021-11-26'),
(39, 'Màn hình máy tính Dell P2319H 23\'\' FHD 60Hz', 'asset/IMG-619fc8c90fa723.02605680.jpg', 'Màn hình máy tính Dell P2319H 23\'\' FHD 60Hz', 4, '2021-11-26', '2021-11-26'),
(40, 'Màn hình máy tính LG LED 19.5\'\' HD 20MK400H-B  0 (0)  ', 'asset/IMG-61a634d6e452b4.66197760.jpg', 'Màn hình máy tính LG LED 19.5\'\' HD 20MK400H-B', 1, '2021-11-30', '2021-11-30'),
(43, 'Màn hình Samsung Odyssey G9 LC49G95TSSEXXV 49 inch/DualQHD/VA/240Hz/1ms/G-Sync/Cong', 'asset/IMG-61a9c01d6ee1a8.46464457.jpg', 'Màn hình Samsung Odyssey G9 LC49G95TSSEXXV 49 inch/DualQHD/VA/240Hz/1ms/G-Sync/Cong', 2, '2021-12-03', '2021-12-03'),
(44, 'Màn hình LCD Samsung LC24F390FHEXXV 23.5 inch FHD/60Hz/4ms', 'asset/IMG-61a9c0ec09d140.51541291.jpg', 'Màn hình LCD Samsung LC24F390FHEXXV 23.5 inch FHD/60Hz/4ms', 2, '2021-12-03', '2021-12-03'),
(45, 'Màn hình LCD Samsung LC24F390FHEXXV 23.5 inch FHD/60Hz/4ms', 'asset/IMG-61a9c3e7358974.34476557.jpg', 'Màn hình LCD Samsung LC24F390FHEXXV 23.5 inch FHD/60Hz/4ms', 2, '2021-12-03', '2021-12-03'),
(75, '123', 'asset/IMG-61ac22d9a4bb63.21188232.jpg', '123', 123, '2021-12-05', '2021-12-05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `review`
--

CREATE TABLE `review` (
  `count_start` int(50) NOT NULL,
  `product_id` int(50) NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(50) NOT NULL,
  `created_at` date NOT NULL,
  `id` int(50) NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `review`
--

INSERT INTO `review` (`count_start`, `product_id`, `content`, `user_id`, `created_at`, `id`, `updated_at`) VALUES
(5, 111, '22', 4, '2021-11-08', 1, '2021-11-08'),
(1123, 123, '123', 1, '2021-11-07', 3, '2021-11-07'),
(3123, 1123, '1231', 1312312, '2021-11-21', 4, '2021-11-21'),
(1121, 11212, '1121', 112, '2021-11-21', 5, '2021-11-21'),
(123, 123, '123', 1, '2021-11-08', 6, '2021-11-08'),
(123, 123, '123', 1, '2021-12-04', 7, '2021-12-04'),
(5, 1, 'hay lam', 1, '2021-12-05', 8, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 9, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 10, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 11, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 12, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 13, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 14, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 15, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 16, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 17, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 18, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 19, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 20, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 21, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 22, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 23, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 24, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 25, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 26, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 27, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 28, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 29, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 30, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 31, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 32, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 33, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 34, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 35, '2021-12-05'),
(5, 1, 'hay lam', 1, '2021-12-05', 36, '2021-12-05'),
(1123, 123, '123', 1, '2021-12-05', 37, '2021-12-05'),
(123, 123, '123', 123, '2021-12-05', 38, '2021-12-05'),
(123, 123, '123', 1, '2021-12-05', 39, '2021-12-05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `permission` int(50) NOT NULL,
  `full_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(255) NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_active` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `permission`, `full_name`, `address`, `name`, `phone`, `country`, `username`, `password`, `is_active`, `image`, `created_at`, `updated_at`) VALUES
(43, 2, 'Do Duy Thinh3', '', 'Thinh', 392349083, '', 'do.duythinh20@gmail.com', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 1, '', '2021-11-16', '2021-11-16'),
(44, 3, '123', '', '123', 123, '', '123', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '', '2021-12-05', '2021-12-05'),
(46, 1, 'Do Duy Thinh3', '', 'Thinh', 392349083, '', 'do.duythinh1@gmail.com', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 1, '', '2021-11-16', '2021-11-16');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `option`
--
ALTER TABLE `option`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `option_order`
--
ALTER TABLE `option_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category_product`
--
ALTER TABLE `category_product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `option`
--
ALTER TABLE `option`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `option_order`
--
ALTER TABLE `option_order`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT cho bảng `review`
--
ALTER TABLE `review`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
