registerChapter({ chapter: "u2-60-61", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Tabelul periodic al elementelor. Introducere. Structură");
jade_mixins["subtitle"]("Paginile 60 - 61");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p60-at-msd-chim7-stii',
          top: 9.5,
          left: 26,
          width: 68,
          height: 8
        },
        {
          atom: 'p60-at-msd-chim7-inveti',
          top: 18,
          left: 26,
          width: 68,
          height: 38.5
        },
        {
          atom: 'p60-at-msd-chim7-stiai-AMII',
          top: 6.5,
          left: 0,
          width: 25,
          height: 11,
          type: 'audio'
        },
        {
          atom: 'p60-at-msd-chim7-stiai',
          top: 18,
          left: 0,
          width: 25,
          height: 50
        },
        {
          atom: 'p60-at-msd-chim7-retine',
          top: 57,
          left: 26,
          width: 68,
          height: 11.5
        },
        {
          atom: 'p60-at-msd-chim7-grupe',
          top: 69,
          left: 26,
          width: 68,
          height: 20
        },
        {
          atom: 'p60-at-msd-chim7-aplica-grupe-video',
          top: 89.5,
          left: 26,
          width: 15,
          height: 7,
          type: 'video'
        }
      ],
      image: 'p060.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p61-at-msd-chim7-perioade',
          top: 8,
          left: 6,
          width: 68,
          height: 17
        },
        {
          atom: 'p61-at-msd-chim7-tabel-periodic',
          top: 25.3,
          left: 6,
          width: 94,
          height: 41
        },
        {
          atom: 'p61-at-msd-chim7-vrei-AMII',
          top: 67,
          left: 75,
          width: 25,
          height: 10,
          type: 'audio'
        },
        {
          atom: 'p61-at-msd-chim7-vrei',
          top: 77.5,
          left: 75,
          width: 25,
          height: 18.5
        },
        {
          atom: 'p61-at-msd-chim7-aplica',
          top: 67,
          left: 6,
          width: 68,
          height: 29.5
        }
      ],
      image: 'p061.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '6', 'Tabelul periodic al elementelor. Introducere. Structură', '60', 'blue', 'left', 'big mb0 pb2');
}
}, {id: 'p60-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Elementul chimic reprezintă totalitatea atomilor care au același număr atomic <em>Z.</em></li><li>Atomul unui element chimic este caracterizat de numărul de masă <em>A </em>și de numărul <div class=\"wrap inline-block\">atomic <em>Z.</em></div></li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p60-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">Privește cu atenție tabelul de mai jos, care prezintă o parte din tabelul creat de Mendeleev, și spune după ce criterii crezi că au fost aranjate elementele.</div><div class=\"text-indent1-5\">Găsește elementul pentru care Mendeleev a precizat masa atomică, dar care nu fusese încă descoperit.</div>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table orange-table responsive-table-sm\"><thead><tr><td style=\"width: 40px;\" class=\"fb text-center\">Grupa</td><td class=\"fb text-center\">I</td><td class=\"fb text-center\">II</td><td class=\"fb text-center\">III</td><td class=\"fb text-center\">IV</td><td class=\"fb text-center\">V</td><td class=\"fb text-center\">VI</td><td class=\"fb text-center\">VI</td><td class=\"fb text-center\">VIII</td></tr></thead><tbody><tr><td class=\"msd-orange-bg-4 text-center no-border-bottom\">1.</td><td class=\"msd-orange-bg-4 no-border-bottom\">H = 1</td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td><td class=\"msd-orange-bg-4 no-border-bottom\"></td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td><td class=\"msd-orange-bg-4 no-border-bottom\"> </td></tr><tr><td class=\"msd-orange-bg-4 text-center no-border-top\">2.</td><td class=\"msd-orange-bg-4 no-border-top\">Li = 7</td><td class=\"msd-orange-bg-4 no-border-top\">Be = 9,4</td><td class=\"msd-orange-bg-4 no-border-top\">B = 11</td><td class=\"msd-orange-bg-4 no-border-top\">C = 12</td><td class=\"msd-orange-bg-4 no-border-top\">N = 14</td><td class=\"msd-orange-bg-4 no-border-top\">O = 16</td><td class=\"msd-orange-bg-4 no-border-top\">F = 19</td><td class=\"msd-orange-bg-4 no-border-top\"> </td></tr><tr><td class=\"msd-orange-bg-5 text-center no-border-bottom\">3.</td><td class=\"msd-orange-bg-5 no-border-bottom\">Na = 23</td><td class=\"msd-orange-bg-5 no-border-bottom\">Mg = 24</td><td class=\"msd-orange-bg-5 no-border-bottom\">Al = 27,4</td><td class=\"msd-orange-bg-5 no-border-bottom\">Si = 28 </td><td class=\"msd-orange-bg-5 no-border-bottom\">P = 31</td><td class=\"msd-orange-bg-5 no-border-bottom\">S = 32</td><td class=\"msd-orange-bg-5 no-border-bottom\">Cl = 35,5</td><td class=\"msd-orange-bg-5 no-border-bottom\">Fe = 56;</td></tr><tr><td class=\"msd-orange-bg-5 text-center no-border-top\">4.</td><td class=\"msd-orange-bg-5 no-border-top\">K = 39</td><td class=\"msd-orange-bg-5 no-border-top\">Ca = 40</td><td class=\"msd-orange-bg-5 no-border-top\">? = 45</td><td class=\"msd-orange-bg-5 no-border-top\">Ti = 50</td><td class=\"msd-orange-bg-5 no-border-top\">V = 51</td><td class=\"msd-orange-bg-5 no-border-top\">Cr = 52</td><td class=\"msd-orange-bg-5 no-border-top\">Mn = 55</td><td class=\"msd-orange-bg-5 no-border-top\">Ni = Co = 59;<div class=\"pb1\"></div>Cu = 63,4</td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5 pb1\">Mendeleev a aranjat elementele în ordinea crescătoare a maselor lor atomice. În tabelul rezultat, elementele cu proprietăți asemănătoare se găseau unele sub altele, în aceeași coloană.</div><ul class=\"arrows\"> <li>După stabilirea structurii atomului, s-­a constatat că proprietățile elementelor depind de structura învelișului de electroni. Pentru un element chimic, numărul de electroni este egal cu numărul de protoni din nucleu, deci cu numărul atomic <em>Z. </em>Putem spune că proprietățile elementelor depind de nuamărul atomic <em>Z.</em></li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','pb1');
}
}, {id: 'p60-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"row\"> <div class=\"col-md-7 col-xs-12 pb2\"> \nDmitri Mendeleev, chimist rus, a publicat în anul 1869 o versiune a Tabelului periodic, în timp ce încerca să organizeze cele 63 de elemente cunoscute la acea dată. A scris elementele și proprietățile acestora pe bucăți de hârtie, ca niște cărți de joc, și apoi le-­a aranjat și rearanjat până când și-­a dat seama că se formează, în mod regulat, anumite grupe de elemente. În unele cazuri, Mendeleev a lăsat locuri (căsuțe) libere, în care a prevăzut că vor fi plasate elemente noi, necunoscute la acel moment.</div><div class=\"col-md-5 col-xs-8\">");
jade_mixins["img"]('img/chimie7/p60-mendeleev.jpg');
buf.push("<div class=\"pb1\"></div><div class=\"fs09 text-right\">Dmitri Mendeleev<br/>(1834-­1907)</div></div></div></div>");
}
}, 'stiai', 'Știai că?','mb0 pb0');
}
}, {id: 'p60-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"static-padding\"><div class=\"msd-amii-static\"></div></div>");
jade_mixins["img"]("img/chimie7/p60-amii_static.jpg");
jade_mixins["space1"]();
}
}, "p60-AMII_static");
}
}, 'vrei no-title pb1 pt02px', '','');
}
}, {id: 'p60-at-msd-chim7-stiai-AMII'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\">La baza clasificării și ordonării moderne a elementelor chimice stă numărul atomic <em>Z. </em>Tabelul periodic al elementelor cuprinde toate elementele chimice aranjate în funcție de proprietățile lor fizice și chimice, care se repetă în mod periodic, în funcție de numărul atomic <em>Z.</em></div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p60-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content\"><div class=\"text-indent1-5\">Tabelul periodic al elementelor este alcătuit din <span class=\"msd-orange fb\">grupe </span>și <span class=\"msd-orange fb\">perioade</span>.</div></div><div class=\"block-content d-flex\"><div style=\"max-height: 140px;\" class=\"msd-orange-bg-4 vertical-text xs-100w\">Grupe</div><div style=\"width: 100%;\" class=\"grup-acolada grup-acolada-orange text-left\"><ul class=\"disc marker-orange\"><li>Sunt 18 grupe care se notează cu cifre arabe (1, 2, 3, ..., 18). Elementele care se găsesc în aceeași grupă au proprietăți asemănătoare.</li><li>Grupele 1, 2, 13, 14, 15, 16, 17, 18 se mai numesc     <strong>grupe principale, </strong>deoarece elementele din aceste grupe sunt cele mai răspândite elemente de pe Pământ, din Sistemul Solar și din Univers (alături de câteva elemente tranziționale). Elementele din grupa 18 se numesc <strong>gaze rare. </strong>Poate fi întâlnită și notația IA, IIA, ... VIIIA.</li><li>Grupele 3-­12 se mai numesc <strong>grupe secundare </strong>și se notează IB, IIB, ... VIIIB, iar elementele pe care le conțin se numesc <strong>elemente tranziționale. </strong>Unele elemente tranziționale sunt așezate sub Tabelul periodic. Aceste două serii de elemente cu proprietăți foarte asemănătoare între ele se numesc <strong>lantanide </strong>și <strong>actinide, </strong>după numele primului element al seriei (lantan, respectiv actiniu).</li><li>Toate elementele din grupele 1, 2, 3, ..., 12 sunt <strong>metale</strong>.</li><li>În grupele 13­-18, elementele care se găsesc sub linia îngroșată sunt <strong>metale, </strong>iar cele situate deasupra liniei îngroșate sunt <strong>nemetale</strong>.</li></ul></div></div></div>");
}
}, {id: 'p60-at-msd-chim7-grupe'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\">");
jade_mixins["video"]("p60");
buf.push("</div></div>");
}
}, {id: 'p60-at-msd-chim7-aplica-grupe-video'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Tabelul periodic al elementelor. Introducere. Structură', '61', 'blue', 'right', 'small');
}
}, {id: 'p61-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content d-flex\"><div style=\"max-height: 140px;\" class=\"msd-orange-bg-4 vertical-text xs-100w\">Perioade</div><div style=\"width: 100%;\" class=\"grup-acolada grup-acolada-orange text-left\"><ul class=\"disc marker-orange\"><li>Sunt 7 perioade, notate cu cifre arabe: 1, 2, 3, 4, 5, 6, 7.</li><li>Numărul atomic <em>Z </em>crește de­-a lungul unei perioade.</li><li>Elementele unei perioade sunt cuprinse între două gaze rare succesive.</li><li>Perioada 1 cuprinde doar două elemente: H și He; perioadele 2 și 3 cuprind câte 8 elemente, perioadele 4 și 5 – câte 18 elemente, iar perioadele 6 și 7 – câte 32 de elemente.</li><li>Numărul de elemente dintr-­o perioadă se poate afla scăzând din numărul atomic al gazului rar care încheie perioada numărul atomic al gazului rar din perioada precedentă.</li></ul></div></div></div>");
}
}, {id: 'p61-at-msd-chim7-perioade'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"msd-page-block\"><div style=\"background-color: #faa61a; padding: 5px 15px !important; color: #FFFFFF;\" class=\"block-content fb\">Tabelul periodic al elementelor</div>");
jade_mixins["img"]('img/chimie7/p61-tabelul-periodic.png');
buf.push("</div>");
}
}, {id: 'p61-at-msd-chim7-tabel-periodic'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content pb0\"><div class=\"pb1\">Unele grupe din Tabelul periodic al elementelor au și denumiri speciale. Astfel:</div><ul class=\"disc\"> <li> <span style=\"background-color: #FFD04F;\">Grupa 1</span>&nbsp; se mai numește și <strong>grupa metalelor alcaline</strong>.</li><li> <span style=\"background-color: #B6D32D;\">Grupa 2</span>&nbsp; se numește <strong>grupa metalelor alcalino-pământoase</strong>.</li><li> <span style=\"background-color: #EC8EBC;\">Grupa 17</span>&nbsp; se numește <strong>grupa halogenilor</strong>.</li><li> <span style=\"background-color: #D6D5D4;\">Grupa 18</span>&nbsp; se numește <strong>grupa gazelor rare</strong>.</li></ul></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','mb0 pb0');
}
}, {id: 'p61-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"static-padding\"><div class=\"msd-amii-static\"></div></div>");
jade_mixins["img"]("img/chimie7/p61-amii_static.jpg");
jade_mixins["space1"]();
}
}, "p61-AMII_static");
}
}, 'vrei no-title pt5px pb1', '','');
}
}, {id: 'p61-at-msd-chim7-vrei-AMII'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"> <li>Copiază în caiet și completează tabelul de mai jos folosind informațiile cuprinse în Tabelul periodic al elementelor:</li>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table purple-table responsive-table-sm\"><thead><tr><td class=\"fb text-center table-vertical-middle\">Nr. crt.</td><td class=\"fb text-center table-vertical-middle\">Denumirea elementului</td><td class=\"fb text-center table-vertical-middle\">Simbolul chimic</td><td class=\"fb text-center table-vertical-middle\">Numărul de ordine</td><td class=\"fb text-center table-vertical-middle\">Grupa</td><td class=\"fb text-center table-vertical-middle\">Perioada</td></tr></thead><tbody><tr><td class=\"table-vertical-middle text-center\">1.</td><td class=\"table-vertical-middle\"> <em>calciu</em></td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td></tr><tr><td class=\"table-vertical-middle text-center\">2.</td><td class=\"table-vertical-middle\"> <em>argint</em></td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td></tr><tr><td class=\"table-vertical-middle text-center\">3.</td><td class=\"table-vertical-middle\"> <em>xenon</em></td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td></tr><tr><td class=\"table-vertical-middle text-center\">4.</td><td class=\"table-vertical-middle\"> <em>sulf</em></td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td><td class=\"text-center table-vertical-middle\">...</td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("<li>Identifică elementele de mai jos, utilizând Tabelul periodic al elementelor:<ul class=\"letters\"> <li> <div class=\"wrap inline-block\">E<sub>1</sub></div> situat în grupa 17, perioada 3;</li><li> <div class=\"wrap inline-block\">E<sub>2</sub></div> cu numărul de ordine 19;</li><li> <div class=\"wrap inline-block\">E<sub>3</sub></div> al patrulea element din grupa 18;</li><li> <div class=\"wrap inline-block\">E<sub>4</sub></div> al doilea element din perioada 5.</li></ul></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p61-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});