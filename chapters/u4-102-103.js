registerChapter({ chapter: "u4-102-103", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Compoziția procentuală elementală a unei substanțe compuse");
jade_mixins["subtitle"]("Paginile 102 - 103");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p102-stii',
          top: 9.1431,
          left: 25.2727,
          width: 74.6667,
          height: 17.0865
        },
        {
          atom: 'p102-inveti',
          top: 26.024,
          left: 25.1515,
          width: 74.9091,
          height: 45.7926
        },
        {
          atom: 'p102-coloana-a',
          top: 6.7438,
          left: -0.0606,
          width: 24.9697,
          height: 22.3993
        },
        {
          atom: 'p102-retine',
          top: 71.9537,
          left: 27.3333,
          width: 65.4545,
          height: 7.1465
        },
        {
          atom: 'p102-stii-mai-mult',
          top: 44.1902,
          left: 0.0606,
          width: 24.8485,
          height: 43.0506,
          type: 'text'
        },
        {
          atom: 'p102-sa-lucram-p1',
          top: 79.4087,
          left: 25.1515,
          width: 74.9091,
          height: 5.6042,
          type: 'text'
        },
        {
          atom: 'p102-stii-mai-mult-audio',
          top: 38.7061,
          left: -0.4242,
          width: 25.0909,
          height: 5.1757,
          type: 'audio'
        },
        {
          atom: 'p103-sa-lucram-p2',
          top: 86.6067,
          left: 25.3939,
          width: 74.303,
          height: 9.9743,
          type: 'text'
        }
      ],
      image: 'p102.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p103-sa-lucram-p2',
          top: 9.0574,
          left: 7.2121,
          width: 92.3636,
          height: 19.4859,
          type: 'text'
        },
        {
          atom: 'p103-sa-lucram-p3',
          top: 29.9657,
          left: 7.0909,
          width: 92.4849,
          height: 24.1988
        },
        {
          atom: 'p103-coloana-b-2',
          top: 65.2699,
          left: 75.0909,
          width: 25.0909,
          height: 30.4542
        },
        {
          atom: 'p103-aplica',
          top: 79.1517,
          left: -0.0606,
          width: 74.9091,
          height: 20
        },
        {
          atom: 'p103-sa-lucram-p4',
          top: 56.1868,
          left: 6.4848,
          width: 67.7576,
          height: 22.6564,
          type: 'text'
        }
      ],
      image: 'p103.jpg'
    }
  ]);
buf.push("</div><!--page 102-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '3', 'Compoziția procentuală elementală a unei substanțe compuse', '102', 'blue', 'left', 'big');
}
}, {id: 'p102-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Raportul 1/100 se numește procent. Procentul se notează cu<i> p</i>%. Exprimarea în procente a unor mărimi este foarte răspândită în diverse domenii.</li><li>De exemplu, aerul este un amestec de gaze care are compoziția procentuală molară: 78% N<sub>2</sub>, 21% O<sub>2</sub> și 1% alte gaze. Aerul interacționează permanent cu organismul având o acțiune care poate fi nu numai pozitivă, ci și negativă. Orice modificare a compoziției acestuia poate influența atât direct, cât și indirect funcțiile organismului, dereglându-l. Este unul dintre motivele pentru care se monitorizează permanent compoziția aerului din zonele urbane sau industriale.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p102-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-sm-6\">");
jade_mixins["img3"]('img/chimie7/p102-stii_deja.png', '');
buf.push("</div><div class=\"col-xs-12 col-sm-6\"><p>Compoziția procentuală volumetrică a aerului:</p><ul class=\"chart\"><li class=\"purple\">78% azot</li><li class=\"red\">21% oxigen</li><li class=\"lightgrey\">1% alte gaze</li></ul></div></div>");
jade_mixins["space1"]();
}
}, 'vrei no-title', '','');
}
}, {id: 'p102-coloana-a'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><p class=\"text-indent1-5\">În figura de mai jos sunt prezentate principalele elemente care compun corpul uman.</p><ul class=\"disc\"><li>Analizează, împreună cu colega/colegul de bancă, acest desen și indicați elementul care se găsește în procentul cel mai mare.</li><li>Care sunt cele patru elemente care reprezintă mai mult de 95% din corpul uman?");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p102-inveti.png', '');
jade_mixins["space1"]();
buf.push("</li></ul><ul class=\"arrows\"><li><p>Prin analiza elementală se studiază o probă (de exemplu: aer, deșeuri, apă potabilă, minerale sau substanțe chimice) pentru a-i determina compoziția.</p><p>Analiza elementală poate fi calitativă, prin care se determină elementele prezente în proba respectivă, și analiza cantitativă, prin care se determină cantitățile în care se găsesc elementele componente.</p></li></ul></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p102-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p class=\"text-indent1-5\"><strong>Compoziția procentuală de masă</strong> reprezintă masa din fiecare element care se găsește în 100 de părți de masă de substanță compusă.</p></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p102-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><p>Un rol important în viața activă a unui organism uman îl are sistemul osos.</p><p>Din punct de vedere chimic, osul conține aproximativ 20% apă și 80% reziduu uscat.</p>");
jade_mixins["img3"]('img/chimie7/p102-daca_vrei-1.png', '');
buf.push("</div><div class=\"col-xs-12 col-sm-6\"><p>Reziduul uscat conține aproximativ 35% substanțe organice și 65% substanțe anorganice alcătuite, în principal, din calciu, oxigen, magneziu, fosfor, carbon, sulf și fluor.</p>");
jade_mixins["img3"]('img/chimie7/p102-daca_vrei-2.png', '');
buf.push("</div></div>");
}
}, 'vrei mb0', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p102-stii-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p102-daca-vrei.jpg');
jade_mixins["space1"]();
}
}, 'st_pg102');
}
}, 'vrei no-title', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p102-stii-mai-mult-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li>Compoziția procentuală este termenul utilizat pentru a descrie procentul de masă al fiecărui element dintr-un compus. Se determină, de obicei, utilizând valorile masei atât pentru elementele din compus, cât și pentru masa molară a compusului chimic.</li></ul>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'no-title inveti', 'Să lucrăm','');
}
}, {id: 'p102-sa-lucram-p1'});
buf.push("<!--page 103-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '3', 'Compoziția procentuală elementală a unei substanțe compuse', '103', 'blue', 'right', 'small');
}
}, {id: 'p103-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"letters\"><li><strong>Determinarea compoziției procentuale de masă folosind masa molară</strong></li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"block-subtitle msd-orange\">Să lucrăm</div><p class=\"text-indent1-5\"><strong>Probleme rezolvate</strong></p></div><div class=\"block-content\"><ul class=\"numbers\"><li>Determină compoziția procentuală de masă a apei.</li></ul><table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody></tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Scrie formula chimică a substanței.</td><td data-label=\"Rezolvare\">H<sub>2</sub>O</td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Folosește anexa de la pagina 111 și scrie masele atomice relative ale elementelor componente.</td><td data-label=\"Rezolvare\"><p><i>A<sub>r</sub></i>H = 1</p><p><i>A<sub>r</sub></i>O = 16</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>3.</strong> Calculează masa molară a apei.</td><td data-label=\"Rezolvare\"><p class=\"text-nowrap\"><i>M</i><sub>H<sub>2</sub>O</sub>= 2 · 1 + 1· 16</p><p class=\"text-nowrap\"><i>M</i><sub>H<sub>2</sub>O</sub>= 18 g/mol</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>4.</strong> Calculează procentul masic corespunzător fiecărui element.</td><td data-label=\"Rezolvare\"><p class=\"text-nowrap\">&nbsp; 18 g H<sub>2</sub>O ......... 2 g H ......... 16 g O</p><p class=\"text-nowrap\">100 g H<sub>2</sub>O .........<i> x</i> g H .........<i> y</i> g O</p><p class=\"text-nowrap\"><i>x</i> = 11,11% H;<i> y</i> = 88,89% O</p></td></tr></table>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"><div class=\"col-sm-3\"></div><div class=\"col-xs-12 col-sm-6\">");
jade_mixins["img3"]('img/chimie7/p103-sa_lucram-tabel_1.png', '');
buf.push("<p>Compoziția procentuală de masă a apei:</p><ul class=\"chart\"><li class=\"red\">88,89% oxigen</li><li class=\"lightgrey\">11,11% hidrogen</li></ul></div></div></div>");
}
}, 'no-title inveti pb0', 'Să lucrăm','');
}
}, {id: 'p103-sa-lucram-p2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li class=\"hide-item\">hiddden</li><li>Determină compoziția procentuală masică a acidului sulfuric.</li></ul>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Scrie formula chimică a substanței.</td><td data-label=\"Rezolvare\">H<sub>2</sub>SO<sub>4</sub></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Folosește anexa de la pagina 111 și scrie masele atomice relative ale atomilor care intră în componența moleculei de acid sulfuric.</td><td data-label=\"Rezolvare\"><p><i>A<sub>r</sub></i>H = 1</p><p><i>A<sub>r</sub></i>S = 32</p><p><i>A<sub>r</sub></i>O = 16</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>3.</strong> Calculează masa molară a acidului sulfuric.</td><td data-label=\"Rezolvare\"><p class=\"text-nowrap\"><i>M</i><sub>H<sub>2</sub>SO<sub>4</sub></sub> = 2 · 1 + 32 + 4 ·16</p><p class=\"text-nowrap\"><i>M</i><sub>H<sub>2</sub>SO<sub>4</sub></sub>= 98 g/mol</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>4.</strong> Calculează procentul masic corespunzător fiecărui element.</td><td data-label=\"Rezolvare\"><p class=\"text-nowrap\">&nbsp; 98 g H<sub>2</sub>SO<sub>4</sub> ... 2 g H ... 32 g S ... 64 g O</p><p class=\"text-nowrap\">100 g H<sub>2</sub>SO<sub>4</sub> ...<i>x</i> g H ...<i> y</i> g S ...<i> z</i> g O</p><p class=\"text-nowrap\"><i> x</i> = 2,04% H;<i> y</i> = 32,65% S;<i> z</i> = 65,31% O</p></td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-sm-3\"></div><div class=\"col-xs-12 col-sm-6\">");
jade_mixins["img3"]('img/chimie7/p103-sa_lucram-tabel_2.png', '');
buf.push("<p>Compoziția procentuală de masă a acidului sulfuric:</p><ul class=\"chart\"><li class=\"red\">65,31% oxigen</li><li class=\"orange\">32,65% sulf</li><li class=\"lightgrey\">2,04% hidrogen</li></ul></div></div></div>");
}
}, 'no-title inveti', 'Să lucrăm','');
}
}, {id: 'p103-sa-lucram-p3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"letters n2\"><li><strong>Determinarea compoziției procentuale din raportul de masă</strong></li></ul>");
jade_mixins["space1"]();
buf.push("</div><div class=\"block-subtitle msd-orange\">Să lucrăm</div><p class=\"text-indent1-5\"><strong>Problemă rezolvată</strong></p><p class=\"text-indent1-5\">Determină compoziția procentuală de masă a substanței X, cu raportul de masă Cu : O = 8 : 1.</p>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Adună masele corespunzătoare fiecărui element din raportul de masă dat.</td><td data-label=\"Rezolvare\">8 g Cu + 1 g O = 9 g X</td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Calculează procentul masic corespunzător fiecărui element.</td><td data-label=\"Rezolvare\"><p class=\"text-nowrap\">&nbsp; &nbsp; &nbsp;9 g X ......... 8 g Cu ......... 1 g O</p><p class=\"text-nowrap\">100 g X ......... x g Cu .........<i> y</i> g O</p><p class=\"text-nowrap\">x = 88,89% Cu;<i> y</i> = 11,11% O</p></td></tr></tbody></table>");
}
}, 'no-title inveti pb0', 'Să lucrăm','');
}
}, {id: 'p103-sa-lucram-p4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row flex\"><div class=\"col-xs-12 col-sm-6 flex-column\">");
jade_mixins["img3"]('img/chimie7/p103-aplica-1.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Rubin – varietate de oxid de aluminiu impur</p></div><div class=\"col-xs-12 col-sm-6 flex-column\">");
jade_mixins["img3"]('img/chimie7/p103-aplica-2.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Safir – varietate de oxid de aluminiu impur</p></div></div>");
}
}, 'vrei no-title', '','');
}
}, {id: 'p103-coloana-b-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Rubinele și safirele sunt forme cristaline impure ale oxidului de aluminiu. Calculează compoziția procentuală de masă a oxidului de aluminiu, Al<sub>2</sub>O<sub>3</sub>.</li><li>Carbonatul de magneziu MgCO<sub>3</sub> este o substanță care intră în compoziția dolomitului, o rocă folosită în construcții. Determină compoziția procentuală de masă a acestei substanțe pornind de la masa sa molară.</li><li>Salpetru de India, o sare cu multiple utilizări, are raportul de masă K : N : O = 39 : 14 : 48. Calculează compoziția procentuală de masă a salpetrului de India.</li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p103-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});