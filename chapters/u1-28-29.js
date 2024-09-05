registerChapter({ chapter: "u1-28-29", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Exerciții și probleme. Test\nApa în natură ");
jade_mixins["subtitle"]("Paginile 28 - 29");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p28-at-msd-chim7-inveti',
          top: 6.7438,
          left: 0.6667,
          width: 94.0606,
          height: 35.8526,
          type: 'text'
        },
        {
          atom: 'p28-at-msd-chim7-inveti-2',
          top: 43.0763,
          left: 0.5455,
          width: 94.7879,
          height: 52.6478
        }
      ],
      image: 'p028.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p29-at-msd-chim7-stii',
          top: 7.515,
          left: 5.7576,
          width: 67.6364,
          height: 9.8029,
          type: 'text'
        },
        {
          atom: 'p29-at-msd-chim7-inveti',
          top: 17.2836,
          left: 5.0303,
          width: 68,
          height: 42.7078
        },
        {
          atom: 'p29-at-msd-chim7-video',
          top: 60.2142,
          left: 4.6667,
          width: 67.8788,
          height: 2.4336,
          type: 'video'
        },
        {
          atom: 'p29-at-msd-chim7-inveti-2',
          top: 62.9563,
          left: 3.5758,
          width: 96,
          height: 35.2528
        },
        {
          atom: 'p29-at-msd-chim7-stiai',
          top: 11.5424,
          left: 74,
          width: 25.697,
          height: 50.0772,
          type: 'text'
        },
        {
          atom: 'p29-at-msd-chim7-audio',
          top: 6.401,
          left: 74.4848,
          width: 24.8485,
          height: 4.8329,
          type: 'audio'
        }
      ],
      image: 'p029.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', 'EVALUARE', 'Exerciții și probleme', '28', 'eval', 'left', 'big');
}
}, {id: 'p28-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-md-3\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-evaluare.jpg");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-9\"><ul class=\"numbers\"><li>Corectează erorile strecurate în afirmațiile:<ul class=\"letters\"><li>Agitarea eprubetei cu soluție se efectuează pe direcție verticală.</li><li>Volumele de lichide se pot măsura cu cilindrul negradat și pipeta.</li><li>Pentru încălzire, eprubeta se prinde cu mâna.</li></ul></li><li>Precizează care dintre afirmațiile de mai jos reprezintă o proprietate fizică și care se referă la o proprietate chimică:<ul class=\"letters\"><li>Sulful arde.</li><li>Zahărul se dizolvă în apă.</li><li>Vinul lăsat liber, în aer, se oțetește.</li></ul></li></ul></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"numbers n3\"><li>Indică metoda de separare a componentelor următoarelor amestecuri:<div class=\"row text\"><div class=\"col-md-4\"><ul class=\"letters\"><li>alcool + apă;</li><li>sare + apă;</li></ul></div><div class=\"col-md-5\"><ul class=\"letters n3\"><li>marmură pisată + alcool;</li><li>fier + sulf;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n5\"><li>ulei + apă.</li></ul></div></div></li>");
jade_mixins["space1"]();
buf.push("<li>Un chimist trebuie să separe un amestec format din alcool, apă și praf de cretă. Pentru aceasta, și-a adus pe masa de lucru următoarele ustensile: pâlnie de filtrare, pahar Berzelius, pahar Erlenmeyer, sticlă de ceas, termometru, refrigerent, trepied, capsulă de porțelan, sită metalică cu inserție ceramică, hârtie de filtru, clește de lemn, balon Würtz, balanță, mojar cu pistil, baghetă. Este convins că nu le va folosi pe toate, dar nu știe la care să renunțe. Ajută-l, specificând schema de separare și ustensilele necesare experimentului.</li>");
jade_mixins["space1"]();
buf.push("<li>Un aliaj este obținut din 200 g de cupru de puritate 85% și 50 g de zinc de puritate 90%. Determină:<ul class=\"letters\"><li>masa totală de impurități;</li><li>masa totală de metale pure.</li></ul></li></ul></div>");
}
}, 'evaluare no-title', 'Înveți lucruri noi','');
}
}, {id: 'p28-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"msd-box lavender\"><div class=\"box-inner\"><div class=\"block-h1 msd-lavender\">Test</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"romans\"><li><strong>Alege cuvântul potrivit dintre paranteze astfel încât enunțurile să fie adevărate:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li> Distilarea apei presupune o succesiune de fenomene … (<em>chimice/fizice</em>).</li><li>… este confecționat/ă din porțelan (<em>spirtiera/creuzetul</em>).</li><li>Amestecul de praf de cretă și apă poate fi separat prin … (<em>filtrare/cristalizare</em>).</li><li>Alcoolul sanitar este un amestec … (<em>eterogen/omogen</em>).</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Copiază în caiet și încercuiește litera corespunzătoare variantei corecte.</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>Este confecționată din sticlă următoarea ustensilă de laborator:<div class=\"row\"><div class=\"col-md-3\"><ul class=\"letters\"><li>trepied;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n2\"><li>refrigerent;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n3\"><li>spatulă;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n4\"><li>mojar cu pistil</li></ul></div></div></li>");
jade_mixins["space1"]();
buf.push("<li>Este substanță organică:<div class=\"row\"><div class=\"col-md-3\"><ul class=\"letters\"><li> apa;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n2\"><li>zahărul;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n3\"><li>oxigenul;</li></ul></div><div class=\"col-md-3\"><ul class=\"letters n4\"><li>sulful.</li></ul></div></div></li>");
jade_mixins["space1"]();
buf.push("<li>Corespunde unui fenomen fizic:<div class=\"row\"><div class=\"col-md-6\"><ul class=\"letters\"><li>arderea cărbunelui;</li><li>digestia alimentelor;</li></ul></div><div class=\"col-md-6\"><ul class=\"letters n3\"><li>dilatarea șinelor de tren;</li><li>ruginirea fierului.</li></ul></div></div></li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Privește cu atenție ustensilele prezentate mai jos. Indică denumirea acestora, precum și materialele din care sunt confecționate.</strong><div class=\"row\"><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-1.jpg");
buf.push("</div><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-2.jpg");
buf.push("</div><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-5.jpg");
buf.push("</div></div><div class=\"row\"><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-3.jpg");
buf.push("</div><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-4.jpg");
buf.push("</div><div class=\"col-md-4 col-xs-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p28-test-6.jpg");
jade_mixins["space1"]();
buf.push("</div></div></li><li><strong>Analizează exemplele de amestecuri de mai jos și propune scheme de separare a componentelor din aceste amestecuri:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><div class=\"row\"><div class=\"col-md-6\"><ul class=\"numbers\"><li>saramură + pulbere de sulf;</li><li>sare de bucătărie + apă + ulei;</li></ul></div><div class=\"col-md-6\"><ul class=\"numbers n3\"><li>alcool + apă + marmură pisată;</li><li>piatră-vânătă + pilitură de fier + apă.</li></ul></div></div></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>O bară de alamă cu masa de 2,5 kg conține 1 750 g de cupru, restul zinc. Precizează:</strong>");
jade_mixins["space1"]();
buf.push("<div class=\"ml-1\"><ul class=\"numbers\"><li>tipul amestecului din care este realizată bara;</li><li>masa de zinc din bară.</li></ul></div></li>");
jade_mixins["space1"]();
buf.push("<li><strong>Pe multe bijuterii din argint este inscripționat numărul 925. Acesta indică puritatea argintului utilizat. Puritatea lui este de 92,5%. Un inel cu masa de 5 g este confecționat din argint cu această puritate.<br/>Calculează masa de argint pur care se găsește în inel.</strong></li></ul></div><div class=\"row items-between\"><div class=\"col-md-6\"><div class=\"msd-box lavender2\"><div class=\"box-inner\"><p>Punctaje:<div class=\"row\"><div class=\"col-md-3 col-xs-3\"><p>I</p><p>II</p><p>III</p><p>IV</p><p>V</p><p>VI</p></div><div class=\"col-md-8 col-xs-8\"><p>20 de puncte</p><p>15 puncte</p><p>15 puncte</p><p>24 de puncte</p><p>10 puncte</p><p>6 puncte</p></div></div></p>");
jade_mixins["space1"]();
buf.push("<p>10 puncte din oficiu</p><p>Total: 100 de puncte</p><p>Timp de lucru:</p><p>50 de minute</p></div></div></div></div></div>");
}
}, 'test no-title', 'Înveți lucruri noi','');
}
}, {id: 'p28-at-msd-chim7-inveti-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '9', 'Apa în natură', '29', 'blue', 'right', 'big');
}
}, {id: 'p29-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"disc\"><li>Apa este cel mai cunoscut compus lichid, fiind folosită de oameni în fiecare zi.</li><li>Este foarte răspândită în natură, în toate cele trei stări de agregare.</li><li>Viața pe planeta Pământ este de neconceput în absența apei.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p29-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (1)</div><div class=\"text-indent1-5\">Să presupunem că, dintr-un motiv oarecare, familia ta primește o singură găleată de apă pe zi, timp de o săptămână. Imaginează-ți ce s-ar întâmpla. Veți putea să gătiți, să spălați vasele, hainele sau să faceți baie? Există atât de multe alte activități pentru care folosim apă! Știi ce cantitate de apă folosim într-o singură zi?</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>În imaginile de mai jos (fig.<strong>a-d</strong>) sunt prezentate patru activități zilnice care necesită apă. Discută cu colegul tău/colega ta și estimează cantitatea de apă folosită de familia ta, pentru fiecare activitate în parte, pe parcursul unei zile.<div class=\"row\"><div class=\"col-sm-3 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-1-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-3 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-1-b.jpg', 'b', 'grey');
buf.push("</div><div class=\"col-sm-3 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-1-c.jpg', 'c', 'grey');
buf.push("</div><div class=\"col-sm-3 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-1-d.jpg', 'd', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Dacă te gândești la câți oameni trăiesc în orașul tău, în țara ta sau pe Pământ, îți poți face o idee despre cantitatea imensă de apă necesară pentru a supraviețui și pentru a avea o viață confortabilă.</div></li>");
jade_mixins["space1"]();
buf.push("<li>Pentru funcționarea optimă a organismului sunt necesari 2 L de apă pe zi. Totuși, o persoană consumă în medie 120 L de apă zilnic, pentru toate activitățile desfășurate.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p29-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row items-between\"><div class=\"col-md-6\"><ul class=\"disc\"><li>Aproape 70% din suprafața planetei noastre este acoperită cu apă.</li><li>Apa dulce reprezintă doar 3% din totalul de apă de pe Pământ.</li><li>Apa fierbinte, în anumite condiții, îngheață mai repede decât cea rece</li><li>Boabele de grâu conțin aproximativ 13% apă.</li></ul></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p29-stiai-1.jpg");
buf.push("</div></div><div class=\"row items items-between\"><div class=\"col-md-6\">");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Într-o roșie, se găsește apă în proporție de 95%.</li></ul></div><div class=\"col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p29-stiai-2.jpg");
buf.push("</div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p29-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"></div>");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p29-stiai-ca.jpg");
jade_mixins["space1"].call({
block: function(){
buf.push(" ");
}
});
}
}, "st_pg29");
}
}, 'no-title', '','');
}
}, {id: 'p29-at-msd-chim7-audio'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p29");
buf.push("</div>");
}
}, {id: 'p29-at-msd-chim7-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (2)</div><div class=\"text-indent1-5\">Masa apei de pe Pământ rămâne destul de constantă în timp, existând un adevărat circuit al apei în natură.</div><div class=\"text-indent1-5\">Apa de pe Pământ este supusă unor procese de evaporare, condensare și colectare. Astfel, apa din mări și oceane ajunge, prin evaporare, în atmosferă, unde se formează norii. Aceștia se deplasează în zonele mai reci, unde, prin condensare, se transformă în precipitații, care se întorc pe sol, dând naștere apelor de suprafață. Acestea se adună formând pâraiele, apoi râurile, care se varsă în mări și oceane și circuitul se reia.</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Studiază imaginile de mai jos (fig.<strong>1-4</strong>) și indică starea de agregare în care se găsește apa în fiecare dintre acestea. Denumește fenomenele fizice prin care trece apa în timpul <strong>circuitului ei în natură.</strong></li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-2-1.jpg', '1', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-2-2.jpg', '2', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-2-3.jpg', '3', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p29-inveti-observ-2-4.jpg', '4', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p29-at-msd-chim7-inveti-2'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});