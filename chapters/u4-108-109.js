registerChapter({ chapter: "u4-108-109", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Exerciții și probleme. Test\nRecapitulare finală");
jade_mixins["subtitle"]("Paginile 108 - 109");
buf.push("<!--variables-->");
var subex = 'neg-chim7-', e = 1
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p108-exercitii',
          top: 6.5724,
          left: 29.3939,
          width: 65.9394,
          height: 31.8252,
          type: 'text'
        },
        {
          atom: 'p108-test',
          top: 42.9049,
          left: -0.0606,
          width: 95.394,
          height: 53.7618
        },
        {
          atom: 'p108-interactiv',
          top: 6.3153,
          left: 4.7879,
          width: 24.2424,
          height: 22.5707,
          type: 'exercise'
        }
      ],
      image: 'p108.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p109-interactiv',
          top: -0.0257,
          left: -0.0606,
          width: 46.4242,
          height: 6.6324,
          type: 'exercise'
        },
        {
          atom: 'p109-recapitulare-ex-1',
          top: 6.6581,
          left: 0.0606,
          width: 75.0303,
          height: 13.916
        },
        {
          atom: 'p109-recapitulare-ex-2',
          top: 20.6255,
          left: -0.0606,
          width: 74.9091,
          height: 6.8895
        },
        {
          atom: 'p109-recapitulare-ex-3',
          top: 27.5664,
          left: -0.0606,
          width: 100.1212,
          height: 17.6007
        },
        {
          atom: 'p109-recapitulare-ex-4',
          top: 45.1328,
          left: -0.0606,
          width: 74.9091,
          height: 8.7746
        },
        {
          atom: 'p109-recapitulare-ex-5',
          top: 53.8732,
          left: -0.1818,
          width: 100.3636,
          height: 9.4602
        },
        {
          atom: 'p109-recapitulare-ex-6',
          top: 63.2991,
          left: -0.0606,
          width: 74.7879,
          height: 9.6315
        },
        {
          atom: 'p109-recapitulare-ex-7',
          top: 72.8963,
          left: -0.0606,
          width: 62.4242,
          height: 9.0317
        },
        {
          atom: 'p109-recapitulare-video',
          top: 73.7532,
          left: 63.2121,
          width: 32.1212,
          height: 21.7995,
          type: 'video'
        },
        {
          atom: 'p109-recapitulare-ex-8',
          top: 81.8937,
          left: 0.0606,
          width: 62.5455,
          height: 15.7155
        }
      ],
      image: 'p109.jpg'
    }
  ]);
buf.push("</div><!-- Page 108-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', 'Evaluare', 'Exerciții și probleme', '108', 'eval', 'left', 'big');
}
}, {id: 'p108-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-12 col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p108-evaluare.jpg");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p108-evaluare-ex3.png");
buf.push("</div><div class=\"col-xs-12 col-md-9\"><ul class=\"numbers\"><li>Copiază în caiet afirmațiile de mai jos și scrie în spațiul punctat, A, dacă enunțul este adevărat, sau F, dacă este fals.<ul class=\"letters\"><li>Sulfura de aluminiu are formula chimică Al<sub>2</sub>S<sub>3</sub>. (...)</li><li>Hidroxidul de fier (II) are masa molară 107 g/mol. (...)</li><li>În clorura cuproasă raportul atomic este Cu : Cl = 1 : 2. (...)</li></ul></li><li>Se consideră elementele:<ul class=\"disc\"><li>E<sub>1</sub> situat în grupa 1, perioada a 3-a;</li><li>E<sub>2</sub> cu sarcina nucleară + 16;</li><li>E<sub>3</sub> cu Z = 8.</li></ul><p>Se cere:</p></li><ul class=\"letters n1 pl3\"><li>scrie formulele compușilor ternari în a căror compoziție se găsesc elementele E<sub>1</sub>, E<sub>2</sub>, E<sub>3</sub>.</li><li>precizează denumirile compușilor identificați la punctul<strong class=\"blue\"> a</strong>.</li><li>calculează masa molară, raportul atomic și raportul de masă pentru compușii identificați la punctul<strong class=\"blue\"> a</strong>.</li></ul></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"col-xs-12\"><ul class=\"numbers n3\"><li>În recipientele alăturate, de la stânga la dreapta, se găsesc: 15 mol H<sub>2</sub>, 0,5 kg H<sub>2</sub>, 6,022 · 10<sup>24</sup> molecule H<sub>2</sub>, respectiv 24,088 · 10<sup>24</sup> atomi de hidrogen (c. n.).<p>Indică culoarea recipientului în care se găsește cea mai mare masă de gaz.</p></li><li>Calculează masa, exprimată în grame, pentru:<ul class=\"letters flex items-between-all\"><li>5 mol Ca(OH)<sub>2</sub>;</li><li>100 mmol HNO<sub>3</sub>;</li><li>0,5 kmol CuCl<sub>2</sub>.</li></ul></li></ul></div></div></div></div>");
}
}, 'evaluare no-title', '','');
}
}, {id: 'p108-exercitii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-box lavender\"><div class=\"box-inner\"><div class=\"block-h1 msd-lavender\">Test</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"romans\"><li><strong>Alege cuvântul potrivit dintre paranteze astfel încât următoarele enunțuri să fie adevărate.</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>Acidul ... are raportul atomic H : S : O = 2 : 1 : 3. (<i>sulfuric/sulfuros</i>)</li><li>Procentul de oxigen din hidroxidul de sodiu este de ... . (40%/25%)</li><li>Un mol de acid azotos cântărește ... . (47 g/98 g)</li><li>Numărul atomilor de oxigen din azotatul de calciu este mai ... decât numărul atomilor de oxigen din azotitul de calciu. (<i>mic/mare</i>)</li><li>Valența sulfului în dioxidul de sulf este ... . (4/6)</li></ul></div></li><li><strong>Scrie în caiet litera corespunzătoare variantei corecte.</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>Elementul X situat în grupa a 2-a, perioada a 3-a formează oxidul:<ul class=\"letters flex items-between-all\"><li>Na<sub>2</sub>O;</li><li>Al<sub>2</sub>O<sub>3</sub>;</li><li> MgO;</li><li>CaO.</li></ul></li><li>Procentul cel mai mare de hidrogen se găsește în:<ul class=\"letters flex items-between-all\"><li>HCl;</li><li>CH<sub>4</sub>;</li><li>H<sub>2</sub>SO<sub>4</sub>;</li><li>Al(OH)<sub>3</sub>.</li></ul></li><li>În 4 mol de molecule de Cl<sub>2</sub> se găsesc:<ul class=\"letters flex items-between-all\"><li>24,088 · 10<sup>23</sup> molecule;</li><li>42 g;</li><li>6,022 · 10<sup>23</sup> molecule;</li><li>24,088 · 10<sup>23</sup> atomi.</li></ul></li></ul></div></li><li><strong>O substanță chimică are raportul atomic Ca : N : O = 1 : 2 : 6. Determină pentru această substanță:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>formula chimică;</li><li>masa molară;</li><li>compoziția procentuală de masă;</li><li>masa care conține 10 g de calciu.</li></ul></div></li><li><strong>În imaginile de mai jos sunt prezentate moleculele de acid fosforic și de dioxid de carbon. Indică pentru fiecare dintre aceste substanțe:</strong><div class=\"ml-1\"><ul class=\"letters\"><li>formula chimică;</li><li>masa molară;</li><li>masa, exprimată în grame, pentru câte o moleculă din fiecare substanță.</li></ul></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-sm-6\">");
jade_mixins["img3"]('img/chimie7/p108-test-1.png', '');
buf.push("</div><div class=\"col-xs-12 col-sm-6\">");
jade_mixins["img3"]('img/chimie7/p108-test-2.png', '');
buf.push("</div></div></li><li><strong>Elementul E1 are sarcina nucleară +29 și valență variabilă. Scrie formulele sulfaților și sulfiților pe care îi poate forma acest element.</strong></li><li><strong>O sare folosită ca aditiv alimentar (E 340) are compoziția procentuală 55,189% K, 14,6222% P și 30,189% O. Determină:</strong><div class=\"ml-1\"><ul class=\"letters\"><li>formula chimică a substanței;</li><li>masa de fosfor din 4,24 g de sare;</li><li>numărul de moli din 1484 g de sare.</li></ul></div></li><div class=\"msd-box lavender2\"><div class=\"box-inner\"><p>Punctaje:<div class=\"row\"><div class=\"col-xs-6 col-md-3\"><p>I</p><p>II</p><p>III</p><p>IV</p><p>V</p><p>VI</p></div><div class=\"col-xs-6 col-md-8\"><p>20 de puncte</p><p>15 puncte</p><p>16 puncte</p><p>16 puncte</p><p>8 puncte</p><p>15 puncte</p></div>");
jade_mixins["space1"]();
buf.push("<div class=\"col-xs-12\"><p>10 puncte din oficiu</p><p>Total: 100 de puncte</p><p>Timp de lucru:</p><p>50 de minute</p></div></div></p></div></div></ul></div></div>");
}
}, 'test no-title', '','');
}
}, {id: 'p108-test'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-exercise-icon blue\"></div><span>Colorează în careul de mai jos, cu roșu, pătratele care conțin soluțiile următoarelor probleme și vei vedea ce notă ai obținut.</span>");
jade_mixins["space1"]();
buf.push("<ul class=\"letters black pl3\"><li>Să se calculeze raportul atomic în H<sub>3</sub>PO<sub>3</sub>, H : P : O = … : … : … .</li><li>Să se calculeze numărul de moli din 296 g Mg(NO<sub>3</sub>)<sub>2</sub>.</li><li>Să se calculeze raportul de masă în CaSO<sub>4</sub>, Ca : S : O = … : … : … .</li><li>Să se calculeze numărul de moli de Al din 3 moli Al<sub>2</sub>O<sub>3</sub>.</li></ul>");
jade_mixins["space1"]();
}
}, "ch.7_sta_pag.108");
jade_mixins["exercise"].call({
block: function(){
buf.push("<div class=\"_spaced-validator\">");
jade_mixins["validator"].call({
block: function(){
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"uni-table\"><table class=\"simple-black center\"><tr class=\"text-center\"><td>a.</td><td>b. </td><td>c.</td><td>d.</td></tr><tr><td class=\"bad\">5 mol<span class=\"letter-int\">A</span></td><td class=\"bad\">1 : 1 : 3 <span class=\"letter-int\">O</span></td><td class=\"bad\">4 mol<span class=\"letter-int\">P</span></td><td class=\"bad\">5 : 4 : 8 <span class=\"letter-int\">A</span></td></tr><tr><td class=\"good\">3 : 1 : 3 <span class=\"letter-int\">Z</span></td><td class=\"good\">2 mol<span class=\"letter-int\">E</span></td><td class=\"bad\">1 : 2 : 3 <span class=\"letter-int\">R</span></td><td class=\"bad\">2 : 3 <span class=\"letter-int\">R</span></td></tr><tr><td class=\"bad\">2 : 2 : 1 <span class=\"letter-int\">N</span></td><td class=\"bad\">7 : 8 : 5 <span class=\"letter-int\">U</span></td><td class=\"good\">5 : 4 : 8 <span class=\"letter-int\">C</span></td><td class=\"bad\">142 g <span class=\"letter-int\">O</span></td></tr><tr><td class=\"bad\">5 : 8 : 8 <span class=\"letter-int\">C</span></td><td class=\"bad\">1 mol <span class=\"letter-int\">Z</span></td><td class=\"bad\">10 : 3 : 2 <span class=\"letter-int\">T</span></td><td class=\"good\">6 mol<span class=\"letter-int\">E</span></td></tr></table></div>");
}
}, { name: '108-109-' + subex + e++, className: 'md-select2',
                  showResults: false
                });
}
});
buf.push("</div>");
}
}, {name: 'p108-ex1'});
buf.push("</div>");
}
}, 'no-title', '','');
}
}, {id: 'p108-interactiv'});
buf.push("<!-- Page 109-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('', '', 'Recapitulare finală', '109', 'eval', 'right', 'big');
}
}, {id: 'p109-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-exercise-icon blue\"></div><span>Identifică valoarea de adevăr a fiecăreia dintre afirmațiile următoare, bifând căsuța corespunzătoare.</span>");
jade_mixins["space1"]();
}
}, "ch.7_sta_pag.109");
jade_mixins["space1"]();
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push("<ul class=\"numbers pl3\"><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Oțelul este un amestec eterogen solid.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: false,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Izotopul carbonului care are 8 neutroni și 6 protoni se notează<span class=\"sup-sub\"><sup>14</sup><sub class=\"text-indent\">6</sub>C.</span></div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: true,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Elementul al cărui atom are două straturi complet ocupate are simbolul Ne.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: true,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Sodiul este un metal trivalent.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: false,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Raportul atomic în clorura de magneziu este Mg : Cl = 2 : 1.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: false,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Oxiacidul sulfului care are masa molară 82 g/mol se numește acid sulfuric.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: false,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Într-un mol de hidroxid de magneziu se găsesc 32 g oxigen.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: true,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li><li class=\"row md-yesno-false-true\"><div class=\"col-xs-12 col-sm-6 col-md-9\">Fluorul formează un ion negativ monovalent al cărui simbol este F<sup>–</sup>.</div><div class=\"col-xs-12 col-sm-6 col-md-3\">");
jade_mixins["yesno"]({answer: true,
                  name: '108-109-' + subex + e++,
                    yes: 'A',
                    no: 'F'
                });
buf.push("</div></li>");
jade_mixins["space1"]();
buf.push("</ul>");
}
});
}
}, {name: 'p109-ex1'});
buf.push("</div>");
}
}, 'no-title', '','');
}
}, {id: 'p109-interactiv'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans\"><li><strong>Alege cuvântul potrivit dintre paranteze, astfel încât enunțurile de mai jos să fie adevărate:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>Separarea naftalinei dintr-un amestec cu praf de cretă se face prin ... . (<i>decantare/ sublimare</i>)</li><li>Sarea se poate separa din saramură prin ... . (<i>filtrare/cristalizare</i>)</li><li>Izotopul de carbon<span class=\"sup-sub\"><sup> 14</sup><sub class=\"text-indent\">6</sub>C</span> are în nucleu ... neutroni (8/6) și ... nucleoni. (6/14)</li><li>Raportul atomic 1 : 2 : 2 corespunde ... . (<i>sulfatului de calciu/hidroxidului de magneziu</i>)</li><li>Ionul de calciu Ca<sup>2+</sup>este izoelectronic cu gazul rar ... . (<i>neon/argon</i>)</li></ul></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans n2\"><li><strong>Stabilește succesiunea de operații fizice și ustensilele necesare pentru a separa componentele din următoarele amestecuri:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>pilitură de fier + sare + pulbere de sulf;</li><li>nisip + apă + alcool;</li><li>ulei + apă + mercur.</li></ul></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["space1"]();
buf.push("<ul class=\"romans n3\"><li><strong>Se dau elementele X, Y, Z, T, W situate în Tabelul periodic al elementelor după cum se observă în figura de mai jos.</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>Indică grupa și perioada în care se găsește fiecare dintre elementele X, Y, Z, T și W.</li><li>Reprezintă configurația electronică și procesele de ionizare pentru atomii elementelor X, Y, Z, T și W.</li><li>Modelează formarea compusului ionic obținut din elementele Y și W.</li><li>Modelează formarea compusului molecular al elementului W cu hidrogenul (Z = 1).</li><li>Calculează numărul electronilor de valență care se găsesc în 4 g Y.</li></ul></div></li></ul>");
jade_mixins["img3"]('img/chimie7/p109-iii.png', '');
buf.push("</div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans n4\"><li><strong>Pentru elementul chimic Z de la exercițiul III, se cere:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>identifică elementul;</li><li>scrie formulele următorilor compuși ai elementului Z:<div class=\"row\"> <div class=\"col-sm-4 col-xs-6\"> <ul class=\"letters\"><li>oxid;</li><li>azotit;</li></ul></div><div class=\"col-sm-4 col-xs-6\"><ul class=\"letters n3\"><li>fosfat;</li><li>sulfat;</li></ul></div><div class=\"col-xs-3\"></div><div class=\"col-sm-4 col-xs-6\"><ul class=\"letters n5\"><li>clorură;</li><li>sulfură.</li></ul></div></div></li></ul></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["space1"]();
buf.push("<ul class=\"romans n5\"><li><strong>Analizează cu atenție desenul de mai jos și completează, în caiet, spațiile punctate de mai jos:</strong><div class=\"ml-1\"><table><tr><td><i>m<sub>s</sub></i> final = ...</td><td>numărul de moli de solvat = ...</td></tr><tr><td><i>m<sub>d</sub></i> final = ...</td><td>numărul de atomi de oxigen = ...</td></tr><tr><td><i>c</i><i>%</i> final = ...</td><td></td></tr></table></div></li></ul>");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p109-v.png', '');
buf.push("</div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-5'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans n6\"><li><strong>Un chimist analizează o probă de alumină, Al<sub>2</sub>O<sub>3</sub>, care cântărește 400 g. O primă determinare îi indică puritatea probei de 85%. Ajută-l să determine:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>masa de oxid de aluminiu pur din probă;</li><li>numărul de moli de aluminiu care se pot obține, teoretic, din proba analizată;</li><li>numărul atomilor de oxigen din probă (impuritățile nu conțin aluminiu sau oxigen).</li></ul></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-6'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans n7\"><li><strong>Într-un pahar Berzelius se găsesc 6 g de pilitură de cupru, 5,85 g de clorură de sodiu, 1,6 g de sodă caustică și 80 g de apă. Se cere:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>stabilește tipul amestecului din pahar;</li><li>calculează compoziția procentuală a amestecului;</li><li>află compoziția procentuală a soluției din paharul Berzelius.</li></ul></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-7'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"romans n8\"><li><strong>Se știe că ionii metalici aflați în soluție colorează diferit flacăra unui bec de gaz. Se analizează prezența ionilor de cupru în soluția de clorură cuprică, folosind testul flăcării (vezi imaginea de mai jos). Pentru substanța dizolvată în soluție, determinați:</strong><div class=\"ml-1\"><ul class=\"numbers\"><li>raportul de masă;</li><li>raportul atomic;</li><li>compoziția procentuală;</li><li>masa de clor care se găsește în 10 g de compus dizolvat în soluție;</li><li>masa de compus care conține 6,4 g de metal.</li></ul></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row d-flex justify-center\"><div class=\"col-xs-12 col-md-8\">");
jade_mixins["img3"]('img/chimie7/p109-viii.jpg', '');
buf.push("</div></div></li></ul></div>");
}
}, 'evaluare no-title pb0', '','');
}
}, {id: 'p109-recapitulare-ex-8'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p109");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p109-recapitulare-video'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});