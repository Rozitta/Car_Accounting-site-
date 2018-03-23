<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="yandex-verification"content="580ae254bbf502bf"/>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="<?php echo $new_description; ?>"> 
    <meta name="keywords" content="<?php echo $new_keywords; ?>"> 
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="12x12" href="./favicon/._favicon_mac12.png">
    <link rel="apple-touch-icon" sizes="32x32" href="./favicon/._favicon_mac32.png">
    <link rel="apple-touch-icon" sizes="48x48" href="./favicon/._favicon_mac48.png">
    <link rel="icon" type="image/png" href="./favicon/favicon12.png" sizes="12x12">
    <link rel="icon" type="image/png" href="./favicon/favicon32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="./favicon/favicon48.png" sizes="48x48">
    <!-- Owl carousel -->
    <link rel="stylesheet" href="./owlcarousel/owl.carousel.min.css">
    <!-- мои стили -->
    <link rel="stylesheet" href="./css/style.css">

    <!-- <title></title> -->
    <title><?php echo $title; ?></title>
</head>

<body>

    <header class="header">
        <div class=" container container--car_accounting">
            <div class="header-block">
                <div class="head">
                    <div class="navbar">
                        <a class="navbar__logo" href="index">
                            <img class="navbar__logo__img" src="./img/logo.png" alt="">
                            <span class="navbar__logo__name navbar__logo__name--white">gai-msk<span class="navbar__logo__name--color">.ru</span>
                            </span>
                        </a>
                        <nav class="navbar__menu">
                            <ul class="navbar__list">
                                <li class="navbar__items ">
                                    <a class="navbar__link navbar__link--grey " href="/" >Главная</a>
                                </li>
                                <li class="navbar__items">
                                    <a class="navbar__link navbar__link--grey" href="about_us" >О Нас</a>
                                </li>
                                <li class="navbar__items navbar__items--servise services_menu--plus">
                                    <a class="navbar__link navbar__link--servise navbar__link--grey ">Услуги</a>
                                    <ul class="submenu">
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="postanovka_na_uchyot">Постановка на учет </a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="snyatie_s_uchyota">Снятие с учета </a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="zamena_vosstanovlenie_pts_sts">Замена ПТС и СТС</a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="zamena_gos_nomerov">Замена гос. номеров</a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="izmenenie_registracionnyh_dannyh_sobstvennika_ts">Изменение регистрационных данных собственника</a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="dogovor_kupli_prodazhi">Договор купли-продажи</a>
                                        </li>
                                        <li class="submenu__items">
                                            <a class="submenu__link" href="osago">ОСАГО</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="navbar__items">
                                    <a class="navbar__link navbar__link--grey navbar__link--servise" href="reviews">Отзывы</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- <img class="navbar__burger" src="./img/burger_white.png" alt=""> -->
                    <span class="telephone telephone--pink">+7 925 067-20-68</span>
                </div>
            </div>
        </div>
    </header>

    <!-- шапка для планшетов и ниже и всплывающая менюшка -->
    <div class="head__tab">
        <div class=" head__tab--container">
            <div class="navbar navbar-tab">
                <a class="navbar__logo" href="index">
                    <img class="navbar__logo__img navbar__logo__img--width" src="./img/logo.png" alt="">
                    <span class="navbar__logo__name navbar__logo__name--white">gai-msk<span class="navbar__logo__name--color">.ru</span>
                    </span>
                </a>
                <img class="navbar__burger" src="./img/burger_white.png" alt="">
                <a href='tel:+79250672068' class="telephone telephone--pink">+7 925 067-20-68</a>
            </div>
            <div class="burger__menu">
                <div class="container">
                    <div class="burger__menu__contacts">
                        <div class="burger__menu__container">
                            <a href='tel:+79250672068' class="telephone burger__telephone--pink">+7 925 067-20-68</a>
                            <img class="burger__cross" src="./img/cross.png" alt="">
                        </div>
                    </div>
                    <ul class="burger__items">
                        <li class="burger__item">
                            <a class="burger__link" href="index">Главная</a>
                        </li>
                        <li class="burger__item">
                            <a class="burger__link" href="about_us">О нас</a>
                        </li>
                        <li class=" burger__items--servise ">
                            <a class="burger__link burger__link--submenu burger__menu--plus" href="#services">Услуги</a>
                            <ul class="submenu-tab">
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="postanovka_na_uchyot">Постановка на учет </a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="snyatie_s_uchyota">Снятие с учета </a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="zamena_vosstanovlenie_pts_sts">Замена ПТС и СТС</a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="zamena_gos_nomerov">Замена гос. номеров</a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="izmenenie_registracionnyh_dannyh_sobstvennika_ts">Изменение регистрационных
                                        <br> данных собственника</a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="dogovor_kupli_prodazhi">Договор купли-продажи</a>
                                </li>
                                <li class="submenu__items submenu__items-tab">
                                    <a class="submenu__link submenu__link-tab" href="osago">ОСАГО</a>
                                </li>
                            </ul>
                        </li>
                        <li class="burger__item">
                            <a class="burger__link" href="reviews">Отзывы</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
