+++
date = '2026-04-04T21:45:14+02:00'
draft = false
title = 'Scissor Lamp'
tags = ['lamp', 'LED', '3D print', 'diy']
featured_image = 'pics/beauty1.jpg'
featured_image_class = 'cover bg-center'
+++

Last year I discovered the [Robert Skinner](https://www.youtube.com/@Robert_Skinner)'s youtube channel. It's one of these channel that should be much more followed. Robert has really cool and original ideas, show every problems he encounter, how he resolves them, has great videos editing skills and a totally chill tone. In September 2025, he released a video about a "kinetic lamp". I jumped into it, as with every of his videos, without knowing that before the end of it, I was sure I was going to try to reproduce it. But I had some ideas to try to improve it along the way. Robert started this project as a one day build and finally finished few days later. Spoiler, it took me 4 months. But that's my excuse, I tried to improved it...

I have a thing with lamps. This one is the third I build. My last 3 DIY projects were lamps. But this one feels special. Not only the brushed acrylic diffuse light like nothing else, let see some of the things inside. It also have the scissor mechanism which I find fascinating directly coupled with the intensity of the lamp. It ticks all the boxes for me.

I started watching the video 3 or 4 times in a row. Each step felt doable, but It took time to wrap it entirely in my head. "You don't need to know all the steps to finish it, just what the next step is" as they say.

# CAD / Prototype

So it started with a bit of excitement, diving into an awesome project, and starting being obsessed by it. The first step for me was drawing a segment of this lamp into a CAD software. I came up with my own measurements (a segment is 45X6cm), and 3mm acrylic thickness.

![First CAD screenshot. As every first plan I make, nothing is being kept from that, except one thing, the Phillips screws.](pics/first.png "First CAD prototype.")

I looked for some online providers. In France there is some obvious platforms with great SEO for laser cut on PMMA, but their prices are exorbitant. I found a small business to order only the pieces for one segment, to check if everything was good in the naive hope of using this first one in the final build. My main interrogation was the bending of the end cap. As I does not have a laser cutter, cutting a wood mold at the exact diameter was not possible as in the video. I ordered 6 pieces to try to have 2 usable bent ones. Luckily, I had a 50mm hole saw, allowing me to create a wood cylinder for heating the piece, and then pressed it into a 3D printed mold at the exact size. It worked great, but as I feared, the heat of the acrylic had deformed the mold. So, for the other pieces, I will print 2 molds to use them alternatively, and a frozen bottle to cool them down between uses.

![My DIY bending shop. As the part I was the most afraid of, it went really great. This picture was taken during the real segments building, not the prototype, but it's the only one I have.](pics/bending.jpg "Bending.")

After bending the end cap, I cut them to the correct size, once again with a 3D printed jig, on my tracksaw.

![Cutting the end cap](pics/cut.jpg)

The prototype ended great.

![First prototype segment. This thing is rock solid, but also too heavy.](pics/proto.png "First prototype.")

The only problem was weight, more than 400g. This thing was empty, no light, no bolts, and no many other things I had no idea yet but was suspecting. So back to the CAD software, I changed the thickness to 2mm. This is where I learned about parametric modeling. A bit late, so I restarted my design from scratch.

After many modifications, hesitations, problem solving, I had a new drawing, fixing various problems I started discovering.

![The CAD used to order the PMMA. Yes there is 6 end caps for each segment as I was still expecting some troubles for the bending. It turned out it was quite easy, and I have plenty of these small rectangular pieces left](pics/cad.png)

I let you try to find why there is wavy lines on the pivots holes.

# Building the segments

While waiting for my acrylic order, I started printing parts to assemble the segments.

{{< gallery >}}
{{< thumb src="pics/blocks.jpg" alt="Printing the blocks to hold the pieces together" >}}
{{< thumb src="pics/insertsOff.jpg" alt="This is going to take some time." >}}
{{< thumb src="pics/insertsDuring.jpg" alt="Clamping the blocks to avoid deformations when inserting the heated piece." >}}
{{< thumb src="pics/insertsIn.jpg" alt="Finished !" >}}
{{< thumb src="pics/round.jpg" alt="No ! Some more !" >}}
{{< thumb src="pics/insertRound.jpg" alt="Done !" >}}
{{< /gallery >}}

<!--
![Blocks](pics/blocks.jpg "blocks")
![Inserts](pics/insertsOff.jpg "blocks")
![Inserts](pics/insertsDuring.jpg "blocks")
![Inserts](pics/insertsIn.jpg "blocks")
![Round blocks](pics/round.jpg "Round blocks")
![Inserts](pics/insertRound.jpg "More inserts")
-->

Yes, that's a lot of threaded inserts. You can screw directly into the 3D print but it will not handle multiple assembly very well. I wanted to be able to mount/unmount the segments multiple times, knowing the back and forth that was expecting me, without damaging the threads.

### Waiting for the acrylic pieces

Then I started to think about the base mechanism and my first improvement. On his version, Robert fixed one end of the lamp on the base with a pivot, the other on a slider to allow the movement. But the side effect is that when deployed or folded, the lamp is not centered on the base. Not a huge deal but setting 2 sliders will allow to keep it centered. The problem is, how to center it without having the lamp sliding from right to left on the sliders ? I thought about wire pulley, rack and pignon, but with my limited skills on CAD, a central pivot, with one arm on each slider will do the job. So I learn joints, to animate the lamp.

<!--![CAD Animation](pics/animation.mp4)-->
{{<video src="pics/animation.mp4" alt="Yes, I film my screen">}}

Finally, my order arrived. Clear acrylic, beautifully transparent, meaning one thing, lots of sanding.

![The clean and pristine clear acrylic, ready to be brutally frosted](pics/clearAcrylics.jpg)
{{< gallery >}}
{{< thumb src="pics/sanding1.jpg" alt="I sanded the flat surface with a random orbital sender to a 180 grit." >}}
{{< thumb src="pics/sanding2.jpg" alt="I hand sanded the side by hand" >}}
{{< thumb src="pics/sanding3.jpg" alt="And it was quite messy" >}}
{{< /gallery >}}
<!--
![Sanding.](pics/sanding1.jpg)
![Sanding..](pics/sanding2.jpg)
![Sanding...](pics/sanding3.jpg)
-->

After cleaning the pieces, it was time to start glueing the blocks. I had never used epoxy, and, after trying on one little piece, I decided that it was not going to be today. It was to slow and messy for what I needed. I preferred to use CA glue. On the sanded acrylics it's holding great. I was needing a perfect alignment so I printed some jig for both the small blocks and curved end.

![Glueing the blocks with a 3D printed jig, referencing the axe's hole](pics/jig1.jpg)
{{< gallery >}}
{{< thumb src="pics/jig2.jpg" alt="Glueing the curved end with another 3D printed jig" >}}
{{< thumb src="pics/glued.jpg" alt="Done glueing !" >}}
{{< /gallery >}}
<!--
![Glueing](pics/jig2.jpg)
![Glued](pics/glued.jpg)
-->

Then, comes another of my improvement. I wanted the segment to have 2 LED strip each one, one on the front, one on the back. Thanks to that, while laid against a wall, the light will also be bouncing form the back for a softer light. I chose to set the connectors into the round part, outside of the usable space, to allow the maximum amount of LED strip between the to axis. Actually I picked the dimensions of the segment based on the LED strip cuttable segment.

{{< gallery >}}
{{< thumb src="pics/connectors1.jpg" alt="All the connectors to glue (and sand to give glue something to bond to)" >}}
{{< thumb src="pics/connectors2.jpg" alt="All glued" >}}
{{< /gallery >}}
<!--
![Connectors](pics/connectors1.jpg "The connectors to glue")
![Connectors](pics/connectors2.jpg "Glued")
-->

Now, begun the assembly.

{{< gallery >}}
{{< thumb src="pics/assembly1.jpg" alt="I used 2 strips of aluminium to glue the LEDs on and have better heat dispersion." >}}
{{< thumb src="pics/assembly2.jpg" alt="Segments starts to pile up" >}}
{{< thumb src="pics/assembly3.jpg" alt="A first glance at the final look of the lamp, at this point I was stocked, and convinced the difficulty was behind me. After all, connecting LEDs is not a big deal." >}}
{{< /gallery >}}

<!--
![Assembly](pics/assembly1.jpg "Begin of assembly") -- I have set 2 strips of aluminium to glue the LEDs on and have better heat dispersion.
![Assembly](pics/assembly2.jpg "Begin of assembly")
![Assembly](pics/assembly3.jpg "Begin of assembly")
-->

# Base mechanism

Now, it's time for the base mechanism. As seen on the previous video, each one is composed of two 10mm aluminium tubes, hold by 3D prints. They are synchronized by the 2 arms mounted on a central pivot. I kept it as simple as my first CAD draft.
{{< gallery >}}
{{< thumb src="pics/mechanism1.jpg" alt="Assembling the segment supports" >}}
{{< thumb src="pics/mechanism2.jpg" alt="Printing the parts" >}}
{{< thumb src="pics/mechanism3.jpg" alt="I added some PTFE washers" >}}
{{< thumb src="pics/mechanism4.jpg" alt="Inserting a threaded insert into the central pivot" >}}
{{< thumb src="pics/mechanism5.jpg" alt="The mechanism is complete" >}}
{{<video src="pics/mechanism6.mp4" alt="Seeing the synchronized movement was so satisfying">}}
{{< /gallery >}}

<!--
![Mechanism](pics/mechanism1.jpg "Base mechanism")
![Mechanism](pics/mechanism2.jpg "Base mechanism")
![Mechanism](pics/mechanism3.jpg "Base mechanism")
![Mechanism](pics/mechanism4.jpg "Base mechanism")
![Mechanism](pics/mechanism5.jpg "Base mechanism")
![Mechanism](pics/mechanism6.mp4 "Base mechanism")
-->

# The electronics

I cut my LED to length, and glued each one one an aluminium strip. I soldered white wire on both end (the shortest possible to not have dangling wire 🤞). For the back top segment, I had to drill a hole into the aluminium and cut the LED to make space for the bold to lock the lamp in place.

{{< gallery >}}
{{< thumb src="pics/LED1.jpg" alt="LED strip are cutted, wire soldered, and are glued on the aluminium supports" >}}
{{< thumb src="pics/LED2.jpg" alt="This lamp will be bright !" >}}
{{< thumb src="pics/LED3.jpg" alt="The top LED strip" >}}
{{< /gallery >}}
<!--![LED](pics/LED1.jpg "Cutting LED")
![LED](pics/LED2.jpg "Glueing LED strips")
![LED](pics/LED3.jpg "Top LED strip")
-->

Then I started connected the LED. This step was the most tedious. Because the wires were just long enough, I used tweezers to pass them in the arc shaped hole between segments, and connected them the to connectors, requiring to push on it to open it. All this inside a tiny space, requiring to unscrew 16 screws in the best case, to connect 2 segments. And there is 8 of these...
And it was time to see the thing glow.

{{< gallery >}}
{{< thumb src="pics/LEDConnection.jpg" alt="Connecting the LED" >}}
{{< thumb src="pics/LEDConnection2.jpg" alt="I am getting excited" >}}
{{< /gallery >}}
<!--![LED](pics/LEDConnection.jpg "Connecting the LED")
![LED](pics/LEDConnection2.jpg "Connecting the LED")
-->

Right after that I started seeing false contact when I tried to move the lamp. The wire I cut and soldered on the LED was a bit short as I feared, and the push to release connector I used were not really holding the wire very firmly. So, I needed to find a way to fix that more securely after soldering longer wire. I designed a sort of clamp, mounted on the existing pivot with a press fit.

This mean one thing, a few more threaded insert to install and each connection to be re-made.

![Threaded inserts again](pics/clamp.jpg)
![The clamp in place, holding the wire](pics/clamp2.jpg)


### Dimming the lamp

Then comes my last improvement. I loved the intensity based on the height of the lamp, it's a nice show off. But let's be honest, the lamp is way nicer when fully extended. So being able to extend it to the top and set the intensity as I want should be great. For that I can't use only a potentiometer directly connected on the power. I need to combine the potentiometer with a controller (an ESP32 C6). The controller will compute the intensity based on the position of the lamp, or received from the remote. I used a 24V dimmable power source, controllable through a 0-10V input. I set a DAC module (GP8403 2-Channel I2C 0-10V DAC Module) between the controller (3.3v) and the power supply.

Using Claude I computed the rack and pignon teeth parameters to have the 300° of rotation of my potentiometer equivalent to the 55mm sliding of the base.

Two prints later, I finally tested everything, except the remote.

![Circuit](pics/electro.jpg "Final circuit")

# Concrete base

Now that I have a working lamp, the concrete base make so much sens. Rising the lamp takes a bit of strength and the base needs to be quite heavy to stay in place. So I designed the smallest possible concrete base to host the sliders, the power supply and the electronics. I was hopping to have a smooth concrete, and remembered viewing a [Modustrial Maker](https://www.youtube.com/watch?v=a3WpKI0YwNY) video, mentioning a specialized concrete exactly for this, GFRC.
The first step to get there, was the form, made from a sheet of melamine.

![Form](pics/form1.jpg "Form")
![Form](pics/form2.jpg "Silicon")

I bought a GFRC kit, that comes with a calculator for all the ingredients, it was quite easy to make the concrete. I opted for white concrete and added some black colorant into the mix, and, following a test, I sifted the sand to remove the big grains, hopping it will reduced the orange / yellow tint it had in the concrete.

![Sfiting the sand](pics/concrete1.jpg)
![Job done, fingers crossed](pics/concrete2.jpg)
![Noice](pics/concrete3.jpg)

During the concrete pour, I embedded M6 threaded inserts in each corner of the concrete, allowing me to screw a plywood sheet under the base. I just rooted a groove inside the sheet to allow the electric cord to pass under the base. And then screwing all the electronics onto that plywood sheet.

![Base plywood](pics/baseAssembly1.jpg)
![Base with electronic](pics/baseAssembly2.jpg)
![Perfect fit !](pics/baseAssembly3.jpg)

# The remote

I wanted to have the simplest remote for two reasons, the first one being, I will have to build it, and then, I wanted the easiest possible usage. The idea of having only a knob to turn was nice but I was wondering how to handle the controller and its battery consumption, requiring it to be reading the potentiometer for change quite often. A power switch could fix this, but, switch on a remote before using it feels a bit boring. Then I discovered "momentary buttons". They are switches that are on when pressed, and off when release. So the remote will have a knob to dial the power of the lamp, and a momentary switch to power it on and off. Great. I designed the remote with the same textures as the lamp. Blurry transparency, and the black Phillips screws well visible.

![Designing the remote](pics/remoteCAD.png "The remote CAD")

This is the final design, but putting the battery, the ESP32 C6, the potentiometer, the momentary button, and one extra switch on the bottom was not easy. Here's all the prototype I printed to validate each step :

![Designing the remote](pics/remotePrototype.jpg "The remote prototype")

Why an extra switch you might ask ? I planned to recharge the battery through the ESP32 USB-C port, but because the momentary switch was between the battery and the controller, the circuit is opened, and that mean I should presse that button for 45 minutes to recharge the battery. So I added a parallel circuit between the battery / controller, opened by an on/off switch. So when I want to charge the remote, I switch it on from the bottom and connect it to the front USB-C port.
Achieving this blurry transparency with a FDM printer is not really doable, so I ordered a resin print of the case, and sanded it to match the lamp aesthetics. The result was better than what I could have expected.

{{< gallery >}}
{{< thumb src="pics/remoteFinal.jpg" alt="Transplantation of the electronics to the final case" >}}
{{< thumb src="pics/remoteFinal2.jpg" >}}
{{< thumb src="pics/remoteFinal3.jpg" >}}
{{< thumb src="pics/remoteFinal4.jpg" >}}
{{< /gallery >}}
<!--
![Remote](pics/remoteFinal.jpg "Building the remote")
![Remote](pics/remoteFinal2.jpg "The remote")
![Remote](pics/remoteFinal3.jpg "The remote")
![Remote](pics/remoteFinal4.jpg "The remote")
-->

# Conclusion

This was the best build I've achieved to date. Doing this during the free time I had, and thinking about the problems to solve when I was not, was really great. And I had many problems, countless wrong solutions, and a few good ones. Thanks to Robert's great idea and execution, I knew this was possible, I'm not sure I would have tried something like this by my own. There's so many things I haven't described here, like the top lock mechanism to hold the lamp in place, the software, the remote layout etc. Maybe I will add other post for that.

![Beauty shot](pics/beauty1.jpg "Final shot")

{{< gallery >}}
{{< thumb src="pics/beauty2.jpg" >}}
{{< thumb src="pics/beauty3.jpg" >}}
{{< thumb src="pics/beauty4.jpg" >}}
{{< thumb src="pics/beauty5.jpg" >}}
{{< thumb src="pics/beauty6.jpg" >}}
{{< /gallery >}}
<!--
![Beauty shot](pics/beauty1.jpg "Final shot")
![Beauty shot](pics/beauty2.jpg "Final shot")
![Beauty shot](pics/beauty3.jpg "Final shot")
![Beauty shot](pics/beauty4.jpg "Final shot")
![Beauty shot](pics/beauty5.jpg "Final shot")
![Beauty shot](pics/beauty6.jpg "Final shot")
-->
