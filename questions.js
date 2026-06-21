const ALLE_VRAGEN = [
  {
    thema: "Voorwaarden en vrijheidsbeneming",
    vraag: "Twee opsporingsambtenaren houden een verdachte staande vanwege vernieling en verrichten ter plaatse onderzoek. Wanneer de verdachte probeert te vluchten, besluiten zij hem tijdelijk te boeien in het kader van het onderzoek, in afwachting van de beslissing of hij daadwerkelijk zal worden aangehouden. Is het boeien van de verdachte in deze situatie toegestaan?",
    opties: [
      "Ja, de verdachte kan ter plaatse tijdelijk i.v.m. het onderzoek in verzekering gesteld worden.",
      "Nee, de verdachte is niet rechtens van zijn vrijheid beroofd, en daarom is dit niet mogelijk."
    ],
    juist: 1,
    uitleg: "Een van de voorwaarden voor het gebruik van handboeien is dat de persoon rechtens van zijn vrijheid is beroofd (art. 22 Ambtsinstructie). In dit geval is de verdachte nog niet aangehouden. Hoewel hij vlucht, geldt dat een verdachte niet verplicht is mee te werken aan zijn eigen veroordeling en dus mag vluchten. Een tijdelijke inverzekeringstelling (art. 124 lid 2 Sv) is slechts toegestaan wanneer iemand een ambtsverrichting verstoort of belemmert, niet zijnde de verdachte. Daarvan is in dit geval geen sprake.",
    artikel: "Art. 22 Ambtsinstructie / Art. 124 lid 2 Sv"
  },
  {
    thema: "Gevaar voor de veiligheid",
    vraag: "Twee opsporingsambtenaren houden een verdachte aan voor heling. De verdachte staat vanuit het verleden (4 jaar terug) bekend als iemand die verzet heeft gepleegd en geweld heeft gebruikt tegen de politie. Hoewel hij zich nu rustig opstelt en aangeeft mee te werken, besluiten de opsporingsambtenaren hem toch te boeien. Is dit toegestaan volgens de Ambtsinstructie?",
    opties: [
      "Ja, de persoon staat bekend als iemand die zich met verzet en geweld heeft verzet, waardoor er sprake is van gevaar voor hun veiligheid en de verdachte geboeid mag worden.",
      "Nee, hoewel de verdachte bekendstaat als verzet- en geweldpleger, heeft hij geen geweldsdelict gepleegd, blijft hij rustig en geeft hij aan mee te werken."
    ],
    juist: 1,
    uitleg: "Een van de voorwaarden voor het gebruik van handboeien is het bestaan van gevaar voor veiligheid voor de persoon zelf, de ambtenaar of derden (art. 22 Ambtsinstructie). In dit geval staat de verdachte weliswaar bekend als verzet- en geweldpleger, maar dit is vier jaar geleden. Op dit moment is verdachte rustig en geeft hij aan mee te werken. Er zijn daarom geen concrete feiten of omstandigheden die wijzen op een gevaar voor de veiligheid van de opsporingsambtenaren.",
    artikel: "Art. 22 Ambtsinstructie"
  },
  {
    thema: "Gevaar voor ontvluchting",
    vraag: "Twee opsporingsambtenaren zien een man wildplassen. Wanneer zij hem aanspreken, rent de man weg. De opsporingsambtenaren achterhalen hem. De man zegt niet opnieuw weg te zullen rennen, maar weigert zijn naam op te geven en kan geen identiteitsbewijs tonen. De opsporingsambtenaren houden de man aan en boeien hem. Is dit toegestaan volgens de Ambtsinstructie?",
    opties: [
      "Ja, op basis van de feiten en omstandigheden is er sprake van gevaar voor ontvluchting.",
      "Nee, de man is gevlucht, maar geeft aan dit niet opnieuw te zullen doen. Er is derhalve geen sprake meer van gevaar voor ontvluchting."
    ],
    juist: 0,
    uitleg: "De man is weggerend en weigert zijn naam op te geven of een identiteitsbewijs te overhandigen. Uit deze feiten en omstandigheden blijkt dat de man geenszins van plan is om mee te werken en, gelet op het feit dat hij is gevlucht, sprake is van gevaar voor ontvluchting (art. 22 Ambtsinstructie).",
    artikel: "Art. 22 Ambtsinstructie"
  },
  {
    thema: "Vervoer en verplaatsing",
    vraag: "Twee opsporingsambtenaren verplaatsen op last van de HOvJ de verdachte van de ophoudkamer naar de cellengang, omdat de verdachte voor de nacht wordt ingesloten. Omdat de verdachte zich verzet, wordt hij geboeid. Is het boeien van de verdachte bij verplaatsing binnen dezelfde locatie toegestaan op grond van de Ambtsinstructie?",
    opties: [
      "Ja, aangezien de verdachte wordt verplaatst, mogen handboeien worden aangelegd.",
      "Nee, er is geen sprake van vervoer, dus mag de verdachte niet worden geboeid."
    ],
    juist: 0,
    uitleg: "Op grond van artikel 22 van de Ambtsinstructie mag een verdachte die wordt vervoerd of verplaatst, in dit geval vanwege verzet tijdens de verplaatsing van de ophoudruimte naar de cel, worden geboeid.",
    artikel: "Art. 22 Ambtsinstructie"
  },
  {
    thema: "Meldplicht",
    vraag: "Een opsporingsambtenaar heeft een verdachte geboeid vanwege gevaar voor vlucht. Op welke wijze moet het boeien worden gemeld?",
    opties: [
      "Onverwijld aan zijn meerdere, onder vermelding van de redenen die tot het boeien hebben geleid.",
      "Onverwijld aan de hulpofficier van justitie, onder vermelding van de redenen die tot het boeien hebben geleid.",
      "Onverwijld schriftelijk aan de hulpofficier van justitie, onder vermelding van de redenen die tot het boeien hebben geleid."
    ],
    juist: 2,
    uitleg: "Artikel 23 van de Ambtsinstructie bepaalt dat de opsporingsambtenaar die de boeien heeft aangelegd hiervan onverwijld schriftelijk melding doet aan de hulpofficier van justitie. Daarbij moeten ook de redenen worden vermeld die tot het aanleggen van de boeien hebben geleid. Een mondelinge melding aan de meerdere of aan de hulpofficier van justitie is daarom niet voldoende.",
    artikel: "Art. 23 Ambtsinstructie"
  },
  {
    thema: "Wettelijke grondslag",
    vraag: "Stelling: Het boeien van een verdachte is een vrijheidsbeperkend middel. De bevoegdheid om hiervan gebruik te maken is opgenomen in de Politiewet 2012. De voorwaarden en omstandigheden waaronder handboeien mogen worden aangelegd, zijn uitgewerkt in de Ambtsinstructie.",
    opties: [
      "Deze stelling klopt.",
      "Deze stelling klopt niet."
    ],
    juist: 0,
    uitleg: "De wetgever heeft de bevoegdheid tot het gebruik van vrijheidsbeperkende middelen opgenomen in artikel 7, eerste lid, van de Politiewet 2012. De voorwaarden waaronder handboeien mogen worden gebruikt, zijn nader uitgewerkt in artikel 22 van de Ambtsinstructie. Daarom is deze stelling juist.",
    artikel: "Art. 7 lid 1 Politiewet 2012 / Art. 22 Ambtsinstructie",
    juridischAdvies: true
  }
];
