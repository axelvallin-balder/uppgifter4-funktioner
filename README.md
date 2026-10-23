# Arrayer

## Run
`npm install`  
`npm run dev`


## Uppgifter
De här uppgifterna handlar om olika datatyper (blandat strängar och nummer) och arrayer (listor).  
Användbara länkar:  
[Dokumentation: Nummer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#numbers)  
[Dokumentation: Strängar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#strings)  
[Dokumentation: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#math_object)  
[Dokumentation: Arrays](https://javascript.info/array)  

### 1
Skriv ett program som frågar efter ditt namn och skriver ut dina initialer:
```
Förnamn? Kalle
Efternamn? Anka
Dina initialer är KA.
```
Tips: Använd indexering []. Observera att det första tecknet har index 0 (noll).

### 2
Skapa en array med de åtta första primtalen
```
let primtal = [2, 3, 5, 7, 11, 13, 17, 19]
```
- Skriv ut det första primtalet.
- Skriv ut det åttonde primtalet.
- Skriv ut antalet primtal i arrayen.
- Lägg till nästa primtal (23) i arrayen.
- Skriv ut antalet primtal i arrayen igen.

### 3
Skapa en array med städer och en med länder
```
let städer = ["Rom", "Paris", "Berlin", "Moskva"]
let länder = ["Italien", "Frankrika", "Tyskland", "Ryssland"]
```
- Gör så att du kan lägga till en stad i första arrayen och det tillhörande landet i den andra.
- Gör en for-loop som skriver ut meningar med strukturen "Xxxx är huvudstad i Yyyy"

### 4
Skriv ett program där du kan mata in fem heltal i en array och sedan skriva ut dem i omvänd ordning:
```
Tal 1: 5
Tal 2: 13
Tal 3: 8
Tal 4: 7
Tal 5: 59
59
7
8
13
5
```
### 5
Skriv ett program där du kan mata in ett valfritt antal heltal i en array och sedan skriva ut dem i omvänd ordning:
```
Antal: 4
Tal 1: 45
Tal 2: 3
Tal 3: 82
Tal 4: 9
9
82
3
45
```

## Extrauppgifter
### 6
Skriv ett program som tar ditt namn varefter ditt användarnamn (tre första ur förnamnet + tre första ur efternamnet) skrivs ut:
```
Förnamn? Kalle
Efternamn? Anka
Ditt användarnamn är kalank.
```
Tips: Använd metoderna slice och toLowerCase.
### 7
Skriv ett program som frågar efter ditt telefonnummer (inklusive riktnummer). Byt ut bindestrecket mot mellanslag:
```
Telefonnummer med bindestreck: 0910-12345
Telefonnummer utan bindestreck: 0910 12345
```
Tips: Använd metoden replaceAll.
### 8
Skriv ett program som delar upp ett telefonnumret i riktnummer och abonnentnummer på detta vis:
```
Telefonnummer med bindestreck: 0910-12345
Riktnummer: 0910
Abonnentnummer: 12345
```
Tips: Använd metoden indexOf för att hitta positionen för bindestrecket. Då man vet positionen kan man sedan dela upp numret i två delsträngar.
### 9
Skriv ett program som omvandlar från minuter till timmar och minuter:
```
Minuter: 190
Hela timmar: 3
Restminuter: 10
```
Tips: använd % för att få ut resten vid division av ett tal, 190 % 60 blir 10; resten vid division med 60. Math.floor kan du använda för att avrunda neråt.
### 10
Givet radien i en cirkel ska programmet svara med area och omkrets.
Tips: använd Math.PI
### 11
Om en låda har sidlängderna a, b och c kan den längsta diagonalen i lådan ges med formeln 
$\sqrt{a^2 + b^2 + c^2}$  
Skriv ett program som visar längden på den diaginalen när du bestämmer längden på a, b och c.  
Tips: Använd Math.sqrt och ** för 'upphöjt'.

### 12
Skriv ett program som kan lösa andragradsekvationer
$$
x^2 + px + q = 0
$$
$$
x = -\frac{p}{2} \pm \sqrt{(\frac{p}{2})^2 - q}
$$
Svaren bör visas med en decimals noggrannhet.
### 13
Gör klar uppgiften, matrix, nedan. Man ska alltså kunna se att matrisen förändras.
```
// Skapa en 4x6-matris 
// med noll (0) på alla platser
let m = array2D(4, 6, 0);


function show() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            write(m[i][j], "\t")
        }

        write()
    }
}

show()      // Visa matrisen

// Gör gång på gång 
while (true) {
    let radindex = +await read("Radindex (0-3): ")
    let kolumnindex = +await read("Kolumnindex (0-5): ")
    let värde = +await read("Värde (ett heltal): ")

    // Uppgift:
    // Ändra i matrisen så att värdet läggs in på 
    // platsen med angivet rad- och kolumnindex

    show()
}
```