# addingAnimationToTimeline

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-v71zsf)


Adding an animation to Timeline javascript animation in [gsap]

### Scenario: 

timeline has been started in the parent component.
Now animation gets picked up from a child component and some more animation added to it.

#### with useCallback.  (not the only way but it is the cleanest and best way to do this)

- Animation in child component needs to be added to the callback, then put together in parent component's timeline.
timeline save on parent state
- Passing the timeline, instead of a callback: then it cannot use useRef or it may not be available when child component renders for the first time
- not passing the index it will not throw you an error, but it'll mess the animation up if you have more than one thing being animated at a time.
- with a callback you dont have to pass down timeline, just the callback, and index.



