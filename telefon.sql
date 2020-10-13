-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Paź 2020, 15:54
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `telefon`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `archiwum`
--

CREATE TABLE `archiwum` (
  `id` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `data` date NOT NULL,
  `notatka` text NOT NULL,
  `numer_telefonu` int(11) NOT NULL,
  `numer_zamowienia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `archiwum`
--

INSERT INTO `archiwum` (`id`, `imie`, `nazwisko`, `data`, `notatka`, `numer_telefonu`, `numer_zamowienia`) VALUES
(7, 'Jakub', 'Kowalski', '2222-02-02', 'OBY DZIALALO', 997998999, 1234567890);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `informacje_o_kliencie`
--

CREATE TABLE `informacje_o_kliencie` (
  `id` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `data` date NOT NULL,
  `notatka` text NOT NULL,
  `numer_telefonu` int(11) NOT NULL,
  `numer_zamowienia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `informacje_o_kliencie`
--

INSERT INTO `informacje_o_kliencie` (`id`, `imie`, `nazwisko`, `data`, `notatka`, `numer_telefonu`, `numer_zamowienia`) VALUES
(8, 'Jakub', 'Kowalski', '2222-02-02', 'OBY DZIALALO', 997998999, 1234567890),
(9, 'Jakub', 'Kowalski', '2222-02-02', 'OBY DZIALALO', 997998999, 1234567890),
(10, 'Jakub', 'Kowalski', '2222-02-02', 'OBY DZIALALO', 997998999, 1234567890),
(11, 'Jakub', 'Kowalski', '2222-02-02', 'OBY DZIALALO', 997998999, 1234567890);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `archiwum`
--
ALTER TABLE `archiwum`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `informacje_o_kliencie`
--
ALTER TABLE `informacje_o_kliencie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `archiwum`
--
ALTER TABLE `archiwum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT dla tabeli `informacje_o_kliencie`
--
ALTER TABLE `informacje_o_kliencie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
