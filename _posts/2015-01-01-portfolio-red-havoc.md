---
name: Red Havoc
categories: portfolio
---


<div class="row">
  <div class="col-xs-6 col-md-3">
    <a href="#" class="thumbnail" data-toggle="modal" data-target="#red_havoc_modal1">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot1.png" alt="Character Movement">
    </a>
  </div>
  <div class="col-xs-6 col-md-3">
    <a href="#" class="thumbnail" data-toggle="modal" data-target="#red_havoc_modal2">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot2.png" alt="Executing a Unit Wait Command">
    </a>
  </div>
  <div class="col-xs-6 col-md-3">
    <a href="#" class="thumbnail" data-toggle="modal" data-target="#red_havoc_modal3">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot3.png" alt="Changing Turns">
    </a>
  </div>
</div>

<!-- Modal 1 -->
<div class="modal fade" id="red_havoc_modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Red Havoc - Character Movement</h4>
      </div>
      <div class="modal-body">
        <img src="{{ site.url }}/assets/images/red_havoc_screenshot1.png" alt="Character Movement">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="red_havoc_modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Red Havoc - Executing a Unit Wait Command</h4>
      </div>
      <div class="modal-body">
        <img src="{{ site.url }}/assets/images/red_havoc_screenshot2.png" alt="Executing a Unit Wait Command">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal 3 -->
<div class="modal fade" id="red_havoc_modal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Red Havoc - Changing Turns</h4>
      </div>
      <div class="modal-body">
        <img src="{{ site.url }}/assets/images/red_havoc_screenshot3.png" alt="Changing Turns">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
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

Maps are randomly generated. Currently, the tiles are only selected using a random number generator.
Future improvements may include noise for map generation.

All events in the game (selecting a unit, changing turns, panning the camera, etc.) are funneled through
an event queue, to ensure that all events happen in the order that they occurred and that they do not
overlap. The game also utilizes a state machine to determine different UI and turn states.

Combat, unit building, and resource gathering are in the works.
