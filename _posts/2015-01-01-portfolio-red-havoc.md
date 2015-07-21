---
name: Red Havoc
categories: portfolio
---

<div class="row">
  <div class="col-xs-6 col-md-3">
    <a href="{{ site.url }}/assets/images/red_havoc_screenshot1.png" class="thumbnail">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot1.png" alt="Character Movement">
    </a>
  </div>
  <div class="col-xs-6 col-md-3">
    <a href="{{ site.url }}/assets/images/red_havoc_screenshot2.png" class="thumbnail">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot2.png" alt="Executing a Unit Wait Command">
    </a>
  </div>
  <div class="col-xs-6 col-md-3">
    <a href="{{ site.url }}/assets/images/red_havoc_screenshot3.png" class="thumbnail">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot3.png" alt="Changing Turns">
    </a>
  </div>
</div>

**Red Havoc** <br />
Work in Progress | 2014-2015<br />
<span class="label label-primary">C#</span>
<span class="label label-primary">Unity</span><br />

Red Havoc is a 2D turn-based strategy game, developed in Unity with C# for PC/Mac.
The object of the game is to defeat all of the enemy's units to win. The game features
several unit and terrain types, each with their own unique stats. Players can currently
move units and assign them commands.

Since each terrain type has its own movement cost,
unit movement works by using the [A* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
to generate the shortest path from the selected unit to the mouse cursor. Clicking a tile will
move the unit along this path to its destination.

All events in the game (selecting a unit, changing turns, panning the camera, etc.) are funneled through
an event queue, to ensure that all events happen in the order that they occurred and that they do not
overlap. The game also utilizes a state machine to determine different UI and turn states.

Combat, unit building, and resource gathering are in the works.
