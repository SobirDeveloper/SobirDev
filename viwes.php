<?php
$file = 'views.json'; // JSON faylini o'qing
$data = json_decode(file_get_contents($file), true);

// Ko'rishlar sonini oshiring
$data['views'] += 1;

// Yangi ko'rishlar sonini faylga yozing
file_put_contents($file, json_encode($data));

// Yangi ko'rishlar sonini JSON formatida qaytarish
echo json_encode($data);
?>
