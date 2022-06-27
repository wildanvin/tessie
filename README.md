# Tessie

Tessie is a web app that transforms input (letters and numbers) from the user to gcode. It works together with [Universal Gcode Sender](https://winder.github.io/ugs_website/) to send the gcode generated to a mini CNC machine.

So, if you put together Tessie, Universal Gcode Sender and a cheap mini CNC you get an **Automatic Pet Tag Engraver** that runs locally in your machine and doesn't need an internet connection to work.

## How the gcode is generated

I used a simple approach. I downloaded a gcode file for each letter and number used. For example, if you want to engrave the word "HAL", tessie takes the gcode of the letter "H", "A" and "L" and it puts them together in a single file; it adds some more info depending of the tag that you selected and can switch to a smaller template if the word doesn't fit, but the main idea is to concatenate gcode.

The templates used can be found at:

- `templates/template2`
- `templates/template3`

You can preview the gcode (or nc) files with this tool: [NCviewer](https://ncviewer.com/)

## How the gcode is sended

I use puppetter.js to manipulate the web interface provided by UGS and send the file generated. I know this is not the most elegant solution but it works. I made this project while learning HTML, CSS and JS, in the future I will try to improve the code and use React to eliminate redundancy (especially in the front end).

## Instructions

I made an [Instructable](https://www.instructables.com/Automatic-Pet-Tag-Engraver/) on how to set up an Automatic Pet Tag Engraver

## Directory structure

- `ncFiles`: In this folder is where the gcode files created will be stored. You can preview them too using [NCviewer](https://ncviewer.com/).
- `public`: Here are all the Front End files.
- `public/icons`: SVG's with the form of the pet tags.
- `scripts`: javascript files used in the "back end" to generate de gcode.
- `settings`: contains a JSON file with the start settings for each tag.
- `templates`: contains JSON files with the gcode and other info for each simbol used. Tessie uses template2.json and template3.json

## Contact

If you have any issues, suggestions, feedback or ideas feel free to reach out on [twitter](https://twitter.com/wildanvin)
