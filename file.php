<?php
// JSON লিংকটি নির্দিষ্ট করুন
$json_url = "https://raw.githubusercontent.com/byte-capsule/Toffee-Channels-Link-Headers/refs/heads/main/toffee_channel_data.json";

// JSON ডেটা ফেচ করুন
$json_data = file_get_contents($json_url);
$data = json_decode($json_data, true);

// লিংক ও হেডার সেট করুন
$link = $data['channel']['link'];
$headers = [
    "Host: " . $data['channel']['headers']['Host'],
    "Cookie: " . $data['channel']['headers']['cookie'],
    "User-Agent: " . $data['channel']['headers']['user-agent'],
    "Client-API-Header: " . $data['channel']['headers']['client-api-header'],
    "Accept-Encoding: " . $data['channel']['headers']['accept-encoding']
];

// cURL ব্যবহার করে স্ট্রিম চালু করুন
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $link);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
curl_close($ch);

echo $response; // স্ট্রিম আউটপুট
?>
