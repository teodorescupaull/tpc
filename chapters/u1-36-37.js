registerChapter({ chapter: "u1-36-37", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Soluții apoase. Solubilitatea substanțelor\nConcentrația procentuală masică a soluțiilor");
jade_mixins["subtitle"]("Paginile 36 - 37");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p36-at-msd-chim7-conclusion',
          top: 7.0009,
          left: 25.7576,
          width: 72.3636,
          height: 8.8603,
          type: 'text'
        },
        {
          atom: 'p36-at-msd-chim7-retine-1',
          top: 16.084,
          left: 25.3939,
          width: 73.0909,
          height: 11.7738
        },
        {
          atom: 'p36-at-msd-chim7-inveti',
          top: 28.2519,
          left: 25.2727,
          width: 72.9697,
          height: 24.2845
        },
        {
          atom: 'p36-at-msd-chim7-retine-2',
          top: 55.9297,
          left: 25.5152,
          width: 72.9697,
          height: 12.8021
        },
        {
          atom: 'p36-at-msd-chim7-aplica',
          top: 72.8963,
          left: 25.5152,
          width: 73.3333,
          height: 24.7987,
          type: 'text'
        },
        {
          atom: 'p36-at-msd-chim7-verifica',
          top: 6.8295,
          left: 0.303,
          width: 24.6061,
          height: 88.0377,
          type: 'text'
        },
        {
          atom: 'p36-at-msd-chim7-audio',
          top: 52.6735,
          left: 25.0303,
          width: 73.4545,
          height: 3.0334,
          type: 'audio'
        },
        {
          atom: 'p36-at-msd-chim7-aplica-interactiv',
          top: 69.2117,
          left: 25.5152,
          width: 72.8485,
          height: 3.4619,
          type: 'exercise'
        }
      ],
      image: 'p036.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p37-at-msd-chim7-stii',
          top: 9.0574,
          left: 6.1212,
          width: 67.7576,
          height: 12.6307,
          type: 'text'
        },
        {
          atom: 'p37-at-msd-chim7-inveti-1',
          top: 22.168,
          left: 5.7576,
          width: 68.1212,
          height: 58.9032
        },
        {
          atom: 'p37-at-msd-chim7-retine',
          top: 80.9512,
          left: 5.6364,
          width: 68.4848,
          height: 8.5176
        },
        {
          atom: 'p37-at-msd-chim7-inveti-2',
          top: 89.8629,
          left: 5.1515,
          width: 69.2121,
          height: 7.832
        },
        {
          atom: 'p36-at-msd-chim7-materie',
          top: 7.0009,
          left: 74.4848,
          width: 25.2121,
          height: 86.7524,
          type: 'text'
        }
      ],
      image: 'p037.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Soluții apoase. Solubilitatea substanțelor', '36', 'blue', 'left', 'small');
}
}, {id: 'p36-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><strong>Concluzie</strong><div class=\"text-indent1-5\">Solubilitatea gazelor scade odată cu creșterea temperaturii. Gazele sunt mai solubile în lichide la temperaturi joase. Dioxidul de carbon, care este un gaz, se dizolvă mai ușor în apă rece decât în apă caldă.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p36-at-msd-chim7-conclusion'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Solubilitatea substanțelor depinde de natura substanței dizolvate și a dizolvantului și de temperatură.</li><li>Solubilitatea poate să crească sau poate să scadă odată cu creșterea temperaturii, în funcție de starea de agregare a substanțelor.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p36-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm (4)</div><ul class=\"numbers\"><li>Într-un pahar Berzelius, <strong>P<sub>1 </sub></strong>,  toarnă 100 mL de apă.</li>");
jade_mixins["space1"]();
buf.push("<li>Adaugă o spatulă de sare și amestecă până se dizolvă sarea. Continuă să adaugi sare, câte o spatulă, până când observi că aceasta nu se mai dizolvă.</li>");
jade_mixins["space1"]();
buf.push("<li>Înregistrează numărul de spatule de sare dizolvată în apă.</li>");
jade_mixins["space1"]();
buf.push("<li>Repetă apoi acest experiment într-un alt pahar Berzelius, <strong>P<sub>2 </sub></strong>, folosind zahăr în loc de sare.</li></ul>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Urmărește transformările care au loc în cele două pahare.</li><li>Notează observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>În 100 mL de apă se dizolvă mai mult zahăr decât sare.</li><li>La un moment dat, în niciunul dintre pahare substanța solidă nu se mai dizolvă.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Apa dizolvă cantități diferite și limitate din substanțe diferite.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p36-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Soluțiile se clasifică, după raportul masă de solvat/masă de solvent, în:</div><ul class=\"numbers\"><li><strong>soluții saturate </strong>- conțin cantitatea maximă de substanță care poate fi dizolvată într-o anumită cantitate de solvent, la o temperatură dată;</li><li><strong>soluții nesaturate </strong>- soluții în care se mai pot dizolva cantități noi de solvat.</li></ul><div class=\"text-indent1-5\"><ul class=\"letters\"><li><em>Soluții diluate </em>- conțin o cantitate mică de solvat într-o cantitate mare de solvent.</li><li><em>Soluții concentrate </em>- conțin o cantitate mare de solvat, într-o anumită cantitate de solvent, dar nu atât de mare încât să se ajungă la saturare.</li></ul></div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p36-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p36-retine.jpg");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'no-title', '','');
}
}, {id: 'p36-at-msd-chim7-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Copiază pe caiet și completează tabelul de mai jos:</li></ul><div class=\"msd-table-overflow tpg36\"> <table class=\"msd-table purple-table\"><thead class=\"text-center\"><tr><td class=\"text-center\">soluția</td><td>substanțele din soluție</td><td>masa de solvat</td><td>masa de solvent</td><td>masa soluției</td></tr></thead><tbody><tr><td class=\"text-center\">1.</td><td>50 g de apă + 25 g de alcool</td><td></td><td></td><td></td></tr><tr><td class=\"text-center\">2.</td><td>75 g de apă + 150 g de alcool</td><td></td><td></td><td></td></tr><tr><td class=\"text-center\">3.</td><td>soluția 1. + soluția 2.</td><td></td><td></td><td></td></tr></tbody></table></div><ul class=\"numbers\"><li>Copiază în caiet și scrie litera <strong>A </strong>sau <strong>F </strong>, în funcție de valoarea de adevăr, pentru fiecare dintre afirmațiile de mai jos.<ul class=\"letters\"><li>Apa distilată este o soluție lichidă.</li><li>Amestecul omogen de două sau mai multe substanțe obținut în urma procesului de dizolvare se numește soluție.</li><li>Diluarea unei soluții de piatră‑vânătă în apă se realizează prin adăugare de apă.</li><li>Soluțiile apoase sunt substanțe compuse în care dizolvantul este apa.</li><li>Varul stins este o substanță parțial solubilă în apă.</li></ul></li></ul></div>");
jade_mixins["space1"]();
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p36-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"></div><div class=\"text-indent1-5\">Alege varianta potrivită pentru ca următoarele enunțuri să fie adevărate:</div>");
jade_mixins["audio"].call({
block: function(){
buf.push(" ");
}
}, "aplica_pag_36");
}
}, 'aplica no-title', 'Aplică','');
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push("<span class=\"msd-purple\">a. </span>Diluarea unei soluții se poate realiza prin adăugare de<div class=\"inline-block\">");
jade_mixins["pickone"](1, ['solvent', 'solvat.'], {
        name: 'pickone-v2-c',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div>");
jade_mixins["space1"]();
buf.push("<span class=\"msd-purple\">b. </span>Saramura este<div class=\"inline-block\">");
jade_mixins["pickone"](2, ['o substanță pură', 'o soluție.'], {
        name: 'pickone-v2-c2',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div>");
jade_mixins["space1"]();
buf.push("<span class=\"msd-purple\">c. </span>Soluția<div class=\"inline-block\">");
jade_mixins["pickone"](1, ['saturată', 'nesaturată'], {
        name: 'pickone-v2-c3',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div><span>conține cantitatea maximă de substanță care poate fi dizolvată într-o anumită cantitate de solvent, la o anumită temperatură.</span>");
jade_mixins["space1"]();
buf.push("<span class=\"msd-purple\">d. </span><div class=\"inline-block\">");
jade_mixins["pickone"](1, ['Apa', 'Uleiul'], {
        name: 'pickone-v2-c4',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div><span>este unul dintre dizolvanții utilizați foarte des în practică.</span>");
jade_mixins["space1"]();
buf.push("<span class=\"msd-purple\">e. </span>Masa soluției care conține 25 g de sodă caustică și 195 g de apă este de<div class=\"inline-block\">");
jade_mixins["pickone"](2, ['195 g', '220 g.'], {
        name: 'pickone-v2-c5',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div>");
jade_mixins["space1"]();
buf.push("<span class=\"msd-purple\">f. </span>Piatra-vânătă se dizolvă mai repede în apă<div class=\"inline-block\">");
jade_mixins["pickone"](1, ['caldă', 'rece.'], {
        name: 'pickone-v2-c6',
        className: 'md-pickone-inline',
        popup: false,
        showResults: true
        });
buf.push("</div>");
jade_mixins["space1"]();
}
});
}
}, {name: 'pickone-inline-c'});
}
}, {id: 'p36-at-msd-chim7-aplica-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em><ul class=\"numbers\"><li>Apa se găsește în natură:<ul class=\"letters\"><li>predominant în stare gazoasă;</li><li>predominant în stare solidă;</li><li>predominant în stare lichidă.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Soluția este:<ul class=\"letters\"><li>un amestec omogen;</li><li>un amestec eterogen;</li><li>o substanță compusă.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Substanța care se dizolvă se numește:<ul class=\"letters\"><li>solvat;</li><li>dizolvant;</li><li>solvent.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Dizolvarea:<ul class=\"letters\"><li>este un fenomen chimic;</li><li>este un fenomen fizic;</li><li>nu este un fenomen.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Reprezintă o soluție:<ul class=\"letters\"><li>apă + pilitură de fier;</li><li>alcool + apă;</li><li>apă + pulbere de sulf.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Favorizează dizolvarea zahărului în apă:<ul class=\"letters\"><li>scăderea temperaturii;</li><li>lumina;</li><li>creșterea temperaturii.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Este corectă afirmația:<ul class=\"letters\"><li>apa de izvor este substanță pură;</li><li>solubiltatea gazelor în apă scade cu creșterea temperaturii;</li><li>alcoolul este insolubil în apă.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>O soluție se poate concentra:<ul class=\"letters\"><li>prin adăugare de solvent;</li><li>prin adăugare de dizolvant;</li><li>prin evaporare de solvent.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Este incorectă afirmația:<ul class=\"letters\"><li>în soluția saturată se mai poate dizolva solvat;</li><li>apa potabilă este o soluție nesaturată;</li><li>soluția concentrată este nesaturată.</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<em>Acordă-ți un punct pentru fiecare răspuns corect și un punct din oficiu.</em><br/><strong>Total: 10 puncte</strong>");
jade_mixins["space1"]();
buf.push("<br/><em class=\"em-rasturnat\">1. c.; 2. a.; 3. a.; 4. b.; 5. b.; 6. c; 7. b; 8. c; 9.a.</em><br/><em class=\"em-rasturnat\">Răspunsuri:</em></div>");
}
}, 'verifica', 'Verifică-te singur!','');
}
}, {id: 'p36-at-msd-chim7-verifica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '8', 'Concentrația procentuală masică a soluțiilor', '37', 'blue', 'left', 'big');
}
}, {id: 'p37-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Întâlnești frecvent, în diverse surse de informare, inclusiv în manualele pe care le folosești la alte discipline de învățământ, exprimarea în procente a unor indicatori: demografici, geografici, politici, sociali, bancari etc</li><li>78% din compoziția aerului este azot, 21% oxigen, 1% alte gaze (procente de volum). Altfel spus, în 100 L de aer se găsesc 78 L de azot, 21 L de oxigen, 1 L de alte gaze.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p37-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">În practică, în diverse domenii de activitate se folosesc frecvent soluțiile apoase și, în general, este foarte importantă cantitatea solvatului și solventului dintr-o soluție. Există mai multe modalități de exprimare a raportului solvat/solvent, solvat/soluție; una dintre acestea este <strong>concentrația procentuală de masă.</strong></div><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">Privește cu atenție imaginile de mai jos, în care sunt prezentate trei soluții întâlnite frecvent de tine în viața de zi cu zi: ser fiziologic (<strong>a</strong>),  soluție pentru acumulatorul auto (<strong>b</strong>), alcool sanitar (<strong>c</strong>).</div></div><div class=\"row\"><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p37-inveti-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p37-inveti-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p37-inveti-c.jpg', 'c', 'grey');
buf.push("</div></div><div class=\"block-content\"><div class=\"text-indent1-5\">Pe fiecare etichetă este trecută concentrația soluției (%). Care soluție este mai concentrată? Dar mai diluată?</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Constatăm că:</div><ul class=\"disc\"><li>Serul fiziologic (a) este utilizat în medicină ca o soluție de clorură de sodiu cu concentrația de 0,9%, ceea ce înseamnă că la fiecare 100 de părți de ser fiziologic se găsesc dizolvate 0,9 părți de clorură de sodiu (sare de bucătărie).");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\"><strong>100 g de ser fiziologic → 0,9 g de clorură de sodiu</strong></div></li>");
jade_mixins["space1"]();
buf.push("<li>Soluția de acid sulfuric este o soluție utilizată în acumulatorii auto (b), care are concentrația 37%, ceea ce înseamnă că la fiecare 100 de părți de soluție de acid sulfuric sunt dizolvate 37 de părți de acid sulfuric.");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\"><strong>100 g de soluție de acid sulfuric → 37 g de acid sulfuric</strong></div></li>");
jade_mixins["space1"]();
buf.push("<li>Pentru alcoolul sanitar (c), concentrația este de 70%, ceea ce înseamnă că la fiecare 100 de părți de soluție de alcool sanitar sunt dizolvate 70 de părți de alcool etilic.");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\"><strong>100 g de soluție de alcool sanitar → 70 g de alcool etilic</strong></div></li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p37-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Masa de substanță, exprimată în grame, dizolvată în 100 g de soluție reprezintă concentrația procentuală de masă.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p37-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p37-coloana-1.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă oxigenată – soluție 3%, dezinfectant</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p37-coloana-2.jpg', '');
buf.push("<div class=\"fs08 text-right\">Tinctură de iod, dezinfectant</div></div></div><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p37-coloana-3.jpg', '');
buf.push("<div class=\"fs08 text-right\">Soluții perfuzabile, hidratante, nutritive</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p37-coloana-4.jpg', '');
buf.push("<div class=\"fs08 text-right\">Soluție pentru curățat ochelarii</div></div></div><div class=\"row\"><div class=\"col-md-12\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p37-coloana-5.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă de gură</div></div></div></div>");
}
}, 'materie', 'Soluții folosite în medicină:','');
}
}, {id: 'p36-at-msd-chim7-materie'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Exprimarea matematică a concentrației procentuale de masă a unei soluții</div><div class=\"text-indent1-5\">Se dizolvă 30 g de sare într-un pahar Berzelius care conține 120 g de apă. Se obțin 150 g de saramură. Ce concentrație procentuală va avea soluția obținută?</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p37-at-msd-chim7-inveti-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});