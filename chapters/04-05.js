registerChapter({ chapter: "04-05", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Prezentarea manualului");
jade_mixins["subtitle"]("Paginile 4 - 5");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p04-at-msd-chim7-prezentare',
          top: 1.5167,
          left: 25.5152,
          width: 73.4545,
          height: 17.9434,
          type: 'text'
        },
        {
          atom: 'p04-at-msd-chim7-structura-manual',
          top: 19.6829,
          left: 25.3939,
          width: 73.697,
          height: 29.4259
        },
        {
          atom: 'p04-at-msd-chim7-structura-unitati',
          top: 49.5887,
          left: 25.6364,
          width: 73.697,
          height: 33.1105
        },
        {
          atom: 'p04-at-msd-chim7-structura-lectiei',
          top: 83.2648,
          left: 2.6061,
          width: 96.7273,
          height: 15.2871
        },
        {
          atom: 'p04-at-msd-chim7-instructiuni-digital',
          top: 8.2862,
          left: -0.0606,
          width: 24.8485,
          height: 73.8132
        }
      ],
      image: 'p004.jpg'
    },
    {
      hotspots: [],
      image: 'p005.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('', '', 'Prezentarea manualului', '4', 'blue', 'left', 'big');
}
}, {id: 'p04-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Manualul vă propune un model didactic bazat pe învățarea prin observare, explorare, analiză și interpretare. Fiind o știință aplicată, chimia este mult mai ușor asimilată de către elevi prin intermediul experimentelor și al observațiilor personale desprinse în urma acestora.</div><div class=\"text-indent1-5\">Manualul îmbină inteligent metodele clasice de predare a disciplinei cu cele moderne și valorifică didactic tehnologia digitală, disciplina devenind astfel atractivă pentru elev. Observând și experimentând, elevul va descoperi relevanța cunoștințelor de chimie pentru viața lui cotidiană.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p04-at-msd-chim7-prezentare'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Incursiunea în lumea chimiei se realizează parcurgând 4 unități de învățare:</div><ul class=\"numbers\"><li><span class=\"msd-blue\">Chimia și viața. Substanțele în natură </span>– elevul ia contact cu laboratorul de chimie, cu ustensilele și aparatura folosite, învață despre fenomene fizice și chimice, proprietăți ale substanțelor chimice, substanțe și amestecuri din natură.</li><li><span class=\"msd-blue\">Atom. Element chimic </span>– elevul află despre particulele care stau la baza alcătuirii materiei, despre elementele chimice și modul în care acestea au fost ordonate în Tabelul periodic al elementelor.</li><li><span class=\"msd-blue\">Compuși chimici </span>– elevul învață despre modul de formare și de reprezentare a compușilor chimici și despre cum se pot clasifica aceștia.</li><li><span class=\"msd-blue\">Calcule pe baza formulei chimice </span>elevul aplică cunoștințele dobândite în probleme și stabilește legături cu viața cotidiană.</li></ul><div class=\"block-subtitle msd-blue\">Manualul\teste\tstructurat\tîn\t4\tunități\tde\tînvățare</div><div class=\"row\"><div class=\"col-md-6 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p4-u1.jpg");
buf.push("</div><div class=\"col-md-6 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p4-u2.jpg");
buf.push("</div><div class=\"col-md-6 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p5-u3.jpg");
buf.push("</div><div class=\"col-md-6 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p5-u4.jpg");
buf.push("</div></div><div class=\"row\"> <div class=\"col-md-6 col-xs-6\"> ");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/coperta.jpg");
buf.push("<div class=\"fs08\">Imaginea de pe copertă este generată cu ajutorul Inteligenței Artificiale. Ea nu reflectă adevărul științific și nu reprezintă o reflectare a realității cotidiene. Este o imagine „concept” și are exclusiv rol vizual/grafic.</div></div></div></div>");
}
}, 'intro no-title', 'Înveți lucruri noi','');
}
}, {id: 'p04-at-msd-chim7-structura-manual'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-blue\">Structura\tunității\tde\tînvățare:</div><strong>lecție de predare – învățare</strong><div class=\"row\"><div class=\"col-md-12 col-xs-12\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p4-pg-predare.jpg");
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("<strong>chimia aplicată</strong><div class=\"row\"><div class=\"col-md-12 col-xs-12\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p5-pg-chimie-aplicata.jpg");
jade_mixins["space1"]();
buf.push("</div></div><strong>evaluare</strong><div class=\"row\"><div class=\"col-md-12 col-xs-12\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p5-pg-evaluare.jpg");
buf.push("</div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p04-at-msd-chim7-structura-unitati'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-blue\">Structura\tlecției:\tUn\tparcurs\tde\tînvățare\tcoerent\tși eficient\tîn\t6\tpași\tdidactici</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">O scurtă recapitulare a noțiunilor învățate, care vor fi folosite în cadrul predării.</div>");
}
}, 'stii-intro', 'Știi deja','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Conținuturile noi, descoperite prin observare (<strong>Să observăm</strong>), experimentare (<strong>Să experimentăm</strong>), investigare (<strong>Să investigăm</strong>) și lucru în echipă (<strong>Să lucrăm</strong>).</p></div>");
}
}, 'inveti-intro', 'Înveți lucruri noi','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Noțiunile importante din lecție, sintetizate pentru a fi reținute mai ușor.</p></div>");
}
}, 'retine', 'Reține','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"bullets\"><li>Itemi de aplicare a cunoștințelor dobândite în cadrul lecției de predare‑învățare</li><li>Joc și chimie</li><li>Portofoliu</li></ul></div>");
}
}, 'aplica-intro', 'Aplică','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Scurte informații cu privire la fenomene, proprietăți, compuși chimici care au fost studiați.</p></div>");
}
}, 'stiai-intro', 'Știai că?','');
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><p>Informații care vin în ajutorul elevului pentru a înțelege mai bine ceea ce a fost predat, cu referiri la aplicabilitatea în viața de zi cu zi.</p></div>");
}
}, 'vrei-intro', 'Dacă vrei să știi mai mult...','');
}
}, {id: 'p04-at-msd-chim7-structura-lectiei'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-blue\"> Instrucțiuni de utilizare a manualului digital</div><p>Varianta digitală a manualului este similară cu cea tipărită, având în plus aproximativ 100 de AMII, activități multimedia interactive de învățare, cu rolul de a spori valoarea cognitivă. Activitățile multimedia interactive de învățare sunt de trei feluri, simbolizate pe parcursul manualului astfel:</p>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-1 col-xs-2\">");
jade_mixins["img"]("img/help/static-mov.png");
buf.push("</div><div class=\"col-md-11 col-xs-10\"><p><strong>Activitate statică</strong>, de ascultare activă și de observare dirijată a unei imagini semnificative</p></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-1 col-xs-2\">");
jade_mixins["img"]("img/help/animatie-mov.png");
buf.push("</div><div class=\"col-md-11 col-xs-10\"><p><strong>Activitate animată, </strong>filmuleț sau scurtă animație</p></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-1 col-xs-2\">");
jade_mixins["img"]("img/help/interactiv-mov.png");
buf.push("</div><div class=\"col-md-11 col-xs-10\"><p><strong>Activitate interactivă, </strong>de tip exercițiu sau joc, în urma căreia elevul are feedback imediat</p></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"block-subtitle msd-blue\"> Alte butoane folosite în varianta digitală:</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row\"><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/cuprins.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Cuprins</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/ecran-complet.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Ecran complet</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/pagini-spread.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Mod de afișare 2 pagini (tip carte)</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/pagina-lata.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Mod de afișare pagină lată (pagină sub pagină)</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/digital-responsive.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Mod de afișare digital responsive</p></div></div></div><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/comutare-automata.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Mod de afișare comutare automată</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/notite.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Notițe</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/ajutor.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Ajutor</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/sageata-stanga.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Navigare către pagina precedentă</p></div></div><div class=\"row\"><div class=\"col-md-2 col-xs-2\">");
jade_mixins["img"]("img/help/sageata-dreapta.png");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-md-10 col-xs-10\"><p>Navigare către pagina următoare</p></div></div></div></div></div>");
}
}, 'materie no-title', 'Înveți lucruri noi','');
}
}, {id: 'p04-at-msd-chim7-instructiuni-digital'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});