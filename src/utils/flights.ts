export type Flight = {
  aircraft: string;
  departure: {
    airport: string;
    lat: string;
    lon: string;
  };
  arrival: {
    airport: string;
    lat: string;
    lon: string;
  };
  duration: string;
};

export const LAFlights = [
  {
    aircraft: "Phenom 100",
    departure: {
      airport: "Van Nuys Airport (VNY)",
      label: "Los Angeles",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "San Francisco",
      airport: "San Francisco International Airport (SFO)",
      lat: "37°37'08\"N",
      lon: "122°22'30\"W",
    },
    duration: "1h15",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Las Vegas",
      airport: "Harry Reid International Airport (LAS)",
      lat: "36°04'31\"N",
      lon: "115°10'13\"W",
    },
    duration: "1h",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "San Diego",
      airport: "San Diego International Airport (SAN)",
      lat: "32°44'01\"N",
      lon: "117°11'23\"W",
    },
    duration: "45min",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Phoenix",
      airport: "Phoenix Sky Harbor International Airport (PHX)",
      lat: "33°26'03\"N",
      lon: "112°00'42\"W",
    },
    duration: "1h30",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Palm Springs",
      airport: "Palm Springs International Airport (PSP)",
      lat: "33°49'47\"N",
      lon: "116°30'24\"W",
    },
    duration: "35min",
  },

  // Deuxième appareil (Phenom 100 N°2)
  {
    aircraft: "Phenom 100 N°2",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "San Francisco (Napa County)",
      airport: "Napa County Airport (APC)",
      lat: "38°12'47.50\"N",
      lon: "122°16'50.50\"W",
    },
    duration: "1h20",
  },
  {
    aircraft: "Phenom 100 N°2",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Santa Barbara",
      airport: "Santa Barbara Municipal Airport (SBA)",
      lat: "34°25'39\"N",
      lon: "119°50'27\"W",
    },
    duration: "30min",
  },
  {
    aircraft: "Phenom 100 N°2",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Monterey",
      airport: "Monterey Regional Airport (MRY)",
      lat: "36°35'13\"N",
      lon: "121°50'35\"W",
    },
    duration: "1h10",
  },
  {
    aircraft: "Phenom 100 N°2",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Lake Tahoe",
      airport: "Lake Tahoe Airport (TVL)",
      lat: "38°53'38\"N",
      lon: "119°59'43\"W",
    },
    duration: "1h30",
  },
  {
    aircraft: "Phenom 100 N°2",
    departure: {
      label: "Los Angeles",
      airport: "Van Nuys Airport (VNY)",
      lat: "34°12'35\"N",
      lon: "118°29'24\"W",
    },
    arrival: {
      label: "Fresno Yosemite",
      airport: "Fresno Yosemite International Airport (FAT)",
      lat: "36°46'33\"N",
      lon: "119°43'05\"W",
    },
    duration: "55min",
  },
];

export const NYFlights = [
  {
    aircraft: "Phenom 100",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Boston",
      airport: "Boston Logan International Airport (BOS)",
      lat: "42°21'28\"N",
      lon: "71°00'23\"W",
    },
    duration: "50min",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Teterboro",
      airport: "Teterboro Airport (TEB)",
      lat: "40°51'00\"N",
      lon: "74°03'38\"W",
    },
    duration: "20min",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Philadelphia",
      airport: "Philadelphia International Airport (PHL)",
      lat: "39°52'07\"N",
      lon: "75°14'54\"W",
    },
    duration: "45min",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Washington D.C.",
      airport: "Washington Dulles International Airport (IAD)",
      lat: "38°56'40\"N",
      lon: "77°27'21\"W",
    },
    duration: "1h15",
  },
  {
    aircraft: "Phenom 100",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Nantucket Memorial",
      airport: "Nantucket Memorial Airport (ACK)",
      lat: "41°15'02\"N",
      lon: "70°03'34\"W",
    },
    duration: "1h",
  },

  {
    aircraft: "Phenom 300",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Chicago",
      airport: "Chicago Midway International Airport (MDW)",
      lat: "41°47'10\"N",
      lon: "87°45'09\"W",
    },
    duration: "2h10",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    duration: "3h10",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Toronto",
      airport: "Toronto Pearson International Airport (YYZ)",
      lat: "43°40'39\"N",
      lon: "79°37'51\"W",
    },
    duration: "1h30",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Atlanta",
      airport: "Hartsfield-Jackson Atlanta International Airport (ATL)",
      lat: "33°38'12\"N",
      lon: "84°25'41\"W",
    },
    duration: "2h30",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Montreal",
      airport: "Montréal-Pierre Elliott Trudeau International Airport (YUL)",
      lat: "45°28'08\"N",
      lon: "73°44'16\"W",
    },
    duration: "1h25",
  },

  {
    aircraft: "Pilatus PC-12",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "East Hampton",
      airport: "East Hampton Airport (HTO)",
      lat: "40°57'34\"N",
      lon: "72°15'04\"W",
    },
    duration: "35min",
  },
  {
    aircraft: "Pilatus PC-12",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Block Island",
      airport: "Block Island State Airport (BID)",
      lat: "41°10'18\"N",
      lon: "71°34'42\"W",
    },
    duration: "50min",
  },
  {
    aircraft: "Pilatus PC-12",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Montauk",
      airport: "Montauk Airport (MTP)",
      lat: "41°04'22\"N",
      lon: "71°55'29\"W",
    },
    duration: "40min",
  },
  {
    aircraft: "Pilatus PC-12",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Lake Placid",
      airport: "Lake Placid Airport (LKP)",
      lat: "44°15'07\"N",
      lon: "73°59'08\"W",
    },
    duration: "1h",
  },
  {
    aircraft: "Pilatus PC-12",
    departure: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'32\"N",
      lon: "73°42'48\"W",
    },
    arrival: {
      label: "Provincetown",
      airport: "Provincetown Municipal Airport (PVC)",
      lat: "42°04'47\"N",
      lon: "70°13'56\"W",
    },
    duration: "1h",
  },
];

export const miamiFlights = [
  {
    aircraft: "Phenom 300",
    departure: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    arrival: {
      label: "Teterboro",
      airport: "Teterboro Airport (TEB)",
      lat: "40°51'00\"N",
      lon: "74°03'38\"W",
    },
    duration: "2h45",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    arrival: {
      label: "New York",
      airport: "Westchester County Airport (HPN)",
      lat: "41°04'00\"N",
      lon: "73°42'27\"W",
    },
    duration: "2h50",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    arrival: {
      label: "Atlanta",
      airport: "DeKalb–Peachtree Airport (PDK)",
      lat: "33°52'21\"N",
      lon: "84°18'49\"W",
    },
    duration: "1h50",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    arrival: {
      label: "Bahamas",
      airport: "Lynden Pindling International Airport (NAS)",
      lat: "25°02'29\"N",
      lon: "77°28'19\"W",
    },
    duration: "45min",
  },
  {
    aircraft: "Phenom 300",
    departure: {
      label: "Miami",
      airport: "Miami-Opa Locka Executive Airport (OPF)",
      lat: "25°54'42\"N",
      lon: "80°16'76\"W",
    },
    arrival: {
      label: "Turks and Caicos",
      airport: "Providenciales International Airport (PLS)",
      lat: "21°46'10\"N",
      lon: "72°15'19\"W",
    },
    duration: "1h45",
  },
];
