registerChapter({ chapter: "u2-50-51", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Definiția atomului. Element chimic. Simbol chimic");
jade_mixins["subtitle"]("Paginile 50 - 51");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p50-at-msd-chim7-simboluri-litera',
          top: 8.5,
          left: 27,
          width: 67,
          height: 17
        },
        {
          atom: 'p50-at-msd-chim7-simboluri-grup',
          top: 25.5,
          left: 27,
          width: 67,
          height: 34
        },
        {
          atom: 'p50-at-msd-chim7-simboluri-latina',
          top: 61,
          left: 27,
          width: 67,
          height: 19
        },
        {
          atom: 'p50-at-msd-chim7-vrei-sa-stii-AMII',
          top: 7.5566,
          left: 3.8788,
          width: 21,
          height: 6,
          type: 'audio'
        },
        {
          atom: 'p50-at-msd-chim7-vrei-sa-stii',
          top: 13.6564,
          left: 4,
          width: 21,
          height: 82.8436
        },
        {
          atom: 'p50-at-msd-chim7-simbol-semnificatie',
          top: 80.5,
          left: 45,
          width: 49,
          height: 16
        },
        {
          atom: 'p50-at-msd-chim7-simbol-semnificatie-interactiv',
          top: 83.5,
          left: 27,
          width: 17.5,
          height: 7,
          type: 'exercise'
        }
      ],
      image: 'p050.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p51-at-msd-chim7-aplica',
          top: 8.5,
          left: 6.5,
          width: 67,
          height: 88
        },
        {
          atom: 'p51-at-msd-chim7-verifica',
          top: 8.5,
          left: 75,
          width: 22,
          height: 73
        }
      ],
      image: 'p051.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '1', 'Definiția atomului. Element chimic. Simbol chimic', '50', 'blue', 'left', 'small');
}
}, {id: 'p50-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content pb0\"><div class=\"text-indent1-5 pb1\">Unele simboluri chimice sunt reprezentate prin prima literă din denumirea elementului chimic.</div><table class=\"msd-table orange-table responsive-table\"><thead class=\"text-center\"><tr><td class=\"fb\">Denumirea elementului chimic</td><td class=\"fb\">Simbolul chimic</td><td class=\"fb\">Denumirea elementului chimic</td><td class=\"fb\">Simbolul chimic</td></tr></thead><tbody><tr><td class=\"text-center\"><em>Bor</em></td><td class=\"text-center\">B</td><td class=\"text-center\"><em>Oxigen</em></td><td class=\"text-center\">O</td></tr><tr><td class=\"text-center\"><em>Carbon</em></td><td class=\"text-center\">C</td><td class=\"text-center\"><em>Sulf</em></td><td class=\"text-center\">S</td></tr><tr><td class=\"text-center\"><em>Hidrogen</em></td><td class=\"text-center\">H</td><td class=\"text-center\"><em>Vanadiu</em></td><td class=\"text-center\">V</td></tr><tr><td class=\"text-center\"><em>Iod</em></td><td class=\"text-center\">I</td><td class=\"text-center\"><em>Flour</em></td><td class=\"text-center\">F</td></tr></tbody></table></div></div>");
}
}, {id: 'p50-at-msd-chim7-simboluri-litera'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content\"><div class=\"text-indent1-5 pb1\">Alte simboluri sunt formate din două litere: prima literă urmată de o altă literă din denumirea elementului chimic.</div><table class=\"msd-table orange-table responsive-table\"><thead class=\"text-center\"><tr><td class=\"fb\">Denumirea elementului chimic</td><td class=\"fb\">Simbolul chimic</td><td class=\"fb\">Denumirea elementului chimic</td><td class=\"fb\">Simbolul chimic</td></tr></thead><tbody><tr><td class=\"text-center\"><em>Litiu</em></td><td class=\"text-center\">Li</td><td class=\"text-center\"><em>Nichel</em></td><td class=\"text-center\">Ni</td></tr><tr><td class=\"text-center\"><em>Beriliu</em></td><td class=\"text-center\">Be</td><td class=\"text-center\"><em>Cupru</em></td><td class=\"text-center\">Cu</td></tr><tr><td class=\"text-center\"><em>Neon</em></td><td class=\"text-center\">Ne</td><td class=\"text-center\"><em>Zinc</em></td><td class=\"text-center\">Zn</td></tr><tr><td class=\"text-center\"><em>Aluminiu</em></td><td class=\"text-center\">Al</td><td class=\"text-center\"><em>Seleniu</em></td><td class=\"text-center\">Se</td></tr><tr><td class=\"text-center\"><em>Siliciu</em></td><td class=\"text-center\">Si</td><td class=\"text-center\"><em>Brom</em></td><td class=\"text-center\">Br</td></tr><tr><td class=\"text-center\"><em>Clor</em></td><td class=\"text-center\">Cl</td><td class=\"text-center\"><em>Argint</em></td><td class=\"text-center\">Ag</td></tr><tr><td class=\"text-center\"><em>Argon</em></td><td class=\"text-center\">Ar</td><td class=\"text-center\"><em>Bariu</em></td><td class=\"text-center\">Ba</td></tr><tr><td class=\"text-center\"><em>Calciu</em></td><td class=\"text-center\">Ca</td><td class=\"text-center\"><em>Aur</em></td><td class=\"text-center\">Au</td></tr><tr><td class=\"text-center\"><em>Crom</em></td><td class=\"text-center\">Cr</td><td class=\"text-center\"><em>Plumb</em></td><td class=\"text-center\">Pb</td></tr><tr><td class=\"text-center\"><em>Mangan</em></td><td class=\"text-center\">Mn</td><td class=\"text-center\"><em>Poloniu</em></td><td class=\"text-center\">Po</td></tr><tr><td class=\"text-center\"><em>Fier</em></td><td class=\"text-center\">Fe</td><td class=\"text-center\"><em>Radon</em></td><td class=\"text-center\">Rn</td></tr><tr><td class=\"text-center\"><em>Cobalt</em></td><td class=\"text-center\">Co</td><td class=\"text-center\"><em>Radiu</em></td><td class=\"text-center\">Ra</td></tr></tbody></table></div></div>");
}
}, {id: 'p50-at-msd-chim7-simboluri-grup'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><div class=\"text-indent1-5 pb1\">Există unele elemente chimice ale căror simboluri provin din denumirile din limba latină ale elementelor chimice și nu din denumirile lor curente.</div><table class=\"msd-table orange-table responsive-table\"><thead class=\"text-center\"><tr><td class=\"fb\">Denumirea elementului chimic</td><td class=\"fb\">Denumirea elementului chimic în <span style=\"white-space: nowrap;\">limba latină</span></td><td class=\"fb\">Simbolul chimic</td></tr></thead><tbody><tr><td class=\"text-center\"><em>Azot</em></td><td class=\"text-center\"><em>Nitrogen</em></td><td class=\"text-center\">N</td></tr><tr><td class=\"text-center\"><em>Fosfor</em></td><td class=\"text-center\"><em>Phosphorus</em></td><td class=\"text-center\">P</td></tr><tr><td class=\"text-center\"><em>Mercur</em></td><td class=\"text-center\"><em>Hidrargirum</em></td><td class=\"text-center\">Hg</td></tr><tr><td class=\"text-center\"><em>Potasiu</em></td><td class=\"text-center\"><em>Kalium</em></td><td class=\"text-center\">K</td></tr><tr><td class=\"text-center\"><em>Sodiu</em></td><td class=\"text-center\"><em>Natrium</em></td><td class=\"text-center\">Na</td></tr></tbody></table></div></div>");
}
}, {id: 'p50-at-msd-chim7-simboluri-latina'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"pb2 text-left\">În Antichitate, alchimistii foloseau și ei simboluri pentru elementele chimice pe care le cunoșteau.</div><table class=\"msd-table orange-table\"><thead class=\"text-center\"><tr><td class=\"fb\">Element</td><td class=\"fb\">Antic</td><td class=\"fb\">Modern</td></tr></thead><tbody><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Sulf</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-sulf-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">S</td></tr><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Fier</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-fier-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">Fe</td></tr><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Zinc</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-zinc-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">Zn</td></tr><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Argint</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-argint-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">Ag</td></tr><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Mercur</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-mercur-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">Hg</td></tr><tr><td style=\"vertical-align: middle;\" class=\"text-center\">Plumb</td><td class=\"text-center\"> <div style=\"max-width: 50px; margin: auto;\">");
jade_mixins["img"]('img/chimie7/p50-plumb-antic.svg');
buf.push("</div></td><td style=\"vertical-align: middle;\" class=\"text-center\">Pb</td></tr></tbody></table><div class=\"row text-left\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p50-berzelius.png');
buf.push("</div><div class=\"col-sm-8 col-xs-12\"><br/><div class=\"fb\">Jons Jacob Berzelius</div>(1779 – 1848)<br/>chimist suedez, profesor la Facultatea de Medicină din Stockholm, unul dintre întemeietorii chimiei moderne. El a creat bazele actualului sistem de scriere a simbolurilor chimice.");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("</div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p50-at-msd-chim7-vrei-sa-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
jade_mixins["space1"]();
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"static-padding\"><div class=\"msd-amii-static\"></div></div>");
jade_mixins["img"]("img/chimie7/p50-amii_static.jpg");
jade_mixins["space1"]();
}
}, "p50-AMII_static");
}
}, 'no-title', '','');
}
}, {id: 'p50-at-msd-chim7-vrei-sa-stii-AMII'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content\"><div class=\"text-indent1-5 pb2\">Simbolul chimic are dublă semnificație: calitativă și cantitativă.</div><div class=\"row pb1\"><div class=\"col-sm-4 col-xs-12 pb1\"><div class=\"msd-orange-bg-5 text-center p1\">Semnificația simbolului chimic</div></div><div class=\"col-sm-8 col-xs-12\"><ul class=\"disc grup-acolada grup-acolada-orange marker-orange text-left\"><li> <strong>semnificație calitativă: </strong>simbolul indică elementul chimic respectiv;</li><li> <strong>semnificație cantitativă: </strong>simbolul indică un singur atom din acel element chimic (la scară atomică).</li></ul></div></div><div class=\"pb2\"><div class=\"text-indent1-5\">Simbolul chimic <strong>Ag </strong>indică elementul chimic argint – <em>semnificația calitativă. </em>În același timp, indică un atom de argint – <em>semnificație cantitativă.</em></div><div class=\"text-indent1-5\">Pentru a reprezenta 6 atomi de argint, se va scrie <strong>6Ag.</strong></div></div></div></div>");
}
}, {id: 'p50-at-msd-chim7-simbol-semnificatie'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div style=\"font-family: &quot;IBMPlexSans-Regular&quot;;\" class=\"msd-page-block\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"row pb1 d-flex text-left\"><div class=\"col-xs-1\"><div class=\"msd-exercise-icon blue\"></div></div><div class=\"col-xs-11\">Realizează, prin săgeți, corespondența între denumirea elementului și simbolul chimic al acestuia.</div></div>");
}
}, 'int_pag.50');
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
jade_mixins["connect-points"].call({
block: function(){
buf.push("<div class=\"row\"><div data-group=\"left\" class=\"col-xs-4\"><div class=\"choice pin-to\"><div data-name=\"a1\" class=\"connector pin-right\"></div>Argint</div><div class=\"choice pin-to\"><div data-name=\"a2\" class=\"connector pin-right\"></div>Azot</div><div class=\"choice pin-to\"><div data-name=\"a3\" class=\"connector pin-right\"></div>Crom</div><div class=\"choice pin-to\"><div data-name=\"a4\" class=\"connector pin-right\"></div>Iod</div><div class=\"choice pin-to\"><div data-name=\"a5\" class=\"connector pin-right\"></div>Magneziu</div><div class=\"choice pin-to\"><div data-name=\"a6\" class=\"connector pin-right\"></div>Nichel</div><div class=\"choice pin-to\"><div data-name=\"a7\" class=\"connector pin-right\"></div>Sulf</div><div class=\"choice pin-to\"><div data-name=\"a8\" class=\"connector pin-right\"></div>Sodiu</div><div class=\"choice pin-to\"><div data-name=\"a9\" class=\"connector pin-right\"></div>Mercur</div><div class=\"choice pin-to\"><div data-name=\"a10\" class=\"connector pin-right\"></div>Hidrogen</div></div><div class=\"col-xs-4\"></div><div data-group=\"right\" class=\"col-xs-4\"><div class=\"choice pin-to pl2\"><div data-name=\"r1\" class=\"connector pin-left\"></div>I</div><div class=\"choice pin-to pl2\"><div data-name=\"r2\" class=\"connector pin-left\"></div>Ni</div><div class=\"choice pin-to pl2\"><div data-name=\"r3\" class=\"connector pin-left\"></div>S</div><div class=\"choice pin-to pl2\"><div data-name=\"r4\" class=\"connector pin-left\"></div>Ag</div><div class=\"choice pin-to pl2\"><div data-name=\"r5\" class=\"connector pin-left\"></div>N</div><div class=\"choice pin-to pl2\"><div data-name=\"r6\" class=\"connector pin-left\"></div>Mg</div><div class=\"choice pin-to pl2\"><div data-name=\"r7\" class=\"connector pin-left\"></div>Cr</div><div class=\"choice pin-to pl2\"><div data-name=\"r8\" class=\"connector pin-left\"></div>H</div><div class=\"choice pin-to pl2\"><div data-name=\"r9\" class=\"connector pin-left\"></div>Na</div><div class=\"choice pin-to pl2\"><div data-name=\"r10\" class=\"connector pin-left\"></div>Hg</div></div></div>");
}
}, {
          name: 'p50-interactiv',
          orientation: 'horizontal', //- vertical / any
          lineStyle: {'stroke': '#FFDE9C'}, //- color of connector
          correctLineStyle: { 'stroke': '#FAA61A' }, //- color of correct connector
          connections: [
            ['a1', 'r4'],
            ['a2', 'r5'],
            ['a3', 'r7'],
            ['a4', 'r1'],
            ['a5', 'r6'],
            ['a6', 'r2'],
            ['a7', 'r3'],
            ['a8', 'r9'],
            ['a9', 'r10'],
            ['a10', 'r8'],
          ]
        });
buf.push("<div class=\"spacer05\"></div>");
}
});
}
}, {name: 'p50-interactiv'});
buf.push("</div>");
}
}, {id: 'p50-at-msd-chim7-simbol-semnificatie-interactiv'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Definiția atomului. Element chimic. Simbol chimic', '51', 'blue', 'right', 'small');
}
}, {id: 'p51-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"numbers\"><li class=\"pb1\">Scrie denumirile elementelor chimice ale căror simboluri chimice formează următoarele cuvinte:<ul class=\"letters\"> <div class=\"row\"> <div class=\"col-sm-6 col-xs-12\"><li>BUNICA;</li><li>POTASIU;</li></div><div class=\"col-sm-6 col-xs-12\"><li>CUSCRI;</li><li>FELINA;</li></div></div></ul></li><li class=\"pb1\">Scrie denumirile a șase elemente ale căror simboluri chimice sunt formate din primele două litere din denumire.</li><li class=\"pb1\">Notează, folosind simbolurile chimice:<ul class=\"letters\"> <div class=\"row\"> <div class=\"col-sm-6 col-xs-12\"><li>1 atom de calciu;</li><li>5 atomi de aluminiu;</li><li>4 atomi de sodiu;</li></div><div class=\"col-sm-6 col-xs-12\"><li>2 atomi de zinc;</li><li>1 atom de mercur;</li><li>3 atomi de magneziu.</li></div></div></ul></li><li class=\"pb1\">Pe o distanță de 3,6 cm se pot alinia, unul lângă celălalt, ");
jade_mixins["numar_putere"]("", "10", "8", "atomi");
buf.push("&nbsp;de sodiu. Determină raza unui atom de sodiu.</li><li class=\"pb1\"> <div class=\"pb1\">Imaginea de mai jos cuprinde simbolurile chimice ale unor elemente foarte importante pentru funcționarea normală a organismului uman. Scrie pe caiet fiecare dintre aceste simboluri, însoțit de denumirea corespunzătoare.</div><div class=\"row\"><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-se.png', 'a', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\"> ");
jade_mixins["img2"]('img/chimie7/p51-p.png', 'b', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-na.png', 'c', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-mn.png', 'd', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-mg.png', 'e', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-k.png', 'f', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-zn.png', 'g', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-ca.png', 'h', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-cl.png', 'i', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-cu.png', 'j', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-fe.png', 'k', 'grey sm-span');
buf.push("</div><div class=\"col-md-2 col-sm-3 col-xs-4\">");
jade_mixins["img2"]('img/chimie7/p51-i.png', 'l', 'grey sm-span');
buf.push("</div></div></li><div class=\"row pb1\"> <div class=\"col-md-5 col-sm-12 text-left\"><li class=\"pb1\"> <div class=\"pb1\"> <div class=\"d-inline\">Copiază în caiet tabelul </div><div class=\"mobile-hide desktop-inline-show\">alăturat.</div><div class=\"desktop-hide mobile-inline-show\">de mai jos.</div></div>Scrie, pe spațiul punctat, cifra care însoțește denumirea elementului chimic din coloana A și litera corespunzătoare simbolului chimic al acestuia, din coloana B.</li></div><div class=\"col-md-7 col-sm-12\"> <table class=\"msd-table purple-table responsive-table\"><thead class=\"text-center\"><tr><td class=\"fb\">A</td><td class=\"fb\">B</td></tr></thead><tbody><tr><td class=\"pl3\">1. Calciu</td><td class=\"pl2\">a. Cl</td><td class=\"text-center\">...</td></tr><tr><td class=\"pl3 msd-purple-bg-2\">2. Carbon</td><td class=\"pl2 msd-purple-bg-2\">b. Cd</td><td class=\"msd-purple-bg-2 text-center\">...</td></tr><tr><td class=\"pl3\">3. Crom</td><td class=\"pl2\">c. Co</td><td style=\"min-width: 50px;\" class=\"text-center\">...</td></tr><tr><td class=\"pl3 msd-purple-bg-2\">4. Clor</td><td class=\"pl2 msd-purple-bg-2\">d. Ce</td><td class=\"msd-purple-bg-2 text-center\">...</td></tr><tr><td class=\"pl3\">5. Cesiu</td><td class=\"pl2\">e. C</td><td class=\"text-center\">...</td></tr><tr><td class=\"pl3 msd-purple-bg-2\">6. Cobalt</td><td class=\"pl2 msd-purple-bg-2\">f. Cs</td><td class=\"msd-purple-bg-2 text-center\">...</td></tr><tr><td class=\"pl3\">7. Ceriu</td><td class=\"pl2\">g. Cu</td><td style=\"min-width: 50px;\" class=\"text-center\">...</td></tr><tr><td class=\"pl3 msd-purple-bg-2\">8. Cupru</td><td class=\"pl2 msd-purple-bg-2\">h. Cr</td><td class=\"msd-purple-bg-2 text-center\">...</td></tr><tr><td class=\"pl3\">9. Cadmiu</td><td class=\"pl2\">i. Ca</td><td class=\"text-center\">...</td></tr></tbody></table></div></div><div class=\"row\"> <div class=\"col-md-5 col-sm-12 text-left\"><li class=\"pb1\"> <div class=\"msd-purple\">Joc și chimie.</div><div class=\"pb1\">Formează o echipă cu colega/colegul de bancă.</div>În careul alăturat, citind pe orizontală, pe verticală și pe diagonală, veți descoperi denumirile a nouă elemente chimice.<br/>Scrieți simbolurile chimice ale elementelor identificate.<br/>Alcătuiți două cuvinte folosind aceste simboluri.</li></div><div class=\"col-md-7 col-sm-12\"> <table class=\"msd-table purple-table responsive-table\"><tbody><tr><td class=\"text-center\">A</td><td class=\"text-center\">S </td><td class=\"text-center\">T</td><td class=\"text-center\">I</td><td class=\"text-center\">C</td><td class=\"text-center\">A</td><td class=\"text-center\">L</td><td class=\"text-center\">C</td><td class=\"text-center\">I</td><td class=\"text-center\">U</td><td class=\"text-center\">X</td><td class=\"text-center\">B</td><td class=\"text-center\">C</td></tr><tr><td class=\"msd-purple-bg-2 text-center\">N</td><td class=\"msd-purple-bg-2 text-center\">A </td><td class=\"msd-purple-bg-2 text-center\">R</td><td class=\"msd-purple-bg-2 text-center\">B</td><td class=\"msd-purple-bg-2 text-center\">L</td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">T</td><td class=\"msd-purple-bg-2 text-center\">N</td><td class=\"msd-purple-bg-2 text-center\">C</td><td class=\"msd-purple-bg-2 text-center\">V</td><td class=\"msd-purple-bg-2 text-center\">A</td><td class=\"msd-purple-bg-2 text-center\">T</td><td class=\"msd-purple-bg-2 text-center\">S</td></tr><tr><td class=\"text-center\">M</td><td class=\"text-center\">I </td><td class=\"text-center\">O</td><td class=\"text-center\">N</td><td class=\"text-center\">O</td><td class=\"text-center\">R</td><td class=\"text-center\">S</td><td class=\"text-center\">O</td><td class=\"text-center\">M</td><td class=\"text-center\">C</td><td class=\"text-center\">E</td><td class=\"text-center\">T</td><td class=\"text-center\">U</td></tr><tr><td class=\"msd-purple-bg-2 text-center\">A</td><td class=\"msd-purple-bg-2 text-center\">A </td><td class=\"msd-purple-bg-2 text-center\">C</td><td class=\"msd-purple-bg-2 text-center\">A</td><td class=\"msd-purple-bg-2 text-center\">R</td><td class=\"msd-purple-bg-2 text-center\">B</td><td class=\"msd-purple-bg-2 text-center\">O</td><td class=\"msd-purple-bg-2 text-center\">N</td><td class=\"msd-purple-bg-2 text-center\">A</td><td class=\"msd-purple-bg-2 text-center\">B</td><td class=\"msd-purple-bg-2 text-center\">C</td><td class=\"msd-purple-bg-2 text-center\">O</td><td class=\"msd-purple-bg-2 text-center\">L</td></tr><tr><td class=\"text-center\">G</td><td class=\"text-center\">E </td><td class=\"text-center\">M</td><td class=\"text-center\">N</td><td class=\"text-center\">L</td><td class=\"text-center\">E</td><td class=\"text-center\">R</td><td class=\"text-center\">G</td><td class=\"text-center\">T</td><td class=\"text-center\">N</td><td class=\"text-center\">A</td><td class=\"text-center\">S</td><td class=\"text-center\">F</td></tr><tr><td class=\"msd-purple-bg-2 text-center\">N</td><td class=\"msd-purple-bg-2 text-center\">F </td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">E</td><td class=\"msd-purple-bg-2 text-center\">R</td><td class=\"msd-purple-bg-2 text-center\">U</td><td class=\"msd-purple-bg-2 text-center\">M</td><td class=\"msd-purple-bg-2 text-center\">R</td><td class=\"msd-purple-bg-2 text-center\">Y</td><td class=\"msd-purple-bg-2 text-center\">P</td><td class=\"msd-purple-bg-2 text-center\">D</td><td class=\"msd-purple-bg-2 text-center\">V</td><td class=\"msd-purple-bg-2 text-center\">W</td></tr><tr><td class=\"text-center\">E</td><td class=\"text-center\">M </td><td class=\"text-center\">N</td><td class=\"text-center\">T</td><td class=\"text-center\">I</td><td class=\"text-center\">O</td><td class=\"text-center\">M</td><td class=\"text-center\">R</td><td class=\"text-center\">E</td><td class=\"text-center\">S</td><td class=\"text-center\">M</td><td class=\"text-center\">E</td><td class=\"text-center\">A</td></tr><tr><td class=\"msd-purple-bg-2 text-center\">Z</td><td class=\"msd-purple-bg-2 text-center\">I </td><td class=\"msd-purple-bg-2 text-center\">N</td><td class=\"msd-purple-bg-2 text-center\">C</td><td class=\"msd-purple-bg-2 text-center\">O</td><td class=\"msd-purple-bg-2 text-center\">F</td><td class=\"msd-purple-bg-2 text-center\">E</td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">S</td><td class=\"msd-purple-bg-2 text-center\">A</td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">K</td><td class=\"msd-purple-bg-2 text-center\">M</td></tr><tr><td class=\"text-center\">I</td><td class=\"text-center\">N </td><td class=\"text-center\">Z</td><td class=\"text-center\">L</td><td class=\"text-center\">E</td><td class=\"text-center\">T</td><td class=\"text-center\">S</td><td class=\"text-center\">A</td><td class=\"text-center\">N</td><td class=\"text-center\">I</td><td class=\"text-center\">U</td><td class=\"text-center\">T</td><td class=\"text-center\">I</td></tr><tr><td class=\"msd-purple-bg-2 text-center\">U</td><td class=\"msd-purple-bg-2 text-center\">C </td><td class=\"msd-purple-bg-2 text-center\">E</td><td class=\"msd-purple-bg-2 text-center\">R</td><td class=\"msd-purple-bg-2 text-center\">G</td><td class=\"msd-purple-bg-2 text-center\">T</td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">O</td><td class=\"msd-purple-bg-2 text-center\">X</td><td class=\"msd-purple-bg-2 text-center\">I</td><td class=\"msd-purple-bg-2 text-center\">G</td><td class=\"msd-purple-bg-2 text-center\">E</td><td class=\"msd-purple-bg-2 text-center\">N</td></tr><tr><td class=\"text-center\">F</td><td class=\"text-center\">A </td><td class=\"text-center\">B</td><td class=\"text-center\">T</td><td class=\"text-center\">R</td><td class=\"text-center\">M</td><td class=\"text-center\">A</td><td class=\"text-center\">N</td><td class=\"text-center\">T</td><td class=\"text-center\">M</td><td class=\"text-center\">U</td><td class=\"text-center\">T</td><td class=\"text-center\">I</td></tr></tbody></table></div></div></ul></div>");
}
}, 'aplica', 'Aplică','pb1');
}
}, {id: 'p51-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"> <em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li class=\"pb1\"> \nÎn limba greacă, cuvântul <strong> <em>atom </em></strong>înseamnă:<ul class=\"letters\"> <li>invizibil;</li><li>indivizibil;</li><li>divizibil.</li></ul></li><li class=\"pb1\"> \nElementul chimic este definit ca fiind:<ul class=\"letters\"> <li>totalitatea atomilor de același fel;</li><li>totalitatea atomilor care se găsesc în natură.</li></ul></li><li class=\"pb1\"> \nSimbolul chimic al elementului cel mai răspândit în aer este:<ul class=\"letters\"> <li>Az;</li><li>N;</li><li>A.</li></ul></li><li class=\"pb1\"> \nCinci atomi de clor se notează:<ul class=\"letters\"> <li>5Cl;</li><li>5Ca;</li><li> ");
jade_mixins["molecula_mono"]("Cl", "5");
buf.push(".</li></ul></li><li class=\"pb1\"> \nCele mai răspândite metale în scoarța terestră au următoarele simboluri chimice: Al, Fe, Ca, Na. Șirul care cuprinde denumirile lor, în ordine, este:<ul class=\"letters\"> <li>aluminiu, fier, carbon, azot;</li><li>aluminiu, fier, calciu, sodiu.</li></ul></li><li class=\"pb1\"> <div class=\"pb1\">Numărul total de atomi reprezentați în dreptunghi este:</div><table style=\"background-color: #BADFB9; max-width: 320px;\" class=\"purple-table responsive-table\"><tbody><tr><td class=\"text-center\">7H</td><td class=\"text-center\">Ar </td><td class=\"text-center\">8Zn</td><td class=\"text-center\">4Al</td></tr><tr><td class=\"text-center\">nF</td><td class=\"text-center\">2Mg</td><td class=\"text-center\">5C</td><td class=\"text-center\">Pb</td></tr></tbody></table><ul class=\"letters\"> <li>28;</li><li>26 + <strong> <em>n</em></strong>;</li><li>28 + <strong> <em>n</em></strong>;</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<div> <em>Acordă-ți 1,5 puncte pentru fiecare răspuns corect și un punct din oficiu.</em></div><div><strong> <em>Total: 10 puncte.</em></strong></div>");
jade_mixins["space1"]();
buf.push("<div class=\"flip\"><em>Răspunsuri:<br/>1. b.; 2. a.; 3. b.; 4. a.; 5. b.; 6. c.</em></div></div>");
}
}, 'verifica', 'Verifica-te singur!','pb1 mb0');
}
}, {id: 'p51-at-msd-chim7-verifica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});