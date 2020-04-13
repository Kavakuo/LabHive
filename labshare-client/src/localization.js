let locale = localStorage.getItem('locale')
if (!locale) {
  locale = 'de'
}

export let localization = {
  locale: locale,
  fallbackLocale: "de",
  silentFallbackWarn: true,
  messages: {
    en: {
      required: "Required",
      consentMail: "I agree that LabHive sends me from time to time E-Mail-Updates about new features of the platform."
    },
    de: {
      backend: {
        formValidation: {
          invalid_email: "Ungültige E-Mail",
          invalid_firstname: "Ungültiger Vorname (max. 200 Zeichen)",
          invalid_lastname: "Ungültiger Nachname (max. 200 Zeichen)",
          invalid_zipcode: "Ungültige PLZ",
          invalid_city: "Ungültige Stadt (max. 200 Zeichen)",
          invalid_street: "Ungültige Straße (max. 200 Zeichen)",
          invalid_phone: "Ungültige Telefonnummer bitte in der Form +49931123 oder 12344 eingeben ohne - oder /",
          invalid_description: "Ungültige Beschreibung (max. 2000 Zeichen)",
          invalid_name: "Ungültiger Laborname (max. 200 Zeichen)",
          invalid_number: "Ungültige Zahl",
          invalid_search: "Ungültiger Suchparameter",
          invalid_role: "Ungültiger Suchtyp",
          invalid_skills: "Ungültige Fähigkeiten",
          invalid_equipment: "Ungültiges Equipment",
          invalid_advice: "Ungültige Anfrage",
          invalid_consent: "Ungültige Einwilligung",
          invalid_url: "Ungültige URL, muss mit http:// oder https:// beginnen.",
          passwordMatch: "Passwörter stimmen nicht überein!"
        },
        not_authorized: "Nicht authorisiert!",
        invalid_location: "Ungültige Adresse!",
        internal_error: "Es ist etwas schiefgelaufen...",
        bad_request: "Ungültige Anfrage!",
        invalid_password: "Ungültiges Passwort!",
        invalid_login: "Ungültige Login-Daten!",
        existing_user: "User existiert bereits!",
        false_consent: "Ohne Einwilligung dürfen wir die Daten nicht verarbeiten.",
        no_results: "No results could be found",
        tokenTooOld: "Bitte setzen Sie das Passwort erneut zurück, der Link ist abgelaufen.",
        contact_support: "Ein Fehler ist aufgetreten, bitte wenden Sie sich an support@labhive.de. Bitte entschuldigen Sie die Umstände!",
        user_not_activated: "Der Benutzer ist noch nicht aktiviert. Zur Aktivierung Ihres Accounts müssen Sie die E-Mail Adresse bestätigen. Sollten Sie sich als Labor registriert haben, werden Sie von uns manuell verifiziert. Sobald dies geschehen ist, erhalten Sie von uns eine E-Mail. Sollte es länger als 2 Werktage dauern, kontaktieren Sie uns bitte unter support@labhive.de.",
        user_disabled: "Ihr Account wurde von uns deaktiviert. Bei Fragen wenden Sie sich bitte an support@labhive.de."
      },
      loginInfo: "Login Informationen",
      contactInfo: "Kontakt Informationen",
      register: "Registrieren",
      save: "Speichern",
      email: "E-Mail Adresse",
      officialEmail: "E-Mail Addresse der Institution",
      password: "Passwort",
      repeatPassword: "Passwort wiederholen",
      firstName: "Vorname",
      lastName: "Nachname",
      phone: "Telefonnummer",
      city: "Ort",
      zipcode: "Postleitzahl",
      street: "Straße",
      organization: "Organisation",
      labName: "Ihre Affiliation",
      labWebsite: "Webseite Ihrer Affiliation",
      labInformation: "Laborinformationen",
      consentPublicSearch:
        "Ich bin damit einverstanden, dass meine Daten von LabHive zum Zwecke der Zusammenarbeit mit Laboren und Instituten, im Rahmen der SARS-CoV-2 Pandemie, die auf der Plattform registriert sind, über die Suchfunktion einsehbar gemacht wird. Das Recht zum Widerruf und meine Rechte gemäß Art. 15 DSGVO sind von der Einwilligung unberührt.<br/>Weitere Hinweise finden Sie in unserer <a href=\"/#/dataProtection\">Datenschutzerklärung.</a>",
      consentMail: "Hiermit willige ich ein, dass LabHive mir gelegentlich E-Mail-Benachrichtigungen über Updates und neue Funktionen der Website schickt.",
      required: "Erforderlich",
      volunteerSkills: "Fähigkeiten",
      volunteer: "Freiwillige",
      requestRessource: "Bedarfsanfrage",
      offerRessource: "Angebot",
      requestVolunteerSkills: "Gesuchte Fähigkeiten bei Freiwilligen",
      requestEquipment: "Gesuchte Geräte",
      requestEquipmentDescription: "Genauere Beschreibung gesuchter Geräte. Modellbezeichnung, Webseite des Geräts, Anzahl.",
      offerEquipmentDescription: "Genauere Beschreibung angebotener Geräte. Modellbezeichnung, Webseite des Geräts, Anzahl.",
      requestAdvice: "Hilfe Gesucht",
      requestAdviceDescription: "Genauere Beschreibung",
      offerEquipment: "Anzubietende Geräte",
      offerAdvice: "Anzubietende Hilfe",
      offerAdviceDescription: "Weitere Informationen",
      qualification: "Qualifikation",
      skills: {
        bsl2: "BSL2 Erfahrung"
      },
      address: "Adresse"
    }
  }
}
}
