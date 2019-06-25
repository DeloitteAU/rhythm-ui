class ExpandCollapseAnimationController {
    public constructor(el) {
        this._shadowRoot = el.shadowRoot;
        const isOpen = el.open;

        if (this._shadowRoot) {
            this._collapseableEl = this._shadowRoot.querySelector('.details-container');
            this._detailsSlotEl = this._shadowRoot.querySelector('#details-slot');

            if (this._collapseableEl) {
                this._collapseableEl.style.transition = 'height 250ms ease-out'
            }
            
            if (this._detailsSlotEl) {
                this._detailsSlotEl.assignedNodes().forEach((el): void => {
                    el.style.opacity = isOpen ? '1' : '0';
                    el.style.transition = 'opacity 200ms ease-out 250ms';
                });
            }
            
            el.handleExpand = this._triggerExpandAnimation;
            el.handleCollapse = this._triggerCollapseAnimation;
          }
    }

    private _shadowRoot: HTMLElement | null = null;
    private _collapseableEl: HTMLDivElement | null = null;
    private _detailsSlotEl: HTMLSlotElement | null = null;
  
  /**
   * Once the collapse transition is complete we set the content to hidden for AX
   * reasons
   */
  private _collapseTransitionEndHandler = () => {
    if (this._collapseableEl) {
      this._collapseableEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);
      this._collapseableEl.hidden = true;
    }
  }

  /**
   * Once the expand transition is complete, we no longer need to use an inline style to animate
   * the height
   */
  private _expandTransitionEndHandler = () => {
    if (this._collapseableEl) {
      this._collapseableEl.style.height = '';
      this._collapseableEl.removeEventListener('transitionend', this._expandTransitionEndHandler);
    }
  }

  /**
   * Sets height to 0 trigger collapse
   * transition animation
   */
  private _triggerCollapseAnimation(): void {
    // add back height style and then remove on next frame to trigger animation
    requestAnimationFrame((): void => {
      if (this._collapseableEl && this._detailsSlotEl) {
        // remove expand transition listener if it has not already ticked over
        this._collapseableEl.removeEventListener('transitionend', this._expandTransitionEndHandler);

        const sectionHeight = this._collapseableEl.scrollHeight;
        this._collapseableEl.style.height = `${sectionHeight}px`;
        this._detailsSlotEl.assignedNodes().forEach((el: Node): void => {
            el.style.opacity = '0';
        });
        requestAnimationFrame((): void => {
          if (this._collapseableEl) {
            this._collapseableEl.style.height = '0px';
            this._collapseableEl.addEventListener('transitionend', this._collapseTransitionEndHandler);
          }
        })
      }
    })
  }

  /**
   * Sets element height to transition to,
   * once element height is reached it unsets height
   * style
   */
  private _triggerExpandAnimation(): void {
    if (this._collapseableEl && this._detailsSlotEl) {
      // remove collapse transition listener if it has not already ticked over
      this._collapseableEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);

      this._collapseableEl.hidden = false;
      const sectionHeight = this._collapseableEl.scrollHeight;
      this._collapseableEl.style.height = `${sectionHeight}px`;
      this._detailsSlotEl.assignedNodes().forEach((el: Node): void => {
        el.style.opacity = '1';
    });  
      this._collapseableEl.addEventListener('transitionend', this._expandTransitionEndHandler);
    }
  }
}

document.addEventListener('rui-expand-collapse-mounted', (e) => {
  new ExpandCollapseAnimationController(e.target);
})