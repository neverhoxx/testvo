import hSolax from "../styles/images/h-solax/solax-pv-inverter-3f-solax-x3-ult-hubriid.avif";
import aSolax from "../styles/images/a-solax/HS25 3.png";
import aSolax2 from "../styles/images/a-solax2/bat.avif";
import lSolax from "../styles//images/l-solax/20929695.png";

import aHuawei from "../styles/images/a-huawei/16218787.png";
import aHuawei2 from "../styles/images/a-huawei2/24676428.avif";
import akHuawei from "../styles/images/ak-huawei/24337781.avif";

import lHuawei from "../styles/images/l-huawei/24586044.avif";

import lTigo from "../styles/images/l-tigo/16305933.avif";
import lTigo2 from "../styles/images/l-tigo/16305923.avif";
import lTigo3 from "../styles/images/l-tigo/19687787.avif";


import solaxLogo from "../styles/images/solaxlogo.avif";
import tigoLogo from "../styles/images/tigologo.png";
import huaweiLogo from "../styles/images/huaweilogo.png";


export const products = [
    {
        id: 1,
        name: "PV INVERTER 3F SOLAX X3-ULT-HÜBRIID-15.0-K AFCI",
        price: 2860,
        type: "Hübriidinverter",
        img: hSolax,
        brand: "Solax",
        subtype: "Kontrollmoodul",
        logo: solaxLogo,
        characteristics:
        {
            "Maksimaalne DC sisendvõimsus": "30000 W",
            "Maksimaalne sisendvool DC": "72 A",
            "MPP pinge": "600 ... 600 V",
            "Nominaalne AC väljundvõimsus": "15000 W",
            "MPP jälgijate arv": 2,
            "Euroopa tõhusus": "97.7%",
            "Võrguseire": "Kolmefaasiline",
            "Andmelogi": "Jah",
            "Ekraan": "Standard",
            "Sisseehitatud aku": "pole",
            "Kaitseklass": "IP66",
            "Kaal": "47 kg",
            "Mõõtmed": "240 x 696 x 526 mm",
            "Maht": "87.863 l",
            "Ühik": "tk",
            "Pakendi suurused": 1,
            "Kogus pakendis": "-"
        }

    },
    {
        id: 2,
        name: "PV AKU TBMS-MCS0800 BAT‐SYS‐HV‐S25/36",
        price: 571,
        type: "Akusüsteem",
        img: aSolax,
        brand: "Solax",
        subtype: "Kontrollmoodul",
        logo: solaxLogo,
        characteristics: {
            "Mudel": "Liitiumioonid",
            "Liitiumioonid": "Jah",
            "Pinge tüüp": "DC",
            "Pinge": "51.2 ... 51.2 V",
            "Faaside arv": "0",
            "Aku nimimahutavus": "3.6 kWh",
            "Aku kasutatav mahutavus": "3.6 kWh",
            "Laius": "510 mm",
            "Kõrgus": "365 mm",
            "Sügavus": "137 mm",
            "Sobib varutoitega kasutamiseks": "Jah",
            "Tühjenemise max sügavus": "0 %",
            "Täielike laadimistsüklite arv": "0",
            "Kaal": "13 kg",
            "Sobib sisepaigaldiseks": "Jah",
            "Sobib välistingimustesse paigaldamiseks": "Jah",
            "Käitustemperatuur": "-30 ... 53 °C",
            "Mahutavus (C100)": "3.6 Ah",
            "Mõõdud": "510 x 365 x 157 mm",
            "Maht": "29.226 l",
            "Kaal": "10 kg",
            "Ühik": "tk",
            "Pakendi suurused": 1,
            "Kogus pakendis": "–",
            "Kaubamärk": "SOLAX"
        }


    },
    {
        id: 3,
        name: "PV AKU SOLAX TP-HS36 T-BAT-SYS-HV-S3.6",
        price: 1251,
        type: "Akusüsteem",
        img: aSolax2,
        brand: "Solax",
        subtype: "Akumoodul",
        logo: solaxLogo,
        characteristics: {
            "Mudel": "Liitiumioonid",
            "Pinge tüüp": "DC",
            "Pinge": "51.2 ... 51.2 V",
            "Faaside arv": "3",
            "Aku nimimahutavus": "3.6 kWh",
            "Aku kasutatav mahutavus": "3.6 kWh",
            "Laius": "510 mm",
            "Kõrgus": "365 mm",
            "Sügavus": "137 mm",
            "Sobib varutoitega kasutamiseks": "Jah",
            "Tühjenemise max sügavus": "90 %",
            "Täielike laadimistsüklite arv": "6000",
            "Kaal": "33.5 kg",
            "Sobib sisepaigaldiseks": "Jah",
            "Sobib välistingimustesse paigaldamiseks": "Jah",
            "Käitustemperatuur": "-30 ... 53 °C",
            "Mahutavus (C100)": "3.6 Ah",

            "Mõõdud": "510 x 365 x 152 mm",
            "Maht": "28.295 l",
            "Ühik": "tk",
            "Pakendi suurused": 1,
            "Kogus pakendis": "–",
            "Kaubamärk": "SOLAX"
        }

    },
    {
        id: 4,
        name: "PV ARVESTI SOLAX 3F VOOLUTRAFODEGA 200A",
        price: 152,
        type: "Lisaseadmed",
        img: lSolax,
        brand: "Solax",
        subtype: "PV arvesti voolutrafodega",
        logo: solaxLogo,
        characteristics: {
            // Tehnilised näitajad
            "Suurim koormusvool": "200 A",
            "Omatarve": "# W",
            "Madalpingeahela lahutamine": "Jah",
            "Ülekoormuskaitse": "Jah",
            "Ülekuumenemiskaitse": "Jah",
            "Lühisekaitsega": "Jah",
            "Suurima võimsuse järgimine (MPP-tracking)": "Ei",
            "Temperatuurianduriga": "Ei",
            "Ümbritseva keskkonna temperatuur": "-40 ... 70 °C",
            "Kuva": "Standardne",
            "Kaitseaste (IP)": "Ei kohaldata",
            "Kõrgus": "100 mm",
            "Laius": "72 mm",
            "Sügavus": "65 mm",
            "Temperatuur": "-25 ... 75 °C",

            // Põhinäitajad
            "Mõõdud": "335 x 398 x 348 mm",
            "Maht": "46.399 l",
            "Kaal": "1.148 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 27",
            "Kogus pakendis": "–",
            "Kaubamärk": "SOLAX"
        }

    },
    {
        id: 5,
        name: "PV INVERTER 3F SUN2000-10KTL M1 HUAWEI",
        price: 1233,
        type: "Akuinverter",
        img: aHuawei,
        brand: "Huawei",
        subtype: "Kontrollmoodul",
        logo: huaweiLogo,
        characteristics: {
            // Tehnilised näitajad
            "Suurim DC sisendvõimsus": "15000 W",
            "Suurim sisendvool, kui DC": "16.7 A",
            "MPP-pinge": "140 ... 980 V",
            "Toitepinge tüüp": "AC/DC",
            "Vahelduvvoolu nimiväljundvõimsus": "10000 W",
            "MPP-jälgijate arv": 2,
            "Euroopa toimivustase": "98.1 %",
            "Trafoga": "Ei",
            "Võrguseire": "Kolmefaasiline",
            "Kuva": "Puudub",
            "Juhtmevaba": "Jah",
            "Kaitseaste (IP)": "IP65",
            "Kaal": "17 kg",
            "Laius": "525 mm",
            "Kõrgus": "470 mm",

            // Põhinäitajad
            "Mõõdud": "146.5 x 525 x 470 mm",
            "Maht": "36.149 l",
            "Kaal": "17 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 8",
            "Kogus pakendis": "–",
            "Kaubamärk": "HUAWEI"
        }

    },
    {
        id: 6,
        name: "PV INVERTER 3F SUN 2000-12K-MAP0 13,2kW HUAWEI",
        price: 2114,
        type: "Akuinverter",
        img: aHuawei2,
        brand: "Huawei",
        subtype: "Kontrollmoodul",
        logo: huaweiLogo,
        characteristics: {
            // Tehnilised näitajad
            "Suurim DC sisendvõimsus": "22000 W",
            "Suurim sisendvool, kui DC": "16 A",
            "MPP-pinge": "600 ... 600 V",
            "Toitepinge tüüp": "AC/DC",
            "Vahelduvvoolu nimiväljundvõimsus": "12000 W",
            "Energiatarve": "5.5 W",
            "MPP-jälgijate arv": 2,
            "Euroopa toimivustase": "98.2 %",
            "Trafoga": "Ei",
            "Võrguseire": "Kolmefaasiline",
            "Andmelogiga": "Jah",
            "Kuva": "Puudub",
            "Juhtmevaba": "Ei",
            "Sisseehitatud aku": "Ei",
            "Sobib varutoitega kasutamiseks": "Jah",

            // Põhinäitajad
            "Mõõdud": "490 x 460 x 130 mm",
            "Maht": "29.302 l",
            "Kaal": "21 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 16",
            "Kogus pakendis": "–",
            "Kaubamärk": "HUAWEI"
        }

    },
    {
        id: 7,
        name: "PV AKUMOODUL LUNA2000-7-E1 7kWh AKU HUAWEI",
        price: 3274,
        type: "Akusüsteem",
        img: akHuawei,
        brand: "Huawei",
        subtype: "Kontrollmoodul",
        logo: huaweiLogo,
        characteristics: {
            // Tehnilised näitajad
            "Mudel": "Muu",
            "Pinge tüüp": "DC",
            "Pinge": "# V",
            "Faaside arv": "1…3",
            "Aku nimimahutavus": "6.9 kWh",
            "Aku kasutatav mahutavus": "6.9 kWh",
            "Ümbritseva keskkonna temperatuur": "20…55 °C",
            "Laius": "590 mm",
            "Kõrgus": "360 mm",
            "Sügavus": "255 mm",
            "Sobib varutoitega kasutamiseks": "Jah",
            "Tühjenemise max sügavus": "100 %",
            "Täielike laadimistsüklite arv": "#",
            "Kaal": "68 kg",
            "Sobib sisepaigaldiseks": "Jah",

            // Põhinäitajad
            "Mõõdud": "360 x 255 x 590 mm",
            "Maht": "54.162 l",
            "Kaal": "68 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1",
            "Kogus pakendis": "–",
            "Kaubamärk": "HUAWEI"
        }

    },
    {
        id: 8,
        name: "PV KONTROLLMOODUL LUNA2000-10KW-C1 10kW HUAWEI",
        price: 1164,
        type: "Akusüsteem",
        img: akHuawei,
        brand: "Huawei",
        subtype: "Kontrollmoodul",
        logo: huaweiLogo,
        characteristics: {
            // Tehnilised näitajad
            "Mudel": "Ei kohaldata",
            "Pinge tüüp": "DC",
            "Pinge": "# V",
            "Faaside arv": "1…3",
            "Aku nimimahutavus": "# kWh",
            "Aku kasutatav mahutavus": "# kWh",
            "Ümbritseva keskkonna temperatuur": "20…55 °C",
            "Laius": "590 mm",
            "Kõrgus": "150 mm",
            "Sügavus": "255 mm",
            "Sobib varutoitega kasutamiseks": "Jah",
            "Tühjenemise max sügavus": "# %",
            "Täielike laadimistsüklite arv": "#",
            "Kaal": "10 kg",
            "Sobib sisepaigaldiseks": "Jah",

            // Põhinäitajad
            "Mõõdud": "150 x 590 x 255 mm",
            "Maht": "22.568 l",
            "Kaal": "10 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1",
            "Kogus pakendis": "–",
            "Kaubamärk": "HUAWEI"
        }

    },
    {
        id: 9,
        name: "PV KONTROLLER EMMA-A02 HUAWEI",
        price: 601,
        type: "Lisaseadmed",
        img: lHuawei,
        brand: "Huawei",
        subtype: "Kontrollmoodul",
        logo: huaweiLogo,
        characteristics: {
            // Tehnilised näitajad
            "Suurim koormusvool": "63 A",
            "Omatarve": "4 ... 4 W",
            "Madalpingeahela lahutamine": "Ei kohaldata",
            "Ülekoormuskaitse": "Ei kohaldata",
            "Ülekuumenemiskaitse": "Ei kohaldata",
            "Lühisekaitsega": "Ei kohaldata",
            "Suurima võimsuse järgimine (MPP-tracking)": "Ei kohaldata",
            "Temperatuurianduriga": "Ei kohaldata",
            "Ümbritseva keskkonna temperatuur": "25 ... 40 °C",
            "Kuva": "Puudub",
            "Sidesiin": "Muu",
            "Kaitseaste (IP)": "Ei kohaldata",
            "Kõrgus": "100 mm",
            "Laius": "108 mm",
            "Sügavus": "65 mm",

            // Põhinäitajad
            "Mõõdud": "65 x 108 x 100 mm",
            "Maht": "0.702 l",
            "Kaal": "0.5 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1",
            "Kogus pakendis": "–",
            "Kaubamärk": "HUAWEI"
        }

    },
    {
        id: 10,
        name: "PV OPTIMEERIJA TIGO TS4-A-O MC4 15A 700W",
        price: 44,
        type: "Lisaseadmed",
        img: lTigo,
        brand: "Tigo",
        subtype: "Tigo Optimeerijad",
        logo: tigoLogo,
        characteristics: {
            // Tehnilised näitajad
            "Suurim DC sisendvõimsus": "700 W",
            "Suurim sisendvool, kui DC": "15 A",
            "MPP-pinge": "16...80 V",
            "Vahelduvvoolu nimiväljundvõimsus": "# W",
            "MPP-jälgijate arv": 1,
            "Euroopa toimivustase": "# %",
            "Trafoga": "Ei kohaldata",
            "Võrguseire": "Ei kohaldata",
            "Kuva": "Puudub",
            "Juhtmevaba": "Jah",
            "Sobib välistingimustesse": "Jah",
            "Kaitseaste (IP)": "Muu",
            "Kaal": "0.52 kg",
            "Laius": "138 mm",
            "Kõrgus": "139 mm",

            // Põhinäitajad
            "Mõõdud": "270 x 180 x 30 mm",
            "Maht": "1.458 l",
            "Kaal": "0.53 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 10 / 1200",
            "Kogus pakendis": "–",
            "UNSPSC": "39121006",
            "Kaubamärk": "TIGO"
        }

    },
    {
        id: 11,
        name: "PV OPTIMEERIJA TIGO VÕRGUSEADE CCA+TAP",
        price: 194,
        type: "Lisaseadmed",
        img: lTigo2,
        brand: "Tigo",
        subtype: "Kontrollmoodul",
        logo: tigoLogo,
        characteristics: {
            // Tehnilised näitajad
            "Kanalite arv": "#",
            "Salvestatavate elektrisuuruste arv": "#",
            "Elektriväärtuste (DC) salv": "Ei kohaldata",
            "Kauglugemine": "Ei kohaldata",
            "Automatsed tõrkesõnumid": "Ei",
            "Inverteri kommunikatsiooniliides ethernet": "Jah",
            "Interneti kommunikatsiooniliides analoog modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides ISDN modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides GSM modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides Ethernet": "Ei kohaldata",
            "WLAN": "Jah",

            // Põhinäitajad
            "Mõõdud": "360 x 215 x 65 mm",
            "Maht": "5.031 l",
            "Kaal": "0.5 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 10 / 300",
            "Kogus pakendis": "–",
            "UNSPSC": "39121006",
            "Kaubamärk": "TIGO"
        }

    },
    {
        id: 12,
        name: "PV OPTIMEERIJA TIGO TAP VASTUVÕTJA",
        price: 47,
        type: "Lisaseadmed",
        img: lTigo3,
        brand: "Tigo",
        subtype: "Kontrollmoodul",
        logo: tigoLogo,
        characteristics: {
            // Tehnilised näitajad
            "Kanalite arv": "#",
            "Salvestatavate elektrisuuruste arv": "#",
            "Elektriväärtuste (DC) salv": "Ei kohaldata",
            "Kauglugemine": "Ei kohaldata",
            "Automatsed tõrkesõnumid": "Ei",
            "Inverteri kommunikatsiooniliides ethernet": "Jah",
            "Interneti kommunikatsiooniliides analoog modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides ISDN modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides GSM modem": "Ei kohaldata",
            "Interneti kommunikatsiooniliides Ethernet": "Ei kohaldata",

            // Põhinäitajad
            "Mõõdud": "130 x 135 x 30 mm",
            "Maht": "0.527 l",
            "Kaal": "0.23 kg",
            "Ühik": "tk",
            "Pakendi suurused": "1 / 10 / 1440",
            "Kogus pakendis": "–",
            "UNSPSC": "39121006",
            "Kaubamärk": "TIGO"
        }

    }
];
