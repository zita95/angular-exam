# Angular Exam

A vizsga két részből fog állni, első részében pár kérdésre kell válaszolnotok. 
Kérlek tegyétek ezt meg **_röviden és lényegretörően_**. A pontszámok indikálják, hogy mennyi információt várok, 
egy-egy kérdésre.

A második résznél pár egyszerü feladatot kell megoldanotok. Ne fordítsatok sok időt arra, 
hogy maga a megjelenítés szép legyen, nem ez fontos most, hanem **_a kód helyessége és minősége_**!

Forkoljátok ezt a repot a válaszokat írjátok le a kérdések alá. 
A gyakorlati feladatoknál, amennyiben a project nem indul el, nem tudok rá pontot adni.
**_Amikor végeztetek az url-eket slacken várom._**

####**_A vizsgára 60 perc áll rendelkezésetekre._**

### Kérdések (30 pont)

1) Mi az az SPA (Single Page Application)? **(2p)**
2) Miket nevezünk dekorátoroknak? Mondj rájuk legalább 3 példát. **(4p)**
3) Nevezz meg két-két struktúrális és attribútum direktívát! Mire használjuk őket? **(4p)**
4) Milyen típusú adatok jeleníthetőek meg string interpoláció segítségével? Milyenek nem? **(2p)**
5) Nevezz meg legalább 3 életciklust! Mire használjuk őket? **(3p)**
6) Mit jelent a dependency injection? Angularban hogyan használjuk? **(2p)**
7) Abszolút vagy relatív elérési utat lehet használni a templaten a routerLink-nél? Miért? **(2p)**
8) Abszolút vagy relatív elérési utat lehet használni a kódban a Router.navigate()-nél? Miért? **(2p)**
9) Mik azok a guardok? Mire használjuk őket? **(2p)**
10) Mik azok a resolverek? Mire használjuk őket? **(2p)**
11) Mik azok a pipeok? Mondj legalább két példát! **(2p)**
12) Mik azok az interceptorok? Mire használjuk őket? **(2p)**
13) Mi a különbség a Subject és a BehaviorSubject között? **(1p)**

### Gyakorlati feladatok (30 pont)
A models mappában megtaláljátok a Pet model-t és a hozzá tartozó enumot. 
A services mappa tartalmazza az állatok listáját, amit használni kell, a láthatósági beállításokat nem módosíthatod!
1) Hozz létre két komponenst, az egyik listázni fogja az állatokat, 
a másik a lista egyes elemeinek megjelenítéséért felelős. **(5p)**
2) Kösd össze őket a lehető legegyszerübb módon, figyelj rá, hogy mire, hol és meddig iratkozol fel! **(5p)**
3) Hozz létre egy direktívát ami kékre változtatja a list 
elemének hátterét mouseoveren ha kutya és pirosra ha macska. **(5p)**
4) Hozz létre egy pipeot ami nem engedi hogy 20 karakternél több jelenjen meg a descriptionból, 
a túllógó részt helyettesítse ...-al. Nem vághat ketté szavakat! **(5p)**
5) Hozz létre egy komponenst ami új állatok hozzáadásáért felelős, reactive form segítségével,
 minden mező kitöltése legyen kötelező, az állat neve legalább 2 karakterből álljon, a description pedig nem lehet több mint 200 karakter! 
 Új elem hozzáadásakor a lista automatikusan frissüljön **(10p)** 

#####Plusz pontért (10p)
- Készíts routingot, a hozzáadásért felelős logika kerüljön külön oldalra **(5p)**
- Old meg, hogy resolver adja vissza a lista számára az elemeket **(5p)**
