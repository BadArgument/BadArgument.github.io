### 3.2
#### (1)
|A|B|C|f|
|-|-|-|-|
|0|0|0|0|
|0|0|1|1|
|0|1|0|1|
|0|1|1|0|
|1|0|0|1|
|1|0|1|0|
|1|1|0|0|
|1|1|1|1|
#### (2)
|A|B|F1|F2|F3|
|-|-|--|--|--|
|00|00|0|1|0|
|00|01|0|0|1|
|00|10|0|0|1|
|00|11|0|0|1|
|01|00|1|0|0|
|01|01|0|1|0|
|01|10|0|0|1|
|01|11|0|0|1|
|10|00|1|0|0|
|10|01|1|0|0|
|10|10|0|1|0|
|10|11|0|0|1|
|11|00|1|0|0|
|11|01|1|0|0|
|11|10|1|0|0|
|11|11|0|1|0|
### 3.7
#### (2)
记$F=\bar AB+A\bar B$，$G=(\bar A+\bar B)(A+B)$
|A|B|F|G|
|-|-|-|-|
|0|0|0|0|
|0|1|1|1|
|1|0|1|1|
|1|1|0|0|

F,G的真值表相同，等价
#### (4)
记$F=\bar AB+AC+BCD$，$G=(\bar AB+AC)$
|A|B|C|D|F|G|
|-|-|-|-|-|-|
|0|0|0|0|0|0|
|0|0|0|1|0|0|
|0|0|1|0|0|0|
|0|0|1|1|0|0|
|0|1|0|0|1|1|
|0|1|0|1|1|1|
|0|1|1|0|1|1|
|0|1|1|1|1|1|
|1|0|0|0|0|0|
|1|0|0|1|0|0|
|1|0|1|0|1|1|
|1|0|1|1|1|1|
|1|1|0|0|0|0|
|1|1|0|1|0|0|
|1|1|1|0|1|1|
|1|1|1|1|1|1|

F,G的真值表相同，等价
### 3.8
#### (2)
$A+B+\bar A\bar BC\\=A+A\bar BC+B+\bar ABC+ABC+\bar A\bar BC\\=A+B+C$
#### (4)
$ABC+\bar A\bar B\bar C\\=\overline{(\bar A+\bar B+\bar C)(A + B + C)}\\=\overline{A\bar B+A\bar C+\bar AB+B\bar C+\bar AC+\bar BC}\\=\overline{A\bar B+B\bar C+C\bar A}$
#### (6)
$A(\bar C+\bar D)+BC+\bar BD\\=A\bar C+A\bar D+BC+\bar BD\\=A\bar C+A\bar D+BC+\bar BD+CD\\=A+\bar ACD+BC+\bar BD\\=A+BC+\bar BD$
### 3.9
#### (2)
$\overline{\bar A\bar B\bar C}=A+B+C$
#### (4)
$(A+\bar B)(\bar A+C)(B + \bar C)=(A+\bar B)(\bar A+C)$
### 3.10
#### (2)
$\overline F=(A+\bar B+\bar C)(\bar B+C+D)(\bar B+C)\bar D$

$F^*=(\bar A+B+C)(B+\bar C+\bar D)(B + \bar C)D$
#### (4)
$\overline F=\overline{\bar A(B+C)(B+\bar C)A}$

$F^*=\overline{A(\bar B+\bar C)(\bar B+C)\bar A}$
#### (6)
$\overline F=\overline{(\bar A+\bar B)}(\bar C+\bar D)\overline{(\bar A+\bar D)}\overline{(B(A+\bar E)\overline{\bar D\bar E})}$

$F^*=\overline{(A+B)}(C+D)\overline{(A+D)}\overline{(\bar B(\bar A+E)\overline{DE})}$
### 3.11
#### (2)
$\sum{m(4, 5, 6, 7, 8, 9, 10, 11, 15)}$
#### (4)
$\sum{m(2, 3, 4, 6, 7, 11, 12, 14, 15)}$
#### (6)
$\sum{m(1, 3, 6, 7, 8, 9, 11, 14, 15)}$
### 3.12
#### (2)
$\prod{M(0, 1, 2, 3, 12, 13, 14)}$
#### (4)
$\prod{M(0, 1, 5, 8, 9, 10, 13)}$
### 3.13
#### (2)
$\overline F=\sum{m(1,2,5,6)}$
#### (4)
$\overline F=\sum{m(3,4,5,9,11,12,13)}$
#### (6)
$\overline F=\prod{M(0,2,5,6)}$
### 3.14
#### (2)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|0|0|1|0|
|01|0|0|1|1|
|11|0|1|1|1|
|10|0|0|1|0|
#### (4)
||||||
|-|-|-|-|-|
|C\AB|00|01|11|10|
|0|0|0|0|1|
|1|1|1|1|0|
#### (6)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|1|0|1|0|
|01|1|0|1|0|
|11|*|0|*|1|
|10|1|0|*|1|
### 3.20
#### (2)
$F=AC+AB+\bar BC+\bar AB\bar C\\
=A\bar BC+AB\bar C+ABC+\bar A\bar BC+\bar AB\bar C\\
=AB+\bar BC+B\bar C$
#### (4)
$F=A\bar C\bar D+\bar BD+A\bar B+\bar AC+\bar BC\\
=A\bar C\bar D+\bar BD+A\bar B\bar C+A\bar BC+\bar ABC+\bar A\bar BC\\
=\bar BD+A\bar B\bar C+A\bar BC+\bar ABC+\bar A\bar BC\\
=\bar BD+A\bar B+\bar AC$
### 3.21
#### (2)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|1|1|0|0|
|01|1|1|1|1|
|11|1|1|1|0|
|10|1|1|1|0|

$F=\bar A+BC+\bar CD$
#### (4)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|0|0|0|0|
|01|1|1|1|1|
|11|1|1|1|1|
|10|1|1|1|0|

$F=\bar AC+BC+D$
#### (6)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|1|*|*|*|
|01|*|1|0|1|
|11|0|1|*|0|
|10|1|0|0|1|

$F=\bar C\bar D+\bar ABD+\bar B\bar CD+\bar BC\bar D$
#### (8)
||||||
|-|-|-|-|-|
|CD\AB|00|01|11|10|
|00|0|*|*|*|
|01|*|0|1|0|
|11|1|0|*|1|
|10|0|1|1|0|

$F=AB+B\bar D+\bar BCD$
