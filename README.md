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
A lényege, hogy nem kell minden hívsánál lenyúlni a szerverhez és megvárni, még válaszol; + a komponensek nem töltődnek újra, csak kirenderelődnek.

2) Miket nevezünk dekorátoroknak? Mondj rájuk legalább 3 példát. **(4p)**
az angular saját jelölőrendszere, nem múdosítja a kódot, csak pl class-t definiál: @Component, @Injectable, @Directive

3) Nevezz meg két-két struktúrális és attribútum direktívát! Mire használjuk őket? **(4p)**
a struktúrális direktíva közvetlenül változtatja a DOM felépítéését, pl megjelenít egy div-et (*ngFor, *ngIf); az attribútum direktíva a megjelenést, css-t módosítja pl: kék lesz a háttere a div-nek(ngClass, ngStyle);

4) Milyen típusú adatok jeleníthetőek meg string interpoláció segítségével? Milyenek nem? **(2p)**
bármi, ami primitív és string-gé alakítható pl: szám, string, de pl object nem (max pipe-al);

5) Nevezz meg legalább 3 életciklust! Mire használjuk őket? **(3p)**
ngOnChanges(SimpleChanges-az első, ami lefut, ha a komponensnek van szülőkomponense--> itt kapja meg a szülőtől az adatokat);
ngOnInit(a construktor után egyből lefut a komponens inicializációjánál--> itt tudunk feliratkozni Observable-ra és itt tudunk változóknak értéket adni pl: a route data-jából);
ngOnDestroy(a komponens halálakor az angular megsemmisíti magát a komponenst, az adatait és a feliratkozásokat);

6) Mit jelent a dependency injection? Angularban hogyan használjuk? **(2p)**
@Injectable({providedIn: 'root'})--> ha ezt megadjuk, nem kell minden komponensben importálni és az app.module.ts-ben sem kell minden service-t megadni a providers array-ben

7) Abszolút vagy relatív elérési utat lehet használni a templaten a routerLink-nél? Miért? **(2p)**
relatív, ilyenkor az angular tudja, hogy hol vagyunk a route-ban

8) Abszolút vagy relatív elérési utat lehet használni a kódban a Router.navigate()-nél? Miért? **(2p)**
abszolút: ilyenkor nem tudja, hogy hol vagyunk, de megadhatjuk a relativeTo: this.route-ot is

9) Mik azok a guardok? Mire használjuk őket? **(2p)**
speciális servicek, amikkel elérhetővé/elérhetetlenné tudunk tenni route-okat

10) Mik azok a resolverek? Mire használjuk őket? **(2p)**
a resolverek segítenek adatokat eljuttatni komponensekhez, hogy az csak a megjelenítéssel foglalkozzon

11) Mik azok a pipeok? Mondj legalább két példát! **(2p)**
template-en tudják megváltoztatni a megjelenítést pl: | json -> objectek-et stringként tudja megjeleníteni, | async -> feliratkozás nélkül tudjuk megjelenííteni a kapott adatokat 

12) Mik azok az interceptorok? Mire használjuk őket? **(2p)**
az interceptorok minden kimenő http hívást el tudnak kapni vagy módosítani, így jók pl a token-ek kezelésére

13) Mi a különbség a Subject és a BehaviorSubject között? **(1p)**
a BehaviorSubject-nek tudunk kezdőértéket megadni és ez el is tudja tárolni a kapott értékeit(emlékszik)

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
