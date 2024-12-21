<?php
$file = 'views.json';
$data = json_decode(file_get_contents($file), true);
$data['views'] += 1;
file_put_contents($file, json_encode($data));
echo $data['views'];
?>
S