registerChapter({ chapter: "u3-92-93", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("<em>p</em>H-ul soluțiilor");
jade_mixins["subtitle"]("Paginile 92 - 93");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p92-at-msd-chim7-stii',
          top: 8.629,
          left: 26.6061,
          width: 67.2727,
          height: 10.2314,
          type: 'text'
        },
        {
          atom: 'p92-at-msd-chim7-inveti',
          top: 19.4259,
          left: 26.6061,
          width: 67.3939,
          height: 60.3599,
          type: 'text'
        },
        {
          atom: 'p92-at-msd-chim7-ph',
          top: 8.3719,
          left: 3.9394,
          width: 20.9697,
          height: 47.5921,
          type: 'text'
        },
        {
          atom: 'p92-at-msd-chim7-retine',
          top: 80.3513,
          left: 26.6061,
          width: 67.5152,
          height: 15.1157,
          type: 'text'
        }
      ],
      image: 'p092.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p93-at-msd-chim7-inveti-1',
          top: 8.2862,
          left: 6.4848,
          width: 66.5455,
          height: 11.5167,
          type: 'text'
        },
        {
          atom: 'p93-at-msd-chim7-inveti-2-video',
          top: 20.1114,
          left: 6.4848,
          width: 66.5455,
          height: 3.5475,
          type: 'video'
        },
        {
          atom: 'p93-at-msd-chim7-vrei-audio',
          top: 8.5433,
          left: 74.7273,
          width: 21.4545,
          height: 4.9186,
          type: 'audio'
        },
        {
          atom: 'p93-at-msd-chim7-aplica',
          top: 65.2699,
          left: 6.6061,
          width: 66.6667,
          height: 30.9683,
          type: 'text'
        },
        {
          atom: 'p93-at-msd-chim7-inveti-2',
          top: 23.7961,
          left: 6.7273,
          width: 66.5455,
          height: 40.3942,
          type: 'text'
        },
        {
          atom: 'p93-at-msd-chim7-vrei',
          top: 14.2845,
          left: 74.6061,
          width: 21.4545,
          height: 43.5647,
          type: 'text'
        }
      ],
      image: 'p093.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '11', '<strong><em>p</em></strong>H-ul soluțiilor', '92', 'blue', 'left', 'big');
}
}, {id: 'p92-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Acizii sunt substanțe compuse care conțin unul sau mai mulți atomi de hidrogen și un nemetal sau radical acid (de exemplu: HCl, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>).</li><li>Bazele sunt substanțe compuse care conțin un atom de metal și una sau mai multe grupe hidroxid (de exemplu: NaOH, Ca(OH)<sub>2</sub>).</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p92-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><p> <strong>Activitate în echipă</strong> –<em> lucrează împreună cu colega/colegul de bancă</em>.</p><div class=\"text-indent1-5\">În figurile de mai jos (<strong>a</strong>-<strong>f</strong>) sunt prezentate produse pe care și voi le utilizați frecvent: lapte de corp (<strong>a</strong>), cremă hidratantă (<strong>b</strong>), săpun lichid (<strong>c</strong>), loțiune hidratantă (<strong>d</strong>), apă carbogazoasă (<strong>e</strong>), apă plată (<strong>f</strong>). V-ați întrebat vreodată ce semnificație are informația despre<em> p</em>H prezentă pe fiecare etichetă? Copiați tabelul de mai jos în caiete și notați valoarea pH-ului găsit pe fiecare etichetă.</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_a.jpg','a', 'gray');
buf.push("</div><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_b.jpg','b', 'gray');
buf.push("</div><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_c.jpg','c', 'gray');
buf.push("</div><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_d.jpg','d', 'gray');
buf.push("</div><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_e.jpg','e', 'gray');
buf.push("</div><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p92_sa-observam_f.jpg','f', 'gray');
buf.push("</div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-md-1\"></div><div class=\"col-xs-12 col-md-10\"> <table class=\"msd-table orange-table vertical-borders\"><thead class=\"text-center\"><tr><td>Produsul</td><td>Valoarea <em> p</em>H‑ului</td></tr></thead><tr><td>lapte de corp</td><td></td></tr><tr><td>cremă hidratantă</td><td></td></tr><tr><td>săpun lichid</td><td></td></tr><tr><td>loțiune hidratantă</td><td></td></tr><tr><td>apă minerală carbogazoasă</td><td></td></tr><tr><td>apă plată cu oligominerale</td><td></td></tr></table></div></div><div class=\"block-h3\">Interpretarea rezultatelor</div><ul class=\"disc\"> <li>Pe etichetele produselor din imaginile<strong> a</strong>-<strong>f</strong> sunt trecute valori de<em> p</em>H diferite.</li><li>Lapte de corp<em> p</em>H = 5,5; cremă hidratantă<em> p</em>H = 5; săpun lichid<em> p</em>H = 5,5; loțiune hidratantă<em> p</em>H = 5; apă minerală carbogazoasă<em> p</em>H = 5,68; apă plată oligominerală<em> p</em>H = 7,8.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p92-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"red-li-vrei\"><div class=\"block-subtitle msd-red\">Importanța determinării<strong><em> p</em></strong>H-ului unor soluții</div><ul class=\"disc\"><li>În medicină, determinarea<em> p</em>H-ului unor soluții este folosită pentru diagnosticarea unor disfuncționalități ale organismului. Valorile<em> p</em>H-ului pentru soluțiile biologice din corpul uman sănătos au o valoare exactă, dar care suferă modificări în cazul unor maladii.");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-3\"> </div><div class=\"col-xs-8 element-xs-center col-md-6\"><table class=\"msd-table red-table vertical-borders\"><thead class=\"text-center\"><tr><td>soluția</td><td> <em>p</em>H‑ul</td></tr></thead><tr><td>suc gastric</td><td>1,5</td></tr><tr><td>urină</td><td>6,2</td></tr><tr> <td>sânge</td><td>7,3-7,5</td></tr><tr><td>bilă</td><td>8,0-8,1</td></tr></table></div></div></li><li>În agricultură, determinarea<em> p</em>H-ului din sol este folosită pentru stabilirea tipului de cultură care poate fi compatibilă cu un anumit tip de sol. De exemplu, vița-de-vie se dezvoltă optim într-un sol cu<em> p</em>H apropiat de valoarea 6; sfecla de zahăr se cultivă, cu rezultate foarte bune, într-un sol cu<em> p</em>H slab bazic (<em>p</em>H 8-9).</li></ul></div></div>");
}
}, 'vrei no-title', '','');
}
}, {id: 'p92-at-msd-chim7-ph'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li> <em>p</em>H-ul măsoară caracterul acid, bazic sau neutru al unei soluții.</li><li>Pentru măsurarea<em> p</em>H-ului se folosește scala de<em> p</em>H care are 14 diviziuni. Valorile de<strong> <em> p</em>H < 7</strong> indică un<strong> mediu acid,<em> p</em>H = 7</strong> indică<strong> mediu neutru</strong>, iar valorile de<strong> <em> p</em>H > 7</strong> indică<strong> mediu bazic</strong>.</li><li>Pentru determinarea valorii<em> p</em>H-ului se folosește proprietatea unor substanțe de a-și modifica culoarea în mediu acid, bazic sau neutru. Aceste substanțe se numesc<strong> indicatori acido-bazici</strong>.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p92-at-msd-chim7-retine'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', '<em>p</em>H-ul soluțiilor', '93', 'blue', 'right', 'small');
}
}, {id: 'p93-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">În tabelul de mai jos, sunt prezentați cei mai utilizați indicatori acido-bazici.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-12\"> <table class=\"msd-table orange-table vertical-borders\"><thead class=\"text-center\"><tr><td>Indicatorul</td><td>Mediu acid</td><td>Mediu bazic</td><td>Mediu neutru</td></tr></thead><tr><td>Metiloranj</td><td class=\"text-center\">roșu</td><td class=\"text-center\">galben</td><td class=\"text-center\">portocaliu</td></tr><tr> <td>Fenolftaleină (incoloră)</td><td class=\"text-center\">incoloră</td><td class=\"text-center\">roșu-carmin </td><td class=\"text-center\">incoloră</td></tr><tr><td>Turnesol (violet)</td><td class=\"text-center\">roșu</td><td class=\"text-center\">albastru</td><td class=\"text-center\">violet</td></tr></table></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p93-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">În laborator, indicatorii sunt disponibili sub formă de soluție (fig.<strong> a</strong>) sau sub formă de benzi de hârtie impregnate cu diferite soluții de indicatori, cunoscute sub numele de<strong> hârtie de<em> p</em>H</strong>. Hârtia de<em> p</em>H se colorează diferit, în funcție de<em> p</em>H-ul soluției analizate (fig.<strong> b</strong>). Prin compararea culorii, pe care hârtia de<em> p</em>H o dobândește la introducerea într-o soluție, cu scala martor, existentă pe cutia în care se găsește hârtia de<em> p</em>H, se poate determina valoarea<em> p</em>H-ului soluției analizate.</div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"><div class=\"col-xs-4 element-xs-center col-md-2\">");
jade_mixins["img2"]('img/chimie7/p93_sa-observam_a.jpg','a','gray');
buf.push("</div><div class=\"col-xs-12 col-md-10\">");
jade_mixins["img2"]('img/chimie7/p93_sa-observam_b.jpg','b','gray');
buf.push("</div></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"row\"> <div class=\"col-xs-12 col-md-6\"> <div class=\"text-indent1-5\">În practică, pentru determinări mai exacte,<em> p</em>H-ul se măsoară cu un aparat numit<strong><em> p</em>H-metru</strong>. Astfel a putut fi determinat<em> p</em>H-ul multor substanțe utilizate în viața de zi cu zi.</div></div><div class=\"col-xs-10 element-xs-center col-md-6\"> ");
jade_mixins["img4"]('img/chimie7/p93_sa-observam_ph-metru.jpg','<em>p</em>H-metru','', '');
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p93-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["video"]('p93');
buf.push("</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p93-at-msd-chim7-inveti-2-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"> <div class=\"col-xs-12 col-md-6\"><p>Hortensia este o plantă apreciată pentru florile mari și viu colorate.</p><p>În condiții naturale, are forma unui arbust stufos care face flori roz, albe, roșii, albastre, în funcție de aciditatea solului. De exemplu, într-un sol cu un<em> p</em>H în jur de 4 – 4,5, hortensia va avea flori albastre, iar într-un sol cu<em> p</em>H între 5 și 5,6 florile vor avea culoarea roz spre roșie. Cu cât<em> p</em>H-ul solului este mai apropiat de 6, cu atât culoarea roșie se va intensifica.</p>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-10 element-xs-center col-md-6\">");
jade_mixins["img4"]('img/chimie7/p93_coloana.jpg', 'Hortensii <br> (<em>Hydrangea paniculata</em>)', '', '');
buf.push("</div></div></div>");
}
}, 'stiai mb0', 'Dacă vrei să știi mai mult…','');
}
}, {id: 'p93-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p93-stiai-ca.jpg');
}
}, 'p93');
buf.push("</div>");
}
}, 'stiai no-title', 'Dacă vrei să știi mai mult…','');
}
}, {id: 'p93-at-msd-chim7-vrei-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"> <strong>Activitate în echipă</strong> – lucrează împreună cu colega/colegul de bancă.</div><ul class=\"disc\"> <li>La mesele de lucru, în eprubetele E<sub>1</sub>, E<sub>2</sub>, E<sub>3</sub>, E<sub>4</sub> se găsesc: soluție de săpun lichid, apă tonică, suc de lămâie și apă fără a se cunoaște cu precizie conținutul fiecărei eprubete.</li><li>Puneți cantități mici din conținutul fiecărei eprubete pe câte o sticlă de ceas. Stabiliți<em> p</em>H-ul soluției din fiecare eprubetă, folosind hârtia de<em> p</em>H. Comparați culoarea obținută pentru fiecare soluție cu cea prezentată pe hârtia martor.</li><li>Verificați rezultatele obținute folosind<em> p</em>H-metrul.</li><li>Copiați în caiete tabelul de mai jos și notați rezultatele obținute.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table purple-table vertical-borders\"><thead class=\"text-center\"><tr><td>pH</td><td>Eprubeta E<sub>1 </sub></td><td>Eprubeta E<sub>2</sub></td><td>Eprubeta E<sub>3</sub></td><td>Eprubeta E<sub>4</sub></td></tr></thead><tr><td>Hârtie de <em> p</em>H</td><td> </td><td> </td><td></td><td></td></tr><tr> <td> <em>p</em>H-metru</td><td> </td><td> </td><td></td><td></td></tr></table></div>");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
buf.push("<div class=\"block-h3\">Concluzie</div><div class=\"text-indent1-5\">Culoarea hârtiei de<em> p</em>H diferă în funcție de<em> p</em>H-ul soluțiilor analizate. Soluțiile de apă tonică și suc de lămâie au caracter acid (<em>p</em>H < 7), apa are caracter neutru (<em>p</em>H = 7), iar soluția de săpun lichid are caracter bazic (<em>p</em>H > 7).</div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p93-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});