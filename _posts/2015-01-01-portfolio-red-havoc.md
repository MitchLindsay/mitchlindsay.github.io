---
name: Red Havoc
categories: portfolio
---


<div class="row">
  <div class="col-xs-6 col-md-3">
    <a href="#" class="thumbnail" data-toggle="modal" data-target="#red_havoc_modal1">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot1.png" alt="Moving a Unit">
    </a>
  </div>
  <div class="col-xs-6 col-md-3">
    <a href="#" class="thumbnail" data-toggle="modal" data-target="#red_havoc_modal2">
      <img src="{{ site.url }}/assets/images/red_havoc_screenshot2.png" alt="Issuing a Wait Command">
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
        <h4 class="modal-title" id="myModalLabel">Red Havoc - Moving a Unit</h4>
      </div>
      <div class="modal-body">
        <img src="{{ site.url }}/assets/images/red_havoc_screenshot1.png" alt="Moving a Unit">
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
        <h4 class="modal-title" id="myModalLabel">Red Havoc - Issuing a Command</h4>
      </div>
      <div class="modal-body">
        <img src="{{ site.url }}/assets/images/red_havoc_screenshot2.png" alt="Issuing a Wait Command">
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

**Red Havoc (Tentative Title)** <br />
Work in Progress | 2014-2015<br />
<span class="label label-danger">C#</span>
<span class="label label-danger">Unity</span><br />

* Red Havoc is a 2D turn-based strategy game. It is being developed in Unity with C#
for the PC. The objective of the game is to gather resources, build units, and defeat
all of the enemy forces. The game currently features multiple unit and terrain types, each
with their own unique stats. Players can currently move units and assign them commands.
Combat, unit building, and resource gathering are in the works.

* Unit movement uses a pathfinding algorithm based on a combination of
[Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search) to determine tiles
that a unit can move to, and the [A* Search Algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
to determine the shortest path from the unit to its destination.

* Maps are randomly generated. Currently the map tiles are selected at random using
a random number generator. Once more terrain types are added to the game, a more
sophisticated map generation algorithm will be used to allow for more interesting
map layouts.

* Game and UI states are handled with a state machine. When a state changes, all events
(selecting a unit, changing turns, panning the camera, etc.) are filtered through
an event queue, to ensure that all events happen in the order that they occurred and that they do not
overlap.
