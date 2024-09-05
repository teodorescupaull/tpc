registerChapter({ chapter: "u1-38-39", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Concentrația procentuală masică a soluțiilor");
jade_mixins["subtitle"]("Paginile 38 - 39");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p38-at-msd-chim7-rezolvare',
          top: 6.8295,
          left: 25.1515,
          width: 73.2121,
          height: 32.8535,
          type: 'text'
        },
        {
          atom: 'p38-at-msd-chim7-stiai',
          top: 7.2579,
          left: 0.303,
          width: 24.4848,
          height: 52.3051
        },
        {
          atom: 'p38-at-msd-chim7-aplica',
          top: 39.9057,
          left: 25.1515,
          width: 73.3333,
          height: 31.3111
        },
        {
          atom: 'p38-at-msd-chim7-inveti',
          top: 71.5253,
          left: 25.0303,
          width: 73.5758,
          height: 26.5981
        },
        {
          atom: 'p38-at-msd-chim7-audio',
          top: 59.6144,
          left: -0.1818,
          width: 25.0909,
          height: 15.03,
          type: 'audio'
        }
      ],
      image: 'p038.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p39-at-msd-chim7-inveti',
          top: 6.5724,
          left: 5.6364,
          width: 67.7576,
          height: 11.0883,
          type: 'text'
        },
        {
          atom: 'p39-at-msd-chim7-aplica',
          top: 22.0823,
          left: 5.2727,
          width: 68.1212,
          height: 74.5844,
          type: 'text'
        },
        {
          atom: 'p39-at-msd-chim7-stiai',
          top: 14.3702,
          left: 74.1212,
          width: 25.2121,
          height: 50.5056
        },
        {
          atom: 'p39-at-msd-chim7-interactiv',
          top: 18.0548,
          left: 5.6364,
          width: 66.7879,
          height: 3.6332,
          type: 'exercise'
        },
        {
          atom: 'p39-at-msd-chim7-stiai-audio',
          top: 6.7438,
          left: 74,
          width: 25.5758,
          height: 7.1465,
          type: 'audio'
        }
      ],
      image: 'p039.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Concentrația procentuală masică a soluțiilor', '38', 'blue', 'left', 'small');
}
}, {id: 'p38-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><strong>Rezolvare</strong><div class=\"text-indent1-5\">Se calculează folosind regula de trei simplă, care stabilește relația de directă proporționalitate între mărimi.</div><div class=\"row items-center\"><div class=\"col-md-7 text-center\">");
jade_mixins["space1"]();
buf.push("<p>150 g de saramură …………………………… 30 g de sare</p><p>100 g de saramură …………………………… x g de sare</p><p>x = (100 g &bull; 30 g) : 150 g = 20 g de sare</p></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Pentru a generaliza, se folosesc următoarele notații:</div><ul class=\"disc\"><li>masa de soluție = <em>m</em><sub>s</sub></li><li>masa de substanță dizolvată = <em>m</em><sub>d</sub></li><li>masa de solvent (apă) = <em>m</em><sub>apă</sub></li><li>concentrația procentuală de masă este egală cu masa de substanță, exprimată în grame, dizolvată în 100 g de soluție. Se notează cu <em>c.</em></li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row items-center\"><div class=\"col-md-7 text-center\">");
jade_mixins["space1"]();
buf.push("<p><em>m</em><sub>s </sub>g de soluție ……………………………<em>m</em><sub>d </sub>g de dizolvat</p><p>100 g de soluție ……………………………<em>c </em>g de dizolvat</p>");
jade_mixins["space1"]();
buf.push("<div class=\"col-xs-12 col-md-6\"></div><div class=\"msd-box orange\"><div class=\"box-inner\"><div class=\"row items-center\"><div class=\"col-md-6 col-xs-6\"><span><em>c = </em></span><span class=\"fraction\"><div class=\"numarator\"><em>m</em><sub>d </sub></div><div class=\"numitor\"><em>m</em><sub>s</sub></div></span><span>&bull; 100;</span></div><div class=\"col-md-6 col-xs-6\"><p><em>m<sub>s</sub>= m<sub>d</sub>+ m<sub>apă</sub></em></p></div></div></div></div></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p38-at-msd-chim7-rezolvare'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row items-center\"><div class=\"col-md-6 col-xs-12\"><ul class=\"disc\"><li>În apa Oceanului Planetar concentrația de săruri, în principal sare de bucătărie, care îi dau gustul sărat, este, în medie, de 3,5%.</li></ul></div><div class=\"col-md-6 col-xs-12\">");
jade_mixins["img"]("img/chimie7/p38-coloana-1.jpg");
buf.push("<div class=\"fs09 text-right\">Oceanul Atlantic</div></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row items-center\"><div class=\"col-md-6 col-xs-12\">");
jade_mixins["img"]("img/chimie7/p38-coloana-2.jpg");
buf.push("<div class=\"fs09 text-left\">Marea Moartă</div></div><div class=\"col-md-6 col-xs-12\"><ul class=\"disc\"><li>În Marea Moartă salinitatea este de peste 30%, ceea ce împiedică dezvoltarea florei și a faunei, de unde și numele.</li></ul></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row items-center\"><div class=\"col-md-6 col-xs-12\"><ul class=\"disc\"><li>Lacul Don Juan din Antarctica este chiar mai sărat, cu o salinitate de peste 40%. Chiar dacă se află într‑una dintre cele mai reci zone din Antarctica, este atât de sărat, încât niciodată nu îngheață, nici măcar la temperaturi scăzute de –40 °C.</li>");
jade_mixins["space1"]();
buf.push("<li>În România, Lacul Sărat din Județul Brăila are salinitatea crescută, peste 80 g/L.</li></ul></div><div class=\"col-md-6 col-xs-12\">");
jade_mixins["img"]("img/chimie7/p38-coloana-3.jpg");
buf.push("<div class=\"fs09 text-right\">Lacul Sărat</div></div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p38-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p38-stiai-ca.jpg");
jade_mixins["space1"]();
}
}, "st_pg38");
}
}, 'no-title', '','');
}
}, {id: 'p38-at-msd-chim7-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-h3 msd-purple\">Problemă rezolvată</div><div class=\"text-indent1-5\">Calculează concentrația procentuală a unei soluții care se obține prin dizolvarea a 25 g de sodă caustică în 125 g de apă.</div><table class=\"msd-table purple-table\"><thead class=\"text-center\"><tr><td>Etapele de lucru</td><td>Rezolvare</td></tr></thead><tbody><tr><td><ul class=\"numbers\"><li>Indică mărimile cunoscute</li></ul></td><td><em>m<sub>d</sub></em>= 25 g de sodă caustică<br/><em>m<sub>apă</sub></em>= 125 g</td></tr><tr><td><ul class=\"numbers n2\"><li>Indică mărimile necunoscute.</li></ul></td><td><em>m<sub>s</sub></em>= ? ;<em>c</em>% = ?</td></tr><tr><td><ul class=\"numbers n3\"><li>Calculează masa soluției obținute.</li></ul></td><td><em>m<sub>s</sub>= m<sub>d</sub>+</em><em>m<sub>apă</sub></em>= 25 g + 125 g<br/><em>m<sub>s</sub></em>= 150 g de soluție</td></tr><tr><td><ul class=\"numbers n4\"><li>Calculează concentrația procentuală a soluției</li></ul></td><td><span><em>c =</em></span><span class=\"fraction\"><div class=\"numarator\"><em>m</em><sub>d</sub></div><div class=\"numitor\"><em>m</em><sub>s</sub></div></span><span>&bull; 100</span><br/><span><em>c =</em></span><span class=\"fraction\"><div class=\"numarator\">25 g</div><div class=\"numitor\">150 g</div></span><span>&bull; 100 = 16,66%</span></td></tr></tbody></table></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p38-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm</div><ul class=\"numbers\"><li>Cântărește pe o sticlă de ceas 5 g de zahăr tos. Măsoară cu un cilindru gradat 95 mL de apă distilată. Amestecă cele două substanțe într-un pahar Berzelius (ρ<sub>apă</sub>= 1 g/cm<sup>3</sup>).</li><li>Notează în caiet observațiile și calculează concentrația procentuală de masă a soluției obținute, soluție pe care o numim soluția 1.</li><li>În soluția 1 adaugă 5 g de zahăr. Calculează concentrația procentuală de masă a noii soluții, pe care o numim soluția 2.</li><li>Calculează concentrația procentuală de masă pentru soluția 3, pe care o vei obține prin adăugarea a 45 mL de apă distilată în soluția 2.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><ul class=\"disc\"><li>Zahărul se dizolvă în apă și se obține o soluție care are concentrația procentuală masică 5%.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p38-at-msd-chim7-inveti'});
buf.push("\n");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Concentrația procentuală masică a soluțiilor', '39', 'blue', 'right', 'small');
}
}, {id: 'p39-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Prin adăugarea de zahăr în soluția 1, concentrația procentuală a soluției (2) crește la 9,52%.</li><li>Prin adăugare de apă în soluția 2, concentrația procentuală a soluției (3) scade la 6,66%.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Prin adăugare de dizolvat, se mărește concentrația soluției. În acest caz, soluția se concentrează. Prin adăugare de apă, se micșorează concentrația soluției. Deci, soluția se diluează.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p39-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li>Zahărul este un aliment folosit pentru a îndulci mâncărurile și băuturile, dar și drept conservant.");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p39-coloana.jpg");
jade_mixins["space1"]();
buf.push("</li><li>Excesul de zahăr este foarte dăunător organismului, deoarece:<ul class=\"bullets\"><li>favorizează apariția problemelor dentare;</li><li>influențează negativ funcționarea sistemului cardiovascular și a mușchiului inimii;</li><li>duce la instalarea stării de obezitate;</li><li>determină apariția diabetului zaharat;</li><li>favorizează dezvoltarea celulelor canceroase</li></ul></li><li>Obezitatea în rândul copiilor este tot mai întâlnită, pe fondul consumului de dulciuri și al lipsei de activitate fizică.</li></ul>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p39-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p39-stiai-ca.jpg");
jade_mixins["space1"]();
}
}, "st_pg39");
}
}, 'no-title', '','');
}
}, {id: 'p39-at-msd-chim7-stiai-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Împreună cu colega/colegul de bancă, copiați și completați tabelul de mai jos după modelul de rezolvare oferit pentru soluția S<sub>1</sub>.</li></ul><table class=\"msd-table purple-table text-center\"><thead><tr><td>Soluția</td><td><em>c</em>%</td><td><em>m</em><sub>d</sub></td><td><em>m</em><sub>s</sub></td><td><em>m</em><sub>apă</sub></td></tr></thead><tbody><tr><td class=\"table-row-orange\">S<sub>1</sub></td><td class=\"table-row-orange\">10%</td><td class=\"table-row-orange msd-red\">45 g</td><td class=\"table-row-orange msd-red\">450 g</td><td class=\"table-row-orange\">405 g</td></tr><tr><td>S<sub>2</sub></td><td>...</td><td>60 g</td><td>300 g</td><td>...</td></tr><tr><td>S<sub>3</sub></td><td>25%</td><td>... g</td><td>...</td><td>125 g</td></tr><tr><td>S<sub>4</sub></td><td>30%</td><td>90 g</td><td>...</td><td>...</td></tr><tr><td>S<sub>5</sub></td><td>...</td><td>30 g</td><td>...</td><td>270 g</td></tr><tr><td>S<sub>6</sub></td><td>15%</td><td>20 g</td><td>...</td><td>...</td></tr><tr><td>S<sub>7</sub></td><td>...</td><td>...</td><td>800 g</td><td>640 g</td></tr></tbody></table><ul class=\"numbers\"><li><strong class=\"msd-purple font-semi-bold\">Joc și chimie.</strong>Pentru itemii de mai jos există o singură variantă corectă. Scrie în caiet litera corespunzătoare acesteia (după modelul din partea de jos a exercițiului). Rezolvarea corectă a tuturor itemilor te va conduce la descoperirea unui mesaj care te va bucura.<ul class=\"letters\"><li class=\"text-left\">Soluția de alcool în apă:<br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">A</strong>&nbsp;este un amestec omogen;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">B</strong>&nbsp;este un amestec eterogen;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">C</strong>&nbsp;nu este un amestec.</div></div></li>");
jade_mixins["space1"]();
buf.push("<li class=\"text-left\">În soluția care conține 5 g de zahăr și 245 g de apă, masa solventului este: <br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">G</strong>&nbsp;5 g;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">H</strong>&nbsp;250 g;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">I</strong>&nbsp;245 g.</div></div></li>");
jade_mixins["space1"]();
buf.push("<li class=\"text-left\">Masa de zahăr dizolvată în 300 g de soluție cu concentrația procentuală <em>c </em>= 15% este:<br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">U</strong>&nbsp;15 g;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">V</strong>&nbsp;300 g;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">Z</strong>&nbsp;45 g.</div></div></li>");
jade_mixins["space1"]();
buf.push("<li class=\"text-left\">Concentrația procentuală a soluției care conține 40 g de zahăr și 360 g de apă este: <br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">D</strong>&nbsp;40%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">E</strong>&nbsp;10%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">F</strong>&nbsp;20%.</div></div></li>");
jade_mixins["space1"]();
buf.push("<li class=\"text-left\">Dacă se evaporă 40 g de apă din soluția de la punctul <strong class=\"msd-purple\">d </strong>, atunci se obține o soluție cu concentrația procentuală egală cu: <br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">C</strong>&nbsp;11,11%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">D</strong>&nbsp;14,12%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">E</strong>&nbsp;15%.</div></div></li>");
jade_mixins["space1"]();
buf.push("<li class=\"text-left\">Se amestecă 350 g de soluție de zahăr cu concentrația procentuală <em>c </em>= 12% cu 10 g de zahăr și cu 120 g de apă. Concentrația procentuală a soluției care s-a format este:<br/><div class=\"row\"><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">E</strong>&nbsp;10,83%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">F</strong>&nbsp;12,56%;</div><div class=\"col-md-4 col-xs-4\"><strong class=\"msd-purple\">G</strong>&nbsp;16,24%.</div></div></li></ul><div class=\"row items-center\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p39-table.png");
buf.push("</div></div></li><li>Se prepară 600 g de soluție de hidroxid de potasiu cu o concentrație de 24% prin amestecarea unei soluții de hidroxid de potasiu de concentrație 30% cu o soluție de hidroxid de potasiu de concentrație 20%. Determină:<ul class=\"letters\"><li>masa de hidroxid de potasiu și masa de apă din soluția finală.</li><li>masele celor două soluții care s-au amestecat pentru a obține soluția cu concentrația 24%.</li></ul></li></ul></div>");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p39-aplica-ex3.jpg");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p39-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"block-content\"><span>Aranjează următoarele soluții în ordinea crescătoare a concentrațiilor procentuale.</span></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "int_pag.39");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='1' class=\"item blue-box\"><p>S<sub>1</sub></p><p>25 g de sare și<br/>175 g de apă</p></div><div data-index='4' class=\"item blue-box\"><p>S<sub>2</sub></p><p>55 g de sare și<br/>195 g de apă</p></div><div data-index='3' class=\"item blue-box\"><p>S<sub>3</sub></p><p>36 g de sodă caustică și<br/>164 g de apă</p></div><div data-index='2' class=\"item blue-box\"><p>S<sub>4</sub></p><p>40 g de sare și<br/>200 g de apă</p></div>");
}
}, {scoreBox: false});
}
});
}
}, {name: 'p39-ex-aplica' });
}
}, 'aplica no-title', 'Reține','');
}
}, {id: 'p39-at-msd-chim7-interactiv'});
buf.push("\n\n");
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});