registerChapter({ chapter: "u3-96", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Exerciții și probleme. Test");
jade_mixins["subtitle"]("Pagina 96");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p96-at-msd-chim7-interactiv',
          top: 6.5724,
          left: 4.4242,
          width: 24.8485,
          height: 8.689,
          type: 'exercise'
        },
        {
          atom: 'p96-at-msd-chim7-test-2',
          top: 41.2768,
          left: 4.4242,
          width: 90.9091,
          height: 55.3899,
          type: 'text'
        },
        {
          atom: 'p96-at-msd-chim7-test',
          top: 6.3153,
          left: 29.3939,
          width: 66.7879,
          height: 30.6255,
          type: 'text'
        }
      ],
      image: 'p096.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', 'EVALUARE', 'Exerciții și probleme', '96', 'eval', 'left', 'big');
}
}, {id: 'p96-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p96-evaluare.jpg");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-8\"><ul class=\"numbers\"><li>Corectează erorile strecurate în afirmațiile de mai jos:<ul class=\"letters\"><li>Atomii elementelor din grupa a 2-a primesc 2<em>e<sup>–</sup></em> pe ultimul strat de electroni pentru a forma configurație stabilă de gaz rar.</li><li>Iodura de calciu este o sare care conține trei atomi de iod.</li><li> <em>p</em>H-ul unei soluții de acid este mai mare decât 7.</li></ul>");
jade_mixins["space1"]();
buf.push("</li><li>Un element E are în nucleu 8 protoni și 8 neutroni.<ul class=\"letters\"><li>Reprezintă configurația electronică a elementului E.</li><li>Identifică elementul E.</li><li>Scrie formulele chimice ale compușilor pe care îi formează elementul E cu hidrogenul, magneziul, respectiv aluminiul și denumește-i.</li></ul></li></ul></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers n3\"><li>Rezolvă cerințele de mai jos.<ul class=\"letters\"><li>Reprezintă procesele de ionizare pentru elementele chimice:<br/>Al (<em>Z</em> = 13), F (<em>Z</em> = 9), Mg (<em>Z</em> = 12), O (<em>Z</em> = 8).</li><li>Numește gazele rare care prezintă configurațiile electronice ale ionilor elementelor de la punctul <span class=\"eval-text-blue fb\">a</span>.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Determină numărul de atomi de oxigen care sunt cuprinși în:<ul class=\"letters items-space-between\"><li>2Na<sub>3</sub>PO<sub>4</sub>; </li><li>5Ca(OH)<sub>2</sub>;</li><li>7H<sub>2</sub>SO<sub>4</sub>; </li><li>3NO<sub>2</sub>.</li></ul></li></ul></div>");
}
}, 'evaluare no-title', '','');
}
}, {id: 'p96-at-msd-chim7-test'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<span>Așază substanțele de mai jos în caseta corespunzătoare:</span>");
jade_mixins["space1"]();
}
}, "p96");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push(" ");
jade_mixins["drag-to-bucket"].call({
block: function(){
buf.push("<div class=\"buckets blue\"><div data-name=\"allWords\" class=\"bucket\"><div class=\"items well well-lg\"><span data-index=\"1\" data-target=\"ba\" class=\"item\">NaOH</span><span data-index=\"2\" data-target=\"sa\" class=\"item\">CuCl <sub>2</sub></span><span data-index=\"3\" data-target=\"ox\" class=\"item\">CaO </span><span data-index=\"4\" data-target=\"ac\" class=\"item\">H<sub>2</sub>SO<sub>3 </sub></span><span data-index=\"5\" data-target=\"ba\" class=\"item\">Ca(OH)<sub>2</sub></span><span data-index=\"6\" data-target=\"ox\" class=\"item\">SO<sub>2</sub></span><span data-index=\"7\" data-target=\"sa\" class=\"item\">AlF<sub>3</sub></span><span data-index=\"8\" data-target=\"ac\" class=\"item\">HBr</span><span data-index=\"9\" data-target=\"sa\" class=\"item\">Mg(NO<sub>3</sub>)<sub>2</sub></span><span data-index=\"10\" data-target=\"ox\" class=\"item\">Fe<sub>2</sub>O<sub>3</sub></span><span data-index=\"11\" data-target=\"ac\" class=\"item\">H<sub>3</sub>PO<sub>4</sub></span><span data-index=\"12\" data-target=\"ba\" class=\"item\">Zn(OH)<sub>2</sub></span></div></div><div class=\"row\"><div data-name=\"ox\" class=\"col-xs-6 bucket\"><p class=\"text-center\"><strong>OXIZI</strong></p><div class=\"items well well-lg\"></div></div><div data-name=\"ba\" class=\"col-xs-6 bucket\"><p class=\"text-center\"><strong> BAZE</strong></p><div class=\"items well well-lg\"></div></div><div data-name=\"ac\" class=\"col-xs-6 bucket\"><p class=\"text-center\"><strong> ACIZI</strong></p><div class=\"items well well-lg\"></div></div><div data-name=\"sa\" class=\"col-xs-6 bucket\"><p class=\"text-center\"><strong> SĂRURI</strong></p><div class=\"items well well-lg\"></div></div></div></div>");
}
}, {
            name: 'p96',
            orderInBuckets: false,
            bucketsSortable: false
          });
}
});
}
}, {name:'p96-drag'});
buf.push("</div>");
}
}, 'evaluare no-title', '','');
}
}, {id: 'p96-at-msd-chim7-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-box lavender\"><div class=\"box-inner\"><div class=\"block-h1 msd-lavender\">Test</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"romans\"><li><strong>Alege cuvântul potrivit dintre paranteze, astfel încât enunțurile să fie adevărate:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li> <em>p</em>H-ul măsoară caracterul acid, bazic sau … al unei soluții (<em>neutru</em>/<em>nemetalic</em>).</li><li>Azotitul de potasiu este o … (<em>bază</em>/<em>sare</em>).</li><li>H<sub>2</sub>SO<sub>3</sub> este un … (<em>hidracid</em>/<em>oxiacid</em>).</li><li>Molecula este cea mai mică particulă care, în condiții standard de temperatură și presiune, … toate proprietățile substanței din care provine (<em>păstrează</em>/<em>nu păstrează</em>).</li><li>Fenolftaleina își schimbă culoarea în roșu-carmin în mediu … (<em>bazic</em>/<em>acid</em>).</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Scrie în caiet litera corespunzătoare variantei corecte.</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>Formula hidroxidului de magneziu este:<ul class=\"letters items-space-between\"><li>MgO;</li><li>Mg(OH)<sub>2</sub>;</li><li>Mg(NO<sub>2</sub>)<sub>2</sub>;</li><li>Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Este o substanță simplă:<ul class=\"letters items-space-between\"><li>H<sub>2</sub>O;</li><li>NH<sub>3</sub>; </li><li>NaOH;</li><li>S<sub>8</sub>.</li></ul></li>");
jade_mixins["space1"]();
buf.push("<li>Atomul de Li (<em>Z</em> = 3) formează configurație stabilă prin:<div class=\"row\"><div class=\"col-md-6\"><ul class=\"letters\"><li>acceptare de electroni;</li><li>primire de electroni;</li></ul></div><div class=\"col-md-6\"><ul class=\"letters n3\"><li>cedare de electroni;</li><li>punere în comun de electroni.</li></ul></div></div></li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong> În imaginile de mai jos sunt reprezentate moleculele de acid sulfhidric și acid azotic. Indică:</strong>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"> <li>formulele chimice ale acestor substanțe;</li><li>numărul total de atomi care se găsesc în două molecule de acid sulfhidric și cinci molecule de acid azotic.</li></ul>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-xs-10 element-xs-center col-md-6\"> ");
jade_mixins["img"]('img/chimie7/p96-test-1.png');
buf.push("</div><div class=\"col-xs-10 element-xs-center col-md-6\"> ");
jade_mixins["img"]('img/chimie7/p96-test-2.png');
buf.push("</div></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Atomii elementului X formează ioni pozitivi trivalenți izoelectronici cu gazul rar din perioada a 2-a. Atomii elementului Y formează ioni negativi monovalenți izoelectronici cu același gaz rar. Determină:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>elementele X și Y;</li><li>poziția elementelor X și Y în Tabelul periodic al elementelor;</li><li>formula chimică și denumirea compusului format din cele două elemente X și Y.</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Indică formulele chimice din enumerarea de mai jos care aparțin unor săruri provenite de la hidracizi, respectiv de la oxiacizi.</strong><div class=\"ml-1\"><div class=\"items-04-between\"><span> <span class=\"msd-lavender\">•</span><span> CaCO<sub>3</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> Al<sub>2</sub>S<sub>3</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> FeCl<sub>3</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> Mg(NO<sub>3</sub>)<sub>2 </sub></span></span><span> <span class=\"msd-lavender\">•</span><span> CuCl<sub>2</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> Na<sub>3</sub>PO <sub>4</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> ZnBr<sub>2</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></span></span><span> <span class=\"msd-lavender\">•</span><span> KF</span></span><span> <span class=\"msd-lavender\">•</span><span> Na<sub>2</sub>CO <sub>3</sub>.</span></span></div></div></li>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<li> <strong>Modelează punerea în comun de electroni pentru formarea moleculelor de acid fluorhidric (<sub>1</sub>H,<sub> 9</sub>F), acid sulfhidric (<sub>1</sub>H,<sub> 16</sub>S) și hidrogen fosforat (<sub>1</sub>H,<sub> 15</sub>P).</strong></li>");
jade_mixins["space1"]();
buf.push("</ul></div><div class=\"row items-between\"><div class=\"col-md-6\"><div class=\"msd-box lavender2\"><div class=\"box-inner\"><p>Punctaje:<div class=\"row\"><div class=\"col-md-3 col-xs-3\"><p>I</p><p>II</p><p>III</p><p>IV</p><p>V</p><p>VI</p></div><div class=\"col-md-8 col-xs-8\"><p>20 de puncte</p><p>15 puncte</p><p>12 puncte</p><p>18 puncte</p><p>10 puncte</p><p>15 puncte</p></div></div></p>");
jade_mixins["space1"]();
buf.push("<p>10 puncte din oficiu</p><p>Total: 100 de puncte</p><p>Timp de lucru:</p><p>50 de minute</p></div></div></div></div></div>");
}
}, 'test no-title', '','');
}
}, {id: 'p96-at-msd-chim7-test-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});