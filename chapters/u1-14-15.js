registerChapter({ chapter: "u1-14-15", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Materie. Substanță");
jade_mixins["subtitle"]("Paginile 14 - 15");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p14-at-msd-chim7-stii',
          top: 9,
          left: 27,
          width: 66,
          height: 11.2596
        },
        {
          atom: 'p14-at-msd-chim7-inveti-1',
          top: 21.2254,
          left: 27,
          width: 28.5455,
          height: 52.7335
        },
        {
          atom: 'p14-at-msd-chim7-inveti-static',
          top: 24.3959,
          left: 55.8182,
          width: 37.8182,
          height: 26.7695,
          type: 'audio'
        },
        {
          atom: 'p14-at-msd-chim7-retine',
          top: 74.6101,
          left: 27,
          width: 66,
          height: 6.7181,
          type: 'text'
        },
        {
          atom: 'p14-at-msd-chim7-inveti-2',
          top: 81.6367,
          left: 27,
          width: 66,
          height: 14.9443
        },
        {
          atom: 'p14-at-msd-chim7-stiai',
          top: 9,
          left: 0,
          width: 25,
          height: 73.4704
        }
      ],
      image: 'p014.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p15-at-msd-chim7-retine-1',
          top: 8.8003,
          left: 7,
          width: 66,
          height: 7.575
        },
        {
          atom: 'p15-at-msd-chim7-inveti-1',
          top: 16.5981,
          left: 7,
          width: 66,
          height: 15.3728
        },
        {
          atom: 'p15-at-msd-chim7-retine-2',
          top: 32.6221,
          left: 7,
          width: 66,
          height: 9.4602
        },
        {
          atom: 'p15-at-msd-chim7-inveti-2',
          top: 42.4764,
          left: 7,
          width: 66,
          height: 20.9426
        },
        {
          atom: 'p15-at-msd-chim7-stiai',
          top: 9,
          left: 75,
          width: 25,
          height: 75.6984
        },
        {
          atom: 'p15-at-msd-chim7-aplica',
          top: 63.8132,
          left: 7,
          width: 66,
          height: 33.2819
        }
      ],
      image: 'p015.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '3', 'Materie. Substanță', '14', 'blue', 'left', 'big');
}
}, {id: 'p14-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>La orele de fizică, ai învățat că orice obiect reprezintă un corp fizic. Locul ocupat de un corp în spațiu este măsurat prin mărimea fizică numită volum. Unitatea de măsură a volumului în Sistemul internațional de unități (SI) este metrul cub (m<sup>3</sup>).</li><li>Masa este mărimea fizică fundamentală care măsoară inerția unui corp. Unitatea de măsură pentru masă, în SI, este kilogramul (kg).</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p14-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-1.jpg');
buf.push("<div class=\"fs08 text-right\">Terra – vedere din spațiu</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-2.jpg');
buf.push("<div class=\"fs08 text-right\">Imagine din Seattle – SUA</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-3.jpg');
buf.push("<div class=\"fs08 text-right\">Corpuri cerești</div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-4.jpg');
buf.push("<div class=\"fs08 text-right\">Sală de clasă </div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-5.jpg');
buf.push("<div class=\"fs08 text-right\">Picătură de apă </div></div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p14-coloana-6.jpg');
buf.push("<div class=\"fs08 text-right\">Lingouri de aur</div></div></div></div>");
}
}, 'materie', 'Materie. Corp. Substanță','');
}
}, {id: 'p14-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\"> <strong>Materia </strong>este termenul general prin care este desemnat tot ceea ce ne înconjoară. Universul este alcătuit din materie. Aceasta există independent de noi și constituie sursa tuturor transformărilor din natură.</div><ul class=\"arrows\"><li>Materia se prezintă în patru stări de agregare, fiecare stare fiind caracterizată prin volum și formă.<ul class=\"bullets\"><li>În stare <em>solidă</em>, materia are volum și formă fixe.</li><li>În stare <em>lichidă</em>, materia are volum fix, dar ia forma vasului în care este pusă.</li><li>În stare <em>gazoasă</em>, materia ocupă întregul volum disponibil, luând forma corespunzătoare acelui volum.</li><li>În stare de <em>plasmă</em>, materia nu are nici formă, nici volum propriu. </li></ul></li></ul><div class=\"text-indent1-5\">Deși pe Pământ plasma se găsește în cantități neglijabile, peste 98% din materia din Univers se găsește sub formă de plasmă. Pe Terra, principalele stări de agregare sunt: starea solidă, starea lichidă și starea gazoasă.</div><ul class=\"arrows\"><li>Materia se caracterizează prin mai multe proprietăți:<ul class=\"bullets\"><li>ocupă un spațiu;</li><li>prezintă masă proprie;</li><li>se manifestă concret, sub diferite forme, numite corpuri;</li><li>se găsește în continuă mișcare și transformare;</li><li>nu dispare și nu se creează.</li></ul></li></ul>");
jade_mixins["img"]("img/chimie7/p14-inveti-lucruri.jpg");
buf.push("<div class=\"text-indent1-5\">Corpurile din lumea înconjurătoare pot fi alcătuite dintr-un singur tip de materie sau se pot prezenta ca amestecuri din mai multe tipuri de materie.</div></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p14-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p14_static_inveti.jpg");
jade_mixins["space1"]();
}
}, "p14_static_inveti");
buf.push("</div>");
}
}, {id: 'p14-at-msd-chim7-inveti-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">Forma de materie cu compoziție bine determinată și constantă se numește <strong>substanță.</strong></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p14-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Unele dintre aceste substanțe pot exista în natură. De exemplu: metalele (aur, argint, fier) se extrag din minereuri; oxigenul, dioxidul de carbon fac parte din compoziția aerului. Altele nu există în natură, ci sunt obținute artificial sau pot fi prelucrate în laborator sau industrial. De exemplu: soda caustică, substanțele active din medicamente, erbicidele etc.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Pentru a facilita studiul substanțelor cunoscute, al căror număr este de ordinul milioanelor, au fost realizate clasificări ale acestora utilizând mai multe criterii.</div><div class=\"text-indent1-5\">Astfel, după natura lor, substanțele chimice se clasifică în două categorii: substanțe anorganice și substanțe organice.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p14-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Materie. Substanță', '15', 'blue', 'right', 'small');
}
}, {id: 'p15-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">Substanțele din regnul mineral sunt denumite <em><strong>substanțe anorganice</strong></em>. Acestea există în natură, dar se pot obține și industrial sau în laborator.</div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p15-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Exemple de substanțe anorganice: sare de bucătărie, apă, fier, dioxid de carbon, argint, aur etc.</div><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-1.jpg');
buf.push("<div class=\"fs08 text-right\">Sare de bucătărie</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-2.jpg');
buf.push("<div class=\"fs08 text-right\">Pilitură de fier</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-3.jpg');
buf.push("<div class=\"fs08 text-right\">Argint</div>");
jade_mixins["space1"]();
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p15-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\"><strong><em>Substanțele organice </em></strong>sunt compuși alcătuiți, în principal, din carbon și hidrogen, dar pot conține în cantități mai mici și oxigen, azot, clor etc. Sunt caracteristice regnului vegetal sau animal, dar pot fi obținute și artificial, în industrie sau laborator.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p15-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Exemple de substanțe organice: zahăr, proteine, vitamine, alcool, acetonă, grăsimi, clorofilă etc.</div><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-4.jpg');
buf.push("<div class=\"fs08 text-right\">Zahăr</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-5.jpg');
buf.push("<div class=\"fs08 text-right\">Vitamine</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["img"]('img/chimie7/p15-inveti-lucruri-6.jpg');
buf.push("<div class=\"fs08 text-right\">Clorofila din frunză</div>");
jade_mixins["space1"]();
buf.push("</div></div><ul class=\"arrows\"><li>În prezent, numărul substanțelor organice sintetizate în laborator și obținute prin procese tehnologice la scară industrială este foarte mare. Masele plastice și cauciucul sintetic sunt doar două exemple de substanțe organice cu importanță practică deosebită, sintetizate industrial.</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p15-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-12 col-md-2\"></div><div class=\"col-xs-12 col-md-8\">");
jade_mixins["img"]('img/chimie7/p15-daca-vrei.jpg');
buf.push("<div class=\"fs08 text-right\">Friedrich Wöhler (1800 – 1882)</div>");
jade_mixins["space1"]();
buf.push("</div></div>Termenul de <strong><em>chimie organică </em></strong>a fost folosit pentru prima dată de Jakob Berzelius, în tratatul său de chimie (1808). Pionierul chimiei organice este considerat, totuși, chimistul german Friedrich Wöhler, care în anul 1828 obține pentru prima oară în laborator <strong><em>ureea</em></strong>, o substanță produsă în organismele animale. Până atunci se credea că substanțele organice se pot forma în corpul animalelor și plantelor doar sub influența „forței vitale”, o forță de origine divină. El a demonstrat că această teorie este falsă, atunci când a preparat artificial ureea (substanță organică), folosind numai substanțe anorganice.<div class=\"row\"><div class=\"col-xs-12 col-md-2\"></div><div class=\"col-xs-12 col-md-8\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p15-coloana.jpg');
buf.push("<div class=\"fs08 text-right\">Ureea se folosește ca îngrășământ agricol, datorită conținutului ridicat de azot, în industria medicamentelor și în  diverse sinteze organice.</div></div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p15-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"numbers\"><li> <strong class=\"msd-purple\">Joc și chimie. </strong>Copiază pe caiet figurile geometrice de mai jos. Scrie, în fiecare dintre acestea, exemplele corespunzătoare din cele enumerate.<ul class=\"numbers columns-2-3\"><li>Piatră-vânătă</li><li>Cărămidă</li><li>Cui de fier</li><li>Ciment</li><li>Zahăr</li><li>Mortar</li><li>Inel de aur</li><li>Azot</li><li>Sare de bucătărie</li><li>Alcool</li><li>Sulf</li><li>Ceramică</li><li>Argint</li><li>Clorofilă</li><li>Celuloză</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-md-12\">");
jade_mixins["img"]('img/chimie7/p15-aplica-figuri.png');
jade_mixins["space1"]();
buf.push("</div></div></li><li>Copiază în caiet schema de mai jos care se referă la compoziția aerului. Din cunoștințele tale sau folosind diverse surse de informare, completează în fiecare dreptunghi, numele unei substanțe care intră în alcătuirea aerului.<div class=\"row\"><div class=\"col-xs-12 col-md-2\"></div><div class=\"col-xs-12 col-md-8\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p15-aplica-schema.png');
buf.push("</div></div></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p15-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});