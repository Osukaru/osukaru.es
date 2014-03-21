<?php
if ($_GET['randomId'] != "DbevkPqgOqssZrZE29uWgNAzx4svKnjiOlBbMrpr10iGWS5Sv3EvkO4k_LwV3eIv") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
