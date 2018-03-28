
# SF's Formal Language

The Language consists of:
* Geometric Objects
  * e.g. Point A,
  * Line AB,
  * Triangle △ ABC
  * Angle ABC
  * Circle ⊙ ABC
* Geometric Operations that take Geometric Objects as arguments to produce new Geometric Objects
  * Line AB = Join(A, B) - Postulate i
  * Indefinite Line AB* = Produce(AB, B) - Postulate ii
  * Circle AB = Describe(A, AB) - Postulate iii


## Proposition 1

Given Line AB, (and hence also Points A and B) construct an equilateral triangle

1. Circle BCD = Describe(A, AB)
2. Circle ACE = Describe(B, AB)
3. Point C = ChooseOneOf(IntersectionsOf(BCD, ACE))
4. Line AC = Join(A, C)
5. Line BC = Join(B, C)
6. Triangle ABC = PolygonFromLines(AB, AC, BC)

Triangle ABC is equilateral


## Proposition 2

From a given point (A) to draw a right line equal to a given finite right line (BC).

1. Line AB = Join(A, B)
2. Triangle ABD = Prop1(AB)
3. Circle ECH = Describe(B, BC)
4. Point E = IntersectionOf(Produce(DB, B), ECH)
5. Circle EFG = Describe(D, DE)
6. Point F = IntersectionOf(Produce(DA, A), EFG)
7. Line AF = Join(A, F)

Line AF = BC


# Proposition 3

Cut a Longer Line (AB) to Make Equal to a Shorter One (CG)

1. Line AD = CopyLineToEnd(CG, A)
2. Circle EDF = Describe(A, AD)
3. Point E = IntersectionOf(EDF, AB)
4. Line AE = Join(A, E)

Line AE = CG


# Proposition 4

Two Triangles are Equal If Two Sides And Angle Between Are Equal

Given Triangle BAC and EDF, that AB = DE, AC = DF and angles BAC = EDF,
we need to show that the triangles are completely equal, i.e. that in addition,
BC = EF.

?


# Proposition 5

Base Interior and Exterior Angles of Isosceles Triangle are Equal

Given Isosceles Triangle ABC (i.e. AB = AC), show that:
* Angle ABC = ACB (internal angles)
* If AB is Produced to AD, and AC Produced to AE, that angle DBC = ECB
(external angles)

1. Point F = SomewhereAlong(BD)
2. Line AF = Join(A, F)
3. Line AG = CopyLineToEndAlong(AF, AE)
4. Point G = OtherEndOf(AG, A)
5. Line BG = Join(B, G)
6. Line CF = Join(C, F)


CopyLineToEndAlong(Line 1, Line 2 (sharing Point P)) == IntersectionOf(Describe(P, Line 1), Line 2)

