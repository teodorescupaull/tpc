registerChapter({ chapter: "0-help", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Instrucțiuni de utilizare a manualului tău digital");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'pg1_help_intro-menu',
          top: 15.9265,
          left: 15.0708,
          width: 77.7594,
          height: 73.9232,
          type: 'text'
        }
      ],
      image: 'pg1_help_intro.jpg'
    },
    {
      hotspots: [
        {
          atom: 'pg1_help_intro-nav',
          top: 16.0935,
          left: 7.0519,
          width: 77.9953,
          height: 12.2371,
          type: 'text'
        },
        {
          atom: 'pg1_help_intro-amii',
          top: 31.7028,
          left: 6.934,
          width: 78.2311,
          height: 23.3389,
          type: 'text'
        },
        {
          atom: 'pg1_help_intro-ex',
          top: 56.995,
          left: 6.5802,
          width: 78.3491,
          height: 34.6077,
          type: 'text'
        }
      ],
      image: 'pg2_help_intro.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"spacer05\"></div><div class=\"help-title purple\"><div>Instrucțiuni de utilizare a manualului tău digital</div></div>");
}
}, {id: 'pg1_help_intro-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"help-box\"><div class=\"help-box-title\">Structura meniului</div></div><div class=\"row no-margins-row\"><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/cuprins.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Butonul<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "CUPRINS" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>– permite accesul permanent și rapid la structura ierarhică a manualului. Un clic pe titlul unui capitol afișează lecțiile din acesta, iar un clic pe o lecție realizează saltul la lecția respectivă.</div></div></div><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/ecran-complet.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Butonul<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "ECRAN COMPLET" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>– permite maximizarea conținutului din pagina la care este deschis manualul.</div></div></div></div><div class=\"help-box\"><div class=\"row no-margins-row\"><div class=\"col-sm-1\"></div><div class=\"col-sm-10\"><p>Butoanele<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "MOD DE AFIȘARE" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>îți oferă variante diferite de vizualizare a conținutului din manual:</p></div></div></div><div class=\"row no-margins-row\"><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/pagini-spread.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Mod de afișare <span class=\"fm\">2 pagini (tip carte) </span>– paginile sunt identice cu cele din versiunea tipărită.</div></div></div><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/pagina-lata.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Mod de afișare pagină lată (pagină sub pagină) – pagina este identică cu cea din versiunea tipărită.</div></div></div></div><div class=\"row no-margins-row\"><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/digital-responsive.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Mod de afișare <span class=\"fm\">digital<em>" + (jade.escape(null == (jade_interp = ' responsive ') ? "" : jade_interp)) + "</em></span>– pagina are același conținut ca pagina tipărită, dar altă așezare a elementelor, acestea rearanjându‑se în funcție de dimensiunea ecranului pe care citești manualul.</div></div></div><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/comutare-automata.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Mod de afișare <span class=\"fm\">comutare automată </span>– manualul afișează conținutul, în mod automat, în forma cea mai potrivită pentru dimensiunea ecranului pe care citești.</div></div></div></div><div class=\"row no-margins-row\"><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/notite.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Butonul<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "NOTIȚE" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>îți oferă posibilitatea de a nota lucruri importante pentru tine în timp ce parcurgi manualul. Acestea rămân salvate local, în calculatorul tău, până la ștergerea memoriei <em>cache </em>a browserului utilizat.</div></div></div><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/ajutor.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Secțiunea<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "AJUTOR" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>îți oferă informații despre modul general de funcționare a manualului, precum și despre tipurile de activități multimedia interactive de învățare pe care le vei întâlni în manual.</div></div></div></div>");
}
}, {id: 'pg1_help_intro-menu'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"help-box\"><div class=\"help-box-title\">Modul de navigare</div></div><div class=\"row no-margins-row\"><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/sageata-stanga.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Săgeata din stânga-jos permite navigarea către pagina precedentă.</div></div></div><div class=\"col-sm-1 col-xs-2\"><div class=\"img50-help\">");
jade_mixins["img"]("img/help/sageata-dreapta.png");
buf.push("</div></div><div class=\"col-sm-5 col-xs-10\"><div class=\"help-box-gray\"><div>Săgeata din dreapta-jos permite navigarea către pagina următoare.</div></div></div></div>");
}
}, {id: 'pg1_help_intro-nav'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"help-box\"><div class=\"help-box-title\">Activitățile multimedia interactive de învățare (AMII)</div><div>În modul de afișare două pagini, activitățile multimedia interactive de învățare din manual (AMII) sunt semnalizate distinct la trecerea cursorului și se accesează dând clic pe câmpul respectiv.</div><div class=\"spacer05\"></div><div>Acestea sunt de trei tipuri:</div><ul class=\"bullets orange\"><li><strong>" + (jade.escape(null == (jade_interp = ' AMII statice') ? "" : jade_interp)) + "</strong>, semnalizate prin simbolul &nbsp; &nbsp;<div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/static-mov.png");
buf.push("</div></li><li><strong>" + (jade.escape(null == (jade_interp = ' AMII animate') ? "" : jade_interp)) + "</strong>, semnalizate prin simbolul &nbsp; &nbsp;<div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/animatie-mov.png");
buf.push("</div></li><li><strong>" + (jade.escape(null == (jade_interp = ' AMII interactive') ? "" : jade_interp)) + "</strong>, semnalizate prin simbolul<div class=\"marcaje-menu\">");
jade_mixins["img"]("img/help/interactiv-mov.png");
buf.push("</div></li></ul><div class=\"spacer05\"></div></div>");
}
}, {id: 'pg1_help_intro-amii'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"help-box\"><div class=\"help-subtitle orange mb-help\">Rezolvarea AMII-urilor interactive</div><div>Exercițiile din manual pot fi de mai multe tipuri, de exemplu:</div><div class=\"spacer05\"></div><ul class=\"bullets orange\"><li>exerciții de alegere duală (adevărat sau fals, corect sau incorect)<div class=\"help-box-gray\">");
jade_mixins["exercise"].call({
block: function(){
buf.push("<div><strong>EXEMPLU</strong></div><div class=\"row\"><div class=\"col-xs-7\"><div>Este numărul 11 un număr prim?</div></div><div class=\"col-xs-5\">");
jade_mixins["yesno"]({answer: true,
                  name: 'help-yesno-1',
                  yes: 'Da',
                  no: 'Nu'
                });
buf.push("</div></div>");
}
}, {name:'help-yesno-1'});
buf.push("</div><div class=\"spacer05\"></div></li><li>exerciții de alegere multiplă (o singură variantă de răspuns din mai multe)<div class=\"help-box-gray\">");
jade_mixins["exercise"].call({
block: function(){
buf.push("<div><strong>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "EXEMPLU" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</strong></div><div class=\"inline-block\"><span>" + (jade.escape(null == (jade_interp = ' Genul substantivului ') ? "" : jade_interp)) + "" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "<em>" + (jade.escape(null == (jade_interp = ' bloc ') ? "" : jade_interp)) + "</em>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "\neste\n" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span><div class=\"inline-block hide-large\">");
jade_mixins["pickone"](3,['feminin', 'masculin', 'neutru'],{name: 'help-pickone-2', placement: 'top', placeholder: '...'});
buf.push("</div><div class=\"inline-block hide-md\">");
jade_mixins["pickone"](3,['feminin', 'masculin', 'neutru'],{name: 'help-pickone-3', placement: 'right', placeholder: '...'});
buf.push("</div><div class=\"inline-block\"><span>.</span></div></div>");
}
}, {name:'help-yesno-2'});
buf.push("</div><div class=\"spacer05\"></div></li><li>exerciții de realizare a unor corespondențe<div class=\"help-box-gray\"><div><strong>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "EXEMPLU" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</strong></div><div class=\"spacer05\"></div><div>Unește numerele arabe cu corespondentul lor roman: </div>");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["connect-points"].call({
block: function(){
jade_mixins["statement"]();
buf.push("<div class=\"row connect\"><div data-group=\"arab\" class=\"col-xs-5\"><div class=\"choice pin-to\"><div data-name=\"a1\" class=\"connector pin-right\"></div>1</div><div class=\"choice pin-to\"><div data-name=\"a5\" class=\"connector pin-right\"></div>5</div><div class=\"choice pin-to\"><div data-name=\"a9\" class=\"connector pin-right\"></div>9</div></div><div class=\"col-xs-2\"></div><div data-group=\"roman\" class=\"col-xs-5\"><div class=\"choice pin-to\"><div data-name=\"r9\" class=\"connector pin-left\"></div>IX</div><div class=\"choice pin-to\"><div data-name=\"r5\" class=\"connector pin-left\"></div>V</div><div class=\"choice pin-to\"><div data-name=\"r1\" class=\"connector pin-left\"></div>I</div></div></div>");
}
}, {
              name: 'arab-to-roman',
              orientation: 'horizontal',
              connections: [
                ['a1', 'r1'],
                ['a5', 'r5'],
                ['a9', 'r9'],
              ]
            });
}
}, {name:'help-connect'});
buf.push("</div><div class=\"spacer05\"></div></li><li>exerciții de ordonare a unor elemente<div class=\"help-box-gray\"><div><strong>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "EXEMPLU" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</strong></div>");
jade_mixins["exercise"].call({
block: function(){
buf.push("<p>Ordonează crescător numerele:</p>");
jade_mixins["drag-and-sort"].call({
block: function(){
buf.push("<span data-index='50' class=\"item\">50</span><span data-index='40' class=\"item\">40</span><span data-index='30' class=\"item\">30</span><span data-index='20' class=\"item\">20</span><span data-index='10' class=\"item\">10</span>");
}
}, {name: 'help-section-sort-01'});
}
}, {name:'help-dts'});
buf.push("</div><div class=\"spacer05\"></div></li><li>exerciții de grupare a unor elemente după anumite criterii<div class=\"help-box-gray\"><div><strong>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "EXEMPLU" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</strong></div><div class=\"spacer05\"></div><div>Pune numele fetelor în stânga și ale băieților în dreapta.");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["drag-to-bucket"].call({
block: function(){
buf.push("<div class=\"row buckets\"><div data-name=\"unassigned\" class=\"bucket col-md-12\"><div class=\"items well well-lg\"><span data-index='1' data-target=\"baieti\" class=\"item\">Ion</span><span data-index='2' data-target=\"fete\" class=\"item\">Mirela</span><span data-index='3' data-target=\"baieti\" class=\"item\">Marcel</span><span data-index='4' data-target=\"baieti\" class=\"item\">Bogdan</span><span data-index='5' data-target=\"fete\" class=\"item\">Elena</span></div></div><div data-name=\"fete\" class=\"bucket col-md-6\"><strong>" + (jade.escape(null == (jade_interp = ' Fete ') ? "" : jade_interp)) + "</strong><div class=\"items well well-lg\"><span data-index='6' data-target=\"fete\" class=\"item\">Tatiana</span></div></div><div data-name=\"baieti\" class=\"bucket col-md-6\"><strong>" + (jade.escape(null == (jade_interp = ' Băieți ') ? "" : jade_interp)) + "</strong><div class=\"items well well-lg\"><span data-index='7' data-target=\"baieti\" class=\"item\">Petru</span></div></div></div>");
}
}, {name: 'help-section-bucket-01', orderInBuckets: false});
}
}, {name:'help-dtb'});
buf.push("</div></div><div class=\"spacer05\"></div></li><li>exerciții de selectare a unor elemente<div class=\"help-box-gray\"><div><strong>" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "EXEMPLU" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</strong></div>");
jade_mixins["exercise"].call({
block: function(){
buf.push("<div>Selectează cuvintele care numesc fructe.</div>");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<span class=\"bad\">" + (jade.escape(null == (jade_interp = ' Ala ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = ', ') ? "" : jade_interp)) + "</span><span class=\"bad\">" + (jade.escape(null == (jade_interp = ' bala ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = ', ') ? "" : jade_interp)) + "</span><span class=\"good\">" + (jade.escape(null == (jade_interp = ' portocala ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = '. ') ? "" : jade_interp)) + "</span><span class=\"bad\">" + (jade.escape(null == (jade_interp = ' Ana ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = ' ') ? "" : jade_interp)) + "</span><span class=\"bad\">" + (jade.escape(null == (jade_interp = ' are ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = ' ') ? "" : jade_interp)) + "</span><span class=\"good\">" + (jade.escape(null == (jade_interp = ' mere ') ? "" : jade_interp)) + "</span><span>" + (jade.escape(null == (jade_interp = '. ') ? "" : jade_interp)) + "</span>");
}
}, {name:'help-section-select'});
}
}, {name:'help-select'});
buf.push("</div><div class=\"spacer05\"></div></li><li>exerciții de tip rebus</li></ul><div class=\"spacer05\"></div><div>După rezolvare, poți să verifici dacă ai lucrat corect sau nu, apăsând pe butonul<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "VERIFICĂ" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>.</div><div class=\"spacer05\"></div><div>Culoarea verde sau simbolul <div class=\"validate-green\"> ✔</div> semnalează rezolvarea corectă, în timp ce culoarea roșie/albastră sau simbolul <div class=\"validate-red\">✘ </div>  semnalează o greșeală.</div><div class=\"spacer05\"></div><div>Ai posibilitatea de a face din nou exercițiul, apăsând pe butonul<span class=\"help-subtitle purple\">" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "REIA" + (jade.escape((jade_interp = ' ') == null ? '' : jade_interp)) + "</span>.</div><div class=\"spacer05\"></div></div>");
}
}, {id: 'pg1_help_intro-ex'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});