---
title: "Rapport d'Audit"
description: "Challenge de cracking au BEIZH CTF"
pubDate: "March 26 2023"
heroImage: "/placeholder-hero.jpg"
---
Titles :
[One](http://localhost:3000/blog/zip-plain-text/#TechniqueII)
[Two](#Technique-II-:-Plain-Text)

In this challenge, we are given the file `Rapport_Audit_BreizhCTF.zip`.
The text with the file wasn't revelative about the way to find the solution. It just let us know that the Flag with in the .zip file.

## TechniqueI

I started quickly with a simple technique I knew with lock .zip file, the bruteforce. Thanks to the tool "fcrackzip" we can try in less than 5min all the password made of 7 ascii character. The command used :
    fckrackzip Rapport_Audit_BreizhCTF.zip --7

This didn't work so I tried to use common password, with the same tool you can run bruteforce attack with passwords comming from a .txt file. I went to `https://github.com/praetorian-inc/Hob0Rules` and downloaded the file `rockyou.txt` to run the attack. The command used :
    fcrackzip Rapport_Audit_BreizhCTF.zip -D -p rockyou.txt

This didn't work either so I went to the next step.

## TechniqueII

I remembered that when I tried to open the file with the command `unzip` and I got the following error :
    unzip: cannot find zipfile directory in one of Rapport_Audit_BreizhCTF.zip or
            Rapport_Audit_BreizhCTF.zip.zip, and cannot find Rapport_Audit_BreizhCTF.zip.ZIP, period.