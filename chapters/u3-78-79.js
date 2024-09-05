registerChapter({ chapter: "u3-78-79", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Proprietăți fizice ale unor compuși moleculari");
jade_mixins["subtitle"]("Paginile 78 - 79");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p78-at-msd-chim7-stii',
          top: 9.4859,
          left: 26.2424,
          width: 67.1515,
          height: 11.0026,
          type: 'text'
        },
        {
          atom: 'p78-at-msd-chim7-inveti',
          top: 21.2254,
          left: 3.8182,
          width: 90.0606,
          height: 74.8415,
          type: 'text'
        }
      ],
      image: 'p078.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p79-at-msd-chim7-inveti',
          top: 25.6812,
          left: 5.7576,
          width: 67.6364,
          height: 19.5716,
          type: 'text'
        },
        {
          atom: 'p79-at-msd-chim7-retine',
          top: 45.647,
          left: 5.7576,
          width: 67.5152,
          height: 14.5159,
          type: 'text'
        },
        {
          atom: 'p79-at-msd-chim7-vrei',
          top: 25.8526,
          left: 74.3636,
          width: 23.7576,
          height: 55.0471,
          type: 'text'
        },
        {
          atom: 'p79-at-msd-chim7-aplica-audio',
          top: 60.9854,
          left: 5.7576,
          width: 67.6364,
          height: 3.976,
          type: 'audio'
        },
        {
          atom: 'p79-at-msd-chim7-aplica',
          top: 65.2699,
          left: 6.1212,
          width: 67.5152,
          height: 31.3111,
          type: 'text'
        }
      ],
      image: 'p079.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '6', 'Proprietăți fizice ale unor compuși moleculari', '78', 'blue', 'left', 'big');
}
}, {id: 'p78-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Atomii nemetalelor se pot asocia prin punere în comun de electroni, formând edificii structurale numite molecule.</li><li>Imensa majoritate a substanțelor din lumea înconjurătoare este alcătuită din substanțe moleculare.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p78-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să lucrăm</div><p><strong>Activitate în echipă </strong> – formează o echipă împreună cu colega/colegul de bancă.</p><ul class=\"numbers\"> <li>Citiți textul următor.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5 p-bg-orange\">Radu este elev în clasa a VII-a. El pregătește, pentru ora de chimie, un proiect despre proprietățile substanțelor moleculare. S-a informat din diverse surse și a selectat mai multe enunțuri și imagini referitoare la tema proiectului.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Iată care sunt enunțurile și imaginile (fig. <strong> a</strong>-<strong>l</strong>) selectate de Radu:</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"> <li>Zahărul, alcoolul, acizii, uleiul sunt substanțe formate din molecule, obținute prin punere în comun de electroni între atomi de nemetale, deci sunt substanțe moleculare.</li><li>Metanul nu se dizolvă în apă. </li><li>Oxigenul, hidrogenul, azotul sunt puțin solubili în apă.</li><li>Zahărul este solubil în apă.</li><li>Soluția de zahăr nu conduce curentul electric.</li><li>Mulți oxizi nemetalici sunt substanțe gazoase.</li><li>Soluțiile acizilor sunt bune conducătoare de electricitate.</li><li>Substanțele moleculare în stare solidă sunt izolatori electrici.</li><li>Alcoolul se dizolvă în orice proporție în apă.</li><li>Uleiul nu se dizolvă în apă și nu conduce curentul electric.</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-a.jpg', 'a', 'gray', 'Apă cu zahăr');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-b.jpg', 'b', 'gray', 'Apă și alcool');
buf.push("</div></div><div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-c.jpg', 'c', 'gray', 'Apă cu ulei');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-d.jpg', 'd', 'gray', 'Metan');
buf.push("</div></div><div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-e.jpg', 'e', 'gray', 'Baloane umplute cu heliu');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-f.jpg', 'f', 'gray', 'Butelii cu dioxid de carbon');
buf.push("</div></div><div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-g.jpg', 'g', 'gray', 'Conductibilitatea electrică </br>a soluției de zahăr');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-h.jpg', 'h', 'gray', 'Conductibilitatea electrică </br>a soluției de acid');
buf.push("</div></div><div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p78-inveti-i.jpg', 'i', 'gray', 'Conductibilitatea electrică </br>a uleiului');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p79-inveti-j.jpg', 'j', 'gray', 'Brom – lichid brun-roșcat');
buf.push("</div></div><div class=\"row\">");
jade_mixins["space1"]();
buf.push("<div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p79-inveti-k.jpg', 'k', 'gray', 'Iod – solid, violet');
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-6\"> ");
jade_mixins["img2"]('img/chimie7/p79-inveti-l.jpg', 'l', 'gray', 'Clor – gaz galben-verzui');
buf.push("</div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p78-at-msd-chim7-inveti'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U3', '', 'Proprietăți fizice ale unor compuși moleculari', '79', 'blue', 'right', 'small');
}
}, {id: 'p79-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers n2\"> <li>Realizați în caiete un tabel după modelul celui de mai jos și completați-l corespunzător, folosind informațiile culese de Radu precum și a celor desprinse din studierea imaginilor <strong> a</strong>-<strong>l</strong>, după modelul:</li></ul>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-table-overflow\"><table class=\"msd-table text-center orange-table vertical-borders\"> <thead> <tr><td colspan=\"3\">Starea <br/>de agregare</td><td colspan=\"3\">Solubilitatea <br/>în apă</td><td colspan=\"3\">Conductibilitatea <br/>electrică</td></tr><tr class=\"bg-orange-6\"><td>solidă </td><td>lichidă </td><td>gazoasă </td><td>solubil</td><td>puțin solubil </td><td>insolubil</td><td>conductor</td><td>izolator</td></tr></thead><tbody> <tr><td>zahăr</td><td>...</td><td>...</td><td>da </td><td>...</td><td>...</td><td>...</td><td>da</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p79-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"> <li>Substanțele moleculare se găsesc în toate cele trei stări de agregare.</li><li>După solubilitatea în apă, substanțele moleculare pot fi <strong> foarte solubile</strong> (acizii, alcoolii),<strong> puțin solubile</strong> (oxigenul, hidrogenul),<strong> insolubile</strong> (metanul, uleiul).</li><li>În stare pură, substanțele moleculare nu conduc curentul electric.</li><li>În soluție, unele substanțe moleculare sunt bune conducătoare de electricitate, dar există și soluții de substanțe moleculare care nu conduc curentul electric.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p79-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Substanțele moleculare au reprezentanți cu importanță practică deosebită:</p><ul class=\"disc\"> <li> <strong>Acidul clorhidric</strong> este utilizat în laborator pentru obținerea hidrogenului, a clorului, a altor acizi; în industrie, pentru a obține mase plastice, fire și fibre sintetice, coloranți, medicamente, în gravarea metalelor, în procesul tehnologic de obținere a produselor de pielărie sau textile.</li><li> <strong>Amoniacul </strong> este folosit pe scară largă ca materie primă pentru obținerea îngrășămintelor chimice pe bază de azot.</li><li> <strong>Metanul </strong> este un combustibil foarte valoros, dar este folosit, pe scară largă, și ca materie primă pentru obținerea de solvenți, agenți frigorifici, negru de fum etc.</li><li> <strong>Acidul fosforic </strong> este un compus molecular utilizat în:<ul class=\"bullets\"><li>industria alimentară;</li><li>pentru obținerea de îngrășăminte chimice;</li><li>coloranți;</li><li>materiale folosite în tratamente stomatologice etc.</li></ul></li></ul></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p79-at-msd-chim7-vrei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"numbers\"> <li> <p>Un compus molecular al oxigenului formează, în partea superioară a atmosferei terestre, un strat protector care acționează ca un filtru, reținând cea mai mare parte din radiația solară ultravioletă, nocivă. Totodată, reglează temperatura din atmosferă și are implicații deosebite în protejarea biosferei.</p>");
jade_mixins["space1"]();
buf.push("<p>Aranjează simbolurile chimice ale elementelor poloniu, zinc, nichel, cobalt, în pătratele libere de mai jos, astfel încât să obții, pe orizontala colorată în mov, numele acestui compus molecular.</p>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"> <div class=\"col-md-4\"> </div><div class=\"col-xs-8 element-xs-center col-md-4\"> ");
jade_mixins["img"]('img/chimie7/p79-aplica-2.jpg');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</li><li>Formează o echipă împreună cu doi colegi/colege. Realizați o activitate de documentare, folosind internetul, și selectați informații cu privire la influența asupra mediului a compusului molecular de la exercițiul <strong> 1</strong>. Prezentați fișa colegilor voștri. Atașați-o apoi, la <strong><em> portofoliul personal</em></strong>.</li><li>Dioxidul de carbon este un gaz incolor care rezultă și din respirația viețuitoarelor. Documentează-te și indică cel puțin cinci utilizări practice ale dioxidului de carbon.</li></ul>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'aplica mb0', 'Aplică','');
}
}, {id: 'p79-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]('img/chimie7/p79-aplica.jpg');
}
}, 'p79');
buf.push("</div>");
}
}, 'aplica no-title', 'Aplică','');
}
}, {id: 'p79-at-msd-chim7-aplica-audio'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});