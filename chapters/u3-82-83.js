registerChapter({ chapter: "u3-82-83", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Formula chimică a unei substanțe");
jade_mixins["subtitle"]("Paginile 82 - 83");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p82-at-msd-chim7-stii',
          top: 8.4576,
          left: 26.7273,
          width: 67.2727,
          height: 10.4884,
          type: 'text'
        },
        {
          atom: 'p82-at-msd-chim7-inveti-1',
          top: 19.4259,
          left: 26.9697,
          width: 67.1515,
          height: 28.9974,
          type: 'text'
        },
        {
          atom: 'p82-at-msd-chim7-inveti-1',
          top: 8.2862,
          left: 3.2121,
          width: 22.0606,
          height: 29.3402,
          type: 'text'
        },
        {
          atom: 'p82-at-msd-chim7-inveti-1-audio',
          top: 38.1063,
          left: 3.697,
          width: 21.697,
          height: 26.4267,
          type: 'audio'
        },
        {
          atom: 'p82-at-msd-chim7-retine',
          top: 49.1602,
          left: 26.9697,
          width: 67.1515,
          height: 17.515,
          type: 'text'
        },
        {
          atom: 'p82-at-msd-chim7-inveti-2',
          top: 67.5835,
          left: 26.6061,
          width: 67.6364,
          height: 28.6547,
          type: 'text'
        }
      ],
      image: 'p082.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p83-at-msd-chim7-inveti-1',
          top: 7.8578,
          left: 6.2424,
          width: 66.9091,
          height: 11.6024,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-retine-1',
          top: 19.94,
          left: 6.3636,
          width: 66.5455,
          height: 14.6015,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-inveti-2',
          top: 34.85,
          left: 6.3636,
          width: 66.5455,
          height: 6.8895,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-stiai',
          top: 8.629,
          left: 74.6061,
          width: 23.0303,
          height: 57.018,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-inveti-3',
          top: 42.1337,
          left: 6.2424,
          width: 66.6667,
          height: 22.9135,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-retine-2',
          top: 65.4413,
          left: 6.3636,
          width: 66.6667,
          height: 11.6024,
          type: 'text'
        },
        {
          atom: 'p83-at-msd-chim7-aplica',
          top: 77.6093,
          left: 6.3636,
          width: 66.6667,
          height: 18.2862,
          type: 'text'
        }
      ],
      image: 'p083.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '8', 'Formula chimică a unei substanțe', '82', 'blue', 'left', 'big');
}
}, {id: 'p82-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Atomi identici sau diferiți se asociază prin cedare/acceptare sau punere în comun de electroni; în acest fel se formează compușii ionici, respectiv compușii moleculari.</li><li>Numărul de atomi cu care participă un element la formarea substanțelor ionice sau moleculare este determinat de numărul de electroni de valență.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p82-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să lucrăm</div><p> <strong>Activitate independentă</strong> – modelează formarea compusului ionic alcătuit din calciu (<em>Z</em> = 20) și fluor (<em>Z</em> = 9). Verifică modelul realizat de tine, comparându-l cu schema de mai jos.</p>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-2 col-md-3\"> </div><div class=\"col-xs-8 col-md-6\"> ");
jade_mixins["img"]('img/chimie7/p82-inveti.png');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-md-5\"> ");
jade_mixins["img4"]('img/chimie7/p82-coloana-1.png', '', '', 'Structura atomului de calciu');
buf.push("</div><div class=\"col-xs-12 col-md-7\"> ");
jade_mixins["space1"]();
jade_mixins["img4"]('img/chimie7/p82-coloana-2.png', '', '', 'Structura atomului de fluor');
buf.push("</div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<ul class=\"disc\"> <li>Atomul de fluor are 7<em>e</em><sup>–</sup> pe ultimul strat; are, așadar, nevoie de un singur electron pentru a dobândi configurație de gaz rar.</li><li>Atomul de calciu are 2<em>e</em><sup>–</sup> pe ultimul strat, pe care îi cedează către doi atomi de fluor.</li><li>Se formează un ion de calciu cu două sarcini pozitive și doi ioni de fluor, fiecare având câte o sarcină negativă. Ionii se atrag, rezultând compusul<em> fluorură de calciu</em>. Acest compus poate fi reprezentat CaF<sub>2</sub>, pentru a indica numărul de ioni din fiecare element care se asociază.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["img4"]('img/chimie7/p82-coloana-3.jpg', 'Fluorura de calciu – fluorit', '', '');
buf.push("</div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p82-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p82-coloana.jpg');
}
}, 'p82');
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p82-at-msd-chim7-inveti-1-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Notația prescurtată care evidențiază tipul și numărul de atomi/ioni care se asociază pentru a forma o substanță se numește <strong> formulă chimică</strong>.</li><li>Formula chimică este alcătuită din simbolurile chimice ale elementelor componente, însoțite, în partea din dreapta jos, de un număr care indică numărul de atomi/ioni. Acest număr se numește<strong> indice</strong>. Indicele 1 nu se scrie, prin convenție. Simbolul chimic indică un atom din acel element.</li><li>Formula chimică a unei substanțe se poate determina după modelul de mai sus sau, prin calcul, pe baza valenței elementelor, parcurgând mai multe etape.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p82-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Determinarea formulei chimice, pe baza valenței,<div class=\"hidden-xs\"></div> pentru compușii formați din două elemente, numiți compuși binari</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Determinarea formulei chimice pentru compusul format din calciu și fluor:</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<table class=\"msd-table orange-table vertical-borders cell-fit\"><thead class=\"text-center\"><tr><td class=\"cell10\">Nr. crt. </td><td>Etape </td><td class=\"cell25\">Rezolvare</td></tr></thead><tr><td class=\"text-center text-center\">1.</td><td>Scrie simbolurile chimice ale elementelor. </td><td class=\"text-center\">Ca &nbsp; F</td></tr><tr><td class=\"text-center\">2.</td><td>Notează valențele celor două elemente. </td><td class=\"text-center\">II &nbsp; I</td></tr><tr><td class=\"text-center\">3.</td><td>Calculează cel mai mic multiplu comun al valențelor.</td><td class=\"text-center\">2 · 1 = 2</td></tr><tr><td class=\"text-center\">4.</td><td>Stabilește numărul de atomi cu care participă fiecare element la formarea substanței respective. Cel mai mic multiplu comun: valența elementului.</td><td class=\"text-center\">2 : 2 = 1 atom Ca <br/>2 : 1 = 2 atomi F</td></tr><tr><td class=\"text-center\">5.</td><td>Scrie formula chimică.</td><td class=\"text-center\">CaF <sub>2</sub></td></tr></table>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"text-indent1-5\">Analizând cu atenție formula fluorurii de calciu, se observă că valența elementului calciu devine indice la simbolul elementului fluor, iar valența elementului fluor devine indice la simbolul elementului calciu.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p82-at-msd-chim7-inveti-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Formula chimică a unei substanțe', '83', 'blue', 'right', 'small');
}
}, {id: 'p83-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Formula chimică a unui compus format din elementele A și B, care au valențele <em> x</em>, respectiv<em> y</em>, este:</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-1 col-md-2\"> </div><div class=\"col-xs-10 col-md-8 table-row-orange\">");
jade_mixins["img"]('img/chimie7/p83_formula-chimica_1.png');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p83-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Pentru stabilirea formulei chimice pe baza valențelor:</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<ul class=\"disc\"> <li>Se scriu simbolurile chimice ale elementelor componente.</li><li>Deasupra simbolului chimic se scrie valența elementului, cu cifre romane.</li><li>Valența unui element devine indice pentru celălalt element.</li><li>Dacă indicii sunt numere care se pot simplifica, se vor scrie ca indici cele mai mici numere întregi, pozitive, obținute prin simplificare.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p83-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Exemple: formulele chimice ale substanțelor formate din aluminiu și oxigen, respectiv carbon și oxigen.</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-xs-10 element-xs-center\">");
jade_mixins["img"]('img/chimie7/p83-inveti-1.png');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p83-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li> <strong>Aluminiu</strong> este cel mai răspândit metal în natură. Intră în compoziția argilelor și formează mai multe forme de oxid de aluminiu. Printre acestea, rubinele și safirele, folosite la confecționarea bijuteriilor.</li><li> <strong>Monoxidul de carbon</strong> este un gaz toxic, rezultat la arderea combustibililor în cantitate insuficientă de aer.</li><li><strong>Dioxidul de carbon</strong> este un gaz prezent în aer. Se formează la arderea completă a combustibililor.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-xs-8 col-md-5 element-xs-center\"> ");
jade_mixins["img4"]('img/chimie7/p83-coloana-1.png', '', '', 'Molecula de monoxid de carbon CO');
buf.push("</div><div class=\"element-xs-center col-xs-8 col-md-5\">");
jade_mixins["img4"]('img/chimie7/p83-coloana-2.png', '', '', 'Molecula de dioxid de carbon CO <sub>2</sub> ');
buf.push("</div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p83-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Determinarea formulei chimice<div class=\"hidden-xs\"></div> pentru compușii formați din mai multe elemente</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-xs-12 col-md-6\"> <div class=\"text-indent1-5\">Există substanțe alcătuite din trei elemente, care se numesc <em> compuși ternari</em>, și substanțe din mai multe elemente. Acestea pot conține în compoziția lor grupări de atomi care, în timpul celor mai multe transformări chimice, nu se modifică. Aceste grupări de atomi se numesc<em> radicali</em> și intră în alcătuirea substanțelor alături de ioni de metal, atomi de hidrogen sau alte grupe de atomi.</div><div class=\"text-indent1-5\">Radicalii au valența determinată de capacitatea lor de asociere cu ionii de metal sau cu atomii de hidrogen.</div></div><div class=\"col-xs-12 col-md-6\"> <div class=\"text-indent1-5\">Exemple de radicali:</div><table class=\"msd-table orange-table vertical-borders text-center\"><thead><tr><td>Formula radicalului</td><td>Denumirea radicalului </td><td>Valența</td></tr></thead><tr><td>– NO<sub>3</sub></td><td>azotat</td><td>I</td></tr><tr><td>– NO<sub>2 </sub></td><td>azotit</td><td>I</td></tr><tr><td>– CO<sub>3</sub></td><td>carbonat</td><td>II</td></tr><tr><td>– SO<sub>4</sub></td><td>sulfat</td><td>II</td></tr><tr><td>– SO<sub>3 </sub></td><td>sulfit</td><td>II</td></tr><tr> <td>– PO<sub>4</sub></td><td>fosfat</td><td>III</td></tr></table></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p83-at-msd-chim7-inveti-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Pentru scrierea formulelor chimice ale substanțelor care conțin radicali, se procedează la fel ca și în cazul compușilor binari.</div></div>");
}
}, 'retine', 'Reține','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"> <div class=\"col-md-2\"> \nExemple:");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-8 element-xs-center col-md-4\">");
jade_mixins["img"]('img/chimie7/p83-inveti-2-1.png');
buf.push("</div><div class=\"col-xs-1 element-xs-center col-md-1\">și</div><div class=\"col-xs-8 element-xs-center col-md-4\">");
jade_mixins["img"]('img/chimie7/p83-inveti-2-2.png');
buf.push("</div></div></div>");
}
}, 'no-title','');
}
}, {id: 'p83-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Copiați pe caiete tabelul de mai jos și completați-l conform cerințelor.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table purple-table vertical-borders text-center\"><thead><tr><td>Metalul</td><td>Valența <br/>metalului</td><td>Radicalul</td><td>Valența<br/>radicalului</td><td>Formula chimică<br/>a substanței</td></tr></thead><tr><td>Li </td><td>...</td><td>NO<sub>3</sub></td><td>...</td><td>...</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>K<sub>2</sub>SO<sub>3</sub></td></tr><tr><td>Zn</td><td>II</td><td>PO<sub>4</sub></td><td>...</td><td>...</td></tr><tr><td>Cu</td><td>II</td><td>...</td><td>...</td><td>CuSO<sub>4</sub></td></tr></table></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p83-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});