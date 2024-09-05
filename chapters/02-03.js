registerChapter({ chapter: "02-03", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Cuvânt‐înainte");
jade_mixins["subtitle"]("Paginile 2 - 3");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p02-at-msd-chim7-pg-tehnica',
          top: 5.2014,
          left: 3.697,
          width: 92.2424,
          height: 92.3222,
          type: 'text'
        }
      ],
      image: 'p002.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p03-at-msd-chim7-citat',
          top: 5.9726,
          left: 8.0606,
          width: 80,
          height: 20,
          type: 'text'
        },
        {
          atom: 'p03-at-msd-chim7-intro',
          top: 26.3668,
          left: 8.1818,
          width: 80,
          height: 47.5921
        }
      ],
      image: 'p003.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
buf.push(" <div class=\"msd-page-block\"><br/><br/><div>Manualul școlar a fost aprobat de Ministerul Educației și Cercetării prin ordinul de ministru nr. 5420/04.07.2024.</div><br/><div>Manualul este distribuit elevilor în mod gratuit, atât în format tipărit, cât și în format digital, și este transmisibil timp de patru ani școlari, începând din anul școlar 2024-2025.</div><div class=\"text-left\">Inspectoratul Școlar . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div><div>Școala / Colegiul / Liceul . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div><div class=\"spacer05\"></div><p class=\"text-center\">ACEST MANUAL A FOST FOLOSIT DE:</p><div class=\"msd-table-overflow\"><table class=\"pagina-tehnica\"><tr><td rowspan=\"3\">Anul</td><td rowspan=\"3\">Numele elevului</td><td rowspan=\"3\">Clasa</td><td rowspan=\"3\">Anul<br/>școlar</td><td colspan=\"4\" class=\"grey\">Aspectul manualului*</td></tr><tr><td colspan=\"2\">format tipărit</td><td colspan=\"2\" class=\"grey\">format digital</td></tr><tr><td>la primire </td><td>la predare </td><td>la primire </td><td>la predare </td></tr><tr class=\"width\"><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class=\"width\"><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class=\"width\"><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class=\"width\"><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></div><div>* Pentru precizarea aspectului manualului se va folosi unul dintre următorii termeni: <em> <strong>nou, bun, îngrijit, neîngrijit, deteriorat.</strong></em><br/> • Cadrele didactice vor verifica dacă informațiile înscrise în tabelul de mai sus sunt corecte.<br/> • Elevii nu vor face niciun fel de însemnări pe manual.</div>");
jade_mixins["space4"]();
jade_mixins["space4"]();
buf.push("<div> <div class=\"fm\">Referenți științifici:</div>prof. univ. dr. Irinel Adriana Badea, Facultatea de Chimie, Universitatea din București<br/>conf. univ. dr. Mirela Călinescu, Facultatea de Chimie, Universitatea din București<br/>profesor gradul I Aurelia Stoica , Colegiul Național „Gheorghe Lazăr”, București</div><p><div>Coordonator redacție: Cătălin Georgescu</div><div>Editor-coordonator: Ionuț Popa</div><div>Redactare: Izabella Tilea</div><div>Grafic design și copertă: Faber Studio</div><div>Tehnoredactare: Mihaela Aramă</div><div>Activități digitale interactive și platformă e-learning: Learn Forward Ltd. Website: https://learnfwd.com</div><div>Înregistrări și procesare sunet: ML Sistems Consulting</div><div>Voce: Camelia Pintilie</div><div>Credite foto și video: Dreamstime; Shutterstock</div><div>Filmări: S.C. Film Experience S.R.L.-D</div></p><br/><div>ISBN 978-606-076-831-9</div><br/><p> <div>Pentru comenzi vă puteți adresa Departamentului Difuzare</div><div>C.P. 12, O.P. 63, sector 1, București</div><div>Telefoane: 021.796.73.83, 021.796.73.80</div><div>Fax: 021.369.31.99</div><div>www.art-educational.ro</div></p><br/><div>Toate drepturile asupra acestei lucrări sunt rezervate Editurii Art Klett.</div><div>Nicio parte a acestei lucrări nu poate fi reprodusă, stocată ori transmisă, sub nicio formă</div><div>(electronic, mecanic, fotocopiere, înregistrare sau altfel), fără acordul prealabil scris al editurii.</div><div>© Editura Art Klett, 2024</div></div>");
jade_mixins["space2"]();
}
}, {id: 'p02-at-msd-chim7-pg-tehnica'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"msd-box blue\"><div class=\"box-inner\"><h3 class=\"text-right\">Cuvânt‑înainte</h3></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p03-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"><em>„Chimia stă la baza științei. Pe de o parte, ajută biologia și furnizează explicații pentru procesele vieții. Pe de altă parte, se combină cu fizica și găsește explicații pentru fenomenele chimice în procesele și particulele fundamentale ale Universului.”</em></div><p class=\"text-right\">P.W. Atkins</p></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p03-at-msd-chim7-citat'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Acest manual te va conduce în lumea fascinantă a chimiei, o nouă disciplină de studiu, pe cât de interesantă și de utilă, pe atât de spectaculoasă. Chimia este o știință care a oferit și continuă să ofere răspunsuri la întrebări importante despre noi și despre tot ceea ce se află în jurul nostru, în universul vizibil sau în microcosmosul greu de detectat.</div><div class=\"row\"><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p3-1.jpg");
buf.push("<div class=\"fs09 text-right\">Replică a avionului construit de Aurel Vlaicu</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p3-2.jpg");
buf.push("<div class=\"fs09 text-right\">Cosmonaut în spațiu</div></div><div class=\"col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]("img/chimie7/p3-3.jpg");
buf.push("<div class=\"fs09 text-right\">Naveta spațială Columbia, 1981</div></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Chimia, alături de alte științe, a contribuit la realizarea saltului tehnologic evidențiat în imagini, răspunzând unor întrebări esențiale: • din ce material poate fi construită o navă spațială pentru a rezista la temperaturi foarte ridicate sau foarte scăzute? • ce combustibil poate folosi? • cum se pot asigura cosmonauților condițiile necesare vieții? • ce hrană pot consuma pe navă? • cum se asigură necesarul de oxigen în interiorul navei spațiale? • din ce materiale pot fi confecționate echipamentele lor?</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Mai aproape de viața de zi cu zi, chimia este implicată în tot ceea ce folosești: pasta de dinți, săpunul, detergentul, apa, alimentele, cărțile, hainele, medicamentele, combustibilul din mașina cu care te deplasezi, aerul pe care îl respiri sau telefonul mobil.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Despre toate acestea, dar și despre multe alte lucruri vei învăța la orele de chimie. Vei afla cum să stingi o flacără amestecând praf de copt și oțet, cum să produci artificii, cum să încălzești amestecuri lichide fără foc sau curent electric și cum să colorezi și să decolorezi lichide. Vei ști să explici de ce temperatura corpului tău rămâne constantă, 36,5 °C, chiar dacă te afli la schi, la – 10 °C, de ce strugurii, foarte acri în luna mai, devin foarte dulci în luna septembrie, de ce ruginesc obiectele din fier, de ce se transformă mustul în vin.</div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Te invităm, așadar, în laboratorul de chimie!</div><p class=\"text-right\"><em>Autorii</em></p></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p03-at-msd-chim7-intro'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});