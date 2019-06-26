import ExpandCollapseAnimationController from './ExpandCollapseAnimationController';

/**
 * Listen for mounting of expand collapse components on the page and 
 * create an animation controller for each one
 */
if (document) {
  document.addEventListener('rui-expand-collapse-mounted', (e): void => {
    new ExpandCollapseAnimationController(e.target);
  });
}
