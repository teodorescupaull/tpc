registerChapter({ chapter: "u1-10-11", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Aparatură și ustensile utilizate în laboratorul de chimie");
jade_mixins["subtitle"]("Paginile 10 - 11");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p10-at-msd-chim7-stii',
          top: 10,
          left: 26,
          width: 70,
          height: 13
        },
        {
          atom: 'p10-at-msd-chim7-imagini',
          top: 8,
          left: 0,
          width: 25,
          height: 70
        },
        {
          atom: 'p-10-at-msd-chim-7-inveti',
          top: 24,
          left: 26,
          width: 70,
          height: 40
        },
        {
          atom: 'p10-at-msd-chim7-aplica',
          top: 65,
          left: 26,
          width: 70,
          height: 32
        }
      ],
      image: 'p010.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p11-at-msd-chim7-ustensile-sticla-img',
          top: 8.7147,
          left: 6.6061,
          width: 91.8788,
          height: 39.5373,
          type: 'text'
        },
        {
          atom: 'p11-at-msd-chim7-ustensile-portelan-img',
          top: 48.0463,
          left: 6.7273,
          width: 92,
          height: 15.7155
        },
        {
          atom: 'p11-at-msd-chim7-ustensile-altele-img',
          top: 63.2991,
          left: 6.6061,
          width: 92.3636,
          height: 19.6572
        },
        {
          atom: 'p11-at-msd-chim7-ustensile-laborator-img',
          top: 83.0934,
          left: 6.1212,
          width: 92.7273,
          height: 16.3153,
          type: 'text'
        }
      ],
      image: 'p011.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '1', 'Aparatură și ustensile utilizate în laboratorul de chimie', '10', 'blue', 'left', 'big');
}
}, {id: 'p10-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Științele naturii (fizica, chimia, biologia) își propun cunoașterea și înțelegerea lumii prin observație, investigație și experiment.</li><li>Prin experimente de laborator, ne consolidăm cunoștințele și descoperim noi noțiuni. Acestea reprezintă o activitate incitantă, care dezvoltă interesul pentru știință.</li><li>Experimentele din cadrul orelor de științe se realizează în laboratoare dotate cu instrumente și aparate speciale.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p10-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-sm-6 pb2\">");
jade_mixins["img3"]('img/chimie7/p10-coloana-1.jpg', 'Laborator de chimie, cu câteva decenii în urmă');
buf.push("</div><div class=\"col-sm-6 pb2\">");
jade_mixins["img3"]('img/chimie7/p10-coloana-2.jpg', 'Laborator de chimie, astăzi');
buf.push("</div></div><div class=\"row\"><div class=\"col-sm-6 pb2\">");
jade_mixins["img3"]('img/chimie7/p10-coloana-3.jpg', 'Laborator într-o centrală nucleară');
buf.push("</div><div class=\"col-sm-6 pb2\">");
jade_mixins["img3"]('img/chimie7/p10-coloana-4.jpg', 'Laborator pentru analiza medicamentelor');
buf.push("</div></div>");
}
}, {id: 'p10-at-msd-chim7-imagini'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Lecțiile de chimie se desfășoară în laboratorul de chimie, un spațiu special amenajat și dotat pentru a studia însușirile, transformările și utilizările diferitelor substanțe. Laboratorul de chimie dispune de mobilier adecvat, cu mese speciale, etajere pentru sticluțele cu substanțe, dulapuri securizate, surse de apă, instalații de încălzire. Scopul acestor dotări este ca toate materialele necesare efectuării experimentelor să fie la îndemână, în condiții de siguranță.</div><div class=\"text-indent1-5\">Principalele materiale folosite în laboratorul de chimie sunt:</div><ul class=\"disc\"><li><strong>Substanțele chimice </strong>studiate și folosite pe parcursul orelor de chimie. Cu ajutorul acestora vei putea realiza numeroase experimente spectaculoase, prin care vei descoperi lucruri nebănuite. Vei pătrunde în lumea misterioasă a chimiei și vei observa că unele metale se aprind în contact cu apa sau că anumite substanțe puse la un loc își pot schimba culoarea sau textura. Substanțele folosite în realizarea de experimente în laborator se numesc<strong> reactivi.</strong></li><li><strong>Ustensilele și aparatura de laborator </strong>(vezi pag. 11) sunt obiecte folosite în timpul efectuării experimentelor chimice. Sunt confecționate, în principal, din sticlă. Un număr redus de vase de laborator sunt confecționate din porțelan sau alte materiale, rezistente la temperaturi mari, pentru a nu exista pericolul ca în timpul unui experiment să se spargă și să producă accidente</li></ul></div><div class=\"block-content\"><div class=\"text-indent1-5\">Fiecare obiect aflat în dotarea unui laborator are o utilizare precisă. De exemplu: <em>pipetele </em>sunt folosite la măsurarea unor volume mici de lichide, iar <em>cilindrul gradat </em>este folosit la măsurarea unor volume mai mari; <em>eprubetele </em>sunt frecvent utilizate pentru realizarea experimentelor cu cantități mici de substanțe – fiind din sticlă, se pot observa foarte ușor rezultatele transformărilor; <em>termometrele</em>, de mai multe tipuri, sunt utilizate pentru determinarea temperaturii (de fierbere, de topire) etc.</div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p-10-at-msd-chim-7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><strong>Activitate în echipă.</strong></div><div class=\"text-indent1-5\">În figura de mai jos sunt reprezentate ustensile de laborator numerotate de la <strong>1 </strong>la <strong>10. </strong>Împreună cu colega/colegul de bancă stabilește denumirea fiecărei ustensile, consultând imaginile din pagina alăturată, și noteaz-o în caiet.</div>");
jade_mixins["img"]('img/chimie7/p10-aplica.jpg');
buf.push("</div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p10-at-msd-chim7-aplica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Aparatură și ustensile utilizate în laboratorul de chimie', '11', 'blue', 'right', 'small');
}
}, {id: 'p11-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-header-secondary"]('Ustensile confectionate din sticlă');
}
}, {id: 'p11-at-msd-chim7-ustensile-sticla'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-1.jpg', 'Eprubete');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-2.jpg', 'Cilindru gradat');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-3.jpg', 'Pâlnie de separare');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-4.jpg', 'Pâlnie de filtrare');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-5.jpg', 'Balon cu fund rotund');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-6.jpg', 'Balon cu fund plat');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-7.jpg', 'Sticlă de ceas');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-8.jpg', 'Refrigerent');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-9.jpg', 'Cristalizor');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-10.jpg', 'Pipete');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-11.jpg', 'Pahar Berzelius');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-12.jpg', 'Pahar Erlenmeyer');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-13.jpg', 'Sticluță pentru reactivi');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-14.jpg', 'Sticluțe picurătoare');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-15.jpg', 'Baghetă de sticlă');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-16.jpg', 'Spirtieră');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-17.jpg', 'Balon Würtz');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-sticla-18.jpg', 'Sticluță cu dop rodat');
buf.push("</div></div>");
}
}, {id: 'p11-at-msd-chim7-ustensile-sticla-img'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-header-secondary"]('Ustensile	confecționate	din	porțelan');
}
}, {id: 'p11-at-msd-chim7-ustensile-portelan'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-portelan-1.jpg', 'Creuzet');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-portelan-2.jpg', 'Capsulă');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-portelan-3.jpg', 'Mojar cu pistil');
buf.push("</div><div class=\"col-xs-6 col-sm-3 h\">");
jade_mixins["img3"]('img/chimie7/p11-portelan-4.jpg', 'Spatulă');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-portelan-5.jpg', 'Pâlnie');
buf.push("</div></div>");
}
}, {id: 'p11-at-msd-chim7-ustensile-portelan-img'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-header-secondary"]('Ustensile	confecționate	din	alte	materiale');
}
}, {id: 'p11-at-msd-chim7-ustensile-altele'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-1.jpg', 'Clește de lemn/metal');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-4.jpg', 'Suport cu clemă');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-6.jpg', 'Pisetă');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-5.jpg', 'Bec de gaz');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-3.jpg', 'Lingură de ars');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-alte_materiale-2.jpg', 'Trepied cu sită metalică cu inserție ceramică');
buf.push("</div></div>");
}
}, {id: 'p11-at-msd-chim7-ustensile-altele-img'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-header-secondary"]('Aparatură	de	laborator');
}
}, {id: 'p11-at-msd-chim7-ustensile-laborator'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-aparatura-1.jpg', 'Balanță electronică');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-aparatura-2.jpg', '<b><em>p</em></b>H-metru');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-aparatura-3.jpg', 'Densimetru');
buf.push("</div><div class=\"col-xs-6 col-sm-3\">");
jade_mixins["img3"]('img/chimie7/p11-aparatura-4.jpg', 'Termometru');
buf.push("</div></div>");
}
}, {id: 'p11-at-msd-chim7-ustensile-laborator-img'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});