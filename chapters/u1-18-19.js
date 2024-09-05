registerChapter({ chapter: "u1-18-19", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Proprietăți fizice. Proprietăți chimice");
jade_mixins["subtitle"]("Paginile 18 - 19");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p18-at-msd-chim7-stii',
          top: 9,
          left: 27,
          width: 66,
          height: 35.0814
        },
        {
          atom: 'p18-at-msd-chim7-stiai',
          top: 9,
          left: 0,
          width: 25,
          height: 80.5827
        },
        {
          atom: 'p18-at-msd-chim7-inveti',
          top: 44.8757,
          left: 27,
          width: 66,
          height: 44.0788
        },
        {
          atom: 'p18-at-msd-chim7-inveti-static',
          top: 89.1774,
          left: 27,
          width: 66,
          height: 8.1748,
          type: 'audio'
        }
      ],
      image: 'p018.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p19-at-msd-chim7-retine-1-static',
          top: 9,
          left: 7,
          width: 66,
          height: 3,
          type: 'audio'
        },
        {
          atom: 'p19-at-msd-chim7-retine-1',
          top: 12,
          left: 7,
          width: 66,
          height: 8.3462,
          type: 'text'
        },
        {
          atom: 'p19-at-msd-chim7-inveti',
          top: 21.054,
          left: 7,
          width: 66,
          height: 66.3582
        },
        {
          atom: 'p19-at-msd-chim7-stiai',
          top: 9,
          left: 75,
          width: 25,
          height: 31.5681
        },
        {
          atom: 'p19-at-msd-chim7-retine-2',
          top: 87.892,
          left: 7,
          width: 66,
          height: 8.5176
        }
      ],
      image: 'p019.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '5', 'Proprietăți fizice. <br />Proprietăți chimice', '18', 'blue', 'left', 'big');
}
}, {id: 'p18-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Privește imaginile <strong>a </strong>și <strong>b</strong>. Poți foarte ușor să numești fiecare animal, nu-i așa?</div><div class=\"text-indent1-5\">Chiar dacă au multe elemente comune, există caracteristici specifice fiecărui animal, care te ajută să îl identifici. Numește-le!</div><div class=\"text-indent1-5\">În mod similar, dacă ai în față cele două pahare din imaginile <strong>c </strong>și <strong>d</strong>, vei stabili foarte ușor conținutul fiecărui pahar.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p18-stii-deja-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p18-stii-deja-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p18-stii-deja-c.jpg', 'c', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p18-stii-deja-d.jpg', 'd', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Fiecare animal are unele caracteristici care îl deosebesc de celelalte animale. La fel se întâmplă cu apa și laptele, care, deși amândouă sunt lichide, se deosebesc prin culoare și gust. În natură, întâlnim la tot pasul exemple de lucruri asemănătoare, dar care au însușiri diferite.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p18-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-1.jpg');
buf.push("<div class=\"fs08 text-right\">Cupru</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-2.jpg');
buf.push("<div class=\"fs08 text-right\">Aluminiu</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-3.jpg');
buf.push("<div class=\"fs08 text-right\">Aur</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-4.jpg');
buf.push("<div class=\"fs08 text-right\">Mercur</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-5.jpg');
buf.push("<div class=\"fs08 text-right\">Plumb</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-coloana-6.jpg');
buf.push("<div class=\"fs08 text-right\">Fier</div></div></div></div>");
}
}, 'materie', 'Metale cu importanță practică deosebită','');
}
}, {id: 'p18-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-orange\">Să experimentăm (1)</div><ul class=\"numbers\"><li>Analizează, împreună cu colega/colegul de bancă, substanțele existente în eprubetele E<sub>1 </sub>– E<sub>6</sub>, din figura de mai jos, pe care le aveți și pe masa de lucru.<div class=\"row\"><div class=\"col-xs-12 col-md-12\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p18-inveti-lucruri-experiment-1.jpg');
jade_mixins["space1"]();
buf.push("</div></div></li><li>Copiați în caiete și apoi completați, împreună, tabelul de mai jos.</li></ul>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td>Eprubeta</td><td>Substanța</td><td>Stare de agregare</td><td>Culoare</td><td>Miros</td></tr></thead><tbody><tr><td>E<sub>1</sub></td><td>alcool</td><td></td><td></td><td></td></tr><tr><td>E<sub>2</sub></td><td>piatră-vânătă</td><td></td><td></td><td></td></tr><tr><td>E<sub>3</sub></td><td>pulbere de sulf</td><td></td><td></td><td></td></tr><tr><td>E<sub>4</sub></td><td>zahăr</td><td></td><td></td><td></td></tr><tr><td>E<sub>5</sub></td><td>apă</td><td></td><td></td><td></td></tr><tr><td>E<sub>6</sub></td><td>cupru</td><td></td><td></td><td></td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">Fiecare dintre substanțele existente în cele șase eprubete prezintă însușiri caracteristice cu ajutorul cărora pot fi identificate (stare de agregare, culoare, miros etc.). </div>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Caracteristicile substanțelor din eprubete se pot stabili cu ajutorul organelor de simț, prin observare directă.</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Ca urmare a experimentului (1), prin observare directă, ai putut stabili starea de agregare, aspectul, culoarea și mirosul pentru mai multe substanțe. La fizică ai învățat că alte caracteristici ale substanțelor se determină cu ajutorul unor instrumente de măsură (termometru, densimetru etc.).</li></ul></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p18-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p18_static_inveti.jpg");
jade_mixins["space1"]();
}
}, "p18_static_inveti");
buf.push("</div>");
}
}, {id: 'p18-at-msd-chim7-inveti-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Proprietăți fizice. Proprietăți chimice', '19', 'blue', 'right', 'small');
}
}, {id: 'p19-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Substanțele se deosebesc între ele prin însușirile pe care le au, numite <em>proprietăți.</em></li><li>Însușirile substanțelor care se referă la starea de agregare, aspect, culoare, miros, constante fizice (temperaturile de topire, de solidificare, de fierbere, densitatea, solubilitatea etc.), precum și la transformări care nu schimbă compoziția substanțelor, se numesc <strong>proprietăți fizice</strong>.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p19-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p19_static_sa_experimentam.jpg");
jade_mixins["space1"]();
}
}, "p19_static_sa_experimentam");
buf.push("</div>");
}
}, {id: 'p19-at-msd-chim7-retine-1-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-orange\">Să experimentăm (2)</div><div class=\"text-indent1-5\"><strong>Atenție! </strong><ul class=\"disc\"><li>Respectă normele de utilizare a spirtierei (vezi pag. 12).  </li><li>Manipulează cu atenție lingura de ars. </li><li>Nu lăsa spirtiera aprinsă la terminarea experimentului.</li></ul></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Pune zahăr într-o lingură de ars și așaz-o în flacăra unei spirtiere (fig. a). </li><li>Pune într-o altă lingură de ars sare de bucătărie și așaz-o în flacăra unei spirtiere (fig. b). </li><li>Cu un clește de metal, ia o sârmă de cupru, pe care o vei introduce în flacără (fig. c).</li><li>Presară pilitură de fier în flacăra unei spirtiere (fig. d).</li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p19-inveti-lucruri-experiment-2-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p19-inveti-lucruri-experiment-2-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p19-inveti-lucruri-experiment-2-c.jpg', 'c', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p19-inveti-lucruri-experiment-2-d.jpg', 'd', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Analizează transformările care au loc în cele patru experimente.</li><li>Notează ceea ce ai constatat.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">Zahărul se topește și își schimbă culoarea; dacă se continuă încălzirea, arde. Sarea nu se topește, nu arde, nu-și modifică aspectul. Sârma de cupru arde cu flacără verde, schimbându-și culoarea în negru. Pilitura de fier arde cu scântei strălucitoare.</div>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Însușirea de a arde pe care o prezintă zahărul, cuprul și pilitura de fier nu este o însușire comună pentru toate substanțele. Sarea de bucătărie, de exemplu, nu arde. </div><div class=\"text-indent1-5\">Substanțele rezultate după ardere au compoziție diferită față de substanțele inițiale.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p19-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Însușirile substanțelor care se referă la transformări prin care se schimbă compoziția acestora se numesc <strong>proprietăți chimice</strong>.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p19-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["img"]('img/chimie7/p19-daca-vrei-1.jpg');
jade_mixins["space1"]();
buf.push("</div></div><ul class=\"disc\"><li>Bromul este singurul nemetal lichid la temperatură și presiune normale. Numele său provine din limba greacă, bromos, care înseamnă miros urât. </li><li>Purpura, un pigment de culoare roșie, conține în compoziția sa brom. Se poate extrage din cochilia unui melc <em>Murex Brandaris.</em></li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p19-daca-vrei-2.jpg');
jade_mixins["space1"]();
buf.push("</div></div><ul class=\"disc\"><li>Mercurul este singurul metal lichid la temperatura camerei și este foarte toxic.</li><li>Mercurul (sau argintul viu) are temperatura de topire –38,83 °C.</li></ul></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p19-at-msd-chim7-stiai'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});