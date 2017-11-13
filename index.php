<?php
// Read manifest file and get the file name for the resource
function readManifest($value) {
    $fileContent = file_get_contents('./assets/manifest.json');
    $manifest = json_decode($fileContent, true);
    return $manifest[$value];
}
?>
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Webpack Template Example</title>

    <link rel="stylesheet" href="assets/<?php echo readManifest('main.css'); ?>"  media="all" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>

<body>

    <div class="container">
        
        <h1>Example of heading 1</h1>

        <h2>Example of Bootstrap grid</h2>
        <div class="row">
            <div class="col-sm-6">
                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
            </div>
            <div class="col-sm-6">
                <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.</p>
            </div>
        </div>

        <h2>Example of FontAwesome icons</h2>
        <p>
            <i class="fa fa-chevron-up"></i>
            <i class="fa fa-chevron-right"></i>
            <i class="fa fa-chevron-down"></i>
            <i class="fa fa-chevron-left"></i>
            <i class="fa fa-play-circle"></i>
            <i class="fa fa-pause-circle"></i>
            <i class="fa fa-stop-circle"></i>
        </p>

    </div>

	<script src="assets/<?php echo readManifest('main.js'); ?>"></script>
</body>
</html>