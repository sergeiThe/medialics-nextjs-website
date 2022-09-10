import nanodetailingBg from "../public/nd.jpg";
import aasgardBg from "../public/ab.jpg";
import orientalBg from "../public/otm.jpg";
import restorAlesundBg from "../public/rfx-aa.JPG";


const data = {

    home: {
        title: "Utvikler med lidenskap for det logiske og det visuelle",
        about: "Hei, jeg heter Sergei og jeg liker front-end programmering. Akkurat nå studerer jeg programmering ved NTNU Gjøvik 2. året, mens på fritiden driver jeg med ekstra koding og litt styrketrening."
    },

    projects: {
        text: "Her finner du noen av mine komersielle prosjekter som jeg per nå vedlikeholder og oppdaterer når det trengs. Nå bruker jeg enten Wordpress eller NextJS for å lage nettsider. Det kommer an på hvor ofte en nettside skal oppdateres, hvor rask man trenger den å være og hvor detaljert kunde vil at jeg skal bygge nettstedet.",

        projectList: [{
            id: 'p1',
            title: "Nano Detailing",
            imgURL: nanodetailingBg.src,
            techStack: "Wordpress & Elementor",
            siteURL: "https://nanodetailing.no/"
        }, {
            id: 'p2',
            title: "RestorFX Ålesund",
            imgURL: restorAlesundBg.src,
            techStack: "Wix",
            siteURL: "https://www.restorfxaalesund.com/"
        }, {
            id: 'p3',
            title: "Aasgard Bygg",
            imgURL: aasgardBg.src,
            techStack: "Wordpress & Elementor",
            siteURL: "https://www.aasgardbygg.no/"
        }, {
            id: 'p4',
            title: "Oriental Thaimassasje",
            imgURL: orientalBg.src,
            techStack: "ReactJS NextJS",
            siteURL: "https://www.orientalthaimassasje.no/"
        },]
    },

    services: {
        list: [{
            id: 'sl1',

            title: "Nettsted",
            text: "Skal man ta deg seriøst, begynn med utseendet. Jeg kan hjelpe deg med den biten der for en god pris med fornøyelsesgaranti. Liker du ikke det jeg lager, får du tilbakebetalt. Dessuten tilbyr jeg oppdatering av innhold og drift av nettstedet, så hvis du skal ha nye tilbud, bilder eller annet innhold, så fikser jeg det og."
        }, {
            id: 'sl2',
            title: "Google Ads",
            text: "Jeg har drevet kommersielt med søkemotorannonsering i noen år nå, for det var det jeg studerte før jeg begynte med programmering. Google ads har mange ganger vist seg til å være den mest lønnsomme digitale løsningen for å markedsføre sin bedrift. Facebook er også bra, men ikke så bra da..."
        }]
    },

    contact: {
        title: "Contact",
        text: "Spør meg gjerne her, men du kan også kontakte meg på e-post eller telefon, så det er sagt. Jeg befinner meg stortsett i Trondheim, så hvis du ønsker å ha et møte, kan vi arrangere det.",
        email: "medialics@gmail.com",
        phone: "+47 96 70 33 26",
        address: "Sorgenfriveien 30a, 7031 Trondheim"
    },

    socialURLs: {
        github: "https://github.com/sergeiThe",
        linkedin: "https://www.linkedin.com/in/sergei-johansen-b731b0189/"
    }
}

export default data;