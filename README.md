# WebGLtesting
Messing about with WebGL, WebVR, and Three.js

In the end, the project will be a page for sharing 360 imagry. There will be a 
paginated list of spheres, selecting one will zoom to a full view. Will support 
WebVR or flat browser rendering.

# Challenges

Currently, I'm using the standard way of rendering a 360 sphere: creating a sphere
mesh and mapping a texture to it. However, I'd like to simplify that to eliminate
the geometry. Not sure if I can do that in the allotted time, so implemented this
first as a fallback based on the Three.js sample.

An interesting paginated view of spheres will be interesting. Haven't decided how
I want these to work yet, but thinking of arranging in a circle with pages, or maybe
an endless loop of some sort. Regardless, will be a good project. (OVerriding scrolling
of a non-linear sequence could be fun.)

I also want to bring some 3D text in, and maybe find a way to make the scene a bit
more interesting, especially in VR.