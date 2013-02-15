<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>jQuery phazizLoadr 1.0.0</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
      <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  </head>
  <body>
      
    <div class="container">
        <div class="container1"></div><!-- /container1 -->
        <div class="container2"></div><!-- /container2 -->
        <div class="container3"></div><!-- /container3 -->
        <div class="container4"></div><!-- /container4 -->
    </div><!-- /container --> 

    <script src="./bootstrap/js/jquery-1.9.1.min.js"></script>
    <script src="./bootstrap/js/bootstrap.min.js"></script>
    <script src="./jquery.phazizLoadr/jquery.phazizLoadr-1.0.0.min.js"></script>

    <script>

        /****************************************************/
		$(function() {
            $('.container1,.container2,.container3,.container4').phazizLoadr({
                fadeInSpeed     :       1750,
                loadurl         :       './json/container2.json',
                consoleDebug    :       true
            });
        });
       /*****************************************************/

    </script>

  </body>
</html>