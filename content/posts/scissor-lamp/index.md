+++
date = '2026-04-04T21:45:14+02:00'
draft = false
title = 'Scissor Lamp'
tags = ['lamp', 'LED', '3D print', 'diy']
+++

Last year I discovered the [Robert Skinner](https://www.youtube.com/@Robert_Skinner) youtube channel. It's one of these channel that should be much more followed. Robert has really cool and original ideas, show every problems he encounter, how he resolves them, has great videos editing skills and a totally chill tone. In September 2025, he released a video about a "kinetic lamp". I jumped into it, as with every of his videos, without knowing that before the end of it, I was sure I was going to try to reproduce it. But I had some ideas to try to improve it along the way. Robert started this project as I one day build and finally finished few days later. Spoiler, it took me 4 months. But that's my excuse, I tried to improved it...

I have a thing with lamps. This one is the third I build. My last 3 DIY projects were lamps. But this one feels special. Not only the brushed acrylic diffuse light like nothing else, let see some of the things inside. It also have the scissor mechanism which I find fascinating directly coupled with the intensity of the lamp. It ticks all the boxes for me.

I started watching the video 3 or 4 times in a row. Each step feels doable, but It took time to wrap it entirely in my head. "You don't need to know all the steps to finish it, just what the next step is" as they say.

# CAD / Prototype

So it started with a bit of excitement, diving into an awesome project, and starting being obsessed by it. The first step for me was drawing a segment of this lamp into a CAD software. I came up with my own measurements (a segment is 45X6cm), and 3mm acrylic thickness.

![First CAD screenshot](pics/first.png "First CAD prototype.")

I looked for some online providers. In France there is some obvious platforms with great SEO for laser cut on PMMA, but their prices are exorbitant. I found a small business to order only one segment, to check if everything was good, in the naive hope of using this first one in the final build. My main interrogation was the bending of the end cap. As I does not have a laser cutter, cutting a wood mold at the exact diameter was not possible as in the video. I ordered 6 pieces to try to have 2 usable bent ones. I chose to heat the piece on a round piece of wood I had, and then pressed it into a 3D printed mold. It worked great, but taught me that heat and 3D prints doesn't work together. So, for the other pieces, I will print 2 molds to use them alternatively, and a frozen bottle to cool them down between uses.

The prototype ended great.

![Prototype](pics/proto.png "First prototype.")
![Prototype](pics/bending.jpg "Bending.")

The only problem was weight, more than 400g. This thing was empty, no light, no bolts, and no many other things I had no idea yet but was suspecting. So back to the CAD software, I changed the thickness to 2mm. This is where I learned about parametric modeling. A bit late.

After many modifications, hesitations, problem solving, I had a new drawing, fixing various problems I started discovering.

![CAD](pics/cad.png "Final CAD")


I let you try to find why I have the wavy line on the pivots holes.

# Building the segments

While waiting for my acryltic order, I started printing parts to assemble the segments.

{{< thumb src="pics/blocks.jpg" alt="Printing blocks" >}}
{{< thumb src="pics/insertsOff.jpg" alt="This is going to take some time" >}}
{{< thumb src="pics/insertsDuring.jpg" alt="Clamping the blocks to avoid deformations" >}}
{{< thumb src="pics/insertsIn.jpg" alt="Finished !" >}}
{{< thumb src="pics/round.jpg" alt="Some more !" >}}
{{< thumb src="pics/insertRound.jpg" alt="Done !" >}}

<!--
![Blocks](pics/blocks.jpg "blocks")
![Inserts](pics/insertsOff.jpg "blocks")
![Inserts](pics/insertsDuring.jpg "blocks")
![Inserts](pics/insertsIn.jpg "blocks")
![Round blocks](pics/round.jpg "Round blocks")
![Inserts](pics/insertRound.jpg "More inserts")
-->

Yes, that's a lot of threaded inserts, as I wanted to be able to mount/unmount the segments multiple times without damaging the threads.

Then I started to think about the base mechanism and my first improvement. On his version, Robert fixed one end on the base with a pivot, the other with a slider to allow the movement, but the side effect is that when deployed or folded, the lamp is not centered on the base. Not a huge deal but setting 2 sliders will allow to keep it centered. The problem is, how to center it without having the lamp sliding from right to left on the sliders ? I thought about wire pulley, rack and pignon, but with my limited skills on CAD, a central pivot, with 1 arm on each slider will do the job. So I learn joints, to animate the lamp.

![CAD Animation](pics/animation.mp4) -- Yes, I film my screen

Finally, my order arrived. Clear acrylic, beautifully transparent, meaning one thing, lots of sanding.

![Clear acrylics](pics/clearAcrylics.jpg)
![Sanding.](pics/sanding1.jpg)
![Sanding..](pics/sanding2.jpg)
![Sanding...](pics/sanding3.jpg)

After cleaning the pieces, it was time to start glueing the blocks. I had never used epoxy, and, after trying on one little piece, I decided that it was not going to. It way to slow and messy for what I needed. I chose to use CA glue. On the sanded acrylics it's holding great. I was needing a perfect alignment so I printed some jig

![Glueing](pics/jig1.jpg)
![Glueing](pics/jig2.jpg)
![Glued](pics/glued.jpg)

Then, comes another of my improvement. I wanted the segment to have 2 LED strip each one, one front, one on the back. Thanks to that, while laid against a wall, the light will be bouncing form the back for a softer light. I chose to set the connectors into the round part, to allow the maximum amount of LED strip between the to axis. Actually I picked the dimensions of the segment based on the LED strip cuttable segment.

![Connectors](pics/connectors1.jpg "The connectors to glue")
![Connectors](pics/connectors2.jpg "Glued")

After bending the end cap, I cut them to the correct size, once again with a 3D printed jig, on my tracksaw.

![Glueing](pics/cut.jpg "Cutting the end cap")

Now, begun the assembly.

![Assembly](pics/assembly1.jpg "Begin of assembly") -- I have set 2 strips of aluminium to glue the LEDs on and have better heat dispersion.
![Assembly](pics/assembly2.jpg "Begin of assembly")
![Assembly](pics/assembly3.jpg "Begin of assembly")

# Base mechanism

Now, it's time for the base mechanism. As seen on the previous video, each one is composed of two 10mm aluminium tubes, hold by 3D prints. They are synchronized by the 2 arms mounted on a central pivot. I kept it as simple as my first CAD draft.
![Mechanism](pics/mechanism1.jpg "Base mechanism")
![Mechanism](pics/mechanism2.jpg "Base mechanism")
![Mechanism](pics/mechanism3.jpg "Base mechanism")
![Mechanism](pics/mechanism4.jpg "Base mechanism")
![Mechanism](pics/mechanism5.jpg "Base mechanism")
![Mechanism](pics/mechanism6.mp4 "Base mechanism")

# The electronics

I cut my LED to length, and glued each one one an aluminium strip. I soldered white wire on both end (the shortest possible to not have dangling wire 🤞). For the back top segment, I had to drill a hole into the aluminium and cut the LED to make space for the bold to lock the lamp in place.

![LED](pics/LED1.jpg "Cutting LED")
![LED](pics/LED2.jpg "Glueing LED strips")
![LED](pics/LED3.jpg "Top LED strip")

Then I connected the LED and it was time to see the thing glow.

![LED](pics/LEDConnection.jpg "Connecting the LED")
![LED](pics/LEDConnection2.jpg "Connecting the LED")

Right after that I started seeing false contact when I tried to move the lamp. The wire I cut and soldered on the LED was a bit short as I feared, and the push to release connector I used were not really holding the wire very firmly. So, I needed to find a way to fix that more securly afeter soldering longer wire. I designed a sort of clamp, mounted on the existing pivot with a press fit. A few more threaded insert to install..

![LED](pics/clamp.jpg "Wire clamp")
![LED](pics/clamp2.jpg "Wire clamp")

Then comes my last improvement. I loved the intensity based on the height of the lamp, it's a nice show off. But let's be honest, the lamp is way nicer when fully extended. So being able to extend it to the top and set the intensity as I want should be great. For that I can't use only a potentiometer, I need to combine 1 potentiometer and a controller (an ESP32 C6) to receive the remote commands. So I looked for a dimmable 24v power supply. The plan is to connect the potentiometer to the controller, compute the power wanted, and send it to a DAC module (GP8403 2-Channel I2C 0-10V DAC Module), as the power supply is adjusted with a 0 to 10v input.
Using Claude I computed the rack and pignon teeth parameters to have the 300° of rotation of my potentiometer equivalent to the 55mm sliding of the base.
Two prints later, I finally tested everything, except the remote.

![Circuit](pics/electro.jpg "Final circuit")

# Concrete base

Now that I have a working lamp, the concrete base make so much sens. Rising the lamp takes a bit of strength and the base needs to be quite heavy to stay in place. So I designed the smallest possible concrete base to host the sliders, the power supply and the electronics. I was hopping to have a smooth concrete, and remembered viewing a [Modustrial Maker](https://www.youtube.com/watch?v=a3WpKI0YwNY) video, mentioning a specialized concrete exactly for this, GFRC.
The first step to get there, was the form, made from a sheet of melamine.

![Form](pics/form1.jpg "Form")
![Form](pics/form2.jpg "Silicon")

I bought a GFRC kit, that comes with a calculator for all the ingredients, it was quite easy make the concrete. I opted for white concrete, so I added some black colorant into the mix, and, following a test, I sifted the sand to remove the big grains, and hope it will reduced the orange / yellow tint it had in the concrete.

![Concrete](pics/concrete1.jpg "Sfiting the sand")
![Concrete](pics/concrete2.jpg "Job done, fingers crossed")
![Concrete](pics/concrete3.jpg "Noice")

During the concrete pour, I embedded M6 threaded inserts in each corner of the concrete, allowing me to screw a plywood sheet under the base. I just rooted a groove inside the sheet to allow the electric cord to pass under the base. And then screwing all the electronics onto that plywood sheet.

![Base assembly](pics/baseAssembly1.jpg "Base plywood")
![Base assembly](pics/baseAssembly2.jpg "Base with electronic")
![Base assembly](pics/baseAssembly3.jpg "Perfect fit !")

# The remote

I wanted to have the simplest remote for two reasons, the first one being, I will have to build it, and then, I wanted the simplest possible usage. The idea of having only a knob to turn was nice but I was wondering how to handle the controller and its battery consumption, requiring it to be reading the potentiometer for change quite often. A power switch could fix this, but, switch on a remote before using it feels a bit boring. I then discovered the "momentary buttons". They are switches, that are on when pressed, and off when release. So the plan was this : A remote with a knob to dial the power of the lamp, and a momentary switch to power on and off the remote. Great. I designed the remote with the same textures as the lamp. Blurry transparency, and the black Phillips screws.

![Designing the remote](pics/remoteCAD.png "The remote CAD")

This is the final design, but putting the battery, the ESP32 C6, the potentiometer, the momentary button, and one extra switch on the bottom was not easy. Here's all the prototype I printed to validate each step :

![Designing the remote](pics/remotePrototype.jpg "The remote prototype")

Why an extra switch you might ask ? I planned to recharge the battery through the ESP32 USB-C port, but because the momentary switch was between the battery and the controller, the circuit is opened, and that mean I should have pressed that button for 45 min to recharge the battery. So I added a parallel circuit between the battery / controller, opened by a switch. So when I want to charge the remote, I switch on the remote from the bottom and connect it to the front USB-C port.
Achieving this blurry transparency with a FDM printer is not really doable, so I ordered a resin print of the remote case, and sanded it to match the lamp aesthetics. The result was better than what I could have expected.

![Remote](pics/remoteFinal.jpg "Building the remote")
![Remote](pics/remoteFinal2.jpg "The remote")
![Remote](pics/remoteFinal3.jpg "The remote")
![Remote](pics/remoteFinal4.jpg "The remote")

# Conclusion

This was the best build I've achieve to date. Doing this during the free time I had, and thinking about the problems to solve when I was not was really great. And I had many problems, countless wrong solutions, and a few good ones. Thanks to Robert's great idea and execution, I knew this was possible, I'm not sure I would have tried something like this by my own. There's so many things I haven't described here, like the top lock mechanism to hold the lamp in place, the software, the remote layout etc. Maybe I will add other post for that.

![Beauty shot](pics/beauty1.jpg "Final shot")
![Beauty shot](pics/beauty2.jpg "Final shot")
![Beauty shot](pics/beauty3.jpg "Final shot")
![Beauty shot](pics/beauty4.jpg "Final shot")
![Beauty shot](pics/beauty5.jpg "Final shot")
![Beauty shot](pics/beauty6.jpg "Final shot")
