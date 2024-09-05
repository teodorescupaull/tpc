registerChapter({ chapter: "u1-20-21", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Proprietăți fizice. Proprietăți chimice\nSubstanță pură. Amestecuri de substanțe. Puritate");
jade_mixins["subtitle"]("Paginile 20 - 21");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p14-at-msd-chim7-verifica',
          top: 9,
          left: 0,
          width: 25,
          height: 83.3248
        },
        {
          atom: 'p20-at-msd-chim7-inveti',
          top: 9,
          left: 27,
          width: 66,
          height: 35.8526
        },
        {
          atom: 'p20-at-msd-chim7-aplica',
          top: 45.5613,
          left: 27,
          width: 66,
          height: 50.3342
        }
      ],
      image: 'p020.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p21-at-msd-chim7-stii',
          top: 14,
          left: 7,
          width: 66,
          height: 5.8612
        },
        {
          atom: 'p21-at-msd-chim7-stiai-static',
          top: 11.4293,
          left: 75,
          width: 25,
          height: 5.09,
          type: 'audio'
        },
        {
          atom: 'p21-at-msd-chim7-stiai',
          top: 16.5981,
          left: 75,
          width: 25,
          height: 31.7395,
          type: 'text'
        },
        {
          atom: 'p21-at-msd-chim7-inveti-1',
          top: 20.1114,
          left: 7,
          width: 66,
          height: 32.7678
        },
        {
          atom: 'p21-at-msd-chim7-retine',
          top: 54.0446,
          left: 7,
          width: 66,
          height: 12.3736
        },
        {
          atom: 'p21-at-msd-chim7-inveti-2',
          top: 66.7266,
          left: 7,
          width: 93,
          height: 29.6829
        }
      ],
      image: 'p021.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Proprietăți fizice. Proprietăți chimice', '20', 'blue', 'left', 'small');
}
}, {id: 'p20-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Reprezintă un corp:<ul class=\"letters\"><li>apa dintr-un pahar;</li><li>oxigenul;</li><li>nisipul.</li></ul></li><li>Este o substanță:<ul class=\"letters\"><li>mortarul;</li><li>aerul;</li><li>azotul.</li></ul></li><li>Este un fenomen fizic:<ul class=\"letters\"><li>dilatarea șinelor de cale ferată;</li><li>arderea cărbunelui;</li><li>fermentarea mustului.</li></ul></li><li>Este un fenomen chimic:<ul class=\"letters\"><li>arderea zahărului;</li><li>fărâmițarea zahărului;</li><li>dizolvarea zahărului în apă.</li></ul></li><li>Substanța solubilă în apă este:<ul class=\"letters\"><li>sulful;</li><li>alcoolul;</li><li>carbonul.</li></ul></li><li>Este o proprietate fizică a cuprului:<ul class=\"letters\"><li>cuprul este sfărâmicios;</li><li>cuprul se dizolvă în apă;</li><li>cuprul are culoare roșiatică.</li></ul></li><li>Este corectă afirmația:<ul class=\"letters\"><li>argintul este un corp;</li><li>inelul de argint este o substanță;</li><li>azotul este o substanță.</li></ul></li><li>Reprezintă o proprietate chimică:<ul class=\"letters\"><li>alcoolul se dizolvă în apă în orice proporție;</li><li>alcoolul arde;</li><li>alcolul fierbe la 78 °C.</li></ul></li><li>Este incorectă afirmația:<ul class=\"letters\"><li>iodul are proprietatea de a sublima;</li><li>sublimarea este un fenomen chimic;</li><li>pilitura de fier se separă din amestecul cu nisip prin magnetizare.</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<em>Acordă-ti un punct pentru fiecare răspuns corect și un punct din oficiu.<strong>Total: 10 puncte.</strong></em>");
jade_mixins["space1"]();
buf.push("<div class=\"flip\"><em>Răspunsuri:<br/>1. a.; 2. c.; 3. a.; 4. a.; 5. b.; 6. c.; 7. c; 8. b; 9. b.</em></div></div>");
}
}, 'verifica', 'Verifică-te singur!','');
}
}, {id: 'p14-at-msd-chim7-verifica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li>În funcție de proprietățile pe care le prezintă, substanțele sunt utilizate în diferite domenii. Iată câteva exemple:<ul class=\"bullets\"><li>Vasele folosite pentru prepararea hranei sunt confecționate din aliaje metalice și au mânere din plastic, din motive ușor de înțeles: aliajul metalic este foarte bun conductor termic și permite căldurii să pătrundă în mâncare. Plasticul este un foarte bun izolator termic și împiedică încălzirea mânerelor (fig. a).</li><li>Conductorii electrici sunt confecționați din aliaje pe bază de cupru, datorită conductibilității electrice foarte ridicate a acestui metal (fig. b).</li><li>Mercurul a fost folosit timp îndelungat pentru confecționarea instrumentelor de măsurare a temperaturii, datorită proprietății sale de a se dilata la încălzire.</li><li>Gazele naturale, cărbunii, produsele petroliere, datorită proprietății de a arde cu eliberare de căldură, sunt combustibili în procese metalurgice, pentru încălzirea locuințelor sau pentru deplasarea vehiculelor.</li><li>Diamantul (fig. c) este folosit pentru tăierea sticlei și pentru șlefuirea corpurilor metalice, ca urmare a durității foarte mari a acestuia. Datorită puterii mari de reflectare a luminii, diamantul este foarte strălucitor, fiind folosit pentru confecționarea bijuteriilor.</li></ul></li></ul><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p20-inveti-lucruri-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p20-inveti-lucruri-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p20-inveti-lucruri-c.jpg', 'c', 'grey');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p20-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Identifică și tu, în jurul tău, corespondențe între proprietăți ale substanțelor și utilizări ale acestora. Realizează un tabel cu cel puțin cinci astfel de exemple.</li><li><strong class=\"msd-purple\">Joc și chimie.</strong>În careul de mai jos, înlocuind cifrele cu litere, întotdeauna o cifră cu aceeași literă, vei descoperi cuvinte care denumesc proprietăți fizice ale substanțelor și ustensile folosite în laboratorul de chimie pentru a le studia.<br/>Pe verticala<strong>A-B</strong>, vei găsi numele celei mai cunoscute și mai utilizate ustensile întâlnite în laboratorul de chimie.</li></ul>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table purple-table cell38\"><tr class=\"white\"><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td class=\"text-center\">A</td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>8</sup></td><td class=\"dark\"><sup>1</sup></td><td><sup>9</sup></td><td><sup>10</sup></td><td><sup>11</sup></td><td><sup>6</sup></td><td><sup>7</sup></td><td><sup>6</sup></td><td><sup>1</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>10</sup></td><td class=\"dark\"><sup>2</sup></td><td><sup>7</sup></td><td><sup>6</sup></td><td><sup>4</sup></td><td><sup>12</sup></td><td><sup>7</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>13</sup></td><td><sup>11</sup></td><td class=\"dark\"><sup>3</sup></td><td><sup>14</sup></td><td><sup>10</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>15</sup></td><td class=\"dark\"><sup>4</sup></td><td><sup>10</sup></td><td><sup>6</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>10</sup></td><td><sup>14</sup></td><td><sup>12</sup></td><td><sup>4</sup></td><td class=\"dark\"><sup>5</sup></td><td><sup>11</sup></td><td><sup>12</sup></td><td><sup>11</sup></td><td><sup>6</sup></td><td><sup>7</sup></td><td><sup>6</sup></td><td><sup>1</sup></td></tr><tr class=\"light\"><td><sup>6</sup></td><td><sup>1</sup></td><td><sup>3</sup></td><td><sup>13</sup></td><td><sup>14</sup></td><td><sup>13</sup></td><td class=\"dark\"><sup>1</sup></td><td><sup>6</sup></td><td><sup>3</sup></td><td><sup>4</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>2</sup></td><td><sup>4</sup></td><td><sup>9</sup></td><td><sup>16</sup></td><td><sup>6</sup></td><td class=\"dark\"><sup>6</sup></td><td><sup>14</sup></td><td><sup>2</sup></td><td><sup>11</sup></td><td><sup>3</sup></td><td><sup>1</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"light\"><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td><sup>16</sup></td><td><sup>4</sup></td><td><sup>12</sup></td><td><sup>14</sup></td><td class=\"dark\"><sup>7</sup></td><td><sup>3</sup></td><td><sup>1</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td><td class=\"white\"><sup>&nbsp;</sup></td></tr><tr class=\"white\"><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td class=\"text-center\">B</td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td><td><sup>&nbsp;</sup></td></tr></table>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Recipientul din imaginea de mai jos conține iod.<ul class=\"letters\"><li>Privește cu atenție și notează pe caiet 3 proprietăți fizice ale acestei substanțe.</li><li>Indică 3 substanțe care se găsesc în jumătatea superioară a paharului Erlenmeyer.</li></ul></li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p20-aplica.jpg');
buf.push("</div></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p20-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '6', 'Substanță pură. <br />Amestecuri de substanțe. Puritate', '21', 'blue', 'right', 'big');
}
}, {id: 'p21-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-subtitle\">Substanță pură. Amestecuri de substanțe</div>");
}
}, {id: 'p21-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Formele omogene de materie, cu compoziție constantă, se numesc <strong>substanțe</strong>.</div></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p21-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>În localitatea Roșia Montană, situată în Munții Apuseni, se găsesc ruinele unor mine de exploatare a metalelor prețioase din roci bogate în aur și argint, care datează chiar dinainte de cucerirea Daciei de către romani.</li><li>Roșia Montană este una dintre cele mai vechi localități cu tradiție în exploatarea metalelor prețioase din Europa.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p21-stiai-ca.jpg');
buf.push("<div class=\"fs08 text-right\">Roșia Montană</div></div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p21-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p21_static_stiai_ca.jpg");
jade_mixins["space1"]();
}
}, "p21_static_stiai_ca");
buf.push("</div>");
}
}, {id: 'p21-at-msd-chim7-stiai-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">În repetate rânduri, ai cumpărat lapte, apă minerală, oțet, suc sau apă distilată.</div><div class=\"text-indent1-5\">Analizează informațiile de pe etichetele de mai jos, care se referă la conținutul acestor produse. Ce observi? Ce poți spune cu privire la alcătuirea lichidelor respective? Scrie în caiet motivul pentru care ai răspuns astfel.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-md-6\"><div class=\"msd-inverted-corners orange\"><div class=\"inverted-inner\"><span class=\"inverted-top inverted-left\"></span><span class=\"inverted-top inverted-right\"></span><div class=\"inverted-content\"><div><strong class=\"msd-orange\">Oțet alimentar</strong></div><div>acid acetic 5%, apă, metabisulfit de potasiu, sare, glucide</div></div><span class=\"inverted-bottom inverted-left\"></span><span class=\"inverted-bottom inverted-right\"></span></div></div></div><div class=\"col-xs-12 col-md-6\"><div class=\"msd-inverted-corners orange\"><div class=\"inverted-inner\"><span class=\"inverted-top inverted-left\"></span><span class=\"inverted-top inverted-right\"></span><div class=\"inverted-content\"><div><strong class=\"msd-orange\">Apă minerală</strong></div><div>apă, săruri de calciu, magneziu, sodiu, potasiu, bicarbonat, clor, azotat</div></div><span class=\"inverted-bottom inverted-left\"></span><span class=\"inverted-bottom inverted-right\"></span></div></div></div></div><div class=\"row\"><div class=\"col-xs-12 col-md-4\"><div class=\"msd-inverted-corners orange height9\"><div class=\"inverted-inner\"><span class=\"inverted-top inverted-left\"></span><span class=\"inverted-top inverted-right\"></span><div class=\"inverted-content\"><div><strong class=\"msd-orange\">Băutură răcoritoare</strong></div><div>apă, acid fosforic, cafeină, zahăr, dioxid de carbon</div></div><span class=\"inverted-bottom inverted-left\"></span><span class=\"inverted-bottom inverted-right\"></span></div></div></div><div class=\"col-xs-12 col-md-4\"><div class=\"msd-inverted-corners orange height9\"><div class=\"inverted-inner\"><span class=\"inverted-top inverted-left\"></span><span class=\"inverted-top inverted-right\"></span><div class=\"inverted-content\"><div><strong class=\"msd-orange\">Lapte</strong></div><div>grăsimi, glucide, sare, sodiu, calciu</div></div><span class=\"inverted-bottom inverted-left\"></span><span class=\"inverted-bottom inverted-right\"></span></div></div></div><div class=\"col-xs-12 col-md-4\"><div class=\"msd-inverted-corners orange height9\"><div class=\"inverted-inner\"><span class=\"inverted-top inverted-left\"></span><span class=\"inverted-top inverted-right\"></span><div class=\"inverted-content\"><div><strong class=\"msd-orange\">Apă distilată</strong></div><div>apă</div></div><span class=\"inverted-bottom inverted-left\"></span><span class=\"inverted-bottom inverted-right\"></span></div></div></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Studiind primele patru etichete, ai identificat numele mai multor substanțe aflate în aceste produse. Pe ultima etichetă ai identificat numele unei singure substanțe.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p21-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Substanța pură:</div><ul class=\"disc\"><li>este perfect curată, nu conține particule ale unei alte substanțe;</li><li>are compoziție bine determinată;</li><li>nu își modifică compoziția prin fenomene fizice.</li></ul><div class=\"text-indent1-5\">În substanța pură, toate particulele constituente sunt identice din punct de vedere chimic.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p21-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Exemple de substanțe pure: apa distilată, oxigenul, platina, mercurul, hidrogenul.</div><div class=\"block-subtitle msd-orange\">Să experimentăm (1)</div><div class=\"text-indent1-5\">Formează o echipă împreună cu colega/colegul de bancă. Folosiți patru pahare Berzelius.</div><ul class=\"numbers\"><li>În paharul P<sub>1</sub>, introduceți 50 mL de apă distilată și o spatulă de piatră-vânătă.</li><li>În paharul P<sub>2</sub>, introduceți 50 mL de apă și două spatule de piatră-vânătă.</li><li>În paharul P<sub>3</sub>, introduceți 50 mL de apă și o spatulă de nisip.</li><li>În paharul P<sub>4</sub>, introduceți cantități diferite de piatră-vânătă și sare de bucătărie.</li></ul><div class=\"row\"><div class=\"col-sm-6 col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p21-inveti-lucruri-experiment-1-1.jpg', 'P<sub>1</sub>', 'grey');
buf.push("</div><div class=\"col-sm-6 col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p21-inveti-lucruri-experiment-1-2.jpg', 'P<sub>2</sub>', 'grey');
buf.push("</div><div class=\"col-sm-6 col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p21-inveti-lucruri-experiment-1-3.jpg', 'P<sub>3</sub>', 'grey');
buf.push("</div><div class=\"col-sm-6 col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p21-inveti-lucruri-experiment-1-4.jpg', 'P<sub>4</sub>', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Amestecați componentele din fiecare pahar, cu ajutorul unor baghete de sticlă.</li><li>Observați starea de agregare, culoarea și aspectul amestecurilor obținute.</li><li>Notați observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">În paharele P<sub>1</sub>și P<sub>2</sub>se obțin amestecuri care au o compoziție uniformă în toată masa lor. Atât în paharul P<sub>1</sub>, cât și în paharul P<sub>2</sub>, se obțin amestecuri de culoare albastră, dar culoarea este mai intensă în cel de-al doilea pahar. În paharele P<sub>3</sub>și P<sub>4</sub>se obțin amestecuri care conțin părți distincte fizic, cu compoziție neuniformă.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p21-at-msd-chim7-inveti-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});