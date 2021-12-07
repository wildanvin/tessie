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
- Recomended: Tungsten bits (Since you will be engraving in aluminium tungsten bits will last longer)

## A little overvierw of how this works:
At the hearth of tessie (and others CNC machines) is the GRBL controller. GRBL is a firmware that you can install in different boards (like Arduino) to control the motors and spindle of a CNC. It tells the motors exactly where and how fast to move. (When you buy the miniCNC in Aliexpress it already comes with a board with GRBL installed)
For example if you want to move 15 cm in the positive x direction, 10 cm in the negative Y direction and 3 cm in the positive Z direction you have to send to the GRBL board this:

That line in know as gcode. They are a set of instruction on how to move the different components if you send the line:

The engraving motor will start to spin clockwiuse at 14000 RPM (revolutions per minute)
Now that you have your gcode you need some sort of special program that can send that instruction to the GRBL board properly. I suppose there are some that you can use. There is Easel software by inventables wich is an online tool. you can send g code with it. But you can do much more that that. It is really cool. Check it out. Universal Gcode Sender (UGS) adn CNC.js are interfaces that allow you to send the Gcode to the GRBL board.

## Overview of the code in this repo: 
It has basically 3 main components:
The fornt end: Simple vanillaJS that gets the user selected figure and the text (usually the phone nuumber and name of the pet) it is going to engrave

The backend: A simple Express backend that takes the user input, generates the gcode and saves the file in a local folder.+

Send the Gcode to the GRBL board: