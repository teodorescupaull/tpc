registerChapter({ chapter: "u4-100-101", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Raport atomic\nRaport de masă");
jade_mixins["subtitle"]("Paginile 100 - 101");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p100-stii-deja',
          top: 9.4002,
          left: 25.0303,
          width: 75.0303,
          height: 11.8595
        },
        {
          atom: 'p100-inveti',
          top: 21.4824,
          left: 25.1515,
          width: 74.7879,
          height: 14.1731,
          type: 'text'
        },
        {
          atom: 'p100-audio-1',
          top: 35.7926,
          left: 25.2727,
          width: 10.7879,
          height: 3.2905,
          type: 'audio'
        },
        {
          atom: 'p100-retine',
          top: 39.3059,
          left: 26.8485,
          width: 66.9091,
          height: 8.4319
        },
        {
          atom: 'p100-audio-2',
          top: 65.7841,
          left: 25.2727,
          width: 12,
          height: 8.8603,
          type: 'audio'
        },
        {
          atom: 'p100-analizeaza',
          top: 47.8749,
          left: 25.2727,
          width: 75.0303,
          height: 17.772,
          type: 'text'
        },
        {
          atom: 'p100-sa-lucram',
          top: 74.9529,
          left: 25.1515,
          width: 75.0303,
          height: 25.0557
        },
        {
          atom: 'p100-inveti',
          top: 21.5681,
          left: 36.1818,
          width: 63.8788,
          height: 17.6007,
          type: 'text'
        },
        {
          atom: 'p100-analizeaza',
          top: 47.9606,
          left: 37.5152,
          width: 62.4242,
          height: 26.7695,
          type: 'text'
        }
      ],
      image: 'p100.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p101-sa-observam',
          top: 7.3436,
          left: 0.0606,
          width: 74.6667,
          height: 17.6007
        },
        {
          atom: 'p101-coloana-b-molecule',
          top: 8.1148,
          left: 74.7273,
          width: 25.3333,
          height: 32.3393
        },
        {
          atom: 'p101-retine',
          top: 25.3385,
          left: 7.0909,
          width: 65.5758,
          height: 7.3179
        },
        {
          atom: 'p101-sa-lucram',
          top: 33.8218,
          left: 7.0909,
          width: 65.5758,
          height: 24.3702
        },
        {
          atom: 'p101-aplica',
          top: 59.7858,
          left: -0.0606,
          width: 75.0303,
          height: 40.2228
        },
        {
          atom: 'p101-coloana-b-imagini',
          top: 45.2185,
          left: 74.9697,
          width: 25.0909,
          height: 32.0822
        },
        {
          atom: 'p101-audio',
          top: 77.6093,
          left: 74.9697,
          width: 25.0909,
          height: 18.886,
          type: 'audio'
        }
      ],
      image: 'p101.jpg'
    }
  ]);
buf.push("</div><!--page 100-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '2', 'Raport atomic. Raport de masă', '100', 'blue', 'left', 'big');
}
}, {id: 'p100-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Raportul a două numere,<div class=\"fraction px1\"><div class=\"numarator\"><i>a</i></div><div class=\"numitor\"><i>b</i></div></div>indică de câte ori numărul<i> b</i> este cuprins în numărul<i> a</i>. Raportul poate fi exprimat printr-o împărțire,<i> a</i> :<i> b</i>, sau printr-o fracție,<div class=\"fraction px1\"><div class=\"numarator\"><i>a</i></div><div class=\"numitor\"><i>b</i></div></div>.</li><li>Orice substanță chimică pură are compoziție constantă, indiferent de metoda de obținere.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p100-stii-deja'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (1)</div><p class=\"text-indent1-5\">Un raport este o modalitate de a compara cantități, mărimi, numere.</p><p class=\"text-indent1-5\">Când te privești în oglindă vezi doi ochi, un nas, o gură și două urechi care formează raportul 2 : 1 : 1 : 2.</p><p class=\"text-indent1-5\">Rapoartele de numere sunt frecvent folosite și în calculele care se referă la substanțele chimice.</p><p class=\"text-indent1-5\">În molecula de metan fiecare atom de carbon se leagă de patru atomi de hidrogen, deci se combină în raportul de 1 la 4. Ca mod de reprezentare, se scrie: C : H = 1 : 4.</p></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p100-inveti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p100-inveti-1.jpg');
jade_mixins["space1"]();
}
}, 'st_pg101_1');
buf.push("</div>");
}
}, {id: 'p100-audio-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p class=\"text-indent1-5\"> Raportul atomic indică numărul de atomi din fiecare element care se combină pentru a forma o<strong> substanță compusă.</strong></p></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p100-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li> Analizează, împreună cu colega/colegul de bancă, formulele substanțelor prezentate în figurile<strong> a, b, c</strong> și<strong> d.</strong></li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row flex\"><div class=\"col-xs-6 col-sm-3 flex-column\"><em class=\"fig-nr\">a</em>");
jade_mixins["img3"]('img/chimie7/p100-coloana-a.png', '');
buf.push("<p class=\"text-center mt-auto\">Molecula de apă, H<sub>2</sub>O</p></div><div class=\"col-xs-6 col-sm-3 flex-column\"><em class=\"fig-nr\">b</em>");
jade_mixins["img3"]('img/chimie7/p100-coloana-b.png', '');
buf.push("<p class=\"text-center mt-auto\">Molecula de trioxid de sulf, SO<sub>3</sub></p></div><div class=\"col-xs-6 col-sm-3 flex-column\"><em class=\"fig-nr\">c</em>");
jade_mixins["img3"]('img/chimie7/p100-coloana-c.png', '');
buf.push("<p class=\"text-center mt-auto\">Molecula de apă oxigenată, H<sub>2</sub>O<sub>2</sub></p></div><div class=\"col-xs-6 col-sm-3 flex-column\"><em class=\"fig-nr\">d</em>");
jade_mixins["img3"]('img/chimie7/p100-coloana-d.png', '');
buf.push("<p class=\"text-center mt-auto\">Molecula de acid sulfuric, H<sub>2</sub>SO<sub>4</sub></p></div></div>");
jade_mixins["space1"]();
buf.push("<p class=\"text-indent1-5\">Copiați pe caiete și completați tabelul de mai jos.<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center text-center\">Nr. crt.</td><td class=\"text-center text-center\">Formula chimică</td><td class=\"text-center text-center\">Raportul atomic</td></tr></thead><tbody><tr><td data-label=\"Nr. crt.\" class=\"text-center\">1</td><td data-label=\"Formula chimică\" class=\"text-center\">...</td><td data-label=\"Raportul atomic\" class=\"text-center\">... : ...= 2 : 1</td></tr><tr><td data-label=\"Nr. crt.\" class=\"text-center\">2</td><td data-label=\"Formula chimică\" class=\"text-center\">...</td><td data-label=\"Raportul atomic\" class=\"text-center\">... : ... : ...= 2 : 1 : 4</td></tr><tr><td data-label=\"Nr. crt.\" class=\"text-center\">3</td><td data-label=\"Formula chimică\" class=\"text-center\">...</td><td data-label=\"Raportul atomic\" class=\"text-center\">... : ...= 1 : 1</td></tr><tr><td data-label=\"Nr. crt.\" class=\"text-center\">4</td><td data-label=\"Formula chimică\" class=\"text-center\">...</td><td data-label=\"Raportul atomic\" class=\"text-center\">... : ...= 1 : 3</td></tr></tbody></table></p><ul class=\"arrows\"><li>Numărul de atomi ai fiecărui element dintr-un compus chimic este mereu același. De exemplu, apa are formula chimică H<sub>2</sub>O, iar apa oxigenată H<sub>2</sub>O<sub>2</sub> . Un singur număr face o mare diferență. Apa este esențială pentru viață, în timp ce apa oxigenată este folosită ca înălbitor, dezinfectant și decolorant, pentru obținerea detergenților, celulozei și hârtiei.</li></ul></div>");
}
}, 'no-title inveti', '','');
}
}, {id: 'p100-analizeaza'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p100-inveti-2.jpg');
buf.push("</div>");
}
}, 'no-title inveti', '','');
}
}, {id: 'p100-audio-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-subtitle\"><div class=\"msd-orange\">Să lucrăm (1)</div><div class=\"block-content\"><p class=\"text-indent1-5\">Determină raportul atomic pentru pentaoxidul de azot.<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Scrie formula chimică a substanței.</td><td data-label=\"Rezolvare\">N<sub>2</sub>O<sub>5</sub></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Indică numărul de atomi din fiecare element.</td><td data-label=\"Rezolvare\"><p>N – 2 atomi</p><p>O – 5 atomi</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>3.</strong> Notează raportul atomic.</td><td data-label=\"Rezolvare\">N : O =2: 5</td></tr></tbody></table></p><ul class=\"arrows\"><li> În practică, în procesele industriale, în laboratoare, este foarte util să se cunoască, și din punct de vedere masic, care este raportul în care se combină elementele pentru a forma o anumită substanță.</li></ul></div></div>");
}
}, 'no-title inveti', 'Să lucrăm','');
}
}, {id: 'p100-sa-lucram'});
buf.push("<!--page 101-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '2', 'Raport atomic. Raport de masă', '101', 'blue', 'right', 'small');
}
}, {id: 'p101-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-subtitle\"><div class=\"msd-orange\">Să observăm (2)</div><div class=\"block-content\"><ul class=\"numbers\"><li>Analizează formulele substanțelor prezentate în imaginea de mai jos.</li><li> Calculează pe caiet masele molare ale celor două substanțe și explică diferența dintre acestea.</li></ul><ul class=\"arrows\"><li>Masa corespunzătoare fiecărui element dintr-un compus chimic este bine determinată, fiind constantă. Pentru acidul fosforic, H<sub>3</sub>PO<sub>4</sub>, masele elementelor care intră în compoziția acestuia sunt întotdeauna 3 părți masice de hidrogen, 31 de părți masice de fosfor și 64 de părți masice de oxigen sau oricare alte numere care reprezintă multiplii sau submultiplii (de același număr de ori pentru fiecare element) ai celor trei numere.</li></ul></div></div>");
}
}, 'no-title inveti', 'Să observăm','');
}
}, {id: 'p101-sa-observam'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><em class=\"fig-nr\">a</em>");
jade_mixins["img3"]('img/chimie7/p101-sa_observam_2-1.png', '');
buf.push("<p class=\"text-center\">Molecula de acid fosforos, H<sub>3</sub>PO<sub>3</sub></p></div><div class=\"col-xs-12 col-sm-6\"><em class=\"fig-nr\">b</em>");
jade_mixins["img3"]('img/chimie7/p101-sa_observam_2-2.png', '');
buf.push("<p class=\"text-center\">Molecula de acid fosforic, H<sub>3</sub>PO<sub>4</sub></p></div></div>");
}
}, 'vrei no-title', '','');
}
}, {id: 'p101-coloana-b-molecule'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p class=\"text-indent1-5\"> Raportul de masă reprezintă raportul maselor corespunzătoare fiecărui element care intră în alcătuirea unei substanțe compuse.</p></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p101-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-subtitle\"><div class=\"msd-orange\">Să lucrăm (2)</div><div class=\"block-content\"><p class=\"text-indent1-5\">Determină raportul de masă pentru oxidul de fier (III).<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Scrie formula chimică a substanței.</td><td data-label=\"Rezolvare\">Fe<sub>2</sub>O<sub>3</sub></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Indică numărul de atomi din fiecare element.</td><td data-label=\"Rezolvare\"><p>Fe – 2 atomi</p><p>O – 3 atomi</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>3.</strong> Scrie masele atomice relative ale elementelor componente.</td><td data-label=\"Rezolvare\"><p>A<sub>r</sub>Fe = 56</p><p>A<sub>r</sub>O = 16</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>4.</strong> Scrie raportul de masă.</td><td data-label=\"Rezolvare\"><p>Fe : O = (2 · 56) : (3 · 16)</p><p>Fe : O = 112 : 48</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>5.</strong> Simplifică numerele prin cel mai mare divizor comun, dacă este posibil.</td><td data-label=\"Rezolvare\">Fe : O = 7 : 3</td></tr></tbody></table></p></div></div>");
}
}, 'no-title inveti pb0', 'Să lucrăm','');
}
}, {id: 'p101-sa-lucram'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Carbonatul de calciu este o substanță întâlnită în calcar și extrasă pentru a servi ca materie primă la obținerea varului, a cimentului, a dioxidului de carbon (fig.<strong>a</strong>). Se găsește și în varietățile de marmură (fig.<strong>b</strong>), în cochiliile de scoici și melci (fig.<strong>c</strong>). Scrie formula chimică a carbonatului de calciu și calculează raportul de masă în care se combină elementele care alcătuiesc acest compus.</li><li>Copiază pe caiet schema de mai jos și completează spațiile punctate, știind că modelul compact este al unei substanțe formate din atomi de hidrogen, oxigen și azot.");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p101-aplica-2.jpg', '');
jade_mixins["space1"]();
buf.push("</li><li>Hidrogenul și oxigenul intră în compoziția a două substanțe binare. Se cere:<ul class=\"letters\"><li>scrie formulele chimice ale celor doi compuși;</li><li>calculează raportul de masă pentru compusul în care cele două elemente se găsesc în raport atomic egal.</li></ul></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p101-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row flex\"><div class=\"col-xs-6 col-sm-4 flex-column\"><em class=\"fig-nr\">a</em>");
jade_mixins["img3"]('img/chimie7/p101-aplica-1-a.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Mină deschisă pentru extragerea calcarului</p></div><div class=\"col-xs-6 col-sm-4 flex-column\"><em class=\"fig-nr\">b</em>");
jade_mixins["img3"]('img/chimie7/p101-aplica-1-b.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Marmură</p></div><div class=\"col-xs-6 col-sm-4 flex-column\"><em class=\"fig-nr\">c</em>");
jade_mixins["img3"]('img/chimie7/p101-aplica-1-c.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Cochilii de melci</p></div></div>");
}
}, 'vrei no-title', '','');
}
}, {id: 'p101-coloana-b-imagini'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p101-stiai-ca.jpg');
jade_mixins["space1"]();
}
}, 'st_pg101');
buf.push("</div>");
}
}, {id: 'p101-audio'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});