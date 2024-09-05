registerChapter({ chapter: "u1-30-31", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Apa în natură");
jade_mixins["subtitle"]("Paginile 30 - 31");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p30-at-msd-chim7-materie',
          top: 6.7438,
          left: 0.1818,
          width: 24.7273,
          height: 42.108,
          type: 'text'
        },
        {
          atom: 'p30-at-msd-chim7-retine',
          top: 7.1722,
          left: 26.1212,
          width: 69.697,
          height: 11.6881
        },
        {
          atom: 'p30-at-msd-chim7-inveti',
          top: 19.1688,
          left: 26,
          width: 70.4242,
          height: 19.6572
        },
        {
          atom: 'p30-at-msd-chim7-retine-2',
          top: 73.4105,
          left: 26,
          width: 70.6667,
          height: 7.2322
        },
        {
          atom: 'p30-at-msd-chim7-aplica',
          top: 80.6941,
          left: 26,
          width: 71.1515,
          height: 17.6864
        },
        {
          atom: 'p30-at-msd-chim7-inveti3',
          top: 39.1345,
          left: 25.5152,
          width: 71.0303,
          height: 33.8817
        },
        {
          atom: 'p30-at-msd-chim7-stiai-1',
          top: 49.0746,
          left: 0.0606,
          width: 24.9697,
          height: 22.3136,
          type: 'audio'
        }
      ],
      image: 'p030.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p31-at-msd-chim7-stii',
          top: 6.4867,
          left: 4.9091,
          width: 69.3333,
          height: 15.8012,
          type: 'text'
        },
        {
          atom: 'p31-at-msd-chim7-inveti-1',
          top: 22.425,
          left: 4.7879,
          width: 69.9394,
          height: 54.2759
        },
        {
          atom: 'p31-at-msd-chim7-retine',
          top: 79.7515,
          left: 4.4242,
          width: 69.4545,
          height: 7.832
        },
        {
          atom: 'p31-at-msd-chim7-inveti-2',
          top: 87.9777,
          left: 3.9394,
          width: 69.8182,
          height: 10.4027
        },
        {
          atom: 'p31-at-msd-chim7-materie',
          top: 6.8295,
          left: 74.8485,
          width: 24.6061,
          height: 67.8149
        },
        {
          atom: 'p31-at-msd-chim7-retine-2',
          top: 76.838,
          left: 3.9394,
          width: 69.697,
          height: 2.4336,
          type: 'audio'
        }
      ],
      image: 'p031.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Apa în natură', '30', 'blue', 'left', 'small');
}
}, {id: 'p30-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Apa este supusă permanent unui proces de evaporare la suprafața mărilor, oceanelor, lacurilor, râurilor, dar și la suprafața pământului, astfel încât, în natură, apa își schimbă starea de agregare, fiind succesiv în stare solidă, lichidă sau gazoasă.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p30-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-subtitle\">A . &nbsp;Apa potabilă</div>");
}
}, {id: 'p30-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Apa potabilă </strong>este apa de băut sau folosită la prepararea alimentelor. Apa pentru uz casnic este luată, de obicei, din resurse de apă dulce care pot fi lacuri, râuri sau ape subterane. Pentru a putea fi folosită ca apă potabilă, aceasta trebuie să treacă prin una sau mai multe instalații, în care sunt parcurse mai multe etape de purificare. Scopul acestei purificări este obținerea unei ape limpezi, fără culoare, fără miros, care să conțină aer dizolvat și cantități mici de săruri, să aibă 8‑12 °C și să nu conțină bacterii sau substanțe dăunătoare organismului.</div><div class=\"text-indent1-5\">O varietate de apă folosită, de asemenea, în alimentație este <em>apa minerală, </em>care poate proveni dintr-o sursă naturală – izvor – sau poate fi obținută prin forare artificială; prin compoziția ei chimică, apa minerală poate avea efecte terapeutice.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p30-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p30-coloana-1.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă potabilă provenită din rețeaua publică</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p30-coloana-2.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă potabilă îmbuteliată</div></div></div><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p30-coloana-4.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă potabilă provenită din fântâni de mică adâncime</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p30-coloana-3.jpg', '');
buf.push("<div class=\"fs08 text-right\">Apă potabilă pompată din fântâni de mare adâncime</div></div></div></div>");
}
}, 'materie', 'Surse de procurare a apei potabile','');
}
}, {id: 'p30-at-msd-chim7-materie'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p30-stiai-ca.jpg");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "st_pg30");
}
}, 'no-title', '','');
}
}, {id: 'p30-at-msd-chim7-stiai-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-subtitle msd-orange\">Să observăm (3)</div><div class=\"block-content\"><ul class=\"arrows\"><li>Alege, împreună cu colega/colegul de bancă, o marcă de apă minerală carbogazoasă și una de apă plată. Pornind de la informațiile cuprinse pe etichete, realizați un studiu comparativ, completând în caiet un tabel similar celui de mai jos. Comparați datele obținute cu Standardul Național (STAS) privind apa potabilă, din ultima coloană.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table orange-table\"><thead class=\"text-center\"><tr><td>Indicatori chimici</td><td>Apă carbogazoasă marca …</td><td>Apă plată marca …</td><td>Apă potabilă STAS 1342/91</td></tr></thead><tbody><tr><td><em>p</em>H</td><td></td><td></td><td class=\"text-center\">6,5-8,4</td></tr><tr><td>azotați, mg/L</td><td></td><td></td><td class=\"text-center\">45</td></tr><tr><td>azotiți, mg/L</td><td></td><td></td><td class=\"text-center\">0-0,3</td></tr><tr><td>cloruri, mg/L</td><td></td><td></td><td class=\"text-center\">250-400</td></tr><tr><td>sulfați, mg/L</td><td></td><td></td><td class=\"text-center\">200-400</td></tr><tr><td>magneziu,mg/L</td><td></td><td></td><td class=\"text-center\">50-80</td></tr><tr><td>calciu, mg/L</td><td></td><td></td><td class=\"text-center\">100-180</td></tr><tr><td>potasiu, mg/L</td><td></td><td></td><td class=\"text-center\">-</td></tr><tr><td>sodiu, mg/L</td><td></td><td></td><td class=\"text-center\">-</td></tr></tbody></table></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p30-at-msd-chim7-inveti3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Apa potabilă nu este o substanță pură. Este un amestec omogen de mai multe substanțe.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p30-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"><li>Pornind de la datele cuprinse în tabelul de mai sus, coloana corespunzătoare normelor STAS pentru apa potabilă, calculează masa de calciu, exprimată în grame, pe care o introduci în corp într-o săptămână, dacă bei 8 pahare de apă de 250 mL pe zi. Pentru calcul, se va lua media valorilor indicate în tabel.</li><li>Documentează-te, inclusiv pe internet, și identifică sursele de apă potabilă din localitatea în care locuiești. Compară datele obținute de tine cu cele ale colegilor tăi. Adaugă rezultatul investigației tale la <strong><em>portofoliul personal.</em></strong></li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p30-at-msd-chim7-aplica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Apa în natură', '31', 'blue', 'right', 'small');
}
}, {id: 'p31-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-subtitle\">B . &nbsp; Apa\tdistilată.\tRolul\tapei\tîn\torganismul\tuman</div>");
}
}, {id: 'p31-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Din amestecuri se pot separa componentele în stare pură, folosind diverse metode bazate pe faptul că substanțele au proprietăți fizice diferite.</li><li>Apa potabilă este un amestec omogen.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p31-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm</div><strong>Activitate în echipă</strong><ul class=\"numbers\"><li>Desenează pe caiet instalația de mai jos. Identifică, împreună cu colega/colegul de bancă, ustensilele care alcătuiesc această instalație.");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p31-inveti.jpg");
buf.push("</li>");
jade_mixins["space1"]();
buf.push("<li>Denumiți și definiți metoda de separare a componentelor din amestecuri folosită în instalația de mai sus.</li>");
jade_mixins["space1"]();
buf.push("<li>Realizați în laborator instalația și folosiți-o, sub supravegherea profesorului, pentru separarea componentei lichide din apa potabilă.</li>");
jade_mixins["space1"]();
buf.push("<li>Indicați substanța lichidă pe care ați obținut-o din apa potabilă.</li>");
jade_mixins["space1"]();
buf.push("</ul><strong>Interpretarea rezultatelor</strong><ul class=\"disc\"><li>În figura dată este prezentată o instalație de distilare.</li><li>Apa potabilă este un amestec omogen de mai multe substanțe, care se pot separa prin distilare.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzii</strong><ul class=\"disc\"><li>Prin distilarea apei potabile se obține apă pură/apă distilată.</li><li>Experimentul de mai sus evidențiază modul în care poate fi utilizată distilarea ca metodă de separare.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p31-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Pe Pământ, apa există în multe forme, în cele mai variate locuri. Cu toate acestea, <em>apa pură </em>sau <em>apa distilată </em>nu există în natură.</li><li>Apa distilată nu conține săruri minerale și nu are gust. Aceasta se poate obține prin distilarea apei potabile.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p31-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p31-retine.jpg");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "st_pg31");
}
}, 'no-title', '','');
}
}, {id: 'p31-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Apa distilată -</strong>Utilizări:</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Medicină – soluții injectabile, oftalmice, nazale etc.</li><li>Cosmetică – apă micelară, apă de gură, parfumuri etc.</li><li>Industrie auto – acumulatori, antigel</li><li>Uz casnic – umidificator, stații de călcat, instalații termice</li><li>Laborator – preparare de soluții</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p31-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p31-coloana-1.jpg', '');
buf.push("<div class=\"fs08 text-right\">Soluții injectabile</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p31-coloana-2.jpg', '');
buf.push("<div class=\"fs08 text-right\">Produse cosmetice</div></div></div><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p31-coloana-3.jpg', '');
buf.push("<div class=\"fs08 text-right\">Antigel</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p31-coloana-5.jpg', '');
buf.push("<div class=\"fs08 text-right\">Soluții preparate în laborator</div></div></div><div class=\"row\"><div class=\"col-md-12\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p31-coloana-4.jpg', '');
buf.push("<div class=\"fs08 text-right\">Fier de călcat</div></div></div></div>");
}
}, 'materie', 'Utilizări	ale	apei	distilate:','');
}
}, {id: 'p31-at-msd-chim7-materie'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});