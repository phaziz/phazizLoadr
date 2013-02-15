phazizLoadr
===========


What?
=====
A jQuery-Plugin to load JSON-filed Content into several divs of a Website the ajax-way.


Usage?
======
&lt;script src="./path-to-jquery/jquery-1.9.1.min.js"&gt;&lt;/script&gt;
&lt;script src="./path-to-phazizLoadr/jquery.phazizLoadr-1.0.0.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
    
	$(function() {<br />
        $('.container1,.container2,.container3,.container4').phazizLoadr({<br />
            fadeInSpeed     :       1750,<br />
            loadurl         :       './json/container2.json',<br />
            consoleDebug    :       true<br />
        });<br />
    });<br />
&lt;/script&gt;


Options?
========
fadeInSpeed: Speed of Animation fadeIn()
loadurl: Path to Your JSON-Content-File
consoleDebug: Wan't Output in Your Console? true | false


Sample JSON-FILE?
=================
[<br />
	{<br />
		"CONTENT":"Container1.txt [...] Lorem ipsum ..."<br />
	}<br />
]<br />


Demo?
=====
http://demo.phaziz.com/phazizLoadr/demo/<br />
Take a Look at the Source Code and enjoy!


License?
========
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004
 
Copyright (C) 2013 Christian Becher / phaziz.com
Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.
 
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 
0. You just DO WHAT THE FUCK YOU WANT TO.

2013.02.15