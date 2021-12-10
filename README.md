# tessie 

## What is it? 
Tessie is an automatic pet tag engraver. It is built upon a standard miniCNC that you can buy in AliExpress for about $100. The total cost to make it fully autonomous is $500.

## But why?
Well, as many open source projects I started tessie because the current automatic pet tag engravers are very expensive, at least here in my country (I am from Ecuador) the iMarc is about $4000 and the myFamily is about $7000. In the US you can get an used iMarc for about $1500 when I searched in ebay but with the shipping costs and taxes it ends up costing about $2500. So I decided to make my own. I ended up spending about $500 to make it fully autonomous, but you can run the program in an old computer and connect it to the miniCNC, that way you will only spend about $200. I know that right now tessie is very far from perfect...but hey! it works!... and if you have some comments to make it better don't hesitate to share them with me.

## What you will need?
There are some parts that you will need to buy: 
- End stop switches
- Jumper wires
- Raspberry Pi 3 (if you want to make it fully autonomous)
- 7 inch LCD display (if you want to make it fully autonomous)
- Recomended: Tungsten bits (Since you will be engraving in aluminium, tungsten bits will last longer)

## A little overvierw of how this works:
At the hearth of tessie (and others CNC machines) is the GRBL controller. GRBL is a firmware that you can install in different boards (like Arduino) to control the motors and spindle of a CNC. It tells the motors exactly where and how fast to move. (When you buy the miniCNC in Aliexpress it already comes with a board with GRBL installed)
For example if you just want to move 15 cm in the positive x direction, 10 cm in the negative Y direction you have to send to the GRBL board this:
```
G1 X150.00 Y-100.00 F200.0
```

That line in know as gcode. It doesn't look that intimidating right? Let's start from the beginning:
- G1: This command tells GRBL that motion to a certain position is coming. Especifically G1 is used when you want to move while the spindle is "working".
- X150.00 and Y-100.00: These are the coordinates where you want to move in mm.
- F200.00: This is the feed rate in mm/s. With this command you can control how fast you go.

If you want to turn on the motor you will send:
```
M3 S8000
```
That will start the spindle clockwise at 8000 RPM (revolutions per minute).
And thats it, you can control your CNC to decimals of millimiters with these commands known as gcode.

Ok, now that you have your gcode with all the instructions you need a proper way to send it to the GRBL board. I used Universal Gcode Sender to do that. It works really great, it provides a web interface and CLI that I plan to use in the future.

## What tessie does:

The purpose of tessie is to be a completely autonomous engraving machine. The user will approach to tessie, select the tag figure desired, inser the name and number of the pet and click "Engrave". 

Easel by Inventables: This online program allows you to do much more than just sending gcode. It is a complete suite to desing your carvings in different material with different bits and configurations. You will need to sign up and download the driver, but it is pretty cool, definetely recommended.



## Overview of the code in this repo: 
It has basically 3 main components:
The fornt end: Simple vanillaJS that gets the user selected figure and the text (usually the phone nuumber and name of the pet) it is going to engrave

The backend: A simple Express backend that takes the user input, generates the gcode and saves the file in a local folder.+

Send the Gcode to the GRBL board: