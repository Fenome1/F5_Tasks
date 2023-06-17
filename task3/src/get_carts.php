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

<?php foreach ($carts as $value): ?>
    <div class="accordion_template">
        <div class="accordion_item">

            <div class="accordion_item_header">
                <span class="accordion_title_item col-8"><?= $value['Title'] ?></span>
                <div class="accordion_rate_item col-3">
                    <?php if ($value['RatingAvg'] != 0): ?>
                        <img src="../src/img/starFill.svg" class="rate_icon" alt="rate">
                        <span class="rate_lvl"><?= round($value['RatingAvg']) ?></span>
                    <?php endif; ?>
                </div>
                <img class="accordion_arrow_icon_item col-1" src="../src/img/arrow.svg" alt="arrow">
            </div>
            <div class="accordion_item_content">
                <span class="accordion_item_description"><?= $value['Description'] ?></span>
            </div>

        </div>
        <div class="accordion_rate" id="<?= $value['idCart'] ?>">
                <img src="../src/img/starEmpty.svg" class="star" name="1">
                <img src="../src/img/starEmpty.svg" class="star" name="2">
                <img src="../src/img/starEmpty.svg" class="star" name="3">
                <img src="../src/img/starEmpty.svg" class="star" name="4">
                <img src="../src/img/starEmpty.svg" class="star" name="5">
        </div>
    </div>
<?php endforeach; ?>
<script src="../src/script.js"></script>
<script src="../src/rating.js"></script>
