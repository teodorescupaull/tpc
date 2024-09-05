registerChapter({ chapter: "u1-46", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Exerciții și probleme. Test");
jade_mixins["subtitle"]("Pagina 46");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p46-at-msd-chim7-exercitii',
          top: 6.2296,
          left: 2.3636,
          width: 92.9697,
          height: 33.3676,
          type: 'text'
        },
        {
          atom: 'p46-at-msd-chim7-test',
          top: 40.1628,
          left: 1.8788,
          width: 93.8182,
          height: 55.904
        }
      ],
      image: 'p046.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', 'EVALUARE', 'Exerciții și probleme', '46', 'eval', 'left', 'big');
}
}, {id: 'p46-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p46.jpg");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-9\"><ul class=\"numbers\"><li>Alege dintre variantele de mai jos pe acelea care descriu condițiile de dizolvare rapidă a zahărului în apă:<ul class=\"letters\"><li>se folosește apă caldă;</li><li>se folosește apă de la frigider;</li><li>se amestecă cu o linguriță.</li></ul></li><li>Calculează concentrația procentuală pentru soluțiile date:<ul class=\"letters\"><li>soluția apoasă de bicarbonat de sodiu cu volumul de 275 mL (ρ = 1 g/mL), care conține 25 g de bicarbonat de sodiu;</li><li>soluția obținută prin dizolvarea a 200 g de zahăr în 400 g de apă;</li><li>soluția de saramură cu masa de 80 g care conține 12 g de sare de bucătărie.</li></ul></li></ul></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers n3\"><li>Pentru soluțiile prezentate, indică dizolvatul, dizolvantul și starea de agregare a acestora:<ul class=\"letters\"><li>aliajul format din 70 g de zinc și 30 g de cupru;</li><li>saramură de concentrație 25%;</li><li>aerul.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Peste 12 g de sare de lămâie se adaugă 68 g de apă, rezultând soluția I. În soluția I se mai adaugă 8 g de sare de lămâie, rezultând soluția II.<p>Rezolvă cerințele:</p><ul class=\"letters\"><li>Soluția II este mai diluată sau mai concentrată decât soluția I?</li><li>Calculează concentrațiile procentuale ale celor două soluții.</li></ul></li></ul></div>");
}
}, 'evaluare no-title', '','');
}
}, {id: 'p46-at-msd-chim7-exercitii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-box lavender\"><div class=\"box-inner\"><div class=\"block-h1 msd-lavender\">Test</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"romans\"><li><strong>Alege cuvântul potrivit dintre paranteze astfel încât enunțurile să fie adevărate:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li> Solul este un amestec … .<em>(omogen/eterogen)</em></li><li>În soluția de saramură, sarea este … .<em>(dizolvat/dizolvant)</em></li><li>Apa … este o substanță pură.<em>(potabilă/distilată)</em></li><li>Solubilitatea substanțelor gazoase … odată cu creșterea temperaturii.<em>(scade/crește)</em></li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Scrie în caiet litera corespunzătoare variantei corecte.</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>Componentul principal al aerului este:<div class=\"row\"><div class=\"col-md-6\"><ul class=\"letters\"><li>dioxidul de carbon;</li><li>hidrogenul;</li></ul></div><div class=\"col-md-6\"><ul class=\"letters n3\"><li>azotul;</li><li>oxigenul.</li></ul></div></div></li>");
jade_mixins["space1"]();
buf.push("<li>Principalul poluant la scară mondială este reprezentat de:<div class=\"row\"><div class=\"col-md-6\"><ul class=\"letters\"><li>incendiile forestiere;</li><li>eroziunea solului;</li></ul></div><div class=\"col-md-6\"><ul class=\"letters n3\"><li>industrie;</li><li>erupțiile vulcanice.</li></ul></div></div></li>");
jade_mixins["space1"]();
buf.push("<li>O soluție poate deveni mai concentrată prin:<div class=\"row\"><div class=\"col-md-6\"><ul class=\"letters\"><li>adăugare de apă;</li><li>adăugare de apă și dizolvat,<br/>în cantități egale;</li></ul></div><div class=\"col-md-6\"><ul class=\"letters n3\"><li>adăugare de dizolvat;</li><li>amestecare cu o altă soluție mai diluată.</li></ul></div></div></li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Știind că la temperatura de 20 °C în 100 g de apă se dizolvă maximum 20 g de substanță X, asociază soluția din coloana A cu tipul acesteia, din coloana B.</strong>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table lavender-table\"><thead class=\"text-center\"><tr><td>A</td><td>B</td></tr></thead><tbody><tr><td><ul class=\"numbers\"><li>10 g substanță X și 100 g apă</li><li>60 g substanță X și 300 g apă</li><li>30 g substanță X și 150 g apă</li><li>20 g substanță X și 200 g apă</li></ul></td><td><ul class=\"letters\"><li>soluție saturată</li><li>soluție nesaturată</li></ul></td></tr></tbody></table></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Se dizolvă 75 g de sodă caustică în 175 g de apă. Determină:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>concentrația soluției obținute;</li><li>câtă apă mai trebuie adăugată, astfel încât concentrația soluției de la punctul 1 să scadă la jumătate.</li></ul></div>");
jade_mixins["space1"]();
buf.push("</li><li><strong>Se amestecă 200 g de soluție de saramură de concentrație 15% cu 300 g de soluție de saramură de concentrație 25%. Indică:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>masa de apă din soluția finală;</li><li>concentrația soluției finale;</li><li>cum poți recupera sarea din soluția finală.</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("</ul></div><div class=\"row items-between\"><div class=\"col-md-6\"><div class=\"msd-box lavender2\"><div class=\"box-inner\"><p>Punctaje:<div class=\"row\"><div class=\"col-md-3 col-xs-3\"><p>I</p><p>II</p><p>III</p><p>IV</p><p>V</p></div><div class=\"col-md-8 col-xs-8\"><p>20 de puncte</p><p>15 puncte</p><p>15 puncte</p><p>20 de puncte</p><p>20 de puncte</p></div></div></p>");
jade_mixins["space1"]();
buf.push("<p>10 puncte din oficiu</p><p>Total: 100 de puncte</p><p>Timp de lucru:</p><p>50 de minute</p></div></div></div></div></div>");
}
}, 'test no-title', '','');
}
}, {id: 'p46-at-msd-chim7-test'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});