import React from 'react';
import Slalom from 'slalom';

import './photos.css';

class Home extends React.Component {
  componentDidMount() {
    Slalom.Serialization.assemble(pagerExample, document.body);

    var contentBox = document.querySelector('.content');
    for (var i = 0; i < 20; i++) {
        var listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.textContent = '#' + (i+1);
        listItem.style.backgroundImage = 'linear-gradient(transparent, transparent 50%, black), url(' + photosModel[i % photosModel.length] + ')';
        contentBox.appendChild(listItem);
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Home;


var photosModel = [
    '/assets/pics/1.jpg',
    '/assets/pics/2.jpg',
    '/assets/pics/3.jpg',
    '/assets/pics/4.jpg',
    '/assets/pics/5.jpg',
    '/assets/pics/6.jpg',
];

var pagerExample = {
    // Create two nested boxes. The outer box is a clip, and the inner box is an image to
    // pan around.
    box: {
        id: "clip",
        className: "clip",
        children: {
            id: "content",
            className: "content"
        }
    },
    constraints: [
        // The clip is going to be 750x150; our boxes are 150x150
        "clip.left == 0",
        "clip.top == 0",
        "clip.right == 750",
        "clip.bottom == 150",
        // Position our content. It's 20 150px wide boxes; 20 * 150 = 3000.
        "content.right == content.left + 3000 !strong",
        "content.left == 0 !weak",
        "content.top == 0",
        "content.bottom == 150"
    ],
    motionConstraints: [
        // Constrain the content's left and right to be within the bounds, then constrain
        // left to be some multiple of 150 to get that pager behavior.
        [ "content.left", "<=", 0, { physicsModel: Slalom.MotionConstraint.criticallyDamped } ],
        [ "content.right", ">=", 750, { physicsModel: Slalom.MotionConstraint.criticallyDamped } ],
        // Use modulo, but don't consider this constraint while dragging (dragging is basically unconstrained)
        // and critically damp it. It feels weird when underdamped (it overshoots when snapping).
        [ "content.left", "%", 150, { overdragCoefficient: 0, physicsModel: Slalom.MotionConstraint.criticallyDamped }]
    ],
    manipulators: [
        // Create a manipulator that listens for events on the box "clip" and manipulates
        // "image.left" and "image.top" for the x and y components of a pan.
        { box: "clip", x: "content.left" }
    ]
}