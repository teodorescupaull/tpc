registerChapter({ chapter: "u1-40-41", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Aerul");
jade_mixins["subtitle"]("Paginile 40 - 41");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p40-at-msd-chim7-stii',
          top: 7.2579,
          left: 25.8788,
          width: 69.8182,
          height: 12.9734,
          type: 'text'
        },
        {
          atom: 'p40-at-msd-chim7-inveti-1',
          top: 27.5664,
          left: 25.8787,
          width: 23.8788,
          height: 25.6555
        },
        {
          atom: 'p40-at-msd-chim7-inveti-video',
          top: 29.88,
          left: 49.8787,
          width: 20.8485,
          height: 17.0008,
          type: 'video'
        },
        {
          atom: 'p40-at-msd-chim7-materie',
          top: 7.515,
          left: 0.4242,
          width: 24.8485,
          height: 84.353,
          type: 'text'
        },
        {
          atom: 'p40-at-msd-chim7-retine-1',
          top: 53.5304,
          left: 25.3939,
          width: 69.9394,
          height: 10.3171
        },
        {
          atom: 'p40-at-msd-chim7-inveti-2',
          top: 63.8989,
          left: 25.2727,
          width: 70.1818,
          height: 24.0274
        },
        {
          atom: 'p40-at-msd-chim7-retine-2',
          top: 88.3205,
          left: 25.7576,
          width: 69.9394,
          height: 8.0034
        },
        {
          atom: 'p40-at-msd-chim7-inveti-1',
          top: 27.395,
          left: 71.0909,
          width: 24,
          height: 25.7412,
          type: 'text'
        }
      ],
      image: 'p040.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p41-at-msd-chim7-inveti',
          top: 7.0865,
          left: 4.1818,
          width: 70.0606,
          height: 21.371,
          type: 'text'
        },
        {
          atom: 'p41-at-msd-chim7-inveti-2',
          top: 28.6804,
          left: 3.8182,
          width: 70.4242,
          height: 34.7386
        },
        {
          atom: 'p41-at-msd-chim7-retine',
          top: 63.6418,
          left: 3.8182,
          width: 70.5455,
          height: 9.4602
        },
        {
          atom: 'p41-at-msd-chim7-aplica',
          top: 73.4105,
          left: 3.8182,
          width: 70.7879,
          height: 25.1414
        },
        {
          atom: 'p41-at-msd-chim7-mai-mult',
          top: 14.6272,
          left: 74.4848,
          width: 25.0909,
          height: 81.3539
        },
        {
          atom: 'p41-at-msd-chim7-audio',
          top: 6.8295,
          left: 74.9697,
          width: 24.7273,
          height: 7.4893,
          type: 'audio'
        }
      ],
      image: 'p041.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '12', 'Aerul', '40', 'blue', 'left', 'big');
}
}, {id: 'p40-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Fie că ești în sala de sport, în clasă, la mare sau la munte, toată existența ta se petrece având în jur aer! Respiri oxigenul din aer în fiecare moment din viața ta.</li><li>Din cele mai vechi timpuri, omul a folosit procesul de ardere a lemnului în aer pentru producerea de căldură necesară preparării hranei, încălzirii locuinței sau prelucrării unor materiale descoperite în natură, pentru a confecționa arme de vânătoare sau de apărare.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p40-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">Privește cu atenție imaginile <strong>a, b </strong>și <strong>c. </strong>Cum poți verifica prezența aerului în cele trei cazuri?</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p40-inveti-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p40-inveti-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p40-inveti-c.jpg', 'c', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Se poate observa că, în toate cele trei cazuri, aerul produce modificarea poziției corpurilor: tulpinile plantelor se apleacă, elicele instalațiilor eoliene pornesc când se produc mișcări ale aerului, rufele sunt uscate mai repede sub adierea vântului.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p40-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p40");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p40-at-msd-chim7-inveti-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-1.jpg', '');
buf.push("<div class=\"fs08 text-right\">Parapanta</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-2.jpg', '');
buf.push("<div class=\"fs08 text-right\">Zmeul</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-3.jpg', '');
buf.push("<div class=\"fs08 text-right\">Parașuta          </div></div></div><div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-4.jpg', '');
buf.push("<div class=\"fs08 text-right\">Morile de vânt</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-5.jpg', '');
buf.push("<div class=\"fs08 text-right\">Aeroplanul</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p40-coloana-6.jpg', '');
buf.push("<div class=\"fs08 text-right\">Barca cu pânze</div></div></div></div>");
}
}, 'materie', 'Aplicații ale rezistenței aerului','');
}
}, {id: 'p40-at-msd-chim7-materie'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Aerul este un <strong>amestec omogen </strong>de gaze. Acesta este incolor, inodor (nu are miros) și insipid (nu are gust). Aerul uscat nu conduce electricitatea, nici căldura și este puțin solubil în apă. Se lichefiază la –190 °C.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p40-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm (1)</div><div class=\"text-indent1-5\">Lucrează împreună cu colega/colegul de bancă.</div><ul class=\"numbers\"><li>Luați un pahar Erlenmeyer. Întoarceți paharul vertical, cu gura în jos, și introduceți-l într-un vas cu apă.</li><li>Înclinați paharul într-o parte, astfel încât acesta să se umple cu apă. Urmăriți cu atenție ce se întâmplă cu apa. Paharul folosit era cu siguranță gol?</li></ul>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Notați observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><ul class=\"disc\"><li>Apa nu intră în pahar când acesta este întors vertical, cu gura în jos.</li><li>Când paharul este înclinat, se observă bule de aer care ies din el.</li><li>Apa împinge aerul din interiorul paharului, iar acesta se umple.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Paharul nu era gol. Acesta era plin cu aer.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p40-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Aerul, ca orice gaz, nu are volum propriu, nici formă proprie și ocupă întregul spațiu pe care îl are la dispoziție.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p40-at-msd-chim7-retine-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Aerul', '41', 'blue', 'right', 'small');
}
}, {id: 'p41-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Compoziția aerului</div><div class=\"row\"><div class=\"col-md-6\"><div class=\"text-indent1-5\">Aerul este o soluție gazoasă care conține, în procente volumetrice: 78% azot, 21% oxigen, 1% argon, dioxid de carbon, vapori de apă și alte gaze.</div><ul class=\"disc\"><li>Componentele permanente sunt azotul, oxigenul, dioxidul de carbon, argonul.</li><li>Componentele variabile sunt vaporii de apă, pulberile fine de substanțe minerale, bacteriile, polenul.</li></ul></div><div class=\"col-md-6\">");
jade_mixins["img"]('img/chimie7/p41-inveti-experiment-1.jpg');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Accidental (pe zone mai mult sau mai puțin extinse), apar și alte gaze, ca urmare a putrezirii organismelor moarte, emanațiilor vulcanice sau activității umane.</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p41-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm (2)</div><div class=\"row\"><div class=\"col-md-6\"><div class=\"text-indent1-5\">Lucrează împreună cu colega/colegul de bancă.</div><ul class=\"numbers\"><li>Fixați două lumânări mici, de aceeași dimensiune, în mijlocul a două cristalizoare de mică adâncime, apoi puneți puțină apă în cristalizoare.</li><li>Aprindeți lumânările.</li><li>Deasupra fiecărei lumânări puneți câte un pahar Berzelius (de dimensiuni diferite).</li></ul></div><div class=\"col-md-6\">");
jade_mixins["img"]('img/chimie7/p41-inveti-experiment-2.jpg');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Observați cu atenție ce se întâmplă cu lumânările și cu nivelul apei.</li><li>Notați observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><ul class=\"disc\"><li>Lumânarea acoperită cu paharul mai înalt arde mai mult timp.</li><li>Apa începe să urce în pahar și să ocupe spațiul gol.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Arderea se poate produce numai în prezența oxigenului, una dintre componentele aerului. După consumarea oxigenului din pahare, lumânările se sting.</div><div class=\"text-indent1-5\">O mare parte din aer este încă prezentă în pahar, ceea ce indică existența altor componente în aer, care nu întrețin arderea.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p41-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Arderea </strong>este un <strong>fenomen chimic </strong>care are loc cu consum de oxigen și degajare de energie (căldură și lumină) și formare de alte substanțe. Este un proces de transformare rapidă a unor substanțe în altele, cu compoziție și proprietăți diferite.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p41-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["img"]('img/chimie7/p41-daca_vrei.jpg');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"><p>Aerul constituie învelișul gazos al Pământului, numit <strong><em>atmosferă. </em></strong>Acesta acționează ca un strat protector împotriva radiațiilor solare sau cosmice și a expunerii la temperaturi extreme. Grosimea stratului de aer din jurul Pământului este de aproximativ 30 km. Aerul este componenta esențială care protejează viața pe această planetă. În lipsa atmosferei, ar fi posibile variații foarte mari de temperatură.</p></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["img"]('img/chimie7/p41-coloana-1.jpg');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"><p>Mișcările orizontale ale aerului se numesc <strong>vânturi. </strong>Acestea pot fi:<ul class=\"dash black\"><li><em>vânturi permanente </em>– bat tot timpul anului (alizeele și contraalizeele).</li><li><em>vânturi periodice </em>– bat numai în anumite perioade (musonii, brizele).</li><li><em>vânturi neregulate </em>– care bat fără nicio regulă (vijelii, tornade).</li></ul></p></div></div>");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p41-coloana-2.jpg', '');
buf.push("<div class=\"fs09 text-right\">Tornadă</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("</div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p41-at-msd-chim7-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p41-daca-vrei.jpg");
jade_mixins["space1"]();
}
}, "st_pg41");
}
}, 'no-title', '','');
}
}, {id: 'p41-at-msd-chim7-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Determină volumul de oxigen care se găsește într-o cameră cu dimensiunile 5 m x 3 m x 2 m. Aerul conține 21% oxigen, procente volumetrice.</li><li>Indicele european al calității aerului oferă informații cu privire la situația actuală a calității aerului, pe baza măsurătorilor efectuate în peste 2 000 de stații de monitorizare a calității aerului din toată Europa. Acesta oferă recomandări atât pentru populația generală, cât și pentru categoriile sensibile, cum ar fi adulții și copiii cu probleme respiratorii și persoanele în vârstă cu afecțiuni cardiace.");
jade_mixins["space1"]();
buf.push("<p>Documentează-te și verifică, pentru localitatea ta, calitatea globală a aerului și măsurătorile pentru fiecare poluant important.</p>");
jade_mixins["space1"]();
buf.push("</li><li>Pornind de la compoziția aerului prezentată mai sus, stabilește solventul și cel putin 3 substanțe dizolvate care se găsesc în acest amestec.</li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p41-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});