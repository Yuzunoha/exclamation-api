<?php

function sendResponse($a) {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');
	echo json_encode($a, JSON_UNESCAPED_UNICODE);
}

function main() {
	$input = json_decode(file_get_contents('php://input'), true);
	$input['text'] .= '!!';
	$a = [
		'input' => $input
	];
	sendResponse($a);
}

main();

