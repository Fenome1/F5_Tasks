<?php
$conn = mysqli_connect('localhost', 'root', '', 'task3');

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["idCart"]) && isset($_POST["rating"])) {
    $idCart = intval($_POST["idCart"]);
    $rating = intval($_POST["rating"]);

    $updateQuery = "INSERT INTO Rating (idCart, Rating) VALUES ($idCart, $rating)";

    mysqli_query($conn, $updateQuery);

}

?>
