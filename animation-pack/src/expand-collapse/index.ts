import ExpandCollapseAnimationController from './ExpandCollapseAnimationController';

/**
 * Listen for mounting of expand collapse components on the page and 
 * create an animation controller for each one
 */
document.addEventListener('rui-expand-collapse-mounted', (e) => {
  new ExpandCollapseAnimationController(e.target);
})