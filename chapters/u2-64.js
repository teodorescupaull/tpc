registerChapter({ chapter: "u2-64", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Exerciții și probleme. Test");
jade_mixins["subtitle"]("Pagina 64");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p64-at-msd-chim7-exercitii',
          top: 6.5,
          left: 0,
          width: 95,
          height: 35
        },
        {
          atom: 'p64-at-msd-chim7-test',
          top: 42.5,
          left: 0,
          width: 95,
          height: 54
        }
      ],
      image: 'p064.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', 'EVALUARE', 'Exerciții și probleme', '64', 'eval', 'left', 'big');
}
}, {id: 'p64-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-3\">");
jade_mixins["img"]("img/chimie7/p64-evaluare.jpg");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-9\"><ul class=\"numbers text-left\"><li>Precizează dacă enunțurile de mai jos sunt adevărate sau false.<ul class=\"letters\"><li> Electronul este o particulă subatomică care se găsește în nucleul atomului.</li><li>Atomul de ");
jade_mixins["atom_AZ"]("O","&nbsp;", "8");
buf.push("are pe ultimul strat 8 electroni.</li><li>Atomul este neutru din punct de vedere electric, deoarece numărul de electroni din învelișul de electroni este egal cu numărul de protoni din nucleu.</li><li>Molul de atomi reprezintă cantitatea dintr-­un element care conține numărul lui Avogadro de atomi.</li><li>Grupele sunt coloanele orizontale din Tabelul periodic al elementelor.</li><li>Sodiul este un metal alcalin.</li></ul></li></ul></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers n2 text-left\"><li>Fluorul este un element monoizotopic al cărui atom are sarcina nucleară +9, iar în nucleu are 10 neutroni. Pentru atomul de fluor indică:<ul class=\"letters\"><li> \nsimbolul chimic și numărul de particule subatomice (");
jade_mixins["proton_simple"]();
buf.push(", <em>n</em>, ");
jade_mixins["electron_simple"]();
buf.push(");</li><li>numărul atomic și numărul de masă;</li><li>configurația electronică;</li><li>poziția în Tabelul periodic.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Argonul prezintă trei izotopi care conțin 18 electroni și 18, 19, respectiv 20 de neutroni. Indică simbolurile acestor trei izotopi de tipul &nbsp;");
jade_mixins["atom_AZ"]("Ar.","<em>A</em>", "<em>Z</em>");
buf.push("</li>");
jade_mixins["space1"]();
buf.push("<li>Identifică numărul atomic <em>Z </em>și grupa pentru următoarele elemente:<ul class=\"letters\"> <li> ");
jade_mixins["word_sub"]("E","1");
buf.push(", situat în perioada a 2-­a, cu 7 electroni pe ultimul strat;</li><li> ");
jade_mixins["word_sub"]("E","2");
buf.push("&nbsp; căruia îi lipsesc doi electroni de pe stratul al doilea pentru a avea configurație stabilă de octet.</li></ul></li></ul></div>");
}
}, 'evaluare no-title', '','pb0');
}
}, {id: 'p64-at-msd-chim7-exercitii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-box lavender\"><div class=\"box-inner\"><div class=\"block-h1 msd-lavender\">Test</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"romans text-left\"><li><strong>Alege cuvântul potrivit dintre paranteze astfel încât enunțurile să fie adevărate:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers text-left\"><li> Atomul cu numărul atomic 19 și numărul de masă 39 conține ... neutroni <em>(19/20).</em></li><li>Elementul care are două straturi complet ocupate cu electroni este un ... <em>(gaz rar/metal).</em></li><li>Elementul cu simbolul P se numește ... <em>(potasiu/fosfor).</em></li><li>Aproape întreaga masă a atomului este concentrată în ... <em>(nucleu/învelișul de electroni).</em></li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Scrie în caiet litera corespunzătoare variantei  corecte.</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers text-left\"><li> Electronii cu energia cea mai mică se află pe stratul:<ul style=\"flex-wrap: wrap;\" class=\"letters d-flex\"><li class=\"pr2\">");
jade_mixins["strat_atomic"]("2");
buf.push(";</li><li class=\"pr2\">");
jade_mixins["strat_atomic"]("3");
buf.push(";</li><li class=\"pr2\">");
jade_mixins["strat_atomic"]("1");
buf.push(";</li><li class=\"pr2\">");
jade_mixins["strat_atomic"]("7");
buf.push(";</li></ul></li><li> Calciul este un element care îndeplinește un rol extrem de important în procesul de creștere și dezvoltare normală a organismului. Simbolul elementului calciu este:<ul style=\"flex-wrap: wrap;\" class=\"letters d-flex\"><li class=\"pr2\">C;</li><li class=\"pr2\">Ca;</li><li class=\"pr2\">Cl;</li><li class=\"pr2\">Cr.</li></ul></li><li>Are 6 electroni pe ultimul strat atomul elementului:<ul style=\"flex-wrap: wrap;\" class=\"letters d-flex\"><li class=\"pr2\"> ");
jade_mixins["atom_AZ"]("Mg","&nbsp;", "12");
buf.push("</li><li class=\"pr2\"> ");
jade_mixins["atom_AZ"]("C","&nbsp;", "6");
buf.push("</li><li class=\"pr2\"> ");
jade_mixins["atom_AZ"]("Ar","&nbsp;", "18");
buf.push("</li><li class=\"pr2\"> ");
jade_mixins["atom_AZ"]("S","&nbsp;", "16");
buf.push("</li></ul></li></ul>");
jade_mixins["space1"]();
buf.push("<li> <strong>Privește cu atenție modelele atomice din figurile a-c. Indică:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers text-left\"><li>numărul de particule subatomice (");
jade_mixins["proton_simple"]();
buf.push(", <em>n, </em>");
jade_mixins["electron_simple"]();
buf.push("), din fiecare atom;</li><li>atomii care sunt izotopii aceluiași element;</li><li>perioada în care se găsește fiecare dintre aceste elemente.</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<div class=\"row sm-center-row\"><div class=\"col-xs-6 col-sm-4\">");
jade_mixins["img2"]('img/chimie7/p64-atommg.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-xs-6 col-sm-4\">");
jade_mixins["img2"]('img/chimie7/p64-izotopmg25.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-xs-6 col-sm-4\">");
jade_mixins["img2"]('img/chimie7/p64-atomo.jpg', 'c', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<li> <strong>Se dau elementele &nbsp;");
jade_mixins["atom_AZ"]("X,","27","13");
jade_mixins["atom_AZ"]("Y,","28","14");
jade_mixins["atom_AZ"]("T.","31","15");
buf.push("Determină pentru acestea:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers text-left\"><li>structura atomică;</li><li>configurația electronică;</li><li>poziția în Tabelul periodic al elementelor.</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li> <strong>Efectuează următoarele calcule, utilizând pentru masele atomice relative anexa de la sfârșitul manualului:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers text-left\"><li>numărul de moli din 81 g de aluminiu;</li><li>masa a 5 mol de sulf;</li><li>numărul de atomi din 112 g de fier.</li></ul></div></li></div></li>");
jade_mixins["space1"]();
buf.push("<div class=\"row items-between\"><div class=\"col-md-6\"><div class=\"msd-box lavender2\"><div class=\"box-inner\"><p>Punctaje:<div class=\"row\"><div class=\"col-md-3 col-xs-3\"><p>I</p><p>II</p><p>III</p><p>IV</p><p>V</p></div><div class=\"col-md-8 col-xs-8\"><p>20 de puncte</p><p>15 puncte</p><p>20 puncte</p><p>20 de puncte</p><p>15 de puncte</p></div></div></p>");
jade_mixins["space1"]();
buf.push("<p>10 puncte din oficiu</p><p>Total: 100 de puncte</p><p>Timp de lucru:</p><p>30 de minute</p></div></div></div></div></ul></div></div>");
}
}, 'test no-title', '','');
}
}, {id: 'p64-at-msd-chim7-test'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});