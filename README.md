# 32th's personal patch repository

## score_uncap
Moves the score cap to (2^31-2) \* 10

## Goast
Stacked on top of lang_en. Makes the character select menu in th17 say Goast

## esc_r
Brings back ESC + R in th17 in the most janky way possible

## LoLChristmas
Mod made by Gastari ported to use thcrap. Readme:
```
======================================
l				     I
l   Legacy of Lunatic Christmas      I
l				     I
======================================

===What is it ?===
This patch is a christmas patch, this means that we tried to add a christmas feel to the game.

===How to install it ?===
// Just remplace the th15.dat in your game's folder with the one contained in the .zip.
// DON'T FORGET TO BACKUP YOUR GAME OR YOUR ORIGINAL th15.dat BEFORE INSTALLING THIS PATCH
Select 32th/LoLChristmas during patch selection in thcrap_configure.exe

===Credits===
This patch was made by Gastari (me) but I was also helped with some amazing peoples so, big thanks to :
Ponyting
Eriniya
Patcheirin
Zang3tsU
Bravinoname
Gerrie333

Have fun with the patch and merry christmas !
```
\- Gastari

## random_sfx
Every time a sound is attempted to be played it's random which sound is played

## WBaDDC
A patch that implements the scoring system of Double Dealing Character in Wily Beast and Weakest Creature. This brings the Touhou community one step closer to making this image real https://cdn.discordapp.com/attachments/692833231229157429/701754087154384976/allhou.png

Differences to real DDC: The patch will completely reset all of it's state (aside from all the score and resources you gained) **every time a stage is started. This includes not only resetting but also stage transitions** (the way this works in detail is that the reset code is executed every time the ecl main enemy is summoned)
