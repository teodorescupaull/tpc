registerChapter({ chapter: "u4-104-105", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Determinarea formulei chimice a unei substanțe compuse");
jade_mixins["subtitle"]("Paginile 104 - 105");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p104-stii-deja',
          top: 9.6572,
          left: 27.3333,
          width: 67.2727,
          height: 9.0317
        },
        {
          atom: 'p104-inveti',
          top: 19.3402,
          left: 25.2727,
          width: 69.9394,
          height: 31.5681
        },
        {
          atom: 'p104-retine',
          top: 51.4739,
          left: 27.5758,
          width: 65.3333,
          height: 6.9751
        },
        {
          atom: 'p104-verifica-te-singur',
          top: 7.6007,
          left: 0.0606,
          width: 25.0909,
          height: 77.4979
        },
        {
          atom: 'p104-sa-lucram-p1',
          top: 59.1859,
          left: 25.1515,
          width: 74.7879,
          height: 38.3376
        }
      ],
      image: 'p104.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p105-sa-lucram-p2',
          top: 9.0574,
          left: 7.0909,
          width: 65.3333,
          height: 17.2579
        },
        {
          atom: 'p105-stii-mai-mult',
          top: 7.1722,
          left: 74.7273,
          width: 25.4545,
          height: 38.7661
        },
        {
          atom: 'p105-sa-lucram-p3',
          top: 27.0523,
          left: 6.9697,
          width: 65.4545,
          height: 45.6213
        },
        {
          atom: 'p105-aplica',
          top: 73.2391,
          left: -0.0606,
          width: 100.1212,
          height: 26.7695,
          type: 'text'
        }
      ],
      image: 'p105.jpg'
    }
  ]);
buf.push("</div><!--page 104-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '4', 'Determinarea formulei chimice a unei substanțe compuse', '104', 'blue', 'left', 'big');
}
}, {id: 'p104-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Formula chimică este notația prescurtată ce evidențiază tipul și numărul de atomi care se asociază pentru a forma o substanță.</li><li>La scară macroscopică, formula chimică reprezintă un mol de substanță.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p104-stii-deja'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><p class=\"text-indent1-5\">Studiază împreună cu colega/colegul de bancă tabelele de mai jos. Copiați tabelele în caiete și completați spațiile libere. Care tabel este mai ușor de completat, tabelul albastru, în care se cunosc formulele chimice ale substanțelor, sau tabelul verde, în care se cunosc unele caracteristici ale substanțelor chimice?</p>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-12 col-sm-6\"><table class=\"msd-table vertical-borders blue-table\"><thead><tr><td class=\"text-center\">A</td><td class=\"text-center\">B</td></tr></thead><tbody><tr><td>Cu(OH)<sub>2</sub></td><td><p>Raport masic</p><p>Cu : O : H = ... : ... : ...</p></td></tr><tr><td>CH<sub>4</sub></td><td>M = ....</td></tr><tr><td>H<sub>3</sub>PO<sub>4</sub></td><td><p>Raport atomic</p><p>H : P : O = ... : ... : ....</p></td></tr><tr><td>CO<sub>2</sub></td><td><p>Raport masic</p><p>C : O = .... : ....</p></td></tr></tbody></table></div><div class=\"col-xs-12 col-sm-6\"><table class=\"msd-table vertical-borders green-table\"><thead><tr><td class=\"text-center\">A</td><td class=\"text-center\">B</td></tr></thead><tbody><tr><td>...</td><td><p>Raport masic</p><p> ... : ... : ... = 32 : 16 : 1</p></td></tr><tr><td>...</td><td>M = 16 g/mol</td></tr><tr><td>...</td><td><p>Raport atomic</p><p> ...: ...: ...= 3 : 1 : 4</p></td></tr><tr><td>...</td><td><p>Raport masic</p><p>...: ...= 3 : 8</p></td></tr></tbody></table>");
jade_mixins["space1"]();
buf.push("</div></div></div>");
}
}, 'inveti pb0', 'Înveți lucruri noi','');
}
}, {id: 'p104-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p class=\"text-indent1-5\">Cunoscând formula chimică a unei substanțe se pot determina cu ușurință raportul atomic, raportul de masă sau masa molară.</p></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p104-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><em>Copiază în caiet și încercuiește litera corespunzătoare răspunsului corect.</em>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers\"><li>Seria care cuprinde, în ordine, masele molare ale Fe<sub>2</sub>O<sub>3</sub>, Cu(OH)<sub>2</sub>, HCl este:<ul class=\"letters\"><li>160 g/mol, 98 g/mol, 36,5 g/mol;</li><li>72 g/mol, 57 g/mol, 37,5 g/mol;</li><li>88 g/mol, 82 g/mol, 72 g/mol.</li></ul></li><li>Molecula formată din atomii celui mai răspândit element din Univers și ai elementului cunoscut și sub numele de pucioasă are formula chimică:<ul class=\"letters\"><li>CaH<sub>2</sub>;</li><li> H<sub>2</sub>S;</li><li>NH<sub>3</sub>.</li></ul></li><li>Raportul atomic Zn : P : O = 3 : 2 : 8 corespunde substanței:<ul class=\"letters\"><li>Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>;</li><li>H<sub>3</sub>PO<sub>4</sub>;</li><li>Zn(NO<sub>3</sub>)<sub>2</sub>.</li></ul></li><li>Sulfatul de aluminiu are raportul de masă:<ul class=\"letters\"><li>Al : S: O = 54: 32 : 64;</li><li>Al : S : O = 27 : 32 : 16;</li><li>Al : S : O = 9 : 16 : 32.</li></ul></li><li>Substanța care prezintă compoziția procentuală de masă 40% Ca, 12% C și restul oxigen are formula chimică:<ul class=\"letters\"><li>CaCO<sub>3</sub>;</li><li>CaCO<sub>2</sub>;</li><li>CaC<sub>2</sub>.</li></ul></li><li>Molecula alcătuită dintr-un atom fără niciun neutron și un atom al primului element din grupa halogenilor are raportul atomic:<ul class=\"letters\"><li>H : Br = 1 : 1;</li><li>H : F = 1 : 1;</li><li>H : Cl = 1 : 1.</li></ul></li><p><i>Acordă-ți 1,5 puncte pentru fiecare răspuns corect și un punct din oficiu.</i></p><p><b><i>Total: 10 puncte</i></b></p>");
jade_mixins["space1"]();
buf.push("<div class=\"flip\"><p><i>Răspunsuri:</i></p>1. a; 2. b; 3. a; 4. c; 5. a; 6. b.</div></ul></div>");
}
}, 'verifica', 'Verifică-te singur!','');
}
}, {id: 'p104-verifica-te-singur'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li> Ce se întâmplă dacă formula chimică a unei substanțe este necunoscută și se cunosc numai unele date despre elementele componente? În acest caz, vom descoperi modul de lucru pentru a determina formulele chimice ale substanțelor necunoscute.</li></ul>");
jade_mixins["space1"]();
buf.push("<ul class=\"letters\"><li><strong>Determinarea formulei chimice a unei substanțe cunoscând compoziția procentuală de masă</strong></li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"block-subtitle msd-orange\">Să lucrăm</div><p class=\"text-indent1-5\"><strong>Problemă rezolvată</strong></p><p class=\"text-indent1-5\">Determină formula chimică a substanței cu compoziția procentuală de masă 43,39% Na, 11,32% C și 45,29% O.</p>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\" class=\"cell40\"><strong>1.</strong> Determină numărul de moli din fiecare element prin împărțirea procentului la masa lui atomică relativă. Se obține astfel raportul molar al elementelor din compus</td><td data-label=\"Rezolvare\"><div class=\"text-nowrap\"><em><i>n</i></em><sub>Na</sub> =<div class=\"fraction\"><div class=\"numarator\">43,39</div><div class=\"numitor\">23</div></div>;<em><i> n</i></em><sub>Na</sub> = 1,88mol</div><div><em><i>n</i></em><sub>c</sub> =<div class=\"fraction\"><div class=\"numarator\">11,32</div><div class=\"numitor\">12</div></div>;<em><i> n</i></em><sub>c</sub> = 0,94mol<div class=\"text-nowrap\"><em><i>n</i></em><sub>o</sub> =<div class=\"fraction\"><div class=\"numarator\">45,29</div><div class=\"numitor\">16</div></div>;<em><i> n</i></em><sub>o</sub> = 2,83mol</div><p>Raport molar:</p><p>1,88 mol Na : 0,94 mol C : 2,83 mol O</p></div></td></tr></tbody></table></div>");
}
}, 'no-title inveti', 'Să lucrăm','');
}
}, {id: 'p104-sa-lucram-p1'});
buf.push("<!--page 105-->");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U4', '4', 'Determinarea formulei chimice a unei substanțe compuse', '105', 'blue', 'right', 'small');
}
}, {id: 'p105-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table vertical-borders orange-table\"><tbody><tr class=\"hidden\"><td>hidden</td><td>hidden</td></tr><tr><td class=\"cell40\"><strong>2.</strong> Împarte fiecare termen al raportului la cel mai mic dintre aceștia.</td><td><p>Na &nbsp; → &nbsp; 1,88 : 0,94 = 2</p><p>C &nbsp; &nbsp; →  &nbsp; 0,94 : 0,94 = 1</p><p>O &nbsp; &nbsp; →  &nbsp; 2,83 : 0,94 = 3</p><p>Raport molar:</p><p>2 mol Na : 1 mol C : 3 mol O</p><p>Raport atomic:</p><p>2 · N<sub>A</sub> atomi Na : 1 · N<sub>A</sub> atomi C : 3 · N<sub>A</sub> atomi O</p><p>Raport atomic: Na : C : O = 2 : 1 : 3</p></td></tr><tr><td><strong>3.</strong> Din raportul atomic, stabilește formula chimică a substanței.</td><td>Na<sub>2</sub>CO<sub>3</sub></td></tr></tbody></table></div></div>");
}
}, 'no-title inveti pb0', 'Să lucrăm','');
}
}, {id: 'p105-sa-lucram-p2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-xs-12 col-sm-8\"><p>Soda de rufe este cunoscută și utilizată din Antichitate. În Egiptul antic era folosită la îmbălsămarea mumiilor, iar mai târziu și la fabricarea sticlei.</p><p>Soda este utilizată în:</p><ul class=\"disc\"><li>industria sticlei;</li><li>industria coloranților;</li><li>tăbăcirea pieilor;</li><li>industria producerii detergenților și a dezinfectanților;</li><li>industria metalurgică, pentru îndepărtarea sulfului din minereul de fier;</li><li>industria hârtiei.</li></ul></div><div class=\"col-xs-12 col-sm-4\">");
jade_mixins["img3"]('img/chimie7/p105-daca_vrei-1.jpg', '');
buf.push("</div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p105-stii-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"letters\"><li class=\"hide-item\"></li><li><strong>Determinarea formulei chimice a unei substanțe cunoscând raportul de masă</strong></li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"block-subtitle msd-orange\">Să lucrăm</div><p class=\"text-indent1-5\"><strong>Problemă rezolvată</strong></p><p class=\"text-indent1-5\">Determină formula chimică și denumirea substanței cu raportul de masă <span class=\"text-nowrap\">H : N : O = 1 : 14 : 48.</span></p>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table vertical-borders orange-table\"><thead><tr><td class=\"cell40 text-center\">Etapele de lucru</td><td class=\"text-center\">Rezolvare</td></tr></thead><tbody><tr><td data-label=\"Etapele de lucru\"><strong>1.</strong> Determină numărul de moli din fiecare element, împărțind termenii din raportul de masă la masa atomică relativă corespunzătoare fiecărui element.</td><td data-label=\"Rezolvare\"><div class=\"text-nowrap\"><em><i>n</i><sub>H</sub></em> =<div class=\"fraction\"><div class=\"numarator\">1</div><div class=\"numitor\">1</div></div>= 1 mol</div><div class=\"text-nowrap\"><em><i>n</i><sub>N</sub></em> =<div class=\"fraction\"><div class=\"numarator\">14</div><div class=\"numitor\">14</div></div>= 1 mol</div><div class=\"text-nowrap\"><em><i>n</i><sub>O</sub></em> =<div class=\"fraction\"><div class=\"numarator\">48</div><div class=\"numitor\">16</div></div>= 3 mol</div><p>Raport molar:</p><p>H : N : O = 1 mol H : 1 mol N : 3 mol O</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>2.</strong> Împarte fiecare termen al raportului la cel mai mic dintre aceștia.</td><td data-label=\"Rezolvare\"><p>H → 1: 1=1</p><p>N → 1: 1=1</p><p>O →  3: 1=3</p><p>Raport molar:</p><p>H : N : O = 1 mol H : 1 mol N : 3 mol O</p><p>Raport atomic:</p><p>1 · N<sub>A</sub> atomi H : 1 · N<sub>A</sub> atomi N : 3 · N<sub>A</sub> atomi O</p><p>Raport atomic: H : N : O = 1 : 1 : 3</p></td></tr><tr><td data-label=\"Etapele de lucru\"><strong>3.</strong> Din raportul atomic, stabilește formula chimică a substanței.</td><td data-label=\"rezolvare\" class=\"text-nowrap\">HNO<sub>3</sub> – acid azotic</td></tr></tbody></table></div>");
}
}, 'no-title inveti', 'Să lucrăm','');
}
}, {id: 'p105-sa-lucram-p3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>În decursul secolelor, mai mulți compuși ai plumbului au fost folosiți ca pigmenți pentru obținerea vopselelor utilizate în pictură, pentru înfrumusețarea unor obiecte decorative sau chiar de uz casnic. În prezent, acești compuși sunt mai puțin folosiți, ca urmare a toxicității dovedite a plumbului. Determină formula chimică a compusului de culoare galbenă, care conține 44,9% plumb și restul iod.");
jade_mixins["space1"]();
buf.push("<div class=\"row flex\"><div class=\"col-xs-12 col-sm-6 flex-column\">");
jade_mixins["img3"]('img/chimie7/p105-aplica-1.jpg', '');
buf.push("<p class=\"text-center mt-auto\">Iodură de plumb (galbenă)</p></div><div class=\"col-xs-12 col-sm-6 flex-column\">");
jade_mixins["img3"]('img/chimie7/p105-aplica-2.jpg', '');
buf.push("<p class=\"text-center flex-column mt-auto\">Vase de lut pictate</p></div></div>");
jade_mixins["space1"]();
buf.push("</li><li>Stabilește formula chimică a compusului, folosit ca pigment de culoare albă, care prezintă raportul de masă Pb : S : O = 207 : 32 : 64.</li><li><p>Piatra-vânătă este un cristalohidrat, o sare care conține molecule de apă înglobate în structura sa cristalină. Are formula chimică CuSO<sub>4</sub> · 5H<sub>2</sub>O. Pentru acest compus, determină:</p><ul class=\"letters\"><li>raportul atomic;</li><li>raportul de masă;</li><li>compoziția procentuală masică.</li></ul></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p105-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});