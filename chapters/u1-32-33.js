registerChapter({ chapter: "u1-32-33", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Apa în natură\nSoluții apoase. Solubilitatea substanțelor");
jade_mixins["subtitle"]("Paginile 32 - 33");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p32-at-msd-chim7-stiai',
          top: 7.0009,
          left: 0.7879,
          width: 24.1212,
          height: 65.6727,
          type: 'text'
        },
        {
          atom: 'p32-at-msd-chim7-inveti',
          top: 7.0009,
          left: 25.5152,
          width: 29.697,
          height: 41.9366
        },
        {
          atom: 'p32-at-msd-chim7-aplica',
          top: 49.0746,
          left: 25.6364,
          width: 71.3939,
          height: 48.1063
        },
        {
          atom: 'p32-at-msd-chim7-audio',
          top: 11.1997,
          left: 55.5758,
          width: 37.2121,
          height: 18.0291,
          type: 'audio'
        },
        {
          atom: 'p32-at-msd-chim7-audio-2',
          top: 73.4105,
          left: 4.6667,
          width: 19.6364,
          height: 20.7712,
          type: 'audio'
        }
      ],
      image: 'p032.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p33-at-msd-chim7-stii',
          top: 8.7147,
          left: 6.2424,
          width: 67.5152,
          height: 11.174,
          type: 'text'
        },
        {
          atom: 'p33-at-msd-chim7-inveti',
          top: 20.4542,
          left: 11.9394,
          width: 62.0606,
          height: 48.6204,
          type: 'text'
        },
        {
          atom: 'p33-at-msd-chim7-inveti-video',
          top: 54.473,
          left: 0.4243,
          width: 11.2727,
          height: 7.2322,
          type: 'video'
        },
        {
          atom: 'p33-at-msd-chim7-inveti-2',
          top: 69.5544,
          left: 6,
          width: 67.2728,
          height: 27.3693,
          type: 'text'
        },
        {
          atom: 'p33-at-msd-chim7-mai-mult',
          top: 7.6007,
          left: 74.6061,
          width: 24.7273,
          height: 60.9597,
          type: 'text'
        }
      ],
      image: 'p033.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Apa în natură', '32', 'blue', 'left', 'small');
}
}, {id: 'p32-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><strong>Rolul apei în organismul uman </strong><br/>Apa este deosebit de importantă pentru funcționarea organismului uman. Ea intră în alcătuirea citoplasmei fiecărei celule, a sângelui, a limfei și, în procente diferite, în compoziția fiecărui organ. Aproximativ 70% din greutatea organismului uman este reprezentată de apă. Procentul diferă în funcție de vârstă, sex și stare de sănătate a organismului. Toate procesele biochimice care asigură funcționarea celulelor, a fiecărui organ și, implicit, a întregului organism, se desfășoară între substanțe care sunt dizolvate în apă.");
jade_mixins["img"]("img/chimie7/p32-inveti-rolul_apei.jpg");
buf.push("<div class=\"fs08 text-right\">Consumul apei de băut după un efort îndelungat</div>");
jade_mixins["space1"]();
buf.push("Sângele, limfa – lichide alcătuite în principal din apă – asigură transportul substanțelor nutritive în organism, ca și al celor care trebuie eliminate prin respirație, transpirație, urină, dar au și rol important în menținerea temperaturii constante a corpului. De gradul de hidratare a organismului depinde starea lui de sănătate. Apa se elimină din organism în primul rând prin rinichi. Aceștia filtrează din sânge substanțele nefolositoare sau dăunătoare organismului, pe care acesta le-a adunat din țesuturi și organe. Pentru a le elimina, este nevoie de apă, în care aceste substanțe sunt dizolvate. Apa se mai elimină din organism și prin plămâni, sub formă de vapori și prin piele, sub formă de transpirație. Dar, odată cu eliminarea apei din organism, trebuie să aibă loc și înlocuirea acesteia. Astfel, necesarul zilnic de apă este de 2-2,5 L, mai ridicat vara, dacă se efectuează efort fizic îndelungat ori în stările febrile.</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p32-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p32-1_inveti.jpg");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "st_pg321");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p32-at-msd-chim7-audio'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p32-daca_vrei.jpg', '');
buf.push("<div class=\"fs08 text-right\">Necesarul zilnic de apă</div></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p32-coloana-1.jpg', '');
buf.push("<div class=\"fs08 text-right\">Legume bogate în apă</div></div></div></div><div class=\"row\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p32-coloana-2.jpg', '');
buf.push("</div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p32-coloana-3.jpg', '');
buf.push("<div class=\"fs08 text-right\">Fructe cu conținut ridicat de apă</div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p32-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p32-2-daca-vrei.jpg");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "st_pg322");
}
}, 'vrei no-title', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p32-at-msd-chim7-audio-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><strong>Activitate în echipă</strong><div class=\"text-indent1-5\">Lucrează împreună cu colega/colegul de bancă. Adăugați rezultatul acestei activități în <strong><em>portofoliul personal.</em></strong></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-5\"><ul class=\"numbers\"><li>Alcătuiți meniul cel mai apropiat de ceea ce consumați voi într-o zi, la fiecare masă, folosind alimente din tabelul de mai jos.</li><li>Aproximați, în grame, cantitatea consumată din fiecare aliment.</li><li>Studiați conținutul în apă specificat pentru fiecare aliment.</li><li>Stabiliți cantitatea de apă pe care o procură organismul vostru, într-o zi, din alimentele consumate.</li></ul></div><div class=\"col-md-7\">");
jade_mixins["img"]("img/chimie7/p32-aplica.jpg");
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table purple-table\"><thead class=\"text-center\"><tr><td>aliment</td><td>% apă</td><td>aliment</td><td>% apă</td><td>aliment</td><td>% apă</td></tr></thead><tbody><tr><td>pâine</td><td class=\"text-center\">38%</td><td>pepene-roșu</td><td class=\"text-center\">90%</td><td>plăcintă cu brânză</td><td class=\"text-center\">38%</td></tr><tr><td>biscuiți digestivi</td><td class=\"text-center\">3%</td><td>miere</td><td class=\"text-center\">23%</td><td>brânză proaspătă</td><td class=\"text-center\">58%</td></tr><tr><td>pește (cod)</td><td class=\"text-center\">70%</td><td>castraveți</td><td class=\"text-center\">96%</td><td>salam</td><td class=\"text-center\">28%</td></tr><tr><td>carne de pui fiartă</td><td class=\"text-center\">55%</td><td>lapte</td><td class=\"text-center\">90%</td><td>broccoli</td><td class=\"text-center\">89%</td></tr><tr><td>roșii</td><td class=\"text-center\">93%</td><td>smântână</td><td class=\"text-center\">63%</td><td>curmale</td><td class=\"text-center\">12%</td></tr></tbody></table></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p32-at-msd-chim7-aplica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '10', 'Soluții apoase. Solubilitatea substanțelor', '33', 'blue', 'right', 'big');
}
}, {id: 'p33-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>În natură, substanțele se găsesc, în general, sub formă de amestecuri, omogene sau eterogene.</li><li>Amestecurile omogene, formate din două sau mai multe substanțe, se numesc soluții. Aerul, apa de la robinet, tinctura de iod sau băuturile sunt exemple de soluții.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p33-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">Urmăriți cu atenție imaginile de mai jos, în care este prezentată obținerea unei soluții de piatră-vânătă.</div>");
jade_mixins["img"]("img/chimie7/p33-inveti.jpg",);
buf.push("<div class=\"fs10 text-center\">Soluție de piatră-vânătă</div><div class=\"text-indent1-5\">Soluțiile se formează în urma unui<strong> proces de dizolvare</strong>,  prin care particulele unei substanțe se răspândesc uniform printre particulele altei substanțe.</div>");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p33-componente.jpg",);
buf.push("</div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p33-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p33");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p33-at-msd-chim7-inveti-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">Piatra-vânătă este folosită pentru combaterea unor ciuperci în legumicultură, viticultură, pomicultură. Este dizolvată în apă împreună cu lapte de var și alte substanțe, în cantități mai mici. Se obține un amestec cunoscut sub numele de <strong><em>zeamă bordeleză </em></strong>cu care se stropesc plantele în diferite stadii de vegetație.</div><div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p33-daca_vrei-1.jpg', '');
buf.push("<div class=\"fs09 text-right\">Răsaduri de roșii</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p33-daca_vrei-2.jpg', '');
buf.push("<div class=\"fs09 text-right\">Viță-de-vie</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img3"]('img/chimie7/p33-daca_vrei-3.jpg', '');
buf.push("<div class=\"fs09 text-right\">Pomi fructiferi</div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p33-at-msd-chim7-mai-mult'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows\"><li>Copiază în caiet, apoi completează tabelul de mai jos cu starea de agregare și componentele soluțiilor indicate.</li></ul>");
jade_mixins["space1"]();
buf.push("<table class=\"msd-table orange-table\"><thead class=\"text-center\"><tr><td>Soluția</td><td>Starea de agregare a soluției</td><td>Dizolvant</td><td>Dizolvat</td></tr></thead><tbody><tr><td>Soluție de piatră-vânătă în apă</td><td class=\"text-center\">lichidă</td><td class=\"text-center\">apă</td><td class=\"text-center\">piatră-vânătă</td></tr><tr><td>Saramură</td><td class=\"text-center\">...</td><td class=\"text-center\">...</td><td class=\"text-center\">sare</td></tr><tr><td>Alamă (80% cupru; 20% zinc)</td><td class=\"text-center\">solidă</td><td class=\"text-center\">cupru</td><td class=\"text-center\">...</td></tr><tr><td>Aer</td><td class=\"text-center\">...</td><td class=\"text-center\">azot</td><td class=\"text-center\">...</td></tr></tbody></table><div class=\"text-indent1-5\">Într-o soluție apă-alcool, dizolvantul este substanța aflată în cantitate mai mare.</div>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">În urma celor observate, putem clasifica soluțiile, după starea lor de agregare, în:</div><ul class=\"disc\"><li><strong>soluții gazoase </strong>(aerul);</li><li><strong>soluții lichide </strong>(apa potabilă, băuturile alcoolice, spirtul medicinal);</li><li><strong>soluții solide </strong>(aliajele).</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p33-at-msd-chim7-inveti-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});