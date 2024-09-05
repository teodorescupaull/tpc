registerChapter({ chapter: "u1-16-17", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Fenomene fizice. Fenomene chimice");
jade_mixins["subtitle"]("Paginile 16 - 17");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p16-at-msd-chim7-stii',
          top: 9,
          left: 0,
          width: 93,
          height: 13.916
        },
        {
          atom: 'p16-at-msd-chim7-inveti-1',
          top: 23.4533,
          left: 27,
          width: 66,
          height: 42.0223
        },
        {
          atom: 'p16-at-msd-chim7-retine-static',
          top: 66,
          left: 27,
          width: 66,
          height: 3,
          type: 'audio'
        },
        {
          atom: 'p16-at-msd-chim7-retine',
          top: 69,
          left: 27,
          width: 66,
          height: 4.8329,
          type: 'text'
        },
        {
          atom: 'p16-at-msd-chim7-inveti-2',
          top: 74.6958,
          left: 0,
          width: 93,
          height: 21.1997
        }
      ],
      image: 'p016.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p17-at-msd-chim7-inveti-1',
          top: 9,
          left: 7,
          width: 66,
          height: 27.5407
        },
        {
          atom: 'p17-at-msd-chim7-retine-static',
          top: 37,
          left: 7,
          width: 66,
          height: 3,
          type: 'audio'
        },
        {
          atom: 'p17-at-msd-chim7-retine',
          top: 40,
          left: 7,
          width: 66,
          height: 5.8612,
          type: 'text'
        },
        {
          atom: 'p17-at-msd-chim7-inveti-2',
          top: 47,
          left: 7,
          width: 93,
          height: 15.5441
        },
        {
          atom: 'p17-at-msd-chim7-aplica',
          top: 63.8132,
          left: 7,
          width: 66,
          height: 33.1962
        }
      ],
      image: 'p017.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '4', 'Fenomene fizice. <br />Fenomene chimice', '16', 'blue', 'left', 'big');
}
}, {id: 'p16-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Una dintre proprietățile materiei este aceea că se găsește într-o continuă mișcare și transformare. </div><div class=\"text-indent1-5\">În natură se produc permanent transformări ale corpurilor și substanțelor. Stânca este erodată sub acțiunea apei, a vântului; frunzele care cad toamna putrezesc și intră în alcătuirea solului; mustul fermentează și se transformă în vin; zahărul se dizolvă în ceai și îi dă gustul dulce; laptele se acrește și devine lapte bătut.</div><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p16-coloana-1.jpg');
buf.push("<div class=\"fs08 text-right\">Eroziunea stâncilor</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p16-coloana-2.jpg');
buf.push("<div class=\"fs08 text-right\">Putrezirea frunzelor</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p16-coloana-3.jpg');
buf.push("<div class=\"fs08 text-right\">Acrirea laptelui</div></div></div></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p16-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-orange\">Să experimentăm (1)</div><div class=\"row\"><div class=\"col-xs-12 col-md-12\"><ul class=\"numbers\"><li>Pune la încălzit, pe un trepied cu sită metalică cu inserție ceramică, un pahar Berzelius, B<sub>1</sub>, care conține un amestec de piatră‑vânătă și apă. </li><li>Când amestecul începe să fiarbă, pune deasupra paharului B<sub>1</sub>, cu gura în jos, un alt pahar Berzelius de aceleași dimensiuni, B<sub>2</sub>, uscat. </li></ul><ul class=\"disc\"><li>Urmărește transformările care au loc în paharul B<sub>1</sub>.</li><li>Studiază cu atenție pereții paharului B<sub>2</sub>.</li><li>Notează observațiile în caiet.</li></ul></div><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p16-inveti-lucruri-experiment-1.jpg');
buf.push("<div class=\"fs08 text-right\">Instalația de încălzire a amestecului de apă și piatră-vânătă</div>");
jade_mixins["space1"]();
buf.push("</div></div><strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">După un timp, se observă că amestecul din paharul B<sub>1  </sub>începe să fiarbă, iar deasupra se formează vapori de apă. Acest fenomen se numește <em>evaporare. </em></div><div class=\"text-indent1-5\">Când vaporii de apă intră în contact cu paharul rece, B<sub>2</sub>, se observă formarea unor picături de apă pe pereții acestuia. Acest fenomen se numește condensare. În acest fel, apa care s-a evaporat din paharul B<sub>1</sub>a fost obținută, din nou, în stare lichidă, pe pereții paharului B<sub>2</sub>.</div><strong>Concluzie</strong><div class=\"text-indent1-5\">O parte din apa aflată în amestecul inițial din paharul B<sub>1 </sub> a suferit transformări care nu i-au modificat compoziția. Aceasta s-a evaporat, trecând din fază lichidă în fază de vapori, apoi s-a condensat, trecând din stare de vapori în stare lichidă.</div></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p16-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Transformările pe care le suferă substanțele se numesc <strong>fenomene</strong>.</li><li>Transformările care nu schimbă compoziția substanțelor se numesc <strong>fenomene fizice</strong>.</li></ul></div>");
}
}, 'retine pb0', 'Reține','');
}
}, {id: 'p16-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p16_static_sa_experimentam.jpg");
jade_mixins["space1"]();
}
}, "p16_static_sa_experimentam");
buf.push("</div>");
}
}, {id: 'p16-at-msd-chim7-retine-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"arrows\"><li>Vaporizarea și condensarea, evidențiate în experimentul efectuat de tine, sunt exemple de fenomene fizice.</li></ul><div class=\"block-subtitle msd-orange\">Să observăm!</div><ul class=\"arrows\"><li>Vara, când ești plecat în tabără, unul dintre momentele cele mai frumoase este „focul de tabără”. Este nevoie doar de câteva bucăți mari de lemn de foc și surcele, pentru ca atmosfera să devină caldă și să te îmbie la spus povești. A doua zi, tot ce se mai poate observa în urma focului este o mică grămadă de cenușă. Unde au dispărut lemnele puse pe foc?</li></ul><div class=\"text-indent1-5\">Ce transformări ale lemnului sunt evidențiate în figurile <strong>a </strong>și <strong>b</strong>? Dar în figura <strong>c</strong>? Există vreo deosebire între natura celor două fenomene? Care este deosebirea dintre acestea?</div><ul class=\"arrows\"><li>Urmărește cu atenție figura <strong>d </strong>și explică ce se întâmplă cu mustul obținut din struguri.</li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p16-coloana-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p16-coloana-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p16-coloana-c.jpg', 'c', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p16-coloana-d.jpg', 'd', 'grey');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p16-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Fenomene fizice. Fenomene chimice', '17', 'blue', 'right', 'small');
}
}, {id: 'p17-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-orange\">Să experimentăm (2)</div><div class=\"row\"><div class=\"col-xs-12 col-md-12\"><ul class=\"numbers\"><li>Cu un clește de metal, ia o panglică de magneziu și introdu-o în flacăra unei spirtiere. </li><li>Pune produsul rezultat în urma arderii pe o sticlă de ceas.</li></ul><ul class=\"disc\"><li>Urmărește transformările care au loc. <strong>Nu privi direct în flacără!</strong></li><li>Notează observațiile în caiet.</li></ul></div><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p17-inveti-lucruri-experiment-2.jpg');
buf.push("<div class=\"fs08 text-right\">Arderea magneziului</div>");
jade_mixins["space1"]();
buf.push("</div></div><strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">Magneziul arde cu flacără albă, orbitoare.</div><div class=\"text-indent1-5\">În urma arderii se formează o pulbere, de culoare albă, cu proprietăți noi și compoziție diferită față de cea a substanței inițiale.</div><strong>Concluzie</strong><div class=\"text-indent1-5\">Prin ardere, magneziul a suferit o transformare care i-a modificat compoziția.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p17-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Transformările care modifică compoziția substanțelor, conducând la alte substanțe cu compoziție și însușiri noi, se numesc <strong>fenomene chimice</strong>.</li><li>Fenomenele chimice se numesc și <strong>reacții chimice</strong>.</li></ul></div>");
}
}, 'retine pb0', 'Reține','');
}
}, {id: 'p17-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p17_static_sa_experimentam.jpg");
jade_mixins["space1"]();
}
}, "p17_static_sa_experimentam");
buf.push("</div>");
}
}, {id: 'p17-at-msd-chim7-retine-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"arrows\"><li>Fenomenele chimice sau reacțiile chimice pot fi observate zilnic. În activitățile noastre uzuale, folosim produse care sunt rezultatul unui lanț de reacții chimice. De exemplu:<ul class=\"bullets\"><li>reacțiile chimice conduc la obținerea săpunului (fig. a) și a pastei de dinți (fig. b), produse pe care tu le folosești zilnic;</li><li>reacțiile chimice stau la baza extragerii unui metal dintr-un minereu (fig. c);</li><li>reacțiile chimice stau la baza obținerii medicamentelor (fig. d); </li><li>reacția de ardere a combustibililor face posibilă deplasarea autovehiculelor, a avioanelor, a vapoarelor etc.; </li><li>în urma unui lanț de reacții chimice se obțin masele plastice (fig. e), detergenții (fig. f), îngrășămintele chimice, erbicidele (fig. g) și foarte multe alte produse pe care le cunoști.</li></ul></li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-c.jpg', 'c', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-d.jpg', 'd', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-e.jpg', 'e', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-f.jpg', 'f', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p17-coloana-g.jpg', 'g', 'grey');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p17-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"numbers\"><li>Notează pe caiet câte trei exemple de fenomene fizice și chimice întâlnite în viața de zi cu zi.</li><li> <strong class=\"msd-purple\">Joc și chimie. </strong>Formează o echipă împreună cu colega/colegul de bancă. <br/>În careul de mai jos, citind pe orizontală, pe verticală și pe diagonală, veți descoperi zece cuvinte care denumesc fenomene.<br/>Asociați fiecărui cuvânt descoperit în careu, care denumește un fenomen, un alt cuvânt, ales de voi, ce indică o substanță care poate fi supusă acelui fenomen.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table purple-table text-center vertical-center\"><tr class=\"light\"><td>D</td><td>F</td><td>C</td><td>O</td><td>N</td><td>D</td><td>E</td><td>N</td><td>S</td><td>A</td><td>R</td><td>E</td></tr><tr class=\"light\"><td>I </td><td>E </td><td>A </td><td>V </td><td>S </td><td>N </td><td>O </td><td>P </td><td>L </td><td>E </td><td>D </td><td>K</td></tr><tr class=\"light\"><td>Z </td><td>R </td><td>S </td><td>R </td><td>V </td><td>I </td><td>M </td><td>A </td><td>B </td><td>V </td><td>E </td><td>Q</td></tr><tr class=\"light\"><td>O </td><td>M </td><td>U </td><td>C </td><td>W </td><td>Z </td><td>A </td><td>I </td><td>D </td><td>A </td><td>S </td><td>R</td></tr><tr class=\"light\"><td>L </td><td>E </td><td>B </td><td>T </td><td>O </td><td>P </td><td>I </td><td>R </td><td>E </td><td>P </td><td>U </td><td>S</td></tr><tr class=\"light\"><td>V </td><td>N </td><td>L </td><td>L </td><td>J </td><td>M </td><td>H </td><td>E </td><td>G </td><td>O </td><td>B </td><td>Y</td></tr><tr class=\"light\"><td>A </td><td>T </td><td>I </td><td>M </td><td>T </td><td>R </td><td>P </td><td>E </td><td>M </td><td>R </td><td>L </td><td>U</td></tr><tr class=\"light\"><td>R </td><td>A </td><td>M </td><td>Q </td><td>E </td><td>L </td><td>S </td><td>U </td><td>V </td><td>A </td><td>I </td><td>T</td></tr><tr class=\"light\"><td>E </td><td>R </td><td>A </td><td>M </td><td>B </td><td>F </td><td>N </td><td>C </td><td>N </td><td>R </td><td>M </td><td>A</td></tr><tr class=\"light\"><td>U </td><td>E </td><td>R </td><td>L </td><td>T </td><td>B </td><td>G </td><td>U </td><td>R </td><td>E </td><td>A </td><td>I</td></tr><tr class=\"light\"><td>S </td><td>W </td><td>E </td><td>C </td><td>D </td><td>I </td><td>L </td><td>A </td><td>T </td><td>A </td><td>R </td><td>E</td></tr><tr class=\"light\"><td>Z </td><td>J </td><td>Q </td><td>Y </td><td>K </td><td>A </td><td>R </td><td>D </td><td>E </td><td>R </td><td>E </td><td>E</td></tr></table></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Transcrie în caiet enunțurile de mai jos și precizează pentru fiecare tipul de fenomen: <ul class=\"letters\"><li>arderea gazului metan este folosită și la prepararea hranei;</li><li>în termometru, are loc dilatarea mercurului;</li><li>din cauza încălzirii globale, se observă topirea ghețarilor. </li></ul></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p17-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});