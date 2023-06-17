<?php

$conn = mysqli_connect('localhost', 'root', '', 'task3');

$sqlQuery = "SELECT Cart.idCart, Title, Description, AVG(Rating) as 'RatingAvg' 
FROM Cart
LEFT JOIN Rating ON Rating.idCart = Cart.idCart
GROUP BY Cart.idCart
ORDER BY RatingAvg DESC";

$result = mysqli_query($conn, $sqlQuery);
$carts = array();
while ($row = mysqli_fetch_assoc($result)) {
    $carts[] = $row;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Manrope:wght@500;700;800&display=swap"
          rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
    <title>Task3</title>
</head>

<body>
<main class="container-fluid">
    <div class="row">

        <div class="col-4 text_content">
            <h1 class="text_title">На что рассчитывать при взыскании неустойки по ДДУ?</h1>
            <p class="text_description">Когда застройщик нарушает сроки сдачи по ДДУ, вы как дольщик имеете право
                требовать неустойку за просрочку, а также компенсацию убытков, вызванных этой просрочкой.</p>
            <p class="text_description">Само собой, застройщику невыгодно добровольно выплачивать вам компенсацию. Когда
                дело доходит до суда, суд урезает сумму неустойки на основании ст. 333 ГК РФ. Это урезание практически
                неизбежно.</p>
            <p class="text_description">Основная наша задача состоит в том, чтобы взыскать неустойку по ДДУ в
                максимальном размере, т.е. избежать сильного ее урезания. Вот что вы можете требовать от
                застройщика.</p>
        </div>

        <div class="col accordion">
            <?php foreach ($carts as $value): ?>
                <div class="accordion_template">
                    <div class="accordion_item">

                        <div class="accordion_item_header">
                            <span class="accordion_title_item col-8"><?= $value['Title'] ?></span>
                            <div class="accordion_rate_item col-3">
                                <?php if ($value['RatingAvg'] != 0): ?>
                                    <img src="./src/img/starFill.svg" class="rate_icon" alt="rate">
                                    <span class="rate_lvl"><?= round($value['RatingAvg']) ?></span>
                                <?php endif; ?>
                            </div>
                            <img class="accordion_arrow_icon_item col-1" src="./src/img/arrow.svg" alt="arrow">
                        </div>
                        <div class="accordion_item_content">
                            <span class="accordion_item_description"><?= $value['Description'] ?></span>
                        </div>

                    </div>
                    <div class="accordion_rate" id="<?= $value['idCart'] ?>">
                        <img src="./src/img/starEmpty.svg" class="star" name="1">
                        <img src="./src/img/starEmpty.svg" class="star" name="2">
                        <img src="./src/img/starEmpty.svg" class="star" name="3">
                        <img src="./src/img/starEmpty.svg" class="star" name="4">
                        <img src="./src/img/starEmpty.svg" class="star" name="5">
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./src/script.js"></script>
<script src="./src/rating.js"></script>
</body>
</html>
