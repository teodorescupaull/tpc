registerChapter({ chapter: "u1-42-43", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Solul amestec eterogen\nPoluarea aerului, a apei și a solului");
jade_mixins["subtitle"]("Paginile 42 - 43");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p42-at-msd-chim7-stii',
          top: 6.6581,
          left: 26.4848,
          width: 68.9697,
          height: 9.5458,
          type: 'text'
        },
        {
          atom: 'p42-at-msd-chim7-inveti-1',
          top: 16.5981,
          left: 26.4848,
          width: 68.9697,
          height: 14.7729,
          type: 'text'
        },
        {
          atom: 'p42-at-msd-chim7-retine-1',
          top: 54.6444,
          left: 26.1212,
          width: 69.5758,
          height: 10.9169
        },
        {
          atom: 'p42-at-msd-chim7-mai-mult',
          top: 6.7438,
          left: -0.1818,
          width: 25.4545,
          height: 25.0557,
          type: 'video'
        },
        {
          atom: 'p42-at-msd-chim7-inveti-2',
          top: 65.8698,
          left: 2.8485,
          width: 93.2121,
          height: 17.6007,
          type: 'text'
        },
        {
          atom: 'p42-at-msd-chim7-audio',
          top: 83.779,
          left: 25.6364,
          width: 9.3333,
          height: 10.1457,
          type: 'audio'
        },
        {
          atom: 'p42-at-msd-chim7-experiment',
          top: 32.0223,
          left: 2.9697,
          width: 92.1212,
          height: 21.8851
        },
        {
          atom: 'p42-at-msd-chim7-inveti-2',
          top: 66.0411,
          left: 36.0606,
          width: 60,
          height: 27.1979,
          type: 'text'
        }
      ],
      image: 'p042.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p43-at-msd-chim7-stii',
          top: 7.9434,
          left: 5.6364,
          width: 68.2424,
          height: 13.8303,
          type: 'text'
        },
        {
          atom: 'p43-at-msd-chim7-inveti-video',
          top: 22.3393,
          left: 5.8788,
          width: 67.5152,
          height: 3.1191,
          type: 'video'
        },
        {
          atom: 'p43-at-msd-chim7-inveti',
          top: 25.7669,
          left: 5.7576,
          width: 68.1212,
          height: 21.114,
          type: 'text'
        },
        {
          atom: 'p43-at-msd-chim7-retine',
          top: 47.1037,
          left: 5.6364,
          width: 68.1212,
          height: 9.4602
        },
        {
          atom: 'p43-at-msd-chim7-inveti-2',
          top: 64.3273,
          left: 5.3939,
          width: 92.9697,
          height: 33.282,
          type: 'text'
        },
        {
          atom: 'p43-at-msd-chim7-mai-mult',
          top: 7.3436,
          left: 74.6061,
          width: 24.8485,
          height: 52.2193
        },
        {
          atom: 'p43-at-msd-chim7-inveti-2-poluare',
          top: 57.1294,
          left: 5.6364,
          width: 68,
          height: 6.5467
        }
      ],
      image: 'p043.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '13', 'Solul – amestec eterogen', '42', 'blue', 'left', 'big');
}
}, {id: 'p42-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">În structura internă a Pământului, sunt delimitate mai multe zone care se deosebesc prin compoziție, densitate, temperatură, stare de agregare, grosime.</div></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p42-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Pământul are la suprafață, într-un strat cu o grosime de aproximativ 40 km, o crustă solidă numită <em>scoarța terestră. </em>Partea afânată de la suprafața uscatului este cunoscută sub numele de <strong>sol. </strong>Solul reprezintă una dintre cele mai importante resurse naturale. Are rol în susținerea plantelor, prin fixarea rădăcinilor.</div><div class=\"text-indent1-5\">Din sol, plantele își extrag apa și nutrienții necesari în procesele de creștere și hrănire. Solul este esențial pentru agricultură. Este mediul de viață pentru numeroase organisme. Solul este o parte inseparabilă a vieții noastre.</div><div class=\"row items-center\"><div class=\"col-xs-3 hidden-md\"></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p42-coloana-1.png');
buf.push("<div class=\"fs09 text-right\">Structura internă a Pământului</div></div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p42-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["video"]("p42");
jade_mixins["space2"]();
}
}, 'no-title', '','');
}
}, {id: 'p42-at-msd-chim7-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row items-center\"><div class=\"col-xs-3 hidden-md\"></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p42-coloana-2.jpg');
buf.push("<div class=\"fs09 text-right\">Apă cu pământ</div></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"block-subtitle msd-orange\">Să\texperimentăm</div><ul class=\"numbers\"> <li>Într-­un pahar Berzelius de 150 mL, pune 100 mL de apă. </li><li>Adaugă 2 - 3 spatule cu pământ fărâmițat și amestecă cu o baghetă de sticlă.</li><li>Lasă apoi paharul în stare de repaus două-trei minute.</li></ul>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<ul class=\"disc\"> <li>Observă culoarea și aspectul amestecului obținut.</li><li>Notează observațiile.</li></ul>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<strong>Interpretarea rezultatelor</strong><ul class=\"disc\"> <li>Se obține un amestec eterogen.</li><li>Se observă straturi de particule de diferite dimensiuni în paharul de sticlă. </li></ul>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Fiecare strat diferă prin textură, culoare și compoziție. În urma experimentului de mai sus, am putut identifica straturile solului, textura și culoarea acestora.</div>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p42-at-msd-chim7-experiment'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Solul este un amestec eterogen. </li><li>Este format din particule minerale, materii organice, apă, aer și organisme vii.</li><li>Este un sistem foarte dinamic, care îndeplinește multe funcții; este vital pentru activitățile umane și pentru supraviețuirea ecosistemelor.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p42-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\"> Compoziția\tsolului</div><div class=\"text-indent1-5\">Solul este un sistem dinamic alcătuit din trei categorii de constituenți: solizi, lichizi și gazoși.</div><ul class=\"disc\"> <li> <strong>Constituienții solizi </strong>reprezintă aproximativ 50% din volumul solului și reprezintă substanțele minerale și substanțele organice din sol.</li><li> <strong>Constituenții lichizi </strong>reprezintă, de fapt, apa din porii solului și de pe suprafața particulelor de sol, care conține, dizolvate, diferite substanțe, minerale sau organice, folositoare plantelor.</li><li> <strong>Constituenții gazoși </strong>corespund aerului prezent în porii solului, care are o compoziție modificată față de aerul atmosferic, în sensul prezenței unei cantități mai mici de oxigen și a uneia mai mari de dioxid de carbon.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Solul se află într-­o continuă schimbare, ca urmare a proceselor fizice, mecanice, chimice, biochimice și biologice care se produc la acest nivel. Variațiile de temperatură, apa, mișcările aerului, organismele vii, organismele moarte care se descompun reprezintă factori care acționează permanent asupra solului, determinând în mod continuu modificări ale aspectului, compoziției și structurii acestuia.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row items-center\"><div class=\"col-xs-3 hidden-md\"></div><div class=\"col-xs-6 col-md-4\"> ");
jade_mixins["img"].call({
block: function(){
buf.push(" ");
}
}, 'img/chimie7/p42-coloana-3.jpg');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p42-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p42-inveti.jpg");
jade_mixins["space1"]();
}
}, "st_pg42");
}
}, 'no-title', '','');
}
}, {id: 'p42-at-msd-chim7-audio'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '14', 'Poluarea aerului, a apei și a solului', '43', 'blue', 'right', 'big');
}
}, {id: 'p43-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>De-a lungul mileniilor, omul a transformat natura în folosul său. A defrișat suprafețe imense de păduri, a exploatat și folosit rezervele naturale ale solului și ale subsolului.</li><li>Calitatea solului, aerului și a apei s-a deteriorat constant, punând în pericol însăși existența vieții pe Pământ.</li><li>Poluarea este una dintre principalele probleme cu care se confruntă omenirea la începutul secolului XXI. Întâlnim poluare atât în aer, cât și în apă sau în sol.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p43-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Omul poate supraviețui fără hrană chiar și 40 de zile, fără apă două-trei zile, dar nu poate trăi fără aer decât câteva minute. Ne temem de momentul în care aerul curat și apa nu vor mai fi de ajuns! Suntem cu toții conștienți de faptul că mediul nostru nu mai este ceea ce a fost acum câteva sute de ani.</div><div class=\"row\"> <div class=\"col-md-6\"> <div class=\"text-indent1-5\">Urmărește cu atenție tabelul. Discută cu colegii tăi, apoi, pe baza experiențelor proprii, compară calitatea aerului din locurile indicate în coloana <strong>A </strong>cu cele din coloana <strong>B. </strong>Copiază tabelul în caiet și încercuiește locul în care crezi că aerul este mai curat.</div><div class=\"text-indent1-5\">În urma analizei făcute, rezultă că adesea aerul este contaminat cu substanțe nedorite, care au efect nociv asupra vieții. În acest caz spunem că <strong>aerul este poluat.</strong></div></div><div class=\"col-md-6\"> <table class=\"msd-table orange-table text-center\"><thead class=\"title-text\"><tr><td> <strong>A</strong></td><td> <strong>B</strong></td></tr></thead><tbody> <tr> <td>un parc</td><td>o stradă aglomerată</td></tr><tr> <td>un cartier de blocuri</td><td>o zonă industrială</td></tr><tr> <td>un sat</td><td>un oraș</td></tr><tr> <td>o intersecție, dimineața</td><td>o intersecție, noaptea</td></tr></tbody></table></div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p43-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p43");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p43-at-msd-chim7-inveti-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\"> <strong>Poluarea </strong>reprezintă impurificarea mediului înconjurător cu substanțe toxice, gazoase, lichide sau solide care afectează sănătatea umană, calitatea vieții sau a mediului în care trăiesc organismele vii.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p43-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Poluarea mediului înconjurător este un fenomen care a început să ia o amploare semnificativă în urma revoluției industriale din secolul al XIX-lea. Poluarea apare atunci când <em>mediul natural nu poate distruge un element nociv care a ajuns în aer, sol sau apă pe cale artificială. </em>Procesul de distrugere poate varia de la câteva zile, până la mii de ani.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p43-at-msd-chim7-inveti-2-poluare'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"row\"> <div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p43-coloana-1.jpg");
buf.push("<div class=\"fs09 text-right\">Poluarea aerului</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p43-coloana-2.jpg");
buf.push("<div class=\"fs09 text-right\">Poluarea apei</div></div></div><div class=\"row\"> <div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p43-coloana-3.jpg");
buf.push("<div class=\"fs09 text-right\">Poluarea solului</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p43-coloana-4.jpg");
buf.push("<div class=\"fs09 text-right\">Poluare radioactivă – pădure semnalizată ca fiind poluată radioactiv în Cernobîl</div></div></div></div>");
}
}, 'vrei no-title', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p43-at-msd-chim7-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm</div><strong>Activitate în echipă </strong>– lucrează împreună cu trei colegi/colege. <ul class=\"numbers\"> <li>Introduceți în două pahare Berzelius de 100 mL: apă – <strong>P<sub>1 </sub></strong>și pământ (sol) – <strong>P<sub>2 </sub></strong>(fig. <strong>a</strong>). Puneți un termometru în fiecare pahar și înregistrați temperatura de pornire.</li><li>Așezați paharele la soare (sau sub o lampă cu bec de 100 W – fig. <strong>b</strong>). Asigurați-vă că ambele pahare primesc o cantitate egală de lumină. Înregistrați temperatura după 10 minute.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-6 col-xs-6\"> ");
jade_mixins["img2"]("img/chimie7/p43-inveti-a.jpg", "a", "grey");
buf.push("</div><div class=\"col-md-6 col-xs-6\"> ");
jade_mixins["img2"]("img/chimie7/p43-inveti-b.jpg", "b", "grey");
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p43-at-msd-chim7-inveti-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});