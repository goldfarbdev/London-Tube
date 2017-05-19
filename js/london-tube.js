/**
 * Created by Goldfarb Development on 5/17/2017.
 */
/*global jQuery*/
(function(){
    var LondonTube = {
        lines: {
            Bakerloo: {
                "Harrow and Wealdstone":	"Kenton",
                "Warwick Avenue":	"Paddington",
                "Edgware Road (Bakerloo)":	"Marylebone",
                "Marylebone":	"Baker Street",
                "Baker Street":	"Regents Park",
                "Regents Park":	"Oxford Circus",
                "Oxford Circus":	"Piccadilly Circus",
                "Piccadilly Circus":	"Charing Cross",
                "Charing Cross":	"Embankment",
                "Embankment":	"Waterloo",
                "Waterloo":	"Lambeth North",
                "Lambeth North":	"Elephant and Castle",
                "Maida Vale":	"Warwick Avenue",
                "Kilburn Park":	"Maida Vale",
                "Kenton":	"South Kenton",
                "South Kenton":	"North Wembley",
                "North Wembley":	"Wembley Central",
                "Wembley Central":	"Stonebridge Park",
                "Stonebridge Park":	"Harlesden",
                "Paddington":	"Edgware Road (Bakerloo)",
                "Harlesden	Willesden": "Junction",
                "Willesden Junction":	"Kensal Green",
                "Kensal Green":	"Queens Park",
                "Queens Park":	"Kilburn Park"
            },
            Central: {
                "East Acton": "North Acton",
                "North Acton": ["West Acton","Hanger Lane"],
                "West Acton": "Ealing Broadway",
                "Hanger Lane": "Perivale",
                "Perivale": "Greenford",
                "Greenford": "Northolt",
                "Northolt": "South Ruislip",
                "South Ruislip": "Ruislip Gardens",
                "Ruislip Gardens": "West Ruislip",
                "Wanstead": "Redbridge",
                "White City": "East Acton",
                "Shepherds Bush": "White City",
                "Holland Park": "Shepherds Bush",
                "Grange Hill": "Chigwell",
                "Hainault": "Grange Hill",
                "Fairlop": "Hainault",
                "Barkingside": "Fairlop",
                "Newbury Park": "Barkingside",
                "Gants Hill": "Newbury Park",
                "Redbridge": "Gants Hill",
                "Leytonstone": ["Wanstead","Leyton"],
                "Snaresbrook": "Leytonstone",
                "South Woodford": "Snaresbrook",
                "Woodford": "South Woodford",
                "Buckhurst Hill": "Woodford",
                "Loughton": "Buckhurst Hill",
                "Debden": "Loughton",
                "Theydon Bois": "Debden",
                "Chigwell": "Roding Valley",
                "Leyton": "Stratford",
                "Notting Hill Gate": "Holland Park",
                "Queensway": "Notting Hill Gate",
                "Lancaster Gate": "Queensway",
                "Marble Arch": "Lancaster Gate",
                "Bond Street": "Marble Arch",
                "Oxford Circus": "Bond Street",
                "Tottenham Court Road": "Oxford Circus",
                "Holborn": "Tottenham Court Road",
                "Chancery Lane": "Holborn",
                "St. Pauls": "Chancery Lane",
                "Bank": "St. Pauls",
                "Liverpool Street": "Bank",
                "Bethnal Green": "Liverpool Street",
                "Mile End": "Bethnal Green",
                "Stratford": "Mile End",
                "Epping": "Theydon Bois"
            },
            Circle: {
                "St. James's Park": "Victoria",
                "Westminster": "St. James's Park",
                "Kings Cross St. Pancras": "Farringdon",
                "Euston Square": "Kings Cross St. Pancras",
                "Great Portland Street": "Euston Square",
                "Baker Street": "Great Portland Street",
                "Edgware Road (Circle/District/Hammersmith and City)": "Baker Street",
                "Cannon Street": "Mansion House",
                "Mansion House": "Blackfriars",
                "Gloucester Road": "High Street Kensington",
                "High Street Kensington": "Notting Hill Gate",
                "Farringdon": "Barbican",
                "Barbican": "Moorgate",
                "Moorgate": "Liverpool Street",
                "Victoria": "Sloane Square",
                "Sloane Square": "South Kensington",
                "South Kensington": "Gloucester Road",
                "Embankment": "Westminster",
                "Temple": "Embankment",
                "Blackfriars": "Temple",
                "Tower Hill": "Monument",
                "Aldgate": "Tower Hill",
                "Liverpool Street": "Aldgate",
                "Notting Hill Gate": "Bayswater",
                "Bayswater": "Paddington",
                "Westbourne Park": "Royal Oak",
                "Monument": "Cannon Street",
                "Ladbroke Grove": "Westbourne Park",
                "Latimer Road": "Ladbroke Grove",
                "Wood Lane": "Latimer Road",
                "Shepherds Bush Market": "Wood Lane",
                "Goldhawk Road": "Shepherds Bush Market",
                "Royal Oak": "Paddington",
                "Hammersmith (Met.)": "Goldhawk Road",
                "Paddington": "Edgware Road (Circle/District/Hammersmith and City)"
            },
            District: {
                "Ealing Common": "Ealing Broadway",
                "Parsons Green": "Putney Bridge",
                "Fulham Broadway": "Parsons Green",
                "West Brompton": "Fulham Broadway",
                "Earls Court": ["West Brompton","Kensington (Olympia)","High Street Kensington","West Kensington"],
                "Paddington": "Edgware Road (Circle/District/Hammersmith and City)",
                "Bayswater": "Paddington",
                "Notting Hill Gate": "Bayswater",
                "High Street Kensington": "Notting Hill Gate",
                "Gloucester Road": "Earls Court",
                "South Kensington": "Gloucester Road",
                "Sloane Square": "South Kensington",
                "Putney Bridge": "East Putney",
                "East Putney": "Southfields",
                "Acton Town": "Ealing Common",
                "Chiswick Park": "Acton Town",
                "Kew Gardens": "Richmond",
                "Gunnersbury": "Kew Gardens",
                "Turnham Green": ["Gunnersbury","Chiswick Park"],
                "Stamford Brook": "Turnham Green",
                "Ravenscourt Park": "Stamford Brook",
                "Hammersmith (District)": "Ravenscourt Park",
                "Barons Court": "Hammersmith (District)",
                "West Kensington": "Barons Court",
                "Wimbledon Park": "Wimbledon",
                "Southfields": "Wimbledon Park",
                "Victoria": "Sloane Square",
                "St. James's Park": "Victoria",
                "Westminster": "St. James's Park",
                "Upton Park": "Plaistow",
                "East Ham": "Upton Park",
                "Barking": "East Ham",
                "Upney": "Barking",
                "Becontree": "Upney",
                "Dagenham Heathway": "Becontree",
                "Dagenham East": "Dagenham Heathway",
                "Elm Park": "Dagenham East",
                "Hornchurch": "Elm Park",
                "Upminster Bridge": "Hornchurch",
                "Upminster": "Upminster Bridge",
                "Plaistow": "West Ham",
                "West Ham": "Bromley-by-Bow",
                "Bromley-by-Bow": "Bow Road",
                "Embankment": "Westminster",
                "Temple": "Embankment",
                "Blackfriars": "Temple",
                "Mansion House": "Blackfriars",
                "Cannon Street": "Mansion House",
                "Monument": "Cannon Street",
                "Tower Hill": "Monument",
                "Aldgate East": "Tower Hill",
                "Whitechapel": "Aldgate East",
                "Stepney Green": "Whitechapel",
                "Bow Church": "Stepney Green",
                "Bow Road": "Bow Church"
            },
            DLR: {
                "London City Airport": "King George V",
                "King George V": "Woolwich Arsenal",
                "Pontoon Dock": "London City Airport",
                "Cyprus": "Gallions Reach",
                "Gallions Reach": "Beckton",
                "Stratford": ["Stratford High Street","Pudding Mill Lane"],
                "Devons Road": "Langdon Park",
                "Blackwall": "East India",
                "Abbey Road": "West Ham",
                "West Ham": "Star Lane",
                "Star Lane": "Canning Town",
                "Canning Town": ["West Silvertown","Royal Victoria"],
                "West Silvertown": "Pontoon Dock",
                "Custom House": "Prince Regent",
                "Beckton Park": "Cyprus",
                "Royal Albert": "Beckton Park",
                "Elverson Road": "Lewisham",
                "Deptford Bridge": "Elverson Road",
                "Greenwich": "Deptford Bridge",
                "Shadwell": ["Bank","Tower Gateway"],
                "Island Gardens": "Cutty Sark for Maritime Greenwich",
                "Mudchute": "Island Gardens",
                "Crossharbour and London Arena": "Mudchute",
                "East India": "Canning Town",
                "Royal Victoria": "Custom House",
                "Prince Regent": "Royal Albert",
                "Stratford High Street": "Abbey Road",
                "Poplar": ["Blackwall","West India Quay","Westferry"],
                "Cutty Sark for Maritime Greenwich": "Greenwich",
                "South Quay": "Crossharbour and London Arena",
                "Heron Quays": "South Quay",
                "Canary Wharf": "Heron Quays",
                "West India Quay": "Canary Wharf",
                "Westferry": "Limehouse",
                "All Saints": "Poplar",
                "Stratford International": "Stratford",
                "Pudding Mill Lane": "Bow Church",
                "Bow Church": "Devons Road",
                "Limehouse": "Shadwell",
                "Langdon Park": "All Saints"
            },
            Hammersmith_and_City: {
                "Latimer Road": "Ladbroke Grove",
                "Wood Lane": "Latimer Road",
                "Shepherds Bush Market": "Wood Lane",
                "Goldhawk Road": "Shepherds Bush Market",
                "Upton Park": "East Ham",
                "Hammersmith (Met.)": "Goldhawk Road",
                "Kings Cross St. Pancras": "Farringdon",
                "Ladbroke Grove": "Westbourne Park",
                "Westbourne Park": "Royal Oak",
                "Royal Oak": "Paddington",
                "Plaistow": "Upton Park",
                "West Ham": "Plaistow",
                "Bromley-by-Bow": "West Ham",
                "Bow Road": "Bromley-by-Bow",
                "Mile End": "Bow Road",
                "Stepney Green": "Mile End",
                "Whitechapel": "Stepney Green",
                "Aldgate East": "Whitechapel",
                "Liverpool Street": "Aldgate East",
                "Moorgate": "Liverpool Street",
                "Barbican": "Moorgate",
                "Farringdon": "Barbican",
                "Euston Square": "Kings Cross St. Pancras",
                "Great Portland Street": "Euston Square",
                "Baker Street": "Great Portland Street",
                "Edgware Road (Circle/District/Hammersmith and City)": "Baker Street",
                "Paddington": "Edgware Road (Circle/District/Hammersmith and City)",
                "East Ham": "Barking"
            },
            Jubilee: {
                "Queensbury": "Kingsbury",
                "Westminster": "Waterloo",
                "Southwark": "London Bridge",
                "London Bridge": "Bermondsey",
                "Bermondsey": "Canada Water",
                "Canada Water": "Canary Wharf",
                "Canary Wharf": "North Greenwich",
                "North Greenwich": "Canning Town",
                "Canning Town": "West Ham",
                "West Ham": "Stratford",
                "Canons Park": "Queensbury",
                "Stanmore": "Canons Park",
                "Waterloo": "Southwark",
                "Green Park": "Westminster",
                "Bond Street": "Green Park",
                "Kingsbury": "Wembley Park",
                "Wembley Park": "Neasden",
                "Neasden": "Dollis Hill",
                "Dollis Hill": "Willesden Green",
                "Willesden Green": "Kilburn",
                "Kilburn": "West Hampstead",
                "West Hampstead": "Finchley Road",
                "Finchley Road": "Swiss Cottage",
                "Swiss Cottage": "St. Johns Wood",
                "St. Johns Wood": "Baker Street",
                "Baker Street": "Bond Street"
            },
            Metropolitan: {
                "Finchley Road": "Wembley Park",
                "West Harrow": "Eastcote",
                "Chalfont and Latimer": ["Amersham","Chesham"],
                "Chorleywood": "Chalfont and Latimer",
                "Eastcote": "Ruislip Manor",
                "Ruislip Manor": "Ruislip",
                "Ruislip": "Ickenham",
                "Ickenham": "Hillingdon",
                "Hillingdon": "Uxbridge",
                "Harrow-on-the-Hill": ["North Harrow","West Harrow"],
                "North Harrow": "Pinner",
                "Pinner": "Northwood Hills",
                "Northwood Hills": "Northwood",
                "Moor Park": ["Croxley","Rickmansworth"],
                "Croxley": "Watford",
                "Northwick Park": "Harrow-on-the-Hill",
                "Barbican": "Farringdon",
                "Liverpool Street": "Moorgate",
                "Moorgate": "Barbican",
                "Farringdon": "Kings Cross St. Pancras",
                "Kings Cross St. Pancras": "Euston Square",
                "Euston Square": "Great Portland Street",
                "Great Portland Street": "Baker Street",
                "Baker Street": "Finchley Road",
                "Rickmansworth": "Chorleywood",
                "Wembley Park": "Preston Road",
                "Preston Road": "Northwick Park",
                "Aldgate": "Liverpool Street",
                "Northwood": "Moor Park"
            },
            Northern: {
                "Hendon Central": "Colindale",
                "Brent Cross": "Hendon Central",
                "Golders Green": "Brent Cross",
                "Hampstead": "Golders Green",
                "Belsize Park": "Hampstead",
                "Chalk Farm": "Belsize Park",
                "Camden Town": ["Chalk Farm","Kentish Town"],
                "Euston": ["Camden Town","Mornington Crescent"],
                "Mornington Crescent": "Camden Town",
                "Warren Street": "Euston",
                "Colindale": "Burnt Oak",
                "Burnt Oak": "Edgware",
                "Totteridge and Whetstone": "High Barnet",
                "Woodside Park": "Totteridge and Whetstone",
                "West Finchley": "Woodside Park",
                "Finchley Central": "West Finchley",
                "East Finchley": ["Finchley Central", "Mill Hill East"],
                "Highgate": "East Finchley",
                "Archway": "Highgate",
                "Tufnell Park": "Archway",
                "Kentish Town": "Tufnell Park",
                "Goodge Street": "Warren Street",
                "Morden": "South Wimbledon",
                "Kennington": ["Elephant and Castle","Waterloo"],
                "Oval": "Kennington",
                "Stockwell": "Oval",
                "Clapham North": "Stockwell",
                "Clapham Common": "Clapham North",
                "Clapham South": "Clapham Common",
                "Balham": "Clapham South",
                "Tooting Bec": "Balham",
                "Tooting Broadway": "Tooting Bec",
                "Colliers Wood": "Tooting Broadway",
                "South Wimbledon": "Colliers Wood",
                "Elephant and Castle": "Borough",
                "Borough": "London Bridge",
                "Tottenham Court Road": "Goodge Street",
                "Leicester Square": "Tottenham Court Road",
                "Charing Cross": "Leicester Square",
                "Embankment": "Charing Cross",
                "Waterloo": "Embankment",
                "Kings Cross St. Pancras": "Euston",
                "London Bridge": "Bank",
                "Bank": "Moorgate",
                "Moorgate": "Old Street",
                "Old Street": "Angel",
                "Angel": "Kings Cross St. Pancras"
            },
            Overground: {"Wanstead Park": "Woodgrange Park",
                "Woodgrange Park": "Barking",
                "Highbury and Islington": "Canonbury",
                "Canonbury": ["Dalston Junction","Dalston Kingsland"],
                "Dalston Junction": "Haggerston",
                "Haggerston": "Hoxton",
                "Hoxton": "Shoreditch High Street",
                "Shoreditch High Street": "Whitechapel",
                "Leytonstone High Road": "Wanstead Park",
                "Leyton Midland Road": "Leytonstone High Road",
                "Walthamstow Queens Road": "Leyton Midland Road",
                "West Brompton": "Imperial Wharf",
                "Imperial Wharf": "Clapham Junction",
                "Gospel Oak": ["Upper Holloway","Kentish Town West"],
                "Upper Holloway": "Crouch Hill",
                "Crouch Hill": "Harringay Green Lanes",
                "Harringay Green Lanes": "South Tottenham",
                "South Tottenham": "Blackhorse Road",
                "Blackhorse Road": "Walthamstow Queens Road",
                "Whitechapel": "Shadwell",
                "Shadwell": "Wapping",
                "Wapping": "Rotherhithe",
                "Anerley": "Norwood Junction",
                "Norwood Junction": "West Croydon",
                "Sydenham": ["Crystal Palace", "Penge West"],
                "Queens Road Peckham": "Peckham Rye",
                "Peckham Rye": "Denmark Hill",
                "Denmark Hill": "Clapham High Street",
                "Clapham High Street": "Wandsworth Road",
                "Penge West": "Anerley",
                "Rotherhithe": "Canada Water",
                "Canada Water": "Surrey Quays",
                "Surrey Quays": ["New Cross", "New Cross Gate","Queens Road Peckham"],
                "New Cross Gate": "Brockley",
                "Brockley": "Honor Oak Park",
                "Honor Oak Park": "Forest Hill",
                "Forest Hill": "Sydenham",
                "Wandsworth Road": "Clapham Junction",
                "Watford Junction": "Watford High Street",
                "Harlesden": "Willesden Junction",
                "Kensal Green": "Queens Park",
                "Queens Park": "Kilburn High Road",
                "Kilburn High Road": "South Hampstead",
                "South Hampstead": "Euston",
                "Richmond": "Kew Gardens",
                "Kew Gardens": "Gunnersbury",
                "Stonebridge Park": "Harlesden",
                "Wembley Central": "Stonebridge Park",
                "North Wembley": "Wembley Central",
                "Watford High Street": "Bushey",
                "Bushey": "Carpenders Park",
                "Carpenders Park": "Hatch End",
                "Hatch End": "Headstone Lane",
                "Headstone Lane": "Harrow and Wealdstone",
                "Harrow and Wealdstone": "Kenton",
                "Kenton": "South Kenton",
                "South Kenton": "North Wembley",
                "Gunnersbury": "South Acton",
                "South Acton": "Acton Central",
                "Caledonian Road and Barnsbury": "Highbury and Islington",
                "Dalston Kingsland": "Hackney Central",
                "Hackney Central": "Homerton",
                "Homerton": "Hackney Wick",
                "Hackney Wick": "Stratford",
                "Willesden Junction": ["Shepherds Bush","Kensal Rise","Kensal Green"],
                "Shepherds Bush": "Kensington (Olympia)",
                "Camden Road": "Caledonian Road and Barnsbury",
                "Kentish Town West": "Camden Road",
                "Acton Central": "Willesden Junction",
                "Kensal Rise": "Brondesbury Park",
                "Brondesbury Park": "Brondesbury",
                "Brondesbury": "West Hampstead",
                "West Hampstead": "Finchley Road and Frognal",
                "Finchley Road and Frognal": "Hampstead Heath",
                "Hampstead Heath": "Gospel Oak",
                "Kensington (Olympia)": "West Brompton"
            },
            Piccadilly: {
                "South Harrow": ["Sudbury Hill", "Rayners Lane"],
                "Turnpike Lane": "Manor House",
                "Manor House": "Finsbury Park",
                "Finsbury Park": "Arsenal",
                "Knightsbridge": "South Kensington",
                "Arsenal": "Holloway Road",
                "Wood Green": "Turnpike Lane",
                "Bounds Green": "Wood Green",
                "Arnos Grove": "Bounds Green",
                "Southgate": "Arnos Grove",
                "Oakwood": "Southgate",
                "Cockfosters": "Oakwood",
                "Earls Court": "Barons Court",
                "Holloway Road": "Caledonian Road",
                "Caledonian Road": "Kings Cross St. Pancras",
                "Hillingdon": "Uxbridge",
                "Hatton Cross": ["Heathrow Terminal 4", "Heathrow Terminals 1 2 3"],
                "Hounslow West": "Hatton Cross",
                "Hounslow Central": "Hounslow West",
                "Osterley": "Hounslow East",
                "Boston Manor": "Osterley",
                "Northfields": "Boston Manor",
                "South Ealing": "Northfields",
                "Acton Town": ["South Ealing","Ealing Common"],
                "Heathrow Terminals 1 2 3": ["Heathrow Terminal 4", "Heathrow Terminal 5"],
                "Ickenham": "Hillingdon",
                "Ruislip": "Ickenham",
                "Ruislip Manor": "Ruislip",
                "Eastcote": "Ruislip Manor",
                "Sudbury Town": "Sudbury Hill",
                "Alperton": "Sudbury Town",
                "Park Royal": "Alperton",
                "North Ealing": "Park Royal",
                "Ealing Common": "North Ealing",
                "Rayners Lane": "Eastcote",
                "Barons Court": "Hammersmith (District)",
                "Hammersmith (District)": "Turnham Green",
                "Hyde Park Corner": "Knightsbridge",
                "Green Park": "Hyde Park Corner",
                "Piccadilly Circus": "Green Park",
                "Gloucester Road": "Earls Court",
                "Leicester Square": "Piccadilly Circus",
                "Covent Garden": "Leicester Square",
                "Hounslow East": "Hounslow Central",
                "Turnham Green": "Acton Town",
                "Holborn": "Covent Garden",
                "Russell Square": "Holborn",
                "Kings Cross St. Pancras": "Russell Square",
                "South Kensington": "Gloucester Road"
            },
            Tramlink: {
                "Beckenham Road": "Beckenham Junction",
                "Avenue Road": "Beckenham Road",
                "Birkbeck": "Avenue Road",
                "Harrington Road": "Birkbeck",
                "Arena": ["Harrington Road","Elmers End"],
                "Woodside": "Arena",
                "Blackhorse Lane": "Woodside",
                "Addiscombe": "Blackhorse Lane",
                "Sandilands": ["Lloyd Park","Addiscombe"],
                "George Street": "Church Street",
                "East Croydon": ["George Street","Lebanon Road"],
                "King Henry's Drive": "New Addington",
                "Fieldway": "King Henry's Drive",
                "Addington Village": "Fieldway",
                "Gravel Hill": "Addington Village",
                "Coombe Lane": "Gravel Hill",
                "Lloyd Park": "Coombe Lane",
                "Lebanon Road": "Sandilands",
                "Mitcham Junction": "Beddington Lane",
                "Mitcham": "Mitcham Junction",
                "Belgrave Walk": "Mitcham",
                "Phipps Bridge": "Belgrave Walk",
                "Morden Road": "Phipps Bridge",
                "Merton Park": "Morden Road",
                "Dundonald Road": "Merton Park",
                "Wimbledon": "Dundonald Road",
                "Beddington Lane": "Therapia Lane",
                "Therapia Lane": "Ampere Way",
                "Wellesley Road": "East Croydon",
                "West Croydon": "Wellesley Road",
                "Centrale": "West Croydon",
                "Reeves Corner": "Centrale",
                "Wandle Park": "Reeves Corner",
                "Waddon Marsh": "Wandle Park",
                "Ampere Way": "Waddon Marsh",
                "Church Street": "Centrale"
            },
            Victoria: {
                "Walthamstow Central": "Blackhorse Road",
                "Seven Sisters": "Finsbury Park",
                "Stockwell": "Brixton",
                "Tottenham Hale": "Seven Sisters",
                "Blackhorse Road": "Tottenham Hale",
                "Finsbury Park": "Highbury and Islington",
                "Warren Street": "Oxford Circus",
                "Oxford Circus": "Green Park",
                "Green Park": "Victoria",
                "Kings Cross St. Pancras": "Warren Street",
                "Victoria": "Pimlico",
                "Pimlico": "Vauxhall",
                "Vauxhall": "Stockwell",
                "Highbury and Islington": "Kings Cross St. Pancras"
            },
            Waterloo_and_City: {
                "Waterloo": "Bank"
            }
        }
    };

    var getNextStop = function(lines, currentLocation, prevStop){
        var nextStops = [],
            fromCount,
            previousStop = typeof prevStop !== 'undefined' ? prevStop : false,
            fromWhere,
            startFroms;

        if(typeof currentLocation === 'string'){
            fromCount = 1;
        } else{
            fromCount = currentLocation.length;
        }
        for(var x = 0; x < fromCount; x++) {
            for (line in lines) {
                startFroms = lines[line];
                for (startFrom in startFroms) {
                    var nextStop = startFroms[startFrom];

                    if (typeof currentLocation === 'string'){
                        fromWhere = currentLocation;
                    } else{
                        fromWhere = currentLocation[x];
                    }

                    if(typeof nextStop === 'object'){
                        $.each(nextStop, function(nextStopIndex, nextStopValue){
                            if ((fromWhere === startFrom && previousStop !== '') && (checkNextStopIsNotPreviousStop(nextStopValue, previousStop) === true)) {
                                nextStops.push(nextStopValue);
                            } else if ((fromWhere === nextStopValue  && previousStop !== '') && (checkNextStopIsNotPreviousStop(startFrom, previousStop) === true)) {
                                nextStops.push(startFrom);
                            }
                        });
                    } else if ((fromWhere === startFrom && previousStop !== '') && (checkNextStopIsNotPreviousStop(nextStop, previousStop) === true)) {
                        nextStops.push(nextStop);
                    } else if ((fromWhere === nextStop  && previousStop !== '') && (checkNextStopIsNotPreviousStop(startFrom, previousStop) === true)) {
                        nextStops.push(startFrom);
                    }
                }
            }
        }
        nextStops = removeDuplicates(nextStops).sort();
        console.log(nextStops);
        return nextStops;
    };

    var checkNextStopIsNotPreviousStop = function (nStop, pStop) {
        var pass = true;
        if(pStop === false){
            return pass;
        }
        if(typeof pStop === 'string'){
            if(nStop === pStop){
                return false
            }
            return pass;
        } else{
            $.each(pStop, function(pIndex, pValue){
                if(pValue === nStop){
                    pass = false;
                    return false;
                }
            });
        }
        return pass;
    };

    var removeDuplicates = function (names){
        var uniqueNames = [];
        $.each(names, function(i, el){
            if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        });
        return uniqueNames;
    };

    var getAllPossibleStationsXStopsAway = function (startLocation, stops) {
        var prevStops,
            allPossibleStations;
        for (z = 0; z < stops; z++){
            var nextStops = getNextStop(LondonTube.lines, startLocation, prevStops);
            prevStops = startLocation;
            if(typeof prevStops === 'object'){
                $.each(prevStops, function(prevStopsIndex, prevStopsValue){
                    $.each(nextStops, function(nextStopsIndex, nextStopsValue){
                        if(prevStopsValue === nextStopsValue){
                            nextStops.splice(nextStopsIndex, 1);
                        }
                    });
                });
            }
            startLocation = nextStops;
        }

        allPossibleStations = startLocation;
        console.log(allPossibleStations);
        return allPossibleStations;
    };

    var getAllStations = function(tubes) {
        var stations = [];
        for(tube in tubes){
            for(station in tubes[tube]){
                stations.push(station);
            }
        }
        return removeDuplicates(stations).sort();
    };
    var tubeStations = getAllStations(LondonTube.lines);
    $.each(tubeStations, function(tubeStationsIndex, tubeStation){
        $('#startingStation').append('<option val="' + tubeStation + '">' + tubeStation + '</option>' );
    });

    var displayStops = function () {
        var initialLocation = $('#startingStation').val(),
            numberStops = $('#stops').val(),
            possibleStations = getAllPossibleStationsXStopsAway(initialLocation, numberStops),
            ulPosstibleStops = $('#possibleStops');

        ulPosstibleStops.html('');
        if (typeof possibleStations === 'object') {
            for (station in possibleStations) {
                ulPosstibleStops.append('<li>' + possibleStations[station] + '</li>');
            }
        } else {
            ulPosstibleStops.append('<li>' + possibleStations + '</li>');
        }
    };

    $('#displayStops').click(function(){
        new displayStops();
    });

}(jQuery));