---
name: "Red Havoc"
start-date: "2015"
end-date: "2015"
source: "https://github.com/MitchLindsay/red-havoc"
screenshots:
  - image: "red-havoc-1.png"
    text: "Moving a Unit"
  - image: "red-havoc-2.png"
    text: "Issuing a Command"
  - image: "red-havoc-3.png"
    text: "Changing Turns"
technologies:
  - "C#"
  - "Unity"
software:
  - "BitBucket"
  - "Git"
  - "GitHub"
  - "Photoshop"
  - "SourceTree"
  - "Unity3D"
  - "Visual Studio"
---
+ Red Havoc is a 2D turn-based strategy game, inspired by [Fire Emblem](https://en.wikipedia.org/wiki/Fire_Emblem) and [Advance Wars](https://en.wikipedia.org/wiki/Advance_Wars). The objective of the game is to gather resources, build units, and defeat all  the enemy forces. Players can move units and assign them commands.
+ Unit movement uses a pathfinding algorithm based on a combination of [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search) to determine which tiles a unit can move to, and the [A* Search Algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm) to determine the shortest path from the unit to its destination.
+ Game and UI states are handled with a state machine. When a state changes, all events (moving a unit, changing turns, panning the camera, etc.) are filtered through an event queue, to ensure that all events happen in the order that they occurred.
