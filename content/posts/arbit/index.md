+++
date = '2026-09-27T16:40:31+02:00'
draft = false
title = 'ARbit.app'
description = 'Satellite viewer'
tags = ['dev', 'three.js', 'space']
featured_image = 'pics/logo.png'
featured_image_class = 'contain bg-center'
+++

Around 2014 I attended a [NASA Space Apps Challenge](https://www.spaceappschallenge.org/), and the theme was "What if you could know what is happening above your head?". At the end of the two days we ended up with a Google Map showing a moving satellite and its orbit drawn on the map. The satellite list was quite minimal and the map was not really exciting. After this event I decided to continue this project and see what I could achieve.

After a few weeks of coding, I had a nice atmospheric shader, with great textures, and the full [Celestrak](https://celestrak.org/) TLE catalog searchable.

Through the years I revisited this project, refactored it, added new features like the view from a satellite, or the view from the ground using the user's geolocation.

And this year is no different, I totally refactored the website, but I haven't typed a single line of code (well of course I have, but you get the idea). I used Claude Code to restart from the beginning, fixing some approximations I hadn't solved previously. I kept the same UI as I was happy with it, and I found that without a good amount of work, Claude Code designs are quickly identifiable.

So there it is, the Nth iteration of ARbit, with a few new features for now:
 - Showing every satellite above your head
 - Showing all the visible satellites above your head (not quite satisfying for now, but I hope to improve it)

There is one feature I lost from my original "manual" creation. I used [three-geo](https://github.com/w3reality/three-geo) to display a 3D model of the ground when in FPV mode. It wasn't perfect and the textures were not planned to be seen from the ground, but I like this idea and I will certainly try to do something, in a few weeks, or years, as this project seems to follow me.

{{< gallery >}}
{{< thumb src="pics/global.png" >}}
{{< thumb src="pics/night.png" >}}
{{< thumb src="pics/satCam.png" >}}
{{< thumb src="pics/fpv.png">}}
{{< thumb src="pics/UI.png" >}}
{{< /gallery >}}
