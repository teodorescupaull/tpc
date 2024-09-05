registerChapter({ chapter: "u2-62-63", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Relația dintre structura învelișului de electroni și poziția ocupată de un element în Tabelul periodic al elementelor");
jade_mixins["subtitle"]("Paginile 62 - 63");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p62-at-msd-chim7-stii',
          top: 16,
          left: 26,
          width: 68,
          height: 12.8
        },
        {
          atom: 'p62-at-msd-chim7-inveti',
          top: 29.4,
          left: 26,
          width: 68,
          height: 53
        },
        {
          atom: 'p62-at-msd-chim7-retine',
          top: 83,
          left: 26,
          width: 55,
          height: 13
        },
        {
          atom: 'p62-at-msd-chim7-vrei',
          top: 6.6,
          left: 0,
          width: 25,
          height: 90
        },
        {
          atom: 'p62-at-msd-chim7-interactive',
          top: 83,
          left: 82,
          width: 12,
          height: 6,
          type: 'exercise'
        }
      ],
      image: 'p062.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p63-at-msd-chim7-exemplu',
          top: 8,
          left: 6,
          width: 68,
          height: 58
        },
        {
          atom: 'p63-at-msd-chim7-aplica',
          top: 66.6,
          left: 6,
          width: 68,
          height: 12
        },
        {
          atom: 'p63-at-msd-chim7-fisa-observare',
          top: 79.3,
          left: 6,
          width: 90,
          height: 16.5
        },
        {
          atom: 'p63-at-msd-chim7-verifica',
          top: 8,
          left: 75,
          width: 25,
          height: 69
        }
      ],
      image: 'p063.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '7', 'Relația dintre structura învelișului de electroni și poziția ocupată de un element în Tabelul periodic al elementelor', '62', 'blue', 'left', 'big mb0 pb2');
}
}, {id: 'p62-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Numărul atomic Z oferă mai multe informații despre atomul respectiv. Acesta indică numărul de protoni din nucleul atomului, numărul de electroni din învelișul de electroni, dar și numărul de ordine, așezarea elementului în Tabelul periodic al elementelor. De exemplu oxigenul, cu <em>Z </em>= 8, are 8 protoni în nucleu, 8 electroni în învelișul de electroni și ocupă locul al 8-­lea în Tabelul periodic al elementelor.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p62-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div><div class=\"text-indent1-5\">Privește cu atenție configurațiile învelișurilor de electroni ale atomilor elementelor ");
jade_mixins["atom_AZ"]("Be,","&nbsp;","4");
jade_mixins["atom_AZ"]("Mg,","&nbsp;","12");
jade_mixins["atom_AZ"]("Ne,","&nbsp;","10");
buf.push("și ");
jade_mixins["atom_AZ"]("Ar.","&nbsp;","18");
buf.push("Copiază în caiet, apoi completează tabelul prezentat mai jos. Indică asemănările și deosebirile dintre structurile învelișurilor de electroni ale acestor elemente.</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-3 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p62-atombe.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Be</div></div><div class=\"col-md-3 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p62-atommg.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Mg</div></div><div class=\"col-md-3 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p62-atomne.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Ne</div></div><div class=\"col-md-3 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p62-atomar.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Ar</div></div></div>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table orange-table responsive-table-sm\"><thead><tr><td class=\"fb text-center\">Element</td><td class=\"fb text-center\">Stratul <i> <b>");
jade_mixins["strat_atomic"]("1");
buf.push("</b></i></td><td class=\"fb text-center\">Stratul <i> <b>");
jade_mixins["strat_atomic"]("2");
buf.push("</b></i></td><td class=\"fb text-center\">Stratul <i> <b>");
jade_mixins["strat_atomic"]("3");
buf.push("</b></i></td><td class=\"fb text-center\">Numărul de electroni de pe ultimul strat</td><td class=\"fb text-center\">Numărul de straturi</td></tr></thead><tbody><tr><td class=\"text-center\">...</td><td class=\"text-center\">...</td><td class=\"text-center\">...</td><td class=\"text-center\">...</td><td class=\"text-center\">...</td><td class=\"text-center\">...</td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Atomii de beriliu (Be) și neon (Ne) au câte două straturi de electroni. Atomii de magneziu (Mg) și argon (Ar) au câte trei straturi de electroni.</div><div class=\"text-indent1-5\">În Tabelul Periodic, elementele Be și Ne se găsesc în perioada a 2-­a; Mg și Ar – în perioada a 3-­a. De aici rezultă că numărul de straturi de electroni ne indică și numărul perioadei în care se găsește elementul respectiv.</div><div class=\"text-indent1-5\">De asemenea, atomii de beriliu și magneziu au pe ultimul strat câte 2 electroni, iar neonul și argonul au pe ultimul strat câte 8 electroni.</div><div class=\"text-indent1-5 pb1\">În Tabelul Periodic, Be și Mg se găsesc în grupa a 2-­a, iar Ne și Ar în grupa a 18-­a.</div><ul class=\"arrows text-left\"> <li>Cunoscând numărul de electroni de pe ultimul strat, putem determina numărul grupei principale din care face parte elementul.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','pb1');
}
}, {id: 'p62-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"row\"> <div class=\"col-md-10 col-xs-9 pb1\"> <div class=\"pb1\">Grupa 17, numită și grupa halogenilor, este singura grupă din Tabelul periodic care cuprinde elemente aflate în cele trei stări de agregare:</div><ul class=\"disc\"> <li> <strong> <em>fluorul</em></strong>, gaz <div class=\"wrap inline-block\">galben­-pal, </div>&nbsp;foarte reactiv și toxic;</li><li> <strong> <em>clorul</em></strong>, gaz verzui, toxic;</li><li> <strong> <em>bromul</em></strong>, singurul nemetal lichid la 25 °C și la presiune normală; brun-roșcat, miros iritant, foarte toxic;</li><li> <strong> <em>iodul</em></strong>, solid, culoare <div class=\"wrap inline-block\">cenușiu-­violacee,</div>&nbsp;și cu proprietatea de a sublima;</li><li> <strong> <em>astatinul</em></strong>, element care emite în mod spontan radiații. Este puțin studiat;</li><li> <strong> <em>tennessine</em></strong>, element artificial sintetizat în 2010 de cercetători din Rusia <div class=\"wrap inline-block\">și SUA.</div></li></ul></div><div class=\"col-md-2 col-xs-3\">");
jade_mixins["img"]('img/chimie7/p62-halogeni.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs07 text-center\">Grupa 17, grupa halogenilor</div></div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','text-left');
}
}, {id: 'p62-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><ul class=\"disc\"> <li>Numărul perioadei este egal cu numărul de straturi de electroni ale unui atom.</li><li>Pentru elementele din grupele 1 și 2, numărul grupei este egal cu numărul de electroni de pe ultimul strat.</li><li>Pentru elementele din grupele 13-­18, numărul grupei se determină adunând numărul de electroni de pe ultimul strat cu 10.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p62-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div style=\"font-family: &quot;IBMPlexSans-Regular&quot;;\" class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"row pb1 d-flex text-left\"><div class=\"col-xs-1\"><div class=\"msd-exercise-icon blue\"></div></div><div class=\"col-xs-11\">Aranjează următoarele elemente în ordinea crescătoare a:</div></div><div class=\"spacer05\"></div>");
}
}, 'int_pag62_a');
jade_mixins["validator"].call({
block: function(){
jade_mixins["exercise"].call({
block: function(){
buf.push("<ul class=\"arrows marker-orange\"><li>numărului grupei din care fac parte (de la stânga la dreapta – grupa 1, grupa 2, ... <div class=\"wrap inline-block\">grupa 18)</div></li></ul>");
jade_mixins["space1"]();
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='3' class=\"item mag-box\"><sub>13</sub><span>Al</span></div><div data-index='8' class=\"item mag-box\"><sub>10</sub><span>Ne</span></div><div data-index='1' class=\"item mag-box\"><sub>19</sub><span>K</span></div><div data-index='4' class=\"item mag-box\"><sub>6</sub><span>C</span></div><div data-index='7' class=\"item mag-box\"><sub>17</sub><span>Cl</span></div><div data-index='5' class=\"item mag-box\"><sub>7</sub><span>N</span></div><div data-index='2' class=\"item mag-box\"><sub>12</sub><span>Mg</span></div><div data-index='6' class=\"item mag-box\"><sub>16</sub><span>S</span></div>");
}
}, {scoreBox: false});
}
}, {name: 'p62-interactive'});
jade_mixins["space1"]();
buf.push("<ul class=\"arrows marker-orange\"><li>numărului perioadei (de sus în jos – perioada 1, perioada 2, ...)             </li></ul>");
jade_mixins["audio"].call({
block: function(){
jade_mixins["space1"]();
}
}, 'int_pag62_b');
jade_mixins["exercise"].call({
block: function(){
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<div data-index='2' class=\"item mag-box\"><sub>9</sub><span>F</span></div><div data-index='3' class=\"item mag-box\"><sub>15</sub><span>P</span></div><div data-index='1' class=\"item mag-box\"><sub>2</sub><span>He</span></div><div data-index='4' class=\"item mag-box\"><sub>20</sub><span>Ca</span></div>");
}
}, {scoreBox: false});
jade_mixins["space1"]();
}
}, {name: 'p62-ex-retine-2'});
}
});
buf.push("</div></div>");
}
}, {id: 'p62-at-msd-chim7-interactive'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Relația dintre structura învelișului de electroni și poziția ocupată de un element în Tabelul periodic al elementelor', '63', 'blue', 'right', 'small');
}
}, {id: 'p63-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><em>De exemplu:</em>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <ul class=\"numbers text-left marker-orange\"> <div class=\"col-sm-6 col-xs-12\"> <li><strong> \nNa (<em>Z </em>= 11)</strong><br/>Configurația electronică<br/><div class=\"row\"> <div class=\"col-xs-4\"><em>K</em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("</div><div class=\"col-xs-8\"><strong>Grupa 1</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("</div><div class=\"col-xs-8\">(");
jade_mixins["numar_electroni"]("1");
buf.push("&nbsp;pe ultimul strat)</div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>M </em>– ");
jade_mixins["numar_electroni"]("1");
buf.push("</div><div class=\"col-xs-8\"><strong>Perioada a 3-a</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"></div><div class=\"col-xs-8\">(3 straturi electronice) </div></div>");
jade_mixins["space1"]();
buf.push("</li><li><strong> \nO (<em>Z </em>= 8)</strong><br/>Configurația electronică<br/><div class=\"row\"> <div class=\"col-xs-4\"><em>K</em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("</div><div class=\"col-xs-8\"><strong>Grupa 6 + 10 = 16</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>L </em>– ");
jade_mixins["numar_electroni"]("6");
buf.push("</div><div class=\"col-xs-8\">(");
jade_mixins["numar_electroni"]("6");
buf.push("&nbsp;pe ultimul strat)</div></div><div class=\"row\"> <div class=\"col-xs-4\"></div><div class=\"col-xs-8\"><strong>Perioada a 2-a</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"></div><div class=\"col-xs-8\">(2 straturi electronice) </div></div>");
jade_mixins["space1"]();
buf.push("</li></div><div class=\"col-sm-6 col-xs-12\"> <li><strong> \nAl (<em>Z </em>= 13)</strong><br/>Configurația electronică<br/><div class=\"row\"> <div class=\"col-xs-4\"><em>K </em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("</div><div class=\"col-xs-8\"><strong>Grupa 3 + 10 = 13</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("</div><div class=\"col-xs-8\">(");
jade_mixins["numar_electroni"]("3");
buf.push("&nbsp;pe ultimul strat)</div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>M </em>– ");
jade_mixins["numar_electroni"]("3");
buf.push("</div><div class=\"col-xs-8\"><strong>Perioada a 3-a</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"></div><div class=\"col-xs-8\">(3 straturi electronice) </div></div>");
jade_mixins["space1"]();
buf.push("</li><li><strong> \nAr (<em>Z </em>= 18)</strong><br/>Configurația electronică<br/><div class=\"row\"> <div class=\"col-xs-4\"><em>K </em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("</div><div class=\"col-xs-8\"><strong>Grupa 8 + 10 = 18</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("</div><div class=\"col-xs-8\">(");
jade_mixins["numar_electroni"]("8");
buf.push("&nbsp;pe ultimul strat)</div></div><div class=\"row\"> <div class=\"col-xs-4\"><em>M</em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("</div><div class=\"col-xs-8\"><strong>Perioada a 3-a</strong></div></div><div class=\"row\"> <div class=\"col-xs-4\"></div><div class=\"col-xs-8\">(3 straturi electronice)</div></div>");
jade_mixins["space1"]();
buf.push("</li></div></ul></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row sm-center-row\"> <div class=\"col-md-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p63-atomna.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Atomul de Na</div></div><div class=\"col-md-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p63-atomal.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Atomul de Al</div></div><div class=\"col-md-4 col-xs-6\">");
jade_mixins["img"]('img/chimie7/p63-atomcl.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-center pb1\">Atomul de Cl</div></div></div>");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p63-tabel.jpg');
buf.push("</div></div>");
}
}, {id: 'p63-at-msd-chim7-exemplu'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">Folosind informațiile din Tabelul periodic al elementelor de mai sus, determină:<ul class=\"letters\"><li>grupa și perioada în care se găsesc atomii de Be și Cl;</li><li>numărul atomic <em>Z </em>pentru toate elementele marcate în Tabelul periodic al elementelor;</li><li>numele elementelor marcate care se găsesc în perioada a 3-­a;</li><li> numele elementelor marcate care se găsesc în perioada a 2-­a.</li></ul></div>");
}
}, 'aplica', 'Aplică','pb1');
}
}, {id: 'p63-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"> <div style=\"background-color: #E5E3F2;\" class=\"p1\"><div style=\"color: #5853A0;\" class=\"fb\">Fișa de observare sistematică și apreciere a comportamentului</div><div class=\"text-indent1-5\">Completează tabelul de mai jos cu multă sinceritate, bifând într-­una dintre coloane, varianta care ți se potrivește.</div><div class=\"text-indent1-5 fb\">Nu există răspunsuri greșite sau corecte!</div>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table purple-table responsive-table-sm\"><thead><tr><td style=\"background-color: #5853A0; border: none;\" class=\"fb text-center\">La finalul acestei unități sunt capabil să ...</td><td style=\"background-color: #5853A0; border: none; border-left: 1px solid #fff;\" class=\"fb text-center\">&nbsp;Da&nbsp;</td><td style=\"background-color: #5853A0; border: none; border-left: 1px solid #fff;\" class=\"fb text-center\">Parțial </td><td style=\"background-color: #5853A0; border: none; border-left: 1px solid #fff;\" class=\"fb text-center\">&nbsp;Nu&nbsp;</td></tr></thead><tbody><tr><td style=\"background-color: #DAD8EC; border: none;\">aplic noțiunile dobândite în contexte variate.</td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td></tr><tr><td style=\"background-color: #B4AFD7; border: none;\">utilizez simbolurile specifice chimiei pentru reprezentarea elementelor.</td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td></tr><tr><td style=\"background-color: #DAD8EC; border: none;\">realizez corelații între structura atomului și Tabelul periodic al elementelor.</td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #DAD8EC; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td></tr><tr><td style=\"background-color: #B4AFD7; border: none;\">colaborez cu colegii în proiecte/sarcini de lucru comune.</td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td><td style=\"background-color: #B4AFD7; border: none; border-left: 1px solid #fff;\" class=\"text-center\"></td></tr></tbody></table></div></div></div>");
}
}, {id: 'p63-at-msd-chim7-fisa-observare'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"> <em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li class=\"pb1\">Tabelul periodic al elementelor cuprinde:<ul class=\"letters\"> <li>17 grupe;</li><li>7 grupe;</li><li>18 grupe.</li></ul></li><li class=\"pb1\">Numărul de perioade din Tabel este:<ul class=\"letters d-flex\"><li class=\"pr2\">7;</li><li class=\"pr2\">18;</li><li>10;</li></ul></li><li class=\"pb1\">Elementul situat în grupa 13, perioada 3, este:<ul class=\"letters\"> <li>bor;</li><li>scandiu;</li><li>aluminiu.</li></ul></li><li class=\"pb1\">Numărul de straturi de electroni din structura atomică a unui element indică:<ul class=\"letters\"> <li>numărul grupei din care face parte;</li><li>numărul perioadei căreia îi aparține;</li><li>numărul de ordine.</li></ul></li><li class=\"pb1\">Configurația electronică pentru atomul elementului situat în grupa 1, perioada 3 este:<ul class=\"letters\"> <li> <div class=\"wrap inline-block\"><em>K </em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>L </em>– ");
jade_mixins["numar_electroni"]("3");
buf.push("; &nbsp;</div></li><li> <div class=\"wrap inline-block\"><em>K </em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>M </em>– ");
jade_mixins["numar_electroni"]("1");
buf.push("; &nbsp;</div></li><li> <div class=\"wrap inline-block\"><em>K </em>– ");
jade_mixins["numar_electroni"]("1");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>M </em>– ");
jade_mixins["numar_electroni"]("3");
buf.push("; &nbsp;</div></li></ul></li><li class=\"pb1\"> <div class=\"pb1\"> \nElementul al cărui atom are configurația electronică <div class=\"wrap inline-block\"><em>K </em>– ");
jade_mixins["numar_electroni"]("2");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>L </em>– ");
jade_mixins["numar_electroni"]("8");
buf.push("; &nbsp;</div><div class=\"wrap inline-block\"><em>M </em>– ");
jade_mixins["numar_electroni"]("5");
buf.push("</div>&nbsp; se găsește în:</div><ul class=\"letters\"> <li>grupa 15, perioada 1;</li><li>grupa 18, perioada 3;</li><li>grupa 15, perioada 3.</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<div> <em>Acordă-ți 1,5 puncte pentru fiecare răspuns corect și un punct din oficiu.</em></div><div><strong> <em>Total: 10 puncte.</em></strong></div>");
jade_mixins["space1"]();
buf.push("<div class=\"flip\"><em>Răspunsuri:<br/>1. c.; 2. a.; 3. c.; 4. b.; 5. b.; 6. c.</em></div></div>");
}
}, 'verifica', 'Verifica-te singur!','pb1 mb0');
}
}, {id: 'p63-at-msd-chim7-verifica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});