registerChapter({ chapter: "u1-24-25", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Metode de separare a componentelor din amestecuri omogene");
jade_mixins["subtitle"]("Paginile 24 - 25");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p14-at-msd-chim7-stiai',
          top: 9,
          left: 0,
          width: 25,
          height: 87.0951
        },
        {
          atom: 'p24-at-msd-chim7-stii',
          top: 9,
          left: 27,
          width: 66,
          height: 10.9169
        },
        {
          atom: 'p24-at-msd-chim7-inveti-1',
          top: 20.6255,
          left: 27,
          width: 66,
          height: 28.7404
        },
        {
          atom: 'p24-at-msd-chim7-retine',
          top: 50.2742,
          left: 27,
          width: 66,
          height: 12.0308
        },
        {
          atom: 'p24-at-msd-chim7-inveti-video',
          top: 63,
          left: 27,
          width: 37,
          height: 3,
          type: 'video'
        },
        {
          atom: 'p24-at-msd-chim7-inveti-2',
          top: 66,
          left: 27,
          width: 66,
          height: 30.1971,
          type: 'text'
        }
      ],
      image: 'p024.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p25-at-msd-chim7-retine-1',
          top: 9,
          left: 7,
          width: 66,
          height: 8.2605
        },
        {
          atom: 'p25-at-msd-chim7-inveti-1',
          top: 19.2545,
          left: 7,
          width: 66,
          height: 39.623
        },
        {
          atom: 'p25-at-msd-chim7-retine-video',
          top: 61,
          left: 7,
          width: 66,
          height: 3,
          type: 'video'
        },
        {
          atom: 'p25-at-msd-chim7-retine-2',
          top: 64,
          left: 7,
          width: 66,
          height: 8.7746,
          type: 'text'
        },
        {
          atom: 'p25-at-msd-chim7-inveti-2',
          top: 73.3248,
          left: 7,
          width: 66,
          height: 5.4327
        },
        {
          atom: 'p25-at-msd-chim7-stiai',
          top: 9,
          left: 75,
          width: 25,
          height: 71.2425
        },
        {
          atom: 'p25-at-msd-chim7-aplica',
          top: 79.4944,
          left: 7,
          width: 66,
          height: 16.3153
        }
      ],
      image: 'p025.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '7', 'Metode de separare a componentelor din amestecuri omogene', '24', 'blue', 'left', 'big');
}
}, {id: 'p24-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Amestecul este rezultatul punerii la un loc a două sau mai multe substanțe, între care nu au loc fenomene chimice. </li><li>În amestecuri, substanțele componente își păstrează nemodificată compoziția. </li><li>Componentele pot fi separate din amestecuri prin procedee fizice.</li></ul></div>");
}
}, 'stii', 'Știi deja','');
}
}, {id: 'p24-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li> <strong>Zahărul </strong>se extrage din sfecla de zahăr în urma unui flux tehnologic care presupune următoarele etape:<ul class=\"dash black\"><li>îndepărtarea impurităților grosiere (pietre, bulgări de pământ);</li><li>spălarea sfeclei de zahăr;</li><li>tăierea sfeclei sub formă de tăieței în formă de V;</li><li>amestecarea tăiețeilor cu apă fierbinte care dizolvă zahărul conținut în aceștia;</li><li>separarea soluției de zahăr de resturile vegetale;</li><li>purificarea microbiologică a soluției de zahăr;</li><li>cristalizarea zahărului din soluție.</li></ul></li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p24-daca-vrei-1.jpg');
buf.push("<div class=\"fs08 text-right\">Sfeclă de zahăr</div></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p24-daca-vrei-2.jpg');
buf.push("<div class=\"fs08 text-right\">Zahăr rafinat</div></div></div><ul class=\"disc\"><li> <strong>Sarea </strong>de bucătărie se poate obține din sarea gemă extrasă din zăcămintele subterane prin dizolvare în apă, urmată de decantare, filtrare și apoi cristalizare prin vaporizare.<div class=\"row\"><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p24-daca-vrei-3.jpg');
buf.push("<div class=\"fs08 text-right\">Sare gemă</div></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p24-daca-vrei-4.jpg');
buf.push("<div class=\"fs08 text-right\">Sarea pentru consum</div></div></div></li></ul></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p14-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (1)</div><div class=\"text-indent1-5\">În figurile <strong>a </strong>și <strong>b </strong>sunt prezentate amestecuri de substanțe/corpuri. Precizează componentele care se separă și după ce criterii pot fi acestea separate.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p24-inveti-lucruri-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p24-inveti-lucruri-b.jpg', 'b', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>În laborator, în industrie sau în viața de toate zilele sunt necesare, de multe ori, substanțe în stare pură. Pentru a le obține, se folosesc diverse metode de separare.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p24-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\"><strong>Separarea </strong>este operația fizică prin care, dintr-un amestec de substanțe, se obțin substanțele componente. </div><div class=\"text-indent1-5\">Metodele de separare a componentelor unui amestec se aleg în funcție de: </div><ul class=\"numbers\"><li>tipul amestecului (omogen sau eterogen);</li><li>proprietățile substanțelor componente.</li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p24-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p24");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p24-at-msd-chim7-inveti-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm</div><ul class=\"numbers\"><li>Prepară un amestec de apă și sare de bucătărie, astfel încât toată cantitatea de sare să se dizolve. Pune o cantitate mică din amestecul obținut pe o sticlă de ceas. </li><li>Așază sticla de ceas pe un trepied cu sită metalică cu inserție ceramică și încălzește amestecul până la evaporarea completă a apei.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-12\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p24-inveti-lucruri-experiment.jpg');
buf.push("<div class=\"fs08 text-right\">Cristalele de sare separate pe sticla de ceas</div></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Ce tip de amestec se obține inițial?</li><li>Notează observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">Prin amestecarea apei cu sarea de bucătărie, se obține un amestec omogen, incolor. În a doua etapă, apa se evaporă, iar pe sticla de ceas rămân cristalele de sare.</div>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Dacă o substanță solidă este solubilă într-un lichid, aceasta poate fi recuperată prin evaporarea lichidului. Prin încălzirea amestecului omogen format, substanța lichidă se evaporă, iar cea solidă trece din faza lichidă în cea solidă.</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Această metodă de separare este folosită la obținerea sării de bucătărie, a zahărului, la separarea, purificarea și selecția formelor solide din industria farmaceutică.</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p24-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Metode de separare a componentelor din amestecuri omogene', '25', 'blue', 'right', 'small');
}
}, {id: 'p25-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Operația de trecere în stare solidă a unei substanțe dintr-o soluție se numește <strong>cristalizare</strong>. Substanța solidă se obține sub formă de cristale. Cristalul este un corp solid, mărginit de suprafețe plane și cu o formă geometrică bine definită.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p25-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să observăm (2)</div><div class=\"text-indent1-5\">În figura de mai jos este prezentată instalația de separare a unui amestec de alcool și apă. </div><div class=\"text-indent1-5\">Precizează care sunt componentele instalației și cum funcționează aceasta, pe baza informațiilor din figură.</div><ul class=\"arrows\"><li>Prin acest procedeu de separare, bazat pe operații fizice, nu se formează substanțe noi.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-12\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p25-inveti-lucruri.jpg');
buf.push("<div class=\"fs08 text-right\">Instalație de separare a unui amestec de alcool și apă</div></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p25-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Metoda de separare a substanțelor dintr-un amestec omogen de lichide, prin fierbere urmată de condensare, se numește <strong>distilare</strong>.</div><div class=\"text-indent1-5\">Această metodă se utilizează pentru separarea componentelor dintr-un amestec omogen de lichide care au puncte de fierbere diferite (de exemplu, alcool, p.f. = 78 °C, și apă, p.f. = 100 °C).</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p25-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p25");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p25-at-msd-chim7-retine-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"arrows\"><li>Procedeul distilării este utilizat la obținerea unor băuturi alcoolice (țuică, whisky etc.), la obținerea apei distilate (folosită în laboratoare, în industria chimică, farmaceutică), la distilarea petrolului, obținerea benzinei, motorinei, petrolului lampant etc.</li></ul></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p25-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"numbers\"><li>Subliniază, cu o linie, amestecurile ale căror componente pot fi separate prin cristalizare, și cu două linii, amestecurile ale căror componente pot fi separate prin distilare:  ");
jade_mixins["space1"]();
buf.push("<div class=\"inline-inline msd-purple-bg-2 p025\">soluție de zahăr în apă, soluție de apă în alcool, soluție de piatră‑vânătă în apă, soluție de oțet, soluție de sare de lămâie în apă, saramură.</div>");
jade_mixins["space1"]();
buf.push("</li><li>Lucrați în grupe de 4-5 elevi. Căutați informații, la bibliotecă sau/și pe internet, despre efectele nocive ale alcoolului asupra organelor corpului uman. Prezentați colegilor ceea ce ați aflat, realizând un poster pe această temă.</li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p25-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Prin distilarea amestecului rezultat din fermentarea unor fructe sau cereale se obțin băuturile alcoolice: țuică, whisky, vodcă, coniac etc. Consumul excesiv al acestora afectează grav sănătatea organismului uman. <br/>În România se înregistrează, an de an, o creștere constantă, raportată la numărul de locuitori, a consumului de băuturi alcoolice. Extrem de îngrijorător este faptul că a crescut consumul de alcool în rândul tinerilor, chiar al copiilor.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p25-daca-vrei-1.jpg');
buf.push("<div class=\"fs08 text-right\">Instalație de distilare a băuturilor alcoolice</div>");
jade_mixins["space1"]();
buf.push("</div></div><ul class=\"disc\"><li> <strong>Petrolul </strong>este un amestec de substanțe solide și gazoase dizolvate într-un amestec de substanțe lichide. În urma distilării fracționate la presiune atmosferică a petrolului brut se pot obține mai multe produse, în funcție de temperatură, cum ar fi: benzină, kerosen, motorină, păcură, asfalt etc.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p25-daca-vrei-2.jpg');
buf.push("<div class=\"fs08 text-right\">Instalație pentru distilarea petrolului</div></div></div></div>");
}
}, 'vrei', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p25-at-msd-chim7-stiai'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});